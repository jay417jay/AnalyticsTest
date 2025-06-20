declare namespace TcHmi.Controls.Analytics {
    class XYChannel extends LineAreaChannel {
        constructor(symbol: I_SE_SymbolEntry, parent: Element, props: Chart_Properties, xStepDistance: number, offsetLeft: number, yStepDistance: number, offsetTop: number, channelConfig: I_SE_ChannelEntry, options: I_SE_LineAreChannel_ChartOptions);
        protected __options: I_SE_LineAreChannel_ChartOptions;
        /** Draw the channel*/
        drawChannel(axisData: Array<I_SE_DataEntry>, onlyUpdate?: boolean): void;
        redrawChannel(axisData: Array<I_SE_DataEntry>): void;
    }
}
