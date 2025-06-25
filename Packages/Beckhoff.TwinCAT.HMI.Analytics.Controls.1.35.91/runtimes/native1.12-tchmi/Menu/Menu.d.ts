declare namespace TcHmi {
    export namespace Controls {
        namespace Analytics {
            class Menu extends AnalyticsControl {
                /**
                 * Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elementDropdownWrapper: JQuery;
                protected __elementDropdown: JQuery;
                protected __elementIcon: JQuery;
                protected __elementLayoutWrapper: JQuery;
                /** registered and destroyed only while topmostlayer interaction */
                protected __resizedEventDestroyEvent: TcHmi.DestroyFunction | null;
                /** registered and destroyed only while topmostlayer interaction */
                protected __movedEventDestroyEvent: TcHmi.DestroyFunction | null;
                /**boolean to show if dropdownbox is open */
                protected __dropdownboxOpen: boolean | undefined;
                /**boolean to show if dropdownbox is open */
                protected __layoutWrapperOpen: boolean | undefined;
                /**dropdown event destroy functions */
                protected __dropdownEventDestroyFunction: TcHmi.DestroyFunction[];
                /**dropdown eventhandler for click logout*/
                protected __evtHandlerLogout: ((this: void, e: MouseEvent | TouchEvent) => void);
                /**dropdown eventhandler for click layout*/
                protected __evtHandlerLayout: ((this: void, e: MouseEvent | TouchEvent) => void);
                /**dropdown eventhandler for click edit*/
                protected __evtHandlerEditLayout: ((this: void, e: MouseEvent | TouchEvent) => void);
                /**dropdown eventhandler for click save*/
                protected __evtHandlerSaveLayout: ((this: void, e: MouseEvent | TouchEvent) => void);
                /**dropdown eventhandler for click reset*/
                protected __evtHandlerResetLayout: ((this: void, e: MouseEvent | TouchEvent) => void);
                /**dropdown eventhandler for add chart*/
                protected __evtHandleAddChart: ((this: void, e: MouseEvent | TouchEvent) => void);
                /**dropdown eventhandler for click settings*/
                protected __evtHandlerSettings: ((this: void, e: MouseEvent | TouchEvent) => void);
                /**dropdown eventhandler for click eventview*/
                protected __evtHandlerEventview: ((this: void, e: MouseEvent | TouchEvent) => void);
                /**dropdown eventhandler for click user*/
                protected __evtHandlerUser: ((this: void, e: MouseEvent | TouchEvent) => void);
                /**boolean to show if layout edits are allowed */
                protected __layoutEditAllowed: boolean;
                /**control-symbol for the layout controller*/
                protected __layoutControllerPopup: TcHmi.Controls.Analytics.LayoutControllerPopup | null | undefined;
                /**control-symbol for the permission popup */
                protected __userPermissionsPopup: TcHmi.Controls.Analytics.UserPermissionPopup | null | undefined;
                /** registered and destroyed only while topmostlayer interaction */
                protected __userPermissionsPopupClosedDestroyEvent: DestroyFunction | undefined;
                /**control-symbol for the source manager popup */
                protected __sourceManagerPopup: TcHmi.Controls.Analytics.SourceManagerPopup | null | undefined;
                /** registered and destroyed only while topmostlayer interaction */
                protected __sourceManagerPopupClosedDestroyEvent: DestroyFunction | undefined;
                /**control-symbol for the permission navigation-bar */
                protected __navigationBarCtrl: TcHmi.Controls.ResponsiveNavigation.TcHmiNavigationBar | null | undefined;
                /** Debounced click-method of edit layout */
                protected __debouncedEditLayoutClicked: (event: MouseEvent | TouchEvent) => void;
                /** Debounced click-method of edit layout */
                protected __debouncedSaveLayoutClicked: (event: MouseEvent | TouchEvent) => void;
                /** Debounced click-method of edit layout */
                protected __debouncedResetLayoutClicked: (event: MouseEvent | TouchEvent) => void;
                /** Debounced click-method of add chart*/
                protected __debouncedAddChartClicked: (event: MouseEvent | TouchEvent) => void;
                protected __layoutButton: JQuery;
                protected __layoutEditButton: JQuery;
                protected __layoutSaveButton: JQuery;
                protected __layoutResetButton: JQuery;
                protected __layoutAddChartButton: JQuery;
                protected __logoutButton: JQuery;
                protected __userButton: JQuery;
                protected __eventviewButton: JQuery;
                protected __settingsButton: JQuery;
                protected __firstCall: boolean;
                protected __showUser: boolean | undefined | null;
                protected __allowLogout: boolean | undefined | null;
                protected __allowSwitchUser: boolean | undefined | null;
                protected __editObserver: MutationObserver | undefined;
                protected __userManagementObserver: MutationObserver | undefined;
                protected __switchUserObserver: MutationObserver | undefined;
                protected __addUserObserver: MutationObserver | undefined;
                protected __deleteUserObserver: MutationObserver | undefined;
                protected __changeUserObserver: MutationObserver | undefined;
                protected __usermanagementControl: Beckhoff.TcHmiUserManagement | undefined;
                protected __usermanagementPopup: TcHmi.Controls.Analytics.UserManagementPopup | undefined;
                /** drop down font size */
                protected __dropDownFontSize: number | undefined;
                /** drop down font size unit */
                protected __dropDownFontSizeUnit: FontSizeUnit | undefined;
                /** drop down username font size */
                protected __dropDownUsernameFontSize: number | undefined;
                /** drop down font size unit */
                protected __dropDownUsernameFontSizeUnit: FontSizeUnit | undefined;
                protected __hoverFontColor: string | null | undefined;
                protected __layoutConfigAlias: string;
                protected __editAlias: string;
                protected __saveAlias: string;
                protected __resetAlias: string;
                protected __eventViewAlias: string;
                protected __settingsAlias: string;
                protected __logoutAlias: string;
                protected __closeAlias: string;
                protected __helloAlias: string;
                protected __oldPasswordAlias: string;
                protected __oldPasswordPlaceholderAlias: string;
                protected __newPasswordAlias: string;
                protected __newPasswordPlaceholderAlias: string;
                protected __repeatNewPasswordPlaceholderAlias: string;
                protected __userGroupsAlias: string;
                protected __localizationAlias: string;
                protected __projectDefaultAlias: string;
                protected __browserDefaultAlias: string;
                protected __advancedAlias: string;
                protected __switchUserAlias: string;
                protected __domainAlias: string;
                protected __selectUserAlias: string;
                protected __enterPasswordPlaceholderAlias: string;
                protected __enterUsernamePlaceholderAlias: string;
                protected __passwordAlias: string;
                protected __switchTooltipAlias: string;
                protected __switchAlias: string;
                protected __editUserPropertiesAlias: string;
                protected __userManagementAlias: string;
                protected __addUserAlias: string;
                protected __deleteUserAlias: string;
                protected __changeUserAlias: string;
                protected __activateAuthenticationAlias: string;
                protected __activateAuthenticationUserManagementAlias: string;
                protected __usernameAlias: string;
                protected __usernamePlaceholderAlias: string;
                protected __deleteAlias: string;
                protected __okAlias: string;
                protected __feedbackEnterUsernameAlias: string;
                protected __feedbackUsernameAlias: string;
                protected __feedbackPasswordAlias: string;
                protected __feedbackPasswordOldAlias: string;
                protected __feedbackBothPasswordsAlias: string;
                protected __feedbackPasswordMatchAlias: string;
                protected __feedbackUsergroupAlias: string;
                protected __feedbackNoUsergroupAlias: string;
                protected __feedbackUsernameExistsAlias: string;
                protected __feedbackNothingToConfigureAlias: string;
                protected __dropDownExpanding: boolean;
                protected __dropDownClosing: boolean;
                protected __fullWidth: string;
                protected __layoutManagerActiveControl: TcHmi.Controls.Analytics.LayoutManager[];
                /** Control distance for the layout manager */
                private __absolutCtrlDistance;
                /** Column number for the layout manager */
                private __individualColumnNumber;
                /** DestroyFunction for the AddUser-Event */
                private __addUserDestroyFct;
                /** DestroyFunctions for the Content-Permissions */
                protected __permissionDestroyFct: DestroyFunction[];
                /**
                  * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                  * Call attribute processor functions here to initialize default values!
                  */
                __previnit(): void;
                protected __initLayoutControllerPopup(): void;
                protected __initUserPermissionPopup(): void;
                protected __initSourceManagerPopup(): void;
                /**
                 * Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values.
                 * @returns {void}
                 */
                __init(): void;
                /**
                * Is called by tachcontrol() after the control instance gets part of the current DOM.
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
                 * function to adjust dropdown position on resize or scroll --> moves dropdown to top or left and shrink dropdown to ensure it's always visible
                 */
                protected __resizeDropdownBox: () => void;
                protected __shrinkLayoutChilds(): void;
                protected __shiftHeight(): void;
                /**
                 * opens/closes the Dropdownbox
                 * @param valueNew whether to open or close the dropdown
                 */
                protected __setDropdownBoxOpen(valueNew?: boolean): void;
                protected __fillDropdown(): void;
                /**
                 * Adds a change to the cursor on hovered dropdown elements to indicate possible interaction with them
                 * @param auth whether or not authentication is active in current session
                 */
                protected __addCursorChangeOnHover(): void;
                /**
                 * function to make layout child (edit, reset, save button) visible
                 * */
                protected __showLayoutChilds(): void;
                /**
                 * function to make layout child (edit, reset, save button) hidden
                 * */
                protected __hideLayoutChilds(): void;
                /**
                * function to create a drop down button.
                * @param displayName The displayed name of the created button.
                * @param clickEventHandler The event handler for the click event of the button.
                * @param subName adds subName to html class list
                */
                protected __createDropDownButton(clickEventHandler: (this: void, e: MouseEvent | TouchEvent) => void, displayName: string, icon: boolean): JQuery<HTMLDivElement>;
                /**
             * function to remove a drop down buttons eventListeners.
             * @param buttonElement The element to remove.
             * @param clickEventHandler The event handler for the click event of the button.
             */
                protected __removeDropDownbutton(buttonElement: JQuery, clickEventHandler: (this: void, e: MouseEvent | TouchEvent) => void): void;
                protected __closeLayoutWrapper(): void;
                protected __openLayoutWrapper(): void;
                protected __setCurrentView(): void;
                protected __addEventListeners(): void;
                protected __onExpandDropdown(): (event: EventProvider.Event) => void;
                protected __onCollapseDropdown(): (event: EventProvider.Event) => void;
                protected __onDropDownMouseEnter(): void;
                protected __onDropDownMouseLeave(): void;
                /**
                * Event Callbackfunction. A new user has been logged in and / or the configuration (time zone, ...) of the current user is now known to the system or has changed.
                */
                protected __onUserDataChanged(): (event: EventProvider.Event) => void;
                /**
                * Event Callbackfunction. A new user has been logged in.
                */
                protected __onUserChanged(): (event: EventProvider.Event) => void;
                /**
                * Event Callbackfunction onLocaleChanged
                */
                protected __onLocaleChanged(): (event: EventProvider.Event) => void;
                /**
                 * Event Callbackfunction called onClick of LogoutButton
                 */
                protected __onLogout(): (event: MouseEvent) => void;
                __onSwitchUser(): void;
                /**
                * Event Callbackfunction called onClick of LayoutEditButton
                */
                __onEditUserProperties(): void;
                __onUserManagement(): void;
                /**
                 * Event Callbackfunction called onClick of LayoutButton (close for Mobile/Touch User)
                 */
                protected __onLayout(): (event: MouseEvent | TouchEvent) => void;
                /**
                 * Event Callbackfunction called onClick of LayoutEditButton
                 */
                protected __onEditLayout(): (event: MouseEvent | TouchEvent) => void;
                protected __editLayoutClicked(event: MouseEvent | TouchEvent): void;
                /**
                 * Event Callbackfunction called onClick of LayoutSaveButton
                 */
                protected __onSaveLayout(): (event: MouseEvent | TouchEvent) => void;
                protected __saveLayoutClicked(event: MouseEvent | TouchEvent): void;
                /**
                 * Event Callbackfunction called onClick of LayoutResetButton
                 */
                protected __onResetLayout(): (event: MouseEvent | TouchEvent) => void;
                protected __resetLayoutClicked(event: MouseEvent | TouchEvent): void;
                /**
                 * Event Callbackfunction called onClick of AddChartButton
                 */
                protected __onAddChart(): (event: MouseEvent | TouchEvent) => void;
                protected __addChartClicked(event: MouseEvent | TouchEvent): void;
                /**
                 * Event Callbackfunction called onClick of Add User
                 * */
                protected _onAddUser(): void;
                /**
                 * Event Callbackfunction called onClick of Delete User
                 * */
                protected _onDeleteUser(): void;
                /**
                 * Event Callbackfunction called onClick of Change User
                 * */
                protected _onChangeUser(): void;
                /**
                 * Event Callbackfunction called onClick of SettingsButton
                */
                protected __onSettings(): (event: MouseEvent | TouchEvent) => void;
                /**
                 * Event Callbackfunction called onClick of PermissionButton
                */
                _onPermissions(): void;
                /**
                 * Event Callbackfunction called onClick of SourceManagerButton
                */
                _onSourceManager(): void;
                /**
                 * Event Callbackfunction called onClick of LayoutControllerButton
                */
                _onLayoutController(): void;
                /**
                 * Event Callbackfunction called onClick of EventViewButton
                */
                protected __onEventview(): (event: MouseEvent | TouchEvent) => void;
                /**
                 * Event Callbackfunction called onClick of Username
                */
                protected __onUser(): (event: MouseEvent | TouchEvent) => void;
                protected __processSwitchUserPopup(): void;
                protected __switchUserButtonClicked(): void;
                protected __processManageUserPopup(): void;
                protected __processEditUserPopup(): void;
                protected __processAddUserPopup(): void;
                protected __processDeleteUserPopup(): void;
                protected __processChangeUserPopup(): void;
                addCurrentLayoutManager(layoutManager: TcHmi.Controls.Analytics.LayoutManager | null): void;
                removeCurrentLayoutManager(layoutManager: TcHmi.Controls.Analytics.LayoutManager): void;
                protected __processColor(): void;
                setShowUser(valueNew: boolean | null): void;
                getShowUser(): boolean;
                setAllowLogout(valueNew: boolean | null): void;
                getAllowLogout(): boolean;
                setAllowSwitchUser(valueNew: boolean | null): void;
                getAllowSwitchUser(): boolean;
                protected __mobileViewWidth: number;
                setMobileViewWidth(valueNew: number | null): void;
                getMobileViewWidth(): number;
                protected __processMobileViewWidth(): void;
                protected __monitorViewWidth: number;
                setMonitorViewWidth(valueNew: number | null): void;
                getMonitorViewWidth(): number;
                protected __processMonitorViewWidth(): void;
                protected __currentView: E_ViewType;
                setCurrentView(valueNew: E_ViewType | null): void;
                getCurrentView(): string;
                protected __processCurrentView(): void;
                setDropDownFontSize(valueNew: number | null): void;
                getDropDownFontSize(): number;
                getDropDownUsernameFontSize(): number;
                setDropDownUsernameFontSize(valueNew: number | null): void;
                protected __processDropDownFontSize(): void;
                setDropDownFontSizeUnit(valueNew: FontSizeUnit | null): void;
                setDropDownUsernameFontSizeUnit(valueNew: FontSizeUnit | null): void;
                getDropDownFontSizeUnit(): FontSizeUnit;
                getDropDownUsernameFontSizeUnit(): FontSizeUnit;
                protected __processDropDownFontSizeUnit(): void;
                protected __processDropDownUsernameFontSizeUnit(): void;
                protected __sourceManagerAlias: string;
                setSourceManagerAlias(valueNew: string): void;
                getSourceManagerAlias(): void;
                protected __processSourceManagerAlias(): void;
                setHoverFontColor(valueNew: SolidColor): void;
                getHoverFontColor(): string;
                setLayoutConfigAlias(valueNew: string): void;
                getLayoutConfigAlias(): string;
                protected __processLayoutConfigAlias(): void;
                setEditAlias(valueNew: string): void;
                getEditAlias(): string;
                protected __processEditAlias(): void;
                setSaveAlias(valueNew: string): void;
                getSaveAlias(): string;
                protected __processSaveAlias(): void;
                setResetAlias(valueNew: string): void;
                getResetAlias(): string;
                protected __processResetAlias(): void;
                protected __addChartAlias: string;
                setAddChartAlias(valueNew: string | null): void;
                getAddChartAlias(): string;
                protected __processAddChartAlias(): void;
                setEventViewAlias(valueNew: string): void;
                getEventViewAlias(): string;
                protected __processEventViewAlias(): void;
                setSettingsAlias(valueNew: string): void;
                getSettingsAlias(): string;
                protected __processSettingsAlias(): void;
                setLogoutAlias(valueNew: string): void;
                getLogoutAlias(): string;
                protected __processLogoutAlias(): void;
                setCloseAlias(valueNew: string): void;
                getCloseAlias(): string;
                setHelloAlias(valueNew: string): void;
                getHelloAlias(): string;
                setOldPasswordAlias(valueNew: string): void;
                getOldPasswordAlias(): string;
                setOldPasswordPlaceholderAlias(valueNew: string): void;
                getOldPasswordPlaceholderAlias(): string;
                setNewPasswordAlias(valueNew: string): void;
                getNewPasswordAlias(): string;
                setNewPasswordPlaceholderAlias(valueNew: string): void;
                getNewPasswordPlaceholderAlias(): string;
                setRepeatNewPasswordPlaceholderAlias(valueNew: string): void;
                getRepeatNewPasswordPlaceholderAlias(): string;
                setUserGroupsAlias(valueNew: string): void;
                getUserGroupsAlias(): string;
                setLocalizationAlias(valueNew: string): void;
                getLocalizationAlias(): string;
                setProjectDefaultAlias(valueNew: string): void;
                getProjectDefaultAlias(): string;
                setAdvancedAlias(valueNew: string): void;
                getAdvancedAlias(): string;
                protected __processAdvancedAlias(): void;
                setBrowserDefaultAlias(valueNew: string): void;
                getBrowserDefaultAlias(): string;
                setSwitchUserAlias(valueNew: string): void;
                getSwitchUserAlias(): string;
                setDomainAlias(valueNew: string): void;
                getDomainAlias(): string;
                setSelectUserAlias(valueNew: string): void;
                getSelectUserAlias(): string;
                setPasswordAlias(valueNew: string): void;
                getPasswordAlias(): string;
                setSwitchTooltipAlias(valueNew: string): void;
                getSwitchTooltipAlias(): string;
                setSwitchAlias(valueNew: string): void;
                getSwitchAlias(): string;
                setEnterPasswordPlaceholderAlias(valueNew: string): void;
                getEnterPasswordPlaceholderAlias(): string;
                setEnterUsernamePlaceholderAlias(valueNew: string): void;
                getEnterUsernamePlaceholderAlias(): string;
                setEditUserPropertiesAlias(valueNew: string): void;
                getEditUserPropertiesAlias(): string;
                setUserManagementAlias(valueNew: string): void;
                getUserManagementAlias(): string;
                setAddUserAlias(valueNew: string): void;
                getAddUserAlias(): string;
                setDeleteUserAlias(valueNew: string): void;
                getDeleteUserAlias(): string;
                setChangeUserAlias(valueNew: string): void;
                getChangeUserAlias(): string;
                setActivateAuthenticationAlias(valueNew: string): void;
                getActivateAuthenticationAlias(): string;
                protected __processActivateAuthenticationAlias(): void;
                setActivateAuthenticationUserManagementAlias(valueNew: string): void;
                getActivateAuthenticationUserManagementAlias(): string;
                protected __processActivateAuthenticationUserManagementAlias(): void;
                setUsernameAlias(valueNew: string): void;
                getUsernameAlias(): string;
                setUsernamePlaceholderAlias(valueNew: string): void;
                getUsernamePlaceholderAlias(): string;
                setDeleteAlias(valueNew: string): void;
                getDeleteAlias(): string;
                protected __processDeleteAlias(): void;
                setOkAlias(valueNew: string): void;
                getOkAlias(): string;
                setFeedbackEnterUsernameAlias(valueNew: string): void;
                getFeedbackEnterUsernameAlias(): string;
                setFeedbackUsernameAlias(valueNew: string): void;
                getFeedbackUsernameAlias(): string;
                setFeedbackPasswordAlias(valueNew: string): void;
                getFeedbackPasswordAlias(): string;
                setFeedbackPasswordOldAlias(valueNew: string): void;
                getFeedbackPasswordOldAlias(): string;
                setFeedbackBothPasswordsAlias(valueNew: string): void;
                getFeedbackBothPasswordsAlias(): string;
                setFeedbackPasswordMatchAlias(valueNew: string): void;
                getFeedbackPasswordMatchAlias(): string;
                setFeedbackUsergroupAlias(valueNew: string): void;
                getFeedbackUsergroupAlias(): string;
                setFeedbackNoUsergroupAlias(valueNew: string): void;
                getFeedbackNoUsergroupAlias(): string;
                setFeedbackUsernameExistsAlias(valueNew: string): void;
                getFeedbackUsernameExistsAlias(): string;
                setFeedbackNothingToConfigureAlias(valueNew: string): void;
                getFeedbackNothingToConfigureAlias(): string;
                setDefaultControlDistance(valueNew: number): void;
                getDefaultControlDistance(): number;
                setColumnNumber(valueNew: number): void;
                getColumnNumber(): number;
                setNavigationBarControlSymbol(valueNew: TcHmi.Symbol<TcHmi.Controls.ResponsiveNavigation.TcHmiNavigationBar> | null): void;
                getNavigationBarControlSymbol(): TcHmi.Controls.ResponsiveNavigation.TcHmiNavigationBar;
                protected __processNavigationBarControlSymbol(): void;
                protected __loadingAlias: string;
                setLoadingAlias(valueNew: string | null): void;
                getLoadingAlias(): string;
                protected __processLoadingAlias(): void;
                protected __viewAlias: string;
                setViewAlias(valueNew: string | null): void;
                getViewAlias(): string;
                protected __processViewAlias(): void;
                protected __noAccessAlias: string;
                setNoAccessAlias(valueNew: string | null): void;
                getNoAccessAlias(): string;
                protected __processNoAccessAlias(): void;
                protected __userGroupAlias: string;
                setUserGroupAlias(valueNew: string | null): void;
                getUserGroupAlias(): string;
                protected __processUserGroupAlias(): void;
                protected __contentPermissionAlias: string;
                setContentPermissionAlias(valueNew: string | null): void;
                getContentPermissionAlias(): string;
                protected __processContentPermissionAlias(): void;
                protected __userPermissionAlias: string;
                setUserPermissionAlias(valueNew: string | null): void;
                getUserPermissionAlias(): string;
                protected __processUserPermissionAlias(): void;
                protected __undoAlias: string;
                setUndoAlias(valueNew: string | null): void;
                getUndoAlias(): string;
                protected __processUndoAlias(): void;
                protected __readingErrorAlias: string;
                setReadingErrorAlias(valueNew: string | null): void;
                getReadingErrorAlias(): string;
                protected __processReadingErrorAlias(): void;
                protected __storeSuccessAlias: string;
                setStoreSuccessAlias(valueNew: string | null): void;
                getStoreSuccessAlias(): string;
                protected __processStoreSuccessAlias(): void;
                protected __storeErrorAlias: string;
                setStoreErrorAlias(valueNew: string | null): void;
                getStoreErrorAlias(): string;
                protected __processStoreErrorAlias(): void;
                protected __resetPermissionsAlias: string;
                setResetPermissionsAlias(valueNew: string | null): void;
                getResetPermissionsAlias(): string;
                protected __processResetPermissionsAlias(): void;
                protected __processReceivedContents(): void;
                protected __checkUserManagementExtension(): void;
                protected __setNavigationBarMenuSourceData(contents: IContentEntry[]): void;
                protected __setLayoutManagerAccessRights(): void;
                protected __checkLayoutEditable(): void;
            }
        }
        class I_SE_SetUserLayoutsRequest {
            NewUserID: string;
            CopySingleDashboardLayoutCmds: List<I_SE_SetLayoutCmd>;
            DeleteLayouts: boolean;
            SetUserLayoutsCmd(): void;
        }
        class I_SE_SetLayoutCmd {
            UserID: string;
            ContentID: string;
            DisplayMode: string;
            CopyMode: E_SE_CopyLayoutMode;
        }
        enum E_SE_CopyLayoutMode {
            COPY = 0,
            REFERENCE = 1
        }
        interface IContentDescription {
            id: string;
            imageHeightUnit: string;
            imageWidthUnit: string;
            name: string;
            page: string;
            children: IContentDescription[];
        }
    }
    enum E_ViewType {
        DESKTOP = "Desktop",
        TABLET = "Tablet",
        MOBILE = "Mobile"
    }
    export {};
}
