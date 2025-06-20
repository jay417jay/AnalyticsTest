declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            class BinaryState extends TcHmi.Controls.Analytics.AnalyticsControl {
                /**
                 * @description Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elementState: JQuery;
                protected __elementContainer: JQuery;
                protected __onColor: SolidColor | null | undefined;
                protected __offColor: SolidColor | null | undefined;
                protected __state: boolean | null | undefined;
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
            }
        }
    }
}
