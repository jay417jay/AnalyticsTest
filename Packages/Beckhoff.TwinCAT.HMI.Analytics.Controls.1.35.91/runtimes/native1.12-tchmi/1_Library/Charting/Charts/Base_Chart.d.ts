declare namespace TcHmi.Controls.Analytics {
    abstract class BaseChart extends ChartElement {
        constructor(parent: Element, props: Chart_Properties, options: I_SE_Base_ChartOptions);
        /** Channels in the chart */
        protected __channels: Base_Channel[];
        /** Values of the channels (e.g. bars, pies, ...)*/
        protected __channelValues: IChannelValue[];
        /** Background rect of the chart*/
        protected __backgroundRects: SVGRectangle[];
        /** data for init chart */
        protected __initData: I_SE_DataSymbolValue;
        /** channels for init chart */
        protected __initChannelConfigurations: I_SE_ChannelEntry[];
        /** timeranges for init chart */
        protected __initTimeranges: I_SE_TimerangeEntry[];
        /** Interval size */
        protected __intervalSizes: number[];
        /** maximum interval size */
        protected __maxIntervalSize: number;
        /** background rectangle */
        protected __elChartBackground: Element;
        /** Values of the channels */
        protected __channelDataValues: I_ChannelDataValues[];
        /** If there is more distance (in pixel) between two datapoints there will be a new line in every line or area-chart*/
        protected __xPosSplitter: number;
        get xPosSplitter(): number;
        set xPosSplitter(value: number);
        /** Hover Window */
        protected __hoverWindow: HoverWindow;
        get hoverWindow(): HoverWindow;
        /** Create an inital chart*/
        abstract createInitChart(): void;
        /** Create a new chart*/
        abstract createChart(rawData: I_SE_DataSymbolValue): void;
        abstract getValues(posX: number, posY: number): I_SE_DataEntry_Extended[];
        getChannelConfigurations(): I_SE_ChannelEntry[];
        /** Is called by the hover window when hovering gets disabled. Overwrite method to clean up any elements you manipulate inside the processHover */
        processOnHoverEnd(): void;
        protected __createChartBackground(): void;
        protected __createBackgroundRectangle(offsetLeft: number, offsetTop: number, width: number, height: number): Element;
        cleanElement(): void;
        redraw(): boolean;
        protected __preCreateInitChart(): void;
        protected __postCreateInitChart(): void;
        protected __preCreateChart(rawData: I_SE_DataSymbolValue): void;
        protected __createChannelValues(): void;
        protected __postCreateChart(hoverStart: Point, hoverEnd: Point): void;
        /**
         * Get the last sample(s) of a timerange. Multiple data will be only retured if data of multiple streams has been selected
         */
        protected __getLastTimerangeData(timerangeStart: number, timerangeEnd: number, data: I_SE_DataEntry[]): I_SE_DataEntry[];
        processOnHover(cursorX: number, cursorY: number): I_Hover_Value_Set[];
    }
    interface I_ChannelDataValues {
        channelConfig: I_SE_ChannelEntry;
        timerange: I_SE_TimerangeEntry;
        channelData: I_SE_DataEntry[];
        barSetIndex: number;
    }
}
