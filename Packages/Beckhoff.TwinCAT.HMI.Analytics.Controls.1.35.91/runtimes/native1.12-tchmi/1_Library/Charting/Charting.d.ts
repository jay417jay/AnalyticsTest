declare namespace TcHmi.Controls.Analytics {
    class Charting extends TcHmi.Controls.System.TcHmiControl {
        /**
         * Constructor of the control
         * @param {JQuery} element Element from HTML (internal, do not use)
         * @param {JQuery} pcElement precompiled Element (internal, do not use)
         * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
         * @returns {void}
         */
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        /** Root element (Container for SVG-Canvas and table) */
        protected __elTemplateRoot: JQuery;
        /** Shared properties of the chart*/
        protected __props: Chart_Properties;
        /** Chart Element*/
        protected __chart: BaseChart;
        /** Options of the chart (can be set by the user) */
        protected __options: I_SE_Base_ChartOptions;
        /** Container for the checkboxes */
        protected __elCheckboxContainer: JQuery;
        /** Variable Table Height */
        protected __variableTableHeight: number;
        /** Is true when the first chart has been created */
        protected __isInitalized: boolean;
        /** Width of the control */
        controlWidth: number;
        /** Height of the control */
        controlHeight: number;
        /** Loading icon*/
        protected __elLoadingIcon: CustomElements.LoaderIcon;
        /** Loading Texts Elements*/
        protected __loadingTexts: SVGText[];
        /** Is true if loading info is visible*/
        protected __loadingInfoVisible: boolean;
        get loadingInfoVisible(): boolean;
        /** Map of elements and their localization information */
        protected __localizedElements: Map<HTMLElement, {
            key: string;
            parameters?: any[];
        }>;
        /** Localization watch function */
        protected __destroyLocalizationWatch: DestroyFunction | null;
        /** Eventmanager */
        protected __eventListenerManager: EventListenerManager;
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
        getFontScaleFactor(width: any, height: any): number;
        protected __onResized: () => (evt: EventProvider.Event, ctrl: Controls.Analytics.AnalyticsControl) => void;
        scaleChartControl(width: number, height: number, redrawChart?: boolean): void;
        protected __scaleSvgArea(redrawChart?: boolean): void;
        setDarkMode(valueNew: boolean): void;
        getDarkMode(): boolean;
        private __processDarkMode;
        clearChart(): void;
        createInitChart(chartType?: E_ChartType): void;
        createChart(options: I_SE_Base_ChartOptions): boolean;
        protected __createChart(): void;
        setHoverEffect(useHover: boolean): void;
        /** Returns false if the diagram has not yet been completely drawn*/
        redrawChart(data: I_SE_DataSymbolValue): boolean;
        protected __createVariableTable(): void;
        private __channelEntryClick;
        createLoadingInfo(loadingFailed?: boolean): void;
        protected removeLoadingInfo(): void;
        protected __initLocalizations(): void;
        protected __getLocalizationKey(value: string): string | null;
    }
}
