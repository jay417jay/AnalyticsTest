declare namespace TcHmi.Controls.Analytics {
    /**
     * The DesktopLayoutGenerator generates default or stored desktop layouts
     */
    class DesktopLayoutGenerator extends LayoutGenerator {
        /**
         * Constructor of the DesktopLayoutGenerator
         * @param {Layout} layout
         * @param {LayoutProperties} layoutProperties
         * @returns {void}
         */
        constructor(layout: Layout, layoutProperties: LayoutProperties);
        /** Necessary to rescale an unstored layout after rescaling the screen */
        hasDisplaySizeChanged: boolean;
        /** Helper for positioning controls on a desktop layout */
        ctrlPositioner: DesktopCtrlPositioner;
        createLayout(): void;
        protected __positionLaptopCtrls(): void;
        protected __sortGridElements(): void;
        protected __positionDesktopCtrl(ctrl: HTMLElement, gridEl: HTMLElement, index: number): I_SE_GridElement;
        protected __finishLayoutGeneration(remainingCtrls: HTMLElement[]): void;
        protected __remainingCtrlHandling(remainingCtrls: HTMLElement[]): void;
        protected __checkForEmptyRows(): void;
        addControl(control: TcHmi.Controls.System.baseTcHmiControl, ctrlDim?: I_SE_GridElement): void;
    }
    class DesktopCtrlPositioner extends LayoutElement {
        /**
         * Constructor of the DesktopCtrlPositioner
         * @param {Layout} layout
         * @param {LayoutProperties} layoutProperties
         * @returns {void}
         */
        constructor(layout: Layout, layoutProperties: LayoutProperties);
        /** Buffers the original height of the layout-manager*/
        originalHeight: number;
        /** Buffer Layout during initalization --> check if this is necessary */
        initalizationHelperLayout: I_SE_GridElement[];
        positionCtrl(ctrl: HTMLElement, gridEl: HTMLElement, checkOldPos: boolean, remainingCtrl?: boolean): I_SE_GridElement;
        calculateCtrlPosition(ctrl: HTMLElement, ctrlStyle: string): I_SE_GridElement;
        protected __getCtrlStyle(ctrl: HTMLElement, ctrlStyle: string): any;
        protected __getCtrlPosition(obj: any): IHMICtrlPos;
        checkOldCtrlPosition(ctrlDim: I_SE_GridElement): I_SE_GridElement;
        protected __getInitalisingLayout(): I_SE_GridElement[];
    }
}
