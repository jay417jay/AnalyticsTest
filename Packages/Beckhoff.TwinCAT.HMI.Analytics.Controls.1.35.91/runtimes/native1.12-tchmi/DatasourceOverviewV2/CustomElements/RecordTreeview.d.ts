declare namespace CustomElements {
    class RecordTreeview extends AnalyticsBaseCustomElement {
        /** HTML code for tree view part 1 */
        protected readonly __htmlCodeTv1: string;
        /** HTML code for tree view part 2 */
        protected readonly __htmlCodeTv2: string;
        /** HTML code for tree view part 3 */
        protected readonly __htmlCodeTv3: string;
        /** HTML code horizontal line to separate recors */
        protected readonly __htmlCodeRecordSeparator: string;
        /** Tree view element (UL) */
        protected __elTreeView: HTMLElement;
        /** Tree view caret (will be loaded dynamically) */
        protected __elTvCarets: HTMLElement[];
        /** Records of tree view (will be loaded dynamically) */
        protected __elRecords: HTMLElement[];
        /** CSS class for todayAlias */
        protected readonly __classTodayAlias = "today-alias";
        /** CSS class for yesterdayAlias */
        protected readonly __classYesterdayAlias = "yesterday-alias";
        /** CSS class for thisWeekAlias */
        protected readonly __classThisWeekAlias = "this-week-alias";
        /** CSS class for lastWeekAlias */
        protected readonly __classLastWeekAlias = "last-week-alias";
        /** CSS class for thisMonthAlias */
        protected readonly __classThisMonthAlias = "this-month-alias";
        /** CSS class for lastMonthAlias */
        protected readonly __classLastMonthAlias = "last-month-alias";
        /** CSS class for lastSixMonthsAlias */
        protected readonly __classLastSixMonthsAlias = "last-six-months-alias";
        /** CSS class for beforeAlias */
        protected readonly __classBeforeAlias = "before-alias";
        constructor();
        protected __init(): void;
        protected __attach(): void;
        private __selectedRecordID;
        /** RecordID of selected record (Default: -1) */
        get selectedRecordID(): number;
        set selectedRecordID(value: number);
        protected __onSelectedRecordIDChanged(refreshIfNotExist?: boolean): void;
        private __selectedRecord;
        /** Selected record (Default: undefined) */
        get selectedRecord(): TcHmi.Controls.Analytics.IRecord | undefined;
        protected __setSelectedRecord(value: TcHmi.Controls.Analytics.IRecord | undefined): void;
        protected __onSelectedRecordChanged(): void;
        private __records;
        /** Records to show in tree view (Default: []) */
        get records(): TcHmi.Controls.Analytics.IRecord[];
        set records(value: TcHmi.Controls.Analytics.IRecord[]);
        protected __onRecordsChanged(): void;
        private __isActiveConfig;
        /** Configuration is active or only selected (Default: false). If false changing record is forbidden. */
        get isActiveConfig(): boolean;
        set isActiveConfig(value: boolean);
        protected __onIsActiveConfigChanged(): void;
        private __isAnalysing;
        /** Input Source is analysing (Default: false). If true changing record is forbidden. */
        get isAnalysing(): boolean;
        set isAnalysing(value: boolean);
        protected __onIsAnalysingChanged(): void;
        protected __onComponent1ColorChanged(): void;
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
        selectLastRecord(): void;
        getSelectedRecordIdx(): number;
        protected __initTreeViewRecords(records: TcHmi.Controls.Analytics.IRecord[]): void;
        private __addTreeCaretAndRecords;
        private __isToday;
        private __isYesterday;
        private __isThisWeek;
        private __isLastWeek;
        private __isThisMonth;
        private __isLastMonth;
        private __isLast6Months;
        private __isYearsAgo;
        private __validRecord;
        protected __initTreeViewEvents(): void;
        protected __processColor(): void;
        protected __getHtml(): string;
    }
}
