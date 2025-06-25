declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            class Calendar extends TcHmi.Controls.System.TcHmiControl {
                /**
                 * Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                isStartTime: boolean;
                protected __elTemplateRoot: JQuery;
                protected __elWindow: JQuery;
                protected __elMoveUpButtons: JQuery;
                protected __elMoveDownButtons: JQuery;
                protected __elSetTimeButton: JQuery;
                protected __elCancelTimeButton: JQuery;
                protected __elTimeInput: JQuery;
                protected __elLabel: JQuery;
                protected __elModal: JQuery;
                protected __elHead: JQuery;
                protected __elDays: JQuery;
                protected __elEntries: JQuery;
                protected __elHeadMonth: JQuery;
                protected __eventListenerManager: EventListenerManager;
                protected __viewedMonth: DCTimestruct;
                protected __selectedTime: DCTimestruct;
                protected __timeRange: TimeRange;
                protected readonly __selectedCellColor: string;
                protected readonly __cellRangeColor: string;
                protected readonly __cellColor: string | null;
                /********** Property Variables **********/
                protected __record: IRecordData | null | undefined;
                protected __fullMonthsAlias: string[] | null | undefined;
                protected __daysOfWeekAlias: string[] | null | undefined;
                protected __startTimeAlias: string | null | undefined;
                protected __stopTimeAlias: string | null | undefined;
                protected __setTimeAlias: string | null | undefined;
                protected __cancelAlias: string | null | undefined;
                /**
                  * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                  * Call attribute processor functions here to initialize default values!
                  */
                __previnit(): void;
                __init(): void;
                __attach(): void;
                __detach(): void;
                destroy(): void;
                protected __onResized: () => () => void;
                /********** Properties **********/
                setRecord(valueNew: any): void;
                getRecord(): IRecordData;
                protected __processRecord(): void;
                setFullMonthsAlias(valueNew: string): void;
                getFullMonthsAlias(): string[];
                protected __processFullMonthsAlias(): void;
                setDaysOfWeekAlias(valueNew: string[]): void;
                getDaysOfWeekAlias(): string[];
                protected __processDaysOfWeekAlias(): void;
                setStartTimeAlias(valueNew: string): void;
                getStartTimeAlias(): string;
                protected __processStartTimeAlias(): void;
                setStopTimeAlias(valueNew: string): void;
                getStopTimeAlias(): string;
                protected __processStopTimeAlias(): void;
                setSetTimeAlias(valueNew: string): void;
                getSetTimeAlias(): string;
                protected __processSetTimeAlias(): void;
                setCancelAlias(valueNew: string): void;
                getCancelAlias(): string;
                protected __processCancelAlias(): void;
                /********** Calendar Methods **********/
                /*** Public ***/
                openCalendar(isStartTime: boolean, record: IRecord): void;
                closeCalendar(applyChanges: boolean): () => void;
                /*** Reload of Calendar / Time Fields ***/
                protected __reloadAll(): void;
                protected __reloadCalendar(): void;
                protected __reloadTimeInput(): void;
                /*** Helper Methods ***/
                protected __isValidDate(year: number, month: number, day: number): boolean;
                protected __dateIsSelectable(cellDate: DCTimestruct): boolean;
                protected __calendarGetMonthName(monthIndex: number): string;
                protected __checkAndUpdateTimeInput(index: number, offset?: number): void;
                protected __checkAndUpdateTimeByTimeRange(): boolean;
                /***** Event Handler ******/
                protected __prevMonthClicked(): () => void;
                protected __nextMonthClicked(): () => void;
                protected __cellClicked(cellIndex: number): () => void;
                protected __timeInputChanged(index: number): () => void;
                protected __timeMoveUpDown(index: number, countUp: boolean): () => void;
            }
        }
    }
}
