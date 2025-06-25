var TcHmi;
(function (TcHmi) {
    var Controls;
    (function (Controls) {
        var Analytics;
        (function (Analytics) {
            class XYChannel extends Analytics.LineAreaChannel {
                //#region Ctor
                constructor(symbol, parent, props, xStepDistance, offsetLeft, yStepDistance, offsetTop, channelConfig, options) {
                    super(symbol, parent, props, xStepDistance, offsetLeft, yStepDistance, offsetTop, channelConfig, options);
                    this.__options = options;
                }
                //#endregion
                //#region Props
                //#endregion
                //#region Methods
                /** Draw the channel*/
                drawChannel(axisData, onlyUpdate = false) {
                    if (onlyUpdate) {
                        // Update existing SVG elements
                        for (let i = 0; i < axisData.length; i++) {
                            const dataEntry = axisData[i];
                            const posX = this.__offsetLeft + (i * this.__xStepDistance);
                            const posY = Math.round(this.__offsetTop - (dataEntry.values[0] * this.__yStepDistance));
                            // Update existing point position if it exists
                            if (this.__elCircles[i]) {
                                this.__elCircles[i].updatePosition(posX, posY);
                            }
                        }
                        const elementsToRemove = this.__elCircles.length - axisData.length;
                        for (let i = 0; i < elementsToRemove; i++) {
                            this.__elCircles[this.__elCircles.length - 1 - i].removeFromParent();
                        }
                        this.__elCircles.splice(axisData.length, elementsToRemove);
                        // Update existing line 
                        let first = true;
                        const pointsArray = this.__elCircles.map(circle => {
                            // Extracting cX and cY from each circle
                            const posX = circle.cX;
                            const posY = circle.cY;
                            if (first) {
                                first = false;
                                return this.__createPointsList(posX, posY, false)[0];
                            }
                            // Calling the method and returning the resulting string
                            return this.__createPoint(posX, posY, false);
                        });
                        this.__elPaths[0].updatePath(pointsArray);
                    }
                    else {
                        let pointsForLine = [];
                        let previousX = -1;
                        for (let i = 0; i < axisData.length; i++) {
                            const dataEntry = axisData[i];
                            const posX = this.__offsetLeft + (i * this.__xStepDistance);
                            const posY = Math.round(this.__offsetTop - (dataEntry.values[0] * this.__yStepDistance));
                            let point = this.__createPoint(posX, posY, false);
                            previousX = posX;
                            if (pointsForLine.length == 0) {
                                pointsForLine = this.__createPointsList(posX, posY, false);
                            }
                            pointsForLine.push(point);
                        }
                        this.__createLinie(pointsForLine, false);
                    }
                }
                redrawChannel(axisData) {
                    this.drawChannel(axisData, true);
                }
            }
            Analytics.XYChannel = XYChannel;
        })(Analytics = Controls.Analytics || (Controls.Analytics = {}));
    })(Controls = TcHmi.Controls || (TcHmi.Controls = {}));
})(TcHmi || (TcHmi = {}));
//# sourceMappingURL=XY_Channel.js.map