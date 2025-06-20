/*
 * Generated 7/19/2021 4:11:51 PM
 * Copyright (C) 2021
 */
var TcHmi;
(function (TcHmi) {
    let Controls;
    (function (Controls) {
        let Analytics;
        (function (Analytics) {
            class LayoutControllerPopup extends TcHmi.Controls.System.TcHmiControl {
                /*
                Attribute philosophy
                --------------------
                - Local variables are not set while definition in class, so they have the value 'undefined'.
                - On compile the Framework sets the value from HTML or from theme (possibly 'null') via normal setters.
                - The "changed detection" in the setter will result in processing the value only once while compile.
                - Attention: If we have a Server Binding on an Attribute the setter will be called once with null to initialize and later with the correct value.
                */
                /**
                 * Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element, pcElement, attrs) {
                    /**  Call base class constructor */
                    super(element, pcElement, attrs);
                    //#region Fields 
                    /** EventManager */
                    this.__eventManager = new Analytics.EventListenerManager();
                    /** Is true when the popup is open */
                    this.__isOpen = false;
                    /** Map of elements and their localization information */
                    this.__localizedElements = new Map();
                    /** Localization reader */
                    this.__localizationReader = undefined;
                    /** Localization watch function */
                    this.__destroyLocalizationWatch = null;
                    /** Keys of not-element-specific localizations */
                    this.__localKeys = {
                        Layout_Controller_Header_TextContent: 'Layout_Controller_Header_TextContent',
                        Layout_Controller_Users_TextContent: 'Layout_Controller_Users_TextContent',
                        Layout_Controller_Selected_User_TextContent: 'Layout_Controller_Selected_User_TextContent',
                        Layout_Controller_Layout_Mode_TextContent: 'Layout_Controller_Layout_Mode_TextContent',
                        Layout_Controller_Import_TextContent: 'Layout_Controller_Import_TextContent',
                        Layout_Controller_Shared_TextContent: 'Layout_Controller_Shared_TextContent',
                        Layout_Controller_Reset_Layouts: 'Layout_Controller_Reset_Layouts',
                        Layout_Controller_Reset_Confirm: 'Layout_Controller_Reset_Confirm',
                        Layout_Controller_Import_Layouts: 'Layout_Controller_Import_Layouts',
                        Layout_Controller_Import_Confirm: 'Layout_Controller_Import_Confirm',
                        Layout_Controller_Share_Layouts: 'Layout_Controller_Share_Layouts',
                        Layout_Controller_Share_Confirm: 'Layout_Controller_Share_Confirm',
                        Layout_Controller_Default_Layout: 'Layout_Controller_Default_Layout',
                        Layout_Controller_Custom_Layout: 'Layout_Controller_Custom_Layout',
                        Layout_Controller_Shared_Layout: 'Layout_Controller_Shared_Layout',
                        Layout_Controller_Multiple_User: 'Layout_Controller_Multiple_User',
                        Layout_Controller_Mixed_Layout: 'Layout_Controller_Mixed_Layout',
                        Layout_Controller_Reset_Success: 'Layout_Controller_Reset_Success',
                        Layout_Controller_Reset_Error: 'Layout_Controller_Reset_Error',
                        Layout_Controller_Import_Success: 'Layout_Controller_Import_Success',
                        Layout_Controller_Import_Error: 'Layout_Controller_Import_Error',
                        Layout_Controller_Share_Success: 'Layout_Controller_Share_Success',
                        Layout_Controller_Share_Error: 'Layout_Controller_Share_Error',
                    };
                    /** List of current users */
                    this.__currentUsers = [];
                    /** Selected user in the popup */
                    this.__selectedUser = "";
                    /** event destroyer functions */
                    this.__eventDestroyers = [];
                    this.__onResized = () => {
                        // Window resize (Control is positioned fixed on screen in an popup. The Contorl width/height will be ignored)
                        return () => {
                        };
                    };
                }
                //#endregion
                /**
                  * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                  * Call attribute processor functions here to initialize default values!
                  */
                __previnit() {
                    // Call __previnit of base class
                    super.__previnit();
                    this.__elTemplateRoot = this.__element.find('.tchmi-analytics-layout-controller-popup-template');
                    this.__elPopupHeaderLabel = this.__element.find('.tchmi-analytics-layout-controllers-popup-header-label');
                    this.__elUserGroupsContainer = this.__element.find('.tchmi-analytics-layout-controller-popup-users-container');
                    this.__elUserGroupsLabel = this.__element.find('.tchmi-analytics-layout-controller-popup-users-label');
                    this.__ellayoutsContainer = this.__element.find('.tchmi-analytics-layout-controller-popup-layouts-container');
                    this.__elUserSettingsContainer = this.__element.find('.tchmi-analytics-layout-controller-popup-layouts-selector-entry');
                    this.__ellayoutButtonContainer = this.__element.find('.tchmi-analytics-layout-controller-popup-layouts-menu-container');
                    this.__elCurrentLayoutContainer = this.__element.find('.tchmi-analytics-layout-controller-popup-layouts-current-layout-container');
                    this.__elImportLayoutContainer = this.__element.find('.tchmi-analytics-layout-controller-popup-layouts-import-layout-container');
                    this.__elshareLayoutContainer = this.__element.find('.tchmi-analytics-layout-controller-popup-layouts-reference-layout-container');
                    this.__elCurrentLayoutText = this.__element.find('.tchmi-analytics-layout-controller-popup-layouts-current-layout-text');
                    this.__elContainers = this.__element.find('.tchmi-analytics-layout-controller-popup-layouts-container');
                    this.__elSelectedUser = this.__element.find('.tchmi-analytics-layout-controller-popup-layouts-selected-user-text');
                    this.__ellayoutCloseBtn = this.__element[0].querySelector('.tchmi-analytics-layout-controller-popup-close-button');
                    this.__ellayoutCloseBtn.backgroundPathColor = "black";
                    this.__eventManager.addEventListener(this.__ellayoutCloseBtn, "mousedown", () => this.closePopup());
                }
                __init() {
                    super.__init();
                    this.__createCurrentContainerContent();
                    this.__createImportContainerContent();
                    this.__createShareContainerContent();
                }
                __attach() {
                    super.__attach();
                }
                __detach() {
                    super.__detach();
                }
                destroy() {
                    if (this.__keepAlive) {
                        return;
                    }
                    this.__eventManager.removeEventListeners();
                    super.destroy();
                }
                setDarkMode(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toBoolean(valueNew);
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal('DarkMode');
                    }
                    if (convertedValue === this.__darkMode) {
                        return;
                    }
                    this.__darkMode = convertedValue;
                    this.__processDarkMode();
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getDarkMode"]);
                }
                getDarkMode() {
                    return this.__darkMode;
                }
                __processDarkMode() {
                }
                //#endregion
                //#region methods
                //#region OpenClose-Popup
                openPopup() {
                    this.__initLocalizations();
                    this.__selectedUser = "";
                    const elLabels = this.__element.find(".tchmi-analytics-layout-controller-popup-users-entry");
                    elLabels.removeClass("tchmi-analytics-layout-controller-popup-users-entry-selected");
                    this.__elContainers.addClass("tchmi-analytics-layout-controller-popup-layouts-container-hidden");
                    this.__loadUsers();
                    this.__isOpen = true;
                    $('.tchmi-analytics-layout-controller-popup').toggleClass("tchmi-analytics-layout-controller-popup-dark", this.__darkMode);
                    $('.tchmi-analytics-layout-controller-popup-users-label').toggleClass("tchmi-analytics-layout-controller-popup-users-label-dark", this.__darkMode);
                    $('.tchmi-analytics-layout-controller-popup-permissions-selector-entry').toggleClass("tchmi-analytics-layout-controller-popup-permissions-selector-entry-dark", this.__darkMode);
                    $('.tchmi-analytics-layout-controller-popup-layouts-text').toggleClass("tchmi-analytics-layout-controller-popup-layouts-text-dark", this.__darkMode);
                    this.__elTemplateRoot.css("display", "block");
                }
                closePopup() {
                    this.__isOpen = false;
                    this.__elTemplateRoot.css("display", "none");
                }
                __createCurrentContainerContent() {
                    if (TcHmi.Controls.get(this.getId() + '.ResetButton') === undefined) {
                        this.__resetButton = TcHmi.ControlFactory.createEx('TcHmi.Controls.Beckhoff.TcHmiButton', this.getId() + '.ResetButton', {
                            'data-tchmi-text': "Reset Layouts",
                        }, this);
                        if (this.__resetButton) {
                            this.__resetButton.getElement()[0].classList.add('tchmi-analytics-layout-controller-popup-layouts-menu-button');
                            this.__eventDestroyers.push(TcHmi.EventProvider.register(this.getId() + '.ResetButton.onPressed', () => this.__onResetButtonClick()));
                            this.__elCurrentLayoutContainer.append(this.__resetButton.getElement()[0]);
                        }
                    }
                }
                __createImportContainerContent() {
                    this.__importCombobox = this.__createCombobox("import-cb");
                    this.__elImportLayoutContainer.append(this.__importCombobox.getElement()[0]);
                    if (TcHmi.Controls.get(this.getId() + '.ImportButton') === undefined) {
                        this.__importButton = TcHmi.ControlFactory.createEx('TcHmi.Controls.Beckhoff.TcHmiButton', this.getId() + '.ImportButton', {
                            'data-tchmi-text': "Import Layouts",
                        }, this);
                        if (this.__importButton) {
                            this.__importButton.getElement()[0].classList.add('tchmi-analytics-layout-controller-popup-layouts-menu-button');
                            this.__eventDestroyers.push(TcHmi.EventProvider.register(this.getId() + '.ImportButton.onPressed', () => this.__onImportButtonClick()));
                            this.__elImportLayoutContainer.append(this.__importButton.getElement()[0]);
                        }
                    }
                }
                __createShareContainerContent() {
                    this.__shareCombobox = this.__createCombobox("share-cb");
                    this.__elshareLayoutContainer.append(this.__shareCombobox.getElement()[0]);
                    if (TcHmi.Controls.get(this.getId() + '.ShareButton') === undefined) {
                        this.__shareButton = TcHmi.ControlFactory.createEx('TcHmi.Controls.Beckhoff.TcHmiButton', this.getId() + '.ShareButton', {
                            'data-tchmi-text': "Share Layouts",
                        }, this);
                        if (this.__shareButton) {
                            this.__shareButton.getElement()[0].classList.add('tchmi-analytics-layout-controller-popup-layouts-menu-button');
                            this.__eventDestroyers.push(TcHmi.EventProvider.register(this.getId() + '.ShareButton.onPressed', () => this.__onShareButtonClick()));
                            this.__elshareLayoutContainer.append(this.__shareButton.getElement()[0]);
                        }
                    }
                }
                __createCombobox(contentName) {
                    //Create Store Button
                    let combobox = TcHmi.Controls.get(`${contentName}.Combobox`);
                    if (combobox == undefined) {
                        combobox = TcHmi.ControlFactory.createEx('TcHmi.Controls.Beckhoff.TcHmiCombobox', `${contentName}.Combobox`, {}, this);
                        if (combobox) {
                            combobox.getElement()[0].classList.add('tchmi-analytics-layout-controller-popup-layouts-menu');
                            combobox.setSrcData(this.__currentUsers);
                        }
                    }
                    return combobox;
                }
                //#endregion OpenClose-Popup
                //#region LoadUsers
                __loadUsers() {
                    // Get all users
                    const _this = this;
                    TcHmi.Server.UserManagement.listUsers(function (data) {
                        // Callback to create entries
                        if (data.error === TcHmi.Errors.NONE) {
                            for (let userName in data.userDetails) {
                                if (_this.__currentUsers.find(a => a == userName) == null) {
                                    _this.__createUserEntry(userName);
                                    _this.__currentUsers.push(userName);
                                }
                            }
                            _this.__importCombobox.setSrcData(_this.__currentUsers);
                            _this.__shareCombobox.setSrcData(_this.__currentUsers);
                        }
                        else {
                            _this.createPopupFnct("Error reading users", CustomElements.PopupStatus.ALARM, 5000);
                        }
                    });
                }
                __createUserEntry(userName) {
                    // Add a new user group entry
                    const elGroupEntryWrapper = document.createElement("div");
                    elGroupEntryWrapper.classList.add("tchmi-analytics-layout-controller-popup-users-entry-wrapper");
                    const elGroupEntry = document.createElement("div");
                    elGroupEntry.innerHTML = userName;
                    elGroupEntry.classList.add("tchmi-analytics-layout-controller-popup-users-entry");
                    if (this.__darkMode)
                        elGroupEntry.classList.add("tchmi-analytics-layout-controller-popup-users-entry-dark");
                    elGroupEntryWrapper.appendChild(elGroupEntry);
                    this.__elUserGroupsContainer.append(elGroupEntryWrapper);
                    this.__eventManager.addEventListener(elGroupEntryWrapper, "mousedown", () => this.__loadLayoutsForUser(userName));
                }
                __loadLayoutsForUser(userName) {
                    // Highlight the selected user group
                    const elLabels = this.__element.find(".tchmi-analytics-layout-controller-popup-users-entry");
                    elLabels.removeClass("tchmi-analytics-layout-controller-popup-users-entry-selected");
                    for (let i = 0; i < elLabels.length; i++) {
                        if (elLabels[i].innerHTML == userName) {
                            elLabels[i].classList.add("tchmi-analytics-layout-controller-popup-users-entry-selected");
                            break;
                        }
                    }
                    this.__selectedUser = userName;
                    this.__elSelectedUser[0].textContent = userName;
                    this.__elContainers.removeClass("tchmi-analytics-layout-controller-popup-layouts-container-hidden");
                    this.__getUserLayouts(this.__selectedUser);
                }
                //#endregion LoadUsers
                //#region UserCommands
                __onResetButtonClick() {
                    if (confirm(this.__localizationReader.get(this.__localKeys.Layout_Controller_Reset_Confirm)))
                        this.__createSetUserLayoutsCmd(this.__selectedUser, null, "ResetUserLayouts", true);
                }
                __onImportButtonClick() {
                    if (confirm(this.__localizationReader.get(this.__localKeys.Layout_Controller_Import_Confirm))) {
                        const selected = this.__importCombobox.getSelectedText();
                        if (selected != null && selected != "")
                            this.__copyDashboardLayouts(Controls.E_SE_CopyLayoutMode.COPY, selected, "ImportUserLayouts");
                    }
                }
                __onShareButtonClick() {
                    if (confirm(this.__localizationReader.get(this.__localKeys.Layout_Controller_Share_Confirm))) {
                        const selected = this.__shareCombobox.getSelectedText();
                        if (selected != null && selected != "")
                            this.__copyDashboardLayouts(Controls.E_SE_CopyLayoutMode.REFERENCE, selected, "ShareUserLayouts");
                    }
                }
                __copyDashboardLayouts(copyMode, originUserID, symbol) {
                    const newUserID = this.__selectedUser;
                    const cmds = new TcHmi.List();
                    const copyAllFromCurrentUserCmd = new Controls.I_SE_SetLayoutCmd;
                    copyAllFromCurrentUserCmd.UserID = originUserID;
                    copyAllFromCurrentUserCmd.CopyMode = copyMode;
                    cmds.push(copyAllFromCurrentUserCmd);
                    this.__createSetUserLayoutsCmd(newUserID, cmds, symbol, true);
                }
                //#endregion UserCommands
                //#region Server-Extension Requests and Callbacks
                __getUserLayouts(userName) {
                    // Request user layouts
                    const getUserLayoutsRequest = {
                        'requestType': 'ReadWrite',
                        "commands": [
                            {
                                "symbol": "TcHmiAnalytics.GetUserLayouts",
                                "readValue": "",
                                "writeValue": userName,
                                "commandOptions": ["SendErrorMessage", "SendWriteValue"]
                            }
                        ]
                    };
                    this.__requestExSymbol(getUserLayoutsRequest);
                }
                __processUserLayouts(result) {
                    // Process received layouts of the user
                    var userLayouts = JSON.parse(result);
                    let hasOnlyCustomLayouts = true;
                    let hasOnlySharedLayouts = true;
                    let hasLayouts = false;
                    let sharerUserNames = [];
                    if (userLayouts != null) {
                        for (const userLayout of userLayouts) {
                            hasLayouts = true;
                            if (userLayout.layoutID.startsWith(`${userLayout.userID}__`)) {
                                // Layout is of the user
                                hasOnlySharedLayouts = false;
                            }
                            else {
                                // Layout is of the user
                                hasOnlyCustomLayouts = false;
                                const splits = userLayout.layoutID.split("__");
                                const sharerUserName = splits.length > 1 ? (splits[0].length > 0 ? splits[0] : splits[1]) : "";
                                if (sharerUserName != "" && sharerUserNames.find(a => a == sharerUserName) == null)
                                    sharerUserNames.push(sharerUserName);
                            }
                        }
                    }
                    if (!hasLayouts) {
                        // Show default
                        this.__elCurrentLayoutText[0].textContent = this.__localizationReader.get(this.__localKeys.Layout_Controller_Default_Layout);
                    }
                    else if (hasOnlyCustomLayouts) {
                        // Show custom
                        this.__elCurrentLayoutText[0].textContent = this.__localizationReader.get(this.__localKeys.Layout_Controller_Custom_Layout);
                    }
                    else if (hasOnlySharedLayouts) {
                        // Show shard --> and userid!!
                        if (sharerUserNames.length == 1)
                            this.__elCurrentLayoutText[0].textContent = `${this.__localizationReader.get(this.__localKeys.Layout_Controller_Shared_Layout)} ${sharerUserNames[0]}`;
                        else
                            this.__elCurrentLayoutText[0].textContent = `${this.__localizationReader.get(this.__localKeys.Layout_Controller_Shared_Layout)} ${this.__localizationReader.get(this.__localKeys.Layout_Controller_Multiple_User)}`;
                    }
                    else {
                        // Show Mixed
                        this.__elCurrentLayoutText[0].textContent = this.__localizationReader.get(this.__localKeys.Layout_Controller_Mixed_Layout);
                    }
                }
                __createSetUserLayoutsCmd(newUserID, copySingleDashboardLayoutCmds, symbol, deleteLayouts = false) {
                    const cmd = new Controls.I_SE_SetUserLayoutsRequest();
                    cmd.NewUserID = newUserID;
                    cmd.CopySingleDashboardLayoutCmds = copySingleDashboardLayoutCmds;
                    cmd.DeleteLayouts = deleteLayouts;
                    const setPersistentDataRequest = {
                        'requestType': 'ReadWrite',
                        "commands": [
                            {
                                "symbol": `TcHmiAnalytics.${symbol}`,
                                "readValue": "",
                                "writeValue": JSON.stringify(cmd),
                                "commandOptions": ["SendErrorMessage", "SendWriteValue"]
                            }
                        ]
                    };
                    this.__requestExSymbol(setPersistentDataRequest);
                }
                __requestExSymbol(request) {
                    let _this = this;
                    // Send the request to TwinCAT HMI Server
                    if (TcHmi.Server.isWebsocketReady()) {
                        TcHmi.Server.request(request, function (data) {
                            const response = data.response;
                            if (!response || response.error !== undefined) {
                                // Handle TwinCAT HMI Server response level error here.
                                console.log("Error with server-extension communication");
                            }
                            const commands = response.commands;
                            if (commands === undefined) {
                                console.error("Commands undefined");
                            }
                            for (var i = 0, ii = commands.length; i < ii; i++) {
                                const command = commands[i];
                                if (command.symbol === "TcHmiAnalytics.GetUserLayouts") {
                                    // Handle when new value is stored...
                                    _this.__processUserLayouts(String(command.readValue));
                                }
                                else if (command.symbol === "TcHmiAnalytics.ResetUserLayouts") {
                                    // Handle when new value is stored...
                                    _this.__loadLayoutsForUser(_this.__selectedUser);
                                    if (command.error != undefined)
                                        _this.createPopupFnct(_this.__localizationReader.get(_this.__localKeys.Layout_Controller_Reset_Error), CustomElements.PopupStatus.ALARM, 5000);
                                    else
                                        _this.createPopupFnct(_this.__localizationReader.get(_this.__localKeys.Layout_Controller_Reset_Success), CustomElements.PopupStatus.OK, 3000);
                                }
                                else if (command.symbol === "TcHmiAnalytics.ImportUserLayouts") {
                                    // Handle when new value is stored...
                                    _this.__loadLayoutsForUser(_this.__selectedUser);
                                    if (command.error != undefined)
                                        _this.createPopupFnct(_this.__localizationReader.get(_this.__localKeys.Layout_Controller_Import_Error), CustomElements.PopupStatus.ALARM, 5000);
                                    else
                                        _this.createPopupFnct(_this.__localizationReader.get(_this.__localKeys.Layout_Controller_Import_Success), CustomElements.PopupStatus.OK, 3000);
                                }
                                else if (command.symbol === "TcHmiAnalytics.ShareUserLayouts") {
                                    // Handle when new value is stored...
                                    _this.__loadLayoutsForUser(_this.__selectedUser);
                                    if (command.error != undefined)
                                        _this.createPopupFnct(_this.__localizationReader.get(_this.__localKeys.Layout_Controller_Share_Error), CustomElements.PopupStatus.ALARM, 5000);
                                    else
                                        _this.createPopupFnct(_this.__localizationReader.get(_this.__localKeys.Layout_Controller_Share_Success), CustomElements.PopupStatus.OK, 3000);
                                }
                                if (command.error !== undefined) {
                                    // Handle TwinCAT HMI Server command level error here.
                                    console.log("error with server-extension command");
                                }
                                // Handle result...
                                TcHmi.Log.debug(command.symbol + '=' + command.readValue); // TS knows this is a boolean
                            }
                        });
                    }
                    else {
                        console.error("No request send, because websocket connection not ready!");
                    }
                }
                //#endregion Server-Extension Requests and Callbacks
                //#region Localizations
                __initLocalizations() {
                    // Localization
                    const localizedElements = this.__element[0].querySelectorAll('[data-tchmi-localized-content-key]');
                    for (let i = 0, ii = localizedElements.length; i < ii; i++) {
                        let element = localizedElements[i];
                        let localizeKey = element.dataset.tchmiLocalizedContentKey;
                        if (localizeKey) {
                            this.__localizedElements.set(element, { key: localizeKey });
                        }
                    }
                    this.__destroyLocalizationWatch = this.__localization.watch((data) => {
                        var _a, _b, _c;
                        if (data.error !== TcHmi.Errors.NONE) {
                            return;
                        }
                        if (!data.reader) {
                            return;
                        }
                        this.__localizationReader = data.reader;
                        for (const [info, key] of this.__localizedElements) {
                            let localizedText = data.reader.get(key.key);
                            if (key.key.includes('Tooltip')) {
                                info.title = tchmi_decode_control_characters(localizedText);
                            }
                            else {
                                info.textContent = tchmi_decode_control_characters(localizedText);
                            }
                        }
                        (_a = this.__resetButton) === null || _a === void 0 ? void 0 : _a.setText(this.__localizationReader.get(this.__localKeys.Layout_Controller_Reset_Layouts));
                        (_b = this.__importButton) === null || _b === void 0 ? void 0 : _b.setText(this.__localizationReader.get(this.__localKeys.Layout_Controller_Import_Layouts));
                        (_c = this.__shareButton) === null || _c === void 0 ? void 0 : _c.setText(this.__localizationReader.get(this.__localKeys.Layout_Controller_Share_Layouts));
                    });
                }
            }
            Analytics.LayoutControllerPopup = LayoutControllerPopup;
        })(Analytics = Controls.Analytics || (Controls.Analytics = {}));
    })(Controls = TcHmi.Controls || (TcHmi.Controls = {}));
})(TcHmi || (TcHmi = {}));
/**
* Register Control
*/
TcHmi.Controls.registerEx('LayoutControllerPopup', 'TcHmi.Controls.Analytics', TcHmi.Controls.Analytics.LayoutControllerPopup);
//# sourceMappingURL=LayoutControllerPopup.js.map