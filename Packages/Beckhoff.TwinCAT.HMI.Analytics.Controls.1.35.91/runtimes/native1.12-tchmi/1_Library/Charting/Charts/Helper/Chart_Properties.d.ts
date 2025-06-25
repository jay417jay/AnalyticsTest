declare namespace TcHmi.Controls.Analytics {
    class Chart_Properties {
        constructor(chart_Ctrl: Charting);
        /** Main Chart Ctrl */
        chartCtrl: Charting;
        /** SVG-Canvas jQueryElements */
        elSvgArea: JQuery;
        /** All axes of the chart*/
        axes: Base_Axis[];
        /** Time when the chart has been generated (relevant for live data)*/
        dataRequestTime: Date;
        /** Width of the SVG-Cavas*/
        svgWidth: number;
        /** Height of the SVG-Canvas */
        svgHeight: number;
        /** Number of Samples */
        numSamples: number;
        /** Distance from the border to the lables of the chart */
        svgChartBorderdistance: number;
        /** Process the darkmode */
        darkMode: boolean;
        /** Default margin of an axis*/
        defaultAxisMargin: number;
        /** Reduce color of following channels*/
        channelColorReducer: number;
        /** Localization reader */
        localizationReader: Locale.LocalizationReader | undefined;
        /** Keys of not-element-specific localizations */
        localKeys: {
            Loading_Data: string;
            Loading_Data_Failed: string;
            January: string;
            February: string;
            March: string;
            April: string;
            May: string;
            June: string;
            July: string;
            August: string;
            September: string;
            October: string;
            November: string;
            December: string;
            Monday: string;
            Tuesday: string;
            Wednesday: string;
            Thursday: string;
            Friday: string;
            Saturday: string;
            Sunday: string;
            Timerange: string;
        };
    }
}
