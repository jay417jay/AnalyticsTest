declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            class StateChart extends TcHmi.Controls.Analytics.AnalyticsControl {
                /**
                 * @description Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elementSvg: JQuery;
                protected __elementSvgDefs: JQuery;
                protected __elementSvgState: JQuery;
                protected __elementSvgStateText1: JQuery;
                protected __elementSvgStateText2: JQuery;
                protected __elementSvgStateTextPercentage: JQuery;
                protected __stateAlias: string | null | undefined;
                protected __stateColor: SolidColor | null | undefined;
                protected __offColor: SolidColor | null | undefined;
                protected __showInvalid: boolean | null | undefined;
                protected __state: number | null | undefined;
                protected __stateNames: any | null | undefined;
                protected __percentages: any | null | undefined;
                protected __linearGrad: string;
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
                setStateAlias(valueNew: string): void;
                getStateAlias(): string;
                protected __processStateAlias(): void;
                setStateColor(valueNew: SolidColor): void;
                getStateColor(): SolidColor;
                protected __processStateColor(): void;
                setOffColor(valueNew: SolidColor): void;
                getOffColor(): SolidColor;
                protected __processOffColor(): void;
                setShowInvalid(valueNew: boolean): void;
                getShowInvalid(): boolean;
                protected __processShowInvalid(): void;
                setState(stateNew: number): void;
                getState(): number;
                protected __processState(): void;
                setPercentages(percentagesNew: object): void;
                getPercentages(): any;
                protected __processPercentages(): void;
                setStateNames(stateNamesNew: object): void;
                getStateNames(): any;
                protected __processStateNames(): void;
                protected __processColorGradient(): void;
                protected __processColor(): void;
                private DrawStateChart;
            }
        }
    }
}
