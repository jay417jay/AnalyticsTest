declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            class EdgeCounterOnOff extends TcHmi.Controls.Analytics.AnalyticsControl {
                /**
                 * @description Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elementState: JQuery;
                protected __elementStateOn: JQuery;
                protected __elementStateOff: JQuery;
                protected __elementOnValue: JQuery;
                protected __elementOffValue: JQuery;
                protected __elementValue: JQuery;
                protected __elementLastEvent: JQuery;
                protected __elementContainer: JQuery;
                protected __elementOuterContainer: JQuery;
                protected __onColor: SolidColor | null | undefined;
                protected __offColor: SolidColor | null | undefined;
                protected __monthAlias: string | null | undefined;
                protected __state: boolean | null | undefined;
                protected __offValue: number | null | undefined;
                protected __onValue: number | null | undefined;
                protected __onAlias: string | null | undefined;
                protected __offAlias: string | null | undefined;
                protected __lastEventAlias: string | null | undefined;
                protected __showLastEvent: boolean | null | undefined;
                protected __showMilliSeconds: boolean | null | undefined;
                protected __lastEvent: any | null | undefined;
                protected __fontSizeOn: number;
                protected __fontSizeOff: number;
                protected __scaleFactor: number;
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
                setOffColor(valueNew: SolidColor): void;
                getOffColor(): SolidColor;
                protected __processOffColor(): void;
                setOnColor(valueNew: SolidColor): void;
                getOnColor(): SolidColor;
                protected __processOnColor(): void;
                setState(valueNew: boolean): void;
                getState(): boolean;
                protected __processColorGradient(): void;
                protected __processState(): void;
                setOnValue(valueNew: number): void;
                getOnValue(): number;
                protected __processColor(): void;
                protected __processOnValue(): void;
                setOffValue(valueNew: number): void;
                getOffValue(): number;
                protected __processOffValue(): void;
                setOnAlias(valueNew: string): void;
                getOnAlias(): string;
                protected __processOnAlias(): void;
                setOffAlias(valueNew: string): void;
                getOffAlias(): string;
                protected __processOffAlias(): void;
                setLastEventAlias(valueNew: string): void;
                getLastEventAlias(): string;
                protected __processLastEventAlias(): void;
                setShowLastEvent(valueNew: boolean): void;
                getShowLastEvent(): boolean;
                setShowMilliSeconds(valueNew: boolean): void;
                getShowMilliSeconds(): boolean;
                protected __processShowMilliSeconds(): void;
                setLastEvent(valueNew: object): void;
                getLastEvent(): any;
                protected __processShowLastEvent(): void;
                protected __processLastEvent(): void;
                private WriteOnValue;
                private WriteOffValue;
            }
        }
    }
}
