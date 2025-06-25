declare namespace TcHmi.Controls.Analytics {
    class YAxis extends Base_Axis {
        constructor(parent: Element, props: Chart_Properties, options: I_SE_YAxis_Chart_Options);
        protected __options: I_SE_YAxis_Chart_Options;
        /** Maximum Number of y-Axis-Intervals */
        protected __maxNumOfIntervals: number;
        /** Number of y-Axis-Intervals */
        protected __numOfyAxisIntervalLabels: number;
        /** Height of the y-Axis-Intevals */
        protected __yAxisIntervalSize: number;
        /** Lowest value of the rawData-Samples */
        protected __datapointsRAWyMinValue: number;
        /** Highest value of the rawData-Samples */
        protected __datapointsRAWyMaxValue: number;
        /** Difference or Range between the rawData-Samples */
        protected __datapointsRAWyRange: number;
        /** Y-Distance for scaling and hover-effect */
        protected __yAxisStepDistance: number;
        /** IntervalSizeFactor */
        protected __intervalSizeFactor: number;
        /** Width of the description*/
        protected __descriptionWidth: number;
        /** Size Manager to prevent flashing axis */
        protected __sizeManager: SizeManager;
        /** Top padding of the axis */
        protected __axisPaddingTop: number;
        /** Nullpoint of the chart */
        protected __nullPoint: number;
        get nullpoint(): number;
        /** Axis position*/
        get yAxisPosition(): YAxisPosition;
        /** Suffix for labels (e.g. "%")*/
        get labelSuffix(): string;
        drawAxis(startPoint: Point, endPoint: Point, axisData: Array<I_SE_DataEntry>, fixedNumAxisIntervalLabels?: number, fixedRange?: [number, number]): void;
        protected __scaleYaxis(fixedNumAxisIntervalLabels?: number, fixedRange?: [number, number]): void;
        protected __createLabel(yPos: number, value: number): SVGText;
        protected __drawLabel(yPos: number, value: string): SVGText;
        protected __getAxisDescription(): string;
        protected __onlyBooleanPropsWithSameDisplayAlias(): boolean;
    }
    interface I_SE_YAxis_Chart_Options extends I_SE_Axis_Chart_Options {
        labelSuffix: string;
        yAxisPosition: YAxisPosition;
        description: string;
    }
}
