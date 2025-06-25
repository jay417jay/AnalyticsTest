var TcHmi;
(function (TcHmi) {
    var Controls;
    (function (Controls) {
        var Analytics;
        (function (Analytics) {
            class AM8xxx extends TcHmi.Controls.Analytics.AnalyticsControl {
                //#endregion Fields
                //#region Ctor, default overrides (__previnit, ...)
                constructor(element, pcElement, attrs) {
                    super(element, pcElement, attrs);
                    /** Container for all Charts */
                    this.__chartContainerMap = new Map();
                    /** Container for all text values */
                    this.__valueContainerMap = new Map();
                    /** Container for all additional text values */
                    this.__additionalValueContainerMap = new Map();
                    /** Map of value id to containers (Chart/AdditionalValue) */
                    this.__containerMap = new Map();
                    /** General transition duration in seconds */
                    this.__transitionDuration = 0.5;
                    //#endregion Ctor, default overrides (__previnit, ...)
                    //#region Properties
                    this.__humidityId = 'Humidity';
                    this.__onResolverForHumidityWatchCallback = (data) => {
                        if (this.__isAttached === false) {
                            this.__suspendObjectResolver(this.__humidityId);
                        }
                        if (tchmi_equal(data.value, this.__humidity)) {
                            return;
                        }
                        this.__humidity = data.value || null;
                        TcHmi.EventProvider.raise(`${this.__id}.${Analytics.Str.ON_FRC}`, [`${Analytics.Str.GET}${this.__humidityId}`]);
                        this.__processHumidity();
                    };
                    this.__temperatureId = 'Temperature';
                    this.__onResolverForTemperatureWatchCallback = (data) => {
                        if (this.__isAttached === false) {
                            this.__suspendObjectResolver(this.__temperatureId);
                        }
                        if (tchmi_equal(data.value, this.__temperature)) {
                            return;
                        }
                        this.__temperature = data.value || null;
                        TcHmi.EventProvider.raise(`${this.__id}.${Analytics.Str.ON_FRC}`, [`${Analytics.Str.GET}${this.__temperatureId}`]);
                        this.__processTemperature();
                    };
                    this.__XRmsAccelerationId = 'XRmsAcceleration';
                    this.__onResolverForXRmsAccelerationWatchCallback = (data) => {
                        if (this.__isAttached === false) {
                            this.__suspendObjectResolver(this.__XRmsAccelerationId);
                        }
                        if (tchmi_equal(data.value, this.__XRmsAcceleration)) {
                            return;
                        }
                        this.__XRmsAcceleration = data.value || null;
                        TcHmi.EventProvider.raise(`${this.__id}.${Analytics.Str.ON_FRC}`, [`${Analytics.Str.GET}${this.__XRmsAccelerationId}`]);
                        this.__processXRmsAcceleration();
                    };
                    this.__XKurtosisAccelerationId = 'XKurtosisAcceleration';
                    this.__onResolverForXKurtosisAccelerationWatchCallback = (data) => {
                        if (this.__isAttached === false) {
                            this.__suspendObjectResolver(this.__XKurtosisAccelerationId);
                        }
                        if (tchmi_equal(data.value, this.__XKurtosisAcceleration)) {
                            return;
                        }
                        this.__XKurtosisAcceleration = data.value || null;
                        TcHmi.EventProvider.raise(`${this.__id}.${Analytics.Str.ON_FRC}`, [`${Analytics.Str.GET}${this.__XKurtosisAccelerationId}`]);
                        this.__processXKurtosisAcceleration();
                    };
                    this.__XPeakPeakAccelerationId = 'XPeakPeakAcceleration';
                    this.__onResolverForXPeakPeakAccelerationWatchCallback = (data) => {
                        if (this.__isAttached === false) {
                            this.__suspendObjectResolver(this.__XPeakPeakAccelerationId);
                        }
                        if (tchmi_equal(data.value, this.__XPeakPeakAcceleration)) {
                            return;
                        }
                        this.__XPeakPeakAcceleration = data.value || null;
                        TcHmi.EventProvider.raise(`${this.__id}.${Analytics.Str.ON_FRC}`, [`${Analytics.Str.GET}${this.__XPeakPeakAccelerationId}`]);
                        this.__processXPeakPeakAcceleration();
                    };
                    this.__YRmsAccelerationId = 'YRmsAcceleration';
                    this.__onResolverForYRmsAccelerationWatchCallback = (data) => {
                        if (this.__isAttached === false) {
                            this.__suspendObjectResolver(this.__YRmsAccelerationId);
                        }
                        if (tchmi_equal(data.value, this.__YRmsAcceleration)) {
                            return;
                        }
                        this.__YRmsAcceleration = data.value || null;
                        TcHmi.EventProvider.raise(`${this.__id}.${Analytics.Str.ON_FRC}`, [`${Analytics.Str.GET}${this.__YRmsAccelerationId}`]);
                        this.__processYRmsAcceleration();
                    };
                    this.__YKurtosisAccelerationId = 'YKurtosisAcceleration';
                    this.__onResolverForYKurtosisAccelerationWatchCallback = (data) => {
                        if (this.__isAttached === false) {
                            this.__suspendObjectResolver(this.__YKurtosisAccelerationId);
                        }
                        if (tchmi_equal(data.value, this.__YKurtosisAcceleration)) {
                            return;
                        }
                        this.__YKurtosisAcceleration = data.value || null;
                        TcHmi.EventProvider.raise(`${this.__id}.${Analytics.Str.ON_FRC}`, [`${Analytics.Str.GET}${this.__YKurtosisAccelerationId}`]);
                        this.__processYKurtosisAcceleration();
                    };
                    this.__YPeakPeakAccelerationId = 'YPeakPeakAcceleration';
                    this.__onResolverForYPeakPeakAccelerationWatchCallback = (data) => {
                        if (this.__isAttached === false) {
                            this.__suspendObjectResolver(this.__YPeakPeakAccelerationId);
                        }
                        if (tchmi_equal(data.value, this.__YPeakPeakAcceleration)) {
                            return;
                        }
                        this.__YPeakPeakAcceleration = data.value || null;
                        TcHmi.EventProvider.raise(`${this.__id}.${Analytics.Str.ON_FRC}`, [`${Analytics.Str.GET}${this.__YPeakPeakAccelerationId}`]);
                        this.__processYPeakPeakAcceleration();
                    };
                    this.__countXShocksId = 'CountXShocks';
                    this.__lastXShockEventId = 'LastXShockEvent';
                    this.__countYShocksId = 'CountYShocks';
                    this.__lastYShockEventId = 'LastYShockEvent';
                    this.__countTotalShocksId = 'CountTotalShocks';
                    this.__sectionsHumidityId = 'SectionsHumidity';
                    this.__sectionsTemperatureId = 'SectionsTemperature';
                    this.__XRmsAccelerationArrayId = 'XRmsAccelerationArray';
                    this.__YRmsAccelerationArrayId = 'YRmsAccelerationArray';
                    this.__onResized = () => {
                        return (evt, ctrl) => {
                            const scaleFactor = super.__onResizedBase(evt, ctrl);
                            if (scaleFactor === null)
                                return;
                            this.__elTemplateContainer.css("font-size", Analytics.Str.px(16 * scaleFactor.default));
                            this.__elementTemplateRoot.css("--image-size", Analytics.Str.px(120 * scaleFactor.default));
                            const maxHeight = Math.max(...Array.from(this.__chartContainerMap.values()).map(container => container.elHeading.getBoundingClientRect().height));
                            this.__elementTemplateRoot.css("--avg-heading-height", Analytics.Str.px(maxHeight + 25));
                            this.__updateAdditionalTextContainerHeight();
                        };
                    };
                }
                __previnit() {
                    var _a;
                    super.__previnit();
                    if (this.__hasLicense == false) {
                        return;
                    }
                    this.__defaultWidth = 940;
                    this.__defaultHeight = 790;
                    this.__lastXShockEvent = Analytics.DCTimestruct.fromDate(new Date());
                    this.__lastYShockEvent = Analytics.DCTimestruct.fromDate(new Date());
                    this.__elContainerGrid = this.__elementTemplateRoot.find('.tchmi-am8xxx-container-grid')[0];
                    this.__elTextContainer = this.__elementTemplateRoot.find('.tchmi-am8xxx-text-containers')[0];
                    this.__elAdditionalTextContainer = this.__elementTemplateRoot.find('.tchmi-am8xxx-text-containers')[1];
                    const observer = new MutationObserver(() => {
                        this.__updateAdditionalTextContainerHeight();
                    });
                    observer.observe(this.__elAdditionalTextContainer, { childList: true, subtree: true });
                    const infos = [
                        {
                            id: this.__humidityId,
                            unit: "%",
                            image: "Icons/humidity_01.png",
                            isStruct: true,
                            defaultContainer: ContainerType.AverageChart,
                            valueGetter: () => this.getHumidity()
                        },
                        {
                            id: this.__temperatureId,
                            unit: "°C",
                            image: "Icons/temp_01.png",
                            isStruct: true,
                            defaultContainer: ContainerType.AverageChart,
                            valueGetter: () => this.getTemperature()
                        },
                        {
                            id: this.__XRmsAccelerationId,
                            unit: "g",
                            image: "Icons/aX_01.png",
                            isStruct: true,
                            defaultContainer: ContainerType.AverageChart,
                            valueGetter: () => this.getXRmsAcceleration()
                        },
                        {
                            id: this.__YRmsAccelerationId,
                            unit: "g",
                            image: "Icons/aY_01.png",
                            isStruct: true,
                            defaultContainer: ContainerType.AverageChart,
                            valueGetter: () => this.getYRmsAcceleration()
                        },
                        {
                            id: this.__XKurtosisAccelerationId,
                            unit: "",
                            image: "Icons/aX_01.png",
                            isStruct: true,
                            defaultContainer: ContainerType.AdditionalValueContainer,
                            valueGetter: () => this.getXKurtosisAcceleration()
                        },
                        {
                            id: this.__YKurtosisAccelerationId,
                            unit: "",
                            image: "Icons/aY_01.png",
                            isStruct: true,
                            defaultContainer: ContainerType.AdditionalValueContainer,
                            valueGetter: () => this.getYKurtosisAcceleration()
                        },
                        {
                            id: this.__XPeakPeakAccelerationId,
                            unit: "",
                            image: "Icons/aX_01.png",
                            isStruct: true,
                            defaultContainer: ContainerType.AdditionalValueContainer,
                            valueGetter: () => this.getXPeakPeakAcceleration()
                        },
                        {
                            id: this.__YPeakPeakAccelerationId,
                            unit: "",
                            image: "Icons/aY_01.png",
                            isStruct: true,
                            defaultContainer: ContainerType.AdditionalValueContainer,
                            valueGetter: () => this.getYPeakPeakAcceleration()
                        },
                        {
                            id: this.__countXShocksId,
                            unit: "",
                            image: "",
                            isStruct: false,
                            defaultContainer: ContainerType.AdditionalValueContainer,
                            valueGetter: () => this.getCountXShocks()
                        },
                        {
                            id: this.__lastXShockEventId,
                            unit: "",
                            image: "",
                            isStruct: false,
                            defaultContainer: ContainerType.AdditionalValueContainer,
                            valueGetter: () => this.getLastXShockEvent()
                        },
                        {
                            id: this.__countYShocksId,
                            unit: "",
                            image: "",
                            isStruct: false,
                            defaultContainer: ContainerType.AdditionalValueContainer,
                            valueGetter: () => this.getCountYShocks()
                        },
                        {
                            id: this.__lastYShockEventId,
                            unit: "",
                            image: "",
                            isStruct: false,
                            defaultContainer: ContainerType.AdditionalValueContainer,
                            valueGetter: () => this.getLastYShockEvent()
                        },
                        {
                            id: this.__countTotalShocksId,
                            unit: "",
                            image: "",
                            isStruct: false,
                            defaultContainer: ContainerType.ValueContainer,
                            valueGetter: () => this.getCountTotalShocks()
                        },
                    ];
                    const sortedInfos = infos.map(info => {
                        var _a;
                        const sortPriority = parseInt((_a = Analytics.Utilities.getPersistentData(`${this.__secureId}_sortPriority_${info.id}`)) !== null && _a !== void 0 ? _a : "0");
                        info.sortPriority = sortPriority;
                        return { info, sortPriority };
                    }).sort((a, b) => a.sortPriority - b.sortPriority);
                    // Add elements to the container in the correct order
                    for (const { info } of sortedInfos) {
                        const containerType = (_a = Analytics.Utilities.getPersistentData(`${this.__secureId}_cType_${info.id}`)) !== null && _a !== void 0 ? _a : info.defaultContainer.toString();
                        if (containerType === ContainerType.AverageChart.toString()) {
                            this.__addAverageChart(info);
                        }
                        else if (containerType === ContainerType.ValueContainer.toString()) {
                            this.__addTextContainer(info);
                        }
                        else if (containerType === ContainerType.AdditionalValueContainer.toString()) {
                            this.__addAdditionalTextContainer(info);
                        }
                        else {
                            // Should not happen
                            this.__addAdditionalTextContainer(info);
                        }
                    }
                    this.__elExpander = this.__elementTemplateRoot.find('.tchmi-am8xxx-expander');
                    this.__elementTemplateRoot.css("--transition-duration", `${this.__transitionDuration}s`);
                    this.__addEventListeners();
                }
                __init() {
                    let properties = [
                        new Analytics.Property(this, "FontSize", "Font Size", Analytics.E_DataType.UINTEGER),
                        new Analytics.Property(this, "AutoFontSize", "Auto Font Size", Analytics.E_DataType.BOOLEAN),
                    ];
                    super.setEditableProperties(properties);
                    super.__init();
                    this.__getIsExpanded();
                    this.__processIsCollapsed();
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
                setHumidity(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal(this.__humidityId);
                    }
                    let resolverInfo = this.__objectResolvers.get(this.__humidityId);
                    if (resolverInfo) {
                        if (resolverInfo.watchDestroyer) {
                            resolverInfo.watchDestroyer();
                        }
                        resolverInfo.resolver.destroy();
                    }
                    let resolver = new TcHmi.Symbol.ObjectResolver(convertedValue);
                    this.__objectResolvers.set(this.__humidityId, {
                        resolver: resolver,
                        watchCallback: this.__onResolverForHumidityWatchCallback,
                        watchDestroyer: resolver.watch(this.__onResolverForHumidityWatchCallback)
                    });
                }
                getHumidity() {
                    return this.__humidity;
                }
                __processHumidity() {
                    this.__updateContainer(this.__humidityId);
                }
                setTemperature(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal(this.__temperatureId);
                    }
                    let resolverInfo = this.__objectResolvers.get(this.__temperatureId);
                    if (resolverInfo) {
                        if (resolverInfo.watchDestroyer) {
                            resolverInfo.watchDestroyer();
                        }
                        resolverInfo.resolver.destroy();
                    }
                    let resolver = new TcHmi.Symbol.ObjectResolver(convertedValue);
                    this.__objectResolvers.set(this.__temperatureId, {
                        resolver: resolver,
                        watchCallback: this.__onResolverForTemperatureWatchCallback,
                        watchDestroyer: resolver.watch(this.__onResolverForTemperatureWatchCallback)
                    });
                }
                getTemperature() {
                    return this.__temperature;
                }
                __processTemperature() {
                    this.__updateContainer(this.__temperatureId);
                }
                setXRmsAcceleration(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal(this.__XRmsAccelerationId);
                    }
                    let resolverInfo = this.__objectResolvers.get(this.__XRmsAccelerationId);
                    if (resolverInfo) {
                        if (resolverInfo.watchDestroyer) {
                            resolverInfo.watchDestroyer();
                        }
                        resolverInfo.resolver.destroy();
                    }
                    let resolver = new TcHmi.Symbol.ObjectResolver(convertedValue);
                    this.__objectResolvers.set(this.__XRmsAccelerationId, {
                        resolver: resolver,
                        watchCallback: this.__onResolverForXRmsAccelerationWatchCallback,
                        watchDestroyer: resolver.watch(this.__onResolverForXRmsAccelerationWatchCallback)
                    });
                }
                getXRmsAcceleration() {
                    return this.__XRmsAcceleration;
                }
                __processXRmsAcceleration() {
                    this.__updateContainer(this.__XRmsAccelerationId);
                }
                setXKurtosisAcceleration(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal(this.__XKurtosisAccelerationId);
                    }
                    let resolverInfo = this.__objectResolvers.get(this.__XKurtosisAccelerationId);
                    if (resolverInfo) {
                        if (resolverInfo.watchDestroyer) {
                            resolverInfo.watchDestroyer();
                        }
                        resolverInfo.resolver.destroy();
                    }
                    let resolver = new TcHmi.Symbol.ObjectResolver(convertedValue);
                    this.__objectResolvers.set(this.__XKurtosisAccelerationId, {
                        resolver: resolver,
                        watchCallback: this.__onResolverForXKurtosisAccelerationWatchCallback,
                        watchDestroyer: resolver.watch(this.__onResolverForXKurtosisAccelerationWatchCallback)
                    });
                }
                getXKurtosisAcceleration() {
                    return this.__XKurtosisAcceleration;
                }
                __processXKurtosisAcceleration() {
                    this.__updateContainer(this.__XKurtosisAccelerationId);
                }
                setXPeakPeakAcceleration(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal(this.__XPeakPeakAccelerationId);
                    }
                    let resolverInfo = this.__objectResolvers.get(this.__XPeakPeakAccelerationId);
                    if (resolverInfo) {
                        if (resolverInfo.watchDestroyer) {
                            resolverInfo.watchDestroyer();
                        }
                        resolverInfo.resolver.destroy();
                    }
                    let resolver = new TcHmi.Symbol.ObjectResolver(convertedValue);
                    this.__objectResolvers.set(this.__XPeakPeakAccelerationId, {
                        resolver: resolver,
                        watchCallback: this.__onResolverForXPeakPeakAccelerationWatchCallback,
                        watchDestroyer: resolver.watch(this.__onResolverForXPeakPeakAccelerationWatchCallback)
                    });
                }
                getXPeakPeakAcceleration() {
                    return this.__XPeakPeakAcceleration;
                }
                __processXPeakPeakAcceleration() {
                    this.__updateContainer(this.__XPeakPeakAccelerationId);
                }
                setYRmsAcceleration(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal(this.__YRmsAccelerationId);
                    }
                    let resolverInfo = this.__objectResolvers.get(this.__YRmsAccelerationId);
                    if (resolverInfo) {
                        if (resolverInfo.watchDestroyer) {
                            resolverInfo.watchDestroyer();
                        }
                        resolverInfo.resolver.destroy();
                    }
                    let resolver = new TcHmi.Symbol.ObjectResolver(convertedValue);
                    this.__objectResolvers.set(this.__YRmsAccelerationId, {
                        resolver: resolver,
                        watchCallback: this.__onResolverForYRmsAccelerationWatchCallback,
                        watchDestroyer: resolver.watch(this.__onResolverForYRmsAccelerationWatchCallback)
                    });
                }
                getYRmsAcceleration() {
                    return this.__YRmsAcceleration;
                }
                __processYRmsAcceleration() {
                    this.__updateContainer(this.__YRmsAccelerationId);
                }
                setYKurtosisAcceleration(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal(this.__YKurtosisAccelerationId);
                    }
                    let resolverInfo = this.__objectResolvers.get(this.__YKurtosisAccelerationId);
                    if (resolverInfo) {
                        if (resolverInfo.watchDestroyer) {
                            resolverInfo.watchDestroyer();
                        }
                        resolverInfo.resolver.destroy();
                    }
                    let resolver = new TcHmi.Symbol.ObjectResolver(convertedValue);
                    this.__objectResolvers.set(this.__YKurtosisAccelerationId, {
                        resolver: resolver,
                        watchCallback: this.__onResolverForYKurtosisAccelerationWatchCallback,
                        watchDestroyer: resolver.watch(this.__onResolverForYKurtosisAccelerationWatchCallback)
                    });
                }
                getYKurtosisAcceleration() {
                    return this.__YKurtosisAcceleration;
                }
                __processYKurtosisAcceleration() {
                    this.__updateContainer(this.__YKurtosisAccelerationId);
                }
                setYPeakPeakAcceleration(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal(this.__YPeakPeakAccelerationId);
                    }
                    let resolverInfo = this.__objectResolvers.get(this.__YPeakPeakAccelerationId);
                    if (resolverInfo) {
                        if (resolverInfo.watchDestroyer) {
                            resolverInfo.watchDestroyer();
                        }
                        resolverInfo.resolver.destroy();
                    }
                    let resolver = new TcHmi.Symbol.ObjectResolver(convertedValue);
                    this.__objectResolvers.set(this.__YPeakPeakAccelerationId, {
                        resolver: resolver,
                        watchCallback: this.__onResolverForYPeakPeakAccelerationWatchCallback,
                        watchDestroyer: resolver.watch(this.__onResolverForYPeakPeakAccelerationWatchCallback)
                    });
                }
                getYPeakPeakAcceleration() {
                    return this.__YPeakPeakAcceleration;
                }
                __processYPeakPeakAcceleration() {
                    this.__updateContainer(this.__YPeakPeakAccelerationId);
                }
                setCountXShocks(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toNumber(valueNew);
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal(this.__countXShocksId);
                    }
                    if (convertedValue === this.__countXShocks) {
                        return;
                    }
                    this.__countXShocks = convertedValue;
                    TcHmi.EventProvider.raise(`${this.__id}.${Analytics.Str.ON_FRC}`, [`${Analytics.Str.GET}${this.__countXShocksId}`]);
                    this.__processCountXShocks();
                }
                getCountXShocks() {
                    return this.__countXShocks;
                }
                __processCountXShocks() {
                    this.__updateContainer(this.__countXShocksId);
                }
                setLastXShockEvent(valueNew) {
                    let convertedValue = Object.assign(new Analytics.DCTimestruct(), valueNew);
                    if (convertedValue === null) {
                        convertedValue = Object.assign(new Analytics.DCTimestruct(), this.getAttributeDefaultValueInternal(this.__lastXShockEventId));
                    }
                    if (convertedValue.getTime() === this.__lastXShockEvent.getTime()) {
                        return;
                    }
                    this.__lastXShockEvent = convertedValue;
                    TcHmi.EventProvider.raise(`${this.__id}.${Analytics.Str.ON_FRC}`, [`${Analytics.Str.GET}${this.__lastXShockEventId}`]);
                    this.__processLastXShockEvent();
                }
                getLastXShockEvent() {
                    return this.__lastXShockEvent;
                }
                __processLastXShockEvent() {
                    this.__updateContainer(this.__lastXShockEventId);
                }
                setCountYShocks(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toNumber(valueNew);
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal(this.__countYShocksId);
                    }
                    if (convertedValue === this.__countYShocks) {
                        return;
                    }
                    this.__countYShocks = convertedValue;
                    TcHmi.EventProvider.raise(`${this.__id}.${Analytics.Str.ON_FRC}`, [`${Analytics.Str.GET}${this.__countYShocksId}`]);
                    this.__processCountYShocks();
                }
                getCountYShocks() {
                    return this.__countYShocks;
                }
                __processCountYShocks() {
                    this.__updateContainer(this.__countYShocksId);
                }
                setLastYShockEvent(valueNew) {
                    let convertedValue = Object.assign(new Analytics.DCTimestruct(), valueNew);
                    if (convertedValue === null) {
                        convertedValue = Object.assign(new Analytics.DCTimestruct(), this.getAttributeDefaultValueInternal(this.__lastYShockEventId));
                    }
                    if (convertedValue.getTime() === this.__lastYShockEvent.getTime()) {
                        return;
                    }
                    this.__lastYShockEvent = convertedValue;
                    TcHmi.EventProvider.raise(`${this.__id}.${Analytics.Str.ON_FRC}`, [`${Analytics.Str.GET}${this.__lastYShockEventId}`]);
                    this.__processLastYShockEvent();
                }
                getLastYShockEvent() {
                    return this.__lastYShockEvent;
                }
                __processLastYShockEvent() {
                    this.__updateContainer(this.__lastYShockEventId);
                }
                setCountTotalShocks(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toNumber(valueNew);
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal(this.__countTotalShocksId);
                    }
                    if (convertedValue === this.__countTotalShocks) {
                        return;
                    }
                    this.__countTotalShocks = convertedValue;
                    TcHmi.EventProvider.raise(`${this.__id}.${Analytics.Str.ON_FRC}`, [`${Analytics.Str.GET}${this.__countTotalShocksId}`]);
                    this.__processCountTotalShocks();
                }
                getCountTotalShocks() {
                    return this.__countTotalShocks;
                }
                __processCountTotalShocks() {
                    this.__updateContainer(this.__countTotalShocksId);
                }
                setSectionsHumidity(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal(this.__sectionsHumidityId);
                    }
                    if (convertedValue === this.__sectionsHumidity) {
                        return;
                    }
                    this.__sectionsHumidity = convertedValue;
                    TcHmi.EventProvider.raise(`${this.__id}.${Analytics.Str.ON_FRC}`, [`${Analytics.Str.GET}${this.__sectionsHumidityId}`]);
                    this.__processSectionsHumidity();
                }
                getSectionsHumidity() {
                    return this.__sectionsHumidity;
                }
                __processSectionsHumidity() {
                    this.__updateContainer(this.__sectionsHumidityId);
                }
                setSectionsTemperature(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal(this.__sectionsTemperatureId);
                    }
                    if (convertedValue === this.__sectionsTemperature) {
                        return;
                    }
                    this.__sectionsTemperature = convertedValue;
                    TcHmi.EventProvider.raise(`${this.__id}.${Analytics.Str.ON_FRC}`, [`${Analytics.Str.GET}${this.__sectionsTemperatureId}`]);
                    this.__processSectionsTemperature();
                }
                getSectionsTemperature() {
                    return this.__sectionsTemperature;
                }
                __processSectionsTemperature() {
                    this.__updateContainer(this.__sectionsTemperatureId);
                }
                setXRmsAccelerationArray(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal(this.__XRmsAccelerationArrayId);
                    }
                    if (convertedValue === this.__XRmsAccelerationArray) {
                        return;
                    }
                    this.__XRmsAccelerationArray = convertedValue;
                    TcHmi.EventProvider.raise(`${this.__id}.${Analytics.Str.ON_FRC}`, [`${Analytics.Str.GET}${this.__XRmsAccelerationArrayId}`]);
                    this.__processXRmsAccelerationArray();
                }
                getXRmsAccelerationArray() {
                    return this.__XRmsAccelerationArray;
                }
                __processXRmsAccelerationArray() {
                    this.__updateContainer(this.__XRmsAccelerationArrayId);
                }
                setYRmsAccelerationArray(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal(this.__YRmsAccelerationArrayId);
                    }
                    if (convertedValue === this.__YRmsAccelerationArray) {
                        return;
                    }
                    this.__YRmsAccelerationArray = convertedValue;
                    TcHmi.EventProvider.raise(`${this.__id}.${Analytics.Str.ON_FRC}`, [`${Analytics.Str.GET}${this.__YRmsAccelerationArrayId}`]);
                    this.__processYRmsAccelerationArray();
                }
                getYRmsAccelerationArray() {
                    return this.__YRmsAccelerationArray;
                }
                __processYRmsAccelerationArray() {
                    this.__updateContainer(this.__YRmsAccelerationArrayId);
                }
                //#endregion Properties
                //#region Methods
                __updateContainer(id) {
                    const container = this.__containerMap.get(id);
                    if (container !== undefined) {
                        container.update();
                    }
                }
                __addAverageChart(valueInfo) {
                    this.__removeFromContainer(valueInfo.id);
                    const sortPriority = Math.max(0, ...Array.from(this.__chartContainerMap.values(), c => { var _a; return (_a = c.valueInfo.sortPriority) !== null && _a !== void 0 ? _a : 0; })) + 1;
                    Analytics.Utilities.setPersistentData(`${this.__secureId}_cType_${valueInfo.id}`, ContainerType.AverageChart.toString());
                    Analytics.Utilities.setPersistentData(`${this.__secureId}_sortPriority_${valueInfo.id}`, sortPriority.toString());
                    const containerObj = new AverageContainer(this, valueInfo);
                    containerObj.elContainer.classList.add('tchmi-am8xxx-hide');
                    this.__elContainerGrid.appendChild(containerObj.elContainer);
                    // Fade-in transition
                    requestAnimationFrame(() => {
                        containerObj.elContainer.classList.add('tchmi-am8xxx-show');
                    });
                    this.__chartContainerMap.set(valueInfo.id, containerObj);
                    this.__containerMap.set(valueInfo.id, containerObj);
                    const singleChild = this.__chartContainerMap.size === 1;
                    this.__elContainerGrid.classList.toggle('tchmi-am8xxx-container-grid-single-child', singleChild);
                }
                __addTextContainer(valueInfo) {
                    this.__removeFromContainer(valueInfo.id);
                    const sortPriority = Math.max(0, ...Array.from(this.__valueContainerMap.values(), c => { var _a; return (_a = c.valueInfo.sortPriority) !== null && _a !== void 0 ? _a : 0; })) + 1;
                    Analytics.Utilities.setPersistentData(`${this.__secureId}_cType_${valueInfo.id}`, ContainerType.ValueContainer.toString());
                    Analytics.Utilities.setPersistentData(`${this.__secureId}_sortPriority_${valueInfo.id}`, sortPriority.toString());
                    const containerObj = new ValueContainer(this, valueInfo, true);
                    containerObj.elContainer.classList.add('tchmi-am8xxx-hide');
                    this.__elTextContainer.appendChild(containerObj.elContainer);
                    // Fade-in transition
                    requestAnimationFrame(() => {
                        containerObj.elContainer.classList.add('tchmi-am8xxx-show');
                    });
                    this.__valueContainerMap.set(valueInfo.id, containerObj);
                    this.__containerMap.set(valueInfo.id, containerObj);
                }
                __addAdditionalTextContainer(valueInfo) {
                    this.__removeFromContainer(valueInfo.id);
                    valueInfo.sortPriority = Math.max(0, ...Array.from(this.__additionalValueContainerMap.values(), c => { var _a; return (_a = c.valueInfo.sortPriority) !== null && _a !== void 0 ? _a : 0; })) + 1;
                    Analytics.Utilities.setPersistentData(`${this.__secureId}_cType_${valueInfo.id}`, ContainerType.AdditionalValueContainer.toString());
                    Analytics.Utilities.setPersistentData(`${this.__secureId}_sortPriority_${valueInfo.id}`, valueInfo.sortPriority.toString());
                    const containerObj = new ValueContainer(this, valueInfo, false);
                    containerObj.elContainer.classList.add('tchmi-am8xxx-hide');
                    this.__elAdditionalTextContainer.appendChild(containerObj.elContainer);
                    // Fade-in transition
                    requestAnimationFrame(() => {
                        containerObj.elContainer.classList.add('tchmi-am8xxx-show');
                    });
                    this.__additionalValueContainerMap.set(valueInfo.id, containerObj);
                    this.__containerMap.set(valueInfo.id, containerObj);
                    // Resize max-height of additional container
                    this.__onResized()(null, null);
                }
                __removeFromContainer(id) {
                    const chartContainer = this.__chartContainerMap.get(id);
                    if (chartContainer !== undefined) {
                        this.__elContainerGrid.removeChild(chartContainer.elContainer);
                        this.__chartContainerMap.delete(id);
                        const singleChild = this.__chartContainerMap.size === 1;
                        this.__elContainerGrid.classList.toggle('tchmi-am8xxx-container-grid-single-child', singleChild);
                    }
                    const additionalValueContainer = this.__additionalValueContainerMap.get(id);
                    if (additionalValueContainer !== undefined) {
                        this.__elAdditionalTextContainer.removeChild(additionalValueContainer.elContainer);
                        this.__additionalValueContainerMap.delete(id);
                        // Resize max-height of additional container
                        this.__onResized()(null, null);
                    }
                    const valueContainer = this.__valueContainerMap.get(id);
                    if (valueContainer !== undefined) {
                        this.__elTextContainer.removeChild(valueContainer.elContainer);
                        this.__valueContainerMap.delete(id);
                    }
                    this.__containerMap.delete(id);
                }
                __setIsCollapsed(value) {
                    Analytics.Utilities.setPersistentData(`${this.__secureId}_collapsed`, value.toString());
                }
                __getIsExpanded() {
                    const expandedStr = Analytics.Utilities.getPersistentData(`${this.__secureId}_collapsed`);
                    this.__isCollapsed = Analytics.Utilities.toBoolean(expandedStr);
                }
                __applyFontSize() {
                    if (!this.__autoFontSize) {
                        this.__elTemplateContainer.css("font-size", this.__fontSize);
                    }
                    else {
                        this.__onResized()(null, null);
                    }
                }
                __updateAdditionalTextContainerHeight() {
                    this.__elAdditionalTextContainer.style.maxHeight = Analytics.Str.px(this.__elAdditionalTextContainer.scrollHeight + 15);
                }
                //#endregion Methods
                //#region Overrides
                __processColor() {
                    super.__processColor();
                    for (const container of this.__chartContainerMap.values()) {
                        container.elChart.setFontColor(this.__solidFontColor);
                    }
                }
                __processNameAlias() {
                    if (this.__nameAlias != null) {
                        this.__elementNameAlias[0].innerHTML = this.__nameAlias;
                    }
                    TcHmi.EventProvider.raise(`${this.__id}.onResized`, null);
                }
                __processAutoFontSize() {
                    super.__processAutoFontSize();
                    for (const container of this.__chartContainerMap.values()) {
                        container.elChart.setAutoFontSize(this.__autoFontSize);
                    }
                    this.__applyFontSize();
                }
                __processFontSize() {
                    super.__processFontSize();
                    for (const container of this.__chartContainerMap.values()) {
                        container.elChart.setFontSize(this.__fontSize);
                    }
                    this.__applyFontSize();
                }
                __processLocalizationReader() {
                    super.__processLocalizationReader();
                    for (const container of this.__containerMap.values()) {
                        container.updateLocal();
                    }
                }
                //#endregion Overrides
                //#region EventHandlers / Callbacks
                __addEventListeners() {
                    this.addEventListener(this.__elExpander[0], "click", () => { this.__expanderClicked(); });
                }
                __expanderClicked() {
                    this.__isCollapsed = !this.__isCollapsed;
                    this.__setIsCollapsed(this.__isCollapsed);
                    this.__processIsCollapsed();
                }
                __processIsCollapsed() {
                    this.__elExpander.toggleClass("tchmi-am8xxx-expander-collapsed", this.__isCollapsed);
                    this.__elAdditionalTextContainer.classList.toggle("tchmi-am8xxx-text-containers-collapsed", this.__isCollapsed);
                    // Resize of AverageCharts while transition is in progress
                    Analytics.Utilities.setInterval(() => {
                        for (const container of this.__chartContainerMap.values()) {
                            TcHmi.EventProvider.raise(`${container.elChart.getId()}.onResized`, null);
                        }
                    }, 10, this.__transitionDuration * 1000);
                }
            }
            Analytics.AM8xxx = AM8xxx;
            class AverageContainer {
                constructor(control, valueInfo) {
                    this.__control = control;
                    this.valueInfo = valueInfo;
                    this.elContainer = document.createElement('div');
                    this.elContainer.className = 'tchmi-am8xxx-average-container';
                    const headingContainer = document.createElement('div');
                    headingContainer.className = 'tchmi-am8xxx-heading-container';
                    this.elHeading = document.createElement('div');
                    this.elHeading.className = 'tchmi-am8xxx-heading';
                    this.elPin = document.createElement('div');
                    this.elPin.className = 'tchmi-am8xxx-heading-pin tchmi-analytics-svg-mask';
                    this.elPin.addEventListener('click', () => {
                        this.destroy();
                        this.__control.__addAdditionalTextContainer(this.valueInfo);
                    });
                    this.elValue = document.createElement('div');
                    this.elValue.className = 'tchmi-am8xxx-average-value';
                    headingContainer.appendChild(this.elHeading);
                    headingContainer.appendChild(this.elPin);
                    headingContainer.appendChild(this.elValue);
                    this.elChart = TcHmi.ControlFactory.createEx('TcHmi.Controls.Analytics.AverageChart', `${control.getId()}_Internal_X${valueInfo.id}X`, {
                        'data-tchmi-amount-decimals': 2,
                        'data-tchmi-show-edit-properties': false,
                        'data-tchmi-show-actual-value-text': false,
                        'data-tchmi-show-title': false,
                        'data-tchmi-show-actual-value': true,
                        'data-tchmi-show-last-events': false,
                        'data-tchmi-show-bounds-warning': false
                    });
                    this.elChart.setFontColor(control.getFontColor());
                    this.elChart.getElement().addClass('tchmi-am8xxx-avg');
                    this.elChart.getElement().css("--background-image", `url(${valueInfo.image})`);
                    control.__addChild(this.elChart);
                    this.elContainer.appendChild(headingContainer);
                    this.elContainer.appendChild(this.elChart.getElement()[0]);
                    this.updateAll();
                }
                updateAll() {
                    this.updateLocal();
                    this.update();
                }
                updateLocal() {
                    this.elHeading.textContent = this.__control.local.get(this.valueInfo.id);
                }
                update() {
                    const value = this.valueInfo.valueGetter();
                    if (value === undefined)
                        return;
                    const live = value.fLive;
                    const minValue = value.fMin;
                    const maxValue = value.fMax;
                    const avgValue = value.fAvg;
                    this.elValue.innerHTML = this.__control.getTrimmedNumberWithUnit(live, this.valueInfo.unit, this.__control.getId());
                    this.elChart.setActualValue(live);
                    this.elChart.setMin(minValue);
                    this.elChart.setMax(maxValue);
                    this.elChart.setAvg(avgValue);
                }
                destroy() {
                    this.elChart.destroy();
                }
            }
            class ValueContainer {
                constructor(control, valueInfo, pinned) {
                    this.__control = control;
                    this.valueInfo = valueInfo;
                    this.elContainer = document.createElement('div');
                    this.elContainer.className = 'tchmi-am8xxx-heading-container';
                    this.elHeading = document.createElement('div');
                    this.elHeading.className = 'tchmi-am8xxx-heading';
                    this.elContainer.appendChild(this.elHeading);
                    this.elPin = document.createElement('div');
                    this.elPin.className = 'tchmi-am8xxx-heading-pin tchmi-am8xxx-heading-pin tchmi-analytics-svg-mask';
                    if (!pinned)
                        this.elPin.classList.add('tchmi-am8xxx-heading-unpin');
                    this.elPin.addEventListener('click', () => {
                        if (pinned) {
                            this.__control.__addAdditionalTextContainer(this.valueInfo);
                        }
                        else {
                            if (valueInfo.isStruct) {
                                this.__control.__addAverageChart(this.valueInfo);
                            }
                            else {
                                this.__control.__addTextContainer(this.valueInfo);
                            }
                        }
                    });
                    this.elContainer.appendChild(this.elPin);
                    this.elValue = document.createElement('div');
                    this.elValue.className = 'tchmi-am8xxx-average-value';
                    this.elContainer.appendChild(this.elValue);
                    this.updateAll();
                }
                updateAll() {
                    this.updateLocal();
                    this.update();
                }
                updateLocal() {
                    this.elHeading.textContent = this.__control.local.get(this.valueInfo.id);
                }
                update() {
                    const value = this.valueInfo.valueGetter();
                    if (value === undefined)
                        return;
                    const live = this.valueInfo.isStruct ? value.fLive : value;
                    this.elValue.innerHTML = this.__control.getTrimmedNumberWithUnit(live, this.valueInfo.unit, `${this.__control.getId()}_${this.valueInfo.id}`);
                }
            }
            let ContainerType;
            (function (ContainerType) {
                ContainerType[ContainerType["AverageChart"] = 0] = "AverageChart";
                ContainerType[ContainerType["ValueContainer"] = 1] = "ValueContainer";
                ContainerType[ContainerType["AdditionalValueContainer"] = 2] = "AdditionalValueContainer";
            })(ContainerType || (ContainerType = {}));
        })(Analytics = Controls.Analytics || (Controls.Analytics = {}));
    })(Controls = TcHmi.Controls || (TcHmi.Controls = {}));
})(TcHmi || (TcHmi = {}));
TcHmi.Controls.registerEx('AM8xxx', 'TcHmi.Controls.Analytics', TcHmi.Controls.Analytics.AM8xxx);
//# sourceMappingURL=AM8xxx.js.map