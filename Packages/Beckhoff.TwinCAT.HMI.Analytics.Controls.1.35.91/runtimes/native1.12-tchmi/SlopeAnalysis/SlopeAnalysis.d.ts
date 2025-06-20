declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            class SlopeAnalysis extends TcHmi.Controls.Analytics.AnalyticsControl {
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
                protected __elementSvgSlope: JQuery;
                protected __elementSvgSlopeMin: JQuery;
                protected __elementSvgSlopeMax: JQuery;
                protected __elementSvgSlopeAct: JQuery;
                protected __elementSvgSlopeMinText: JQuery;
                protected __elementSvgSlopeMaxText: JQuery;
                protected __elementSvgSlopeActText: JQuery;
                protected __elementContainer: JQuery;
                protected __elementLastEvents: JQuery;
                protected __elementSlopeMin: JQuery;
                protected __elementSlopeMax: JQuery;
                protected __monthAlias: string | null | undefined;
                protected __minAlias: string | null | undefined;
                protected __maxAlias: string | null | undefined;
                protected __curAlias: string | null | undefined;
                protected __actualValue: number | null | undefined;
                protected __min: number | null | undefined;
                protected __max: number | null | undefined;
                protected __lastMin: any | null | undefined;
                protected __lastMax: any | null | undefined;
                protected __showLastEvents: boolean | null | undefined;
                protected __showMilliSeconds: boolean | null | undefined;
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
                setMin(valueNew: number): void;
                getMin(): number;
                protected __processMin(): void;
                setMax(valueNew: number): void;
                getMax(): number;
                protected __processMax(): void;
                setActualValue(valueNew: number): void;
                getActualValue(): number;
                protected __processActualValue(): void;
                protected __processColorGradient(): void;
                protected __processColor(): void;
                protected __processChart(): void;
                setShowLastEvents(valueNew: boolean): void;
                getShowLastEvents(): boolean;
                setShowMilliSeconds(valueNew: boolean): void;
                getShowMilliSeconds(): boolean;
                protected __processShowMilliSeconds(): void;
                setLastMin(valueNew: object): void;
                getLastMin(): any;
                setLastMax(valueNew: object): void;
                getLastMax(): any;
                protected __processShowLastEvents(): void;
                protected __processLastMin(): void;
                protected __processLastMax(): void;
                protected __processAmountDecimals(): void;
                private DrawSlopeChart;
            }
        }
    }
}
