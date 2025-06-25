declare namespace TcHmi.Controls.Analytics {
    /**
     * The LayoutStoreHandler implements the Connection to the Databases in the Server Extension
     */
    class LayoutStoreHandler extends LayoutElement {
        /**
         * Constructor of the LayoutStoreHandler
         * @param {Layout} layout
         * @param {LayoutProperties} layoutProperties
         * @returns {void}
         */
        constructor(layout: Layout, layoutProperties: LayoutProperties, undoRedoManager: UndoRedoManager);
        protected __undoRedoManager: UndoRedoManager;
        /** Old key of the layout (as fallback)*/
        protected __userLayoutKeyOld: string;
        storeDashboardLayout(fullLayout: I_SE_FullLayoutEntry): void;
        requestDashboardLayout(userLayoutKey: string, userLayoutKeyOld: string): void;
        protected __requestExtSymbol(request: TcHmi.Server.IMessage): this;
    }
}
