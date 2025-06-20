declare namespace CustomElements {
    class CloseIcon extends AnalyticsBaseCustomElement {
        /** Progress circle SVG elements */
        protected __elPath: SVGPathElement;
        constructor();
        protected __init(): void;
        protected __attach(): void;
        private __backgroundPathColor;
        /** backgroundPathColor of the x (Default: "white") */
        get backgroundPathColor(): string;
        set backgroundPathColor(value: string);
        protected __onBackgroundPathColorChanged(): void;
        protected __addEventListeners(): void;
        protected __getHtml(): string;
    }
}
