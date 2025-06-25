declare namespace TcHmi.Controls.Analytics {
    class BarChannel extends Base_Channel {
        constructor(symbol: I_SE_SymbolEntry, parent: Element, props: Chart_Properties, xStepDistance: number, offsetLeft: number, yStepDistance: number, offsetTop: number, channelConfig: I_SE_ChannelEntry, options: I_SE_BaseChannel_ChartOptions);
        /** Bars */
        protected __elBars: SVGRectangle[];
        get elBars(): SVGRectangle[];
        /** Labels */
        protected __elLabels: SVGText[];
        get elLabels(): SVGText[];
        /** xStepDistance */
        protected __xStepDistance: number;
        get xStepDistance(): number;
        /** Offset Left */
        protected __offsetLeft: number;
        get offsetLeft(): number;
        /** yStepDistance */
        protected __yStepDistance: number;
        get yStepDistance(): number;
        set yStepDistance(value: number);
        /** Offset Top */
        protected __offsetTop: number;
        get offsetTop(): number;
        /** Label Offset Top (to bar*/
        protected __labelOffsetTop: number;
        get labelOffsetTop(): number;
        /** Channel Data*/
        channelData: I_SE_DataEntry[];
        /** Draw the channel*/
        drawChannel(axisData: Array<I_SE_DataEntry>, channelColorReducer?: number, showLabel?: boolean, onlyUpdate?: boolean): void;
        redrawChannel(axisData: Array<I_SE_DataEntry>, channelColorReducer?: number, showLabel?: boolean): void;
        /** Clean the element (e.g. remove childs) */
        cleanChannel(): void;
    }
}
