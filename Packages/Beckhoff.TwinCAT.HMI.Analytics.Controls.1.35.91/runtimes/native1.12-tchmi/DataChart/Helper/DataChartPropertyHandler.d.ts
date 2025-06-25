declare namespace TcHmi.Controls.Analytics {
    class DataChartPropertyHandler extends EventTarget {
        constructor(parentElement: TcHmi.Controls.System.baseTcHmiControl, chartDataSources: I_SE_DataSourceSymbolEntry[], defaultColors: string[], calendar: CustomElements.Calendar, createPopupFunction: (message: string, status: CustomElements.PopupStatus, timeInMs: number, suppress: boolean, namespace: string) => void, localizationReader: Locale.LocalizationReader, localKeys: any);
        /** Parent-Element of the Layout */
        protected __parent: TcHmi.Controls.System.baseTcHmiControl;
        /** Eventlistener for callbacks */
        protected __eventListenerManager: EventListenerManager;
        /** Compare Timerange for the timerange selection */
        compareTimerange: I_SE_DisplayRange;
        /** Compare Timerange for the timerange selection */
        chartType: E_ChartType;
        /** Popup handling*/
        createPopupFnctCallback: (message: string, status: CustomElements.PopupStatus, timeInMs: number, suppress: boolean, namespace: string) => void;
        /** Localization reader */
        protected __localizationReader: Locale.LocalizationReader | undefined;
        /** Keys of not-element-specific localizations */
        protected __localKeys: any;
        /** Element for the configuration of units */
        protected __elUnitConfigurator: HTMLDivElement;
        protected readonly __noSymbolSelected: string;
        /** if false the visibility can be set foreach channel */
        protected readonly __useGeneralVisibility: boolean;
        protected __chartDataSources: I_SE_DataSourceSymbolEntry[];
        set chartDataSources(value: I_SE_DataSourceSymbolEntry[]);
        protected __defaultColors: string[];
        protected __selectedChannels: I_ChannelConfigEntry[];
        set selectedChannels(value: I_ChannelConfigEntry[]);
        protected __elCalendar: CustomElements.Calendar;
        /** Time options for the relative timeranges */
        timerangeOptions: I_OptionValue[];
        /** User selected timerange entries */
        timerangeEntries: I_SE_TimerangeEntry[];
        setOptions(): void;
        createPopupFnct(message: string, status: CustomElements.PopupStatus, timeInMs: number, suppress?: boolean, namespace?: string): void;
        appendChannelEntry(): () => void;
        addChannelEntry(chartElements: Element, selectedChannel: I_ChannelConfigEntry): void;
        protected __disableInput(input: HTMLElement): void;
        protected __enableInput(input: HTMLElement): void;
        protected __addEventListenersToChannelEntry(channelEntry: HTMLDetailsElement): void;
        protected __removeChannelEntry(channelEntry: HTMLElement): () => void;
        protected __createChannelColorObject(propertyMainDiv: HTMLElement, chartElements: Element, selectedChannel: I_ChannelConfigEntry, label: HTMLElement): void;
        protected __getNextFreeChannelColor(chartElements: Element): string;
        protected __assignColorToButton(colorButton: HTMLElement, colors: string[]): void;
        appendTimerangeEntry(): () => void;
        protected __logicalAdditionFrom(from: RelativeTimeSelection, add?: boolean): string;
        addTimerangeEntry(timerangeElements: Element, timerange: I_SE_TimerangeEntry, timerangeVisibile?: boolean, isNewAdded?: boolean): void;
        highlightCompareInterval(targetElements: Element[]): () => void;
        protected __validateConfiguration(timerange: I_SE_TimerangeEntry): boolean;
        protected __addLeadingZero(value: number): string;
        protected __changeTimerangeButtonVisibility(index: number): () => void;
        protected __removeTimerangeEntry(index: number): () => void;
        protected __openCalendar(index: number, useFrom: boolean, elButtonElement: HTMLElement): void;
        protected __calendarClosed(index: number, useFrom: boolean): (e: CustomEvent) => void;
        protected __numberTwoDigits(num: number): string;
        protected __onDateChanged(index: number, useFrom: boolean, changedDateS: string): () => void;
        protected __onTimeIntervalChanged(index: number): () => void;
        protected __onTimeItemChanged(index: number, onlyVisibility?: boolean): () => void;
        protected __updateTimevalues(index: number, fromVal: string, toVal: string): void;
        protected __onChartPropertyChanged(onlyDetailToggleStateChanged?: boolean): () => void;
        protected __onTimerangePropertyChanged(onlyVisibility?: boolean, onlyDetailToggleStateChanged?: boolean): () => void;
        clearEvents(): void;
    }
    /**
     * Can be used to validate timeranges
     */
    namespace TimerangeValidator {
        /**
         * Validates that a timerange does not end in the future
         * @param fromTcTime
         * @param toTcTime
         * @param chartType
         * @param compareTimerange
        */
        function validateTimerangeEndsInFuture(timerange: I_SE_TimerangeEntry, chartType: E_ChartType, compareTimerange: I_SE_DisplayRange): boolean;
        /**
         * Validates that the FROM value is smaller than the TO value of a timerange
         * @param from
         * @param to
         * @param chartType
         * @param compareTimerange
         */
        function validateFromSmallerTo(timerange: I_SE_TimerangeEntry): boolean;
    }
    interface I_OptionValue {
        fromValue: string;
        toValue: string;
        text: string;
    }
}
