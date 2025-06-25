declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            class PieChart extends TcHmi.Controls.Analytics.AnalyticsControl {
                /**
                 * @description Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elementSvgChart: JQuery;
                protected __elementSvgCirclePaths: JQuery;
                protected __elementSvgCircleLabel: JQuery;
                protected __elementSvgChartDefs: JQuery;
                protected __elementSvgChartCircle: JQuery;
                protected __elementContent: JQuery;
                protected __elLegend: CustomElements.MultiValue;
                protected __valueAlias: string;
                protected __sectionAlias: string;
                protected __invalidAlias: string | null | undefined;
                protected __radialGrad: string;
                private __oldPercentage;
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
                controlWidth: number;
                controlHeight: number;
                getFontScaleFactor(width: any, height: any): number;
                protected __onResized: () => (evt: EventProvider.Event, ctrl: Controls.Analytics.AnalyticsControl) => void;
                protected __valueType: string;
                setValueType(valueNew: string): void;
                getValueType(): string;
                protected __processValueType(): void;
                protected __labels: string[];
                setLabels(valueNew: string[] | null): void;
                getLabels(): string[];
                protected __label2st: number;
                getLabel2ST(): number;
                setLabel2ST(valueNew: number): void;
                protected __showInvalid: boolean;
                setShowInvalid(valueNew: boolean): void;
                getShowInvalid(): boolean;
                protected __processShowInvalid(): void;
                protected __unit: string;
                setUnit(valueNew: string | null): void;
                getUnit(): string;
                protected __processUnit(): void;
                protected __relative: boolean;
                setRelative(valueNew: boolean | null): void;
                getRelative(): boolean;
                protected __processRelative(): void;
                protected __values: number[];
                protected __valuesResolved: number[];
                setValues(valueNew: number[] | null): void;
                protected __onResolverForValuesWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<any>) => void;
                getValues(): number[];
                protected __processValues(): void;
                protected __times: string[];
                setTimes(valueNew: string[] | null): void;
                getTimes(): string[];
                protected __processTimes(): void;
                setValueAlias(valueNew: string): void;
                getValueAlias(): string;
                protected __processValueAlias(): void;
                setSectionAlias(valueNew: string | null): void;
                getSectionAlias(): string;
                protected __processSectionAlias(): void;
                setInvalidAlias(valueNew: string): void;
                getInvalidAlias(): string;
                protected __processInvalidAlias(): void;
                protected __processAmountDecimals(): void;
                protected __processColorGradient(): void;
                protected __processColor(): void;
                protected __processLabels(): void;
                private DrawPieChart;
            }
        }
    }
}
