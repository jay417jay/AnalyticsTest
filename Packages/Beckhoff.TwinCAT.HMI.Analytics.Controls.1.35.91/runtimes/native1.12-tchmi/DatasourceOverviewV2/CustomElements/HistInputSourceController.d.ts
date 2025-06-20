declare namespace CustomElements {
    export class HistInputSourceController extends AnalyticsBaseCustomElement implements IInputSource {
        /** Display name of input source */
        protected __elTitle: HTMLElement;
        /** End area of header */
        protected __elHeaderEnd: HTMLElement;
        /** Status LED of stream */
        protected __elStatus: HTMLElement;
        /** Icon animation of status to show if it is online */
        protected __elStatusOnlineIcon: LoaderIcon;
        /** Record name element & status of stream (CSS-before)  */
        protected __elRecordName: HTMLElement;
        /** Current time of executing record */
        protected __elCurrentTime: HTMLElement;
        /** Current time text (localization) */
        protected __elCurrentTimeAlias: HTMLElement;
        /** Selected start time of record */
        protected __elSelStartTime: HTMLElement;
        /** Selected end time of record */
        protected __elSelEndTime: HTMLElement;
        /** Expander to minimize/maximize Control (arrow svg) */
        protected __elExpander: HTMLElement;
        /** Container for recordTV, recordController */
        protected __elHistContainer: HTMLElement;
        /** Treeview of records to select one */
        protected __elRecordTV: RecordTreeview;
        /** Controller of a record (change selection, start/stop record etc.) */
        protected __elRecordController: RecordController;
        constructor();
        protected __init(): void;
        protected __attach(): void;
        protected __attached(): void;
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
        private __analysisState;
        /** Internal calculated analysis state (Default: TcHmi.Controls.Analytics.AnalysisState.IDLE) */
        get analysisState(): TcHmi.Controls.Analytics.E_AnalysisState;
        set analysisState(value: TcHmi.Controls.Analytics.E_AnalysisState);
        protected __onAnalysisStateChanged(): void;
        private __isAnalysing;
        /** Input Source is analysing (Default: false). If true changing record is forbidden. */
        get isAnalysing(): boolean;
        set isAnalysing(value: boolean);
        protected __onIsAnalysingChanged(): void;
        private __displayName;
        /** Display name (Default: "-") */
        get displayName(): string;
        set displayName(value: string);
        protected __onDisplayNameChanged(): void;
        private __selectedRecordID;
        /** RecordID of selected record (Default: -1) */
        get selectedRecordID(): number;
        set selectedRecordID(value: number);
        protected __onSelectedRecordIDChanged(): void;
        private __selectedRangeStart;
        /** Selected start time (Default: new DCTimestruct(2000, 1, 1)). */
        get selectedRangeStart(): TcHmi.Controls.Analytics.DCTimestruct;
        set selectedRangeStart(value: TcHmi.Controls.Analytics.DCTimestruct);
        protected __onSelectedRangeStartChanged(): void;
        private __selectedRangeEnd;
        /** Selected end time (Default: new DCTimestruct(2000, 1, 2)). */
        get selectedRangeEnd(): TcHmi.Controls.Analytics.DCTimestruct;
        set selectedRangeEnd(value: TcHmi.Controls.Analytics.DCTimestruct);
        protected __onSelectedRangeEndChanged(): void;
        private __inputSource;
        /** InputSource to show in tree view (Default: null) */
        get inputSource(): TcHmi.Controls.Analytics.IInputSource;
        set inputSource(value: TcHmi.Controls.Analytics.IInputSource);
        protected __onInputSourceChanged(force?: boolean): void;
        private __minimize;
        /** Whether Control is minimized to hide or shrink elements (Default: false) */
        get minimize(): boolean;
        set minimize(value: boolean);
        protected __onMinimizeChanged(): void;
        private __sourceStatus;
        /** Internal! Historical source status (Default: HistSourceState.offline) */
        protected set sourceStatus(value: HistSourceState);
        protected __onSourceStatusChanged(): void;
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
        private __todayAlias;
        /** Alias name for today. (Default: "Today") */
        get todayAlias(): string;
        set todayAlias(value: string);
        protected __onTodayAliasChanged(): void;
        private __yesterdayAlias;
        /** Alias name for yesterday (Default: "Yesterday") */
        get yesterdayAlias(): string;
        set yesterdayAlias(value: string);
        protected __onYesterdayAliasChanged(): void;
        private __thisWeekAlias;
        /** Alias name for this week (Default: "This week") */
        get thisWeekAlias(): string;
        set thisWeekAlias(value: string);
        protected __onThisWeekAliasChanged(): void;
        private __lastWeekAlias;
        /** Alias name for last week (Default: "Last week") */
        get lastWeekAlias(): string;
        set lastWeekAlias(value: string);
        protected __onLastWeekAliasChanged(): void;
        private __thisMonthAlias;
        /** Alias name for this month (Default: "This month") */
        get thisMonthAlias(): string;
        set thisMonthAlias(value: string);
        protected __onThisMonthAliasChanged(): void;
        private __lastMonthAlias;
        /** Alias name for last month (Default: "Last month") */
        get lastMonthAlias(): string;
        set lastMonthAlias(value: string);
        protected __onLastMonthAliasChanged(): void;
        private __lastSixMonthsAlias;
        /** Alias name for last 6 months (Default: "Last 6 months") */
        get lastSixMonthsAlias(): string;
        set lastSixMonthsAlias(value: string);
        protected __onLastSixMonthsAliasChanged(): void;
        private __beforeAlias;
        /** Alias name for before (Default: "Before") */
        get beforeAlias(): string;
        set beforeAlias(value: string);
        protected __onBeforeAliasChanged(): void;
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
        private __startTimeAlias;
        /** Text alias name, used for translations. (Default: "Start Time"). */
        get startTimeAlias(): string;
        set startTimeAlias(value: string);
        protected __onStartTimeAliasChanged(): void;
        private __stopTimeAlias;
        /** Text alias name, used for translations. (Default: "Stop Time"). */
        get stopTimeAlias(): string;
        set stopTimeAlias(value: string);
        protected __onStopTimeAliasChanged(): void;
        private __currentTimeAlias;
        /** Text alias name, used for translations. (Default: "Current Time"). */
        get currentTimeAlias(): string;
        set currentTimeAlias(value: string);
        protected __onCurrentTimeAliasChanged(): void;
        private __intervalTimeAlias;
        /** Text alias name, used for translations. (Default: "Interval Time") */
        get intervalTimeAlias(): string;
        set intervalTimeAlias(value: string);
        protected __onIntervalTimeAliasChanged(): void;
        private __setTimeAlias;
        /** Text alias name, used for translation in calendar. (Default: "Set Time") */
        get setTimeAlias(): string;
        set setTimeAlias(value: string);
        protected __onSetTimeAliasChanged(): void;
        private __cancelAlias;
        /** Text alias name, used for translation in calendar. (Default: "Cancel") */
        get cancelAlias(): string;
        set cancelAlias(value: string);
        protected __onCancelAliasChanged(): void;
        private __recordTrialAlias;
        /** Text alias name, change record with trial license (Default: "No functionality granted to change a record with trial license!") */
        get recordTrialAlias(): string;
        set recordTrialAlias(value: string);
        protected __onRecordTrialAliasChanged(): void;
        private __changeRecordAlertAlias;
        /** Text alias name, change record while analysing (Default: "You cannot change the record while analysing the current record.") */
        get changeRecordAlertAlias(): string;
        set changeRecordAlertAlias(value: string);
        protected __onChangeRecordAlertAliasChanged(): void;
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
        private __notStartedAlias;
        /** Text alias name, not started (Default: "not started") */
        get notStartedAlias(): string;
        set notStartedAlias(value: string);
        protected __onNotStartedAliasChanged(): void;
        private __notConnectedAlias;
        /** Text alias name, not connected (Default: "not connected") */
        get notConnectedAlias(): string;
        set notConnectedAlias(value: string);
        protected __onNotConnectedAliasChanged(): void;
        private __analysingAlias;
        /** Text alias name, analysing (Default: "analysing") */
        get analysingAlias(): string;
        set analysingAlias(value: string);
        protected __onAnalysingAliasChanged(): void;
        private __pausedAlias;
        /** Text alias name, paused (Default: "paused") */
        get pausedAlias(): string;
        set pausedAlias(value: string);
        protected __onPausedAliasChanged(): void;
        forceCancel(): void;
        protected __processSourceStatus(): void;
        protected __processIsActiveConfig(): void;
        protected __calcSourceState(): HistSourceState;
        protected __addEventListeners(): void;
        protected __getHtml(): string;
    }
    enum HistSourceState {
        NOT_CONNECTED = 0,
        ONLINE = 1,
        RUNNING = 2,
        PAUSED = 3
    }
    export {};
}
