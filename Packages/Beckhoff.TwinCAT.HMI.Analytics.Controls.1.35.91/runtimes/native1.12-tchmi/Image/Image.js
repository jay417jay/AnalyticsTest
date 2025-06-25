var TcHmi;
(function (TcHmi) {
    var Controls;
    (function (Controls) {
        var Analytics;
        (function (Analytics) {
            class Image extends TcHmi.Controls.Analytics.AnalyticsControl {
                //#endregion Fields
                //#region Ctor, default overrides (__previnit, ...)
                constructor(element, pcElement, attrs) {
                    super(element, pcElement, attrs);
                    this.__onResized = () => {
                        let retryCount = 0;
                        const onResizedFunction = (evt, ctrl) => {
                            const scaleFactor = super.__onResizedBase(evt, ctrl);
                            if (scaleFactor === null)
                                return;
                            const imgWidth = this.getOriginalWidth();
                            const imgHeight = this.getOriginalHeight();
                            if (imgWidth === 0 || imgHeight === 0) {
                                if (++retryCount < 20) {
                                    // Try again if image dimension is not known
                                    setTimeout(() => {
                                        onResizedFunction(evt, ctrl);
                                    }, 50);
                                }
                                return;
                            }
                            retryCount = 0;
                            const vpWidth = scaleFactor.vpWidth;
                            const vpHeight = scaleFactor.vpHeight;
                            const widthScaleFactor = vpWidth / imgWidth;
                            const heightScaleFactor = vpHeight / imgHeight;
                            const factor = Math.min(widthScaleFactor, heightScaleFactor);
                            const scaledImgWidth = imgWidth * factor;
                            const scaledImgHeight = imgHeight * factor;
                            this.__hmiImage.setWidth(scaledImgWidth);
                            this.__hmiImage.setHeight(scaledImgHeight);
                            this.__hmiImage.setLeft((vpWidth - scaledImgWidth) / 2 + 5);
                        };
                        return onResizedFunction;
                    };
                }
                __previnit() {
                    super.__previnit();
                    if (this.__hasLicense == false) {
                        return;
                    }
                    this.__defaultWidth = 310;
                    this.__defaultHeight = 310;
                    this.__hmiImage = TcHmi.Controls.get(this.__id + '_HmiImage');
                    this.__addEventListeners();
                }
                __init() {
                    let properties = [];
                    super.setEditableProperties(properties);
                    super.__init();
                }
                __attach() {
                    super.__attach();
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
                //#endregion Ctor, default overrides (__previnit, ...)
                //#region Properties
                setSrc(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toString(valueNew);
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal('Src');
                    }
                    if (convertedValue === this.getSrc()) {
                        return;
                    }
                    this.__hmiImage.setSrc(convertedValue);
                    TcHmi.EventProvider.raise(`${this.__id}.onFunctionResultChanged`, ['getSrc']);
                    this.__processSrc();
                }
                getSrc() {
                    return this.__hmiImage.getSrc();
                }
                __processSrc() {
                    this.__onResized()(null, null);
                }
                setAlt(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toString(valueNew);
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal('Alt');
                    }
                    if (convertedValue === this.getAlt()) {
                        return;
                    }
                    this.__hmiImage.setAlt(convertedValue);
                    TcHmi.EventProvider.raise(`${this.__id}.onFunctionResultChanged`, ['getAlt']);
                    this.__processAlt();
                }
                getAlt() {
                    return this.__hmiImage.getAlt();
                }
                __processAlt() {
                }
                getOriginalWidth() {
                    return this.__hmiImage.getOriginalWidth();
                }
                getOriginalHeight() {
                    return this.__hmiImage.getOriginalHeight();
                }
                //#region Alias Properties
                //#endregion Alias Properties
                //#endregion Properties
                //#region Methods
                //#endregion Methods
                //#region Overrides
                __processColor() {
                    super.__processColor();
                }
                //#endregion Overrides
                //#region EventHandlers / Callbacks
                __addEventListeners() {
                }
            }
            Analytics.Image = Image;
        })(Analytics = Controls.Analytics || (Controls.Analytics = {}));
    })(Controls = TcHmi.Controls || (TcHmi.Controls = {}));
})(TcHmi || (TcHmi = {}));
TcHmi.Controls.registerEx('Image', 'TcHmi.Controls.Analytics', TcHmi.Controls.Analytics.Image);
//# sourceMappingURL=Image.js.map