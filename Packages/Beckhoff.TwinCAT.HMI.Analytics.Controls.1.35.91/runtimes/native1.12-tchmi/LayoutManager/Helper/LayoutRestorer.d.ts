declare namespace TcHmi.Controls.Analytics {
    /**
     * The LayoutRestorer restores the layout during user actions (eg. moving an object)
     */
    class LayoutRestorer extends LayoutElement {
        /**
         * Constructor of the LayoutGenerator
         * @param {Layout} layout
         * @param {LayoutProperties} layoutProperties
         * @returns {void}
         */
        constructor(layout: Layout, layoutProperties: LayoutProperties);
        restoreLayout(actionStr: string): void;
        protected __tryLayoutRestoration(userAction: string, layoutBfrIndex: number): boolean;
        protected __checkRuleCondition(currentLayout: I_SE_GridElement[], i: number): boolean;
        protected __checkCtrlPosition(oldPos: I_SE_GridElement, currentLayout: I_SE_GridElement[], moveControl: boolean): boolean;
    }
}
