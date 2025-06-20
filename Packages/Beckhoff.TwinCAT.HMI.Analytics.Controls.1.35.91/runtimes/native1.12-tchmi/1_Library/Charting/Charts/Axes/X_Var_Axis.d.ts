declare namespace TcHmi.Controls.Analytics {
    class XVarAxis extends X_Base_Axis {
        constructor(parent: Element, props: Chart_Properties, options: I_SE_XVarAxis_Chart_Options);
        /** X_Var_Axis specific options*/
        protected __options: I_SE_XVarAxis_Chart_Options;
        drawAxis(startPoint: Point, endPoint: Point): void;
        protected __createLabel(posX: number, text: string): SVGText;
    }
    interface I_SE_XVarAxis_Chart_Options extends I_SE_Axis_Chart_Options, I_SE_Base_ChartOptions, I_SE_TimeBased_ChartOptions, I_SE_Compare_ChartOptions {
    }
}
