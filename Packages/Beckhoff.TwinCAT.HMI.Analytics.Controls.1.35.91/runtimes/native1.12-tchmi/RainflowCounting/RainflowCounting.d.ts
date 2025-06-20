declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            class RainflowCounting extends TcHmi.Controls.Analytics.AnalyticsControl {
                /**
                 * @description Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elementSvg: JQuery;
                protected __elementSvgCoordSystem: JQuery;
                protected __elementSvgTimeAlias: JQuery;
                protected __elementSvgStressAlias: JQuery;
                protected __elementSvgGraph: JQuery;
                protected __elementSvgRaindrops: JQuery;
                protected __elementMatrix: JQuery;
                protected __elementMatrixFirstCell: JQuery;
                protected __elementMatrixFirstLine: JQuery;
                protected __elementMatrixStressBinsAlias: JQuery;
                protected __elementMatrixHalfCyclesAlias: JQuery;
                protected __elementMatrixCells: JQuery;
                protected __elementMatrixLines: JQuery;
                protected __elementMatrixText: JQuery;
                protected __elementMatrixDefs: JQuery;
                protected __elementMinersRule: JQuery;
                protected __elementMinersRuleGraph: JQuery;
                protected __elementMinersRuleAliasText: JQuery;
                protected __elementMinersRuleText: JQuery;
                protected __elementMinersRuleTextResult: JQuery;
                protected __elementMinersRuleTextDiv: JQuery;
                protected __OnColor: string | null | undefined;
                protected __OffColor: string | null | undefined;
                protected __state: boolean | null | undefined;
                protected __timeAlias: string | null | undefined;
                protected __stressAlias: string | null | undefined;
                protected __stressBinsAlias: string | null | undefined;
                protected __halfCyclesAlias: string | null | undefined;
                protected __NAlias: string | null | undefined;
                protected __snAlias: string | null | undefined;
                protected __sAlias: string | null | undefined;
                protected __chooseDisplay: string | null | undefined;
                protected __showOuterBins: boolean | null | undefined;
                protected __stressBins: any | null | undefined;
                protected __minersResult: string | null | undefined;
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
                setStressAlias(valueNew: string): void;
                getStressAlias(): string;
                protected __processStressAlias(): void;
                setTimeAlias(valueNew: string): void;
                getTimeAlias(): string;
                protected __processTimeAlias(): void;
                setStressBinsAlias(valueNew: string): void;
                getStressBinsAlias(): string;
                protected __processStressBinsAlias(): void;
                setHalfCyclesAlias(valueNew: string): void;
                getHalfCyclesAlias(): string;
                protected __processHalfCyclesAlias(): void;
                setsnAlias(valueNew: string): void;
                getsnAlias(): string;
                protected __processsnAlias(): void;
                setNAlias(valueNew: string): void;
                getNAlias(): string;
                protected __processNAlias(): void;
                setSAlias(valueNew: string): void;
                getSAlias(): string;
                protected __processSAlias(): void;
                getFontsizeTitle(): number;
                getChooseDisplay(): string;
                setChooseDisplay(valueNew: string): void;
                getStressBins(): any;
                setStressBins(valueNew: object): void;
                protected __processStressBins(): void;
                getMinersResult(): string;
                setMinersResult(valueNew: string): void;
                protected __processMinersResult(): void;
                setShowOuterBins(valueNew: boolean): void;
                getShowOuterBins(): boolean;
                protected __processShowOuterBins(): void;
                protected __processColorGradient(): void;
                protected __processChooseDisplay(): void;
                protected __processColor(): void;
                private DrawMatrix;
                private DrawMinersRule;
            }
        }
    }
}
