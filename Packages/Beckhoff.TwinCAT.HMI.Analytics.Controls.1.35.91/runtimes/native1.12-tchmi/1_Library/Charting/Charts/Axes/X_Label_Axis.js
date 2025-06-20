var TcHmi;
(function (TcHmi) {
    var Controls;
    (function (Controls) {
        var Analytics;
        (function (Analytics) {
            class XLabelAxis extends Analytics.X_Base_Axis {
                //#region Ctor
                constructor(parent, props, options) {
                    super(parent, props, options);
                    this.__options = options;
                }
                //#endregion
                //#region Props
                //#endregion
                //#region Methods
                drawAxis(startPoint, endPoint) {
                    this.__startPoint = startPoint;
                    this.__endPoint = endPoint;
                    // Set xAxis-Line
                    this.__axisLine.x1 = this.__startPoint.x;
                    this.__axisLine.y1 = this.__startPoint.y;
                    this.__axisLine.x2 = this.__endPoint.x;
                    this.__axisLine.y2 = this.__endPoint.y;
                    this.__width = this.__endPoint.x - this.__startPoint.x;
                    // Calculate the step distance based on the visibile channels
                    const numberOfVisibleChannels = this.__options.channelConfigurations.filter((c) => c.isVisible).length;
                    const channelWidth = ((this.__endPoint.x - this.__startPoint.x) - ((numberOfVisibleChannels + 1) * this.__options.gap)) / (numberOfVisibleChannels);
                    this.__stepDistance = channelWidth;
                    // Create the labels and ticks
                    let channelOffsetLeft = this.__startPoint.x + this.__options.gap + channelWidth / 2;
                    let prevLabel = null;
                    for (let i = 0; i < this.__options.data.symbols.length; i++) {
                        if (!this.__options.channelConfigurations[i].isVisible)
                            continue;
                        let label = this.__createLabel(channelOffsetLeft, this.__options.data.symbols[i].name);
                        if (prevLabel != null && prevLabel.x + prevLabel.width > label.x)
                            label.visibilty = "Hidden";
                        else
                            prevLabel = label;
                        channelOffsetLeft += this.__stepDistance + this.__options.gap;
                    }
                }
                __createLabel(posX, text) {
                    // Create label
                    const intervalLabel = new Analytics.SVGText(posX, this.__startPoint.y + this.__tickLength * 2, text, ["tchmi-analytics-charting-axis-label-text"]);
                    this.__addLabel(intervalLabel);
                    intervalLabel.x -= intervalLabel.width / 2;
                    // Create tick
                    const tick = new Analytics.SVGLine(posX, this.__startPoint.y, posX, this.__startPoint.y + this.__tickLength, ["tchmi-analytics-charting-axis-tick"]);
                    this.__addTick(tick);
                    return intervalLabel;
                }
            }
            Analytics.XLabelAxis = XLabelAxis;
        })(Analytics = Controls.Analytics || (Controls.Analytics = {}));
    })(Controls = TcHmi.Controls || (TcHmi.Controls = {}));
})(TcHmi || (TcHmi = {}));
//# sourceMappingURL=X_Label_Axis.js.map