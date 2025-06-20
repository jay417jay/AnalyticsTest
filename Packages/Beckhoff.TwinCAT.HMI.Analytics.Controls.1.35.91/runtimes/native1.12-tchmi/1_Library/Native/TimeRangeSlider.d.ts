declare namespace CustomElements {
    class TimeRangeSlider extends RangeSlider {
        constructor();
        protected __init(): void;
        protected __attach(): void;
        private __recordStart;
        /** Record start time (Default: time from minValue). */
        get recordStart(): TcHmi.Controls.Analytics.DCTimestruct;
        set recordStart(value: TcHmi.Controls.Analytics.DCTimestruct);
        protected __onRecordStartChanged(): void;
        private __recordEnd;
        /** Record end time (Default: time from maxValue). */
        get recordEnd(): TcHmi.Controls.Analytics.DCTimestruct;
        set recordEnd(value: TcHmi.Controls.Analytics.DCTimestruct);
        protected __onRecordEndChanged(): void;
        private __selectedRangeStart;
        /** Selected start time (Default: time from selectedValueLeft). */
        get selectedRangeStart(): TcHmi.Controls.Analytics.DCTimestruct;
        set selectedRangeStart(value: TcHmi.Controls.Analytics.DCTimestruct);
        protected __onSelectedRangeStartChanged(): void;
        private __selectedRangeEnd;
        /** Selected end time (Default: time from selectedValueRight). */
        get selectedRangeEnd(): TcHmi.Controls.Analytics.DCTimestruct;
        set selectedRangeEnd(value: TcHmi.Controls.Analytics.DCTimestruct);
        protected __onSelectedRangeEndChanged(): void;
        private __markerTime;
        /** Marker time / current time (Default: time from markerValue).*/
        get markerTime(): TcHmi.Controls.Analytics.DCTimestruct;
        set markerTime(value: TcHmi.Controls.Analytics.DCTimestruct);
        protected __onMarkerTimeChanged(): void;
        private __timeSpan;
        /** Get selected time span. Value may not be set. */
        get timeSpan(): TcHmi.Controls.Analytics.TimeSpan;
        protected __setTimeSpan(value: TcHmi.Controls.Analytics.TimeSpan): void;
        protected __onTimeSpanChanged(): void;
        protected __onMinValueChanged(): void;
        protected __onMaxValueChanged(): void;
        protected __onSelectedValueLeftChanged(): void;
        protected __onSelectedValueRightChanged(): void;
        protected __calculateTimeSpan(): void;
        protected __getRecRoundedIntervalTime(interval: TcHmi.Controls.Analytics.TimeSpan): string;
    }
}
