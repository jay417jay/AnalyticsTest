declare namespace TcHmi.Controls.Analytics {
    class SingleValueChart extends BaseChart {
        constructor(parent: Element, props: Chart_Properties, options: I_SE_SingleValueChart_ChartOptions);
        protected __options: I_SE_SingleValueChart_ChartOptions;
        /** elements of the values*/
        protected __elValues: SVGText[];
        /** elements of the variable labels*/
        protected __elVariableLabels: SVGText[];
        /** elements of the timestamp labels*/
        protected __elTimestampLabels: SVGText[];
        /** length of the a timerange cell*/
        protected __timerangeEdgeLength: number;
        /** length of the a channel cell*/
        protected __channelEdgeLength: number;
        clearChart(): void;
        createInitChart(): void;
        createChart(rawData: I_SE_DataSymbolValue): void;
        cleanElement(): void;
        getValues(posX: number, posY: number): I_SE_DataEntry_Extended[];
    }
    interface I_SE_SingleValueChart_ChartOptions extends I_SE_Base_ChartOptions, I_SE_TimeBased_ChartOptions, I_SE_Hover_ChartOptions {
    }
}
