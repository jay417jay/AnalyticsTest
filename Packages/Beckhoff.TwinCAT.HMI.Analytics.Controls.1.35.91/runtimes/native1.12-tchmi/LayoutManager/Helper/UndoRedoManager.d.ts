declare namespace TcHmi.Controls.Analytics {
    /**
     * The UndoRedoManager handles all undo and redo actions
     */
    class UndoRedoManager extends LayoutElement {
        userLayoutChanges: string[];
        /** Iterator for Redo/Undo-Actions */
        _userLayoutChangesIdx: number;
        get userLayoutChangesIdx(): number;
        set userLayoutChangesIdx(value: number);
        constructor(layout: Layout, layoutProperties: LayoutProperties);
        /** clears the undo redo stack and iterator */
        reset(): void;
        addNewLayoutChange(newLayout: any): void;
        undoLastAction(): void;
        redoLastAction(): void;
        private __applyUndoRedoLayout;
        get canUndo(): boolean;
        get canRedo(): boolean;
    }
}
