declare namespace TcHmi.Controls.Analytics {
    /**
     * The LayoutGenerator generates default or stored layouts
     */
    abstract class LayoutGenerator extends LayoutElement {
        /**
         * Constructor of the LayoutGenerator
         * @param {Layout} layout
         * @param {LayoutProperties} layoutProperties
         * @returns {void}
         */
        constructor(layout: Layout, layoutProperties: LayoutProperties);
        /** Generated layout */
        generatedLayout: string;
        /** Edited layout */
        editedLayout: string;
        abstract createLayout(): void;
        protected __prepareLayout(): void;
        protected __getGridElements(gridEl: HTMLElement, ctrl: HTMLElement, i: number): [HTMLElement, HTMLElement];
        protected __getOriginalContainerDimensions(): void;
        protected __getStoredCtrlDim(ctrl: HTMLElement): I_SE_GridElement | null;
        protected __convertCtrlToGridEl(ctrl: HTMLElement, gridEl: HTMLElement, i: number, removeElement?: boolean, fadeInEffect?: boolean): void;
        protected __setCtrlStyle(ctrl: HTMLElement): void;
        private __applyStyles;
        protected __processFadeInEffect(gridEl: HTMLElement): void;
    }
}
