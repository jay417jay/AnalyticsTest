declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            class SourceManagerPopup extends TcHmi.Controls.System.TcHmiControl {
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
                protected __receivedDataSourcesRaw: string;
                /** Drag Drop Source from TargetBrowser*/
                protected __dragDropTbSource: I_SE_DataSourceEntry;
                /** ID of the setInterval to request the datasources (normal)*/
                protected __normalRefreshID: number;
                /** ID of the setInterval to request the datasources (after updating config)*/
                protected __updateConfigRefreshID: number;
                /** Counter for updates after refresh a source*/
                protected __updateCounter: number;
                /** If true the update will be silent*/
                protected __isSourceRefresh: boolean;
                /** Popup handling*/
                createPopupFnct: (message: string, status: CustomElements.PopupStatus, timeInMs: number) => void;
                /** Certificate handling*/
                protected __certFileHandler: HTMLElement;
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
                    Data_Source_Management_TextContent: string;
                    Data_Source_TextContent: string;
                    Drop_Source_TextContent: string;
                    Publish_Dropped_Source_Tooltip: string;
                    Add_New_Source_Tooltip: string;
                    Reset_Source_Tooltip: string;
                    Delete_Source_Tooltip: string;
                    Save_Source_Tooltip: string;
                    Refresh_Source_Tooltip: string;
                    Source_ID_TextContent: string;
                    Message_Broker_TextContent: string;
                    Broker_Port_TextContent: string;
                    Topic_TextContent: string;
                    Stream_Topic_TextContent: string;
                    Layout__TextContent: string;
                    Stream_System_ID_TextContent: string;
                    User_ID_TextContent: string;
                    Password_TextContent: string;
                    With_Certificate_TextContent: string;
                    CA_Path_TextContent: string;
                    CERT_Path_TextContent: string;
                    Key_Path_TextContent: string;
                    Key_Password_TextContent: string;
                    Status_Obsolete_Tooltip: string;
                    Save_Success_Message: string;
                    Save_Failed_Message: string;
                    Error_Reading_Sources: string;
                    Error_Layout_Guid_Invalid: string;
                    Error_Layout_Guid_Empty: string;
                    Error_StreamSystemID_Invalid: string;
                    Error_StreamSystemID_Empty: string;
                    No_Cert: string;
                    Remove_Cert_Request: string;
                    Add_Cert: string;
                    Remove_Source: string;
                    Select_Cert: string;
                    Remove_Cert: string;
                    CycleTime: string;
                };
                protected __elTemplateRoot: JQuery;
                protected __elPopupHeader: JQuery;
                protected __elPopupHeaderLabel: JQuery;
                protected __elDataSourcesContainer: JQuery;
                protected __elUserGroupsLabel: JQuery;
                protected __elPermissionLabels: JQuery;
                protected __elPermissionButtonContainer: JQuery;
                protected __elPermissionCloseBtn: CustomElements.CloseIcon;
                protected __elAddArea: JQuery;
                protected __elUploadButton: JQuery;
                protected __elAddButton: JQuery;
                /**
                  * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                  * Call attribute processor functions here to initialize default values!
                  */
                __previnit(): void;
                protected readonly __htmlCodeCloseIcon: string;
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
                protected __resetContent(): void;
                protected __processReceivedDataSources(): void;
                protected __createSummaryString(fullDataSource: I_SE_DataSourceEntry, withStatus?: boolean): string;
                protected __createDataSourceEntry(fullDataSource: I_SE_DataSourceEntry, detailsElement?: HTMLDetailsElement, appendToList?: boolean): HTMLElement;
                protected __onCertUploadClicked(elInput: HTMLInputElement): void;
                protected __onCertRemoveClicked(elText: HTMLElement, elFileInput: HTMLInputElement): void;
                protected __onCERTInputChanged(elText: HTMLElement, elInput: HTMLInputElement): void;
                protected __onInputChanged(elInput: HTMLElement): void;
                protected __setSummaryHeader(summaryElement: HTMLElement, fullDataSource: I_SE_DataSourceEntry, detailsElement: HTMLDetailsElement, oldDataSource: I_SE_DataSourceEntry): void;
                protected __resetEntry(entry: HTMLDetailsElement, fullDataSource: I_SE_DataSourceEntry): (e: CustomEvent) => void;
                protected __refreshEntry(entry: HTMLDetailsElement, oldDataSource: I_SE_DataSourceEntry): (e: CustomEvent) => void;
                protected __saveEntry(entry: HTMLDetailsElement, oldDataSource: I_SE_DataSourceEntry): (e: CustomEvent) => void;
                protected __readFileData(elCa: HTMLInputElement, elCert: HTMLInputElement, elKey: HTMLInputElement, dataSource: I_SE_DataSourceEntry, oldDataSource: I_SE_DataSourceEntry): void;
                protected __onCertFilesRead(elCa: HTMLInputElement, elCert: HTMLInputElement, elKey: HTMLInputElement, dataSource: I_SE_DataSourceEntry, oldDataSource: I_SE_DataSourceEntry, fileDatas: (string | null)[]): void;
                protected __onTargetBrowserDragOver(): (e: any) => void;
                protected __onBeforeUploadTBDrop(): (e: any) => void;
                protected __uploadTargetBrowserDrop(): void;
                protected __uploadTBDrop(): void;
                protected __uploadTBDropWithCERT_Files(): void;
                protected __showCertFilesPopup(): void;
                protected __addNewEntry(): void;
                protected __refreshAfterUpdate(): void;
                requestDataSources(): void;
                protected __saveDataSource(fullDataSource: I_SE_DataSourceEntry): void;
                protected __deleteDataSource(fullDataSource: I_SE_DataSourceEntry, detailsElement: HTMLDetailsElement): void;
                protected __requestExSymbol(request: TcHmi.Server.IMessage): void;
                protected __initLocalizations(): void;
            }
        }
    }
}
