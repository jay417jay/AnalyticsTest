declare namespace TcHmi.Controls.Analytics {
    /**
     * Command-Structure to store the layout
     */
    interface I_SE_FullLayoutEntry {
        userLayoutStoreEntry: I_SE_UserLayoutStoreEntry;
        layoutStoreEntry: I_SE_LayoutStoreEntry;
    }
    interface I_SE_UserLayoutStoreEntry {
        userLayoutID: string;
        layoutID: string;
        userID: string;
        contentID: string;
        displayMode: string;
    }
    interface I_SE_LayoutStoreEntry {
        layoutID: string;
        layoutValue: I_SE_GridElement[];
        layoutHash: I_SE_ControlCounter[];
        interactiveControls: I_SE_InteractiveControlEntry[];
    }
    /**
      * Represents an element on the grid
      */
    interface I_SE_GridElement {
        id: string;
        rS: number;
        cS: number;
        rE: number;
        cE: number;
        vis: boolean;
        type: string;
    }
    /**
      * Represents the position of an HMI-Ctrl in PIXEL
      */
    interface IHMICtrlPos {
        id: string;
        top: number;
        topUnit: LengthUnit;
        left: number;
        leftUnit: LengthUnit;
        height: number;
        heightUnit: LengthUnit;
        width: number;
        widthUnit: LengthUnit;
    }
    /**
     * Rule elements (Neccessary for sliding-down elements and NOT restore the old position)
     */
    interface IResetElementRule {
        affectedElementID: string;
        premiseElement: I_SE_GridElement;
    }
    /**
     * Length unit enum
     */
    enum LengthUnit {
        PIXEL = 0,
        PERCENT = 1
    }
    /**
     * Display-Mode to choose the correct layout
     */
    enum I_SE_DisplayMode {
        SMARTPHONE = 0,
        LAPTOP = 1,
        MONITOR = 2
    }
    /**
     * GridGap
     */
    enum GridGap {
        XS = 10,
        S = 20,
        M = 30,
        L = 40,
        XL = 50
    }
    /**
     * Entry in the layoutHash
     */
    interface I_SE_ControlCounter {
        cType: string;
        cnt: number;
    }
    /**
     * Entry in the layoutHash
     */
    interface I_SE_InteractiveControlEntry {
        cType: string;
        cId: string;
    }
    /**
     * Caches the relevant information about a layout
     */
    class LayoutCache {
        /**User Layout ID of the cached layout */
        UserLayoutID: string;
        /**Layout ID of the cached layout */
        LayoutID: string;
        /**CurrentLayout */
        CurrentLayout: string;
        /**Stored Layout of the cached layout */
        StoredLayout: string;
        /**DisplayMode of the cached layout */
        DisplayMode: I_SE_DisplayMode;
        /**User changes */
        UserLayoutChanges: string[];
        /**Index of user changes */
        UserLayoutChangesIdx: number;
    }
}
