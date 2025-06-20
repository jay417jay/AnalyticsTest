declare namespace TcHmi.Controls.Analytics {
    /**
     * The HotKeyEventlistener handles the Key-Events of a User
     */
    class HotKeyEventlistener extends LayoutElement {
        /**
         * Constructor of the HotKeyEventlistener
         * @param {Layout} layout
         * @param {LayoutProperties} layoutProperties
         * @returns {void}
         */
        constructor(layout: Layout, layoutProperties: LayoutProperties);
        /** Prevents multiple invocation of the eventlistener-method for key-actions */
        protected __keyEventFired: boolean;
        onkeyDown(): (e: KeyboardEvent) => this;
        onkeyUp(): (e: KeyboardEvent) => this;
    }
}
