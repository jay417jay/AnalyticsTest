declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            class UserPermissionPopup extends TcHmi.Controls.System.TcHmiControl {
                /**
                 * Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                /** EventManager */
                protected __eventManager: EventListenerManager;
                /** Groups of the current user */
                protected __currentUserGroups: string[];
                /** Is true when the popup is open */
                protected __isOpen: boolean;
                /** Is true if user has access to the user-group-permissions */
                protected __hasUserGroupPermissions: boolean;
                /** Selected user group in the popup */
                protected __selectedUserGroup: string;
                /** event destroyer functions */
                protected __eventDestroyers: DestroyFunction[];
                /** Default Items for the permission-combobox */
                protected __defaultPermissionItems: ComboboxListItem[];
                /** received contents from the server-extension as json-string */
                protected __receivedContentsRaw: string;
                /** current contents from the navigation bar */
                originalContents: IContentEntry[];
                /** current contents from the navigation bar */
                currentContents: IContentEntry[];
                /** received contents from the server-extension */
                receivedContents: IContentEntry[];
                /** Popup handling*/
                createPopupFnct: (message: string, status: CustomElements.PopupStatus, timeInMs: number) => void;
                protected __elTemplateRoot: JQuery;
                protected __elPopupHeaderLabel: JQuery;
                protected __elUserGroupsContainer: JQuery;
                protected __elUserGroupsLabel: JQuery;
                protected __elPermissionsContainer: JQuery;
                protected __elPermissionLabels: JQuery;
                protected __elPermissionButtonContainer: JQuery;
                protected __elPermissionCloseBtn: CustomElements.CloseIcon;
                protected __advancedGroupsSwitch: TcHmi.Controls.Beckhoff.TcHmiToggleSwitch | undefined;
                protected __storeButton: TcHmi.Controls.Beckhoff.TcHmiButton | undefined;
                protected __undoButton: TcHmi.Controls.Beckhoff.TcHmiButton | undefined;
                protected __showAdvancedGroups: boolean;
                /**
                  * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                  * Call attribute processor functions here to initialize default values!
                  */
                __previnit(): void;
                __init(): void;
                __attach(): void;
                __detach(): void;
                destroy(): void;
                protected __onResized: () => () => void;
                protected __editAlias: string;
                setEditAlias(valueNew: string | null): void;
                getEditAlias(): string;
                protected __processEditAlias(): void;
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
                protected __sourceManagerAlias: string;
                setSourceManagerAlias(valueNew: string | null): void;
                getSourceManagerAlias(): string;
                protected __processSourceManagerAlias(): void;
                protected __layoutControllerAlias: string;
                setLayoutControllerAlias(valueNew: string | null): void;
                getLayoutControllerAlias(): string;
                protected __processLayoutControllerAlias(): void;
                protected __saveAlias: string;
                setSaveAlias(valueNew: string | null): void;
                getSaveAlias(): string;
                protected __processSaveAlias(): void;
                protected __undoAlias: string;
                setUndoAlias(valueNew: string | null): void;
                getUndoAlias(): string;
                protected __processUndoAlias(): void;
                protected __readingErrorAlias: string;
                setReadingErrorAlias(valueNew: string | null): void;
                getReadingErrorAlias(): string;
                protected __processReadingErrorAlias(): void;
                protected __advancedAlias: string;
                setAdvancedAlias(valueNew: string | null): void;
                getAdvancedAlias(): string;
                protected __processAdvancedAlias(): void;
                protected __storeSuccessAlias: string;
                setStoreSuccessAlias(valueNew: string | null): void;
                getStoreSuccessAlias(): string;
                protected __processStoreSuccessAlias(): void;
                protected __storeErrorAlias: string;
                setStoreErrorAlias(valueNew: string | null): void;
                getStoreErrorAlias(): string;
                protected __processStoreErrorAlias(): void;
                protected __resetAlias: string;
                setResetAlias(valueNew: string | null): void;
                getResetAlias(): string;
                protected __processResetAlias(): void;
                protected __darkMode: boolean;
                setDarkMode(valueNew: boolean): void;
                getDarkMode(): boolean;
                protected __processDarkMode(): void;
                protected __createPermissionButtons(): void;
                openPopup(): void;
                closePopup(): void;
                protected __onResetPressed(): void;
                protected __resetContent(): void;
                protected __loadUserGroups(): void;
                protected __createUserGroupEntry(userGroupName: string, userGroupDetails: TcHmi.Server.UserManagement.IGroupDetails): void;
                protected __loadContentsForUserGroup(groupName: string): void;
                protected __createContentEntriesRecursive(content: IContentEntry, parentTreeNode: HTMLElement): void;
                protected __getAnalyticsPermission(accessRights: IAccessRightEntry[]): AnalyticsContentPermission;
                protected __processReceivedContents(): void;
                protected __compareContentsRecursive(receivedContent: IContentEntry): void;
                protected __createContentEntry(contentName: string, permission: AnalyticsContentPermission, parentTreeNode: HTMLElement): HTMLElement;
                protected __createTextblock(contentName: string): TcHmi.Controls.Beckhoff.TcHmiTextblock;
                protected __createCombobox(contentName: string): TcHmi.Controls.Beckhoff.TcHmiCombobox;
                protected __setComboboxIndex(combobox: TcHmi.Controls.Beckhoff.TcHmiCombobox, permission: AnalyticsContentPermission): void;
                protected __getComboboxIndex(combobox: TcHmi.Controls.Beckhoff.TcHmiCombobox): AnalyticsContentPermission;
                protected __createPermissionComboboxItems(): void;
                protected __onPermissionChanged(contentName: string): void;
                protected __getContentPermission(contentName: string): AnalyticsContentPermission;
                protected __setContentPermissionRecursive(content: IContentEntry): void;
                protected __setPermissionEntry(content: IContentEntry, permission: AnalyticsContentPermission): void;
                protected __addAccessRights(accessRight: AccessRight, hmiPermission: Permission): IAccessRightEntry;
                findCurrentContent(contentName: string): IContentEntry | null;
                findReceivedContent(contentName: string): IContentEntry | null;
                protected __findContentRecursive(content: IContentEntry, contentName: string): IContentEntry | null;
                protected __changedAdvancedGroups(): void;
                requestContents(): void;
                protected __safeUserGroupPermissions(): void;
                protected __getStoreLayout(): IContentEntry[];
                protected __getStoreLayoutRecursive(currentContent: IContentEntry): IContentEntry;
                protected __requestExSymbol(request: TcHmi.Server.IMessage): void;
            }
        }
    }
    class UserPermissionsEntry {
        userGroupName: string;
        contentPermissions: IContentEntry[];
    }
    interface IContentEntry {
        /** Name of the content - typically a localization */
        name: string;
        /** Name of the referenced page */
        page: string;
        /** Child-Elements */
        id: string;
        /** Child-Elements */
        children: IContentEntry[];
        /** Access-right of the content */
        accessRight: IAccessRightEntry[];
    }
    interface IAccessRightEntry {
        accessright: AccessRight;
        group: string;
        permission: Permission;
        internalPermission: AnalyticsContentPermission;
    }
    enum AccessRight {
        observe = "observe",
        operate = "operate"
    }
    enum Permission {
        allow = "Allow",
        deny = "Deny"
    }
    enum AnalyticsContentPermission {
        Editor = 0,
        Viewer = 10,
        NoAccess = 20
    }
    interface ComboboxListItem {
        id?: number;
        text: string;
        value?: any;
        category?: string;
    }
}
