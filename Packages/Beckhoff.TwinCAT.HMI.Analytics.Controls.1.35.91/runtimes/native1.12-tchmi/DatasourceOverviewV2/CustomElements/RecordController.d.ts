declare namespace CustomElements {
    class RecordController extends AnalyticsBaseCustomElement {
        /** Root element of shadow */
        protected __elTemplateRoot: HTMLElement;
        /** Time range slider */
        protected __elSlider: TimeRangeSlider;
        /** Calendar control */
        protected __elCalendar: Calendar;
        /** H3 element with record name */
        protected __elRecordName: HTMLElement;
        /** Textarea with selected start time */
        protected __elSelectionStartTime: HTMLTextAreaElement;
        /** Textarea with selected end time */
        protected __elSelectionEndTime: HTMLTextAreaElement;
        /** Textarea with current marker time */
        protected __elCurrentTime: HTMLTextAreaElement;
        /** Selected interval time */
        protected __elIntervalTime: HTMLElement;
        /** Start and pause button */
        protected __elStartBtn: HTMLElement;
        /** Cancel button */
        protected __elCancelBtn: HTMLElement;
        /** Reset button */
        protected __elResetBtn: HTMLElement;
        /** Loader icon animation when start button is pressed */
        protected __elLoadIcon: LoaderIcon;
        /** Helper variable which shows if analysis state changed from STARTING to something else */
        protected __analysisStateSTARTINGChanged: boolean;
        /** Helper variable which shows if analysis state changed from STARTING to something else */
        protected __analysisStateSTARTINGCount: number;
        /** Text "Start Time" */
        protected __elStartTimeAlias: HTMLElement;
        /** Text "End Time" */
        protected __elStopTimeAlias: HTMLElement;
        /** Text "Current Time" */
        protected __elCurrentTimeAlias: HTMLElement;
        /** Text "Interval Time" */
        protected __elIntervalTimeAlias: HTMLElement;
        onStartClicked: () => void;
        onCancelClicked: () => void;
        onResetClicked: () => void;
        constructor();
        protected __init(): void;
        protected __attach(): void;
        private __width;
        /** Width of Control (Default: 360) */
        get width(): number;
        set width(value: number);
        protected __onWidthChanged(): void;
        private __dragDisabled;
        /** Disable of left and right slider thumb dragging (Default: false) */
        get dragDisabled(): boolean;
        set dragDisabled(value: boolean);
        protected __onDragDisabledChanged(): void;
        private __symbolInputSourceCtrl;
        /** Symbols of input source controls (Default: null) */
        get symbolInputSourceCtrl(): TcHmi.Controls.Analytics.ISymbolInputSourceController;
        set symbolInputSourceCtrl(value: TcHmi.Controls.Analytics.ISymbolInputSourceController);
        protected __onSymbolInputSourceCtrlChanged(): void;
        private __isActiveConfig;
        /** Configuration is active or only selected (Default: false). If false changing record is forbidden. */
        get isActiveConfig(): boolean;
        set isActiveConfig(value: boolean);
        protected __onIsActiveConfigChanged(): void;
        private __inputSourceDisplayName;
        /** Display name of input source (Default: "") */
        get inputSourceDisplayName(): string;
        set inputSourceDisplayName(value: string);
        protected __onInputSourceDisplayNameChanged(): void;
        private __recordDisplayName;
        /** Record display name (Default: "Record") */
        get recordDisplayName(): string;
        set recordDisplayName(value: string);
        protected __onRecordDisplayNameChanged(): void;
        private __recordStart;
        /** Record start time (Default: new DCTimestruct(2020, 1, 1)). */
        get recordStart(): TcHmi.Controls.Analytics.DCTimestruct;
        set recordStart(value: TcHmi.Controls.Analytics.DCTimestruct);
        protected __onRecordStartChanged(): void;
        private __recordEnd;
        /** Record end time (Default: new new DCTimestruct(2020, 1, 2)). */
        get recordEnd(): TcHmi.Controls.Analytics.DCTimestruct;
        set recordEnd(value: TcHmi.Controls.Analytics.DCTimestruct);
        protected __onRecordEndChanged(): void;
        private __selectedRangeStart;
        /** Selected start time (Default: new DCTimestruct(2020, 1, 1)). */
        get selectedRangeStart(): TcHmi.Controls.Analytics.DCTimestruct;
        set selectedRangeStart(value: TcHmi.Controls.Analytics.DCTimestruct);
        protected __onSelectedRangeStartChanged(): void;
        private __selectedRangeEnd;
        /** Selected end time (Default: new DCTimestruct(2020, 1, 2)). */
        get selectedRangeEnd(): TcHmi.Controls.Analytics.DCTimestruct;
        set selectedRangeEnd(value: TcHmi.Controls.Analytics.DCTimestruct);
        protected __onSelectedRangeEndChanged(): void;
        private __currentTime;
        /** Marker time / current time (Default: new DCTimestruct(2020, 1, 1)).*/
        get currentTime(): TcHmi.Controls.Analytics.DCTimestruct;
        set currentTime(value: TcHmi.Controls.Analytics.DCTimestruct);
        protected __onCurrentTimeChanged(): void;
        private __state;
        /** State from PLC of historical input source (Default: TcHmi.Controls.Analytics.State.Unknown) */
        get state(): TcHmi.Controls.Analytics.E_DataSourceState;
        set state(value: TcHmi.Controls.Analytics.E_DataSourceState);
        protected __onStateChanged(): void;
        private __analysisState;
        /** Internal calculated analysis state (Default: TcHmi.Controls.Analytics.AnalysisState.IDLE) */
        get analysisState(): TcHmi.Controls.Analytics.E_AnalysisState;
        set analysisState(value: TcHmi.Controls.Analytics.E_AnalysisState);
        protected __onAnalysisStateChanged(): void;
        /** Get selected time span. */
        get timeSpan(): TcHmi.Controls.Analytics.TimeSpan;
        private __startIcon;
        /** Path to start icon (Default: "Beckhoff.TwinCAT.HMI.Analytics.Controls/DatasourceOverviewV2/Images/Play.png") */
        get startIcon(): string;
        set startIcon(value: string);
        protected __onStartIconChanged(): void;
        private __pauseIcon;
        /** Path to pause icon (Default: "Beckhoff.TwinCAT.HMI.Analytics.Controls/DatasourceOverviewV2/Images/Pause.png") */
        get pauseIcon(): string;
        set pauseIcon(value: string);
        protected __onPauseIconChanged(): void;
        private __cancelIcon;
        /** Path to cancel icon (Default: "Beckhoff.TwinCAT.HMI.Analytics.Controls/DatasourceOverviewV2/Images/Stop.png") */
        get cancelIcon(): string;
        set cancelIcon(value: string);
        protected __onCancelIconChanged(): void;
        private __resetIcon;
        /** Path to reset icon (Default: "Beckhoff.TwinCAT.HMI.Analytics.Controls/DatasourceOverviewV2/Images/Reset.png") */
        get resetIcon(): string;
        set resetIcon(value: string);
        protected __onResetIconChanged(): void;
        private __fullMonthsAlias;
        /** Alias month names (Default: English month names) */
        get fullMonthsAlias(): string[];
        set fullMonthsAlias(value: string[]);
        protected __onFullMonthsAliasChanged(): void;
        private __daysOfWeekAlias;
        /** Day of week names (Default: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']) */
        get daysOfWeekAlias(): string[];
        set daysOfWeekAlias(value: string[]);
        protected __onDaysOfWeekAliasChanged(): void;
        private __monthAlias;
        /** Alias name of all months (Default: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]) */
        get monthAlias(): string[];
        set monthAlias(value: string[]);
        protected __onMonthAliasChanged(): void;
        private __startTimeAlias;
        /** Text alias name, used for translations. (Default: "Start Time"). */
        get startTimeAlias(): string;
        set startTimeAlias(value: string);
        protected __onStartTimeAliasChanged(): void;
        private __stopTimeAlias;
        /** Text alias name, used for translations. (Default: "Stop Time"). */
        get stopTimeAlias(): string;
        set stopTimeAlias(value: string);
        protected __onEndTimeAliasChanged(): void;
        private __currentTimeAlias;
        /** Text alias name, used for translations. (Default: "Current Time"). */
        get currentTimeAlias(): string;
        set currentTimeAlias(value: string);
        protected __onCurrentTimeAliasChanged(): void;
        private __intervalTimeAlias;
        /** Text alias name, used for translations. (Default: "Interval Time"). */
        get intervalTimeAlias(): string;
        set intervalTimeAlias(value: string);
        protected __onIntervalTimeAliasChanged(): void;
        private __startAnalysisAlias;
        /** Text alias name, used for translations. (Default: "Start Analysis"). */
        get startAnalysisAlias(): string;
        set startAnalysisAlias(value: string);
        protected __onStartAnalysisAliasChanged(): void;
        private __pauseAnalysisAlias;
        /** Text alias name, used for translations. (Default: "Pause Analysis"). */
        get pauseAnalysisAlias(): string;
        set pauseAnalysisAlias(value: string);
        protected __onPauseAnalysisAliasChanged(): void;
        private __resetIntervalAlias;
        /** Text alias name, used for translations. (Default: "Reset Interval"). */
        get resetIntervalAlias(): string;
        set resetIntervalAlias(value: string);
        protected __onResetIntervalAliasChanged(): void;
        private __setTimeAlias;
        /** Text alias name, used for translation in calendar. (Default: "Set Time") */
        get setTimeAlias(): string;
        set setTimeAlias(value: string);
        protected __onSetTimeAliasChanged(): void;
        private __cancelAlias;
        /** Text alias name, used for translation in tooltip, calendar. (Default: "Cancel") */
        get cancelAlias(): string;
        set cancelAlias(value: string);
        protected __onCancelAliasChanged(): void;
        private __activateConfigurationAlertAlias;
        /** Text alias name, activate configuration for this (Default: "You have to activate the configuration for this.") */
        get activateConfigurationAlertAlias(): string;
        set activateConfigurationAlertAlias(value: string);
        protected __onActivateConfigurationAlertAliasChanged(): void;
        private __startFailedAlias;
        /** Text alias name, start analysis failed (Default: "Failed to start analysis.") */
        get startFailedAlias(): string;
        set startFailedAlias(value: string);
        protected __onStartFailedAliasChanged(): void;
        forceCancel(): void;
        private __selectedRangeChanged;
        private __updateAnalysisState;
        private __getAnalysisState;
        private __processAnalysisState;
        protected __isEndTime(): boolean;
        protected __addEventListeners(): void;
        protected __getHtml(): string;
    }
}
