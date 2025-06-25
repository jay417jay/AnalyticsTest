declare namespace TcHmi.Controls.Analytics {
    class SVGLine {
        /**
         * Constructor of the SVGLine
         */
        constructor(x1: number, y1: number, x2: number, y2: number, classNames?: string[]);
        private __elLine;
        get x1(): number;
        set x1(value: number);
        get y1(): number;
        set y1(value: number);
        get x2(): number;
        set x2(value: number);
        get y2(): number;
        set y2(value: number);
        get classList(): DOMTokenList;
        /** the css attribute is actually called stroke and not color*/
        get color(): string;
        set color(value: string);
        get strokeDashArray(): string;
        set strokeDashArray(value: string);
        get strokeWidth(): number;
        set strokeWidth(value: number);
        get opacity(): number;
        set opacity(value: number);
        addClass(classNames: string | string[]): void;
        removeClass(classNames: string | string[]): void;
        appendTo(parentElement: Element): void;
        removeFromParent(): void;
        setToFront(): void;
        updatePosition(x1: number, y1: number, x2: number, y2: number): void;
    }
}
