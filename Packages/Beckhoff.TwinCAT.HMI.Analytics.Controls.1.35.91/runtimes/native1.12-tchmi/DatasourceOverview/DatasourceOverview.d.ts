declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            class DatasourceOverview extends TcHmi.Controls.Analytics.AnalyticsControl {
                /**
                 * @description Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elContent: JQuery;
                protected __elMainContent: JQuery;
                protected __elMinimize: JQuery;
                protected __elMaximize: JQuery;
                protected __elWrongConfig: JQuery;
                protected __elMachineSwitched: JQuery;
                protected __elAreas: JQuery;
                protected __areaColor: string | null;
                protected __componentColor: string | null;
                protected __elSelectedMachine: JQuery;
                protected __elSelectedMachineGlobal: JQuery;
                protected __elActivateChangesButton: JQuery;
                protected __elBox: JQuery;
                protected __elRecordName: JQuery;
                protected __elSlider: JQuery;
                protected __elSliderContainer: JQuery;
                protected __elSelStart: JQuery;
                protected __elHistCurrent: JQuery;
                protected __elSelEnd: JQuery;
                protected __elTrack: JQuery;
                protected __elThumbs: JQuery;
                protected __elSliderControls: JQuery;
                protected __elCancelButton: JQuery;
                protected __elStartButton: JQuery;
                protected __elResetButton: JQuery;
                protected __elTimeMarker: JQuery;
                protected __elTimeMarkerProgress: JQuery;
                protected __elTrackText: JQuery;
                protected __elIntervalTime: JQuery;
                protected __elTimeNames: JQuery;
                protected __elIntervalName: JQuery;
                protected __elMinimizeName: JQuery;
                protected __elMaximizeName: JQuery;
                protected __ctrlCalendar: Calendar | undefined;
                protected __elTvCarets: JQuery;
                protected __elRecords: JQuery;
                protected __elTreeViewArea: JQuery;
                protected __elTreeView: JQuery;
                protected __elRefreshRecords: JQuery;
                protected __liveHistContainer: JQuery;
                protected __elLiveCheckboxContainer: JQuery;
                protected __elLiveCheckbox: JQuery;
                protected __elHistData: JQuery;
                protected __elLiveHistSliderText: JQuery;
                protected __elMachineArea: JQuery;
                protected __machineAreaWidth: number;
                protected __elMachineBox: JQuery;
                protected __elMachines: JQuery;
                protected __updateSliderTime: (timeRange: DCTimestruct[], interval: DCTimestruct[]) => void;
                protected __drawSlider: (pos0?: number, pos1?: number, selRecord?: IRecord) => void;
                protected __dataSources: IAlyConfiguration[] | null;
                protected __selectedMachine: IAlyConfiguration | null;
                protected __isLive: boolean;
                protected __isHistAnalysing: E_AnalysisState;
                protected __selectedRecord: ExecutingRecord;
                protected __minimizedWidth: number | null;
                protected __minimizedWidthUnit: DimensionUnit | null;
                protected __minimizedHeight: number | null;
                protected __minimizedHeightUnit: DimensionUnit | null;
                protected __config: DatasourceConfig;
                protected __selectedStartTime: TcHmi.Symbol | null | undefined;
                protected __selectedEndTime: TcHmi.Symbol | null | undefined;
                protected __start: TcHmi.Symbol | null | undefined;
                protected __pause: TcHmi.Symbol | null | undefined;
                protected __stop: TcHmi.Symbol | null | undefined;
                protected __refreshRecords: TcHmi.Symbol | null | undefined;
                /*** Alias Names ***/
                protected __activateMachineAlias: string | null | undefined;
                protected __activateMachineAlertAlias: string | null | undefined;
                protected __noRecordsInitAlias: string | null | undefined;
                protected __startNotMappedAlias: string | null | undefined;
                protected __todayAlias: string | null | undefined;
                protected __yesterdayAlias: string | null | undefined;
                protected __thisWeekAlias: string | null | undefined;
                protected __lastWeekAlias: string | null | undefined;
                protected __thisMonthAlias: string | null | undefined;
                protected __lastMonthAlias: string | null | undefined;
                protected __lastSixMonthsAlias: string | null | undefined;
                protected __beforeAlias: string | null | undefined;
                protected __recordTrialAlias: string | null | undefined;
                protected __changeRecordAlertAlias: string | null | undefined;
                protected __getRecordAlertAlias: string | null | undefined;
                protected __recListAlertAlias: string | null | undefined;
                protected __refreshAlertAlias: string | null | undefined;
                protected __activateTrialAlias: string | null | undefined;
                protected __notReadPropAlias: string | null | undefined;
                protected __fullMonthsAlias: string[] | null | undefined;
                protected __startTimeAlias: string | null | undefined;
                protected __stopTimeAlias: string | null | undefined;
                protected __currentTimeAlias: string | null | undefined;
                protected __maximizeAlias: string | null | undefined;
                protected __minimizeAlias: string | null | undefined;
                protected __notFoundAlias: string | null | undefined;
                protected __histAlias: string | null | undefined;
                protected __liveAlias: string | null | undefined;
                protected __daysOfWeekAlias: string[] | null | undefined;
                protected __intervalTimeAlias: string | null | undefined;
                protected __startAlias: string | null | undefined;
                protected __pauseAlias: string | null | undefined;
                protected __cancelAlias: string | null | undefined;
                protected __resetAlias: string | null | undefined;
                protected __refreshRecordsAlias: string | null | undefined;
                protected __setTimeAlias: string | null | undefined;
                protected __dayAlias: string | null | undefined;
                protected __monthAlias: string | null | undefined;
                protected __cancelRestartAlias: string | null | undefined;
                protected __isMaximized: boolean;
                protected __isMinOrMaximizing: boolean;
                protected __resizeStack: number;
                protected __selectedMachineChanging: boolean;
                protected __maximizedWidth: number | null;
                protected __maximizedHeight: number | null;
                protected __widthInternal: number | null;
                protected __heightInternal: number | null;
                protected __maximizedWidthUnit: DimensionUnit | null;
                protected __maximizedHeightUnit: DimensionUnit | null;
                protected __widthUnitInternal: DimensionUnit | null;
                protected __heightUnitInternal: DimensionUnit | null;
                protected readonly __htmlCodeTv1: string;
                protected readonly __htmlCodeTv2: string;
                protected readonly __htmlCodeRecord1: string;
                protected readonly __htmlCodeRecord2: string;
                protected readonly __htmlCodeRecord3: string;
                protected readonly __htmlCodeRecord4: string;
                protected readonly __htmlCodeRecordSeparator: string;
                protected readonly __htmlCodeTv3: string;
                protected readonly __transDuration: number;
                /**
                  * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                  * Call attribute processor functions here to initialize default values!
                  */
                __previnit(): void;
                /**
                 * @description Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values.
                 * @returns {void}
                 */
                __init(): void;
                protected __initCalendar(): void;
                /**
                * @description Is called by tachcontrol() after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __attach(): void;
                /**
                * @description Is called by tachcontrol() after the control instance is no longer part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __detach(): void;
                /**
                * @description Destroy the current control instance.
                * Will be called automatically if system destroys control!
                */
                destroy(): void;
                protected __onResized: () => (evt: EventProvider.Event, ctrl: Controls.Analytics.AnalyticsControl) => void;
                protected __onCalendarClosed: () => (evt: EventProvider.Event, ctrl: Controls.Analytics.Calendar) => void;
                /*** Properties ***/
                setSelectedStartTime(valueNew: TcHmi.Symbol): void;
                getSelectedStartTime(): Symbol<any>;
                protected __processSelectedStartTime(): void;
                setSelectedEndTime(valueNew: TcHmi.Symbol): void;
                getSelectedEndTime(): Symbol<any>;
                protected __processSelectedEndTime(): void;
                setStart(valueNew: TcHmi.Symbol): void;
                getStart(): Symbol<any>;
                protected __processStart(): void;
                setPause(valueNew: TcHmi.Symbol): void;
                getPause(): Symbol<any>;
                protected __processPause(): void;
                setStop(valueNew: TcHmi.Symbol): void;
                getStop(): Symbol<any>;
                protected __processStop(): void;
                setRefreshRecords(valueNew: TcHmi.Symbol): void;
                getRefreshRecords(): Symbol<any>;
                protected __processRefreshRecords(): void;
                setActiveMachineIndex(valueNew: TcHmi.Symbol): void;
                getActiveMachineIndex(): Symbol<any>;
                protected __processActiveMachineIndex(activeMachineIndex: number): void;
                setActiveStreamIndex(valueNew: TcHmi.Symbol): void;
                getActiveStreamIndex(): Symbol<any>;
                protected __processActiveStreamIndex(activeStreamIndex: number): void;
                setActiveRecordIndex(valueNew: TcHmi.Symbol): void;
                getActiveRecordIndex(): Symbol<any>;
                protected __processActiveRecordIndex(activeRecordIndex: number): void;
                setHistData(valueNew: TcHmi.Symbol): void;
                getHistData(): Symbol<any>;
                protected __processHistData(histData: boolean): void;
                setMinimizedWidth(valueNew: number | null): void;
                getMinimizedWidth(): number;
                protected __processMinimizedWidth(): void;
                setMinimizedWidthUnit(valueNew: DimensionUnit | null): void;
                getMinimizedWidthUnit(): DimensionUnit;
                protected __processMinimizedWidthUnit(): void;
                setMinimizedHeight(valueNew: number | null): void;
                getMinimizedHeight(): number;
                protected __processMinimizedHeight(): void;
                setMinimizedHeightUnit(valueNew: DimensionUnit | null): void;
                getMinimizedHeightUnit(): DimensionUnit;
                protected __processMinimizedHeightUnit(): void;
                setDataSources(valueNew: any): void;
                getDataSources(): IAlyConfiguration[];
                protected __processDataSources(oldValue: IAlyConfiguration[]): void;
                protected __processHistCurrentTime(): void;
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
                setSelectedMachineIndex(i: number, changed?: boolean): void;
                setSelectedMachine(valueNew: IAlyConfiguration, changed?: boolean): void;
                setIsLive(valueNew: boolean, changed?: boolean, writeValue?: boolean): void;
                private __updateIsHistAnalysing;
                private setIsHistAnalysing;
                setSelectedRecordIndex(i: number, changed?: boolean): void;
                setSelectedRecord(valueNew: IRecord, changed?: boolean): void;
                private __getStreamState;
                private __assignDataSourcesTypes;
                private __significantMachineDataChanged;
                private __processMachineAreaLength;
                private __isToday;
                private __isYesterday;
                private __isThisWeek;
                private __isLastWeek;
                private __isThisMonth;
                private __isLastMonth;
                private __isLast6Months;
                private __isYearsAgo;
                private __addTreeCaretAndRecords;
                private __validRecord;
                private __getRecRoundedIntervalTime;
                protected __reinitElements(): void;
                protected __initSlider(): void;
                protected __initTreeViewRecords(): void;
                protected __initMachineSideBarEvents(): void;
                protected __initLiveHistSwitchEvent(): void;
                protected __initLiveHistSwitch(): void;
                protected __initTreeViewEvents(): void;
                protected __updateHistControl(): void;
                /*** Events ***/
                protected __minimizeClicked(): () => void;
                protected __maximizeClicked(): () => void;
                protected __refreshRecordsClicked(): () => void;
                protected __activateChanges(): () => void;
                /*** Calendar Time Selection ***/
                protected __openCalendarPopUp(isStartTime: boolean): () => void;
                setActivateMachineAlias(valueNew: string): void;
                getActivateMachineAlias(): string;
                protected __processActivateMachineAlias(): void;
                setActivateMachineAlertAlias(valueNew: string): void;
                getActivateMachineAlertAlias(): string;
                setNoRecordsInitAlias(valueNew: string): void;
                getNoRecordsInitAlias(): string;
                setStartNotMappedAlias(valueNew: string): void;
                getStartNotMappedAlias(): string;
                setTodayAlias(valueNew: string): void;
                getTodayAlias(): string;
                setYesterdayAlias(valueNew: string): void;
                getYesterdayAlias(): string;
                setThisWeekAlias(valueNew: string): void;
                getThisWeekAlias(): string;
                setLastWeekAlias(valueNew: string): void;
                getLastWeekAlias(): string;
                setThisMonthAlias(valueNew: string): void;
                getThisMonthAlias(): string;
                setLastMonthAlias(valueNew: string): void;
                getLastMonthAlias(): string;
                setLastSixMonthsAlias(valueNew: string): void;
                getLastSixMonthsAlias(): string;
                setBeforeAlias(valueNew: string): void;
                getBeforeAlias(): string;
                protected __ongoingTVRefreshes: number;
                protected __processTreeViewLocalizations(): void;
                setRecordTrialAlias(valueNew: string): void;
                getRecordTrialAlias(): string;
                setChangeRecordAlertAlias(valueNew: string): void;
                getChangeRecordAlertAlias(): string;
                setGetRecordAlertAlias(valueNew: string): void;
                getGetRecordAlertAlias(): string;
                setRecListAlertAlias(valueNew: string): void;
                getRecListAlertAlias(): string;
                setRefreshAlertAlias(valueNew: string): void;
                getRefreshAlertAlias(): string;
                setActivateTrialAlias(valueNew: string): void;
                getActivateTrialAlias(): string;
                setNotReadPropAlias(valueNew: string): void;
                getNotReadPropAlias(): string;
                setFullMonthsAlias(valueNew: string): void;
                getFullMonthsAlias(): string[];
                setStartTimeAlias(valueNew: string): void;
                getStartTimeAlias(): string;
                protected __processStartTimeAlias(): void;
                setStopTimeAlias(valueNew: string): void;
                getStopTimeAlias(): string;
                protected __processStopTimeAlias(): void;
                setCurrentTimeAlias(valueNew: string): void;
                getCurrentTimeAlias(): string;
                protected __processCurrentTimeAlias(): void;
                setMaximizeAlias(valueNew: string): void;
                getMaximizeAlias(): string;
                protected __processMaximizeAlias(): void;
                setMinimizeAlias(valueNew: string): void;
                getMinimizeAlias(): string;
                protected __processMinimizeAlias(): void;
                setNotFoundAlias(valueNew: string): void;
                getNotFoundAlias(): string;
                setHistAlias(valueNew: string): void;
                getHistAlias(): string;
                protected __processHistAlias(): void;
                setLiveAlias(valueNew: string): void;
                getLiveAlias(): string;
                protected __processLiveAlias(): void;
                setDaysOfWeekAlias(valueNew: string): void;
                getDaysOfWeekAlias(): string[];
                protected __processDaysOfWeekAlias(): void;
                setIntervalTimeAlias(valueNew: string): void;
                getIntervalTimeAlias(): string;
                protected __processIntervalTimeAlias(): void;
                setStartAlias(valueNew: string): void;
                getStartAlias(): string;
                protected __processStartAlias(): void;
                setPauseAlias(valueNew: string): void;
                getPauseAlias(): string;
                protected __processPauseAlias(): void;
                setCancelAlias(valueNew: string): void;
                getCancelAlias(): string;
                protected __processCancelAlias(): void;
                setResetAlias(valueNew: string): void;
                getResetAlias(): string;
                protected __processResetAlias(): void;
                setRefreshRecordsAlias(valueNew: string): void;
                getRefreshRecordsAlias(): string;
                protected __processRefreshRecordsAlias(): void;
                setSetTimeAlias(valueNew: string): void;
                getSetTimeAlias(): string;
                protected __processSetTimeAlias(): void;
                setDayAlias(valueNew: string): void;
                getDayAlias(): string;
                protected __processDayAlias(): void;
                setMonthAlias(valueNew: string): void;
                getMonthAlias(): string;
                protected __processMonthAlias(): void;
                setCancelRestartAlias(valueNew: string): void;
                getCancelRestartAlias(): string;
            }
            class ExecutingRecord implements IRecord {
                nID: number;
                sName: string;
                sDisplayName: string;
                dtRecordStart: DCTimestruct;
                dtRecordEnd: DCTimestruct;
                dtSelectedRangeStart: DCTimestruct;
                dtSelectedRangeEnd: DCTimestruct;
                constructor();
                constructor(id: number, name: string, displayName: string, recordStart: DCTimestruct, recordEnd: DCTimestruct, selectedRangeStart: DCTimestruct, selectedRangeEnd: DCTimestruct);
                getMarkerProgress(currentTime: DCTimestruct): {
                    progress: number;
                    left: number;
                };
                getState(currentTime: DCTimestruct, currentRecordID: number): E_AnalysisState.IDLE | E_AnalysisState.RUNNING | E_AnalysisState.ENDED;
                isEqual(r: IRecord): boolean;
            }
            enum E_AnalysisState {
                IDLE = 0,
                NOT_CONNECTED = 1,
                STARTING = 2,
                RUNNING = 3,
                PAUSED = 4,
                CANCELED = 5,
                ENDED = 6,
                ENDING = 7
            }
            enum E_DATASOURCESTATE {
                eUnknown = 0,
                eNotConnected = 1,
                eReceiveData = 2,
                eReceiveData_Cancel = 3,
                eReceiveData_Pause = 4,
                eError = 5
            }
            /*** Interfaces for the DataSources object ***/
            interface IDatasourceConfig {
                nActiveMachineIndex: number;
                nActiveStreamIndex: number;
                bHistorical: boolean;
                nActiveRecordIndex: number;
            }
            class DatasourceConfig {
                constructor(elActivateButton: JQuery, selectedMachine: JQuery, selectedMachineGlobal: JQuery);
                private elActivateButton;
                private elSelectedMachine;
                private elSelectedMachineGlobal;
                private elMachines;
                private dataSources;
                private nActiveMachineIndex;
                private nActiveStreamIndex;
                private bHistorical;
                private nActiveRecordIndex;
                hasChanges(): boolean;
                hasChangesExceptHistorical(): boolean;
                isInitializing(): boolean;
                symbolActiveMachineIndex: Symbol;
                symbolActiveStreamIndex: Symbol;
                symbolHistorical: Symbol;
                symbolActiveRecordIndex: Symbol;
                activeConfig: IDatasourceConfig;
                setActiveMachineIndex(value: number, changed?: boolean): void;
                getActiveMachineIndex(): number;
                setActiveStreamIndex(value: number, changed?: boolean): void;
                getActiveStreamIndex(): number;
                setHistorical(value: boolean, changed?: boolean, writeValue?: boolean): void;
                getHistorical(): boolean;
                setActiveRecordIndex(value: number, changed?: boolean): void;
                getActiveRecordIndex(): number;
                processChanges(): void;
                activateConfig(processChanges?: boolean): void;
                private setConfig;
                setElMachines(valueNew: JQuery): void;
                setDataSources(valueNew: IAlyConfiguration[]): void;
                private highlightGlobalMachine;
            }
            interface IHistSourceInfo {
                sSPGuid: string;
                sAlyFilePath: string;
                sLayoutID: string;
                sSourceType: string;
                sTopic: string;
            }
            interface IHist {
                eState: number;
                sDisplayName: string;
                stSourceInfo: IHistSourceInfo;
                dtCurrentTimestamp: DCTimestruct;
                nRecordCount: number;
                nCurrentRecordID: number;
                aRecords: IRecord[];
            }
            interface ILive {
                eState: number;
                dtLiveTimestamp: DCTimestruct;
                sDisplayName: string;
            }
            interface IDataStream {
                sSource: string;
                sStreamSystemID: string;
                sTopic: string;
                stLive: ILive;
                stHist: IHist;
            }
            interface IAlyConfiguration {
                nID: number;
                sName: string;
                sDisplayName: string;
                aStreams: IDataStream[];
            }
            /*** Other Interfaces ***/
            interface IRecordMenuItem {
                Title: string;
                Records: IRecord[];
            }
        }
    }
}
