declare namespace CustomElements {
    class Circle extends AnalyticsBaseCustomElement {
        /** SVG element */
        protected __elSVG: SVGElement;
        /** SVG circle */
        protected __elSVGCircle: SVGElement;
        /** Default Margin */
        protected __margin: number;
        constructor();
        protected __init(): void;
        protected __attach(): void;
        protected __onSizeChanged(): void;
        private __actualSize;
        /** Actual size/outer diameter of control (Default: 0) */
        get actualSize(): number;
        protected setActualSize(value: number): void;
        protected __onActualSizeChanged(): void;
        private __startAngle;
        /** Start angle in rad (Default: 0) */
        get startAngle(): number;
        set startAngle(value: number);
        protected __onStartAngleChanged(): void;
        private __distance;
        /** Distance of ring in rad (Default: PI/2) */
        get distance(): number;
        set distance(value: number);
        protected __onDistanceChanged(): void;
        private __strokeWidth;
        /** Stroke widht (Default: undefined) */
        get strokeWidth(): number;
        set strokeWidth(value: number);
        protected __onStrokeWidthChanged(): void;
        private __color;
        /** Color of ring (Default: "rgb(0, 200, 200)") */
        get color(): string;
        set color(value: string);
        protected __onColorChanged(): void;
        protected __draw(): void;
        protected __drawRing(svgCircle: SVGElement, distance: number, color: string, startAngle: number, size: number, stroke: number): ISVGCircleProgress;
        protected __getSVGCircleAttributes(width: number, position: number, end?: number, offset?: number, stroke?: number, svgWidth?: number): ISVGCircleProgress;
        protected __addEventListeners(): void;
        protected __getHtml(): string;
    }
    interface ISVGCircleProgress {
        width: number;
        innerWidth: number;
        cx: number;
        cy: number;
        r: number;
        strokeWidth: number;
        strokeDashOffset: number;
        strokeDashArray: [number, number];
        width_s: string;
        innerWidth_s: string;
        cx_s: string;
        cy_s: string;
        r_s: string;
        strokeWidth_s: string;
        strokeDashOffset_s: string;
        strokeDashArray_s: string;
    }
}
