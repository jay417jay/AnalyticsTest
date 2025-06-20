declare namespace TcHmi.Controls.Analytics {
    class XLabelAxis extends X_Base_Axis {
        constructor(parent: Element, props: Chart_Properties, options: I_SE_XLabelAxis_Chart_Options);
        protected __options: I_SE_XLabelAxis_Chart_Options;
        drawAxis(startPoint: Point, endPoint: Point): void;
        protected __createLabel(posX: number, text: string): SVGText;
    }
    interface I_SE_XLabelAxis_Chart_Options extends I_SE_Axis_Chart_Options {
        gap: number;
    }
}
