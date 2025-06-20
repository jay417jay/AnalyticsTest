declare namespace TcHmi.Controls.Analytics {
    abstract class LineAreaChannel extends Base_Channel {
        constructor(symbol: I_SE_SymbolEntry, parent: Element, props: Chart_Properties, xStepDistance: number, offsetLeft: number, yStepDistance: number, offsetTop: number, channelConfig: I_SE_ChannelEntry, options: I_SE_LineAreChannel_ChartOptions);
        protected __options: I_SE_LineAreChannel_ChartOptions;
        /** Y-Distance for scaling and hover-effect */
        protected __elPolygons: SVGPolygon[];
        /** Y-Distance for scaling and hover-effect */
        protected __elPaths: SVGPath[];
        protected __elCircles: SVGCircle[];
        /** xStepDistance */
        protected __xStepDistance: number;
        get xStepDistance(): number;
        /** Offset Left */
        protected __offsetLeft: number;
        get offsetLeft(): number;
        /** yStepDistance */
        protected __yStepDistance: number;
        get yStepDistance(): number;
        /** Offset Top */
        protected __offsetTop: number;
        get offsetTop(): number;
        setToFront(): void;
        /** Draw the channel*/
        protected __createPointsList(xPos: number, yPos: number, isArea: boolean): string[];
        protected __createPoint(xPos: number, yPos: number, isArea: boolean): string;
        protected __createLinie(points: string[], isArea: boolean): void;
        /** Clean the element (e.g. remove childs) */
        cleanChannel(): void;
    }
    interface I_SE_LineAreChannel_ChartOptions extends I_SE_Base_ChartOptions, I_SE_BaseChannel_ChartOptions {
        /** Stroke Dasharray of the Channel*/
        strokeDasharray: string;
        /** Stroke Width of the Channel*/
        strokeWidth: string;
    }
}
