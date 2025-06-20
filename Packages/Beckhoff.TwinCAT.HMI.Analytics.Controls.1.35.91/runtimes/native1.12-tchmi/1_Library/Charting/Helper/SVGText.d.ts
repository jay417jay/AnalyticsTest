declare namespace TcHmi.Controls.Analytics {
    class SVGText {
        constructor(x: number, y: number, content: string, classNames?: string[]);
        private __elText;
        get elText(): SVGTextElement;
        get x(): number;
        set x(value: number);
        get y(): number;
        set y(value: number);
        get fontSize(): number;
        set fontSize(value: number);
        get fill(): string;
        set fill(value: string);
        get opacity(): string;
        set opacity(value: string);
        get visibilty(): string;
        set visibilty(value: string);
        get textContent(): string;
        set textContent(value: string);
        get rotation(): number;
        set rotation(value: number);
        get content(): string;
        set content(value: string);
        get classList(): DOMTokenList;
        get width(): number;
        get height(): number;
        addClass(classNames: string | string[]): void;
        removeClass(classNames: string | string[]): void;
        appendTo(parentElement: Element): void;
        removeFromParent(): void;
        updatePosition(x: number, y: number): void;
        updateContent(content: string): void;
    }
}
