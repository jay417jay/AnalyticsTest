declare namespace CustomElements {
    export class Calendar extends AnalyticsBaseCustomElement {
        protected __elMoveUpButtons: HTMLElement[];
        protected __elMoveDownButtons: HTMLElement[];
        protected __elSetTimeButton: HTMLElement;
        protected __elCancelTimeButton: HTMLElement;
        protected __elTimeInputs: HTMLElement[];
        protected __elLabel: HTMLElement;
        protected __elModal: HTMLElement;
        protected __elHead: HTMLElement[];
        protected __elDays: HTMLElement[];
        protected __elEntries: HTMLElement[];
        protected __elHeadMonth: HTMLElement;
        protected __elTimeSelection: HTMLElement;
        protected __isStartTime: boolean;
        protected __allDateSelectable: boolean;
        protected __sourceRecords: Map<string, TcHmi.Controls.Analytics.TimeRange[]>;
        /** The shown Year, Month in calendar */
        protected __viewedMonthNYear: TcHmi.Controls.Analytics.DCTimestruct;
        /** Selected date */
        protected __selectedTime: TcHmi.Controls.Analytics.DCTimestruct;
        get selectedTime(): TcHmi.Controls.Analytics.DCTimestruct;
        /** Time range */
        protected __timeRange: TcHmi.Controls.Analytics.TimeRange;
        /** Color of selected cell */
        protected readonly __selectedCellColor: string;
        /** Color of selected range */
        protected readonly __cellRangeColor: string;
        /** Color of default cell */
        protected readonly __cellColor: string | null;
        /** Optional parent element of the calendar */
        protected __elParent: HTMLElement | null;
        /** Close the element when click occours */
        protected __clickOnClose: boolean;
        constructor();
        protected __init(): void;
        protected __attach(): void;
        private __record;
        /** Selected Record (Default: null) */
        get record(): TcHmi.Controls.Analytics.IRecordData;
        set record(value: TcHmi.Controls.Analytics.IRecordData);
        protected __onRecordChanged(): void;
        private __plusIcon;
        /** Path to plus icon (Default: "Beckhoff.TwinCAT.HMI.Analytics.Controls/1_Library/Native/Icons/plus.svg") */
        get plusIcon(): string;
        set plusIcon(value: string);
        protected __onPlusIconChanged(): void;
        private __minusIcon;
        /** Path to minus icon (Default: "Beckhoff.TwinCAT.HMI.Analytics.Controls/1_Library/Native/Icons/minus.svg") */
        get minusIcon(): string;
        set minusIcon(value: string);
        protected __onMinusIconChanged(): void;
        private __fullMonthsAlias;
        /** Alias month names (Default: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']) */
        get fullMonthsAlias(): string[];
        set fullMonthsAlias(value: string[]);
        protected __onFullMonthsAliasChanged(): void;
        private __daysOfWeekAlias;
        /** Day of week names (Default: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']) */
        get daysOfWeekAlias(): string[];
        set daysOfWeekAlias(value: string[]);
        protected __onDaysOfWeekAliasChanged(): void;
        private __startTimeAlias;
        /** Start time alias name (Default: 'Start Time') */
        get startTimeAlias(): string;
        set startTimeAlias(value: string);
        protected __onStartTimeAliasChanged(): void;
        private __stopTimeAlias;
        /** Stop time alias name (Default: 'Stop Time') */
        get stopTimeAlias(): string;
        set stopTimeAlias(value: string);
        protected __onStopTimeAliasChanged(): void;
        private __setTimeAlias;
        /** Set time alias name (Default: 'Set Time') */
        get setTimeAlias(): string;
        set setTimeAlias(value: string);
        protected __onSetTimeAliasChanged(): void;
        private __cancelAlias;
        /** Cancel alias name (Default: 'Cancel') */
        get cancelAlias(): string;
        set cancelAlias(value: string);
        protected __onCancelAliasChanged(): void;
        private __showShadow;
        /** Cancel alias name (Default: 'Cancel') */
        get showShadow(): boolean;
        set showShadow(value: boolean);
        protected __onShowShadowChanged(): void;
        openCalendar(isStartTime: boolean, record: TcHmi.Controls.Analytics.IRecordData, allDateSelectable?: boolean, sources?: TcHmi.Controls.Analytics.I_SE_DataSourceSymbolEntry[], parentElement?: HTMLElement, showOnlyCalendar?: boolean): void;
        closeCalendar(applyChanges: boolean): (e: MouseEvent | TouchEvent) => void;
        /*** Reload of Calendar / Time Fields ***/
        protected __reloadAll(): void;
        protected __reloadCalendar(): void;
        protected __setTdBackgroundColor(element: HTMLElement, backgroundColor: string): () => void;
        protected __reloadTimeInput(): void;
        protected __getEntryBorder(timestruct: TcHmi.Controls.Analytics.DCTimestruct): string;
        protected __getDateVisibilty(date: TcHmi.Controls.Analytics.TimeRange): E_RecordVisibility;
        /*** Helper Methods ***/
        protected __isValidDate(year: number, month: number, day: number): boolean;
        protected __dateIsSelectable(cellDate: TcHmi.Controls.Analytics.DCTimestruct): boolean;
        protected __calendarGetMonthName(monthIndex: number): string;
        protected __checkAndUpdateTimeInput(index: number, offset?: number): void;
        protected __checkAndUpdateTimeByTimeRange(): boolean;
        protected __addEventListeners(): void;
        protected __onResized: () => () => void;
        protected __prevMonthClicked(): () => void;
        protected __nextMonthClicked(): () => void;
        protected __cellClicked(cellIndex: number): (e: MouseEvent | TouchEvent) => void;
        protected __timeInputChanged(index: number): () => void;
        protected __timeMoveUpDown(index: number, countUp: boolean): () => void;
        protected __getHtml(): string;
    }
    enum E_RecordVisibility {
        NONE = 0,
        PARTS_OF_TIMERANGE = 1,
        FULL_DATA = 2
    }
    export {};
}
