declare namespace TcHmi.Controls.Analytics {
    class CompareYTChart extends TimeCompareGridBasedChart {
        constructor(parent: Element, props: Chart_Properties, options: I_SE_CompareYTChart_ChartOptions);
        protected __options: I_SE_CompareYTChart_ChartOptions;
        /**Timedifferences of timeranges related to the reference timerange*/
        protected __timeDifferencesInTc: number[];
        createInitChart(): void;
        createChart(rawData: I_SE_DataSymbolValue): void;
        protected __createCombinedTimerangeChart(rawData: I_SE_DataSymbolValue): void;
        protected __createAbsoluteTimerangeChart(rawData: I_SE_DataSymbolValue): void;
        protected __createRelativeTimerangeChart(rawData: I_SE_DataSymbolValue): void;
        protected __createChannelValues(): void;
        getValues(cursorX: number, cursorY: number): I_SE_DataEntry_Extended[];
    }
    interface I_SE_CompareYTChart_ChartOptions extends I_SE_Compare_ChartOptions, I_SE_Axis_Chart_Options, I_SE_FillMode_ChartOptions, I_SE_LineAreChannel_ChartOptions {
    }
}
