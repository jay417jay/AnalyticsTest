var TcHmi;
(function (TcHmi) {
    var Controls;
    (function (Controls) {
        var Analytics;
        (function (Analytics) {
            class DataChartPropertyHandler extends EventTarget {
                //#region Ctor
                constructor(parentElement, chartDataSources, defaultColors, calendar, createPopupFunction, localizationReader, localKeys) {
                    super();
                    /** Localization reader */
                    this.__localizationReader = undefined;
                    this.__noSymbolSelected = "No symbol selected";
                    /** if false the visibility can be set foreach channel */
                    this.__useGeneralVisibility = true;
                    this.__selectedChannels = [];
                    /** User selected timerange entries */
                    this.timerangeEntries = [];
                    this.__parent = parentElement;
                    this.__eventListenerManager = new Analytics.EventListenerManager();
                    this.__chartDataSources = chartDataSources;
                    this.__defaultColors = defaultColors;
                    this.__elCalendar = calendar;
                    this.createPopupFnctCallback = createPopupFunction;
                    this.__localizationReader = localizationReader;
                    this.__localKeys = localKeys;
                    this.setOptions();
                }
                set chartDataSources(value) {
                    this.__chartDataSources = value;
                }
                set selectedChannels(value) {
                    this.__selectedChannels = value;
                }
                //#endregion
                //#region Methods
                setOptions() {
                    // Options for different timeranges
                    const thisStr = this.__localizationReader.get(this.__localKeys.This);
                    const this_MaskulinStr = this.__localizationReader.get(this.__localKeys.This_Maskulin);
                    const this_NeutralStr = this.__localizationReader.get(this.__localKeys.This_Neutral);
                    const SoFarStr = this.__localizationReader.get(this.__localKeys.SoFar);
                    const previousStr = this.__localizationReader.get(this.__localKeys.Previous);
                    const previous_MaskulinStr = this.__localizationReader.get(this.__localKeys.Previous_Maskulin);
                    const previous_NeutralStr = this.__localizationReader.get(this.__localKeys.Previous_Neutral);
                    const pastStr = this.__localizationReader.get(this.__localKeys.Past);
                    const past_MaskulinStr = this.__localizationReader.get(this.__localKeys.Past_Maskulin);
                    const past_NeutralStr = this.__localizationReader.get(this.__localKeys.Past_Neutral);
                    const pastPluralStr = this.__localizationReader.get(this.__localKeys.Past_Plural);
                    const minutesStr = this.__localizationReader.get(this.__localKeys.Minutes);
                    const hoursStr = this.__localizationReader.get(this.__localKeys.Hours);
                    const daysStr = this.__localizationReader.get(this.__localKeys.Days);
                    const weeksStr = this.__localizationReader.get(this.__localKeys.Weeks);
                    const monthsStr = this.__localizationReader.get(this.__localKeys.Months);
                    const yearsStr = this.__localizationReader.get(this.__localKeys.Years);
                    const yesterdayStr = this.__localizationReader.get(this.__localKeys.Yesterday);
                    const todayStr = this.__localizationReader.get(this.__localKeys.Today);
                    const dayBeforeYesterdayStr = this.__localizationReader.get(this.__localKeys.DayBeforeYesterday);
                    const minuteStr = this.__localizationReader.get(this.__localKeys.Minute);
                    const hourStr = this.__localizationReader.get(this.__localKeys.Hour);
                    const dayStr = this.__localizationReader.get(this.__localKeys.Day);
                    const weekStr = this.__localizationReader.get(this.__localKeys.Week);
                    const monthStr = this.__localizationReader.get(this.__localKeys.Month);
                    const yearStr = this.__localizationReader.get(this.__localKeys.Year);
                    this.timerangeOptions = [
                        { fromValue: `now-10m`, toValue: "now", text: `${pastPluralStr} 10 ${minutesStr}` },
                        { fromValue: `now-15m`, toValue: "now", text: `${pastPluralStr} 15 ${minutesStr}` },
                        { fromValue: `now-30m`, toValue: "now", text: `${pastPluralStr} 30 ${minutesStr}` },
                        { fromValue: `now-1h/h`, toValue: "now-1h/h", text: `${previousStr} ${hourStr}` },
                        { fromValue: `now/h`, toValue: "now/h", text: `${thisStr} ${hourStr}` },
                        { fromValue: `now/h`, toValue: "now", text: `${thisStr} ${hourStr} ${SoFarStr}` },
                        { fromValue: `now-1h`, toValue: "now", text: `${pastStr} 1 ${hourStr}` },
                        { fromValue: `now-3h`, toValue: "now", text: `${pastPluralStr} 3 ${hoursStr}` },
                        { fromValue: `now-6h`, toValue: "now", text: `${pastPluralStr} 6 ${hoursStr}` },
                        { fromValue: `now-12h`, toValue: "now", text: `${pastPluralStr} 12 ${hoursStr}` },
                        { fromValue: `now-1d/d`, toValue: "now-1d/d", text: `${yesterdayStr}` },
                        { fromValue: `now-2d/d`, toValue: "now-2d/d", text: `${dayBeforeYesterdayStr}` },
                        { fromValue: `now/d`, toValue: "now/d", text: `${todayStr}` },
                        { fromValue: `now/d`, toValue: "now", text: `${todayStr} ${SoFarStr}` },
                        { fromValue: `now-1d`, toValue: "now", text: `${past_MaskulinStr} 1 ${dayStr}` },
                        { fromValue: `now-2d`, toValue: "now", text: `${pastPluralStr} 2 ${daysStr}` },
                        { fromValue: `now-3d`, toValue: "now", text: `${pastPluralStr} 3 ${daysStr}` },
                        { fromValue: `now-1w/w`, toValue: "now-1w/w", text: `${previousStr} ${weekStr}` },
                        { fromValue: `now/w`, toValue: "now/w", text: `${thisStr} ${weekStr}` },
                        { fromValue: `now/w`, toValue: "now", text: `${thisStr} ${weekStr} ${SoFarStr}` },
                        { fromValue: `now-1w`, toValue: "now", text: `${pastStr} 1 ${weekStr}` },
                        { fromValue: `now-2w`, toValue: "now", text: `${pastPluralStr} 2 ${weeksStr}` },
                        { fromValue: `now-3w`, toValue: "now", text: `${pastPluralStr} 3 ${weeksStr}` },
                        { fromValue: `now-4w`, toValue: "now", text: `${pastPluralStr} 4 ${weeksStr}` },
                        { fromValue: `now-6w`, toValue: "now", text: `${pastPluralStr} 6 ${weeksStr}` },
                        { fromValue: `now-8w`, toValue: "now", text: `${pastPluralStr} 8 ${weeksStr}` },
                        { fromValue: `now-1M/M`, toValue: "now-1M/M", text: `${previous_MaskulinStr} ${monthStr}` },
                        { fromValue: `now/M`, toValue: "now/M", text: `${this_MaskulinStr} ${monthStr}` },
                        { fromValue: `now/M`, toValue: "now", text: `${this_MaskulinStr} ${monthStr} ${SoFarStr}` },
                        { fromValue: `now-1M`, toValue: "now", text: `${past_MaskulinStr} 1 ${monthStr}` },
                        { fromValue: `now-2M`, toValue: "now", text: `${pastPluralStr} 2 ${monthsStr}` },
                        { fromValue: `now-3M`, toValue: "now", text: `${pastPluralStr} 3 ${monthsStr}` },
                        { fromValue: `now-1y/y`, toValue: "now-1y/y", text: `${previous_NeutralStr} ${yearStr}` },
                        { fromValue: `now/y`, toValue: "now/y", text: `${this_NeutralStr} ${yearStr}` },
                        { fromValue: `now/y`, toValue: "now", text: `${this_NeutralStr} ${yearStr} ${SoFarStr}` },
                        { fromValue: `now-1y`, toValue: "now", text: `${past_NeutralStr} 1 ${yearStr}` },
                        { fromValue: `now-2y`, toValue: "now", text: `${past_NeutralStr} 2 ${yearsStr}` },
                    ];
                }
                createPopupFnct(message, status, timeInMs, suppress = false, namespace = "") {
                    this.createPopupFnctCallback(message, status, timeInMs, suppress, namespace);
                }
                //#region Channel-Handling
                appendChannelEntry() {
                    let _this = this;
                    return () => {
                        // Add a variable entry if possible
                        let chartElements = document.getElementsByClassName("tchmi-analytics-chart-channel-config-area")[0];
                        let length = chartElements.children.length - 1;
                        if (length < 10) {
                            this.addChannelEntry(chartElements, null);
                            this.__onChartPropertyChanged(true)();
                        }
                        if ((length + 1) == 10) {
                            // Set button color to grey
                            chartElements.lastChild.style.color = "red";
                            chartElements.lastChild.title = "You cannot add more than 10 channels to the chart";
                            chartElements.lastChild.disabled = true;
                            this.createPopupFnct("You cannot add more than 10 channels to the chart", CustomElements.PopupStatus.ALARM, 3000);
                        }
                    };
                }
                addChannelEntry(chartElements, selectedChannel) {
                    // Get the current variables
                    let length = chartElements.children.length - 1;
                    // Create details element
                    const details = document.createElement('details');
                    details.classList.add("tchmi-analytics-control-chart-channel-details");
                    // Create summary element
                    const summary = document.createElement('summary');
                    summary.classList.add("tchmi-analytics-control-chart-channel-summary");
                    // Create icon and label for summary 
                    let summaryIcon = document.createElement('div');
                    summaryIcon.classList.add('tchmi-analytics-control-chart-label');
                    let summaryLabel = document.createElement('label');
                    summaryLabel.classList.add('tchmi-analytics-control-chart-label-channel');
                    summaryLabel.innerText = selectedChannel != null ? selectedChannel.name : this.__noSymbolSelected;
                    summaryLabel.addEventListener('click', () => {
                        details.open = !details.open;
                    });
                    // Create property entries for details
                    // Symbol selection label
                    const symbolPropertyLabel = document.createElement("div");
                    symbolPropertyLabel.classList.add('tchmi-analytics-control-variable-entry-property-label');
                    symbolPropertyLabel.textContent = `${this.__localizationReader.get(this.__localKeys.Acquisition)}`;
                    // Symbol selection autocomplete
                    let autocomplete = document.createElement('auto-search-select');
                    autocomplete.classList.add('tchmi-analytics-control-variable-entry-symbol-input');
                    autocomplete.defaultText = `${this.__localizationReader.get(this.__localKeys.Choose_Variable)}...`;
                    autocomplete.selectSelectWidth = "185px";
                    const selectItems = [];
                    for (let datasource of this.__chartDataSources) {
                        const optionGroupItem = {};
                        optionGroupItem.displayText = String(datasource.streamTopic);
                        optionGroupItem.value = JSON.stringify(datasource);
                        optionGroupItem.isSelectable = false;
                        selectItems.push(optionGroupItem);
                        for (let channel of datasource.channels) {
                            const optionItem = {};
                            optionItem.displayText = String(channel.name);
                            optionItem.value = JSON.stringify(channel);
                            optionItem.isSelectable = true;
                            selectItems.push(optionItem);
                        }
                    }
                    autocomplete.selectItems = selectItems;
                    if (selectedChannel != null) {
                        autocomplete.selectedItem = selectItems.filter(a => a.value.includes(selectedChannel.sourceID) && a.displayText.includes(selectedChannel.name))[0];
                    }
                    // Symbol selection properties
                    const symbolPropertyEntry = document.createElement("div");
                    symbolPropertyEntry.classList.add('tchmi-analytics-control-variable-entry-property');
                    symbolPropertyEntry.appendChild(symbolPropertyLabel);
                    symbolPropertyEntry.appendChild(autocomplete);
                    details.appendChild(symbolPropertyEntry);
                    // Color and visibility selection
                    this.__createChannelColorObject(details, chartElements, selectedChannel, summaryIcon);
                    // Unit selection label
                    const unitPropertyLabel = document.createElement("div");
                    unitPropertyLabel.classList.add('tchmi-analytics-control-variable-entry-property-label');
                    unitPropertyLabel.textContent = `Unit`;
                    // Unit selection input
                    const unitPropertyInput = document.createElement("input");
                    unitPropertyInput.classList.add('tchmi-analytics-control-variable-entry-property-input');
                    unitPropertyInput.classList.add('tchmi-analytics-control-variable-entry-unit-input');
                    unitPropertyInput.value = selectedChannel != null ? Analytics.ChannelConfigHelper.GetChannelUnit(selectedChannel) : "";
                    unitPropertyInput.dataset["unit"] = selectedChannel != null ? selectedChannel.unit : "";
                    // Unit selection reset
                    const unitPropertyInputReset = document.createElement("div");
                    unitPropertyInputReset.classList.add('tchmi-analytics-control-variable-entry-property-input-reset');
                    unitPropertyInputReset.classList.add('tchmi-analytics-control-variable-entry-unit-input-reset');
                    // Unit selection properties
                    const unitPropertyEntry = document.createElement("div");
                    unitPropertyEntry.classList.add('tchmi-analytics-control-variable-entry-property');
                    unitPropertyEntry.appendChild(unitPropertyLabel);
                    unitPropertyEntry.appendChild(unitPropertyInput);
                    unitPropertyEntry.appendChild(unitPropertyInputReset);
                    details.appendChild(unitPropertyEntry);
                    // visibility selection label
                    const visibilityPropertyLabel = document.createElement("div");
                    visibilityPropertyLabel.classList.add('tchmi-analytics-control-variable-entry-property-label');
                    visibilityPropertyLabel.textContent = this.__localizationReader.get(this.__localKeys.Visible);
                    // visibility selection input
                    const visibilityPropertyInput = document.createElement("input");
                    visibilityPropertyInput.type = "checkbox";
                    visibilityPropertyInput.classList.add('tchmi-analytics-control-variable-entry-property-input');
                    visibilityPropertyInput.classList.add('tchmi-analytics-control-variable-entry-visibility-input');
                    if (selectedChannel == null || selectedChannel.visibility.some(a => a == true)) {
                        visibilityPropertyInput.checked = true;
                    }
                    else {
                        visibilityPropertyInput.checked = false;
                    }
                    // visibility selection properties
                    const visibilityPropertyEntry = document.createElement("div");
                    visibilityPropertyEntry.classList.add('tchmi-analytics-control-variable-entry-property');
                    visibilityPropertyEntry.appendChild(visibilityPropertyLabel);
                    visibilityPropertyEntry.appendChild(visibilityPropertyInput);
                    details.appendChild(visibilityPropertyEntry);
                    // False-Alias label
                    const falseAliasLabel = document.createElement("div");
                    falseAliasLabel.classList.add('tchmi-analytics-control-variable-entry-property-label');
                    falseAliasLabel.textContent = `False-Alias`;
                    // False-Alias input
                    const falseAliasInput = document.createElement("input");
                    falseAliasInput.value = selectedChannel != null ? selectedChannel.userFalseAlias : "";
                    falseAliasInput.classList.add('tchmi-analytics-control-variable-entry-property-input');
                    falseAliasInput.classList.add('tchmi-analytics-control-variable-entry-false-alias-input');
                    // False-Alias input                
                    const falseAliasInputReset = document.createElement("div");
                    falseAliasInputReset.classList.add('tchmi-analytics-control-variable-entry-property-input-reset');
                    falseAliasInputReset.classList.add('tchmi-analytics-control-variable-entry-false-alias-input-reset');
                    // False-Alias property
                    const falseAliasProperty = document.createElement("div");
                    falseAliasProperty.classList.add('tchmi-analytics-control-variable-entry-property');
                    falseAliasProperty.classList.add('tchmi-analytics-control-variable-entry-false-alias');
                    falseAliasProperty.appendChild(falseAliasLabel);
                    falseAliasProperty.appendChild(falseAliasInput);
                    falseAliasProperty.appendChild(falseAliasInputReset);
                    details.appendChild(falseAliasProperty);
                    // True-Alias label
                    const trueAliasLabel = document.createElement("div");
                    trueAliasLabel.classList.add('tchmi-analytics-control-variable-entry-property-label');
                    trueAliasLabel.textContent = `True-Alias`;
                    // True-Alias input
                    const trueAliasInput = document.createElement("input");
                    trueAliasInput.classList.add('tchmi-analytics-control-variable-entry-property-input');
                    trueAliasInput.classList.add('tchmi-analytics-control-variable-entry-true-alias-input');
                    trueAliasInput.value = selectedChannel != null ? selectedChannel.userTrueAlias : "";
                    // True-Alias input                
                    const trueAliasInputReset = document.createElement("div");
                    trueAliasInputReset.classList.add('tchmi-analytics-control-variable-entry-property-input-reset');
                    trueAliasInputReset.classList.add('tchmi-analytics-control-variable-entry-true-alias-input-reset');
                    // True-Alias property
                    const trueAliasProperty = document.createElement("div");
                    trueAliasProperty.classList.add('tchmi-analytics-control-variable-entry-property');
                    trueAliasProperty.classList.add('tchmi-analytics-control-variable-entry-true-alias');
                    trueAliasProperty.appendChild(trueAliasLabel);
                    trueAliasProperty.appendChild(trueAliasInput);
                    trueAliasProperty.appendChild(trueAliasInputReset);
                    details.appendChild(trueAliasProperty);
                    if (selectedChannel != null && !selectedChannel.datatype.toUpperCase().includes("BOOL")) {
                        this.__disableInput(falseAliasProperty);
                        this.__disableInput(trueAliasProperty);
                    }
                    // Create remove button
                    const remButton = document.createElement('close-icon');
                    remButton.classList.add("tchmi-analytics-control-chart-remove");
                    remButton.backgroundPathColor = "gray";
                    // Append children to summary and details
                    summary.appendChild(summaryIcon);
                    summary.appendChild(summaryLabel);
                    summary.appendChild(remButton);
                    details.appendChild(summary);
                    // Open details if no channel is selected
                    if (selectedChannel == null || selectedChannel.isExpanded)
                        details.open = true;
                    this.__addEventListenersToChannelEntry(details);
                    chartElements.insertBefore(details, chartElements.children[length]);
                    const addChannelPlaceHolder = chartElements.querySelector(".tchmi-analytics-control-add-item-placeholder");
                    addChannelPlaceHolder.classList.add("tchmi-analytics-control-add-item-placeholder-disabed");
                }
                __disableInput(input) {
                    input.dataset["originalTitle"] = input.title;
                    input.title = this.__localizationReader.get(this.__localKeys.Value_Not_Editable);
                    input.classList.add("tchmi-analytics-control-variable-entry-property-input-disabled");
                }
                __enableInput(input) {
                    input.title = input.dataset["originalTitle"];
                    input.classList.remove("tchmi-analytics-control-variable-entry-property-input-disabled");
                }
                __addEventListenersToChannelEntry(channelEntry) {
                    // Details element
                    this.__eventListenerManager.addEventListener(channelEntry, "toggle", this.__onChartPropertyChanged(true), false, "ChartConfiguration");
                    // Channel
                    const elChannelInput = channelEntry.querySelector(".tchmi-analytics-control-variable-entry-symbol-input");
                    this.__eventListenerManager.addEventListener(elChannelInput, CustomElements.AutoSearchSelectEventNames.selectedValueChanged, this.__onChartPropertyChanged(), false, "ChartConfiguration");
                    // Color
                    const elColorInputs = channelEntry.querySelectorAll(".tchmi-analytics-control-chart-color");
                    for (const elColorInput of elColorInputs) {
                        if (elColorInput instanceof HTMLElement)
                            this.__eventListenerManager.addEventListener(elColorInput, "change", this.__onChartPropertyChanged(), false, "ChartConfiguration");
                    }
                    // Visibility
                    if (this.__useGeneralVisibility) // set to false to use channel visibility
                     {
                        const elVisibilityInput = channelEntry.querySelector(".tchmi-analytics-control-variable-entry-visibility-input");
                        this.__eventListenerManager.addEventListener(elVisibilityInput, "change", this.__onChartPropertyChanged(), false, "ChartConfiguration");
                    }
                    else {
                        const elTimerangeVisibiliyInputs = channelEntry.querySelectorAll(".tchmi-analytics-control-chart-channel-visible-button");
                        for (const elTimerangeVisibiliyInput of elTimerangeVisibiliyInputs) {
                            if (elTimerangeVisibiliyInput instanceof HTMLElement) {
                                this.__eventListenerManager.addEventListener(elTimerangeVisibiliyInput, "click", () => {
                                    // Check visibility state
                                    if (elTimerangeVisibiliyInput.classList.contains("tchmi-analytics-control-chart-channel-invisible-button")) {
                                        elTimerangeVisibiliyInput.classList.remove("tchmi-analytics-control-chart-channel-invisible-button");
                                    }
                                    else {
                                        elTimerangeVisibiliyInput.classList.add("tchmi-analytics-control-chart-channel-invisible-button");
                                    }
                                    this.__onChartPropertyChanged()();
                                }, false, "ChartConfiguration");
                            }
                        }
                    }
                    // Unit
                    const elUnitInput = channelEntry.querySelector(".tchmi-analytics-control-variable-entry-unit-input");
                    this.__eventListenerManager.addEventListener(elUnitInput, "change", this.__onChartPropertyChanged(), false, "ChartConfiguration");
                    const elUnitInputReset = channelEntry.querySelector(".tchmi-analytics-control-variable-entry-unit-input-reset");
                    this.__eventListenerManager.addEventListener(elUnitInputReset, "click", () => {
                        elUnitInput.value = elUnitInput.dataset["unit"];
                        this.__onChartPropertyChanged()();
                    }, false, "ChartConfiguration");
                    // False-Alias
                    const elFalseAliasInput = channelEntry.querySelector(".tchmi-analytics-control-variable-entry-false-alias-input");
                    this.__eventListenerManager.addEventListener(elFalseAliasInput, "change", this.__onChartPropertyChanged(), false, "ChartConfiguration");
                    const elFalseAliasInputReset = channelEntry.querySelector(".tchmi-analytics-control-variable-entry-false-alias-input-reset");
                    this.__eventListenerManager.addEventListener(elFalseAliasInputReset, "click", () => {
                        elFalseAliasInput.value = "";
                        this.__onChartPropertyChanged()();
                    }, false, "ChartConfiguration");
                    // True-Alias
                    const elTrueAliasInput = channelEntry.querySelector(".tchmi-analytics-control-variable-entry-true-alias-input");
                    this.__eventListenerManager.addEventListener(elTrueAliasInput, "change", this.__onChartPropertyChanged(), false, "ChartConfiguration");
                    const elTrueAliasInputReset = channelEntry.querySelector(".tchmi-analytics-control-variable-entry-true-alias-input-reset");
                    this.__eventListenerManager.addEventListener(elTrueAliasInputReset, "click", () => {
                        elTrueAliasInput.value = "";
                        this.__onChartPropertyChanged()();
                    }, false, "ChartConfiguration");
                    // Remove button
                    const remButton = channelEntry.querySelector(".tchmi-analytics-control-chart-remove");
                    this.__eventListenerManager.addEventListener(remButton, "click", this.__removeChannelEntry(channelEntry), false, "ChartConfiguration");
                }
                __removeChannelEntry(channelEntry) {
                    let _this = this;
                    return () => {
                        // Remove child
                        let chartElements = document.getElementsByClassName("tchmi-analytics-chart-channel-config-area")[0];
                        chartElements.removeChild(channelEntry);
                        chartElements.lastChild.style.color = "";
                        // Remove eventlisteners
                        _this.__eventListenerManager.removeEventListeners("ChartConfiguration");
                        // Sort children-names and add new eventlistener
                        for (let i = 0; i < chartElements.children.length - 1; i++) {
                            this.__addEventListenersToChannelEntry(chartElements.children[i]);
                        }
                        if (chartElements.children.length == 1) {
                            const addChannelPlaceHolder = chartElements.querySelector(".tchmi-analytics-control-add-item-placeholder");
                            addChannelPlaceHolder.classList.remove("tchmi-analytics-control-add-item-placeholder-disabed");
                        }
                        this.__onChartPropertyChanged()();
                    };
                }
                __createChannelColorObject(propertyMainDiv, chartElements, selectedChannel, label) {
                    let channelColors = selectedChannel === null || selectedChannel === void 0 ? void 0 : selectedChannel.varColors;
                    if (selectedChannel == null) {
                        channelColors = [];
                        for (const t of this.timerangeEntries) {
                            channelColors.push("");
                        }
                    }
                    else {
                        channelColors.length = this.timerangeEntries.length;
                    }
                    if (channelColors.length == 0)
                        channelColors.push("");
                    let index = 0;
                    let freeColor = this.__getNextFreeChannelColor(chartElements);
                    const colors = [];
                    const colorReducer = 20;
                    let previousColor = "";
                    let isCompareChart = this.chartType === Analytics.E_ChartType.COMPAREYTCHART || this.chartType === Analytics.E_ChartType.TIMESERIESBARCHART;
                    for (const channelColor of channelColors) {
                        if (index > 0 && !isCompareChart) // only draw first color if no compare chart
                            continue;
                        // Create timerange element
                        const colorMain = document.createElement("div");
                        colorMain.className = 'tchmi-analytics-control-variable-entry-property';
                        const colorLabel = document.createElement("div");
                        colorLabel.className = 'tchmi-analytics-control-variable-entry-property-label';
                        if (isCompareChart) {
                            colorLabel.textContent = `${this.__localizationReader.get(this.__localKeys.Color)} ${index + 1}`;
                            colorLabel.title = `${this.__localizationReader.get(this.__localKeys.Color_For_Timerange)} ${index + 1}`;
                        }
                        else {
                            colorLabel.textContent = `${this.__localizationReader.get(this.__localKeys.Color)}`;
                            colorLabel.title = `${this.__localizationReader.get(this.__localKeys.Color)}`;
                        }
                        // Create colorpicker
                        const colorInput = document.createElement("input");
                        colorInput.type = "color";
                        colorInput.className = "var-chart-color";
                        colorInput.className = 'tchmi-analytics-control-chart-color';
                        // Create visibility-button
                        const channelTimerangeVisibleBtn = document.createElement('button');
                        channelTimerangeVisibleBtn.classList.add('tchmi-analytics-control-chart-channel-visible-button');
                        if (selectedChannel != null) {
                            if (channelColor != null && channelColor != "")
                                colorInput.value = channelColor;
                            else {
                                if (previousColor == null || previousColor == "")
                                    previousColor = freeColor;
                                const previousRGBA = Analytics.Str.hexToRgbA(previousColor);
                                const newRGBA = Analytics.ColorHandler.makeColorDarker(previousRGBA, index * colorReducer);
                                const newHex = Analytics.Str.rgbaToHex(newRGBA);
                                colorInput.value = newHex;
                                selectedChannel.varColors[index] = colorInput.value;
                            }
                            colors.push(colorInput.value);
                            if (!selectedChannel.visibility[index])
                                channelTimerangeVisibleBtn.classList.add('tchmi-analytics-control-chart-channel-invisible-button');
                        }
                        else {
                            freeColor = Analytics.ColorHandler.makeColorDarker(Analytics.Str.hexToRgbA(freeColor), index * colorReducer);
                            colorInput.value = Analytics.Str.rgbaToHex(freeColor);
                            colors.push(freeColor);
                        }
                        previousColor = colorInput.value;
                        colorMain.appendChild(colorLabel);
                        colorMain.appendChild(colorInput);
                        colorMain.appendChild(channelTimerangeVisibleBtn);
                        propertyMainDiv.appendChild(colorMain);
                        index++;
                    }
                    this.__assignColorToButton(label, colors);
                }
                __getNextFreeChannelColor(chartElements) {
                    // Get next free color
                    const colorElements = chartElements.querySelectorAll(".tchmi-analytics-control-chart-color");
                    const usedColors = [];
                    if (colorElements != null) {
                        for (const colorElement of colorElements) {
                            if (colorElement instanceof HTMLInputElement)
                                usedColors.push(colorElement.value);
                        }
                    }
                    let i = 0;
                    let freeColor = this.__defaultColors[i % 15];
                    while (usedColors.find(a => a == freeColor) != null && i < 15) {
                        freeColor = this.__defaultColors[i % 15];
                        i++;
                    }
                    return freeColor;
                }
                __assignColorToButton(colorButton, colors) {
                    if (colorButton && !colorButton.classList.contains("var-chart-color")) {
                        if (colors.length == 1) {
                            colorButton.style.background = colors[0];
                        }
                        else {
                            const colorStops = colors.map((color, index) => {
                                const percentage = (index / (colors.length - 1)) * 100;
                                return `${color} ${percentage}%`;
                            }).join(', ');
                            colorButton.style.background = `linear-gradient(to bottom, ${colorStops})`;
                            colorButton.title = this.__localizationReader.get(this.__localKeys.Click_To_Edit_Colors);
                        }
                    }
                }
                //#endregion Channel-Handling
                //#region Timerange-Handling
                appendTimerangeEntry() {
                    let _this = this;
                    return () => {
                        var _a;
                        // Add a timerange entry if possible
                        let timerangeElements = document.getElementsByClassName("tchmi-analytics-chart-timerange-config-area")[0];
                        let length = timerangeElements.children.length - 1;
                        if (length < 3) {
                            // get next valid timerange-entry
                            let fromNew = "now-1h";
                            const from0 = this.timerangeEntries.length > 0 ? Analytics.RelativeTimeSelection.parseNowExtended(this.timerangeEntries[0].from) : null;
                            const from1 = this.timerangeEntries.length > 1 ? Analytics.RelativeTimeSelection.parseNowExtended(this.timerangeEntries[1].from) : null;
                            if (from1 != null)
                                fromNew = this.__logicalAdditionFrom(from1);
                            else if (from0 != null)
                                fromNew = this.__logicalAdditionFrom(from0);
                            let toNew = "now";
                            const to0 = Analytics.RelativeTimeSelection.parseNowExtended(fromNew);
                            if (to0 != null)
                                toNew = this.__logicalAdditionFrom(to0, false);
                            if (((_a = Analytics.RelativeTimeSelection.parseNowExtended(fromNew)) === null || _a === void 0 ? void 0 : _a.unitWithSlash) == null && fromNew == toNew)
                                toNew = "now";
                            this.addTimerangeEntry(timerangeElements, { from: fromNew, to: toNew, isVisible: true }, true, true);
                        }
                        if ((length) == 3) {
                            // Set button color to red
                            timerangeElements.lastChild.style.color = "red";
                            timerangeElements.lastChild.title = "You cannot add more than 3 Timeranges";
                            timerangeElements.lastChild.disabled = true;
                            this.createPopupFnct("You cannot add more than 3 timeranges.", CustomElements.PopupStatus.ALARM, 3000);
                        }
                        else {
                            _this.__onTimerangePropertyChanged()();
                        }
                    };
                }
                __logicalAdditionFrom(from, add = true) {
                    if (Number.isNaN(from.number))
                        from.number = 0;
                    if (add)
                        from.number++;
                    if (from.unit == null)
                        from.unit = from.unitWithSlash;
                    if (from.number > 0) {
                        if (from.unitWithSlash != null)
                            return `now-${from.number}${from.unit}/${from.unitWithSlash}`;
                        else
                            return `now-${from.number}${from.unit}`;
                    }
                    else {
                        if (from.unitWithSlash != null)
                            return `now/${from.unitWithSlash}`;
                        else
                            return `now`;
                    }
                }
                addTimerangeEntry(timerangeElements, timerange, timerangeVisibile = true, isNewAdded = false) {
                    // Get the current timeranges
                    let length = timerangeElements.children.length - 1;
                    // Create details and summary
                    const container = document.createElement('details');
                    container.classList.add('tchmi-analytics-control-chart-timerange-container');
                    const summary = document.createElement('summary');
                    summary.classList.add('tchmi-analytics-control-chart-timerange-summary');
                    // Create Label "Time Range" 
                    const timeRangeLabel = document.createElement('label');
                    timeRangeLabel.textContent = `${this.__localizationReader.get(this.__localKeys.Timerange)} ${(length + 1)}`;
                    if (length == 0)
                        timeRangeLabel.textContent = `${this.__localizationReader.get(this.__localKeys.Timerange)} ${(length + 1)} (${this.__localizationReader.get(this.__localKeys.Reference)})`;
                    timeRangeLabel.classList.add('tchmi-analytics-control-chart-timerange-label');
                    timeRangeLabel.addEventListener('click', () => {
                        container.open = !container.open;
                    });
                    // Create visibility-button
                    const timerangeVisibleBtn = document.createElement('button');
                    timerangeVisibleBtn.classList.add('tchmi-analytics-control-chart-timerange-visible-button');
                    if (!timerangeVisibile)
                        timerangeVisibleBtn.classList.add('tchmi-analytics-control-chart-timerange-invisible-button');
                    // from selection label
                    const fromPropertyLabel = document.createElement("div");
                    fromPropertyLabel.classList.add('tchmi-analytics-control-variable-entry-property-label');
                    fromPropertyLabel.classList.add('tchmi-analytics-control-variable-entry-property-label-sub');
                    fromPropertyLabel.classList.add('tchmi-analytics-control-chart-from-label');
                    fromPropertyLabel.textContent = `- ${this.__localizationReader.get(this.__localKeys.From)}`;
                    // from selection input
                    const fromPropertyInput = document.createElement("input");
                    fromPropertyInput.classList.add('tchmi-analytics-control-variable-entry-property-input');
                    fromPropertyInput.classList.add('tchmi-analytics-control-chart-from-custom-input');
                    fromPropertyInput.value = timerange.from;
                    // from selection calendar
                    const fromPropertyInputCalendar = document.createElement("button");
                    fromPropertyInputCalendar.classList.add('tchmi-analytics-control-chart-from-date-input');
                    // from selection properties
                    const fromPropertyEntry = document.createElement("div");
                    fromPropertyEntry.classList.add('tchmi-analytics-control-variable-entry-property');
                    fromPropertyEntry.appendChild(fromPropertyLabel);
                    fromPropertyEntry.appendChild(fromPropertyInput);
                    fromPropertyEntry.appendChild(fromPropertyInputCalendar);
                    // to selection label
                    const toPropertyLabel = document.createElement("div");
                    toPropertyLabel.classList.add('tchmi-analytics-control-variable-entry-property-label');
                    toPropertyLabel.classList.add('tchmi-analytics-control-variable-entry-property-label-sub');
                    toPropertyLabel.classList.add('tchmi-analytics-control-variable-entry-property-label-sub');
                    toPropertyLabel.classList.add('tchmi-analytics-control-chart-to-label');
                    toPropertyLabel.textContent = `- ${this.__localizationReader.get(this.__localKeys.To)}`;
                    // to selection input
                    const toPropertyInput = document.createElement("input");
                    toPropertyInput.classList.add('tchmi-analytics-control-variable-entry-property-input');
                    toPropertyInput.classList.add('tchmi-analytics-control-chart-from-custom-input');
                    toPropertyInput.value = timerange.to;
                    // to selection calendar
                    const toPropertyInputCalendar = document.createElement("button");
                    toPropertyInputCalendar.classList.add('tchmi-analytics-control-chart-from-date-input');
                    // to selection properties
                    const toPropertyEntry = document.createElement("div");
                    toPropertyEntry.classList.add('tchmi-analytics-control-variable-entry-property');
                    toPropertyEntry.appendChild(toPropertyLabel);
                    toPropertyEntry.appendChild(toPropertyInput);
                    toPropertyEntry.appendChild(toPropertyInputCalendar);
                    if (timerange.from != null && timerange.to != null && !TimerangeValidator.validateTimerangeEndsInFuture(timerange, this.chartType, this.compareTimerange)) {
                        toPropertyInput.style.color = "#D16002";
                        toPropertyInput.title = `${this.__localizationReader.get(this.__localKeys.Ends_In_Future)}`;
                    }
                    else if (timerange.from != null && timerange.to != null && !TimerangeValidator.validateFromSmallerTo(timerange)) {
                        fromPropertyInput.style.color = "red";
                        fromPropertyInput.title = `${this.__localizationReader.get(this.__localKeys.Timerange_To_Smaller_From)}`;
                        toPropertyInput.style.color = "red";
                        toPropertyInput.title = `${this.__localizationReader.get(this.__localKeys.Timerange_To_Smaller_From)}`;
                        this.createPopupFnct(`${this.__localizationReader.get(this.__localKeys.Timerange_To_Smaller_From)}`, CustomElements.PopupStatus.WARNING, 3000);
                    }
                    else if (timerange.from != null && timerange.to != null && !this.__validateConfiguration(timerange)) {
                        fromPropertyInput.style.color = "red";
                        fromPropertyInput.title = `${this.__localizationReader.get(this.__localKeys.No_Data_For_Source_In_Timerange)}`;
                        toPropertyInput.style.color = "red";
                        toPropertyInput.title = `${this.__localizationReader.get(this.__localKeys.No_Data_For_Source_In_Timerange)}`;
                        this.createPopupFnct(`${this.__localizationReader.get(this.__localKeys.No_Data_For_Source_In_Timerange)}`, CustomElements.PopupStatus.ALARM, 3000, false, "TimerangeError");
                    }
                    else if (!Analytics.RegexHelper.isValidInput(timerange.from)) {
                        fromPropertyInput.style.color = "red";
                        fromPropertyInput.title = `${this.__localizationReader.get(this.__localKeys.Time_Input_Wrong_Format)}`;
                        this.createPopupFnct(`${this.__localizationReader.get(this.__localKeys.Time_Input_Wrong_Format)}`, CustomElements.PopupStatus.ALARM, 3000);
                    }
                    else if (!Analytics.RegexHelper.isValidInput(timerange.to)) {
                        toPropertyInput.style.color = "red";
                        toPropertyInput.title = `${this.__localizationReader.get(this.__localKeys.Time_Input_Wrong_Format)}`;
                        this.createPopupFnct(`${this.__localizationReader.get(this.__localKeys.Time_Input_Wrong_Format)}`, CustomElements.PopupStatus.ALARM, 3000);
                    }
                    // interval selection label
                    const intervalPropertyLabel = document.createElement("div");
                    intervalPropertyLabel.classList.add('tchmi-analytics-control-variable-entry-property-label');
                    intervalPropertyLabel.classList.add('tchmi-analytics-control-chart-interval-label');
                    intervalPropertyLabel.textContent = `${this.__localizationReader.get(this.__localKeys.Interval)}`;
                    // interval selection properties
                    const intervalPropertyEntry = document.createElement("div");
                    intervalPropertyEntry.classList.add('tchmi-analytics-control-variable-entry-property');
                    intervalPropertyEntry.appendChild(intervalPropertyLabel);
                    const intervalSelect = document.createElement('select');
                    intervalPropertyEntry.appendChild(intervalSelect);
                    intervalSelect.classList.add('tchmi-analytics-control-chart-interval-select');
                    const defaultOption = document.createElement('option');
                    defaultOption.textContent = `${this.__localizationReader.get(this.__localKeys.Choose_Interval)}`;
                    defaultOption.value = 'default';
                    defaultOption.disabled = true;
                    defaultOption.selected = true;
                    intervalSelect.appendChild(defaultOption);
                    const customOption = document.createElement('option');
                    customOption.textContent = `${this.__localizationReader.get(this.__localKeys.Custom_Interval)}`;
                    customOption.value = 'custom';
                    customOption.style.display = 'none';
                    intervalSelect.appendChild(customOption);
                    let foundOption = false;
                    this.timerangeOptions.forEach((optionData) => {
                        const option = document.createElement('option');
                        option.textContent = optionData.text;
                        option.value = JSON.stringify(optionData);
                        intervalSelect.appendChild(option);
                        if (optionData.fromValue === timerange.from && optionData.toValue === timerange.to) {
                            // set as selected
                            intervalSelect.selectedIndex = option.index;
                            foundOption = true;
                        }
                    });
                    if (!foundOption)
                        intervalSelect.selectedIndex = customOption.index;
                    // Create remove button
                    let remButton = document.createElement('close-icon');
                    remButton.classList.add("tchmi-analytics-control-chart-remove");
                    remButton.backgroundPathColor = "gray";
                    remButton.style.float = "right";
                    // visibility selection label
                    const visibilityPropertyLabel = document.createElement("div");
                    visibilityPropertyLabel.classList.add('tchmi-analytics-control-variable-entry-property-label');
                    visibilityPropertyLabel.textContent = this.__localizationReader.get(this.__localKeys.Visible);
                    // visibility selection input
                    const visibilityPropertyInput = document.createElement("input");
                    visibilityPropertyInput.type = "checkbox";
                    visibilityPropertyInput.classList.add('tchmi-analytics-control-variable-entry-property-input');
                    visibilityPropertyInput.classList.add('tchmi-analytics-control-variable-entry-visibility-input');
                    if (timerangeVisibile) {
                        visibilityPropertyInput.checked = true;
                    }
                    else {
                        visibilityPropertyInput.checked = false;
                    }
                    // visibility selection properties
                    const visibilityPropertyEntry = document.createElement("div");
                    visibilityPropertyEntry.classList.add('tchmi-analytics-control-variable-entry-property');
                    visibilityPropertyEntry.appendChild(visibilityPropertyLabel);
                    visibilityPropertyEntry.appendChild(visibilityPropertyInput);
                    // Append elements
                    summary.appendChild(timeRangeLabel);
                    summary.appendChild(remButton);
                    container.appendChild(summary);
                    container.appendChild(intervalPropertyEntry);
                    container.appendChild(fromPropertyEntry);
                    container.appendChild(toPropertyEntry);
                    container.appendChild(visibilityPropertyEntry);
                    // Add eventlistener
                    this.__eventListenerManager.addEventListener(fromPropertyInputCalendar, "click", () => this.__openCalendar(length, true, fromPropertyInputCalendar), false, "TimerangeConfiguration");
                    this.__eventListenerManager.addEventListener(toPropertyInputCalendar, "click", () => this.__openCalendar(length, false, toPropertyInputCalendar), false, "TimerangeConfiguration");
                    this.__eventListenerManager.addEventListener(intervalSelect, "change", this.__onTimeIntervalChanged(length), false, "TimerangeConfiguration");
                    this.__eventListenerManager.addEventListener(fromPropertyInput, "change", this.__onTimeItemChanged(length), false, "TimerangeConfiguration");
                    this.__eventListenerManager.addEventListener(toPropertyInput, "change", this.__onTimeItemChanged(length), false, "TimerangeConfiguration");
                    this.__eventListenerManager.addEventListener(remButton, "click", this.__removeTimerangeEntry(length), false, "TimerangeConfiguration");
                    this.__eventListenerManager.addEventListener(visibilityPropertyInput, "change", this.__onTimeItemChanged(length, true), false, "TimerangeConfiguration");
                    this.__eventListenerManager.addEventListener(container, "toggle", this.__onTimerangePropertyChanged(true, true), false, "TimerangeConfiguration");
                    // Open details if no channel is selected
                    if (timerange == null || timerange.isExpanded || isNewAdded)
                        container.open = true;
                    // Insert created element
                    timerangeElements.insertBefore(container, timerangeElements.children[length]);
                    // Handle custom timerange
                    if (this.chartType == Analytics.E_ChartType.COMPAREYTCHART || this.chartType == Analytics.E_ChartType.TIMESERIESBARCHART) {
                        // set the to-value automatically
                        toPropertyInput.classList.add('tchmi-analytics-control-chart-from-custom-input-hidden');
                        // Create placeholder div
                        const toPlaceHolderParent = document.createElement('div');
                        toPlaceHolderParent.classList.add('tchmi-analytics-control-chart-from-custom-input-parent');
                        const toPlaceHolderInput = document.createElement('input');
                        toPlaceHolderInput.classList.add('tchmi-analytics-control-chart-from-custom-input');
                        toPlaceHolderInput.classList.add('tchmi-analytics-control-variable-entry-property-input');
                        toPlaceHolderInput.value = `${this.__localizationReader.get(this.__localKeys.From)} + ${this.__localizationReader.get(this.__localKeys.Compare_Interval)}`;
                        toPlaceHolderInput.disabled = true;
                        const toPlaceHolderOverlay = document.createElement('div');
                        toPlaceHolderOverlay.classList.add('tchmi-analytics-control-chart-from-custom-input-overlay');
                        toPlaceHolderParent.appendChild(toPlaceHolderInput);
                        toPlaceHolderParent.appendChild(toPlaceHolderOverlay);
                        // Insert placeholder at current custom input
                        toPropertyEntry.insertBefore(toPlaceHolderParent, toPropertyInput.nextSibling);
                        const title = this.__localizationReader.get(this.__localKeys.To_By_Compare_Interval);
                        if (toPropertyInput.title == null || toPropertyInput.title == "")
                            toPropertyInput.title = title;
                        toPropertyInputCalendar.disabled = true;
                        toPropertyInputCalendar.title = title;
                        toPlaceHolderOverlay.title = title;
                        toPropertyInputCalendar.classList.add("tchmi-analytics-control-chart-date-input-disabled");
                    }
                    this.__eventListenerManager.addEventListener(fromPropertyInput, "change", this.__onTimerangePropertyChanged(), false, "TimerangeConfiguration");
                    this.__eventListenerManager.addEventListener(toPropertyInput, "change", this.__onTimerangePropertyChanged(), false, "TimerangeConfiguration");
                    const addChannelPlaceHolder = timerangeElements.querySelector(".tchmi-analytics-control-add-item-placeholder");
                    addChannelPlaceHolder.classList.add("tchmi-analytics-control-add-item-placeholder-disabed");
                }
                highlightCompareInterval(targetElements) {
                    return () => {
                        Array.from(targetElements).forEach(compar => {
                            compar.classList.add("tchmi-analytics-control-chart-from-custom-input-highlight");
                            setTimeout(() => compar.classList.remove("tchmi-analytics-control-chart-from-custom-input-highlight"), 1000);
                        });
                        const compareObjects = document.getElementsByClassName("tchmi-analytics-control-chart-from-custom-input-overlay"); // Need to use document because it is in property page
                        Array.from(compareObjects).forEach(compar => {
                            compar.classList.add("tchmi-analytics-control-chart-from-custom-input-highlight");
                            setTimeout(() => compar.classList.remove("tchmi-analytics-control-chart-from-custom-input-highlight"), 1000);
                        });
                    };
                }
                __validateConfiguration(timerange) {
                    // Get datasources of channels
                    if (this.__chartDataSources != null) {
                        // Parse from and to to correct format
                        const fromUTC = Analytics.TimeConverter.getFromTcTime(timerange, new Date());
                        const toUTC = Analytics.TimeConverter.getToTcTime(timerange, new Date());
                        const usedSources = Analytics.ChannelConfigHelper.GetUsedSources(Analytics.ChannelConfigHelper.ExtractChannelsFromChannelConfig(this.__selectedChannels, this.timerangeEntries), this.__chartDataSources);
                        // Check if data exists at datasource for the timeranges
                        for (const source of usedSources) {
                            if (source.records == null || source.records.length == 0) {
                                this.createPopupFnct(`${this.__localizationReader.get(this.__localKeys.No_Recordings_Found_For_Source)}`, CustomElements.PopupStatus.WARNING, 3000);
                                continue;
                            }
                            const sourceInRange = !source.records.every(a => a.startTimeUTC > toUTC || a.endTimeUTC < fromUTC);
                            if (!sourceInRange)
                                return false;
                        }
                    }
                    return true;
                }
                __addLeadingZero(value) {
                    return value < 10 ? `0${value}` : value.toString();
                }
                __changeTimerangeButtonVisibility(index) {
                    let _this = this;
                    return () => {
                        // Remove child
                        const timerangeElements = document.getElementsByClassName("tchmi-analytics-chart-timerange-config-area")[0];
                        const child = timerangeElements.children[index];
                        // Check visibility state
                        const visibleButton = child.querySelector(".tchmi-analytics-control-chart-timerange-visible-button");
                        if (visibleButton.classList.contains("tchmi-analytics-control-chart-timerange-invisible-button")) {
                            visibleButton.classList.remove("tchmi-analytics-control-chart-timerange-invisible-button");
                        }
                        else {
                            visibleButton.classList.add("tchmi-analytics-control-chart-timerange-invisible-button");
                        }
                        this.__onTimerangePropertyChanged(true)();
                    };
                }
                __removeTimerangeEntry(index) {
                    let _this = this;
                    return () => {
                        // Remove child
                        let timerangeElements = document.getElementsByClassName("tchmi-analytics-chart-timerange-config-area")[0];
                        let child = timerangeElements.children[index];
                        timerangeElements.removeChild(child);
                        if (timerangeElements.children.length == 1) {
                            const addChannelPlaceHolder = timerangeElements.querySelector(".tchmi-analytics-control-add-item-placeholder");
                            addChannelPlaceHolder.classList.remove("tchmi-analytics-control-add-item-placeholder-disabed");
                        }
                        // Remove eventlisteners
                        _this.__eventListenerManager.removeEventListeners("TimerangeConfiguration");
                        // Sort children-names and add new eventlistener
                        for (let i = 0; i < timerangeElements.children.length - 1; i++) {
                            let label = timerangeElements.children[i].children[0];
                            label.textContent = `${this.__localizationReader.get(this.__localKeys.Timerange)} ${(i + 1)}`;
                            let fromDateInput = timerangeElements.getElementsByClassName("tchmi-analytics-control-chart-from-date-input")[2 * i];
                            let toDateInput = timerangeElements.getElementsByClassName("tchmi-analytics-control-chart-from-date-input")[2 * i + 1];
                            let elSelect = timerangeElements.getElementsByClassName("tchmi-analytics-control-chart-interval-select")[i];
                            let remButton = timerangeElements.getElementsByClassName("tchmi-analytics-control-chart-button")[i];
                            let fromCustomValue = timerangeElements.getElementsByClassName("tchmi-analytics-control-chart-from-custom-input")[i];
                            let toCustomValue = timerangeElements.getElementsByClassName("tchmi-analytics-control-chart-from-custom-input")[2 * i + 1];
                            let timerangeVisibleBtn = timerangeElements.children[i].querySelector(".tchmi-analytics-control-chart-timerange-visible-button");
                            this.__eventListenerManager.addEventListener(timerangeElements.children[i], "toggle", this.__onTimerangePropertyChanged(true, true), false, "TimerangeConfiguration");
                            this.__eventListenerManager.addEventListener(fromDateInput, "click", () => this.__openCalendar(i, true, fromDateInput), false, "TimerangeConfiguration");
                            this.__eventListenerManager.addEventListener(toDateInput, "click", () => this.__openCalendar(i, false, toDateInput), false, "TimerangeConfiguration");
                            this.__eventListenerManager.addEventListener(elSelect, "change", this.__onTimeIntervalChanged(i), false, "TimerangeConfiguration");
                            this.__eventListenerManager.addEventListener(remButton, "click", this.__removeTimerangeEntry(i), false, "TimerangeConfiguration");
                            this.__eventListenerManager.addEventListener(fromCustomValue, "change", this.__onTimeItemChanged(i), false, "TimerangeConfiguration");
                            this.__eventListenerManager.addEventListener(toCustomValue, "change", this.__onTimeItemChanged(i), false, "TimerangeConfiguration");
                            this.__eventListenerManager.addEventListener(timerangeVisibleBtn, "change", this.__onTimeItemChanged(i, true), false, "TimerangeConfiguration");
                        }
                        this.__onTimerangePropertyChanged()();
                    };
                }
                __openCalendar(index, useFrom, elButtonElement) {
                    const channels = Analytics.ChannelConfigHelper.ExtractChannelsFromChannelConfig(this.__selectedChannels, this.timerangeEntries);
                    const uniqueSourceEntries = Analytics.ChannelConfigHelper.GetUsedSources(channels, this.__chartDataSources);
                    const record = {};
                    let initialDate = new Date();
                    if (this.timerangeEntries.length >= index) {
                        const initialTimeTc = useFrom ? Analytics.TimeConverter.getFromTcTime(this.timerangeEntries[index], new Date()) : Analytics.TimeConverter.getToTcTime(this.timerangeEntries[index], new Date());
                        initialDate = new Analytics.SPTime(initialTimeTc).date;
                    }
                    record.dtRecordStart = new TcHmi.Controls.Analytics.DCTimestruct();
                    record.dtSelectedRangeStart = new TcHmi.Controls.Analytics.DCTimestruct(initialDate.getFullYear(), initialDate.getMonth() + 1, initialDate.getDate());
                    record.dtRecordEnd = new TcHmi.Controls.Analytics.DCTimestruct();
                    record.dtSelectedRangeEnd = new TcHmi.Controls.Analytics.DCTimestruct(initialDate.getFullYear(), initialDate.getMonth() + 1, initialDate.getDate());
                    this.__eventListenerManager.removeEventListeners("calendar-closed");
                    this.__elCalendar.openCalendar(true, record, true, uniqueSourceEntries, elButtonElement.parentElement, true);
                    this.__eventListenerManager.addEventListener(this.__elCalendar, "calendarClosed", this.__calendarClosed(index, useFrom), false, "calendar-closed");
                }
                __calendarClosed(index, useFrom) {
                    return (e) => {
                        if (e.detail == true) {
                            let date = this.__elCalendar.selectedTime;
                            const dateString = `${date.wYear}-${this.__numberTwoDigits(date.wMonth)}-${this.__numberTwoDigits(date.wDay)}`;
                            this.__onDateChanged(index, useFrom, dateString)();
                        }
                    };
                }
                __numberTwoDigits(num) {
                    if (num < 10) {
                        return `0${num}`;
                    }
                    else {
                        return num.toString();
                    }
                }
                __onDateChanged(index, useFrom, changedDateS) {
                    let _this = this;
                    return () => {
                        // Get value
                        let timerange = document.getElementsByClassName("tchmi-analytics-chart-timerange-config-area")[0];
                        let entry = timerange.children[index];
                        // Set the interval-time
                        let elRemainingInput = entry.getElementsByClassName("tchmi-analytics-control-chart-from-custom-input")[useFrom ? 1 : 0];
                        // Check the other time
                        let fromValue = "";
                        let toValue = "";
                        if (useFrom) {
                            fromValue = String(changedDateS + " 00:00:00");
                            toValue = elRemainingInput.value;
                            if (toValue.includes("now"))
                                toValue = String(changedDateS + " 23:59:59");
                        }
                        else {
                            toValue = String(changedDateS + " 23:59:59");
                            fromValue = elRemainingInput.value;
                            if (fromValue.includes("now"))
                                fromValue = String(changedDateS + " 00:00:00");
                        }
                        // Reset the selection box
                        let elSelect = entry.getElementsByClassName("tchmi-analytics-control-chart-interval-select")[0];
                        const custom = [...elSelect.options].find(option => option.value === "custom");
                        if (custom != null) {
                            elSelect.selectedIndex = custom.index;
                            custom.style.display = '';
                        }
                        _this.__updateTimevalues(index, fromValue, toValue);
                    };
                }
                __onTimeIntervalChanged(index) {
                    let _this = this;
                    return () => {
                        // Get value
                        let timerange = document.getElementsByClassName("tchmi-analytics-chart-timerange-config-area")[0];
                        let entry = timerange.children[index];
                        let elSelect = entry.getElementsByClassName("tchmi-analytics-control-chart-interval-select")[0];
                        let option = elSelect.options[elSelect.selectedIndex];
                        const custom = [...elSelect.options].find(option => option.value === "custom");
                        if (custom != null) {
                            custom.style.display = 'none';
                        }
                        const optionValue = JSON.parse(option.value);
                        let fromVal = optionValue.fromValue;
                        let toVal = optionValue.toValue;
                        _this.__updateTimevalues(index, fromVal, toVal);
                    };
                }
                __onTimeItemChanged(index, onlyVisibility = false) {
                    return () => {
                        this.__onTimerangePropertyChanged(onlyVisibility)();
                    };
                }
                __updateTimevalues(index, fromVal, toVal) {
                    let timerange = document.getElementsByClassName("tchmi-analytics-chart-timerange-config-area")[0];
                    let entry = timerange.children[index];
                    // Set the interval-time
                    let elFrom = entry.getElementsByClassName("tchmi-analytics-control-chart-from-custom-input")[0];
                    elFrom.value = fromVal;
                    // Set the interval-time
                    let elTo = entry.getElementsByClassName("tchmi-analytics-control-chart-from-custom-input")[1];
                    elTo.value = toVal;
                    this.__onTimerangePropertyChanged()();
                }
                __onChartPropertyChanged(onlyDetailToggleStateChanged = false) {
                    let _this = this;
                    return () => {
                        let chartElements = document.getElementsByClassName("tchmi-analytics-chart-channel-config-area")[0];
                        let varEntries = [];
                        for (let i = 0; i < chartElements.children.length - 1; i++) {
                            const channelEntry = chartElements.children[i];
                            // SymbolName
                            const elChannelInput = channelEntry.querySelector(".tchmi-analytics-control-variable-entry-symbol-input");
                            let selectedOption = elChannelInput.selectedItem;
                            let dataEntry = {};
                            if (selectedOption != null && selectedOption.isSelectable)
                                dataEntry = JSON.parse(selectedOption.value);
                            else {
                                dataEntry.datatype = "";
                                dataEntry.name = "";
                                dataEntry.sourceID = Analytics.Guid.EMPTY_GUID;
                            }
                            // Colors
                            dataEntry.varColors = [];
                            const elColors = channelEntry.querySelectorAll(".tchmi-analytics-control-chart-color");
                            for (const elColor of elColors) {
                                dataEntry.varColors.push(elColor.value);
                            }
                            // Visibilities 
                            dataEntry.visibility = [];
                            if (this.__useGeneralVisibility) // set to false to use channel visibility
                             {
                                const elVisibilitySelect = channelEntry.querySelector(".tchmi-analytics-control-variable-entry-visibility-input");
                                for (const elColor of elColors) // add foreach color a visibility
                                 {
                                    dataEntry.visibility.push(elVisibilitySelect.checked);
                                }
                            }
                            else {
                                const visibleButtons = channelEntry.querySelectorAll(".tchmi-analytics-control-chart-channel-visible-button");
                                for (const visibleButton of visibleButtons) {
                                    if (visibleButton.classList.contains("tchmi-analytics-control-chart-channel-invisible-button"))
                                        dataEntry.visibility.push(false);
                                    else
                                        dataEntry.visibility.push(true);
                                }
                            }
                            // Unit
                            const elUnitInput = channelEntry.querySelector(".tchmi-analytics-control-variable-entry-unit-input");
                            if (elUnitInput != null) {
                                if (elUnitInput.value)
                                    dataEntry.customUnit = elUnitInput.value; // reuse custom unit if has been set
                                else
                                    elUnitInput.value = dataEntry.unit ? dataEntry.unit : ""; // set unit if no unit has been set
                                elUnitInput.dataset["unit"] = dataEntry.unit ? dataEntry.unit : ""; // set unit in dataset for later use"]
                            }
                            // False-Alias
                            const elFalseAliasInput = channelEntry.querySelector(".tchmi-analytics-control-variable-entry-false-alias-input");
                            if (elFalseAliasInput != null)
                                dataEntry.userFalseAlias = elFalseAliasInput.value;
                            // True-Alias
                            const elTrueAliasInput = channelEntry.querySelector(".tchmi-analytics-control-variable-entry-true-alias-input");
                            if (elTrueAliasInput != null)
                                dataEntry.userTrueAlias = elTrueAliasInput.value;
                            varEntries.push(dataEntry);
                            // Set label and color
                            const labelIcon = channelEntry.querySelector(".tchmi-analytics-control-chart-label");
                            const label = channelEntry.querySelector(".tchmi-analytics-control-chart-label-channel");
                            label.textContent = dataEntry.name;
                            this.__assignColorToButton(labelIcon, dataEntry.varColors);
                            // Show false and true alias property if it is a boolean
                            const falseAliasProperty = channelEntry.querySelector(".tchmi-analytics-control-variable-entry-false-alias");
                            const trueAliasProperty = channelEntry.querySelector(".tchmi-analytics-control-variable-entry-true-alias");
                            if (dataEntry.datatype.toUpperCase().includes("BOOL")) {
                                this.__enableInput(falseAliasProperty);
                                this.__enableInput(trueAliasProperty);
                            }
                            else {
                                this.__disableInput(falseAliasProperty);
                                this.__disableInput(trueAliasProperty);
                            }
                            if (channelEntry.open)
                                dataEntry.isExpanded = true;
                        }
                        const event = new CustomEvent(Analytics.DataChartEventNames.onChartPropertyChanged, {
                            detail: {
                                varEntries: varEntries,
                                onlyDetailToggleStateChanged: onlyDetailToggleStateChanged
                            }
                        });
                        this.__selectedChannels = varEntries;
                        _this.dispatchEvent(event);
                    };
                }
                __onTimerangePropertyChanged(onlyVisibility = false, onlyDetailToggleStateChanged = false) {
                    let _this = this;
                    return () => {
                        // Get value
                        let timerangeElements = document.getElementsByClassName("tchmi-analytics-chart-timerange-config-area")[0];
                        let timeranges = new TcHmi.List();
                        for (let i = 0; i < timerangeElements.children.length - 1; i++) {
                            let timerange = {};
                            let startTime = timerangeElements.children[i].getElementsByClassName("tchmi-analytics-control-chart-from-custom-input")[0];
                            let endTime = timerangeElements.children[i].getElementsByClassName("tchmi-analytics-control-chart-from-custom-input")[1];
                            // Parse starttime 
                            startTime.style.color = "black";
                            if (Analytics.RegexHelper.dateTimePattern.test(startTime.value)) {
                                timerange.from = startTime.value;
                            }
                            else if (Analytics.RegexHelper.nowExtendedPattern.test(startTime.value)) {
                                timerange.from = startTime.value;
                            }
                            else {
                                this.createPopupFnct(`${this.__localizationReader.get(this.__localKeys.Time_Input_Wrong_Format)}`, CustomElements.PopupStatus.ALARM, 3000);
                                startTime.style.color = "red";
                                return;
                            }
                            // Parse endtime
                            endTime.style.color = "black";
                            if (Analytics.RegexHelper.nowExtendedPattern.test(endTime.value)) {
                                timerange.to = endTime.value;
                            }
                            else if (Analytics.RegexHelper.dateTimePattern.test(endTime.value)) {
                                timerange.to = endTime.value;
                            }
                            else if (Analytics.RegexHelper.nowExactPattern.test(endTime.value)) {
                                timerange.to = endTime.value;
                            }
                            else {
                                this.createPopupFnct(`${this.__localizationReader.get(this.__localKeys.Time_Input_Wrong_Format)}`, CustomElements.PopupStatus.ALARM, 3000);
                                endTime.style.color = "red";
                                return;
                            }
                            const elVisibilitySelect = timerangeElements.children[i].querySelector(".tchmi-analytics-control-variable-entry-visibility-input");
                            if (elVisibilitySelect.checked)
                                timerange.isVisible = true;
                            else
                                timerange.isVisible = false;
                            if (timerangeElements.children[i] instanceof HTMLDetailsElement) {
                                timerange.isExpanded = timerangeElements.children[i].open;
                            }
                            timeranges.push(timerange);
                        }
                        const event = new CustomEvent(Analytics.DataChartEventNames.onTimerangePropertyChanged, {
                            detail: {
                                onlyVisibility: onlyVisibility,
                                onlyDetailToggleStateChanged: onlyDetailToggleStateChanged,
                                timeranges: timeranges,
                            }
                        });
                        _this.dispatchEvent(event);
                    };
                }
                //#endregion Timerange-Handling
                clearEvents() {
                    this.__eventListenerManager.removeEventListeners();
                }
            }
            Analytics.DataChartPropertyHandler = DataChartPropertyHandler;
            /**
             * Can be used to validate timeranges
             */
            let TimerangeValidator;
            (function (TimerangeValidator) {
                /**
                 * Validates that a timerange does not end in the future
                 * @param fromTcTime
                 * @param toTcTime
                 * @param chartType
                 * @param compareTimerange
                */
                function validateTimerangeEndsInFuture(timerange, chartType, compareTimerange) {
                    if (chartType == Analytics.E_ChartType.COMPAREYTCHART || chartType == Analytics.E_ChartType.TIMESERIESBARCHART) {
                        const compareIntervalTc = Analytics.TimeInterval.ConvertToMs(compareTimerange.rangeValue, compareTimerange.rangeUnit) * Analytics.SPTime.TIME_IN_MS_TO_TC_FACTOR;
                        const fromDate = new Analytics.SPTime(Analytics.TimeConverter.getFromTcTime(timerange, new Date()) + compareIntervalTc).date;
                        if (fromDate > new Date())
                            return false;
                    }
                    return true;
                }
                TimerangeValidator.validateTimerangeEndsInFuture = validateTimerangeEndsInFuture;
                /**
                 * Validates that the FROM value is smaller than the TO value of a timerange
                 * @param from
                 * @param to
                 * @param chartType
                 * @param compareTimerange
                 */
                function validateFromSmallerTo(timerange) {
                    if (Analytics.TimeConverter.getFromTcTime(timerange, new Date()) <= Analytics.TimeConverter.getToTcTime(timerange, new Date()))
                        return true;
                    return false;
                }
                TimerangeValidator.validateFromSmallerTo = validateFromSmallerTo;
            })(TimerangeValidator = Analytics.TimerangeValidator || (Analytics.TimerangeValidator = {}));
        })(Analytics = Controls.Analytics || (Controls.Analytics = {}));
    })(Controls = TcHmi.Controls || (TcHmi.Controls = {}));
})(TcHmi || (TcHmi = {}));
//# sourceMappingURL=DataChartPropertyHandler.js.map