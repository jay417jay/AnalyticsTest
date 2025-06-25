declare namespace CustomElements {
    export class RadialGauge extends AnalyticsBaseCustomElement {
        /** Value box element for autosize */
        protected __elValueBox: HTMLElement;
        /** Value text */
        protected __elValue: HTMLElement;
        /** Min value text */
        protected __elMinValue: HTMLElement;
        /** Max value text */
        protected __elMaxValue: HTMLElement;
        /** Gauge cursor of acutal value */
        protected __elCursor: HTMLElement;
        /** Gauge ranges e.g. Okay, Warning, Alarm */
        protected __elRanges: Circle[];
        /** Margin of chart */
        protected __chartMargin: number;
        /** Actual width of circle chart */
        protected __chartActualWidth: number;
        /** Start offset of circle */
        protected readonly CIRCLE_START: number;
        /** Debounced update value */
        protected __debouncedUpdateValue: () => void;
        constructor();
        protected __init(): void;
        protected __attach(): void;
        private __value;
        /** Value of gauge (Default: 0) */
        get value(): number;
        set value(value: number);
        protected __onValueChanged(): void;
        private __unit;
        /** Unit of the value (Default: "") */
        get unit(): string;
        set unit(value: string);
        protected __onUnitChanged(): void;
        private __minValue;
        /** Min value of gauge (Default: 0) */
        get minValue(): number;
        set minValue(value: number);
        protected __onMinValueChanged(): void;
        private __maxValue;
        /** Max value of gauge (Default: 100) */
        get maxValue(): number;
        set maxValue(value: number);
        protected __onMaxValueChanged(): void;
        private __ranges;
        /** Ranges (has to be 3) of gauge (Default: null) */
        get ranges(): IRange[];
        set ranges(value: IRange[]);
        protected __onRangesChanged(): void;
        private __cursorColor;
        /** Color of cursor (Default: "#FFFFFF") */
        get cursorColor(): string;
        set cursorColor(value: string);
        protected __onCursorColorChanged(): void;
        protected __onSizeChanged(): void;
        protected __calculatePos(): void;
        protected __calculateCursorPos(): void;
        protected __calculateLabelsPos(): void;
        protected __updateValue(): void;
        protected __resize(entries: ResizeObserverEntry[]): void;
        protected __addEventListeners(): void;
        protected __getHtml(): string;
    }
    export interface IRange {
        color: ISolidColor;
        start: number;
        end: number;
    }
    interface ISolidColor {
        color: string;
    }
    export {};
}
