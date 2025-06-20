declare namespace CustomElements {
    export class RangeSlider extends AnalyticsBaseCustomElement {
        /** Complete slider track */
        protected __elSlider: HTMLElement;
        /** Selected track (blue) */
        protected __elTrack: HTMLElement;
        /** Left range selector*/
        protected __elThumbLeft: HTMLElement;
        /** Right range selector*/
        protected __elThumbRight: HTMLElement;
        /** Text on the selected track */
        protected __elTrackText: HTMLElement;
        /** Marker container with SVG-marker and text */
        protected __elMarker: HTMLElement;
        /** Text of the marker (e.g. 1%) */
        protected __elMarkerProgress: HTMLElement;
        /** Configuration of slider */
        protected __config: ISliderConfig;
        /** configured range */
        protected __range: number;
        /** Range factor (sliderWidth / range) */
        protected __rangeFactor: number;
        /**Whether thumb (left or right) is dragging */
        protected __isThumbDragging: [boolean, boolean];
        /** Relative mouse klick / touch mouse position of thumb (left or right) */
        protected __relThumbStartPos: TcHmi.Controls.Analytics.Point;
        /** Width of blue track */
        protected __trackWidth: number;
        /** True when slider is in drawing */
        protected __sliderDrawing: boolean;
        constructor();
        protected __init(): void;
        protected __attach(): void;
        private __width;
        /** Width of Control (Default: 300) */
        get width(): number;
        set width(value: number);
        protected __onWidthChanged(): void;
        private __dragDisabled;
        /** Disable of left and right thumb dragging (Default: false) */
        get dragDisabled(): boolean;
        set dragDisabled(value: boolean);
        protected __onDragDisabledChanged(): void;
        private __minValue;
        /** Slider minimum value (Default: 0) */
        get minValue(): number;
        set minValue(value: number);
        protected __onMinValueChanged(): void;
        private __maxValue;
        /** Slider maximium value (Default: 1000) */
        get maxValue(): number;
        set maxValue(value: number);
        protected __onMaxValueChanged(): void;
        private __selectedValueLeft;
        /** Selected left value (Default: 0). Value has to be in range of minValue and maxValue and may not be set bigger than selectedValueRight. */
        get selectedValueLeft(): number;
        set selectedValueLeft(value: number);
        protected __onSelectedValueLeftChanged(): void;
        private __selectedValueRight;
        /** Selected right value (Default: 1000). Value has to be in range of minValue and maxValue and may not be set smaller than selectedValueLeft. */
        get selectedValueRight(): number;
        set selectedValueRight(value: number);
        protected __onSelectedValueRightChanged(): void;
        private __trackText;
        /** Text on the selected track (Default: ""). The text will be hidden if it would overflow. */
        get trackText(): string;
        set trackText(value: string);
        protected __onTrackTextChanged(): void;
        private __showMarker;
        /** Show marker in slider (Default: false) */
        get showMarker(): boolean;
        set showMarker(value: boolean);
        protected __onShowMarkerChanged(): void;
        private __markerOutOfRange;
        /** Check if marker is out of min-max range (Default: false) */
        protected get markerOutOfRange(): boolean;
        protected set markerOutOfRange(value: boolean);
        protected __onMarkerOutOfRangeChanged(): void;
        private __markerValue;
        /** Position of marker in slider (Default: 0) */
        get markerValue(): number;
        set markerValue(value: number);
        protected __onMarkerValueChanged(): void;
        protected __initSlider(): void;
        protected __reinitSlider(): void;
        protected __drawSlider(relPosLeft?: number, relPosRight?: number): void;
        protected __drawSliderImp(relPosLeft?: number, relPosRight?: number): void;
        protected __processTrackTextVisibility(): void;
        protected __processShowMarker(): void;
        protected __document_moveCallback(evt: MouseEvent | TouchEvent): void;
        protected __sliderMovingEvent(pos: TcHmi.Controls.Analytics.Point, xOffset: number): void;
        protected __getHtml(): string;
    }
    interface ISliderConfig {
        /** Width of thumb */
        thumbWidth: number;
        /** Height of thumb */
        thumbHeight: number;
        /** Border width of thumb */
        thumbBorderWidth: number;
        /** Height of track */
        trackHeight: number;
        /** calulated pixel position (calculated from selected values) */
        pos: [number, number];
        /** margin of container */
        margin: number;
    }
    export {};
}
