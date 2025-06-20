declare namespace TcHmi.Controls.Analytics {
    class SVGPath {
        /**
         * Constructor of the SVGPath
         */
        constructor(points: string, classNames?: string[]);
        private __elPath;
        get d(): string;
        set d(value: string);
        get stroke(): string;
        set stroke(value: string);
        get strokedasharray(): string;
        set strokedasharray(value: string);
        get strokewidth(): string;
        set strokewidth(value: string);
        get fill(): string;
        set fill(value: string);
        get classList(): DOMTokenList;
        addClass(classNames: string | string[]): void;
        removeClass(classNames: string | string[]): void;
        appendTo(parentElement: Element): void;
        removeFromParent(): void;
        updatePath(points: string[]): void;
    }
}
