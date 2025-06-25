declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            class Integrator extends TcHmi.Controls.Analytics.AnalyticsControl {
                /**
                 * @description Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elementChart: JQuery;
                protected __elementChartCoordSystem: JQuery;
                protected __elementChartCoordSystemText: JQuery;
                protected __elementChartYAxisLabel: JQuery;
                protected __elementChartYLines: JQuery;
                protected __elementChartYPoints: JQuery;
                protected __elementChartGraphLine: JQuery;
                protected __elementChartDefs: JQuery;
                protected __dataPointsY: any | null | undefined;
                protected __xLabel: string | null | undefined;
                protected __yLabel: string | null | undefined;
                protected __pointColor: string | null | undefined;
                protected __chartType: string | null | undefined;
                protected __lineWidth: number | null | undefined;
                protected __axisLabelSize: number | null | undefined;
                protected __pointSize: number | null | undefined;
                protected __yValue: number | null | undefined;
                protected __valueSize: number | null | undefined;
                protected __valueLabelX: string | null | undefined;
                protected __showAxisLabels: boolean | null | undefined;
                protected __keepNullAxis: boolean | null | undefined;
                protected __radialGrad: string;
                protected __oldMaxValue: number;
                protected __oldMinValue: number;
                protected __firstRun: boolean;
                protected __resetAxisLabelsEvent: DestroyFunction | null;
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
                setYValue(valueNew: number): void;
                getYValue(): number;
                protected __processYValue(): void;
                setValueSize(valueNew: number): void;
                getValueSize(): number;
                protected __processValueSize(): void;
                setValueLabelX(valueNew: object): void;
                getValueLabelX(): string;
                protected __processValueLabelX(): void;
                setShowAxisLabels(valueNew: boolean): void;
                getShowAxisLabels(): boolean;
                protected __processShowAxisLabels(): void;
                setXLabel(valueNew: string): void;
                getXLabel(): string;
                protected __processXLabel(): void;
                setYLabel(valueNew: string): void;
                getYLabel(): string;
                protected __processYLabel(): void;
                setAxisLabelSize(valueNew: number): void;
                getAxisLabelSize(): number;
                protected __processAxisLabelSize(): void;
                setPointSize(valueNew: number): void;
                getPointSize(): number;
                protected __processPointSize(): void;
                setPointColor(valueNew: string): void;
                getPointColor(): string;
                protected __processPointColor(): void;
                setChartType(valueNew: string): void;
                getChartType(): string;
                protected __processChartType(): void;
                setLineWidth(valueNew: number): void;
                getLineWidth(): number;
                protected __processLineWidth(): void;
                setKeepNullAxis(valueNew: boolean): void;
                getKeepNullAxis(): boolean;
                protected __processKeepNullAxis(): void;
                protected __processInputData(): void;
                protected __processColorGradient(): void;
                protected __processColor(): void;
                protected __processLineChart(): void;
                private getMaxDataYValue;
                private getMinDataYValue;
                private drawHorizontalLine;
                private drawPoint;
                private DrawLineChart;
            }
        }
    }
}
