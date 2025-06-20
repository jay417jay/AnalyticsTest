declare namespace TcHmi.Controls.Analytics {
    class HoverWindow extends ChartElement {
        constructor(symbols: I_SE_SymbolEntry[], parent: Element, props: Chart_Properties, startPoint: Point, endPoint: Point, chart: BaseChart, drawLine: boolean, options: I_SE_Base_ChartOptions);
        /** symbols */
        protected __symbols: I_SE_SymbolEntry[];
        /** startPoint*/
        protected __startPoint: Point;
        /** endPoint */
        protected __endPoint: Point;
        /** Eventlistener */
        protected __eventlistenerManager: TcHmi.Controls.Analytics.EventListenerManager;
        /** Vertical Hover Line*/
        protected __elHoverLine: SVGLine;
        /** Main Hover Window*/
        protected __elMainWindow: SVGRectangle;
        /** Main Hover Text*/
        protected __elTimestampTexts: SVGText[];
        /** Channel Rects (with Channel Colors)*/
        protected __elChannelColorRects: SVGRectangle[];
        /** Channel Names */
        protected __elChannelNames: SVGText[];
        /** Channel Values*/
        protected __elChannelValues: SVGText[];
        /** Margin*/
        protected __margin: number;
        /** Chart to request the data from*/
        protected __chart: BaseChart;
        /** DrawLine*/
        protected __drawLine: boolean;
        protected __lastKnownPos: Point;
        protected __isHovering: boolean;
        /** Main HTML Div for the hover window*/
        protected __hoverMainDiv: HTMLElement;
        /** Main HTML Svg for the hover window*/
        protected __hoverMainSvg: SVGSVGElement;
        updateStartEndPoint(start: Point, end: Point): void;
        enableHoverEffect(): void;
        disableHoverEffect(): void;
        protected __processHoverEffectEnd(): (e: MouseEvent) => void;
        protected __updateLastKnownPos(): (e: MouseEvent) => void;
        drawHoverWindow(posX?: number, posY?: number, ignoreNotHovering?: boolean): void;
        /** Clean the element (e.g. remove childs) */
        cleanElement(): void;
        protected __getTimestampText(t: SPTime): string;
    }
    interface I_Hover_Value_Set {
        timestamp: number;
        channelValues: I_Hover_Channel_Value_Entry[];
    }
    interface I_Hover_Channel_Value_Entry {
        channelColor: string;
        symbolName: string;
        displayValue: string;
        unscaledValue: string;
        highlight: boolean;
        unit: string;
    }
}
