declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            class MultiValueControl extends TcHmi.Controls.Analytics.AnalyticsControl {
                /**
                 * @description Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elementRectsContainer: JQuery;
                protected __elementRects: JQuery;
                protected __elementTexts: JQuery;
                protected __elementTextLabels: JQuery;
                protected __controlBackgroundColorStart: SolidColor | null | undefined;
                protected __controlBackgroundColorEnd: SolidColor | null | undefined;
                protected __colors: any | null | undefined;
                protected __controlType: string | null | undefined;
                protected __showMilliseconds: boolean;
                protected __dayAlias: string;
                protected __channelAlias: string | null | undefined;
                protected __defaultAlias: string | null | undefined;
                protected __monthAlias: string | null | undefined;
                protected __numChannels: number | null | undefined;
                protected __currentChannel: number | null | undefined;
                protected __result: number | null | undefined;
                protected __defaultValue: number | null | undefined;
                protected __oldInputData: any[] | null | undefined;
                protected __inputData: any | null | undefined;
                protected __index: number | null | undefined;
                protected __editingMode: boolean | null | undefined;
                protected readonly __maxValueFontSize = 62;
                protected readonly __maxValueLabelFontSize = 18;
                protected __rectHeight: number | null | undefined;
                protected __rectCount: number;
                protected readonly __valueScaleFactor: number;
                protected __fontSizeValue: number | null | undefined;
                protected __resultsArray: any | null | undefined;
                protected __fontSizeLabel: number | null | undefined;
                protected __linearGrad: string;
                /*** Helper Variables ***/
                protected __processControlExecuting: number;
                protected __oldLength: number;
                /**
                  * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                  * Call attribute processor functions here to initialize default values!
                  */
                __previnit(): void;
                /**
                 * @description Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values.
                 * @returns {void}
                 */
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
                controlWidth: number;
                controlHeight: number;
                protected __onResized: () => (evt: EventProvider.Event, ctrl: Controls.Analytics.AnalyticsControl) => void;
                setControlBackgroundColorStart(valueNew: SolidColor): void;
                getControlBackgroundColorStart(): SolidColor;
                protected __processControlBackgroundColorStart(): void;
                setControlBackgroundColorEnd(valueNew: SolidColor): void;
                getControlBackgroundColorEnd(): SolidColor;
                protected __processControlBackgroundColorEnd(): void;
                setControlType(valueNew: string): void;
                getControlType(): string;
                setChannelAlias(valueNew: string): void;
                getChannelAlias(): string;
                setDefaultAlias(valueNew: string): void;
                getDefaultAlias(): string;
                setNumChannels(valueNew: object): void;
                getNumChannels(): number;
                protected __processNumChannels(): void;
                setCurrentChannel(valueNew: object): void;
                getCurrentChannel(): number;
                setResult(valueNew: object): void;
                getResult(): number;
                setDefaultValue(valueNew: object): void;
                getDefaultValue(): number;
                protected __processCurrentResult(): void;
                setInputData(valueNew: string): void;
                protected __onResolverForInputDataWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<any>) => void;
                getInputData(): any;
                protected __processInputData(): void;
                setMonthAlias(valueNew: string): void;
                getMonthAlias(): string;
                protected __processMonthAlias(): void;
                setShowMilliseconds(valueNew: boolean): void;
                getShowMilliseconds(): boolean;
                protected __processShowMilliseconds(): void;
                setDayAlias(valueNew: string): void;
                getDayAlias(): string;
                protected __processDayAlias(): void;
                protected __processControl(forceRedraw?: boolean, resized?: boolean): void;
                protected __processControlDirectly(forceRedraw: boolean, resized?: boolean): void;
                protected __redraw(): void;
                protected __updateValues(forceRedraw: boolean): void;
                protected __processAmountDecimals(): void;
                protected __processColorGradient(): void;
                protected __processColor(): void;
                protected __processBorderRadius(): void;
                protected __resetAutoSizeValues(): void;
            }
        }
    }
}
