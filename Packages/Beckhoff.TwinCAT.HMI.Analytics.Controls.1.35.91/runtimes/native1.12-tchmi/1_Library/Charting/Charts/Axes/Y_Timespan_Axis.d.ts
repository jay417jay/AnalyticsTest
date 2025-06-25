declare namespace TcHmi.Controls.Analytics {
    class YTimespanAxis extends YAxis {
        constructor(parent: Element, props: Chart_Properties, options: I_SE_YAxis_Chart_Options);
        protected __createLabel(yPos: number, numValue: number): SVGText;
    }
}
