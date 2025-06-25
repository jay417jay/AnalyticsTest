declare namespace TcHmi.Controls.Analytics {
    abstract class GridBasedChart extends BaseChart {
        constructor(parent: Element, props: Chart_Properties, options: I_SE_GridBased_ChartOptions);
        protected __options: I_SE_GridBased_ChartOptions;
        /** Number of X-Axis */
        protected __numberOfXAxes: number;
        /** X-Axis */
        protected __xAxes: X_Base_Axis[];
        /** Number of Y-Axis */
        protected __numberOfYAxes: number;
        /** Y-Axes */
        protected __yAxes: YAxis[];
        /** Margin for the axes */
        protected __axisMargin: number;
        /** Hover Points */
        protected __hoverPoints: SVGCircle[];
        /** Default height of a x-axis */
        protected __defaultXAxisHeight: number;
        /** Channels in the chart */
        protected __channels: Base_Channel[];
        /** Background lines of the chart*/
        protected __backgroundLines: SVGLine[];
        /** Interval size */
        protected __intervalSizes: number[];
        /** maximum interval size */
        protected __maxIntervalSize: number;
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
        clearHoverPoints(): void;
        /** Is called by the hover window when hovering gets disabled. Overwrite method to clean up any elements you manipulate inside the processHover */
        processOnHoverEnd(): void;
        cleanElement(): void;
        protected __createChartBackground(): Element;
        protected __preCreateInitChart(): void;
        protected __postCreateInitChart(): void;
        protected __preCreateChart(rawData: I_SE_DataSymbolValue): void;
        protected __postCreateChart(): void;
        protected __createYAxes(): void;
        protected __createYAxisInstanceSpecific(axisData: I_SE_DataEntry[]): I_SE_DataEntry[];
        /**
         * Get the last sample(s) of a timerange. Multiple data will be only retured if data of multiple streams has been selected
         */
        protected __getLastTimerangeData(timerangeStart: number, timerangeEnd: number, data: I_SE_DataEntry[]): I_SE_DataEntry[];
        processOnHover(cursorX: number, cursorY: number): I_Hover_Value_Set[];
    }
    interface I_SE_GridBased_ChartOptions extends I_SE_Base_ChartOptions, I_SE_GridVisual_ChartOptions, I_SE_YAxis_Chart_Options {
    }
    /**Base class for timebased compare charts */
    abstract class TimeCompareGridBasedChart extends GridBasedChart {
        constructor(parent: Element, props: Chart_Properties, options: I_SE_Compare_ChartOptions);
        protected __options: I_SE_Compare_ChartOptions;
        protected __compareIntervalMs: number;
        protected __createYAxes(): void;
    }
    /**options for compare charts */
    interface I_SE_Compare_ChartOptions extends I_SE_Base_ChartOptions, I_SE_Hover_ChartOptions, I_SE_TimeBased_ChartOptions, I_SE_GridBased_ChartOptions {
        compareType: ECompareChartCompareTypes;
        compareInterval: I_SE_DisplayRange;
        compareIntervalSizeMs: number;
    }
}
