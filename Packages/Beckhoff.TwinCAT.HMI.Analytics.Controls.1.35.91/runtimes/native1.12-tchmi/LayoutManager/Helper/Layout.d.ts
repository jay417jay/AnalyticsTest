declare namespace TcHmi.Controls.Analytics {
    /**
     * The Layout includes implements Basic-Methods of the Interactive Layout
     */
    class Layout extends EventTarget {
        /**
         * Constructor of the Layout
         * @param {LayoutProperties} layoutProps
         * @returns {void}
         */
        constructor(layoutProps: LayoutProperties, parentElement: TcHmi.Controls.System.baseTcHmiControl);
        /** Properties of the Layout */
        protected __layoutProps: LayoutProperties;
        /** Parent-Element of the Layout */
        protected __parentLMControl: TcHmi.Controls.System.baseTcHmiControl;
        /** Stores the current-layout */
        private _currentLayoutAtt;
        /** Width of the Layout-Manager-Control */
        containerWidth: number;
        /** Height of the Layout-Manager-Control */
        protected __containerHeight: number;
        /** Name of the content-parent-element */
        parentID: string;
        /** Name of the element */
        id: string;
        /** Is true if added to topmostlayer*/
        protected __isAddedToTopMostLayer: boolean;
        getNumberOfRows(gridElements: I_SE_GridElement[]): number;
        changeRowNumber(rowChanges: number): void;
        setGridDimensions(): void;
        scaleGridSVGArea(): void;
        setDisplayMode(mode?: I_SE_DisplayMode): void;
        showGridLines(): void;
        hideGridLines(): void;
        setControlsOpacity(): void;
        getCurrentLayoutWithoutBuffer(): I_SE_GridElement[];
        getCurrentLayout(elId?: string): I_SE_GridElement[];
        calcCurrentLayout(): void;
        generateLayoutHash(): I_SE_ControlCounter[];
        setElementGridDimensions(gridEl: HTMLElement, ctrlDim: I_SE_GridElement): void;
        getElementGridDimensions(gridEl: HTMLElement): I_SE_GridElement;
        copyElementsGridPosition(gridElA: HTMLElement, gridElB: HTMLElement): void;
        protected __convertPixelPosToGridPos(gridEl: HTMLElement): I_SE_GridElement | null;
        protected __convertGridPosToPixelPos(gridEl: HTMLElement, ctrlDim: I_SE_GridElement): void;
        setEditHeaderTheme(): void;
        updateIndicatorPosition(): void;
        resetLayout(resetUserChanges?: boolean): void;
        checkCtrlPosition(oldPos: I_SE_GridElement, currentLayout: I_SE_GridElement[], moveControl: boolean): boolean;
        repositioningElement(ctrlDim: I_SE_GridElement, verticalMovement: number, horizontalMovement: number): void;
        checkForGapsSmartphone(): void;
        setGridElStyle(gridEl: HTMLElement, ctrlDim: I_SE_GridElement): void;
        createBufferCellElement(): void;
        checkRemoveLastRow(elId: string): boolean;
        removeUnusedRows(): void;
        addColorBorder(element: HTMLElement, bRed: boolean, bTimeout?: boolean): void;
        removeColorBorder(element: HTMLElement): void;
    }
}
