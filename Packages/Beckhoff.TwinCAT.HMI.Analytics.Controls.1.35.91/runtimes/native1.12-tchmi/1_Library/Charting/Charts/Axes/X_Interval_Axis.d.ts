declare namespace TcHmi.Controls.Analytics {
    class XIntervalAxis extends X_Base_Axis {
        constructor(parent: Element, props: Chart_Properties, options: I_SE_XIntervalAxis_Chart_Options);
        protected __options: I_SE_XIntervalAxis_Chart_Options;
        drawBarAxis(startPoint: Point, endPoint: Point, timeInterval: number, channelWidth: number, useAbsoluteTimeValues: boolean, barDefinitions: I_Bar_Def, visibleChannels: number, startByOne: boolean, compareInterval: I_SE_DisplayRange): void;
        protected __getTimeFormatForLabels(rangeUnit: string, compareInterval: I_SE_DisplayRange): E_TimeFormat;
        protected __createBarLabel(text: string, xPos: number): SVGText;
        drawAxis(startPoint: Point, endPoint: Point, axisData: Array<I_SE_DataEntry>, timeInterval?: number): void;
        protected __createIntervalLabel(value: string, xPos: number): SVGText;
    }
    interface I_SE_XIntervalAxis_Chart_Options extends I_SE_Axis_Chart_Options, I_SE_Base_ChartOptions, I_SE_TimeBased_ChartOptions, I_SE_Compare_ChartOptions {
    }
}
