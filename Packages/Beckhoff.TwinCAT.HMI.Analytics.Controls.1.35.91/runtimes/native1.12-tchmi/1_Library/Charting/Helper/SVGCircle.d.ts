declare namespace TcHmi.Controls.Analytics {
    class SVGCircle {
        /**
         * Constructor of the SVGRectangle
         */
        constructor(cX: number, cY: number, radius: number, classNames?: string[]);
        private __elGroup;
        private __elCircle;
        private __elTitle;
        get cX(): number;
        set cX(value: number);
        get cY(): number;
        set cY(value: number);
        get fill(): string;
        set fill(value: string);
        get fillOpacity(): number;
        set fillOpacity(value: number);
        get stroke(): string;
        set stroke(value: string);
        get strokeWidth(): string;
        set strokeWidth(value: string);
        get strokeDashoffset(): string;
        set strokeDashoffset(value: string);
        get strokeDasharray(): string;
        set strokeDasharray(value: string);
        get radius(): number;
        set radius(value: number);
        get tooltip(): string;
        set tooltip(value: string);
        get classList(): DOMTokenList;
        addClass(classNames: string | string[]): void;
        removeClass(classNames: string | string[]): void;
        appendTo(parentElement: Element): void;
        removeFromParent(): void;
        appendChild(child: SVGElement): void;
        /**
         * Updates the position of the circle.
         *
         * @param cX - The new x-coordinate for the center of the circle.
         * @param cY - The new y-coordinate for the center of the circle.
         */
        updatePosition(cX: number, cY: number): void;
    }
}
