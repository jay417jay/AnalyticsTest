declare namespace TcHmi.Controls.Analytics {
    class UserManagementPopup extends TcHmi.Controls.Helpers.Popup<void> {
        /**
        * Creates the popup.
        * @param element The HTML element that hosts the popup.
        * @param parentControl The control owning the popup.
        * @param menuControl the parent menu control
        */
        protected __showUsermanagementButtons: I_UserManagementPopupButtonAccess;
        constructor(parentControl: TcHmi.Controls.Beckhoff.TcHmiUserManagement, menuControl: TcHmi.Controls.Analytics.Menu);
        protected __performPromptAction(toPerform: Helpers.Popup.PromptAction<string>): void;
        /** add user button*/
        protected __switchUserButton: TcHmi.Controls.Beckhoff.TcHmiButton | undefined;
        /**delete user button */
        protected __editUserPropertiesButton: TcHmi.Controls.Beckhoff.TcHmiButton | undefined;
        /** manage user groups button */
        protected __manageUserGroupsButton: TcHmi.Controls.Beckhoff.TcHmiButton | undefined;
        /** user-group permission button */
        protected __userPermissionsButton: TcHmi.Controls.Beckhoff.TcHmiButton | undefined;
        /** sourcehandler button */
        protected __sourceManagerButton: TcHmi.Controls.Beckhoff.TcHmiButton | undefined;
        /** user-group permission button */
        protected __layoutControllersButton: TcHmi.Controls.Beckhoff.TcHmiButton | undefined;
        protected __userPermissionAlias: string;
        setUserPermissionAlias(valueNew: string): void;
        getUserPermissionAlias(): void;
        protected __processUserPermissionAlias(): void;
        protected __sourceManagerAlias: string;
        setSourceManagerAlias(valueNew: string): void;
        getSourceManagerAlias(): void;
        protected __processSourceManagerAlias(): void;
        protected __layoutControllerAlias: string;
        setLayoutControllerAlias(valueNew: string): void;
        getLayoutControllerAlias(): string;
        protected __processLayoutControllerAlias(): void;
        /** feedback element */
        protected __elementFeedback: HTMLElement;
        /** List of user groups */
        __userGroupList: Dictionary<TcHmi.Server.UserManagement.IGroupDetails> | undefined;
        /**content buttons*/
        protected __elementButtons: HTMLElement;
        /** the parent menu (TcHmi.Controls.Analytics.Menu) control*/
        protected __menuControl: TcHmi.Controls.Analytics.Menu | undefined;
        /** add user popup */
        protected __switchUserPopup: TcHmi.Controls.Beckhoff.TcHmiUserManagementPopups.SwitchUserPopup | undefined;
        protected __createButtons(): void;
        /**
         * Get Api access to each domain and break them down to the usermanagement buttons
         **/
        protected __getApiAccessForDomains(): void;
        processUserManagementPopup(): void;
        protected __processUserManagementPopup(): void;
        show(): void;
        /**
        * Callback function on ConfirmButton
        */
        protected __onClose(): () => void;
        /**
        * Callback function on SwitchUserButton
        */
        protected __onSwitchUser(): () => void;
        /**
       * Callback function on EditUserPropertiesButton
       */
        protected __onEditUserProperties(): () => void;
        /**
          * Callback function on EditUserPropertiesButton
          */
        protected __onUserManagement(): () => void;
        /**
          * Callback function on UserGroupPermissionButton
          */
        protected __onPermissions(): () => void;
        /**
          * Callback function on SourceManagerButton
          */
        protected __onSourceManager(): () => void;
        /**
          * Callback function on LayoutControllerButton
          */
        protected _onLayoutController(): () => void;
    }
    interface I_UserManagementPopupButtonAccess {
        editUser: boolean;
        userManagement: boolean;
        contentPermissions: boolean;
        dataSourceManagement: boolean;
    }
}
