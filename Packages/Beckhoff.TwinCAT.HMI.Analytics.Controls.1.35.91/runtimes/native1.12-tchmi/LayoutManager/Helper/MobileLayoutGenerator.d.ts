declare namespace TcHmi.Controls.Analytics {
    /**
     * The MobileLayoutGenerator generates default or stored mobile layouts
     */
    class MobileLayoutGenerator extends LayoutGenerator {
        /**
         * Constructor of the MobileLayoutGenerator
         * @param {Layout} layout
         * @param {LayoutProperties} layoutProperties
         * @returns {void}
         */
        constructor(layout: Layout, layoutProperties: LayoutProperties);
        createLayout(): void;
        protected __positionSmartphoneCtrls(): void;
        addControl(control: TcHmi.Controls.System.baseTcHmiControl): void;
        protected __positionNewSmartphoneGridEl(ctrl: HTMLElement): I_SE_GridElement;
        protected __getCtrlHeight(ctrl: HTMLElement): number;
    }
}
