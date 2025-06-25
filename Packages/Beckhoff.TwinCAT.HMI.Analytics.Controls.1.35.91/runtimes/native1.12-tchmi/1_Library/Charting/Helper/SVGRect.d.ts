declare namespace TcHmi.Controls.Analytics {
    class SVGRectangle {
        /**
         * Constructor of the SVGRectangle
         */
        constructor(x: number, y: number, width: number, height: number, classNames?: string[]);
        private __elGroup;
        private __elRect;
        private __elTitle;
        get elGroup(): SVGElement;
        get x(): number;
        set x(value: number);
        get y(): number;
        set y(value: number);
        get stroke(): string;
        set stroke(value: string);
        get fill(): string;
        set fill(value: string);
        get fillOpacity(): number;
        set fillOpacity(value: number);
        get width(): number;
        set width(value: number);
        get height(): number;
        set height(value: number);
        get tooltip(): string;
        set tooltip(value: string);
        get classList(): DOMTokenList;
        addClass(classNames: string | string[]): void;
        removeClass(classNames: string | string[]): void;
        appendTo(parentElement: Element): void;
        insertBefore(element: Element): void;
        append(childElement: Node): void;
        removeFromParent(): void;
        updateDarkMode(darkMode: boolean): void;
        updatePosition(x: number, y: number): void;
    }
}
