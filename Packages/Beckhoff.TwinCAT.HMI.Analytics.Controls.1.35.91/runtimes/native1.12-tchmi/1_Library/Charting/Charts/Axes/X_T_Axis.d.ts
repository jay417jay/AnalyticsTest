declare namespace TcHmi.Controls.Analytics {
    class XTAxis extends X_Base_Axis {
        constructor(parent: Element, props: Chart_Properties, options: I_SE_Axis_Chart_Options);
        drawAxis(startPoint: Point, endPoint: Point, axisData: Array<I_SE_DataEntry>, timerangeEndTimestamp?: number, showSubBins?: boolean): void;
    }
}
