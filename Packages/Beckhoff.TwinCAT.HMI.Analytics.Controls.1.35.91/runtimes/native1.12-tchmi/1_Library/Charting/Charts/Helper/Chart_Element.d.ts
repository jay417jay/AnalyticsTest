declare namespace TcHmi.Controls.Analytics {
    abstract class ChartElement {
        constructor(parent: Element, props: Chart_Properties, options: I_SE_Base_ChartOptions);
        /** Parent Element*/
        elParent: Element;
        /** HTML Elements of the Chart Element */
        protected __elements: JQuery;
        /** Shared properties of the chart*/
        protected __props: Chart_Properties;
        protected __options: I_SE_Base_ChartOptions;
        /** Clean element*/
        abstract cleanElement(): void;
        protected __getVisibleMinTimestamp(requestTimestamp: Date): number;
        protected __getMaxVisibleTimestamp(requestTimestamp: Date): number;
    }
}
