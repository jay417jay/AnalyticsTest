declare namespace TcHmi.Controls.Analytics {
    abstract class Base_Axis extends ChartElement {
        constructor(parent: Element, props: Chart_Properties, options: I_SE_Axis_Chart_Options);
        protected __options: I_SE_Axis_Chart_Options;
        /** Main Line of the Axis*/
        protected __axisLine: SVGLine;
        /** Axis description */
        protected __elAxisDescription: SVGText;
        /** Ticks of the Axis*/
        protected __axisTicks: SVGLine[];
        get axisTicks(): SVGLine[];
        /** Labels of the Axis*/
        protected __axisLabels: SVGText[];
        get axisLabels(): SVGText[];
        /** Startpoint of the Axis*/
        protected __startPoint: Point;
        get startPoint(): Point;
        get left(): number;
        get top(): number;
        /** Endpoint of the Axis*/
        protected __endPoint: Point;
        get endPoint(): Point;
        get right(): number;
        /** StepDistance describes how large one timestamp in tcbase-time-format is in pixel in the chart*/
        protected __stepDistance: number;
        get stepDistance(): number;
        /** Length of an axis-tick in px */
        protected __tickLength: number;
        get tickLength(): number;
        /** Width of the element */
        protected __width: number;
        get width(): number;
        /** Height of the element */
        protected __height: number;
        get height(): number;
        /** Draw the axis*/
        abstract drawAxis(startPoint: Point, endPoint: Point, axisData: Array<I_SE_DataEntry>): void;
        /** Clean the element (e.g. remove childs) */
        cleanElement(): void;
        /** Clean the element (e.g. remove childs) */
        cleanLabels(withTicks?: boolean): void;
        /** Set the axis to front*/
        setToFront(): void;
        protected __addTick(tick: SVGLine): void;
        protected __addLabel(label: SVGText): void;
        protected __removeLabel(label: SVGText): void;
    }
    abstract class X_Base_Axis extends Base_Axis {
        /**
         * Constructor of the Base_Axis
         */
        constructor(parent: Element, props: Chart_Properties, options: I_SE_Axis_Chart_Options);
        protected __options: I_SE_Axis_Chart_Options;
        get minValue(): number;
        /** minvalue */
        protected __minValue: number;
        get maxValue(): number;
        /** maxvalue */
        protected __maxValue: number;
        protected __createLabel(posX: number, timeFormatxAxis: E_TimeFormat): SVGText;
        createLabelWithText(posX: number, posY: number, text: string, createTick?: boolean): SVGText;
    }
    interface I_SE_Axis_Chart_Options extends I_SE_Base_ChartOptions {
    }
}
