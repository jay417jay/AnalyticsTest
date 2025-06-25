declare namespace TcHmi.Controls.Analytics {
    class PieChannel extends Base_Channel {
        constructor(symbol: I_SE_SymbolEntry, parent: Element, props: Chart_Properties, centerX: number, centerY: number, radius: number, pieOffset: number, isRing: boolean, channelConfig: I_SE_ChannelEntry, options: I_SE_BaseChannel_ChartOptions);
        /** If true this is a ring */
        protected __isRing: boolean;
        /** Value of the sample */
        protected __lastValue: number;
        /** Sum of the last sample*/
        protected __sampleSum: number;
        /** Pie Offset */
        protected __pieOffset: number;
        /** Channel opacity */
        protected __opacity: number;
        /** Slices */
        protected __pieSlices: SVGCircle[];
        get elSlices(): SVGCircle[];
        /** Labels */
        protected __elLabels: SVGText[];
        get elLabels(): SVGText[];
        /** Center X*/
        protected __centerX: number;
        get offsetLeft(): number;
        /** Center Y*/
        protected __centerY: number;
        get offsetTop(): number;
        /** Radius Y*/
        protected __radius: number;
        get radius(): number;
        /** Pie Offset cummulated*/
        protected __pieOffsetCum: number;
        get pieOffsetCum(): number;
        /** Draw the channel*/
        drawChannel(axisData: Array<I_SE_DataEntry>, sampleSum?: number): void;
        protected __setPieSlice(elPieSlice: SVGCircle): void;
        updateChannelProperties(radius: number, opacity: number): void;
        /** Clean the element (e.g. remove childs) */
        cleanChannel(): void;
    }
}
