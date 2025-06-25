var TcHmi;
(function (TcHmi) {
    var Controls;
    (function (Controls) {
        var Analytics;
        (function (Analytics) {
            class ParetoChart extends Analytics.GridBasedChart {
                //#region Ctor
                constructor(parent, props, options) {
                    super(parent, props, options);
                    this.__paretoLines = [];
                    this.__options = options;
                }
                //#endregion
                //#region Props
                //#endregion
                //#region Methods
                createInitChart() {
                    return;
                }
                cleanElement() {
                    var _a;
                    super.cleanElement();
                    (_a = this.__paretoLines) === null || _a === void 0 ? void 0 : _a.forEach((line) => { line.removeFromParent(); });
                    this.__paretoLines = [];
                }
                __preCreateChart(rawData) {
                    super.__preCreateChart(rawData);
                    this.__xyVirtualChannel = { datatype: null, isFilled: false, isVisible: true, name: "XYVirtualChannel", sourceID: "Empty", varColor: this.__options.xyLineColor };
                }
                __postCreateChart() {
                    super.__postCreateChart();
                }
                redraw() {
                    var _a;
                    try {
                        //y-achse
                        this.__createAbsoluteYAxis(true);
                        //channels
                        let i = 0;
                        for (let channel of this.__channels) {
                            let data = [];
                            if (channel instanceof Analytics.BarChannel) {
                                while (!this.__options.channelConfigurations[i].isVisible && i < this.__options.channelConfigurations.length) //find the right data for current BarChannel
                                    i++;
                                data = this.__options.data.data.map((obj) => (Object.assign(Object.assign({}, obj), { values: [obj.values[i]] })));
                                this.__channelValues[this.__channelValues.length - 1 - i].data = data; //channel values are sorted from left to right
                                data = [data[0]]; // only the abs value
                                channel.yStepDistance = -this.__yAxes[0].stepDistance;
                                channel.channelConfig = this.__options.channelConfigurations[i];
                                channel.redrawChannel(data, undefined, this.__options.showBarLabels);
                                i++;
                            }
                            else if (channel instanceof Analytics.XYChannel) {
                                data = this.__getXYVirtualData(this.__options.data);
                                channel.channelColor = this.__options.xyLineColor;
                                channel.redrawChannel(data);
                            }
                        }
                        (_a = this.__hoverWindow) === null || _a === void 0 ? void 0 : _a.drawHoverWindow();
                    }
                    catch (error) {
                        TcHmi.Log.error("Redraw chart failed", error);
                        return false;
                    }
                    return true;
                }
                createChart(rawData) {
                    var _a;
                    this.__channelValues = [];
                    this.__preCreateChart(rawData);
                    // Create the y-axes
                    this.__createYAxes();
                    // Create x-axis
                    const offsetLeft = Analytics.AlyMath.max(this.__yAxes.map((a) => a.yAxisPosition == Analytics.YAxisPosition.Left ? a.left + a.width : 0)) + this.__props.defaultAxisMargin;
                    let offsetTop = this.__yAxes[0].top + this.__props.defaultAxisMargin;
                    const xAxisStartPoint = new Analytics.Point(offsetLeft, offsetTop);
                    const offsetRight = Analytics.AlyMath.max(this.__yAxes.map((a) => a.yAxisPosition == Analytics.YAxisPosition.Right ? a.width : 0)) + this.__props.svgChartBorderdistance + this.__props.defaultAxisMargin;
                    const xAxisEndpoint = new Analytics.Point(this.elParent.clientWidth - offsetRight, offsetTop);
                    const xAxis = new Analytics.XLabelAxis(this.elParent, this.__props, this.__options);
                    this.__xAxes.push(xAxis);
                    xAxis.drawAxis(xAxisStartPoint, xAxisEndpoint);
                    // Create chart background
                    this.__createChartBackground();
                    this.__drawParetoLines();
                    let virtualXYData = this.__getXYVirtualData(rawData);
                    const xAxisIndex = 0;
                    const lineChannel = new Analytics.XYChannel(rawData.symbols[1], this.__elChartBackground, this.__props, this.__xAxes[xAxisIndex].stepDistance + this.__options.gap, this.__xAxes[0].left + this.__options.gap + (this.__xAxes[0].stepDistance / 2), -this.__yAxes[1].stepDistance, this.__yAxes[1].nullpoint, this.__xyVirtualChannel, Object.assign(Object.assign({}, this.__options), { strokeWidth: "5" }));
                    lineChannel.drawChannel(virtualXYData);
                    this.__channels.push(lineChannel);
                    // Create the bar channels
                    let barOffsetLeft = xAxisStartPoint.x + this.__options.gap;
                    for (let j = 0; j < this.__options.channelConfigurations.length; j++) {
                        // Add the last sample to the date entries
                        const channelSession = {};
                        channelSession.offsetLeft = barOffsetLeft;
                        channelSession.channels = [];
                        channelSession.data = [];
                        let data = rawData.data.map((obj) => (Object.assign(Object.assign({}, obj), { values: [obj.values[j]] }))); // This is the list of all data from a variable
                        if (data.length == 0)
                            continue;
                        const barChannel = new Analytics.BarChannel(rawData.symbols[j], this.__elChartBackground, this.__props, this.__xAxes[0].stepDistance, barOffsetLeft, -this.__yAxes[0].stepDistance, this.__yAxes[0].nullpoint, this.__options.channelConfigurations[j], this.__options);
                        if (this.__options.channelConfigurations[j].isVisible) {
                            const barData = [data[0]]; //only the abs values
                            barChannel.drawChannel(barData, null, this.__options.showBarLabels);
                            this.__channels.push(barChannel);
                            channelSession.channels.push(barChannel);
                            barOffsetLeft += this.__xAxes[0].stepDistance + this.__options.gap;
                        }
                        if (rawData.data.length > 0) {
                            channelSession.data.push(data[0]);
                            channelSession.data.push(data[1]);
                            this.__channelValues.push(channelSession);
                        }
                    }
                    this.__channelValues.sort((a, b) => (a.offsetLeft < b.offsetLeft) ? 1 : -1);
                    lineChannel.setToFront();
                    (_a = this.__paretoLines) === null || _a === void 0 ? void 0 : _a.forEach((line) => { line.setToFront(); });
                    this.__postCreateChart();
                }
                __drawParetoLines() {
                    if (!this.__options.showParetoLine)
                        return;
                    const offsetLeft = Analytics.AlyMath.max(this.__yAxes.map((a) => a.yAxisPosition == Analytics.YAxisPosition.Left ? a.left + a.width : 0)) + this.__props.defaultAxisMargin / 2;
                    const width = this.__xAxes.length > 0 ? this.__xAxes[0].endPoint.x - this.__xAxes[0].startPoint.x + this.__props.defaultAxisMargin : this.__props.svgWidth;
                    const offsetTop = this.__props.svgChartBorderdistance + this.__props.defaultAxisMargin / 2;
                    const yPos = this.__yAxes[1].nullpoint - (this.__options.paretoLinePercentage * (-this.__yAxes[1].stepDistance));
                    const tickOffsetLeft = offsetLeft + this.__props.defaultAxisMargin / 2;
                    const tickWidth = this.__xAxes.length > 0 ? this.__xAxes[0].endPoint.x - this.__xAxes[0].startPoint.x : width;
                    const paretoLineHorizontal = new Analytics.SVGLine(tickOffsetLeft, yPos, tickOffsetLeft + tickWidth, yPos);
                    paretoLineHorizontal.color = this.__options.paretoLineColor;
                    paretoLineHorizontal.strokeDashArray = "5";
                    paretoLineHorizontal.strokeWidth = 3;
                    paretoLineHorizontal.appendTo(this.__elChartBackground);
                    this.__paretoLines.push(paretoLineHorizontal);
                    if (false) { //if vertical pareto line is needed add new hmi property and check here (code for drawing the line should already work)
                        let i = 0;
                        let shiftAmount = 0;
                        for (let channel of this.__options.channelConfigurations) {
                            if (!channel.isVisible)
                                shiftAmount++;
                            if (this.__options.data.data[1].values[i] > this.__options.paretoLinePercentage) { //check if the relative value of current channel is smaller than the pareto line percentage
                                if (i == 0)
                                    break;
                                let tickX = (this.__xAxes[0].startPoint.x + this.__options.gap / 2);
                                tickX += (i - shiftAmount) * (this.__xAxes[0].stepDistance + this.__options.gap);
                                const tickOffsetTop = offsetTop + this.__props.defaultAxisMargin / 2;
                                const tickHeight = this.__yAxes[0].startPoint.y - this.__yAxes[0].endPoint.y;
                                const paretoLineVertical = new Analytics.SVGLine(tickX, tickOffsetTop, tickX, tickOffsetTop + tickHeight);
                                paretoLineVertical.color = this.__options.paretoLineColor;
                                paretoLineVertical.strokeDashArray = "5";
                                paretoLineVertical.strokeWidth = 3;
                                paretoLineVertical.opacity = 0.5;
                                paretoLineVertical.appendTo(this.__elChartBackground);
                                this.__paretoLines.push(paretoLineVertical);
                                break;
                            }
                            i++;
                        }
                    }
                }
                processOnHover(cursorX, cursorY) {
                    // DO NOT CALL SUPER METHOD! Only use this overwritten method
                    this.__channelValues.forEach((a) => a.channels.forEach((b) => b.elBars.forEach((c) => c.fillOpacity = 1)));
                    super.clearHoverPoints();
                    if (!this.__options.useHoverEffect)
                        return null;
                    let barHovered, lineHovered = false;
                    // Get the bar-values depending on their offset
                    const condition = (element) => element.offsetLeft <= cursorX;
                    let i = this.__channelValues.length;
                    for (const obj of this.__channelValues) {
                        i--;
                        if (condition(obj)) {
                            for (const channel of obj.channels) {
                                //------------------- bar channel -------------------//
                                const elBar = channel.elBars[0];
                                if (elBar == null)
                                    continue;
                                // Highlight 
                                if (elBar.x <= cursorX && cursorX <= elBar.x + elBar.width && elBar.y <= cursorY && cursorY <= elBar.y + elBar.height) {
                                    elBar.fillOpacity = .7;
                                    barHovered = true;
                                }
                                // Create a point foreach visible entry
                                const additionalHeight = elBar.y >= this.__yAxes[0].nullpoint ? elBar.height : 0;
                                let point = new Analytics.SVGCircle(elBar.x + elBar.width / 2., elBar.y + additionalHeight, this.__options.hoverPointRadius, ["tchmi-analytics-charting-hover-circle"]);
                                point.appendTo(this.__elChartBackground);
                                point.fill = elBar.fill;
                                point.stroke = "black";
                                this.__hoverPoints.push(point);
                                //------------------- xy channel -------------------//
                                //check how many channels are disabled to calculate the correct posX
                                var shiftAmount = 0;
                                for (let j = 0; j < this.__options.channelConfigurations.length; j++) {
                                    if (j > i) //only check left of the cursorX
                                        break;
                                    if (!this.__options.channelConfigurations[j].isVisible)
                                        shiftAmount++;
                                }
                                const value = obj.data[1].values[0]; //this is the relative value
                                if (value == null)
                                    continue;
                                const posX = ((i - shiftAmount) * (this.__xAxes[0].stepDistance + this.__options.gap)) + (this.__xAxes[0].left + this.__options.gap + this.__xAxes[0].stepDistance / 2);
                                const posY = this.__yAxes[1].nullpoint + (value * this.__yAxes[1].stepDistance);
                                point = new Analytics.SVGCircle(posX, posY, this.__options.hoverPointRadius, ["tchmi-analytics-charting-hover-circle"]);
                                const channelColor = Analytics.Str.hexToRgbA(this.__xyVirtualChannel.varColor);
                                point.fill = channelColor;
                                point.stroke = "black";
                                point.appendTo(this.__elChartBackground);
                                this.__hoverPoints.push(point);
                                const hoveredRadius = point.radius * 6;
                                if (point.cX - hoveredRadius <= cursorX && cursorX <= point.cX + hoveredRadius &&
                                    point.cY - hoveredRadius <= cursorY && cursorY <= point.cY + hoveredRadius) {
                                    lineHovered = true;
                                }
                                //values
                                const res = [];
                                const val = { timestamp: obj.data[0].timestamp, channelValues: [] };
                                const relativeEntry = { channelColor: this.__xyVirtualChannel.varColor, highlight: lineHovered, symbolName: channel.symbol.name + " [rel]", displayValue: obj.data[1].values[0].toString() + this.__yAxes[1].labelSuffix };
                                val.channelValues.push(relativeEntry);
                                const absValue = this.__options.paretoMode === TcHmi.E_ParetoMode.Count ? `${obj.data[0].values[0]}${this.__yAxes[0].labelSuffix}` : `${new Analytics.TimeSpan(obj.data[0].values[0]).toString(true, "Day")}${this.__yAxes[0].labelSuffix}`;
                                const absoluteEntry = { channelColor: channel.channelColor, highlight: barHovered, symbolName: channel.symbol.name + " [abs]", displayValue: absValue };
                                val.channelValues.push(absoluteEntry);
                                if (this.__options.drawParetoEntry) {
                                    const paretoLineEntry = { channelColor: this.__options.paretoLineColor, highlight: false, symbolName: "Pareto Line", displayValue: this.__options.paretoLinePercentage.toString() + this.__yAxes[1].labelSuffix };
                                    val.channelValues.push(paretoLineEntry);
                                }
                                res.push(val);
                                return res;
                            }
                            return null;
                        }
                    }
                    return null;
                }
                processOnHoverEnd() {
                    super.processOnHoverEnd();
                    this.__channelValues.forEach((a) => a.channels.forEach((b) => b.elBars.forEach((c) => c.fillOpacity = 1)));
                }
                getValues(cursorX, cursorY) {
                    throw new Error("This method is not implemented in the Pareto Chart. Use overloaded processOnHover for hover window");
                }
                __createYAxes() {
                    this.__createAbsoluteYAxis();
                    let yAxisRightOptions = Object.assign(Object.assign({}, this.__options), { labelSuffix: "%", yAxisPosition: Analytics.YAxisPosition.Right, description: this.__props.localizationReader.get("Accumulated_Relative_Values") });
                    // Create the y-axes on right
                    const yAxisRight = new Analytics.YAxis(this.elParent, this.__props, yAxisRightOptions);
                    const rightAxisStartPoint = new Analytics.Point(this.elParent.clientWidth - this.__props.svgChartBorderdistance, this.elParent.clientHeight - this.__numberOfXAxes * this.__defaultXAxisHeight - 2 * this.__props.svgChartBorderdistance);
                    const rightAxisEndPoint = new Analytics.Point(this.elParent.clientWidth - this.__props.svgChartBorderdistance, this.__props.svgChartBorderdistance + this.__props.defaultAxisMargin);
                    let axisDataRight = this.__options.data.data.map((obj) => (Object.assign(Object.assign({}, obj), { values: [obj.values[1]] })));
                    yAxisRight.drawAxis(rightAxisStartPoint, rightAxisEndPoint, axisDataRight, 10, [0, 100]);
                    this.__yAxes.push(yAxisRight);
                }
                __createAbsoluteYAxis(onlyUpdate = false) {
                    let yAxisLeft;
                    let yAxisStartPoint;
                    let yAxisEndPoint;
                    if (!onlyUpdate || this.__yAxes.length === 0) {
                        const yAxisLeftOptions = Object.assign(Object.assign({}, this.__options), { labelSuffix: "", yAxisPosition: Analytics.YAxisPosition.Left, description: this.__props.localizationReader.get("Absolute_Values") });
                        // Create the y-axes on left
                        if (this.__options.paretoMode === TcHmi.E_ParetoMode.Count) {
                            yAxisLeft = new Analytics.YAxis(this.elParent, this.__props, yAxisLeftOptions);
                        }
                        else {
                            yAxisLeft = new Analytics.YTimespanAxis(this.elParent, this.__props, yAxisLeftOptions);
                        }
                        yAxisStartPoint = new Analytics.Point(this.__props.svgChartBorderdistance, this.elParent.clientHeight - this.__numberOfXAxes * this.__defaultXAxisHeight - 2 * this.__props.svgChartBorderdistance);
                        yAxisEndPoint = new Analytics.Point(this.__props.svgChartBorderdistance, this.__props.svgChartBorderdistance + this.__props.defaultAxisMargin);
                        this.__yAxes.push(yAxisLeft);
                    }
                    else {
                        yAxisLeft = this.__yAxes[0];
                        yAxisStartPoint = yAxisLeft.startPoint;
                        yAxisEndPoint = yAxisLeft.endPoint;
                        yAxisLeft.cleanLabels();
                    }
                    let axisDataLeft = this.__options.data.data.map((obj) => (Object.assign(Object.assign({}, obj), { values: [obj.values[0]] })));
                    let range = null;
                    let rangeMax;
                    switch (this.__options.yAxisScaling) {
                        case Analytics.E_ParetoYAxisScaling.CUMULATIVE_SCALING:
                            rangeMax = this.__options.data.data[0].values.reduce((accumulator, currentValue) => {
                                return accumulator + currentValue; // Add the value if it's visible
                            }, 0); // Initialize with 0
                            break;
                        case Analytics.E_ParetoYAxisScaling.BAR_MAXIMIZATION:
                            const visibleValues = this.__options.data.data[0].values.filter((_, index) => {
                                return this.__options.channelConfigurations[index].isVisible;
                            });
                            rangeMax = visibleValues.length > 0 ? Math.max(...visibleValues) : 0;
                            break;
                    }
                    if (rangeMax === 0)
                        rangeMax = 1;
                    range = [0, rangeMax];
                    yAxisLeft.drawAxis(yAxisStartPoint, yAxisEndPoint, axisDataLeft, 10, range);
                }
                __getXYVirtualData(rawData) {
                    let virtualXYData = [];
                    for (let i = 0; i < rawData.data[1].values.length; i++) {
                        if (!this.__options.channelConfigurations[i].isVisible)
                            continue;
                        let valueArray = [];
                        valueArray.push(rawData.data[1].values[i]);
                        virtualXYData.push({ timestamp: 0, values: valueArray });
                    }
                    return virtualXYData;
                }
            }
            Analytics.ParetoChart = ParetoChart;
        })(Analytics = Controls.Analytics || (Controls.Analytics = {}));
    })(Controls = TcHmi.Controls || (TcHmi.Controls = {}));
})(TcHmi || (TcHmi = {}));
//# sourceMappingURL=ParetoChart.js.map