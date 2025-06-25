declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            class XTSDirection extends TcHmi.Controls.Analytics.AnalyticsControl {
                /**
                 * @description Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elementImage: JQuery;
                protected __elementCanvas: JQuery;
                protected __elementContainer: JQuery;
                protected __timePositive: any | null | undefined;
                protected __timeNegative: any | null | undefined;
                protected __countNegative: number | null | undefined;
                protected __countPositive: number | null | undefined;
                protected __direction: number | null | undefined;
                protected __showTimes: boolean | null | undefined;
                protected __showMilliSeconds: boolean | null | undefined;
                protected __arrowColor: SolidColor | null | undefined;
                protected __dayAlias: string | null | undefined;
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
                setDirection(valueNew: number): void;
                getDirection(): number;
                setCountPositive(valueNew: number): void;
                getCountPositive(): number;
                setCountNegative(valueNew: number): void;
                getCountNegative(): number;
                setTimePositive(valueNew: object): void;
                getTimePositive(): any;
                setTimeNegative(valueNew: object): void;
                getTimeNegative(): any;
                setShowTimes(valueNew: boolean): void;
                getShowTimes(): boolean;
                setArrowColor(valueNew: SolidColor): void;
                getArrowColor(): SolidColor;
                setShowMilliSeconds(valueNew: boolean): void;
                getShowMilliSeconds(): boolean;
                setDayAlias(valueNew: string): void;
                getDayAlias(): string;
                protected __processDayAlias(): void;
                protected __processShowMilliSeconds(): void;
                protected __processColor(): void;
                protected __processDirection(): void;
                private DrawDirection;
            }
        }
    }
}
