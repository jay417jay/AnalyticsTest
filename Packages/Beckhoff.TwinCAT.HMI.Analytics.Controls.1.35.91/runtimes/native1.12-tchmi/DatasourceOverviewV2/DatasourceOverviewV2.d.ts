declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            export class DatasourceOverviewV2 extends TcHmi.Controls.Analytics.AnalyticsControl {
                /**
                 * @description Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                /** root Content with all Control elements */
                protected __elContent: JQuery;
                /** Main content (except left configuration area) */
                protected __elMainContent: JQuery;
                /** First Container to start/stop, activate machine, minimize/maximize. */
                protected __elMainContainer: JQuery;
                /** Historical area */
                protected __elHistData: JQuery;
                /** Text on Control configuration is wrong */
                protected __elWrongConfig: JQuery;
                /** All areas to switch background-color */
                protected __elAreas: JQuery;
                /** Selected configuration name */
                protected __elSelectedConfiguration: JQuery;
                /** Selected configuration name (bottom right corner of Dashboard) */
                protected __elSelectedConfigurationGlobal: JQuery;
                /** Container of record buttons */
                protected __elRecordButtons: JQuery;
                /** Button to start/pause all (historical) input sources */
                protected __elStartButton: JQuery;
                /** Button to start/pause all (historical) input sources */
                protected __elLoadIcon: CustomElements.LoaderIcon;
                /** Button to cancel all (historical) input sources */
                protected __elCancelButton: JQuery;
                /** Text of analysis state (e.g. 3/3 running) */
                protected __elAnalysisStateText: JQuery;
                /** Right top button to activate current configuration */
                protected __elActivateChangesButton: JQuery;
                /** Minimize button in top-right corner */
                protected __elMinimize: JQuery;
                /** Maximize button in top-right corner */
                protected __elMaximize: JQuery;
                /** Title (tooltip) of minimize icon */
                protected __elMinimizeName: JQuery;
                /** Title (tooltip) of maximize icon */
                protected __elMaximizeName: JQuery;
                /** Area to select a configuration */
                protected __elConfigurationArea: JQuery;
                /** Inner container of configuration area */
                protected __elConfigurationBox: JQuery;
                /** Configuration elements of configurationBox */
                protected __elConfigurations: JQuery;
                /** Refresh of records lists on click */
                protected __elRefreshRecords: JQuery;
                /** List of live-/histoical input sources elements */
                protected __elInputSources: CustomElements.IInputSource[];
                /** List of live input sources elements */
                protected __elLiveInputSources: CustomElements.LiveInputSource[];
                /** List of histoical input sources elements */
                protected __elHistInputSources: CustomElements.HistInputSourceController[];
                /** Width of the configuration area */
                protected __configurationAreaWidth: number;
                /** Background-color of areas */
                protected __areaColor: string | null;
                /** Current configuration controller */
                protected __config: DatasourceController;
                /** Selected configuration */
                protected __selectedConfiguration: IAlyConfigurationV2 | null;
                /** Control is maximized or minimized */
                protected __isMaximized: boolean;
                /** Control is in max-min-transition */
                protected __isMinOrMaximizing: boolean;
                /** Used to get the newest resize event if in queue */
                protected __resizeStack: number;
                /** Width in maximized state */
                protected __maximizedWidth: number | null;
                /** Height in maximized state */
                protected __maximizedHeight: number | null;
                /** Internal width */
                protected __widthInternal: number | null;
                /** Internal height */
                protected __heightInternal: number | null;
                /** Maximized width unit */
                protected __maximizedWidthUnit: DimensionUnit | null;
                /** Minimized width unit */
                protected __maximizedHeightUnit: DimensionUnit | null;
                /** Maximized width internal unit */
                protected __widthUnitInternal: DimensionUnit | null;
                /** Maximized height internal unit */
                protected __heightUnitInternal: DimensionUnit | null;
                /** Duration of transitions */
                protected readonly __transDuration: number;
                /** Helper variable to guarantee delay between next scope recording start */
                private __scopeStartDate;
                /** Indicates if scope has started from this Control */
                private __scopeStarted;
                __previnit(): void;
                __init(): void;
                __attach(): void;
                __detach(): void;
                destroy(): void;
                protected __onResized: () => (evt: EventProvider.Event, ctrl: Controls.Analytics.AnalyticsControl) => void;
                protected __processShowTitle(): void;
                protected __processColor(): void;
                protected setWidthInternal(valueNew: number): void;
                __processWidth(callerControl?: TcHmi.Controls.System.TcHmiControl): void;
                protected setWidthUnitInternal(valueNew: DimensionUnit | null): void;
                __processWidthUnit(): void;
                protected setHeightInternal(valueNew: number | null): void;
                __processHeight(callerControl?: TcHmi.Controls.System.TcHmiControl): void;
                protected setHeightUnitInternal(valueNew: DimensionUnit | null): void;
                __processHeightUnit(): void;
                /** All data for visualization (Configurations, datasources, records, ..) */
                protected __dataSources: IAlyConfigurationV2[] | null;
                setDataSources(valueNew: any): void;
                getDataSources(): IAlyConfigurationV2[];
                protected __processDataSources(oldValue: IAlyConfigurationV2[]): void;
                protected __rawDsc: IRawDatasourceController;
                protected __symbolDsc: ISymbolDatasourceController;
                protected __dsc: IDatasourceController | null;
                setDataSourceController(valueNew: IRawDatasourceController | null): void;
                getDataSourceController(): IRawDatasourceController;
                protected __onResolverForDataSourceControllerWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<IDatasourceController>) => void;
                protected __resolveDataSourceControllerSymbols(): void;
                protected __processSymbolDatasourceController(): void;
                protected __processDatasourceController(): void;
                /** Width in minimized state */
                protected __minimizedWidth: number | null;
                setMinimizedWidth(valueNew: number | null): void;
                getMinimizedWidth(): number;
                protected __processMinimizedWidth(): void;
                /** Width unit in minimized state */
                protected __minimizedWidthUnit: DimensionUnit | null;
                setMinimizedWidthUnit(valueNew: DimensionUnit | null): void;
                getMinimizedWidthUnit(): DimensionUnit;
                protected __processMinimizedWidthUnit(): void;
                /** Height in minimized state */
                protected __minimizedHeight: number | null;
                setMinimizedHeight(valueNew: number | null): void;
                getMinimizedHeight(): number;
                protected __processMinimizedHeight(): void;
                /** Height unit in minimized state */
                protected __minimizedHeightUnit: DimensionUnit | null;
                setMinimizedHeightUnit(valueNew: DimensionUnit | null): void;
                getMinimizedHeightUnit(): DimensionUnit;
                protected __processMinimizedHeightUnit(): void;
                /** List of Scope Control configurations */
                protected __scopeControls: string[];
                setScopeControls(valueNew: string[] | null): void;
                getScopeControls(): string[];
                protected __processScopeControls(): void;
                /** Alias name for active configuration */
                protected __activateConfigurationAlias: string;
                setActivateConfigurationAlias(valueNew: string): void;
                getActivateConfigurationAlias(): string;
                protected __processActivateConfigurationAlias(): void;
                /** Alias name for active configuration alert */
                protected __activateConfigurationAlertAlias: string;
                setActivateConfigurationAlertAlias(valueNew: string): void;
                getActivateConfigurationAlertAlias(): string;
                /** Alias message if no records are initialized */
                protected __noRecordsInitAlias: string;
                setNoRecordsInitAlias(valueNew: string): void;
                getNoRecordsInitAlias(): string;
                /** Alias message if record start variable is not mapped */
                protected __startNotMappedAlias: string;
                setStartNotMappedAlias(valueNew: string): void;
                getStartNotMappedAlias(): string;
                /** Alias name today for record tree view */
                protected __todayAlias: string;
                setTodayAlias(valueNew: string): void;
                getTodayAlias(): string;
                protected __processTodayAlias(): void;
                /** Alias name yesterday for record tree view */
                protected __yesterdayAlias: string;
                setYesterdayAlias(valueNew: string): void;
                getYesterdayAlias(): string;
                protected __processYesterdayAlias(): void;
                /** Alias name this week for record tree view */
                protected __thisWeekAlias: string;
                setThisWeekAlias(valueNew: string): void;
                getThisWeekAlias(): string;
                protected __processThisWeekAlias(): void;
                /** Alias name last week for record tree view */
                protected __lastWeekAlias: string;
                setLastWeekAlias(valueNew: string): void;
                getLastWeekAlias(): string;
                protected __processLastWeekAlias(): void;
                /** Alias name this month for record tree view */
                protected __thisMonthAlias: string;
                setThisMonthAlias(valueNew: string): void;
                getThisMonthAlias(): string;
                protected __processThisMonthAlias(): void;
                /** Alias name failed to start analysis */
                protected __startFailedAlias: string;
                setStartFailedAlias(valueNew: string | null): void;
                getStartFailedAlias(): string;
                protected __processStartFailedAlias(): void;
                /** Alias name last month for record tree view */
                protected __lastMonthAlias: string;
                setLastMonthAlias(valueNew: string): void;
                getLastMonthAlias(): string;
                protected __processLastMonthAlias(): void;
                /** Alias name last six months for record tree view */
                protected __lastSixMonthsAlias: string;
                setLastSixMonthsAlias(valueNew: string): void;
                getLastSixMonthsAlias(): string;
                protected __processLastSixMonthsAlias(): void;
                /** Alias name before for record tree view */
                protected __beforeAlias: string;
                setBeforeAlias(valueNew: string): void;
                getBeforeAlias(): string;
                protected __processBeforeAlias(): void;
                /** Alias message record cannot be changed in trial */
                protected __recordTrialAlias: string;
                setRecordTrialAlias(valueNew: string): void;
                getRecordTrialAlias(): string;
                /** Alias message record cannot be changed while running current */
                protected __changeRecordAlertAlias: string;
                setChangeRecordAlertAlias(valueNew: string): void;
                getChangeRecordAlertAlias(): string;
                /** Alias message could not get record */
                protected __getRecordAlertAlias: string;
                setGetRecordAlertAlias(valueNew: string): void;
                getGetRecordAlertAlias(): string;
                /** Alias message activate configuration to refresh record list */
                protected __recListAlertAlias: string;
                setRecListAlertAlias(valueNew: string): void;
                getRecListAlertAlias(): string;
                /** Alias message cannot refresh record list while analysing */
                protected __refreshAlertAlias: string;
                setRefreshAlertAlias(valueNew: string): void;
                getRefreshAlertAlias(): string;
                /** Alias message no functionality to activate configuration with trial */
                protected __activateTrialAlias: string;
                setActivateTrialAlias(valueNew: string): void;
                getActivateTrialAlias(): string;
                /** Alias message could not read property (symbol) */
                protected __notReadPropAlias: string;
                setNotReadPropAlias(valueNew: string): void;
                getNotReadPropAlias(): string;
                /** Alias names of each month (divided by ',') */
                protected __fullMonthsAlias: string;
                /** Alias names of each month */
                protected __fullMonthsAliasSplitted: string[];
                setFullMonthsAlias(valueNew: string): void;
                getFullMonthsAlias(): string;
                protected __processFullMonthAlias(): void;
                /** Alias name start time for record controller */
                protected __startTimeAlias: string;
                setStartTimeAlias(valueNew: string): void;
                getStartTimeAlias(): string;
                protected __processStartTimeAlias(): void;
                /** Alias name stop time for record controller */
                protected __stopTimeAlias: string;
                setStopTimeAlias(valueNew: string): void;
                getStopTimeAlias(): string;
                protected __processStopTimeAlias(): void;
                /** Alias name current time for record controller */
                protected __currentTimeAlias: string;
                setCurrentTimeAlias(valueNew: string): void;
                getCurrentTimeAlias(): string;
                protected __processCurrentTimeAlias(): void;
                /** Alias name maximize for maximize icon tooltip */
                protected __maximizeAlias: string;
                setMaximizeAlias(valueNew: string): void;
                getMaximizeAlias(): string;
                protected __processMaximizeAlias(): void;
                /** Alias name minimize for minimize icon tooltip */
                protected __minimizeAlias: string;
                setMinimizeAlias(valueNew: string): void;
                getMinimizeAlias(): string;
                protected __processMinimizeAlias(): void;
                /** Alias message no configured datasource found */
                protected __notFoundAlias: string;
                setNotFoundAlias(valueNew: string): void;
                getNotFoundAlias(): string;
                /** Alias name historical */
                protected __histAlias: string;
                setHistAlias(valueNew: string): void;
                getHistAlias(): string;
                protected __processHistAlias(): void;
                /** Alias name live */
                protected __liveAlias: string;
                setLiveAlias(valueNew: string): void;
                getLiveAlias(): string;
                protected __processLiveAlias(): void;
                /** Alias day of week names (divided by ','; 3 chars each name, used for calendar) */
                protected __daysOfWeekAlias: string;
                /** Alias day of week names (3 chars each name, used for calendar) */
                protected __daysOfWeekAliasSplitted: string[];
                setDaysOfWeekAlias(valueNew: string): void;
                getDaysOfWeekAlias(): string;
                protected __processDaysOfWeekAlias(): void;
                /** Alias name interval time */
                protected __intervalTimeAlias: string;
                setIntervalTimeAlias(valueNew: string): void;
                getIntervalTimeAlias(): string;
                protected __processIntervalTimeAlias(): void;
                /** Alias name start */
                protected __startAlias: string;
                setStartAlias(valueNew: string): void;
                getStartAlias(): string;
                protected __processStartAlias(): void;
                /** Alias name pause */
                protected __pauseAlias: string;
                setPauseAlias(valueNew: string): void;
                getPauseAlias(): string;
                protected __processPauseAlias(): void;
                /** Alias name cancel */
                protected __cancelAlias: string;
                setCancelAlias(valueNew: string): void;
                getCancelAlias(): string;
                protected __processCancelAlias(): void;
                /** Alias name reset */
                protected __resetAlias: string;
                setResetAlias(valueNew: string): void;
                getResetAlias(): string;
                protected __processResetAlias(): void;
                /** Alias name refresh records */
                protected __refreshRecordsAlias: string;
                setRefreshRecordsAlias(valueNew: string): void;
                getRefreshRecordsAlias(): string;
                protected __processRefreshRecordsAlias(): void;
                /** Alias name set time */
                protected __setTimeAlias: string;
                setSetTimeAlias(valueNew: string): void;
                getSetTimeAlias(): string;
                protected __processSetTimeAlias(): void;
                /** Alias name day */
                protected __dayAlias: string;
                setDayAlias(valueNew: string): void;
                getDayAlias(): string;
                protected __processDayAlias(): void;
                /** Alias name month */
                protected __monthAlias: string;
                setMonthAlias(valueNew: string): void;
                getMonthAlias(): string;
                protected __processMonthAlias(): void;
                /** Alias message you have to cancel to restart */
                protected __cancelRestartAlias: string;
                setCancelRestartAlias(valueNew: string): void;
                getCancelRestartAlias(): string;
                /** Alias name analysing */
                protected __analysingAlias: string;
                setAnalysingAlias(valueNew: string | null): void;
                getAnalysingAlias(): string;
                protected __processAnalysingAlias(): void;
                /** Alias name starting */
                protected __startingAlias: string;
                setStartingAlias(valueNew: string | null): void;
                getStartingAlias(): string;
                protected __processStartingAlias(): void;
                /** Alias name paused */
                protected __pausedAlias: string;
                setPausedAlias(valueNew: string | null): void;
                getPausedAlias(): string;
                protected __processPausedAlias(): void;
                /** Alias name ended */
                protected __endedAlias: string;
                setEndedAlias(valueNew: string | null): void;
                getEndedAlias(): string;
                protected __processEndedAlias(): void;
                /** Alias name not started */
                protected __notStartedAlias: string;
                setNotStartedAlias(valueNew: string | null): void;
                getNotStartedAlias(): string;
                protected __processNotStartedAlias(): void;
                /** Alias name not connected */
                protected __notConnectedAlias: string;
                setNotConnectedAlias(valueNew: string | null): void;
                getNotConnectedAlias(): string;
                protected __processNotConnectedAlias(): void;
                setSelectedConfigurationIndex(i: number, changed?: boolean): void;
                setSelectedConfiguration(valueNew: IAlyConfigurationV2, changed?: boolean): void;
                private __assignDataSourcesTypes;
                /** Returns true if the datasource configuration has significant changes. Used to determine if all has to be redrawn. */
                private __significantConfigurationDataChanged;
                /** Create all historical / live input sources based on selected configuration */
                private __reinitInputSourcesArea;
                private __updateInputSourceArea;
                private __processConfigurationAreaLength;
                private __validRecord;
                /** Init of the control, based on DataSources */
                protected __reinitSideBar(): void;
                protected __initConfigurationSideBarEvents(): void;
                protected __processGlobalAnalysisStates(starting?: boolean): void;
                protected __getGlobalAnalysisState(starting?: boolean): E_GlobalAnalysisState;
                protected __getGlobalAnalysisStates(starting?: boolean): IGlobalAnalysisStates;
                protected __startScope(): void;
                protected __startScope_1_12_758_8(): void;
                protected __startScope_latest(): void;
                protected __stopScope(): void;
                protected __stopScope_1_12_758_8(): void;
                protected __stopScope_latest(): void;
                protected __requestExtSymbol(request: TcHmi.Server.IMessage): this;
                protected __addEventListeners(): void;
                protected __minimizeClicked(): void;
                protected __maximizeClicked(): void;
                protected __startButtonClicked(): void;
                protected __cancelButtonClicked(): void;
                protected __refreshRecordsClicked(force?: boolean): void;
                protected __activateConfig(): void;
            }
            /** Count of all analysis states of all virtual input sources */
            interface IGlobalAnalysisStates {
                idle: number;
                notConnected: number;
                starting: number;
                running: number;
                paused: number;
                ended: number;
                sourcesCount: number;
            }
            /** State of all virtual input sources (based on IGlobalAnalysisStates) */
            enum E_GlobalAnalysisState {
                IDLE = 0,
                NOT_CONNECTED = 1,
                STARTING = 2,
                RUNNING = 3,
                PAUSED = 4,
                ENDED = 5
            }
            /** Controller of the active and selected source. */
            export class DatasourceController {
                /** Button activate configuration */
                private __elActivateButton;
                /** Text/Title of selected configuration */
                private __elSelectedConfiguration;
                /** Text/Title of selected configuration in bottom-right corner */
                private __elSelectedConfigurationGlobal;
                /** All configuration elements */
                private __elConfigurations;
                /** Only changes on siginificant data, used to update the active configuration name */
                private __dataSources;
                /** Helper variable for highlighting active configuration name */
                private __oldActiveConfigName;
                /** Refresh records function */
                private __refreshRecordsFunc;
                /** List of live-/histoical input sources elements */
                elHistInputSources: CustomElements.HistInputSourceController[];
                /** HMI symbol of active configuration index */
                symbolActiveConfigIdx: Symbol;
                /** Selected configuration index */
                configIdx: number;
                /** Active configuration index */
                activeConfigIdx: number;
                constructor(elActivateButton: JQuery, selectedConfiguration: JQuery, selectedConfigurationGlobal: JQuery, refreshRecordsFunc: () => void);
                isActiveConfig(): boolean;
                isInitializing(): boolean;
                activateConfig(processChanges?: boolean): void;
                setActiveConfigurationIndex(value: number, changed?: boolean): void;
                /** Set element configurations for highlighting selected configuration */
                setElConfigurations(valueNew: JQuery): void;
                /** Set datasources data for updating the active configuration name */
                setDataSources(valueNew: IAlyConfigurationV2[]): void;
                private processChanges;
                /** Set existing config */
                private setConfig;
                private highlightGlobalConfiguration;
            }
            export interface IDatasourceController {
                nActiveConfigurationIdx: number;
                aInputSourceCtrls: IInputSourceController[];
            }
            export interface IInputSourceController {
                nActiveRecordIdx: number;
                dtSelectedRangeStart: DCTimestruct;
                dtSelectedRangeEnd: DCTimestruct;
            }
            export interface IRawDatasourceController {
                nActiveConfigurationIdx: string;
                bStart: string;
                bPause: string;
                bCancel: string;
                bReset?: string;
                bUpdateRecordList: string;
                aInputSourceCtrls: string;
            }
            export interface ISymbolDatasourceController {
                nActiveConfigurationIdx: TcHmi.Symbol<number>;
                bStart: TcHmi.Symbol<boolean>;
                bPause: TcHmi.Symbol<boolean>;
                bCancel: TcHmi.Symbol<boolean>;
                bReset?: TcHmi.Symbol<boolean>;
                bUpdateRecordList: TcHmi.Symbol<boolean>;
                aInputSourceCtrls: ISymbolInputSourceController[];
            }
            export interface ISymbolInputSourceController {
                nActiveRecordIdx: TcHmi.Symbol<number>;
                bStart: TcHmi.Symbol<boolean>;
                bPause: TcHmi.Symbol<boolean>;
                bCancel: TcHmi.Symbol<boolean>;
                bReset?: TcHmi.Symbol<boolean>;
                dtSelectedRangeStart: TcHmi.Symbol<object>;
                dtSelectedRangeEnd: TcHmi.Symbol<object>;
            }
            /** Datasource configuration */
            export interface IAlyConfigurationV2 {
                nID: number;
                sDisplayName: string;
                aInputSources: IInputSource[];
            }
            export interface IInputSource {
                nID: number;
                sDisplayName: string;
                sStreamSystemID: string;
                sTopic: string;
                eSourceType: E_SourceType;
                eState: E_DataSourceState;
                dtTimestamp: DCTimestruct;
                stHist: IHistV2;
            }
            export interface IHistV2 {
                nCurrentRecordID: number;
                stSourceInfo: IHistSourceInfo;
                nRecordCount: number;
                aRecords: IRecord[];
            }
            enum E_SourceType {
                Live = 0,
                HistMqtt = 1,
                HistFile = 2
            }
            export enum E_DataSourceState {
                UNKNOWN = 0,
                NOT_CONNECTED = 1,
                RECEIVE_DATA = 2,
                RECEIVE_DATA_CANCEL = 3,
                RECEIVE_DATA_PAUSE = 4,
                ERROR = 5,
                READY = 6,
                WAIT_FOR_DATA = 7
            }
            export {};
        }
    }
}
