declare namespace TcHmi.Controls.Analytics {
    class YTChannel extends LineAreaChannel {
        constructor(symbol: I_SE_SymbolEntry, parent: Element, props: Chart_Properties, xStepDistance: number, offsetLeft: number, yStepDistance: number, offsetTop: number, channelConfig: I_SE_ChannelEntry, options: I_SE_YTChannel_Chart_Options);
        protected __options: I_SE_YTChannel_Chart_Options;
        /** Draw the channel*/
        drawChannel(axisData: Array<I_SE_DataEntry>, useAbsoluteMin?: boolean, xPosSplitter?: number, minTimestamp?: number): void;
        protected __getTimeDifference(axisData: Array<I_SE_DataEntry>): number;
    }
    interface I_SE_YTChannel_Chart_Options extends I_SE_Base_ChartOptions, I_SE_FillMode_ChartOptions, I_SE_LineAreChannel_ChartOptions {
    }
}
