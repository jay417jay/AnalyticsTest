declare namespace CustomElements {
    export class MultiRingProgressBar extends RingProgressBar {
        /** Progress circle SVG elements */
        protected __elCircles: SVGElement[];
        /** Background circle SVG elements */
        protected __elCirclesBackground: SVGElement[];
        constructor();
        protected __init(): void;
        protected __attach(): void;
        private __showMultiRing;
        /** Show of additional rings or not (Default: true) */
        get showMultiRing(): boolean;
        set showMultiRing(value: boolean);
        protected __onShowMultiRingChanged(): void;
        private __dataList;
        /** Values to show (Default: []) */
        get dataList(): IData[];
        set dataList(value: IData[]);
        protected __onDataListChanged(): void;
        /**
         * Init the dataList with a desired length.
         * @param length
         */
        initDataList(length: number): void;
        /**
         * Set specific value in data list and update UI
         * @param index
         * @param data
         */
        setData(index: number, data: {
            progress?: number;
            color?: string;
        }): void;
        protected __drawRings(): void;
        protected __drawOtherRings(): void;
        protected __addEventListeners(): void;
        protected __extendHtml(): void;
    }
    interface IData {
        progress: number;
        color: string;
    }
    export {};
}
