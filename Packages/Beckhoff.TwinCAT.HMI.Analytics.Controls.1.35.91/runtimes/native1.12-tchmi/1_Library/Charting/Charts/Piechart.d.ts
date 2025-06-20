declare namespace TcHmi.Controls.Analytics {
    class PieRingChart extends BaseChart {
        constructor(parent: Element, props: Chart_Properties, options: I_SE_PieRingChart_ChartOptions);
        protected __options: I_SE_PieRingChart_ChartOptions;
        /** Edge length of the grid where the pies are displayed*/
        protected __gridEdgeLength: number;
        /** Normal radius of the slices*/
        protected __normalRadius: number;
        /** Labels of the pies*/
        protected __elPieLabels: SVGText[];
        clearChart(): void;
        createInitChart(): void;
        createChart(rawData: I_SE_DataSymbolValue): void;
        protected __createChannelValues(): void;
        cleanElement(): void;
        protected __calculateSum(data: I_SE_DataEntry[]): number;
        protected __calculateSumInCalculation(data: I_SE_DataEntry[]): number;
        getValues(posX: number, posY: number): I_SE_DataEntry_Extended[];
    }
    interface I_SE_PieRingChart_ChartOptions extends I_SE_Base_ChartOptions, I_SE_Hover_ChartOptions, I_SE_TimeBased_ChartOptions, I_SE_BaseChannel_ChartOptions {
        isRingChart: boolean;
    }
}
