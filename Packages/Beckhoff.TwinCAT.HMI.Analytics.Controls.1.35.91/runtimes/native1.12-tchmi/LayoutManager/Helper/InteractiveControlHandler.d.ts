declare namespace TcHmi.Controls.Analytics {
    /**
     * The InteractiveControlHandler handles the interactive charts
     */
    class InteractiveControlHandler extends LayoutElement {
        /**
         * Constructor of the InteractiveControlHandler
         * @param {Layout} layout
         * @param {LayoutProperties} layoutProperties
         * @returns {void}
         */
        constructor(layout: Layout, layoutProperties: LayoutProperties, layoutId: string);
        protected __layoutID: string;
        protected __charts: System.baseTcHmiControl[];
        /**
         * This function creates a new control
         */
        createControl(parentCtrl: TcHmi.Controls.System.baseTcHmiControl, controlID?: string, controlTypeName?: string, controlNameAlias?: string): void;
        protected __createControl(parentCtrl: TcHmi.Controls.System.baseTcHmiControl, controlID: string, resetConfig: boolean, elChartNo: number, controlTypeName: string, controlNameAlias: string): void;
        removeCtrl(elNumber: number): (e: MouseEvent | TouchEvent) => void;
    }
}
