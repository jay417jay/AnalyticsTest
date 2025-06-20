declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            class PieceCounter extends TcHmi.Controls.Analytics.AnalyticsControl {
                /**
                 * @description Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elementSvgContainer: JQuery;
                protected __elementSvgClock: JQuery;
                protected __elementSvgClockDefs: JQuery;
                protected __elementSvgClockFullCycle: JQuery;
                protected __elementSvgClockElapsedCycle: JQuery;
                protected __elementNumIntervals: JQuery;
                protected __elementSvgCountChart: JQuery;
                protected __elementSvgCountChartLine: JQuery;
                protected __elementSvgCountChartLineMin: JQuery;
                protected __elementSvgCountChartLineMax: JQuery;
                protected __elementSvgCountChartLineLast: JQuery;
                protected __elementSvgCountChartLineCur: JQuery;
                protected __elementSvgCountChartTextMin: JQuery;
                protected __elementSvgCountChartTextMax: JQuery;
                protected __elementSvgCountChartTextLast: JQuery;
                protected __elementSvgCountChartTextCur: JQuery;
                protected __elementIntervalTime: JQuery;
                protected __elementMinMaxTimes: JQuery;
                protected __elementTimeCountMin: JQuery;
                protected __elementTimeCountMax: JQuery;
                protected __configIntervalTimeTimeSpan: any | null | undefined;
                protected __minAlias: string | null | undefined;
                protected __maxAlias: string | null | undefined;
                protected __curAlias: string | null | undefined;
                protected __lastAlias: string | null | undefined;
                protected __dayAlias: string | null | undefined;
                protected __monthAlias: string | null | undefined;
                protected __intervalTimeAlias: string | null | undefined;
                protected __numIntervalsAlias: string | null | undefined;
                protected __clockColor: SolidColor | null | undefined;
                protected __executingInterval: boolean | null | undefined;
                protected __currentInterval: any | null | undefined;
                protected __numIntervals: number | null | undefined;
                protected __countCurrent: number | null | undefined;
                protected __countMin: number | null | undefined;
                protected __countMax: number | null | undefined;
                protected __countLast: number | null | undefined;
                protected __configIntervalTime: string | null | undefined;
                protected __timeCountMin: any | null | undefined;
                protected __timeCountMax: any | null | undefined;
                protected __showMinMaxTimes: boolean | null | undefined;
                protected __showMilliSeconds: boolean | null | undefined;
                protected __showIntervalTime: boolean | null | undefined;
                protected __radialGrad: string;
                __previnit(): void;
                /**
                 * @description Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values.
                 * @returns {void}
                 */
                __init(): void;
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
                setMonthAlias(valueNew: string): void;
                getMonthAlias(): string;
                protected __processMonthAlias(): void;
                setMinAlias(valueNew: string): void;
                getMinAlias(): string;
                protected __processMinAlias(): void;
                setMaxAlias(valueNew: string): void;
                getMaxAlias(): string;
                protected __processMaxAlias(): void;
                setCurAlias(valueNew: string): void;
                getCurAlias(): string;
                protected __processCurAlias(): void;
                setLastAlias(valueNew: string): void;
                getLastAlias(): string;
                protected __processLastAlias(): void;
                setNumIntervalsAlias(valueNew: string): void;
                getNumIntervalsAlias(): string;
                protected __processNumIntervalsAlias(): void;
                setIntervalTimeAlias(valueNew: string): void;
                getIntervalTimeAlias(): string;
                protected __processIntervalTimeAlias(): void;
                setDayAlias(valueNew: string): void;
                getDayAlias(): string;
                protected __processDayAlias(): void;
                setClockColor(valueNew: SolidColor): void;
                getClockColor(): SolidColor;
                protected __processClockColor(): void;
                setExecutingInterval(valueNew: boolean): void;
                getExecutingInterval(): boolean;
                protected __processExecutingInterval(): void;
                setCurrentInterval(valueNew: object): void;
                getCurrentInterval(): any;
                setNumIntervals(valueNew: number): void;
                getNumIntervals(): number;
                protected __processNumIntervals(): void;
                setCountCurrent(valueNew: number): void;
                getCountCurrent(): number;
                protected __processCountCurrent(): void;
                setCountMin(valueNew: number): void;
                getCountMin(): number;
                protected __processCountMin(): void;
                setCountMax(valueNew: number): void;
                getCountMax(): number;
                protected __processCountMax(): void;
                setCountLast(valueNew: number): void;
                getCountLast(): number;
                protected __processCountLast(): void;
                getConfigIntervalTime(): string;
                setConfigIntervalTime(valueNew: string): void;
                protected __processConfigIntervalTime2(): void;
                __parseISO8601Timespan(timespan: any): {
                    sign: string;
                    years: number;
                    months: number;
                    weeks: number;
                    days: number;
                    hours: number;
                    minutes: number;
                    seconds: number;
                };
                protected __processConfigIntervalTime(): void;
                protected __processCounts(): void;
                setShowMilliSeconds(valueNew: boolean): void;
                getShowMilliSeconds(): boolean;
                protected __processShowMilliSeconds(): void;
                setShowIntervalTime(valueNew: boolean): void;
                getShowIntervalTime(): boolean;
                protected __processShowIntervalTime(): void;
                setShowMinMaxTimes(valueNew: boolean): void;
                getShowMinMaxTimes(): boolean;
                setTimeCountMin(valueNew: object): void;
                getTimeCountMin(): any;
                setTimeCountMax(valueNew: object): void;
                getTimeCountMax(): any;
                protected __processShowMinMaxTimes(): void;
                protected __processTimeCountMin(): void;
                protected __processTimeCountMax(): void;
                protected __processColorGradient(): void;
                protected __processColor(): void;
                protected __processCurrentInterval(): void;
                private __subTimeSpans;
                private DrawClockPieceCounter;
                private DrawPieceCounterChart;
            }
        }
    }
}
