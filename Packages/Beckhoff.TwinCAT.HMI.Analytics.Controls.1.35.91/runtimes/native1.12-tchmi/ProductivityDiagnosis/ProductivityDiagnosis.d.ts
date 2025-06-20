declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            class ProductivityDiagnosis extends TcHmi.Controls.Analytics.AnalyticsControl {
                /**
                 * @description Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elementSvg: JQuery;
                protected __elementChart: JQuery;
                protected __elementProductivity: JQuery;
                protected __elementLastProductivity: JQuery;
                protected __elementInnerText: JQuery;
                protected __elementInnerText1: JQuery;
                protected __elementInnerText2: JQuery;
                protected __elementStrokeCircle: JQuery;
                protected __elementStrokeCircleOuter: JQuery;
                protected __elementLegendRectProd: JQuery;
                protected __elementLegendRectProdLast: JQuery;
                protected __elementLegendText: JQuery;
                protected __elementSvgDefs: JQuery;
                protected __productivityColorLastCycle: string | null | undefined;
                protected __productivityColor: string | null | undefined;
                protected __productivity: number | null | undefined;
                protected __productivityLastCycle: number | null | undefined;
                protected __showProductivity: string | null | undefined;
                protected __currentCycleAlias: string | null | undefined;
                protected __lastCycleAlias: string | null | undefined;
                protected __radialGrad: string;
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
                setProductivityColor(valueNew: string): void;
                getProductivityColor(): string;
                protected __processProductivityColor(): void;
                setProductivityColorLastCycle(valueNew: string): void;
                getProductivityColorLastCycle(): string;
                protected __processProductivityColorLastCycle(): void;
                setProductivity(valueNew: number): void;
                getProductivity(): number;
                protected __processProductivity(): void;
                setProductivityLastCycle(valueNew: number): void;
                getProductivityLastCycle(): number;
                protected __processProductivityLastCycle(): void;
                setShowProductivity(valueNew: string): void;
                getShowProductivity(): string;
                protected __processShowProductivity(): void;
                setCurrentCycleAlias(valueNew: string): void;
                getCurrentCycleAlias(): string;
                protected __processCurrentCycleAlias(): void;
                setLastCycleAlias(valueNew: string): void;
                getLastCycleAlias(): string;
                protected __processLastCycleAlias(): void;
                protected __processColorGradient(): void;
                protected __processColor(): void;
                protected __processChart(): void;
                protected __processLegend(): void;
                private DrawChartProductivity;
            }
        }
    }
}
