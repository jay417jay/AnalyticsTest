var TcHmi;
(function (TcHmi) {
    let Controls;
    (function (Controls) {
        let Analytics;
        (function (Analytics) {
            class ParetoChartControl extends TcHmi.Controls.Analytics.AnalyticsControl {
                ;
                ;
                //#endregion Fields
                //#region Ctor, default overrides (__previnit, ...)
                constructor(element, pcElement, attrs) {
                    super(element, pcElement, attrs);
                    //charttype
                    this.CHART_TYPE = Analytics.E_ChartType.PARETOCHART;
                    /** Keys of not-element-specific localizations */
                    this.__localKeys = {
                        Pareto_Line: 'Pareto_Line',
                        Show_Pareto_Line: 'Show_Pareto_Line',
                        Pareto_Line_Percentage: 'Pareto_Line_Percentage',
                        Pareto_Line_Color: 'Pareto_Line_Color',
                        Hover: 'Hover',
                        Use_Hover_Effect: 'Use_Hover_Effect',
                        Draw_Pareto_Entry: 'Draw_Pareto_Entry',
                        Hoverpoint_Radius: 'Hoverpoint_Radius',
                        Bars: 'Bars',
                        Show_Bar_Label: 'Show_Bar_Label',
                        Draw_Vital_Few: 'Draw_Vital_Few',
                        Draw_X_Grid_Lines: 'Draw_X_Grid_Lines',
                        Draw_Y_Grid_Lines: 'Draw_Y_Grid_Lines',
                        Bar_Gap: 'Bar_Gap',
                        Base_Bar_Color: 'Base_Bar_Color',
                        Vital_Few_Color: 'Vital_Few_Color',
                        Relative_Line: 'Relative_Line',
                        Relative_Line_Color: 'Relative_Line_Color',
                        Bar_Maximization: 'Bar_Maximization',
                        Cumulative_Scaling: 'Cumulative_Scaling',
                        Axes_And_Grid: 'Axes_And_Grid',
                        Y_Axis_Scaling: 'Y_Axis_Scaling'
                    };
                    /** Values for enums used as properties */
                    this.__enumLocalizationValues = {
                        Bar_Maximization: 'Bar Maximization',
                        Cumulative_Scaling: 'Cumulative Scaling'
                    };
                    this.__options = {
                        showParetoLine: false,
                        paretoLinePercentage: 0,
                        showBarLabels: false,
                        data: undefined,
                        channelConfigurations: [],
                        chartType: this.CHART_TYPE,
                        useHoverEffect: false,
                        hoverPointRadius: 0,
                        renderDashedLineForXAxisTicks: false,
                        renderDashedLineForYAxisTicks: false,
                        yAxisPosition: Analytics.YAxisPosition.Right,
                        paretoMode: E_ParetoMode.Count,
                        isTimeValue: false,
                        description: "",
                        labelSuffix: "",
                        axes: null, // @FinnK: Please check if this property is useful for the pareto-chart as well
                        gap: 0,
                        paretoLineColor: "",
                        baseBarColor: "",
                        drawVitalFew: false,
                        vitalFewColor: "",
                        xyLineColor: "",
                        drawParetoEntry: false,
                        yAxisScaling: E_ParetoYAxisScaling.CUMULATIVE_SCALING,
                        channelColorReducer: 0,
                        strokeDasharray: "",
                        strokeWidth: "",
                        channelClickedCallback: (i) => { this.__updateOptions(); },
                        showDifferentials: false
                    };
                    this.__onResolverForChannelNamesWatchCallback = (data) => {
                        if (!this.__isAttached) { // While not attached attribute should only be processed once during initializing phase.
                            this.__suspendObjectResolver('ChannelNames');
                        }
                        if (tchmi_equal(data.value, this.__channelNamesResolved)) {
                            return;
                        }
                        this.__channelNamesResolved = data.value || null;
                        TcHmi.EventProvider.raise(`${this.__id}.onFunctionResultChanged`, ['getChannelNamesResolved']);
                        this.__processChannelNames();
                    };
                    this.__onResolverForRelativeValuesWatchCallback = (data) => {
                        if (!this.__isAttached) { // While not attached attribute should only be processed once during initializing phase.
                            this.__suspendObjectResolver('RelativeValues');
                        }
                        if (tchmi_equal(data.value, this.__relativeValuesResolved)) {
                            return;
                        }
                        this.__relativeValuesResolved = data.value || [];
                        TcHmi.EventProvider.raise(`${this.__id}.onFunctionResultChanged`, ['getRelativeValuesResolved']);
                        this.__processRelativeValues();
                    };
                    this.__onResolverForAbsoluteValuesWatchCallback = (data) => {
                        if (!this.__isAttached) { // While not attached attribute should only be processed once during initializing phase.
                            this.__suspendObjectResolver('AbsoluteValues');
                        }
                        if (tchmi_equal(data.value, this.__absoluteValuesResolvedInternal)) {
                            return;
                        }
                        this.__absoluteValuesResolvedInternal = data.value || [];
                        if (this.__paretoMode === E_ParetoMode.Timespan) {
                            this.__absoluteValuesResolved = this.__absoluteValuesResolvedInternal.map(x => x / 1000000);
                        }
                        else {
                            this.__absoluteValuesResolved = this.__absoluteValuesResolvedInternal;
                        }
                        TcHmi.EventProvider.raise(`${this.__id}.onFunctionResultChanged`, ['getAbsoluteValuesResolved']);
                        this.__processAbsoluteValues();
                    };
                    /** Dark Mode */
                    this.__darkMode = false;
                    //#endregion Overrides
                    //#region EventHandlers / Callbacks
                    this.__onResized = () => {
                        return (evt, ctrl) => {
                            let scaleFactor = super.__getScaleFactors();
                            if (this.__hasLicense == false) {
                                return;
                            }
                            if (!this.__isValid())
                                return;
                            this.__setChartSize();
                        };
                    };
                }
                __previnit() {
                    super.__previnit();
                    if (this.__hasLicense == false) {
                        return;
                    }
                    this.__defaultWidth = 400;
                    this.__defaultHeight = 400;
                    this.__elChartContainer = this.__elementTemplateRoot.find('.tchmi-analytics-chart-container');
                }
                __initEditableProperties() {
                    const index = this.__editAreaItems.indexOf(this.__scalingEditArea);
                    if (index > -1) {
                        this.__editAreaItems.splice(index, 1);
                    }
                    const scaling1 = new Analytics.EditAreaItem('', this.local.get(this.__localKeys.Cumulative_Scaling), 'url("/Beckhoff.TwinCAT.HMI.Analytics.Controls/ParetoChartControl/Images/CumulativeScaling.png")', null, () => { this.__setYAxisScalingPersistent(this.__enumLocalizationValues.Cumulative_Scaling); });
                    const scaling2 = new Analytics.EditAreaItem('', this.local.get(this.__localKeys.Bar_Maximization), 'url("/Beckhoff.TwinCAT.HMI.Analytics.Controls/ParetoChartControl/Images/BarMaximization.png")', null, () => { this.__setYAxisScalingPersistent(this.__enumLocalizationValues.Bar_Maximization); });
                    const scalingOptions = [scaling1, scaling2];
                    this.__scalingEditArea = new Analytics.EditAreaItem('', this.local.get(this.__localKeys.Y_Axis_Scaling), 'url("/Beckhoff.TwinCAT.HMI.Analytics.Controls/ParetoChartControl/Images/Scaling.png")', null, null, scalingOptions);
                    this.__editAreaItems.push(this.__scalingEditArea);
                    super.__createEditArea(this.__editAreaItems);
                    let properties = [];
                    properties.push(new Analytics.Property(this, "ParetoLine", this.local.get(this.__localKeys.Pareto_Line), Analytics.E_DataType.CONTENTSEPARATOR, { comboBoxOptions: [{ displayName: this.local.get(this.__localKeys.Pareto_Line), value: this.local.get(this.__localKeys.Pareto_Line) }], allowPersist: false, allowReset: false }));
                    properties.push(new Analytics.Property(this, "ShowParetoLine", this.local.get(this.__localKeys.Show_Pareto_Line), Analytics.E_DataType.BOOLEAN));
                    properties.push(new Analytics.Property(this, "ParetoLinePercentage", this.local.get(this.__localKeys.Pareto_Line_Percentage), Analytics.E_DataType.INTEGER));
                    properties.push(new Analytics.Property(this, "ParetoLineColor", this.local.get(this.__localKeys.Pareto_Line_Color), Analytics.E_DataType.SOLIDCOLOR));
                    //axes and grid
                    properties.push(new Analytics.Property(this, "AxesAndGrid", this.local.get(this.__localKeys.Axes_And_Grid), Analytics.E_DataType.CONTENTSEPARATOR, { comboBoxOptions: [{ displayName: this.local.get(this.__localKeys.Axes_And_Grid), value: this.local.get(this.__localKeys.Axes_And_Grid) }], allowPersist: false, allowReset: false }));
                    properties.push(new Analytics.Property(this, "YAxisScaling", this.local.get(this.__localKeys.Y_Axis_Scaling), Analytics.E_DataType.COMBOBOX, {
                        comboBoxOptions: [
                            { displayName: this.local.get(this.__localKeys.Cumulative_Scaling), value: this.__enumLocalizationValues.Cumulative_Scaling },
                            { displayName: this.local.get(this.__localKeys.Bar_Maximization), value: this.__enumLocalizationValues.Bar_Maximization }
                        ]
                    }));
                    properties.push(new Analytics.Property(this, "DrawXGridLines", this.local.get(this.__localKeys.Draw_X_Grid_Lines), Analytics.E_DataType.BOOLEAN));
                    properties.push(new Analytics.Property(this, "DrawYGridLines", this.local.get(this.__localKeys.Draw_Y_Grid_Lines), Analytics.E_DataType.BOOLEAN));
                    properties.push(new Analytics.Property(this, "Bars", this.local.get(this.__localKeys.Bars), Analytics.E_DataType.CONTENTSEPARATOR, { comboBoxOptions: [{ displayName: this.local.get(this.__localKeys.Bars), value: this.local.get(this.__localKeys.Bars) }], allowPersist: false, allowReset: false }));
                    properties.push(new Analytics.Property(this, "ShowBarLabel", this.local.get(this.__localKeys.Show_Bar_Label), Analytics.E_DataType.BOOLEAN));
                    properties.push(new Analytics.Property(this, "DrawVitalFew", this.local.get(this.__localKeys.Draw_Vital_Few), Analytics.E_DataType.BOOLEAN));
                    properties.push(new Analytics.Property(this, "BarGap", this.local.get(this.__localKeys.Bar_Gap), Analytics.E_DataType.INTEGER));
                    properties.push(new Analytics.Property(this, "BaseBarColor", this.local.get(this.__localKeys.Base_Bar_Color), Analytics.E_DataType.SOLIDCOLOR));
                    properties.push(new Analytics.Property(this, "VitalFewColor", this.local.get(this.__localKeys.Vital_Few_Color), Analytics.E_DataType.SOLIDCOLOR));
                    properties.push(new Analytics.Property(this, "RelativeLine", this.local.get(this.__localKeys.Relative_Line), Analytics.E_DataType.CONTENTSEPARATOR, { comboBoxOptions: [{ displayName: this.local.get(this.__localKeys.Relative_Line), value: this.local.get(this.__localKeys.Relative_Line) }], allowPersist: false, allowReset: false }));
                    properties.push(new Analytics.Property(this, "RelativeLineColor", this.local.get(this.__localKeys.Relative_Line_Color), Analytics.E_DataType.SOLIDCOLOR));
                    properties.push(new Analytics.Property(this, "Hover", this.local.get(this.__localKeys.Hover), Analytics.E_DataType.CONTENTSEPARATOR, { comboBoxOptions: [{ displayName: this.local.get(this.__localKeys.Hover), value: this.local.get(this.__localKeys.Hover) }], allowPersist: false, allowReset: false }));
                    properties.push(new Analytics.Property(this, "UseHoverEffect", this.local.get(this.__localKeys.Use_Hover_Effect), Analytics.E_DataType.BOOLEAN));
                    properties.push(new Analytics.Property(this, "DrawParetoEntry", this.local.get(this.__localKeys.Draw_Pareto_Entry), Analytics.E_DataType.BOOLEAN));
                    properties.push(new Analytics.Property(this, "HoverpointRadius", this.local.get(this.__localKeys.Hoverpoint_Radius), Analytics.E_DataType.NUMBER));
                    super.setEditableProperties(properties);
                }
                __init() {
                    // has to be done before super init call (needed to read custom values)
                    //this.__initEditableProperties();
                    super.__init();
                    this.__initCharting();
                }
                __attach() {
                    super.__attach();
                    if (this.__isDarkTheme) //if analytics theme is active, set it to true regardless of checkbox in engineering
                        this.setDarkMode(true);
                }
                __detach() {
                    super.__detach();
                }
                destroy() {
                    if (this.__keepAlive) {
                        return;
                    }
                    super.destroy();
                }
                setParetoMode(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toString(valueNew);
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal('ParetoMode');
                    }
                    if (convertedValue === this.__paretoModeInternal) {
                        return;
                    }
                    this.__paretoModeInternal = convertedValue;
                    TcHmi.EventProvider.raise(`${this.__id}.onFunctionResultChanged`, ['getParetoMode']);
                    this.__processParetoMode();
                }
                getParetoMode() {
                    return this.__paretoModeInternal;
                }
                __processParetoMode() {
                    switch (this.__paretoModeInternal) {
                        case "Default":
                            this.__paretoMode = E_ParetoMode.Count;
                            break;
                        case "Timespan":
                            this.__paretoMode = E_ParetoMode.Timespan;
                            break;
                        default:
                            this.__paretoMode = E_ParetoMode.Count;
                            break;
                    }
                    if (this.__absoluteValuesResolvedInternal != null && this.__paretoMode === E_ParetoMode.Timespan) {
                        this.__absoluteValuesResolved = this.__absoluteValuesResolvedInternal.map(x => x / 1000000);
                    }
                    else {
                        this.__absoluteValuesResolved = this.__absoluteValuesResolvedInternal;
                    }
                    this.__options.paretoMode = this.__paretoMode;
                    this.__dataCharting();
                }
                setDrawXGridLines(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toBoolean(valueNew);
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal('DrawXGridLines');
                    }
                    if (convertedValue === this.__drawXGridLines) {
                        return;
                    }
                    this.__drawXGridLines = convertedValue;
                    TcHmi.EventProvider.raise(`${this.__id}.onFunctionResultChanged`, ['getDrawXGridLines']);
                    this.__processDrawXGridLines();
                }
                getDrawXGridLines() {
                    return this.__drawXGridLines;
                }
                __processDrawXGridLines() {
                    this.__options.renderDashedLineForXAxisTicks = this.__drawXGridLines;
                    this.__dataCharting();
                }
                setDrawYGridLines(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toBoolean(valueNew);
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal('DrawYGridLines');
                    }
                    if (convertedValue === this.__drawYGridLines) {
                        return;
                    }
                    this.__drawYGridLines = convertedValue;
                    TcHmi.EventProvider.raise(`${this.__id}.onFunctionResultChanged`, ['getDrawYGridLines']);
                    this.__processDrawYGridLines();
                }
                getDrawYGridLines() {
                    return this.__drawYGridLines;
                }
                __processDrawYGridLines() {
                    this.__options.renderDashedLineForYAxisTicks = this.__drawYGridLines;
                    this.__dataCharting();
                }
                setYAxisScaling(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toString(valueNew);
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal('YAxisScaling');
                    }
                    if (convertedValue === this.__yAxisScalingInternal) {
                        return;
                    }
                    this.__yAxisScalingInternal = convertedValue;
                    TcHmi.EventProvider.raise(`${this.__id}.onFunctionResultChanged`, ['getYAxisScaling']);
                    this.__processYAxisScaling();
                }
                getYAxisScaling() {
                    return this.__yAxisScalingInternal;
                }
                __processYAxisScaling() {
                    switch (this.__yAxisScalingInternal) {
                        case this.__enumLocalizationValues.Bar_Maximization:
                            this.__yAxisScaling = E_ParetoYAxisScaling.BAR_MAXIMIZATION;
                            break;
                        case this.__enumLocalizationValues.Cumulative_Scaling:
                        default:
                            this.__yAxisScaling = E_ParetoYAxisScaling.CUMULATIVE_SCALING;
                            break;
                    }
                    this.__options.yAxisScaling = this.__yAxisScaling;
                    this.__dataCharting();
                }
                __setYAxisScalingPersistent(value) {
                    const prop = new Analytics.Property(this, "YAxisScaling", this.__localKeys.Y_Axis_Scaling, Analytics.E_DataType.STRING);
                    this.__setPropertyPersistent(prop, value);
                }
                setChannelNames(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal('ChannelNames');
                    }
                    if (convertedValue === this.__channelNames) {
                        return;
                    }
                    this.__channelNames = convertedValue;
                    const resolverInfo = this.__objectResolvers.get('ChannelNames');
                    if (resolverInfo) {
                        if (resolverInfo.watchDestroyer) {
                            resolverInfo.watchDestroyer();
                        }
                        resolverInfo.resolver.destroy();
                    }
                    const resolver = new TcHmi.Symbol.ObjectResolver(convertedValue);
                    this.__objectResolvers.set('ChannelNames', {
                        resolver: resolver,
                        watchCallback: this.__onResolverForChannelNamesWatchCallback,
                        watchDestroyer: resolver.watch(this.__onResolverForChannelNamesWatchCallback)
                    });
                }
                getChannelNames() {
                    return this.__channelNames;
                }
                __processChannelNames() {
                    if (!this.__isValid())
                        return;
                    this.__initCharting();
                    this.__dataCharting();
                }
                setRelativeValues(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal('RelativeValues');
                    }
                    if (convertedValue === this.__relativeValues) {
                        return;
                    }
                    this.__relativeValues = convertedValue;
                    const resolverInfo = this.__objectResolvers.get('RelativeValues');
                    if (resolverInfo) {
                        if (resolverInfo.watchDestroyer) {
                            resolverInfo.watchDestroyer();
                        }
                        resolverInfo.resolver.destroy();
                    }
                    const resolver = new TcHmi.Symbol.ObjectResolver(convertedValue);
                    this.__objectResolvers.set('RelativeValues', {
                        resolver: resolver,
                        watchCallback: this.__onResolverForRelativeValuesWatchCallback,
                        watchDestroyer: resolver.watch(this.__onResolverForRelativeValuesWatchCallback)
                    });
                }
                getRelativeValues() {
                    return this.__relativeValues;
                }
                __processRelativeValues() {
                    var _a;
                    this.__updateOptions();
                    if (!this.__isValid())
                        return;
                    if (this.__elParetoChartCtrl == null)
                        this.__initCharting();
                    if (!((_a = this.__elParetoChartCtrl) === null || _a === void 0 ? void 0 : _a.redrawChart(this.__options.data)))
                        this.__dataCharting(); //if redraw failed draw entire chart again
                }
                setAbsoluteValues(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal('AbsoluteValues');
                    }
                    if (convertedValue === this.__absoluteValues) {
                        return;
                    }
                    this.__absoluteValues = convertedValue;
                    const resolverInfo = this.__objectResolvers.get('AbsoluteValues');
                    if (resolverInfo) {
                        if (resolverInfo.watchDestroyer) {
                            resolverInfo.watchDestroyer();
                        }
                        resolverInfo.resolver.destroy();
                    }
                    const resolver = new TcHmi.Symbol.ObjectResolver(convertedValue);
                    this.__objectResolvers.set('AbsoluteValues', {
                        resolver: resolver,
                        watchCallback: this.__onResolverForAbsoluteValuesWatchCallback,
                        watchDestroyer: resolver.watch(this.__onResolverForAbsoluteValuesWatchCallback)
                    });
                }
                getAbsoluteValues() {
                    return this.__absoluteValues;
                }
                __processAbsoluteValues() {
                    var _a;
                    this.__updateOptions();
                    if (!this.__isValid())
                        return;
                    if (this.__elParetoChartCtrl == null)
                        this.__initCharting();
                    if (!((_a = this.__elParetoChartCtrl) === null || _a === void 0 ? void 0 : _a.redrawChart(this.__options.data)))
                        this.__dataCharting(); //if redraw failed draw entire chart again
                }
                setShowParetoLine(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toBoolean(valueNew);
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal('ShowParetoLine');
                    }
                    if (convertedValue === this.__showParetoLine) {
                        return;
                    }
                    this.__showParetoLine = convertedValue;
                    TcHmi.EventProvider.raise(`${this.__id}.onFunctionResultChanged`, ['getShowParetoLine']);
                    this.__processShowParetoLine();
                }
                getShowParetoLine() {
                    return this.__showParetoLine;
                }
                __processShowParetoLine() {
                    this.__options.showParetoLine = this.__showParetoLine;
                    this.__setBarColor();
                    this.__dataCharting();
                }
                setParetoLinePercentage(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toNumber(valueNew);
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal('ParetoLinePercentage');
                    }
                    if (convertedValue === this.__paretoLinePercentage || convertedValue < 0 || convertedValue > 100) {
                        return;
                    }
                    this.__paretoLinePercentage = convertedValue;
                    TcHmi.EventProvider.raise(`${this.__id}.onFunctionResultChanged`, ['getParetoLinePercentage']);
                    this.__processParetoLinePercentage();
                }
                getParetoLinePercentage() {
                    return this.__paretoLinePercentage;
                }
                __processParetoLinePercentage() {
                    this.__options.paretoLinePercentage = this.__paretoLinePercentage;
                    this.__setBarColor();
                    this.__dataCharting();
                }
                setBarGap(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toNumber(valueNew);
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal('BarGap');
                    }
                    if (convertedValue === this.__barGap || convertedValue < 0) {
                        return;
                    }
                    this.__barGap = convertedValue;
                    TcHmi.EventProvider.raise(`${this.__id}.onFunctionResultChanged`, ['getBarGap']);
                    this.__processBarGap();
                }
                getBarGap() {
                    return this.__barGap;
                }
                __processBarGap() {
                    this.__options.gap = this.__barGap;
                    this.__dataCharting();
                }
                setShowBarLabel(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toBoolean(valueNew);
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal('ShowBarLabel');
                    }
                    if (convertedValue === this.__showBarLabel) {
                        return;
                    }
                    this.__showBarLabel = convertedValue;
                    TcHmi.EventProvider.raise(`${this.__id}.onFunctionResultChanged`, ['getShowBarLabel']);
                    this.__processShowBarLabel();
                }
                getShowBarLabel() {
                    return this.__showBarLabel;
                }
                __processShowBarLabel() {
                    this.__options.showBarLabels = this.__showBarLabel;
                    this.__dataCharting();
                }
                setParetoLineColor(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal('ParetoLineColor');
                    }
                    if (convertedValue === this.__paretoLineColor) {
                        return;
                    }
                    this.__paretoLineColor = convertedValue;
                    TcHmi.EventProvider.raise(`${this.__id}.onFunctionResultChanged`, ['getParetoLineColor']);
                    this.__processParetoLineColor();
                }
                getParetoLineColor() {
                    return this.__paretoLineColor;
                }
                __processParetoLineColor() {
                    this.__options.paretoLineColor = this.__paretoLineColor.color;
                    this.__dataCharting();
                }
                setBaseBarColor(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal('BaseBarColor');
                    }
                    if (convertedValue === this.__baseBarColor) {
                        return;
                    }
                    this.__baseBarColor = convertedValue;
                    TcHmi.EventProvider.raise(`${this.__id}.onFunctionResultChanged`, ['getBaseBarColor']);
                    this.__processBaseBarColor();
                }
                getBaseBarColor() {
                    return this.__baseBarColor;
                }
                __processBaseBarColor() {
                    this.__options.baseBarColor = this.__baseBarColor.color;
                    this.__setBarColor();
                    this.__dataCharting();
                }
                setVitalFewColor(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal('VitalFewColor');
                    }
                    if (convertedValue === this.__vitalFewColor) {
                        return;
                    }
                    this.__vitalFewColor = convertedValue;
                    TcHmi.EventProvider.raise(`${this.__id}.onFunctionResultChanged`, ['getVitalFewColor']);
                    this.__processVitalFewColor();
                }
                getVitalFewColor() {
                    return this.__vitalFewColor;
                }
                __processVitalFewColor() {
                    this.__options.vitalFewColor = this.__vitalFewColor.color;
                    this.__setBarColor();
                    this.__dataCharting();
                }
                setDrawVitalFew(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toBoolean(valueNew);
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal('DrawVitalFew');
                    }
                    if (convertedValue === this.__drawVitalFew) {
                        return;
                    }
                    this.__drawVitalFew = convertedValue;
                    TcHmi.EventProvider.raise(`${this.__id}.onFunctionResultChanged`, ['getDrawVitalFew']);
                    this.__processDrawVitalFew();
                }
                getDrawVitalFew() {
                    return this.__drawVitalFew;
                }
                __processDrawVitalFew() {
                    this.__options.drawVitalFew = this.__drawVitalFew;
                    this.__setBarColor();
                    this.__dataCharting();
                }
                setRelativeLineColor(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal('LineColor');
                    }
                    if (convertedValue === this.__relativeLineColor) {
                        return;
                    }
                    this.__relativeLineColor = convertedValue;
                    TcHmi.EventProvider.raise(`${this.__id}.onFunctionResultChanged`, ['getLineColor']);
                    this.__processRelativeLineColor();
                }
                getRelativeLineColor() {
                    return this.__relativeLineColor;
                }
                __processRelativeLineColor() {
                    this.__options.xyLineColor = this.__relativeLineColor.color;
                    this.__dataCharting();
                }
                setHoverpointRadius(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toNumber(valueNew);
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal('HoverpointRadius');
                    }
                    if (convertedValue === this.__hoverpointRadius) {
                        return;
                    }
                    this.__hoverpointRadius = convertedValue;
                    TcHmi.EventProvider.raise(`${this.__id}.onFunctionResultChanged`, ['getHoverpointRadius']);
                    this.__processHoverPointRadius();
                }
                getHoverpointRadius() {
                    return this.__hoverpointRadius;
                }
                __processHoverPointRadius() {
                    this.__options.hoverPointRadius = this.__hoverpointRadius;
                    this.__dataCharting();
                }
                setUseHoverEffect(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toBoolean(valueNew);
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal('UseHoverEffect');
                    }
                    if (convertedValue === this.__useHoverEffect) {
                        return;
                    }
                    this.__useHoverEffect = convertedValue;
                    TcHmi.EventProvider.raise(`${this.__id}.onFunctionResultChanged`, ['getUseHoverEffect']);
                    this.__processUseHoverEffect();
                }
                getUseHoverEffect() {
                    return this.__useHoverEffect;
                }
                __processUseHoverEffect() {
                    this.__options.useHoverEffect = this.__useHoverEffect;
                    this.__dataCharting();
                }
                setDrawParetoEntry(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toBoolean(valueNew);
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal('DrawParetoEntry');
                    }
                    if (convertedValue === this.__drawParetoEntry) {
                        return;
                    }
                    this.__drawParetoEntry = convertedValue;
                    TcHmi.EventProvider.raise(`${this.__id}.onFunctionResultChanged`, ['getDrawParetoEntry']);
                    this.__processDrawParetoEntry();
                }
                getDrawParetoEntry() {
                    return this.__drawParetoEntry;
                }
                __processDrawParetoEntry() {
                    this.__options.drawParetoEntry = this.__drawParetoEntry;
                    this.__dataCharting();
                }
                //#region Alias Properties
                //#endregion Alias Properties
                //#endregion Properties
                //#region Methods
                __setBarColor() {
                    let i = 0;
                    for (let channel of this.__options.channelConfigurations) {
                        channel.varColor = this.__options.baseBarColor;
                        if (this.__options.drawVitalFew && this.__options.data.data[1].values[i] <= this.__options.paretoLinePercentage) { //check if the relative value of current channel is smaller than the pareto line percentage
                            channel.varColor = this.__options.vitalFewColor;
                        }
                        i++;
                    }
                }
                __updateOptions() {
                    if (!this.getIsInitialized())
                        return;
                    if (this.__channelNamesResolved == null)
                        return;
                    var rawData = {};
                    var channels = [];
                    var symbols = [];
                    let i = 0;
                    let relOffset = 0;
                    let relativeValuesWithOffset = [...this.__relativeValuesResolved];
                    for (const channelName of this.__channelNamesResolved) {
                        let visible = true;
                        if (this.__options.channelConfigurations[i] != null)
                            visible = this.__options.channelConfigurations[i].isVisible;
                        symbols.push({ source: "Empty", name: channelName });
                        channels.push({ isFilled: false, isVisible: visible, name: channelName, sourceID: "Empty", varColor: this.__baseBarColor.color });
                        if (!visible) {
                            const span = i == 0 ? this.__relativeValuesResolved[i] : this.__relativeValuesResolved[i] - this.__relativeValuesResolved[i - 1];
                            relOffset += span;
                        }
                        relativeValuesWithOffset[i] -= relOffset;
                        i++;
                    }
                    rawData.symbols = symbols;
                    var data = [];
                    var absDataEntries = {};
                    absDataEntries.timestamp = null;
                    absDataEntries.values = this.__absoluteValuesResolved;
                    data.push(absDataEntries);
                    var relDataEntries = {};
                    relDataEntries.timestamp = null;
                    relDataEntries.values = relativeValuesWithOffset;
                    data.push(relDataEntries);
                    rawData.data = data;
                    this.__options.channelConfigurations = channels;
                    this.__options.data = rawData;
                    this.__updateOptionsWithoutData();
                }
                __updateOptionsWithoutData() {
                    this.__options.gap = this.__barGap;
                    this.__options.useHoverEffect = this.__useHoverEffect;
                    this.__options.chartType = this.CHART_TYPE;
                    this.__options.hoverPointRadius = this.__hoverpointRadius;
                    this.__options.renderDashedLineForXAxisTicks = this.__drawXGridLines;
                    this.__options.renderDashedLineForYAxisTicks = this.__drawYGridLines;
                    this.__options.showBarLabels = this.__showBarLabel;
                    this.__options.showParetoLine = this.__showParetoLine;
                    this.__options.paretoLinePercentage = this.__paretoLinePercentage;
                    this.__options.drawVitalFew = this.__drawVitalFew;
                    this.__options.vitalFewColor = this.__vitalFewColor.color;
                    this.__options.baseBarColor = this.__baseBarColor.color;
                    this.__options.paretoLineColor = this.__paretoLineColor.color;
                    this.__options.xyLineColor = this.__relativeLineColor.color;
                    this.__options.drawParetoEntry = this.__drawParetoEntry;
                    this.__options.yAxisScaling = this.__yAxisScaling;
                    this.__options.channelColorReducer = 0;
                    this.__setBarColor();
                }
                __initCharting() {
                    if (this.__channelNamesResolved == null)
                        return;
                    this.__updateOptions();
                    this.__elParetoChartCtrl = TcHmi.Controls.get(`${this.__id}_Charting`);
                    if (this.__elParetoChartCtrl === undefined) {
                        this.__elParetoChartCtrl = TcHmi.ControlFactory.createEx('TcHmi.Controls.Analytics.Charting', this.__id + "_Charting", {
                            'data-tchmi-width': this.getWidth(),
                            'data-tchmi-height': this.getHeight(),
                            'data-tchmi-dark-mode': this.getDarkMode()
                        }, this);
                        this.__elParetoChartCtrl.createInitChart(this.CHART_TYPE);
                    }
                    if (this.__elParetoChartCtrl !== undefined) {
                        this.__elChartContainer.append(this.__elParetoChartCtrl.getElement());
                        this.__dataCharting();
                    }
                    else {
                        this.Log("Could not create Charting Control.");
                    }
                    TcHmi.EventProvider.raise(`${this.__id}.onResized`, null);
                }
                __restoreChart() {
                    this.__elParetoChartCtrl = TcHmi.Controls.get(`${this.__id}_Charting`);
                    if (this.__elParetoChartCtrl !== undefined) {
                        this.__elChartContainer.append(this.__elParetoChartCtrl.getElement());
                    }
                    else {
                        this.Log("Could not restore Pareto Chart Control.");
                    }
                }
                __dataCharting() {
                    if (!this.__isValid())
                        return;
                    if (this.__elParetoChartCtrl === undefined) {
                        this.__restoreChart();
                    }
                    this.__updateOptions();
                    const result = this.__elParetoChartCtrl.createChart(this.__options);
                    if (!result)
                        console.error("Create Pareto Chart failed!");
                }
                //#endregion Methods
                __isReady() {
                    return this.getIsInitialized() && this.__channelNamesResolved != null && this.__absoluteValuesResolved != null && this.__channelNamesResolved != null;
                }
                __isValid() {
                    if (!this.__isReady())
                        return false;
                    return this.__channelNamesResolved.length === this.__absoluteValuesResolved.length && this.__channelNamesResolved.length === this.__relativeValuesResolved.length;
                }
                //#region Overrides
                __processColor() {
                    super.__processColor();
                }
                setDarkMode(valueNew) {
                    var _a;
                    let convertedValue = TcHmi.ValueConverter.toBoolean(valueNew);
                    if (convertedValue == null) {
                        convertedValue = this.getAttributeDefaultValueInternal('DarkMode');
                    }
                    this.__darkMode = convertedValue;
                    (_a = this.__elParetoChartCtrl) === null || _a === void 0 ? void 0 : _a.setDarkMode(this.__darkMode);
                    if (convertedValue === this.__darkMode) {
                        return;
                    }
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getDarkMode"]);
                }
                getDarkMode() {
                    return this.__darkMode;
                }
                __processLocalizationReader() {
                    super.__processLocalizationReader();
                    // Reassign editable propteries
                    this.__initEditableProperties();
                    this.__dataCharting();
                }
                __setChartSize() {
                    // Method to set the content-size
                    const width = this.__elementTemplateRoot[0].getBoundingClientRect().width;
                    const height = this.__elementTemplateRoot[0].getBoundingClientRect().height;
                    const titleHeight = this.__element[0].getElementsByClassName("tchmi-analytics-control-title-area")[0].getBoundingClientRect().height;
                    this.__elChartContainer[0].style.height = String((height - titleHeight) + "px");
                    let redraw = false;
                    if (this.__elParetoChartCtrl.getIsInitialized())
                        redraw = true;
                    if (this.__elParetoChartCtrl != null)
                        this.__elParetoChartCtrl.scaleChartControl(width, (height - titleHeight), redraw);
                }
                //#endregion EventHandlers / Callbacks
                //#region Localizations
                /**
                 * Add an element to be localized.
                 * @param element The element.
                 * @param key The localization key.
                 * @param parameters Optional parameters to pass to tchmi_format_string.
                 */
                __addLocalizedElement(element, key, ...parameters) {
                    let info = { key: key };
                    if (parameters.length !== 0) {
                        info.parameters = parameters;
                    }
                    this.__localizedElements.set(element, info);
                }
                /**
                 * Remove a localized element.
                 * @param element The element to remove.
                 */
                __removeLocalizedElement(element) {
                    this.__localizedElements.delete(element);
                }
            }
            Analytics.ParetoChartControl = ParetoChartControl;
            let E_ParetoYAxisScaling;
            (function (E_ParetoYAxisScaling) {
                E_ParetoYAxisScaling[E_ParetoYAxisScaling["BAR_MAXIMIZATION"] = 0] = "BAR_MAXIMIZATION";
                E_ParetoYAxisScaling[E_ParetoYAxisScaling["CUMULATIVE_SCALING"] = 1] = "CUMULATIVE_SCALING";
            })(E_ParetoYAxisScaling = Analytics.E_ParetoYAxisScaling || (Analytics.E_ParetoYAxisScaling = {}));
        })(Analytics = Controls.Analytics || (Controls.Analytics = {}));
        Controls.registerEx('ParetoChartControl', 'TcHmi.Controls.Analytics', Analytics.ParetoChartControl);
    })(Controls = TcHmi.Controls || (TcHmi.Controls = {}));
    let E_ParetoMode;
    (function (E_ParetoMode) {
        E_ParetoMode[E_ParetoMode["Count"] = 0] = "Count";
        E_ParetoMode[E_ParetoMode["Timespan"] = 1] = "Timespan";
    })(E_ParetoMode = TcHmi.E_ParetoMode || (TcHmi.E_ParetoMode = {}));
})(TcHmi || (TcHmi = {}));
//# sourceMappingURL=ParetoChartControl.js.map