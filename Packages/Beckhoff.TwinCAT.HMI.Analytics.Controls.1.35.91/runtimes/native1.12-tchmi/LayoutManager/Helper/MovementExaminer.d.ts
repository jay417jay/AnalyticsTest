declare namespace TcHmi.Controls.Analytics {
    /**
     * The MovementExaminer checks if movements are allowed
     */
    class MovementExaminer extends LayoutElement {
        /**
         * Constructor of the MovementExaminer
         * @param {Layout} layout
         * @param {LayoutProperties} layoutProperties
         * @returns {void}
         */
        constructor(layout: Layout, layoutProperties: LayoutProperties, undoRedoManager: UndoRedoManager);
        /** Horizontal cursor position */
        cursorX: number;
        /** Vertical cursor position */
        cursorY: number;
        /** Buffer for the scaling of a grid-element */
        enlargeTriggerHorizontal: number;
        /** Buffer for the scaling of a grid-element */
        shrinkTriggerHorizontal: number;
        /** Buffer for the scaling of a grid-element */
        enlargeTriggerVertical: number;
        /** Buffer for the scaling of a grid-element */
        shrinkTriggerVertical: number;
        protected __undoRedoManager: UndoRedoManager;
        checkMovement(blueContainer: HTMLElement, blueContainerDimensions: I_SE_GridElement, movingEl: HTMLElement, movingDirectionHor: string, movingDirectionVer: string): string;
        checkScaling(blueContainer: HTMLElement, blueContainerDimensions: I_SE_GridElement, controlWidth: number, controlHeight: number, clientX: number, clientY: number, scalingDirectionHor: string, scalingDirectionVer: string): string;
        protected __checkTopSideMoving(elId: string, movingElTop: number): boolean;
        protected __moveElementsUp(currentLayout: I_SE_GridElement[], collidingElements: I_SE_GridElement[], elId: string, movingElTop: number): void;
        protected __checkForUpperElements(selectedEl: I_SE_GridElement, nearestCollider: I_SE_GridElement[]): number;
        protected __checkBottomSideMoving(elId: string, movingElBottom: number): boolean;
        protected __moveElementsDown(currentLayout: I_SE_GridElement[], collidingElements: I_SE_GridElement[], elId: string, movingElBottom: number): void;
        protected __checkLeftSideMoving(elId: string): boolean;
        protected __moveElementsLeft(currentLayout: I_SE_GridElement[], collidingElements: I_SE_GridElement[], elId: string): void;
        protected __checkRightSideMoving(elId: string): boolean;
        protected __moveElementsRight(currentLayout: I_SE_GridElement[], collidingElements: I_SE_GridElement[], elId: string): void;
        protected __slideDownElements(elId: string, height: number, createRule?: boolean): boolean;
        protected __getCollidingElementsSlideDown(currentLayout: I_SE_GridElement[]): I_SE_GridElement[];
        protected __checkBottomSideSliding(currentLayout: I_SE_GridElement[], collidingElements: I_SE_GridElement[], height: number): void;
        protected __checkStartColumns(collidingElements: I_SE_GridElement[], height: number, rowEnd: number): I_SE_GridElement[];
        slideUpElements(): void;
        protected __checkTopSideSlideUp(id: string, currentLayout: I_SE_GridElement[]): boolean;
        protected __checkRightSideScaling(elId: string): boolean;
    }
}
