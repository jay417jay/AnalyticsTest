declare namespace TcHmi.Controls.Analytics {
    /**
     * The LayoutProperties includes all Properties refering the layout
     */
    class LayoutProperties {
        /** Basis Layout-Manager-Control */
        ElCtrlElement: JQuery;
        /** ElementBase Layout-Manager-Control */
        ElElementTemplateRoot: JQuery;
        /** Container for the SVG-Area which displays the Grid-Lines */
        ElSvgContainer: JQuery;
        ElGridContainer: JQuery;
        ElEditButton: JQuery;
        ElDesktopButton: JQuery;
        ElMobileButton: JQuery;
        ElSelectedIndicator: JQuery;
        ElEditHeader: JQuery;
        ElEditHeaderWrapper: JQuery;
        /** Height of the Layout-Manager-Control */
        height: number;
        /** Width of the Layout-Manager-Control */
        width: number;
        /** Unit of the Layout-Manager-Control */
        widthUnit: DimensionUnit;
        /** Unit of the Layout-Manager-Control */
        heightUnit: DimensionUnit;
        /** Set the dark mode */
        darkMode: boolean;
        /** Trigger for breakup between mobile and tablet view*/
        mobileViewTriggerWidth: number;
        /** Custom number of columns in desktop view  */
        customColumnNumber: number;
        /** Control-Distance in Pixel (Refering to a column Width of 150px)*/
        absolutCtrlDistance: number;
        /** Set the dark mode */
        allowLayoutEdit: boolean;
        /** Set the dark mode */
        allowKeyboardShortcuts: boolean;
        /** Lock control interaction while editing */
        interactivityLock: boolean;
        /** Size of the header buttons in pixel */
        buttonSize: number;
        /** Default Viewport Width (set by the codegeneration) */
        defaultVPWidth: number;
        /** Default Viewport Height (set by the codegeneration) */
        defaultVPHeight: number;
        /** Sorting-Type for the layout */
        sortingType: string;
        /** Trigger for breakup between tablet and laptop view - currently not used*/
        monitorViewTriggerWidth: number;
        /** Width of the grid-columns in Pixel (scaled automatically) */
        columnWidthPx: number;
        /** Height of the grid rows in Pixel (scaled automatically) */
        rowHeightPx: number;
        /** Use Predefined RowHeight */
        usePredefinedRowHeight: boolean;
        /** Predefined RowHeight */
        predefinedRowHeightPx: number;
        /** Responsive gap of the Grid in Pixel (scaled automatically) */
        gridGapPx: number;
        /** Default size of the grid (150px) / 2 for more columns and rows */
        defaultGridSize: number;
        private __numberOfColumns;
        /** Number of columns in the grid */
        get numberOfColumns(): number;
        /** Number of rows in the grid (default 10 but scaled automatically) */
        numberOfRows: number;
        /** Name of the current Layout (UserName + ContentName + LayoutMode) */
        userLayoutKey: string;
        /** Is a requested (user-specific) Layout */
        isUserSpecificLayout: boolean;
        /** Boolean that is true, while user is in Edit-Mode */
        isEditing: boolean;
        private _displayMode;
        /** Layout-View-Mode */
        get displayMode(): I_SE_DisplayMode;
        set displayMode(value: I_SE_DisplayMode);
        /** Id of the layout*/
        layoutID: string;
        /** Number of the selected HMI-Control in the DOM-Tree */
        grabbedElIdx: number;
        /** Saves the different layouts during a user action (to restore controls) */
        automaticLayoutChanges: string[];
        /** List of controls that must be treated separately (eg. during a slide-down-action) */
        ruleSet: IResetElementRule[];
        /** Default height of a container before new rows are added */
        defaultContainerHeight: number;
        /** Number of rows in a default grid*/
        defaultRowNumber: number;
        /** Default height-unit*/
        defaultHeightUnit: string;
        /** Is true when the layout is initialized */
        layoutInitialized: boolean;
        /** Is true when the a mobile-layout is initialized */
        mobileLayoutInitialized: boolean;
        /** Stores all eventlisteners refering the user-interactions with the interactive layout */
        eventListenerManager: TcHmi.Controls.Analytics.EventListenerManager;
        /** Stores the default Ctrl-Style before creating the grid-layout */
        defaultCtrlStyle: string[];
        /** Stores the Ctrl-Position before creating the grid-layout */
        defaultCtrlPosition: IHMICtrlPos[];
        /** Requested Layout (from the Server-Extension or from a Redo/Undo-Action)*/
        requestedLayout: string;
        /** Relevant for new layout generation */
        isLayoutReset: boolean;
        /** Variable to convert the Control-Distance-Attribute of the Layout Manager to the responsive grid-gap*/
        ctrlDistanceHelper: GridGap;
        /** Generated Smartphone-layout (includes positions of hidden controls) */
        generatedFullSmartphoneLayout: string;
        /** Edited Smartphone-layout (includes positions of hidden controls) */
        editedFullSmartphoneLayout: string;
        /** Is true when the a redo/undo-action is triggered */
        isRedoUndoAction: boolean;
        /** Is true when a Menu-Ctrl is referenced in the Control Attributes */
        hasMenuCtrl: boolean;
        /** Is layout manager menu fade in (only used when having no menu ctrl) */
        isMenuFadeIn: boolean;
        /** Interactive (dynamically added) controls */
        interactiveCtrls: I_SE_InteractiveControlEntry[];
    }
    class EventNames {
        static storeDashboard: string;
        static setEditMode: string;
        static slideUpElements: string;
        static setTop: string;
        static getTop: string;
        static requestDashboardLayout: string;
        static addInteractiveListener: string;
        static processDarkMode: string;
        static resetInteractiveListener: string;
        static layoutReceived: string;
        static layoutStored: string;
        static storeLayout: string;
        static createLayout: string;
        static controlDropped: string;
        static updateRedoUndoButton: string;
        static undoAction: string;
        static redoAction: string;
        static displayModeChanging: string;
        static displayModeChanged: string;
    }
}
