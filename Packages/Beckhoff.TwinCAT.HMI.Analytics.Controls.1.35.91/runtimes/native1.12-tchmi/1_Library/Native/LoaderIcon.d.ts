declare namespace CustomElements {
    class LoaderIcon extends AnalyticsBaseCustomElement {
        /** Min of width/height */
        protected __acutalSize: number;
        constructor();
        protected __init(): void;
        protected __attach(): void;
        protected __onSizeChanged(): void;
        private __ringSize;
        /** Ring size in pixels of loading icon (Default: -1). Auto if negative. */
        get ringSize(): number;
        set ringSize(value: number);
        protected __onRingSizeChanged(): void;
        private __stopAnimation;
        /** Stop of animation (Default: false) */
        get stopAnimation(): boolean;
        set stopAnimation(value: boolean);
        protected __onStopAnimationChanged(): void;
        protected __processRingSize(): void;
        protected __addEventListeners(): void;
        protected __getHtml(): string;
    }
}
