declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            class MultiState extends TcHmi.Controls.Analytics.AnalyticsControl {
                /**
                 * @description Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elementState: JQuery;
                protected __elementStateAlias: JQuery;
                protected __elementContainer: JQuery;
                protected __elementSvg: JQuery;
                protected __elementSvgEye: JQuery;
                protected __elementSvgMouth: JQuery;
                protected __shape: string | null | undefined;
                protected __stateColors: any | null | undefined;
                protected __currentState: number | null | undefined;
                protected __showText: boolean | null | undefined;
                protected __showSmiley: boolean | null | undefined;
                protected __textAlias: string | null | undefined;
                protected __textInfo: string | null | undefined;
                protected __messageAlias: string | null | undefined;
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
                protected __processColor(): void;
                setShape(valueNew: string): void;
                getShape(): string;
                protected __processShape(): void;
                setCurrentState(valueNew: number): void;
                getCurrentState(): number;
                setStateColors(valueNew: object): void;
                getStateColors(): any;
                protected __processStateColors(): void;
                protected __processColorGradient(): void;
                protected __processCurrentState(): void;
                setShowText(valueNew: boolean): void;
                getShowText(): boolean;
                protected __processShowText(): void;
                setShowSmiley(valueNew: boolean): void;
                getShowSmiley(): boolean;
                protected __processShowSmiley(): void;
                DrawSmiley(): void;
                setTextAlias(valueNew: string): void;
                getTextAlias(): string;
                setTextInfo(valueNew: string): void;
                getTextInfo(): string;
                setMessageAlias(valueNew: string): void;
                getMessageAlias(): string;
                protected __processMessageAlias(): void;
                protected __processText(): void;
            }
        }
    }
}
