declare namespace TcHmi.Controls.Analytics {
    class YIntervalChannel extends LineAreaChannel {
        constructor(symbol: I_SE_SymbolEntry, parent: Element, props: Chart_Properties, xStepDistance: number, offsetLeft: number, yStepDistance: number, offsetTop: number, channelConfig: I_SE_ChannelEntry, options: I_SE_YIntervalChannel);
        protected __options: I_SE_YIntervalChannel;
        /** Draw the channel*/
        drawChannel(axisData: Array<I_SE_DataEntry>, xPosSplitter?: number, minTime?: number): void;
    }
    interface I_SE_YIntervalChannel extends I_SE_Base_ChartOptions, I_SE_FillMode_ChartOptions, I_SE_LineAreChannel_ChartOptions {
    }
}
