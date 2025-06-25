declare namespace TcHmi.Controls.Analytics {
    class SVGPolygon {
        /**
         * Constructor of the SVGPolygon
         */
        constructor(points: string, classNames?: string[]);
        private __elPolygon;
        get points(): string;
        set points(value: string);
        get stroke(): string;
        set stroke(value: string);
        get fill(): string;
        set fill(value: string);
        get fillOpacity(): number;
        set fillOpacity(value: number);
        get classList(): DOMTokenList;
        addClass(classNames: string | string[]): void;
        removeClass(classNames: string | string[]): void;
        appendTo(parentElement: Element): void;
        removeFromParent(): void;
        updatePoints(newPoints: string): void;
    }
}
