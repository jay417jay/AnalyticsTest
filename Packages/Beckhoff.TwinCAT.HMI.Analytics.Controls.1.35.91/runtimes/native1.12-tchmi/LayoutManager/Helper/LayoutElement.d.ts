declare namespace TcHmi.Controls.Analytics {
    /**
     * The LayoutStoreHandler implements the Connection to the Databases in the Server Extension
     */
    abstract class LayoutElement extends EventTarget {
        /**
         * Constructor of the LayoutElement
         * @param {Layout} layout
         * @param {LayoutProperties} layoutProperties
         * @returns {void}

         */
        constructor(layout: Layout, layoutProps: LayoutProperties);
        protected __layout: Layout;
        protected __layoutProps: LayoutProperties;
    }
}
