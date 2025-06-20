declare namespace TcHmi.Controls.Analytics {
    class XVirtualAxis extends X_Base_Axis {
        constructor(parent: Element, props: Chart_Properties, options: I_SE_XVirtualAxis_Chart_Options);
        protected __options: I_SE_XVirtualAxis_Chart_Options;
        drawAxis(startPoint: Point, endPoint: Point, axisData: Array<I_SE_DataEntry>): void;
        protected __getTimeFormatForLabels(): E_TimeFormat;
    }
    interface I_SE_XVirtualAxis_Chart_Options extends I_SE_Axis_Chart_Options, I_SE_Base_ChartOptions, I_SE_TimeBased_ChartOptions, I_SE_Compare_ChartOptions {
    }
}
