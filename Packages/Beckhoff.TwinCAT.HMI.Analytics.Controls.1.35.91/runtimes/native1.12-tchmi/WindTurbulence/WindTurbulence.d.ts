declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            class WindTurbulence extends TcHmi.Controls.Analytics.AnalyticsControl {
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
                protected __elementSvgWindMill: JQuery;
                protected __elementSvgWind: JQuery;
                protected __elementSvgText: JQuery;
                protected __elementSvgTextTurbulence: JQuery;
                protected __elementSvgTextVelocity: JQuery;
                protected __elementSvgTextIntensity: JQuery;
                protected __windVelocityAlias: string | null | undefined;
                protected __windTurbulenceAlias: string | null | undefined;
                protected __turbulenceIntensityAlias: string | null | undefined;
                protected __windVelocity: number | null | undefined;
                protected __turbulenceIntensity: number | null | undefined;
                protected __turbulence: number | null | undefined;
                protected __windmillColor: string | null | undefined;
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
                setWindVelocity(valueNew: number): void;
                getWindVelocity(): number;
                protected __processWindVelocity(): void;
                setTurbulence(valueNew: number): void;
                getTurbulence(): number;
                protected __processTurbulence(): void;
                setTurbulenceIntensity(valueNew: number): void;
                getTurbulenceIntensity(): number;
                protected __processIntensity(): void;
                setWindVelocityAlias(valueNew: string): void;
                getWindVelocityAlias(): string;
                protected __processWindVelocityAlias(): void;
                setWindTurbulenceAlias(valueNew: string): void;
                getWindTurbulenceAlias(): string;
                protected __processWindTurbulenceAlias(): void;
                setTurbulenceIntensityAlias(valueNew: string): void;
                getTurbulenceIntensityAlias(): string;
                protected __processTurbulenceIntensityAlias(): void;
                setWindmillColor(valueNew: string): void;
                getWindmillColor(): string;
                protected __processWindmillColor(): void;
                protected __processAmountDecimals(): void;
                protected __processColorGradient(): void;
                protected __processColor(): void;
            }
        }
    }
}
