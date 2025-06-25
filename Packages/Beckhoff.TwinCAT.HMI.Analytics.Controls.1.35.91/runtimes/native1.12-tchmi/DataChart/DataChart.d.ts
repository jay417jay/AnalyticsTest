declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            class DataChart extends TcHmi.Controls.Analytics.AnalyticsControl {
                /**
                 * Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elChartContainer: JQuery;
                /** Raw received data */
                protected __rawData: I_SE_DataSymbolValue | any | null;
                /** Data Symbol */
                protected __symbolRawData: Symbol;
                /** Chart Info Symbol */
                protected __symbolChartInfo: Symbol;
                /** Control ID */
                protected __controlId: string;
                /** Chart control*/
                protected __elChartCtrl: Charting | undefined;
                /** Hander of the data sources and the communication*/
                protected __dataSourceHandler: DataSourceHandler;
                /** List of all datasources*/
                protected __dataSourceList: I_SE_DataSourceSymbolEntry[];
                /** Handler of the chart-properties */
                protected __chartPropertyHandler: DataChartPropertyHandler;
                /** Counts how often the control tried to connect to the data symbol */
                protected __dataSymbolConnectCounter: number;
                /** Counts how often the control tried to connect to the info symbol */
                protected __infoSymbolConnectCounter: number;
                /** Is true while opening the property page (handling of the specific property-datatypes) */
                protected __firstCallPropertyHandling: boolean;
                /** Calendar element */
                protected __elCalendar: CustomElements.Calendar;
                /**control-symbol for the source manager popup */
                protected __sourceManagerPopup: TcHmi.Controls.Analytics.SourceManagerPopup | null | undefined;
                /**If true user is allowed to see and edit datasources */
                protected __showDataSources: boolean;
                /**if true no chart will be drawn until new data has been received */
                protected __waitForNewData: boolean;
                /** Keys of not-element-specific localizations */
                protected __localKeys: {
                    Chart_Type: string;
                    Fillmode: string;
                    YT_Chart: string;
                    YT_Chart_Description: string;
                    Bar_Chart: string;
                    Bar_Chart_Description: string;
                    Pie_Chart: string;
                    Pie_Chart_Description: string;
                    Ring_Chart: string;
                    Ring_Chart_Description: string;
                    Compare_YT_Chart: string;
                    Compare_YT_Chart_Description: string;
                    TimeSeries_Bar_Chart: string;
                    TimeSeries_Bar_Chart_Description: string;
                    Chart_Settings: string;
                    Y_Axis_Description: string;
                    Use_Hover_Effect: string;
                    Channels: string;
                    Channel: string;
                    Timeranges: string;
                    Timerange: string;
                    Refresh_Interval: string;
                    Compare_Type: string;
                    Compare_Interval: string;
                    Previous: string;
                    Previous_Maskulin: string;
                    Previous_Neutral: string;
                    Past: string;
                    Past_Maskulin: string;
                    Past_Neutral: string;
                    Past_Plural: string;
                    This: string;
                    This_Maskulin: string;
                    This_Neutral: string;
                    Seconds: string;
                    Minutes: string;
                    Hours: string;
                    Days: string;
                    Weeks: string;
                    Months: string;
                    Years: string;
                    Second: string;
                    Minute: string;
                    Hour: string;
                    Day: string;
                    Week: string;
                    Month: string;
                    Year: string;
                    Millisecond_s: string;
                    Second_s: string;
                    Minute_s: string;
                    Hour_s: string;
                    Day_s: string;
                    Week_s: string;
                    Month_s: string;
                    Year_s: string;
                    Now: string;
                    From: string;
                    To: string;
                    SoFar: string;
                    Today: string;
                    Yesterday: string;
                    DayBeforeYesterday: string;
                    Choose_Interval: string;
                    Custom_Interval: string;
                    Edit_Properties: string;
                    Refresh_Chart: string;
                    Choose_Variable: string;
                    Ends_In_Future: string;
                    Timerange_To_Smaller_From: string;
                    FillMode_Fill: string;
                    FillMode_None: string;
                    CompareType_Absolute: string;
                    CompareType_Relative: string;
                    CompareType_MatchStart: string;
                    CompareType_MatchEnd: string;
                    January: string;
                    February: string;
                    March: string;
                    April: string;
                    May: string;
                    June: string;
                    July: string;
                    August: string;
                    September: string;
                    October: string;
                    November: string;
                    December: string;
                    Monday: string;
                    Tuesday: string;
                    Wednesday: string;
                    Thursday: string;
                    Friday: string;
                    Saturday: string;
                    Sunday: string;
                    Refresh_Interval_To_Small: string;
                    Edit_DataSources: string;
                    No_Data_For_Source_In_Timerange: string;
                    No_Recordings_Found_For_Source: string;
                    Subtract_Initial_Value: string;
                    Bar_Width: string;
                    Bar_Interval_To_Small: string;
                    Bar_Interval_To_Large: string;
                    Time_Input_Wrong_Format: string;
                    Swiched_ChartType_To_Compare_YT_Chart: string;
                    Swiched_ChartType_To_TimeSeries_Bar_Chart: string;
                    Click_To_Edit_Colors: string;
                    To_By_Compare_Interval: string;
                    Value_Not_Editable: string;
                    Visible: string;
                    Interval: string;
                    Compare_Settings: string;
                    Only_Editable_In_TS_Barchart: string;
                    Only_Editable_With_Relative_Timerange: string;
                    Only_Editable_In_CompareChart: string;
                    Reference: string;
                    Acquisition: string;
                    Color: string;
                    Color_For_Timerange: string;
                };
                /** SetTimeOut-Scaling-ID*/
                protected __waitTimeoutScalingID: number;
                /** SetTimeOut-Renaming-ID*/
                protected __waitTimeoutRenamingID: number;
                /** Only true if user changed visibility of a timerange*/
                protected __timerangevisibilityChanged: boolean;
                /** Destroy for raw-data-symbol watch*/
                protected __rawDataSymbolWatchDestroy: DestroyFunction;
                /** Destroy for info-symbol watch*/
                protected __infoSymbolWatchDestroy: DestroyFunction;
                /** Received config from server extension*/
                protected __onChartConfigReceived: boolean;
                /** If true chart type has been switched automatically*/
                protected __onChartTypeSwitchedAutomatically: boolean;
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
                protected __setControlId(): void;
                protected __onResized: () => (evt: EventProvider.Event, ctrl: Controls.Analytics.AnalyticsControl) => void;
                protected __setChartSize(): void;
                __processWidth(): void;
                __processHeight(): void;
                protected __initalizeEditArea(): void;
                protected __editAreaChartType(chartType: string): () => void;
                /** Y Axis Description*/
                protected __axisDescription: string;
                setAxisDescription(valueNew: string): void;
                protected __processAxisDescription(): void;
                getAxisDescription(): string;
                /** Dark Mode */
                protected __darkMode: boolean;
                setDarkMode(valueNew: boolean): void;
                getDarkMode(): boolean;
                /** Channels */
                protected __channels: I_ChannelConfigEntry[];
                setChannels(valueNew: I_ChannelConfigEntry[] | null): void;
                getChannels(): I_ChannelConfigEntry[];
                protected __processChannels(): void;
                /** Timeranges */
                protected __timeranges: I_SE_TimerangeEntry[];
                setTimeranges(valueNew: I_SE_TimerangeEntry[] | null): void;
                getTimeranges(): I_SE_TimerangeEntry[];
                protected __processTimeranges(): void;
                /** Chart Type  */
                protected __chartTyp: string;
                protected __ctype: E_ChartType;
                setChartTyp(valueNew: string | null): void;
                getChartTyp(): string;
                protected __processChartType(): void;
                protected __isCompareChartType(chartType: E_ChartType): boolean;
                protected __calculateCompareInterval(): void;
                /** Compare interval in seconds */
                protected __compareInterval: I_SE_DisplayRange;
                setCompareInterval(valueNew: object | null): void;
                getCompareInterval(rawValue?: boolean): I_SE_DisplayRange;
                protected __processCompareInterval(): void;
                /** Bar Width in seconds for Time Series Bar Chart*/
                protected __barIntervalWidth: I_SE_DisplayRange;
                setBarIntervalWidth(valueNew: object | null): void;
                getBarIntervalWidth(rawValue?: boolean): I_SE_DisplayRange;
                protected __processBarIntervalWidth(allowDataCharting?: boolean): void;
                /** Compare type*/
                protected __compareType: ECompareChartCompareTypes;
                setCompareType(valueNew: string | null): void;
                protected __setCompareType(compareTypeString: string): void;
                getCompareType(): string;
                protected __processCompareType(): void;
                /** Refresh interval in seconds */
                protected __refreshInterval: I_SE_DisplayRange;
                setRefreshInterval(valueNew: object | null): void;
                getRefreshInterval(rawValue?: boolean): I_SE_DisplayRange;
                protected __processRefreshInterval(): void;
                /** Refresh Fillmode of the chart */
                protected __fillMode: EFillMode;
                setFillMode(valueNew: string | null, processFillMode?: boolean): void;
                getFillMode(): string;
                protected __processFillMode(): void;
                /** If false the hover effect will be disabled at the charts */
                protected __useHoverEffect: boolean;
                setUseHoverEffect(valueNew: boolean | null): void;
                getUseHoverEffect(): boolean;
                protected __processUseHoverEffect(): void;
                protected __showDifferentialValues: boolean;
                setShowDifferentialValues(valueNew: boolean | null): void;
                getShowDifferentialValues(): boolean;
                protected __processShowDifferentialValues(): void;
                protected __setChartConfigFromServerExtension(dataSourcesRaw: string): void;
                protected __setChartConfigInServerExtension(): void;
                protected __checkNameAlias(): void;
                protected __generateChartTitle(): string;
                protected __getFirstPart(input: string): string | undefined;
                protected __connectToServerSymbols(): void;
                protected __connectToDataSymbol(): void;
                protected __connectToInfoSymbol(): void;
                protected __sendMapRequest(symbolName: string, callback: () => void): void;
                protected __watchDataSymbol(): void;
                protected __watchInfoSymbol(): void;
                protected __sendUnMapRequest(symbolName: string): void;
                protected __onDataReceived(valueNew: object): void;
                protected __onInfoReceived(valueNew: object): void;
                protected __initCharting(): void;
                protected __restoreChart(): void;
                protected __dataCharting(): void;
                protected __getChartOptions(withData?: boolean): I_SE_Base_ChartOptions;
                dropChartConfig(): void;
                /**
                 * Update the control id (e.g. when user changes)
                 * @param controlID
                 */
                updateChartID(): void;
                protected __beforeOpenPropertyWindow(): void;
                protected __openPropertyWindow(): void;
                protected __processDataSources(dataSourcesRaw: string): void;
                protected __setProperties(): void;
                protected __onAddChannelConfig(): () => void;
                protected __onAddTimerangeConfig(): () => void;
                protected __propertyHandling(propDesc: Property, propName: HTMLElement): HTMLElement;
                protected __onChartPropertyChanged(e: CustomEvent): void;
                protected __onTimerangePropertyChanged(e: CustomEvent): void;
                protected __processLocalizationReader(): void;
                protected __getLocalizationKey(value: string): string | null;
                protected __initSourceManagerPopup(): void;
                protected __onSourceManager(): void;
                protected __getApiAccessForDomains(): void;
                protected __setBarIntervalWidth(allowDataCharting?: boolean): void;
                protected __processCustomEdits(): void;
            }
        }
        namespace IDParser {
            function GetLayoutIDWithoutDisplayMode(id: string): string;
            function CreateChartControlID(parentId: string, id: string): string;
        }
        class ChartTypes {
            static readonly YTChart: string;
            static readonly BarChart: string;
            static readonly CompareYTChart: string;
            static readonly TimeSeriesBarChart: string;
            static readonly PieChart: string;
            static readonly RingChart: string;
            static readonly SingleValueChart: string;
        }
    }
}
