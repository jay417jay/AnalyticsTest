declare namespace TcHmi.Controls.Analytics {
    export class AM8xxx extends TcHmi.Controls.Analytics.AnalyticsControl {
        /** Container element of the pinned AverageCharts */
        protected __elContainerGrid: HTMLElement;
        /** Container of the pinned values */
        protected __elTextContainer: HTMLElement;
        /** Container of the unpinned additional values */
        protected __elAdditionalTextContainer: HTMLElement;
        /** Container for all Charts */
        protected __chartContainerMap: Map<string, AverageContainer>;
        /** Container for all text values */
        protected __valueContainerMap: Map<string, ValueContainer>;
        /** Container for all additional text values */
        protected __additionalValueContainerMap: Map<string, ValueContainer>;
        /** Map of value id to containers (Chart/AdditionalValue) */
        protected __containerMap: Map<string, IContainer>;
        /** Expander to expand/collapse the additional values */
        protected __elExpander: JQuery;
        /** State of expander */
        protected __isCollapsed: boolean | undefined;
        /** General transition duration in seconds */
        protected __transitionDuration: number;
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        protected readonly __humidityId: string;
        protected __humidity: ILiveMinMaxAvg;
        setHumidity(valueNew: ILiveMinMaxAvg | null): void;
        protected __onResolverForHumidityWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<ILiveMinMaxAvg>) => void;
        getHumidity(): ILiveMinMaxAvg;
        protected __processHumidity(): void;
        protected readonly __temperatureId: string;
        protected __temperature: ILiveMinMaxAvg;
        setTemperature(valueNew: ILiveMinMaxAvg | null): void;
        protected __onResolverForTemperatureWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<ILiveMinMaxAvg>) => void;
        getTemperature(): ILiveMinMaxAvg;
        protected __processTemperature(): void;
        protected readonly __XRmsAccelerationId: string;
        protected __XRmsAcceleration: ILiveMinMaxAvg;
        setXRmsAcceleration(valueNew: ILiveMinMaxAvg | null): void;
        protected __onResolverForXRmsAccelerationWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<ILiveMinMaxAvg>) => void;
        getXRmsAcceleration(): ILiveMinMaxAvg;
        protected __processXRmsAcceleration(): void;
        protected readonly __XKurtosisAccelerationId: string;
        protected __XKurtosisAcceleration: ILiveMinMaxAvg;
        setXKurtosisAcceleration(valueNew: ILiveMinMaxAvg | null): void;
        protected __onResolverForXKurtosisAccelerationWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<ILiveMinMaxAvg>) => void;
        getXKurtosisAcceleration(): ILiveMinMaxAvg;
        protected __processXKurtosisAcceleration(): void;
        protected readonly __XPeakPeakAccelerationId: string;
        protected __XPeakPeakAcceleration: ILiveMinMaxAvg;
        setXPeakPeakAcceleration(valueNew: ILiveMinMaxAvg | null): void;
        protected __onResolverForXPeakPeakAccelerationWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<ILiveMinMaxAvg>) => void;
        getXPeakPeakAcceleration(): ILiveMinMaxAvg;
        protected __processXPeakPeakAcceleration(): void;
        protected readonly __YRmsAccelerationId: string;
        protected __YRmsAcceleration: ILiveMinMaxAvg;
        setYRmsAcceleration(valueNew: ILiveMinMaxAvg | null): void;
        protected __onResolverForYRmsAccelerationWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<ILiveMinMaxAvg>) => void;
        getYRmsAcceleration(): ILiveMinMaxAvg;
        protected __processYRmsAcceleration(): void;
        protected readonly __YKurtosisAccelerationId: string;
        protected __YKurtosisAcceleration: ILiveMinMaxAvg;
        setYKurtosisAcceleration(valueNew: ILiveMinMaxAvg | null): void;
        protected __onResolverForYKurtosisAccelerationWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<ILiveMinMaxAvg>) => void;
        getYKurtosisAcceleration(): ILiveMinMaxAvg;
        protected __processYKurtosisAcceleration(): void;
        protected readonly __YPeakPeakAccelerationId: string;
        protected __YPeakPeakAcceleration: ILiveMinMaxAvg;
        setYPeakPeakAcceleration(valueNew: ILiveMinMaxAvg | null): void;
        protected __onResolverForYPeakPeakAccelerationWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<ILiveMinMaxAvg>) => void;
        getYPeakPeakAcceleration(): ILiveMinMaxAvg;
        protected __processYPeakPeakAcceleration(): void;
        protected readonly __countXShocksId: string;
        protected __countXShocks: number;
        setCountXShocks(valueNew: number | null): void;
        getCountXShocks(): number;
        protected __processCountXShocks(): void;
        protected readonly __lastXShockEventId: string;
        protected __lastXShockEvent: DCTimestruct;
        setLastXShockEvent(valueNew: any | null): void;
        getLastXShockEvent(): any;
        protected __processLastXShockEvent(): void;
        protected readonly __countYShocksId: string;
        protected __countYShocks: number;
        setCountYShocks(valueNew: number | null): void;
        getCountYShocks(): number;
        protected __processCountYShocks(): void;
        protected readonly __lastYShockEventId: string;
        protected __lastYShockEvent: DCTimestruct;
        setLastYShockEvent(valueNew: any | null): void;
        getLastYShockEvent(): any;
        protected __processLastYShockEvent(): void;
        protected readonly __countTotalShocksId: string;
        protected __countTotalShocks: number;
        setCountTotalShocks(valueNew: number | null): void;
        getCountTotalShocks(): number;
        protected __processCountTotalShocks(): void;
        protected readonly __sectionsHumidityId: string;
        protected __sectionsHumidity: number[];
        setSectionsHumidity(valueNew: number[] | null): void;
        getSectionsHumidity(): number[];
        protected __processSectionsHumidity(): void;
        protected readonly __sectionsTemperatureId: string;
        protected __sectionsTemperature: number[];
        setSectionsTemperature(valueNew: number[] | null): void;
        getSectionsTemperature(): number[];
        protected __processSectionsTemperature(): void;
        protected readonly __XRmsAccelerationArrayId: string;
        protected __XRmsAccelerationArray: number[];
        setXRmsAccelerationArray(valueNew: number[] | null): void;
        getXRmsAccelerationArray(): number[];
        protected __processXRmsAccelerationArray(): void;
        protected readonly __YRmsAccelerationArrayId: string;
        protected __YRmsAccelerationArray: number[];
        setYRmsAccelerationArray(valueNew: number[] | null): void;
        getYRmsAccelerationArray(): number[];
        protected __processYRmsAccelerationArray(): void;
        protected __updateContainer(id: string): void;
        __addAverageChart(valueInfo: IValueInfo): void;
        __addTextContainer(valueInfo: IValueInfo): void;
        __addAdditionalTextContainer(valueInfo: IValueInfo): void;
        protected __removeFromContainer(id: string): void;
        protected __setIsCollapsed(value: boolean): void;
        protected __getIsExpanded(): void;
        protected __applyFontSize(): void;
        protected __updateAdditionalTextContainerHeight(): void;
        protected __processColor(): void;
        protected __processNameAlias(): void;
        protected __processAutoFontSize(): void;
        protected __processFontSize(): void;
        protected __processLocalizationReader(): void;
        protected __addEventListeners(): void;
        protected __expanderClicked(): void;
        protected __processIsCollapsed(): void;
        protected __onResized: () => (evt: EventProvider.Event, ctrl: Controls.Analytics.AnalyticsControl) => void;
    }
    interface IContainer {
        updateAll(): void;
        updateLocal(): void;
        update(): void;
    }
    class AverageContainer implements IContainer {
        /** Parent control */
        private __control;
        constructor(control: AM8xxx, valueInfo: IValueInfo);
        /** Container of all elements */
        elContainer: HTMLElement;
        /** Average Chart control */
        elChart: TcHmi.Controls.Analytics.AverageChart;
        /** Heading text */
        elHeading: HTMLElement;
        /** Pin-SVG to unpin element */
        elPin: HTMLElement;
        /** Value text */
        elValue: HTMLElement;
        /** All information of the value to display */
        valueInfo: IValueInfo;
        updateAll(): void;
        updateLocal(): void;
        update(): void;
        destroy(): void;
    }
    class ValueContainer implements IContainer {
        /** Parent control */
        private __control;
        constructor(control: AM8xxx, valueInfo: IValueInfo, pinned: boolean);
        /** Container of all elements */
        elContainer: HTMLElement;
        /** Heading text */
        elHeading: HTMLElement;
        /** Pin-SVG to unpin element */
        elPin: HTMLElement;
        /** Value text */
        elValue: HTMLElement;
        /** All information of the value to display */
        valueInfo: IValueInfo;
        updateAll(): void;
        updateLocal(): void;
        update(): void;
    }
    interface ILiveMinMaxAvg {
        fLive: number;
        fMin: number;
        fMax: number;
        fAvg: number;
    }
    interface IValueInfo {
        id: string;
        unit: string;
        image: string;
        isStruct: boolean;
        defaultContainer: ContainerType;
        sortPriority?: number;
        valueGetter: () => number | ILiveMinMaxAvg;
    }
    enum ContainerType {
        AverageChart = 0,
        ValueContainer = 1,
        AdditionalValueContainer = 2
    }
    export {};
}
