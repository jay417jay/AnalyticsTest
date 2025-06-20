declare namespace CustomElements {
    class Record extends BaseCustomElement {
        /** Title element of the Record */
        protected __elTitle: HTMLElement;
        /** Time range element (start - stop) of the Record */
        protected __elRange: HTMLElement;
        constructor();
        protected __init(): void;
        protected __attach(): void;
        private __title;
        /** Title of the Record (Default: "Record") */
        get title(): string;
        set title(value: string);
        protected __onTitleChanged(): void;
        private __startTime;
        /** Record start time (Default: new DCTimestruct(2020, 1, 1)) */
        get startTime(): TcHmi.Controls.Analytics.DCTimestruct;
        set startTime(value: TcHmi.Controls.Analytics.DCTimestruct);
        protected __onStartTimeChanged(): void;
        private __endTime;
        /** Record end time (Default: new DCTimestruct(2020, 1, 2)) */
        get endTime(): TcHmi.Controls.Analytics.DCTimestruct;
        set endTime(value: TcHmi.Controls.Analytics.DCTimestruct);
        protected __onEndTimeChanged(): void;
        private __isActive;
        /** Whether the Record is active (selected) or not (Default: false). Active records are visibly highlighted. */
        get isActive(): boolean;
        set isActive(value: boolean);
        protected __onIsActiveChanged(): void;
        private __recordID;
        /** Record ID (Default: 0) */
        get recordID(): number;
        set recordID(value: number);
        protected __onRecordIDChanged(): void;
        protected __getRecRoundedIntervalTime(interval: TcHmi.Controls.Analytics.TimeSpan): string;
        protected __processTimeChanged(): void;
        protected __getHtml(): string;
    }
}
