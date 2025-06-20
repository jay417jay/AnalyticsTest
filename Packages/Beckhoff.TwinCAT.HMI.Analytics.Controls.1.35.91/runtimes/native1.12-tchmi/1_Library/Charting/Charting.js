/*
 * Generated 8/4/2020 3:09:05 PM
 * Copyright (C) 2020
 */
var TcHmi;
(function (TcHmi) {
    var Controls;
    (function (Controls) {
        var Analytics;
        (function (Analytics) {
            class Charting extends TcHmi.Controls.System.TcHmiControl {
                /*
                Attribute philosophy
                --------------------
                - Local variables are not set while definition in class, so they have the value 'undefined'.
                - On compile the Framework sets the value from HTML or from theme (possibly 'null') via normal setters
                - The "changed detection" in the setter will result in processing the value only once while compile
                - Attention: If we have a Server Binding on an Attribute the setter can be very late or never (leaving the value = undefined).
                */
                /**
                 * Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element, pcElement, attrs) {
                    /** Call base class constructor */
                    super(element, pcElement, attrs);
                    /** Options of the chart (can be set by the user) */
                    this.__options = { chartType: Analytics.E_ChartType.YTCHART };
                    /** Variable Table Height */
                    this.__variableTableHeight = 30;
                    /** Is true when the first chart has been created */
                    this.__isInitalized = false;
                    /** Width of the control */
                    this.controlWidth = 150;
                    /** Loading icon*/
                    this.__elLoadingIcon = null;
                    /** Loading Texts Elements*/
                    this.__loadingTexts = [];
                    /** Is true if loading info is visible*/
                    this.__loadingInfoVisible = false;
                    /** Map of elements and their localization information */
                    this.__localizedElements = new Map();
                    /** Localization watch function */
                    this.__destroyLocalizationWatch = null;
                    /** Eventmanager */
                    this.__eventListenerManager = new Analytics.EventListenerManager();
                    //#region Scaling
                    this.__onResized = () => {
                        return (evt, ctrl) => {
                        };
                    };
                }
                get loadingInfoVisible() {
                    return this.__loadingInfoVisible;
                }
                /**
                  * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                  * Call attribute processor functions here to initialize default values!
                  */
                __previnit() {
                    //Set & Get jQuery Elements
                    super.__previnit();
                    this.__props = new Analytics.Chart_Properties(this);
                    this.__elTemplateRoot = this.__element.find('.tchmi-analytics-charting-template');
                    this.__props.elSvgArea = this.__elTemplateRoot.find('.tchmi-analytics-charting-svg');
                    this.__elCheckboxContainer = this.__elTemplateRoot.find('.tchmi-analytics-charting-check-box-container');
                    this.__elLoadingIcon = this.__elTemplateRoot[0].querySelector('.tchmi-analytics-charting-loading-icon');
                    this.__elLoadingIcon.style.visibility = "hidden";
                    this.__initLocalizations();
                }
                /**
                 * @description Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values.
                 * @returns {void}
                 */
                __init() {
                    super.__init();
                }
                /**
                * @description Is called by tachcontrol() after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                /**
                * @description Is called by tachcontrol() after the control instance is no longer part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __detach() {
                    super.__detach();
                }
                /**
                * @description Destroy the current control instance.
                * Will be called automatically if system destroys control!
                */
                destroy() {
                    if (this.__keepAlive) {
                        return;
                    }
                    super.destroy();
                }
                getFontScaleFactor(width, height) {
                    if (width / this.controlWidth > height / this.controlHeight) {
                        return height / this.controlHeight;
                    }
                    else {
                        return width / this.controlWidth;
                    }
                }
                scaleChartControl(width, height, redrawChart = true) {
                    this.__width = width;
                    this.__height = height;
                    this.__scaleSvgArea(redrawChart);
                }
                __scaleSvgArea(redrawChart = true) {
                    // Calculate height of variable tables
                    //Scale the Draw-SVG-Area
                    if (this.__widthUnit == 'px' && this.__props != undefined) {
                        //Container is defined in px
                        this.__props.svgWidth = Math.floor(this.__width);
                        while ((this.__props.svgWidth % 10) != 0) {
                            this.__props.svgWidth = this.__props.svgWidth - 1;
                        }
                        this.__props.svgHeight = Math.floor(this.__height - this.__variableTableHeight);
                        while ((this.__props.svgHeight % 10) != 0) {
                            this.__props.svgHeight = this.__props.svgHeight - 1;
                        }
                    }
                    if (this.__props != undefined) {
                        const svg = this.__props.elSvgArea.get()[0];
                        if (svg != undefined) {
                            svg.style.width = String(this.__props.svgWidth + "px");
                            svg.style.height = String(this.__props.svgHeight + "px");
                        }
                    }
                    this.__elCheckboxContainer[0].style.width = String(this.__props.svgWidth + "px");
                    if (this.__loadingInfoVisible) {
                        this.removeLoadingInfo();
                        this.createLoadingInfo();
                    }
                    else if (redrawChart) {
                        if (this.__isInitalized)
                            this.__createChart();
                        else {
                            this.createInitChart();
                        }
                    }
                }
                //#endregion Scaleing
                //#region Properties
                setDarkMode(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toBoolean(valueNew);
                    if (convertedValue == null) {
                        convertedValue = this.getAttributeDefaultValueInternal('DarkMode');
                    }
                    if (convertedValue === this.__props.darkMode) {
                        return;
                    }
                    this.__props.darkMode = convertedValue;
                    this.__processDarkMode();
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getDarkMode"]);
                }
                getDarkMode() {
                    return this.__props.darkMode;
                }
                __processDarkMode() {
                    this.__props.elSvgArea[0].classList.toggle('tchmi-analytics-charting-svg-dark', this.__props.darkMode);
                    if (this.__props.darkMode) {
                        this.__elTemplateRoot.find(".tchmi-analytics-charting-svg-data-area").addClass("tchmi-analytics-charting-svg-data-area-dark");
                        this.__elTemplateRoot.find(".tchmi-analytics-charting-background-line").addClass("tchmi-analytics-charting-background-line-dark");
                        this.__elTemplateRoot.find(".tchmi-analytics-charting-axis-line").addClass("tchmi-analytics-charting-axis-line-dark");
                        this.__elTemplateRoot.find(".tchmi-analytics-charting-axis-tick").addClass("tchmi-analytics-charting-axis-tick-dark");
                        this.__elTemplateRoot.find(".tchmi-analytics-charting-axis-label-text").addClass("tchmi-analytics-charting-axis-label-text-dark");
                        this.__elTemplateRoot.find(".tchmi-analytics-charting-axis-label").addClass("tchmi-analytics-charting-axis-label-dark");
                        this.__elTemplateRoot.find(".tchmi-analytics-charting-hover-line").addClass("tchmi-analytics-charting-hover-line-dark");
                        this.__elTemplateRoot.find(".tchmi-analytics-charting-cb-text").addClass("tchmi-analytics-charting-cb-text-dark");
                        this.__elTemplateRoot.find(".tchmi-analytics-charting-bar-channel-label").addClass("tchmi-analytics-charting-bar-channel-label-dark");
                    }
                    else {
                        this.__elTemplateRoot.find(".tchmi-analytics-charting-svg-data-area").removeClass("tchmi-analytics-charting-svg-data-area-dark");
                        this.__elTemplateRoot.find(".tchmi-analytics-charting-background-line").removeClass("tchmi-analytics-charting-background-line-dark");
                        this.__elTemplateRoot.find(".tchmi-analytics-charting-axis-line").removeClass("tchmi-analytics-charting-axis-line-dark");
                        this.__elTemplateRoot.find(".tchmi-analytics-charting-axis-tick").removeClass("tchmi-analytics-charting-axis-tick-dark");
                        this.__elTemplateRoot.find(".tchmi-analytics-charting-axis-label-text").removeClass("tchmi-analytics-charting-axis-label-text-dark");
                        this.__elTemplateRoot.find(".tchmi-analytics-charting-axis-label").removeClass("tchmi-analytics-charting-axis-label-dark");
                        this.__elTemplateRoot.find(".tchmi-analytics-charting-hover-line").removeClass("tchmi-analytics-charting-hover-line-dark");
                        this.__elTemplateRoot.find(".tchmi-analytics-charting-cb-text").removeClass("tchmi-analytics-charting-cb-text-dark");
                        this.__elTemplateRoot.find(".tchmi-analytics-charting-bar-channel-label").removeClass("tchmi-analytics-charting-bar-channel-label-dark");
                    }
                }
                //#endregion Properties
                //#region Charting
                clearChart() {
                    this.removeLoadingInfo();
                    if (!this.__isInitalized)
                        this.createInitChart();
                    else if (this.__chart != undefined)
                        this.__chart.cleanElement();
                }
                createInitChart(chartType) {
                    if (this.__chart != null)
                        this.__chart.cleanElement();
                    if (chartType != null)
                        this.__options.chartType = chartType;
                    this.__props.dataRequestTime = new Date();
                    this.__options.labelSuffix = "";
                    this.__options.yAxisPosition = Analytics.YAxisPosition.Left;
                    this.__chart = new Analytics.YTChart(this.__props.elSvgArea.get()[0], this.__props, this.__options);
                    this.__chart.xPosSplitter = Number.MAX_VALUE;
                    this.__chart.createInitChart();
                    this.__processDarkMode();
                }
                createChart(options) {
                    if (options.data == null)
                        return false;
                    this.__options = options;
                    this.__options.data.data.sort((a, b) => {
                        if (a.timestamp == null || b.timestamp == null)
                            return 0;
                        if (a.timestamp > b.timestamp)
                            return 1;
                        else
                            return -1;
                    });
                    this.removeLoadingInfo();
                    if (this.__chart != null)
                        this.__chart.cleanElement();
                    this.__createChart();
                    this.__isInitalized = true;
                    return true;
                }
                __createChart() {
                    var _a, _b;
                    if (this.__chart != undefined)
                        this.__chart.cleanElement();
                    // Create variable table
                    this.__elCheckboxContainer.empty();
                    this.__createVariableTable();
                    this.__scaleSvgArea(false);
                    // Parse request time of data or set current timestamp as request time
                    if (this.__options.data != null && ((_a = this.__options.data) === null || _a === void 0 ? void 0 : _a.requestTimestampUTC) != null) {
                        this.__props.dataRequestTime = new Analytics.SPTime((_b = this.__options.data) === null || _b === void 0 ? void 0 : _b.requestTimestampUTC).date;
                    }
                    else
                        this.__props.dataRequestTime = new Date();
                    // Create chart
                    switch (this.__options.chartType) {
                        case Analytics.E_ChartType.YTCHART:
                            this.__chart = new Analytics.YTChart(this.__props.elSvgArea.get()[0], this.__props, this.__options);
                            this.__chart.createChart(this.__options.data);
                            break;
                        case Analytics.E_ChartType.BARCHART:
                            this.__chart = new Analytics.BarChart(this.__props.elSvgArea.get()[0], this.__props, this.__options);
                            this.__chart.createChart(this.__options.data);
                            break;
                        case Analytics.E_ChartType.COMPAREYTCHART:
                            this.__chart = new Analytics.CompareYTChart(this.__props.elSvgArea.get()[0], this.__props, this.__options);
                            this.__chart.createChart(this.__options.data);
                            break;
                        case Analytics.E_ChartType.TIMESERIESBARCHART:
                            this.__chart = new Analytics.TimeSeriesBarchart(this.__props.elSvgArea.get()[0], this.__props, this.__options);
                            this.__chart.createChart(this.__options.data);
                            break;
                        case Analytics.E_ChartType.PIECHART:
                            this.__chart = new Analytics.PieRingChart(this.__props.elSvgArea.get()[0], this.__props, this.__options);
                            this.__chart.createChart(this.__options.data);
                            break;
                        case Analytics.E_ChartType.RINGCHART:
                            this.__chart = new Analytics.PieRingChart(this.__props.elSvgArea.get()[0], this.__props, this.__options);
                            this.__chart.createChart(this.__options.data);
                            break;
                        case Analytics.E_ChartType.SINGLEVALUECHART:
                            this.__chart = new Analytics.SingleValueChart(this.__props.elSvgArea.get()[0], this.__props, this.__options);
                            this.__chart.createChart(this.__options.data);
                            break;
                        case Analytics.E_ChartType.PARETOCHART:
                            this.__chart = new Analytics.ParetoChart(this.__props.elSvgArea.get()[0], this.__props, this.__options);
                            this.__chart.createChart(this.__options.data);
                            break;
                        default:
                            break;
                    }
                    this.__processDarkMode();
                }
                setHoverEffect(useHover) {
                    var _a, _b;
                    if (useHover)
                        (_a = this.__chart) === null || _a === void 0 ? void 0 : _a.hoverWindow.enableHoverEffect();
                    else
                        (_b = this.__chart) === null || _b === void 0 ? void 0 : _b.hoverWindow.disableHoverEffect();
                }
                /** Returns false if the diagram has not yet been completely drawn*/
                redrawChart(data) {
                    if (this.__chart == undefined)
                        return false;
                    return this.__chart.redraw();
                }
                //#endregion Charting
                //#region Variable-Table
                __createVariableTable() {
                    this.__eventListenerManager.removeEventListeners("VariableClick");
                    if (this.__options.channelConfigurations.length > 0) {
                        const channelConfigs = Analytics.ChannelConfigHelper.ExtractFrom_I_SE_ChannelEntry(this.__options.channelConfigurations);
                        let i = 0;
                        for (const channelConfig of channelConfigs) {
                            this.__elCheckboxContainer.append(`<div class="tchmi-analytics-charting-cb-item">
                                    <input type="checkbox" class="tchmi-analytics-charting-cb tchmi-analytics-charting-channel-cb${i}" checked>
                                    <div class="tchmi-analytics-charting-cb-color-element" style="background-color: ${channelConfig.varColors[0]}"></div>
                                    <label class="tchmi-analytics-charting-cb-text" title="${Analytics.ChannelConfigHelper.GetChannelUnit(channelConfig)}">${channelConfig.name}</label>
                                </div>`);
                            const cb = this.__elCheckboxContainer.find(".tchmi-analytics-charting-channel-cb" + i + "");
                            const checkbox = this.__elTemplateRoot.find(`.tchmi-analytics-charting-channel-cb${i}`)[0];
                            checkbox.checked = channelConfig.visibility.some(a => a === true);
                            const _this = this;
                            const indexValue = JSON.parse(JSON.stringify(i));
                            this.__eventListenerManager.addEventListener(cb[0], "click", () => _this.__channelEntryClick(indexValue), true, "VariableClick");
                            i++;
                        }
                        // Set the height of the variable table
                        const variableEntries = this.__element.find(".tchmi-analytics-charting-cb-text");
                        if (variableEntries == null || variableEntries.length == 0)
                            this.__variableTableHeight = 30;
                        else {
                            const minY = variableEntries[0].getBoundingClientRect().top;
                            const maxY = variableEntries[variableEntries.length - 1].getBoundingClientRect().height + variableEntries[variableEntries.length - 1].getBoundingClientRect().top;
                            this.__variableTableHeight = maxY - minY;
                        }
                    }
                }
                __channelEntryClick(index) {
                    var _a, _b;
                    const channel = this.__options.channelConfigurations[index];
                    channel.isVisible = !channel.isVisible;
                    (_b = (_a = this.__options).channelClickedCallback) === null || _b === void 0 ? void 0 : _b.call(_a, index);
                    // Set visibility for a channel in every timerange
                    const matchingChannels = this.__options.channelConfigurations.filter(a => a.sourceID == channel.sourceID && a.name == channel.name);
                    matchingChannels.forEach(a => a.isVisible = channel.isVisible);
                    this.__createChart();
                    const checkbox = this.__elTemplateRoot.find(`.tchmi-analytics-charting-channel-cb${index}`)[0];
                    checkbox.checked = channel.isVisible;
                }
                //#endregion Variable-Table
                //#region Loading Icon
                createLoadingInfo(loadingFailed = false) {
                    this.__chart.cleanElement();
                    this.removeLoadingInfo();
                    const circleRadius = 50;
                    const centerX = this.__props.svgWidth / 2;
                    const centerY = this.__props.svgHeight / 2;
                    const displayText = loadingFailed ? this.__props.localizationReader.get(this.__props.localKeys.Loading_Data_Failed) : this.__props.localizationReader.get(this.__props.localKeys.Loading_Data);
                    const loadingText = new Analytics.SVGText(centerX, centerY - circleRadius, displayText, ["loading-text"]);
                    loadingText.fill = this.getDarkMode() ? "white" : "black";
                    loadingText.fontSize = 20;
                    loadingText.appendTo(this.__props.elSvgArea[0]);
                    loadingText.x -= loadingText.width / 2;
                    this.__loadingTexts.push(loadingText);
                    if (!loadingFailed) {
                        this.__elLoadingIcon.style.position = "absolute";
                        this.__elLoadingIcon.style.left = (this.__props.svgWidth / 2 - circleRadius / 2) + "px";
                        this.__elLoadingIcon.style.top = (this.__props.svgHeight / 2 - circleRadius / 2) + "px";
                        this.__elLoadingIcon.style.width = "50px";
                        this.__elLoadingIcon.style.height = "50px";
                        this.__elLoadingIcon.style.visibility = "visible";
                    }
                    this.__loadingInfoVisible = true;
                }
                removeLoadingInfo() {
                    this.__loadingTexts.forEach((label) => {
                        label.removeFromParent();
                    });
                    this.__loadingTexts = [];
                    this.__elLoadingIcon.style.visibility = "hidden";
                    this.__loadingInfoVisible = false;
                }
                //#endregion Loading Icon
                //#region Localization
                __initLocalizations() {
                    // Localization
                    let localizedElements = this.__element[0].querySelectorAll('[data-tchmi-localized-content-key]');
                    for (let i = 0, ii = localizedElements.length; i < ii; i++) {
                        let element = localizedElements[i];
                        let localizeKey = element.dataset.tchmiLocalizedContentKey;
                        if (localizeKey) {
                            this.__localizedElements.set(element, { key: localizeKey, parameters: null });
                        }
                    }
                    this.__destroyLocalizationWatch = this.__localization.watch((data) => {
                        if (data.error !== TcHmi.Errors.NONE) {
                            return;
                        }
                        if (!data.reader) {
                            return;
                        }
                        this.__props.localizationReader = data.reader;
                        for (const [info, key] of this.__localizedElements) {
                            let localizedText = data.reader.get(key.key);
                            if (key.key.includes('Tooltip')) {
                                info.title = tchmi_decode_control_characters(localizedText);
                            }
                            else {
                                info.textContent = tchmi_decode_control_characters(localizedText);
                            }
                        }
                        if (this.__isInitalized)
                            this.__createChart();
                    });
                }
                __getLocalizationKey(value) {
                    return Object.keys(this.__props.localizationReader.getLocalization()).find(key => this.__props.localizationReader.getLocalization()[key] == value);
                }
            }
            Analytics.Charting = Charting;
        })(Analytics = Controls.Analytics || (Controls.Analytics = {}));
    })(Controls = TcHmi.Controls || (TcHmi.Controls = {}));
})(TcHmi || (TcHmi = {}));
TcHmi.Controls.registerEx('Charting', 'TcHmi.Controls.Analytics', TcHmi.Controls.Analytics.Charting);
//# sourceMappingURL=Charting.js.map