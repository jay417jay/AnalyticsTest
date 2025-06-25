declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            class LayoutManager extends TcHmi.Controls.System.TcHmiContainerControl {
                /**
                 * Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elementTemplateRoot: JQuery;
                protected __controlContainer: JQuery;
                protected __svgContainer: JQuery;
                protected __resizeDestroyEvent: DestroyFunction | undefined;
                protected __userChangedDestroyEvent: DestroyFunction | undefined;
                /** Referenced menu-ctrl */
                protected __menuCtrl: TcHmi.Controls.Analytics.Menu | null | undefined;
                /** Properties of the interactive layout */
                protected __layoutProps: LayoutProperties;
                /** Implements the interactive layout and basic methods eg. positioning of controls */
                protected __layout: Layout;
                /** Manages the undo and redo actions */
                protected __undoRedoManager: UndoRedoManager;
                /** Handles the communication with the Server Extension to store and request layouts */
                protected __storeHandler: LayoutStoreHandler;
                /** Generates smartphone layouts (per default or from the server-extension) */
                protected __mobileLayoutGenerator: MobileLayoutGenerator;
                /** Generates dektop layouts (per default or from the server-extension) */
                protected __desktopLayoutGenerator: DesktopLayoutGenerator;
                /** Handles user-commands to edit an existing layout */
                protected __layoutEditor: LayoutEditor;
                /** Examines user-actions before executing them */
                protected __movementExaminer: MovementExaminer;
                /** Handles key events */
                protected __hotKeyHandler: HotKeyEventlistener;
                /** Handles interactive charts*/
                protected __interactiveControlHandler: InteractiveControlHandler;
                /** Handles the Events between the Helper-Classes */
                __helperClassesEventManager: TcHmi.Controls.Analytics.EventListenerManager;
                /** Buffers the width of the layout-manager until resize-events support transitions*/
                protected __widthBfr: number;
                /** Get if the layout is currently editable*/
                get isEditable(): boolean;
                /** Get if the layout is currently editable*/
                get allowLayoutEdit(): boolean;
                /** Stores the ID of the current animation frame.*/
                protected __animationFrameId: number;
                /** Get if the edit button should be displayed even when header is closed*/
                protected __alwaysShowEditButton: boolean;
                /** Get if the edit button should be displayed on top right*/
                protected __showEditButtonTopRight: boolean;
                /** if true all css animations and transitions are disabled*/
                protected __disableAnimations: boolean;
                /** if true the username can be seen by hovering over a user button*/
                protected __showUsernameButton: boolean;
                /** if true the add custom button is visible*/
                protected __showAddCustomCtrlButton: boolean;
                /** if true the add chart button is visible*/
                protected __showAddChartButton: boolean;
                /** if true the user won't be notified about storing the layout */
                protected __silentLayoutStore: boolean;
                /** Map of elements and their localization information */
                protected __localizedElements: Map<HTMLElement, {
                    key: string;
                    parameters?: any[];
                }>;
                /** Localization reader */
                protected __localizationReader: Locale.LocalizationReader | undefined;
                /** Localization watch function */
                protected __destroyLocalizationWatch: DestroyFunction | null;
                /** Keys of not-element-specific localizations */
                protected __localKeys: {
                    Save_Sucess: string;
                    Save_Error: string;
                    Save_Cancel: string;
                    Exit_Cancel: string;
                    Current_User: string;
                    Interactivity_Lock: string;
                    Add: string;
                };
                /** Cache of the layout */
                protected __layoutCache: LayoutCache[];
                /** Returns the id of the layout*/
                get layoutID(): string;
                /** Returns the id of the layout without the display mode*/
                get layoutIDWithoutDisplayMode(): string;
                /** List of controls that can be added (NOTE: Only the first item currently is supported*/
                protected __customCtrlTypes: any | null | undefined;
                /** Type Name of first item*/
                protected __firstCustomCtrlTypeName: string;
                /** Display name of first item*/
                protected __customCtrlDisplayName: string;
                /**
                  * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                  * Call attribute processor functions here to initialize default values!
                  */
                __previnit(): void;
                /**
                 * Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values.
                 * @returns {void}
                 */
                __init(): void;
                protected __initalizeAttributes(): void;
                /**
                * Is called by attachcontrol() after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __attach(): void;
                /**
                * Is called by tachcontrol() after the control instance is no longer part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __detach(): void;
                /**
                * Destroy the current control instance.
                * Will be called automatically if system destroys control!
                */
                destroy(): void;
                /**
                * Is called when the pages or the control resizes
                */
                protected __onResized: () => (evt: EventProvider.Event, ctrl: Controls.Analytics.AnalyticsControl) => void;
                /**
                * Is called when a new user has been logged in.
                */
                protected __onUserChanged: () => (evt: EventProvider.Event, ctrl: Controls.Analytics.AnalyticsControl) => void;
                protected __updateUser(): void;
                __addChild(control: TcHmi.Controls.System.baseTcHmiControl, pos?: number | undefined): void;
                protected __adjustEditButtonVisibility(isHeaderOpen?: boolean): void;
                protected __adjustEditButtonTopRight(isHeaderOpen?: boolean): void;
                protected __addChildToLayout(control: TcHmi.Controls.System.baseTcHmiControl): void;
                protected __refreshOnControlChange(): void;
                __removeChild(control: TcHmi.Controls.System.baseTcHmiControl): void;
                protected __headerColorDark: SolidColor;
                setHeaderColorDark(valueNew: SolidColor | null): void;
                getHeaderColorDark(): SolidColor;
                protected __headerColorLight: SolidColor;
                setHeaderColorLight(valueNew: SolidColor | null): void;
                getHeaderColorLight(): SolidColor;
                protected __processHeaderColor(): void;
                protected __gridLineColor: SolidColor;
                setGridLineColor(valueNew: SolidColor | null): void;
                getGridLineColor(): SolidColor;
                __processGridLineColor(): void;
                setDarkMode(valueNew: boolean): void;
                getDarkMode(): boolean;
                protected __processDarkMode(): void;
                setMenuControlSymbol(valueNew: TcHmi.Symbol<TcHmi.Controls.Analytics.Menu> | null): void;
                getMenuControlSymbol(): TcHmi.Controls.Analytics.Menu;
                protected __processMenuControlSymbol(): void;
                setMobileViewWidth(valueNew: number): void;
                getMobileViewWidth(): number;
                setMonitorViewWidth(valueNew: number): void;
                getMonitorViewWidth(): number;
                setDefaultViewportHeight(valueNew: number): void;
                getDefaultViewportHeight(): number;
                setDefaultViewportWidth(valueNew: number): void;
                getDefaultViewportWidth(): number;
                setDefaultControlDistance(valueNew: number): void;
                private _processDefaultControlDistance;
                getDefaultControlDistance(): number;
                setSortingType(valueNew: string): void;
                getSortingType(): string;
                setColumnNumber(valueNew: number): void;
                getColumnNumber(): number;
                setAllowLayoutEdit(valueNew: boolean): void;
                getAllowLayoutEdit(): boolean;
                protected __processAllowLayoutEdit(): void;
                /** Default laptop layout - will be set during the codegeneration*/
                protected __defaultLayout: string;
                setDefaultLayout(valueNew: string | null): void;
                getDefaultLayout(): string;
                protected __processDefaultLayout(): void;
                protected __showPopupMessages: boolean;
                setShowPopupMessages(valueNew: boolean | null): void;
                getShowPopupMessages(): boolean;
                protected __processShowPopupMessages(): void;
                setInteractivityLock(valueNew: boolean | null): void;
                getInteractivityLock(): boolean;
                protected __processInteractivityLock(): void;
                setButtonSize(valueNew: number | null): void;
                getButtonSize(): number;
                protected __processButtonSize(): void;
                setAlwaysShowEditButton(valueNew: boolean | null): void;
                getAlwaysShowEditButton(): boolean;
                protected __processAlwaysShowEditButton(): void;
                setShowEditButtonTopRight(valueNew: boolean | null): void;
                getShowEditButtonTopRight(): boolean;
                protected __processShowEditButtonTopRight(): void;
                setDisableAnimations(valueNew: boolean | null): void;
                getDisableAnimations(): boolean;
                protected __processDisableAnimations(): void;
                setShowUsernameButton(valueNew: boolean | null): void;
                getShowUsernameButton(): boolean;
                protected __processShowUsernameButton(): void;
                setUseCustomRowHeight(valueNew: boolean | null): void;
                getUseCustomRowHeight(): boolean;
                protected __processUseCustomRowHeight(): void;
                setCustomRowHeight(valueNew: number | null): void;
                getCustomRowHeight(): number;
                protected __processCustomRowHeight(): void;
                setShowAddChartButton(valueNew: boolean | null): void;
                getShowAddChartButton(): boolean;
                protected __processShowAddChartButton(): void;
                setShowAddCustomCtrlButton(valueNew: boolean | null): void;
                getShowAddCustomCtrlButton(): boolean;
                protected __processShowAddCustomCtrlButton(): void;
                setCustomCtrlTypes(valueNew: string): void;
                protected __onResolverForCustomCtrlTypesWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<any>) => void;
                getCustomCtrlTypes(): any;
                protected __processCustomCtrlTypes(): void;
                setAllowKeyboardShortcuts(valueNew: boolean): void;
                getAllowKeyboardShortcuts(): boolean;
                protected __processAllowKeyboardShortcuts(): void;
                storeDashboardLayout(currentLayout: I_SE_GridElement[]): void;
                protected __onLayoutStored(): (e: CustomEvent) => void;
                protected __requestDashboardLayout(): void;
                protected __processTempLayout(tempLayout: string): void;
                protected __onLayoutReceivedCallback(): (e: CustomEvent) => void;
                protected __onLayoutReceived(): (e: CustomEvent) => void;
                protected __interactiveControlHandling(interactiveControls: I_SE_InteractiveControlEntry[]): void;
                addChart(): void;
                protected __addInteractiveCtrlToLayout(control: TcHmi.Controls.System.baseTcHmiControl, storeLayout: boolean): void;
                protected __onControlDropped(): void;
                protected __updateRedoUndoButtons(): void;
                protected __onDisplayModeChanging(): void;
                protected __onDisplayModeChanged(): void;
                __onWindowSizeChanged(): void;
                __watchCtrlSize(): void;
                storeAndExitLayoutEditor(): void;
                setAccessPermissions(valueNew: AccessControl[]): void;
                __processAccessConfig(): void;
                protected __addInteractiveListener(): void;
                protected __addMouseMoveEvent(): void;
                protected __resetInteractiveListener(): void;
                onDisplayModeButtonClicked(mode: I_SE_DisplayMode): void;
                /**
                 * Public method to enable or disable the layout editing
                 * @param isEditing
                 */
                setEditMode(isEditing: boolean): void;
                /**
                 * Protected method tho enable or disable the layout editing with more options
                 * @param isEditing
                 * @param isKeyHandling
                 */
                protected __setEditMode(isEditing: boolean, isKeyHandling?: boolean): void;
                protected __storeDefaultControlParameter(): void;
                resetLayout(userChanged?: boolean): void;
                protected __createDashboardLayout(): void;
                protected __unsavedChangesHandling(): (e: Event) => void;
                protected __hasUnsavedChanges(): boolean;
                /**
                 * Add an element to be localized.
                 * @param element The element.
                 * @param key The localization key.
                 * @param parameters Optional parameters to pass to tchmi_format_string.
                 */
                __addLocalizedElement(element: HTMLElement, key: string, ...parameters: any[]): void;
                /**
                 * Remove a localized element.
                 * @param element The element to remove.
                 */
                __removeLocalizedElement(element: HTMLElement): void;
            }
        }
    }
}
