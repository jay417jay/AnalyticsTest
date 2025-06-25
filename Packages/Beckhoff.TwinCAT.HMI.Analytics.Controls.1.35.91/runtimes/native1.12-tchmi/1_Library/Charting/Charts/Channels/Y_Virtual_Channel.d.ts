declare namespace TcHmi.Controls.Analytics {
    class YVirtualChannel extends LineAreaChannel {
        constructor(symbol: I_SE_SymbolEntry, parent: Element, props: Chart_Properties, xStepDistance: number, offsetLeft: number, yStepDistance: number, offsetTop: number, channelConfig: I_SE_ChannelEntry, axis: XVirtualAxis, channelTimerange: I_SE_TimerangeEntry, timeDiff: number, strokeDasharray: string, strokeWidth: string, channelColorReducer: number, options: I_SE_YVirtualChannel_Chart_Options);
        protected __options: I_SE_YVirtualChannel_Chart_Options;
        /** x-axis*/
        protected __xAxis: XVirtualAxis;
        get xAxis(): XVirtualAxis;
        /** Timerange-Entry*/
        protected __channelTimerange: I_SE_TimerangeEntry;
        /** Timediff*/
        protected __timediff: number;
        /** Draw the channel*/
        drawChannel(axisData: Array<I_SE_DataEntry>, xPosSplitter?: number): void;
    }
    interface I_SE_YVirtualChannel_Chart_Options extends I_SE_Base_ChartOptions, I_SE_FillMode_ChartOptions, I_SE_LineAreChannel_ChartOptions {
    }
}
