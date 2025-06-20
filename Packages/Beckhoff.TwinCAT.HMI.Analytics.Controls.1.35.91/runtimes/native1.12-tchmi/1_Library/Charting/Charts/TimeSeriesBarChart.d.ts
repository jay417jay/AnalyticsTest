declare namespace TcHmi.Controls.Analytics {
    class TimeSeriesBarchart extends TimeCompareGridBasedChart {
        constructor(parent: Element, props: Chart_Properties, options: I_SE_TimeSeriesBarChart_ChartOptions);
        protected __options: I_SE_TimeSeriesBarChart_ChartOptions;
        /**Timedifferences */
        protected __timeDifferencesInTc: number[];
        createInitChart(): void;
        createChart(rawData: I_SE_DataSymbolValue): void;
        protected __getChannelWidth(barDefinition: I_Bar_Def, xAxisStartPoint: Point, xAxisEndpoint: Point): number;
        protected __getVisibleChannels(): number;
        protected __createTimeSeriesBarChart(rawData: I_SE_DataSymbolValue): void;
        protected __getTimeFormatForLabels(rangeUnit: string): E_TimeFormat;
        protected __createBarSession(): IChannelValue;
        getValues(posX: number, posY: number): I_SE_DataEntry_Extended[];
        protected __createChannelValues(): void;
        protected __createChannelValuesCombined(rawData: I_SE_DataSymbolValue): void;
        protected __createChannelValuesAbsolutRelativ(rawData: I_SE_DataSymbolValue): void;
        protected __getBarDefinition(): I_Bar_Def;
    }
    namespace BarIntervalWidthHelper {
        function getBarDefinition(barIntervalWidth: I_SE_DisplayRange, compareInterval: I_SE_DisplayRange): I_Bar_Def;
    }
    interface I_Bar_Def {
        numberOfBars: number;
        barTimerangeMs: number;
        pseudoRangeUnit: string;
    }
    interface I_SE_TimeSeriesBarChart_ChartOptions extends I_SE_Compare_ChartOptions, I_SE_BarChart_ChartOptions, I_SE_BaseChannel_ChartOptions {
        barIntervalWidth: I_SE_DisplayRange;
    }
}
