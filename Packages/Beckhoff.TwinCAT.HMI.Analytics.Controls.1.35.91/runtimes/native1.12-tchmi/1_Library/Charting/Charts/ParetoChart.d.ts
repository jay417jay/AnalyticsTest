declare namespace TcHmi.Controls.Analytics {
    class ParetoChart extends GridBasedChart {
        constructor(parent: Element, props: Chart_Properties, options: I_SE_ParetoChart_ChartOptions);
        protected __options: I_SE_ParetoChart_ChartOptions;
        protected __xyVirtualChannel: I_SE_ChannelEntry;
        protected __paretoLines: SVGLine[];
        createInitChart(): void;
        cleanElement(): void;
        protected __preCreateChart(rawData: I_SE_DataSymbolValue): void;
        protected __postCreateChart(): void;
        redraw(): boolean;
        createChart(rawData: I_SE_DataSymbolValue): void;
        protected __drawParetoLines(): void;
        processOnHover(cursorX: number, cursorY: number): I_Hover_Value_Set[];
        processOnHoverEnd(): void;
        getValues(cursorX: number, cursorY: number): I_SE_DataEntry_Extended[];
        protected __createYAxes(): void;
        private __createAbsoluteYAxis;
        private __getXYVirtualData;
    }
    interface I_SE_ParetoChart_ChartOptions extends I_SE_Base_ChartOptions, I_SE_Hover_ChartOptions, I_SE_GridBased_ChartOptions, I_SE_XLabelAxis_Chart_Options, I_SE_LineAreChannel_ChartOptions {
        drawParetoEntry: boolean;
        showParetoLine: boolean;
        paretoLinePercentage: number;
        paretoLineColor: string;
        baseBarColor: string;
        vitalFewColor: string;
        drawVitalFew: boolean;
        xyLineColor: string;
        showBarLabels: boolean;
        isTimeValue: boolean;
        yAxisScaling: E_ParetoYAxisScaling;
        paretoMode: E_ParetoMode;
    }
}
