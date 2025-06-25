var TcHmi;
(function (TcHmi) {
    var Controls;
    (function (Controls) {
        var Analytics;
        (function (Analytics) {
            class GridBasedChart extends Analytics.BaseChart {
                //#region Ctor
                constructor(parent, props, options) {
                    super(parent, props, options);
                    /** X-Axis */
                    this.__xAxes = [];
                    /** Y-Axes */
                    this.__yAxes = [];
                    /** Margin for the axes */
                    this.__axisMargin = 0;
                    /** Hover Points */
                    this.__hoverPoints = [];
                    /** Default height of a x-axis */
                    this.__defaultXAxisHeight = 30 + this.__props.defaultAxisMargin;
                    /** Channels in the chart */
                    this.__channels = [];
                    /** Background lines of the chart*/
                    this.__backgroundLines = [];
                    /** Interval size */
                    this.__intervalSizes = [];
                    /** maximum interval size */
                    this.__maxIntervalSize = 0;
                    this.__options = options;
                }
                get xPosSplitter() {
                    return this.__xPosSplitter;
                }
                set xPosSplitter(value) {
                    this.__xPosSplitter = value;
                }
                get hoverWindow() {
                    return this.__hoverWindow;
                }
                getChannelConfigurations() {
                    return this.__options.channelConfigurations;
                }
                clearHoverPoints() {
                    this.__hoverPoints.forEach((p) => p.removeFromParent());
                    this.__hoverPoints = [];
                }
                /** Is called by the hover window when hovering gets disabled. Overwrite method to clean up any elements you manipulate inside the processHover */
                processOnHoverEnd() {
                }
                cleanElement() {
                    super.cleanElement();
                    this.__xAxes.forEach((ax) => {
                        ax.cleanElement();
                    });
                    this.__xAxes = [];
                    this.__yAxes.forEach((ay) => {
                        ay.cleanElement();
                    });
                    this.__yAxes = [];
                    this.__backgroundLines.forEach((ch) => {
                        ch.removeFromParent();
                    });
                    this.__backgroundLines = [];
                }
                //#endregion
                //#region Protected
                __createChartBackground() {
                    const offsetLeft = Analytics.AlyMath.max(this.__yAxes.map((a) => a.yAxisPosition == Analytics.YAxisPosition.Left ? a.left + a.width : 0)) + this.__props.defaultAxisMargin / 2;
                    const width = this.__xAxes.length > 0 ? this.__xAxes[0].endPoint.x - this.__xAxes[0].startPoint.x + this.__props.defaultAxisMargin : this.__props.svgWidth;
                    const offsetTop = this.__props.svgChartBorderdistance + this.__props.defaultAxisMargin / 2;
                    const height = this.__yAxes.length > 0 ? this.__yAxes[0].startPoint.y - this.__yAxes[0].endPoint.y + this.__props.defaultAxisMargin : this.__props.svgHeight;
                    const backgroundElement = this.__createBackgroundRectangle(offsetLeft, offsetTop, width, height);
                    if (this.__options.renderDashedLineForYAxisTicks) {
                        this.__yAxes.forEach((yAxis) => {
                            yAxis.axisTicks.forEach((tick) => {
                                const tickY = tick.y1;
                                const tickOffsetLeft = offsetLeft + this.__props.defaultAxisMargin / 2;
                                const tickWidth = this.__xAxes.length > 0 ? this.__xAxes[0].endPoint.x - this.__xAxes[0].startPoint.x : width;
                                const tickChartLine = new Analytics.SVGLine(tickOffsetLeft, tickY, tickOffsetLeft + tickWidth, tickY, ["tchmi-analytics-charting-background-line"]);
                                if (this.__props.darkMode)
                                    tickChartLine.addClass("tchmi-analytics-charting-background-line-dark");
                                tickChartLine.appendTo(this.__backgroundRects[0].elGroup);
                                this.__backgroundLines.push(tickChartLine);
                            });
                        });
                    }
                    if (this.__options.renderDashedLineForXAxisTicks) {
                        let x_ticks = [];
                        if (this.__xAxes.findIndex(a => a instanceof Analytics.XVirtualAxis) != -1) {
                            // Compare chart --> only draw ticks for max left and max right bin
                            x_ticks = this.__xAxes[0].axisTicks.reduce(// returns max left and max right bin
                            (acc, obj) => {
                                if (obj.x1 < acc[0].x1)
                                    acc[0] = obj;
                                if (obj.x1 > acc[1].x1)
                                    acc[1] = obj;
                                return acc;
                            }, [this.__xAxes[0].axisTicks[0], this.__xAxes[0].axisTicks[0]]);
                        }
                        else if (this.__xAxes.length >= 1) {
                            x_ticks = this.__xAxes[0].axisTicks;
                        }
                        if (x_ticks.length >= 1) {
                            x_ticks.forEach((tick) => {
                                const tickX = tick.x1;
                                const tickOffsetTop = offsetTop + this.__props.defaultAxisMargin / 2;
                                const tickHeight = this.__yAxes[0].startPoint.y - this.__yAxes[0].endPoint.y;
                                const tickChartLine = new Analytics.SVGLine(tickX, tickOffsetTop, tickX, tickOffsetTop + tickHeight, ["tchmi-analytics-charting-background-line"]);
                                if (this.__props.darkMode)
                                    tickChartLine.addClass("tchmi-analytics-charting-background-line-dark");
                                tickChartLine.appendTo(this.__backgroundRects[0].elGroup);
                                this.__backgroundLines.push(tickChartLine);
                            });
                        }
                    }
                    return backgroundElement;
                }
                __preCreateInitChart() {
                    this.cleanElement();
                    this.__options.channelConfigurations = this.__initChannelConfigurations;
                }
                __postCreateInitChart() {
                    this.__hoverWindow.disableHoverEffect();
                    if (this.__xAxes.length > 0)
                        this.__xAxes[0].cleanLabels();
                    if (this.__yAxes.length > 0)
                        this.__yAxes[0].cleanLabels();
                }
                __preCreateChart(rawData) {
                    this.cleanElement();
                    this.__numberOfXAxes = 1;
                    this.__numberOfYAxes = 1;
                    this.__axisMargin = 10;
                    this.__props.numSamples = rawData.data.length;
                    this.__options.data = rawData;
                    this.__createChannelValues();
                }
                __postCreateChart() {
                    // Set axes to front
                    this.__xAxes.forEach((ax) => ax.setToFront());
                    this.__yAxes.forEach((ay) => ay.setToFront());
                    let hoverStart;
                    let hoverEnd;
                    if (this.__xAxes.length > 0 && this.__yAxes.length > 0) {
                        hoverStart = new Analytics.Point(this.__xAxes[0].startPoint.x, this.__yAxes[0].endPoint.y);
                        hoverEnd = new Analytics.Point(this.__xAxes[0].endPoint.x, this.__yAxes[0].startPoint.y);
                    }
                    else {
                        hoverStart = new Analytics.Point(0, 0);
                        hoverEnd = new Analytics.Point(this.__props.svgWidth, this.__props.svgHeight);
                    }
                    if (this.__hoverWindow == null) {
                        this.__hoverWindow = new Analytics.HoverWindow(this.__options.data.symbols, this.__backgroundRects[0].elGroup, this.__props, hoverStart, hoverEnd, this, (this instanceof Analytics.YTChart || this instanceof Analytics.CompareYTChart) ? true : false, this.__options);
                        if (this.__options.useHoverEffect)
                            this.__hoverWindow.enableHoverEffect();
                    }
                    else {
                        if (!this.__options.useHoverEffect)
                            this.__hoverWindow.disableHoverEffect();
                        this.__hoverWindow.updateStartEndPoint(hoverStart, hoverEnd);
                    }
                }
                __createYAxes() {
                    // Create the y-axes
                    for (let i = 0; i < this.__numberOfYAxes; i++) {
                        const offsetLeft = this.__yAxes.length > 0 ? Math.max(...this.__yAxes.map((a) => a.left + a.width)) + this.__axisMargin : 0;
                        const yAxis = new Analytics.YAxis(this.elParent, this.__props, this.__options);
                        // Remove invisible data
                        let fullAxisData = JSON.parse(JSON.stringify(this.__options.data.data));
                        let axisData = [];
                        const timeranges = this.__options.timeranges;
                        if (timeranges != null) {
                            for (const timerange of timeranges) {
                                if (timerange.isVisible) {
                                    const timerangeStart = Analytics.TimeConverter.getFromTcTime(timerange, this.__props.dataRequestTime);
                                    const timerangeEnd = Analytics.TimeConverter.getToTcTime(timerange, this.__props.dataRequestTime);
                                    const timerangeData = fullAxisData.filter((a) => a.timestamp <= timerangeEnd && a.timestamp >= timerangeStart);
                                    axisData.push(...timerangeData);
                                }
                            }
                        }
                        let removedChannels = 0;
                        for (let i = 0; i < this.__options.channelConfigurations.length; i++) {
                            if (!this.__options.channelConfigurations[i].isVisible) {
                                axisData.forEach((d) => {
                                    d.values.splice(i - removedChannels, 1);
                                });
                                removedChannels++;
                            }
                        }
                        const yAxisStartPoint = new Analytics.Point(this.__props.svgChartBorderdistance + offsetLeft, this.elParent.clientHeight - this.__numberOfXAxes * this.__defaultXAxisHeight - 2 * this.__props.svgChartBorderdistance);
                        const yAxisEndPoint = new Analytics.Point(this.__props.svgChartBorderdistance + offsetLeft, this.__props.svgChartBorderdistance + this.__props.defaultAxisMargin);
                        axisData = this.__createYAxisInstanceSpecific(axisData);
                        this.__yAxes.push(yAxis);
                        yAxis.drawAxis(yAxisStartPoint, yAxisEndPoint, axisData);
                    }
                }
                __createYAxisInstanceSpecific(axisData) {
                    const data = [];
                    const entries = this.__channelDataValues.filter(a => a.channelConfig.isVisible).map(a => a.channelData);
                    for (const entry of entries) {
                        for (const e of entry) {
                            data.push(e);
                        }
                    }
                    return data;
                }
                /**
                 * Get the last sample(s) of a timerange. Multiple data will be only retured if data of multiple streams has been selected
                 */
                __getLastTimerangeData(timerangeStart, timerangeEnd, data) {
                    const timeRangeData = data.filter((a) => a.timestamp <= timerangeEnd && a.timestamp >= timerangeStart); // Filter for the selected timerange
                    const samples = [];
                    for (let i = 0; i < this.__options.channelConfigurations.length; i++) {
                        if (samples.some(a => a.values[i] != null))
                            continue;
                        else {
                            for (let j = timeRangeData.length - 1; j >= 0; j--) {
                                if (timeRangeData[j].values[i] != null) {
                                    samples.push(timeRangeData[j]);
                                    break;
                                }
                            }
                        }
                    }
                    return samples;
                }
                //#endregion
                //#region HoverValues
                processOnHover(cursorX, cursorY) {
                    this.clearHoverPoints();
                    const res = [];
                    const dataEntries = this.getValues(cursorX, cursorY);
                    if (dataEntries == null || dataEntries.length == 0)
                        return res;
                    let isDataComparingChart = false;
                    if ((this instanceof Analytics.CompareYTChart) || (this instanceof Analytics.TimeSeriesBarchart))
                        isDataComparingChart = true;
                    const usedChannelConfigs = [];
                    for (const dataEntry of dataEntries) {
                        const val = { timestamp: dataEntry.timestamp, channelValues: [] };
                        for (let j = 0; j < dataEntry.values.length; j++) {
                            if (dataEntry.values[j] == null)
                                continue;
                            const channel = this.__options.data.symbols[j];
                            let channelConfigs = this.__options.channelConfigurations.filter(a => a.name == channel.name && a.sourceID == channel.source);
                            channelConfigs = channelConfigs.filter(a => usedChannelConfigs.indexOf(a) == -1); // Remove already used channel configs)
                            let channelConfig = channelConfigs[0];
                            if (channelConfig == null || !channelConfig.isVisible)
                                continue;
                            usedChannelConfigs.push(channelConfig);
                            const ch = {};
                            // Color
                            ch.channelColor = channelConfig.varColor;
                            // Name
                            ch.symbolName = channel.name;
                            // Unit
                            ch.unit = Analytics.ChannelConfigHelper.GetChannelUnit(channelConfig);
                            // Highlight
                            if (dataEntry.hoverChannel != null && channel === dataEntry.hoverChannel)
                                ch.highlight = true;
                            // Value for boolean channels
                            ch.displayValue = Analytics.Utilities.getTrimmedValueString(dataEntry.values[j]);
                            if (channelConfig.datatype.toUpperCase().includes("BOOL")) {
                                if (dataEntry.values[j] == 1 && channelConfig.userTrueAlias)
                                    ch.displayValue = channelConfig.userTrueAlias;
                                else if (dataEntry.values[j] == 0 && channelConfig.userFalseAlias)
                                    ch.displayValue = channelConfig.userFalseAlias;
                            }
                            // Get raw value in case of show differentials
                            if (this.__options.showDifferentials) {
                                const item = this.__options.data.data.find(a => a.timestamp == dataEntry.timestamp);
                                ch.unscaledValue = Analytics.Utilities.getTrimmedValueString(item.values[j]);
                            }
                            val.channelValues.push(ch);
                        }
                        if (res.findIndex(a => a.timestamp != null && a.timestamp == val.timestamp) == -1)
                            res.push(val);
                    }
                    return res;
                }
            }
            Analytics.GridBasedChart = GridBasedChart;
            /**Base class for timebased compare charts */
            class TimeCompareGridBasedChart extends GridBasedChart {
                constructor(parent, props, options) {
                    super(parent, props, options);
                    if (this.__options.compareInterval == null) {
                        this.__options.compareType = Analytics.ECompareChartCompareTypes.RELATIVE_TIME;
                        this.__options.compareInterval = { rangeValue: 1, rangeUnit: Analytics.TimeIntervalStrings.Second_s };
                    }
                    this.__compareIntervalMs = Analytics.TimeInterval.ConvertToMs(this.__options.compareInterval.rangeValue, this.__options.compareInterval.rangeUnit);
                }
                //#endregion
                __createYAxes() {
                    // Create the y-axes
                    for (let i = 0; i < this.__numberOfYAxes; i++) {
                        const offsetLeft = this.__yAxes.length > 0 ? Math.max(...this.__yAxes.map((a) => a.left + a.width)) + this.__axisMargin : 0;
                        const yAxis = new Analytics.YAxis(this.elParent, this.__props, this.__options);
                        // Remove invisible data
                        let fullAxisData = JSON.parse(JSON.stringify(this.__options.data.data));
                        let axisData = [];
                        // Check foreach channel if it is visible in this timerange (channels are multiple in the channel-configuration, sorted by timerange)
                        const channelConfig = Analytics.ChannelConfigHelper.ExtractFrom_I_SE_ChannelEntry(this.__options.channelConfigurations);
                        const timeranges = this.__options.timeranges;
                        let timerangeIndex = 0;
                        if (timeranges != null) {
                            for (const timerange of timeranges) {
                                if (timerange.isVisible) {
                                    const timerangeStart = Analytics.TimeConverter.getFromTcTime(timerange, this.__props.dataRequestTime);
                                    const timerangeEnd = Analytics.TimeConverter.getToTcTime(timerange, this.__props.dataRequestTime, this.__options.compareInterval);
                                    const timerangeData = fullAxisData.filter((a) => a.timestamp <= timerangeEnd && a.timestamp >= timerangeStart);
                                    // Set values of removed channels to undefinied
                                    let channelIndex = 0;
                                    for (const channel of channelConfig) {
                                        if (!channel.visibility[timerangeIndex]) {
                                            timerangeData.forEach((d) => d.values[channelIndex] = undefined);
                                        }
                                        channelIndex++;
                                    }
                                    axisData.push(...timerangeData);
                                }
                                timerangeIndex++;
                            }
                        }
                        const yAxisStartPoint = new Analytics.Point(this.__props.svgChartBorderdistance + offsetLeft, this.elParent.clientHeight - this.__numberOfXAxes * this.__defaultXAxisHeight - 2 * this.__props.svgChartBorderdistance);
                        const yAxisEndPoint = new Analytics.Point(this.__props.svgChartBorderdistance + offsetLeft, this.__props.svgChartBorderdistance + this.__props.defaultAxisMargin);
                        axisData = this.__createYAxisInstanceSpecific(axisData);
                        yAxis.drawAxis(yAxisStartPoint, yAxisEndPoint, axisData);
                        this.__yAxes.push(yAxis);
                    }
                }
            }
            Analytics.TimeCompareGridBasedChart = TimeCompareGridBasedChart;
        })(Analytics = Controls.Analytics || (Controls.Analytics = {}));
    })(Controls = TcHmi.Controls || (TcHmi.Controls = {}));
})(TcHmi || (TcHmi = {}));
//# sourceMappingURL=GridBased_Chart.js.map