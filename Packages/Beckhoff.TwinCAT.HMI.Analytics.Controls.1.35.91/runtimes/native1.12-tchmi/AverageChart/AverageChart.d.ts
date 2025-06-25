declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            class AverageChart extends TcHmi.Controls.Analytics.AnalyticsControl {
                /**
                 * @description Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elementMinAlias: JQuery;
                protected __elementMaxAlias: JQuery;
                protected __elementAvgAlias: JQuery;
                protected __elementActualValueAlias: JQuery;
                protected __elementMin: JQuery;
                protected __elementMax: JQuery;
                protected __elementAvg: JQuery;
                protected __elementActualValue: JQuery;
                protected __elementSvg: JQuery;
                protected __elementSvgDefs: JQuery;
                protected __elementSvgChart: JQuery;
                protected __elementSvgChartMinLine: JQuery;
                protected __elementSvgChartMaxLine: JQuery;
                protected __elementSvgChartAvgLine: JQuery;
                protected __elementSvgChartCurLine: JQuery;
                protected __elementSvgChartMinText: JQuery;
                protected __elementSvgChartMaxText: JQuery;
                protected __elementSvgChartAvgText: JQuery;
                protected __elementSvgChartCurText: JQuery;
                protected __elementAvgTest: JQuery;
                protected __elementTextGroup: JQuery;
                protected __elementTextAlias: JQuery;
                protected __elementLastEvents: JQuery;
                protected __elementLastMin: JQuery;
                protected __elementLastMax: JQuery;
                protected __elementContainer: JQuery;
                protected __minAlias: string | null | undefined;
                protected __maxAlias: string | null | undefined;
                protected __avgAlias: string | null | undefined;
                protected __monthAlias: string | null | undefined;
                protected __actualValueAlias: string | null | undefined;
                protected __min: number | null | undefined;
                protected __max: number | null | undefined;
                protected __avg: number | null | undefined;
                protected __actualValue: number | null | undefined;
                protected __showActualValue: boolean | null | undefined;
                protected __showLastEvents: boolean | null | undefined;
                protected __showBoundsWarning: boolean | null | undefined;
                protected __showMilliSeconds: boolean | null | undefined;
                protected __lastMax: object | null | undefined;
                protected __lastMin: object | null | undefined;
                protected __positionRight: boolean | null | undefined;
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
                setAvgAlias(valueNew: string): void;
                getAvgAlias(): string;
                protected __processAvgAlias(): void;
                setActualValueAlias(valueNew: string): void;
                getActualValueAlias(): string;
                protected __processActualValueAlias(): void;
                protected __processAmountDecimals(): void;
                setShowActualValue(valueNew: boolean): void;
                getShowActualValue(): boolean;
                protected __processShowActualValue(): void;
                protected __showActualValueText: boolean;
                setShowActualValueText(valueNew: boolean): void;
                getShowActualValueText(): boolean;
                protected __processShowActualValueText(): void;
                setMin(valueNew: number): void;
                getMin(): number;
                protected __processMin(): void;
                setMax(valueNew: number): void;
                getMax(): number;
                protected __processMax(): void;
                setAvg(valueNew: number): void;
                getAvg(): number;
                protected __processAvg(): void;
                setActualValue(valueNew: number): void;
                getActualValue(): number;
                protected __processActualValue(): void;
                protected __processColorGradient(): void;
                protected __processColor(): void;
                protected __processChart(): void;
                setShowMilliSeconds(valueNew: boolean): void;
                getShowMilliSeconds(): boolean;
                protected __processShowMilliSeconds(): void;
                setShowLastEvents(valueNew: boolean): void;
                getShowLastEvents(): boolean;
                setShowBoundsWarning(valueNew: boolean): void;
                getShowAvgBoundsWarning(): boolean;
                setLastMin(valueNew: object): void;
                getLastMin(): object;
                setLastMax(valueNew: object): void;
                getLastMax(): object;
                protected __processShowLastEvents(): void;
                protected __processLastMin(): void;
                protected __processLastMax(): void;
                private DrawAverageChart;
            }
        }
    }
}
