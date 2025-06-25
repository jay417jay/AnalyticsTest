declare namespace CustomElements {
    export class MultiValue extends AnalyticsBaseCustomElement {
        /** ul-list for all values */
        protected __elUl: HTMLElement;
        /** Value elements */
        protected __elValueList: HTMLElement[];
        /** Colored bullets (points for ul list) */
        protected __elBulletList: HTMLElement[];
        /** Alias elements */
        protected __elAliasList: HTMLElement[];
        /** Resize observer for UL element */
        protected __ulObserver: ResizeObserver;
        constructor();
        protected __init(): void;
        protected __attach(): void;
        private __dataList;
        /** Values to show (Default: []) */
        get dataList(): IData[];
        set dataList(value: IData[]);
        protected __onDataListChanged(): void;
        protected __onSizeChanged(): void;
        private __maxFontSize;
        /** Max font size (Default: 100) */
        get maxFontSize(): number;
        set maxFontSize(value: number);
        protected __onmaxFontSizeChanged(): void;
        private __bulletStyle;
        /** Style of bullet (Default: MultiValue.BulletStyle.ROUND) */
        get bulletStyle(): MultiValue.BulletStyle;
        set bulletStyle(value: number);
        protected __onbulletStyleChanged(): void;
        private __showBullets;
        /** Show of list bullets (Default: false) */
        get showBullets(): boolean;
        set showBullets(value: boolean);
        protected __onShowBulletsChanged(): void;
        private __spaceBetween;
        /** Whether space between elements (Default: true) */
        get spaceBetween(): boolean;
        set spaceBetween(value: boolean);
        protected __onspaceBetweenChanged(): void;
        private __bold;
        /** Whether value should be bold (Default: false) */
        get bold(): boolean;
        set bold(value: boolean);
        protected __onboldChanged(): void;
        /**
         * Init the dataList with a desired length´.
         * @param length
         */
        initDataList(length: number): void;
        /** Trigger an update of the data list. */
        updateDataList(): void;
        /**
         * Set specific value in data list and update UI
         * @param index
         * @param data
         */
        setData(index: number, data: {
            value?: string;
            alias?: string;
            bulletColor?: string;
        }): void;
        private autoSize;
        protected __processDataList(): void;
        protected __addEventListeners(): void;
        protected __getHtml(): string;
    }
    export namespace MultiValue {
        enum BulletStyle {
            ROUND = 0,
            SQUARE = 1
        }
    }
    interface IData {
        value: string;
        alias: string;
        bulletColor?: string;
    }
    export {};
}
