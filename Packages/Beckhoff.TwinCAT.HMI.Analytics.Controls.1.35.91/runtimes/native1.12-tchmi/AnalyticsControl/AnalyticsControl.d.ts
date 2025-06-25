declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            class AnalyticsControl extends TcHmi.Controls.System.TcHmiControl {
                protected __elThis: JQuery;
                protected __elementTemplateRoot: JQuery;
                protected __elTemplateContainer: JQuery;
                protected __elTitleArea: JQuery;
                protected __elementNameAlias: JQuery;
                protected __elEdit: JQuery;
                protected __elEditArea: JQuery;
                protected __elEditAreaItem: JQuery;
                protected __elEditAreaItemContainer: JQuery;
                protected __elEditAreaEditProperties: JQuery;
                protected __elProperties: JQuery;
                protected __elDimMask: JQuery;
                protected __elementsText: JQuery;
                protected __elementsSVGMask: JQuery;
                protected __elementsDesign: JQuery;
                protected __elementReset: JQuery;
                protected __elementOverlay: JQuery;
                protected __elWarning: JQuery;
                protected __elCustomElements: CustomElements.IAnalyticsBaseCustomElement[];
                /** Color for all "tchmi-analytics-component-1" (Light: rgb 255 / Dark: rgb 80) classes. Equals to __controlColorLightPlus */
                protected __component1Color: string;
                /** Color for all "tchmi-analytics-component-2" classes (Light: rgb 204 / Dark: rgb 150). Equals to __controlColorLightPlus */
                protected __component2Color: string;
                protected __hasLicense: boolean;
                protected __hasFullLicense: boolean;
                protected __resizeDestroyEvent: DestroyFunction | undefined;
                protected __calendarClosedDestroyEvent: DestroyFunction | undefined;
                protected __functionResultChangedDestroyEvent: DestroyFunction | undefined;
                protected __defaultWidth: number;
                protected __defaultHeight: number;
                protected __secureId: string;
                protected __isDarkTheme: boolean;
                protected __hasTitleArea: boolean;
                protected __editableProperties: Property[];
                protected __eventListenerManager: EventListenerManager;
                protected __propertyWindowOptions: IPropertyWindowOptions;
                /** Map of elements and their localization information */
                protected __localizedElements: Map<HTMLElement, {
                    key: string;
                    parameters?: any[];
                }>;
                /** Localization watch function */
                protected __destroyLocalizationWatch: DestroyFunction | null;
                protected __originalPropertyValues: Map<string, OriginalValue>;
                protected __customPropSetting: boolean;
                protected __editAreaItems: EditAreaItem[];
                protected __preventEditAreaToggle: boolean;
                protected __maxFontSizes: Map<string, number>;
                protected readonly COLLAPSE_CLASS: string;
                static get MEA_BLUE(): string;
                protected readonly __htmlCodeCloseIcon: string;
                /** Localization reader */
                local: Locale.LocalizationReader | undefined;
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                __previnit(): void;
                __init(): void;
                /**
                * @description Is called by tachcontrol() after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __attach(): void;
                /**
                * @description Is called by tachcontrol() after the control instance is no longer part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __detach(): void;
                /**
                * @description Destroy the current control instance.
                * Will be called automatically if system destroys control!
                */
                destroy(): void;
                protected __onResetClicked(): () => void;
                protected __onResized: () => (evt: EventProvider.Event, ctrl: Controls.Analytics.AnalyticsControl) => void;
                protected __onResizedBase(evt: EventProvider.Event, ctrl: Controls.Analytics.AnalyticsControl): IScaleFactor | null;
                /**
                 * @deprecated The method should not be used anymore. Use __getScaleFactors instead.
                 */
                protected __getFontScaleFactor(defaultWidth?: number, defaultHeight?: number): number;
                /**
                 * @deprecated The method should not be used anymore. Use __getScaleFactors instead.
                 */
                protected __getScaleFactor(defaultFactor?: boolean): number;
                protected __getScaleFactors(): ISize;
                protected __nameAlias: string;
                setNameAlias(valueNew: string): void;
                getNameAlias(): string;
                setAndSaveNameAlias(newNameAlias: string): void;
                protected __processNameAlias(): void;
                protected __showTitle: boolean;
                setShowTitle(valueNew: boolean): void;
                getShowTitle(): boolean;
                protected __processShowTitle(): void;
                protected __showEditProperties: boolean;
                setShowEditProperties(valueNew: boolean): void;
                getShowEditProperties(): boolean;
                protected __processShowEditProperties(): void;
                protected __fontColor: string;
                protected __solidFontColor: SolidColor;
                setFontColor(valueNew: SolidColor): void;
                getFontColor(): SolidColor;
                protected __processFontColor(): void;
                protected __colorDarkArea: string;
                setColorDarkArea(valueNew: string): void;
                getColorDarkArea(): string;
                protected __controlColorLight: string;
                setControlColorLight(valueNew: string): void;
                getControlColorLight(): string;
                /** Theme color (Light: rgb 255 / Dark: rgb 80). Equals to __component1Color */
                protected __controlColorLightPlus: string;
                setControlColorLightPlus(valueNew: string): void;
                getControlColorLightPlus(): string;
                protected __controlColorMiddle: string;
                setControlColorMiddle(valueNew: string): void;
                getControlColorMiddle(): string;
                protected __controlColorDark: string;
                setControlColorDark(valueNew: string): void;
                getControlColorDark(): string;
                protected __controlChartColor: string;
                getControlChartColor(): string;
                setControlChartColor(valueNew: string): void;
                protected __processColor(): void;
                protected __showReset: boolean;
                setShowReset(valueNew: boolean): void;
                getShowReset(): boolean;
                protected __processShowReset(): void;
                protected __resetSymbol: TcHmi.Symbol;
                setReset(valueNew: TcHmi.Symbol): void;
                getReset(): TcHmi.Symbol;
                protected __processReset(): void;
                protected __fontsizeTitle: number;
                getFontsizeTitle(): number;
                setFontsizeTitle(valueNew: number): void;
                protected __processFontsizeTitle(): void;
                protected __fontSize: number;
                setFontSize(valueNew: number | null): void;
                getFontSize(): number;
                protected __processFontSize(): void;
                protected __autoFontSize: boolean;
                setAutoFontSize(valueNew: boolean | null): void;
                getAutoFontSize(): boolean;
                protected __processAutoFontSize(): void;
                protected __colorGradient: number;
                getColorGradient(): number;
                setColorGradient(valueNew: number): void;
                protected __processColorGradient(): void;
                protected __amountDecimals: number;
                setAmountDecimals(valueNew: number): void;
                getAmountDecimals(): number;
                protected __processAmountDecimals(): void;
                protected __defaultMinHeight: number;
                setDefaultMinHeight(valueNew: number | null): void;
                getDefaultMinHeight(): number;
                protected __processDefaultMinHeight(): void;
                protected __editPropertiesAlias: string;
                setEditPropertiesAlias(valueNew: string): void;
                getEditPropertiesAlias(): string;
                protected __processEditPropertiesAlias(): void;
                protected __showPopupMessages: boolean;
                setShowPopupMessages(valueNew: boolean | null): void;
                getShowPopupMessages(): boolean;
                protected __processShowPopupMessages(): void;
                protected __initLocalizations(): void;
                protected __processLocalizationReader(): void;
                protected __processPropertyValues(): void;
                CreateRadialGradient(color: string, elementSvgDef: HTMLElement, colorGrad: number, radialGradName: string, percent?: number, stopOpacity1?: number, stopOpacity2?: number): void;
                CreateLinearGradient(color: string, elementSvgDef: HTMLElement, colorGrad: number, linearGradName: string): void;
                CreateLinearGradient2(color: any, elementSvgDef: HTMLElement, colorGrad: number, linearGradName: string): void;
                CreateLinearGradientTwoColors(color1: string, color2: string, elementSvgDef: HTMLElement, colorGrad: number, linearGradName: string): void;
                generateColor(colorStart: string, colorEnd: string, colorCount: number): string[];
                polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number): IXYPoint;
                describeArc(x: number, y: number, radius: number, startAngle: number, endAngle: number): string;
                /** Check of license: TF3550 TC3 Analytics Runtime.
                 * Trial License: small overlay.
                 * No license: Complete dark overlay with license info
                 */
                checkLicense(): void;
                rgbaToHex(color: string | undefined, alpha?: boolean): string | null;
                LightenDarkenColor(color: string, amt: number): string;
                GetColorGradientDarker(rgba: string, colorGradient: number): string;
                GetColorGradientLighter(rgba: string, colorGradient: number): string;
                private __getColorGradient;
                hexToRgbA(hex: string): string;
                getColors(): string[];
                DateTimeConverter(timeObject: any, monthAlias: string, showMilliSeconds: boolean, showAMPM?: boolean, isTimer?: boolean): string;
                TimeSpanConverter(timeObj: any, showMilliSeconds: boolean, dayAlias: string, label: boolean): string;
                convertTimeSpan(timeObject: any): number;
                /**
                 * Trim numberic value / stringify DCTimestruct or TimeSpan
                 * @param value - The value to parse
                 * @param amountDecimals - Amount of decimals
                 * @param monthAlias - Month alias if value is a timestamp
                 * @param dayAlias - Day alias if value is a timespan
                 * @param namespace - Identification of trimmed value in Control. Used to check if decimal value already had decimal numbers to always show (prevent decimal flashing).
                 * @return - The number, timestamp or timespan as a string;
                 */
                getFormattedString(value: string | number | any, monthAlias: string, dayAlias: string, showMilliseconds: boolean, namespace?: string): string;
                getTrimmedValueWithUnit(value: string | number, unit: string, monthAlias: string, namespace?: string): string;
                /**
                 * Trim numeric value
                 * @param value - The value to parse
                 * @param namespace - Identification of trimmed value in Control. Used to check if decimal value already had decimal numbers to always show (prevent decimal flashing).
                 */
                getTrimmedNumber(value: string | number, namespace?: string, amountDecimals?: number): string;
                /**
                 * Trim numeric values of an array and concat it to a string
                 * @param value - The value to parse
                 * @param namespace - Identification of trimmed value in Control. Used to check if decimal value already had decimal numbers to always show (prevent decimal flashing).
                 */
                getTrimmedNumberArray(value: number[], namespace?: string, amountDecimals?: number): string;
                /**
                  * Trim numeric value.
                  * @param value - The value to parse
                  * @param unit - The unit to extend the trimmed value.
                  * @param namespace - Identification of trimmed value in Control. Used to check if decimal value already had decimal numbers to always show (prevent decimal flashing).
                  * @param nonbrSpace - Using non-breaking space for value and unit or not.
                  */
                getTrimmedNumberWithUnit(value: string | number, unit: string, namespace?: string, nonbrSpace?: boolean): string;
                /**
                 * Trim timestamp value.
                 * @param value - The value to parse
                 * @param monthAlias - Month alias if value is a timestamp
                 */
                getTrimmedTimestamp(value: string, monthAlias: string): string;
                getDownscaledFontSize(key: string, desiredFontSize: number): number;
                protected __processBackgroundColor(): void;
                /**
                 * @deprecated The method should not be used anymore. Use Utilities.autoSize instead.
                 */
                protected scaleDownFontToFit(element: HTMLElement): void;
                /**
                 * Auto size of elements until container would overflow. If autoGrow the size is increased after the timeout (prevent flashing).
                 * @param container to check overflow
                 * @param elementsToChange elements where the style will be modified (can also be the container if the childs derive the styles from it)
                 * @param styleTags css style tag (e.g. fontSize)
                 * @param options
                            namespace - Identification of trimmed value in Control. Used to check if decimal value already had decimal numbers to always show (prevent decimal flashing).
                            min - pixel value
                            max - pixel value
                            autoGrowDelay - delay of autoGrow in milliseconds (if enabled)
                 */
                protected __autoSize(container: HTMLElement, elementsToChange: HTMLElement[] | HTMLElement, styleTags: string | string[], options?: {
                    namespace?: string;
                    min?: number;
                    max?: number;
                    autoGrowDelay?: number;
                }): number;
                /**
                 * Reset of autosize. Should be used after e.g. resize of Control.
                 * @param namespace Identification of auto sized value in Control. Used to autosize different elements in a different way
                 */
                protected __resetAutoSize(namespace?: string): void;
                /**
                 * Get auto grown value
                 * @param value to auto grow
                 * @param namespace Identification of auto grow value
                 * @param windowTime time window of auto grow. Older values will be ignored
                 */
                protected __getAutoGrowValue(value: number, namespace: string, windowTime?: number): number;
                /**
                 * Reset of remembered values in getAutoGrowValue.
                 * @param namespace Identification of auto growed value of current Control.
                 */
                protected __resetGetAutoGrowValue(namespace?: string): void;
                /**
                 * Set class with display none to the element
                 * @param element the element
                 * @param none whether add or remove the class
                 */
                protected __displayNone(element: JQuery | HTMLElement, none: boolean): void;
                Log(message: string | Error, startMessage?: string): void;
                protected __logIfError(result: TcHmi.IResultObject): void;
                protected __getContainerSize(): ISize;
                /**
                 * Hide of element
                 * @param element JQuery or HTMLElement
                 */
                protected __hide(element: JQuery | HTMLElement): void;
                /**
                 * Show or hide of element
                 * @param element JQuery or HTMLElement
                 * @param show Show or Hide
                 */
                protected __show(element: JQuery | HTMLElement, show: boolean): void;
                /***** Custom Properties *****/
                setTheme(isDarkTheme: boolean): void;
                protected __processTheme(): void;
                setEditableProperties(properties: Property[], withDefault?: boolean): void;
                protected __getNameAliasProperty(): Property;
                drawWarning(tooltip: string): void;
                removeWarning(): void;
                /** Event Listener Handling */
                protected addEventListener(element: HTMLElement | Document | Window, type: string, listener: (this: HTMLElement, ev: Event) => unknown, options?: boolean | AddEventListenerOptions, ...namespaces: string[]): void;
                /**
                 * Remove the Event Listeners with the specified namespace. If namespace is null or undefined, all Event Listeners will be removed.
                 * @param namespace
                 */
                removeEventListeners(namespace?: string): void;
                private addPropWindowEventListener;
                protected addOtherElementClickedEvent(element: HTMLElement, callback: () => void, ...namespaces: string[]): void;
                private __removePropWindowEventListeners;
                protected __onEditClicked(): (e: UIEvent) => void;
                protected __closeEditClicked(): () => void;
                protected __onPropertiesClicked(): () => void;
                protected __beforeOpenPropertyWindow(): void;
                protected __onPropCloseClicked(): () => void;
                private __onPropResetClicked;
                private __onWindowPropertyChanged;
                protected __setPropertyPersistent(property: Property, value: boolean | string | object, index?: number, subName?: string): void;
                protected __processCustomEdits(propName?: string): void;
                protected __createEditArea(areaInfos: EditAreaItem[]): void;
                protected __createEditAreaItemsRecursive(parent: EditAreaItem, htmlParent: Element, htmlParentContainer: HTMLElement): void;
                protected __onEditAreaItemClicked(editAreaItem: EditAreaItem): (e: UIEvent) => void;
                protected __openPropertyWindow(): void;
                protected __propertyHandling(propDesc: Property, propName: HTMLElement): HTMLElement;
                protected __isValidNumber(value: string, type: E_DataType): boolean;
                protected __checkDisableInputElement(elInput: HTMLElement, propDesc: Property): void;
                protected __changeTimeIntervalProperty(prop: Property, elInput: HTMLInputElement, elSelect: HTMLSelectElement): void;
                dropNameAlias(): void;
                resetProperties(): void;
                /** Popup handling */
                protected __createPopup(message: string, status?: CustomElements.PopupStatus, timeInMs?: number, suppress?: boolean, namespace?: string): void;
            }
        }
    }
}
