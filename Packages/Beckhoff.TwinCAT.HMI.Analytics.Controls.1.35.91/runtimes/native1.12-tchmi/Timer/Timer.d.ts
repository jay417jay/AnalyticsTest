declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            class Timer extends TcHmi.Controls.Analytics.AnalyticsControl {
                /**
                 * @description Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elementReset: JQuery;
                protected __elementSvg: JQuery;
                protected __elementCircleInner: JQuery;
                protected __elementCircleOuter: JQuery;
                protected __elementMarks: JQuery;
                protected __elementHour: JQuery;
                protected __elementMinute: JQuery;
                protected __elementSecond: JQuery;
                protected __elementTime: JQuery;
                protected __elementPin: JQuery;
                protected __elementClockText: JQuery;
                protected __elementCircleSection: JQuery;
                protected __elementSvgDefs: JQuery;
                protected __clockColor: SolidColor | null | undefined;
                protected __output: boolean | null | undefined;
                protected __timeType: string | null | undefined;
                protected __timeSpan: any | null | undefined;
                protected __dateTime: any | null | undefined;
                protected __showTime: boolean | null | undefined;
                protected __showClock: boolean | null | undefined;
                protected __showMilliSeconds: boolean | null | undefined;
                protected __showAMPM: boolean | null | undefined;
                protected __monthAlias: string | null | undefined;
                protected __dayAlias: string | null | undefined;
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
                setClockColor(valueNew: SolidColor): void;
                getClockColor(): SolidColor;
                setOutput(valueNew: boolean): void;
                getOutput(): boolean;
                protected __processOutput(): void;
                setTimeType(valueNew: string): void;
                getTimeType(): string;
                setTimeSpan(valueNew: object): void;
                getTimeSpan(): any;
                setDateTime(valueNew: object): void;
                getDateTime(): any;
                setShowTime(valueNew: boolean): void;
                getShowTime(): boolean;
                protected __processShowTime(): void;
                setShowClock(valueNew: boolean): void;
                getShowClock(): boolean;
                protected __processShowClock(): void;
                protected __processTimeType(): void;
                setShowMilliSeconds(valueNew: boolean): void;
                getShowMilliSeconds(): boolean;
                protected __processShowMilliSeconds(): void;
                setShowAMPM(valueNew: boolean): void;
                getShowAMPM(): boolean;
                protected __processAMPM(): void;
                setMonthAlias(valueNew: string): void;
                getMonthAlias(): string;
                protected __processMonthAlias(): void;
                setDayAlias(valueNew: string): void;
                getDayAlias(): string;
                protected __processDayAlias(): void;
                protected __processTimeSpan(): void;
                protected __processDateTime(): void;
                protected __processColorGradient(): void;
                protected __processColor(): void;
                private DrawClockTimer;
                private fillClockTimer;
                private drawHandTimer;
                private convertDateTimeTimer;
            }
        }
    }
}
