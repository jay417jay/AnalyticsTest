declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            class LayoutControllerPopup extends TcHmi.Controls.System.TcHmiControl {
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
                /** Is true when the popup is open */
                protected __isOpen: boolean;
                /** Popup handling*/
                createPopupFnct: (message: string, status: CustomElements.PopupStatus, timeInMs: number) => void;
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
                    Layout_Controller_Header_TextContent: string;
                    Layout_Controller_Users_TextContent: string;
                    Layout_Controller_Selected_User_TextContent: string;
                    Layout_Controller_Layout_Mode_TextContent: string;
                    Layout_Controller_Import_TextContent: string;
                    Layout_Controller_Shared_TextContent: string;
                    Layout_Controller_Reset_Layouts: string;
                    Layout_Controller_Reset_Confirm: string;
                    Layout_Controller_Import_Layouts: string;
                    Layout_Controller_Import_Confirm: string;
                    Layout_Controller_Share_Layouts: string;
                    Layout_Controller_Share_Confirm: string;
                    Layout_Controller_Default_Layout: string;
                    Layout_Controller_Custom_Layout: string;
                    Layout_Controller_Shared_Layout: string;
                    Layout_Controller_Multiple_User: string;
                    Layout_Controller_Mixed_Layout: string;
                    Layout_Controller_Reset_Success: string;
                    Layout_Controller_Reset_Error: string;
                    Layout_Controller_Import_Success: string;
                    Layout_Controller_Import_Error: string;
                    Layout_Controller_Share_Success: string;
                    Layout_Controller_Share_Error: string;
                };
                /** List of current users */
                protected __currentUsers: string[];
                /** Selected user in the popup */
                protected __selectedUser: string;
                /** Button to reset */
                protected __resetButton: TcHmi.Controls.Beckhoff.TcHmiButton | undefined;
                /** Button to import */
                protected __importButton: TcHmi.Controls.Beckhoff.TcHmiButton | undefined;
                /** combobox to import */
                protected __importCombobox: TcHmi.Controls.Beckhoff.TcHmiCombobox | undefined;
                /** Button to reference */
                protected __shareButton: TcHmi.Controls.Beckhoff.TcHmiButton | undefined;
                /** combobox to reference */
                protected __shareCombobox: TcHmi.Controls.Beckhoff.TcHmiCombobox | undefined;
                /** event destroyer functions */
                protected __eventDestroyers: DestroyFunction[];
                protected __elTemplateRoot: JQuery;
                protected __elPopupHeaderLabel: JQuery;
                protected __elUserGroupsContainer: JQuery;
                protected __elUserGroupsLabel: JQuery;
                protected __ellayoutsContainer: JQuery;
                protected __elUserSettingsContainer: JQuery;
                protected __ellayoutButtonContainer: JQuery;
                protected __ellayoutCloseBtn: CustomElements.CloseIcon;
                protected __elCurrentLayoutText: JQuery;
                protected __elCurrentLayoutContainer: JQuery;
                protected __elImportLayoutContainer: JQuery;
                protected __elshareLayoutContainer: JQuery;
                protected __elContainers: JQuery;
                protected __elSelectedUser: JQuery;
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
                protected __darkMode: boolean;
                setDarkMode(valueNew: boolean): void;
                getDarkMode(): boolean;
                protected __processDarkMode(): void;
                openPopup(): void;
                closePopup(): void;
                protected __createCurrentContainerContent(): void;
                protected __createImportContainerContent(): void;
                protected __createShareContainerContent(): void;
                protected __createCombobox(contentName: string): TcHmi.Controls.Beckhoff.TcHmiCombobox;
                protected __loadUsers(): void;
                protected __createUserEntry(userName: string): void;
                protected __loadLayoutsForUser(userName: string): void;
                protected __onResetButtonClick(): void;
                protected __onImportButtonClick(): void;
                protected __onShareButtonClick(): void;
                protected __copyDashboardLayouts(copyMode: E_SE_CopyLayoutMode, originUserID: string, symbol: string): void;
                protected __getUserLayouts(userName: string): void;
                protected __processUserLayouts(result: string): void;
                protected __createSetUserLayoutsCmd(newUserID: string, copySingleDashboardLayoutCmds: List<I_SE_SetLayoutCmd>, symbol: string, deleteLayouts?: boolean): void;
                protected __requestExSymbol(request: TcHmi.Server.IMessage): void;
                protected __initLocalizations(): void;
            }
        }
    }
}
