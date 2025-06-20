declare namespace TcHmi.Controls.Analytics {
    abstract class Base_Channel extends ChartElement {
        constructor(symbol: I_SE_SymbolEntry, parent: Element, props: Chart_Properties, channelConfig: I_SE_ChannelEntry, options: I_SE_BaseChannel_ChartOptions, channelColorReducer?: number);
        protected __options: I_SE_BaseChannel_ChartOptions;
        /** Config of the channel*/
        protected __channelConfig: I_SE_ChannelEntry;
        get channelConfig(): I_SE_ChannelEntry;
        set channelConfig(value: I_SE_ChannelEntry);
        get channelColor(): string;
        set channelColor(value: string);
        /** Symbol of the channel*/
        protected __symbol: I_SE_SymbolEntry;
        get symbol(): I_SE_SymbolEntry;
        /** Draw the channel*/
        abstract drawChannel(axisData: Array<I_SE_DataEntry>): void;
        /**
         * do not add or remove elements in this method. Only update properties of existing elements
         * @param axisData
         */
        redrawChannel(axisData: Array<I_SE_DataEntry>): void;
        /** Clean the channel*/
        abstract cleanChannel(): void;
        /** Clean the element (e.g. remove childs) */
        cleanElement(): void;
    }
    interface I_SE_BaseChannel_ChartOptions extends I_SE_Base_ChartOptions {
        /** Reduce Factor of the channel color*/
        channelColorReducer: number;
    }
}
