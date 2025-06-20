declare namespace TcHmi.Controls.Analytics {
    class BarChart extends GridBasedChart {
        constructor(parent: Element, props: Chart_Properties, options: I_SE_BarChart_ChartOptions);
        protected __options: I_SE_BarChart_ChartOptions;
        createInitChart(): void;
        createChart(rawData: I_SE_DataSymbolValue): void;
        protected __createChannelValues(): void;
        getValues(posX: number, posY: number): I_SE_DataEntry_Extended[];
    }
    interface I_SE_BarChart_ChartOptions extends I_SE_Base_ChartOptions, I_SE_GridVisual_ChartOptions, I_SE_TimeBased_ChartOptions, I_SE_Hover_ChartOptions, I_SE_Compare_ChartOptions, I_SE_YAxis_Chart_Options, I_SE_BaseChannel_ChartOptions {
    }
}
