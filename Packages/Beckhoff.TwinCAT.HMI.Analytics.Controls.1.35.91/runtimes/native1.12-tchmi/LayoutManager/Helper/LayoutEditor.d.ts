declare namespace TcHmi.Controls.Analytics {
    /**
     * The LayoutEditor handles the User-Inputs for editing the layout
     */
    class LayoutEditor extends LayoutElement {
        /**
         * Constructor of the LayoutEditor
         * @param {Layout} layout
         * @param {LayoutProperties} layoutProperites
         * @param {MovementExaminer} movementExaminer
         * @returns {void}
         */
        constructor(layout: Layout, layoutProperties: LayoutProperties, movementExaminer: MovementExaminer, undoRedoManager: UndoRedoManager);
        get CursorPressedMoving(): boolean;
        get CursorPressedScaling(): boolean;
        /** When this variable is true, a clicked control won't be moved */
        protected __cursorPressedVisiblilty: boolean;
        /** Boolean that is true while scaling a control */
        protected __cursorPressedScaling: boolean;
        /** Helper-Boolean for initializing the movement of a control with a touch-event */
        protected __cursorTouchMovingInit: boolean;
        /** Boolean that is true while moving a control */
        protected __cursorPressedMoving: boolean;
        /** Buffers the control-position for moving it */
        protected __movingLeftBfr: number;
        /** Buffers the control-position for moving it */
        protected __movingTopBfr: number;
        /** Buffers the control-position for moving it */
        protected __movingRightBfr: number;
        /** Buffers the control-position for moving it */
        protected __movingBottomBfr: number;
        /** Slide up all elements like other popular dashboards --> not used yet */
        protected __slideUpElements: boolean;
        /** Examines user-actions before executing them */
        protected __movementExaminer: MovementExaminer;
        /** Examines user-actions before executing them */
        protected __undoRedoManager: UndoRedoManager;
        /** Restores the layout during user-interactions */
        protected __layoutRestorer: LayoutRestorer;
        /** Time after a touch moving action starts */
        protected __touchMovingTimeDelta: number;
        setControlVisibility(elNumber: number): (e: MouseEvent | TouchEvent) => void;
        mousedownMoving(elNumber: number): (e: MouseEvent | TouchEvent) => void;
        protected __processMousdownMoving(): void;
        protected __touchStartMovingHandling(cursorXBfr: number, cursorYBfr: number): void;
        mousedownScaling(elNumber: number): (e: MouseEvent | TouchEvent) => void;
        protected __setBufferElementStyle(templateGridEl: HTMLElement, gridEl: HTMLElement): HTMLElement;
        mousemove(): (e: MouseEvent | TouchEvent) => void;
        protected __compareLayouts(): void;
        protected __addLayoutToBuffer(): void;
        protected __getShortedLayout(): I_SE_GridElement[];
        mouseup(): (e: MouseEvent | TouchEvent) => void;
        protected __storeCurrentTempLayout(): void;
        protected __createPositionMarkerCells(): void;
        protected __removePositionMarkerCells(): void;
        protected __moveGridElement(e: MouseEvent | TouchEvent): string;
        protected __getCursorPosition(e: MouseEvent | TouchEvent): {
            clientX: any;
            clientY: number;
        };
        protected __getHorizontalMovingDirection(clientX: number): string;
        protected __getVerticalMovingDirection(clientY: number): string;
        protected __scaleGridElement(e: MouseEvent | TouchEvent): string;
        protected __setBlueContainerDimensions(blueContainer: HTMLElement): I_SE_GridElement;
        enableLayoutEditing(): void;
        disableLayoutEditing(): void;
        reduceScrollbar(): void;
    }
}
