declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            class DenStream extends TcHmi.Controls.Analytics.AnalyticsControl {
                /**
                 * @description Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elButtons: JQuery;
                protected __elButtonContainer: JQuery;
                protected __elCheckboxContainer: JQuery;
                protected __elementExpander: JQuery;
                protected __elementExpanderImg: JQuery;
                protected __elementChartingContainer: JQuery;
                protected __elementConfigContainer: JQuery;
                protected __elementConfig: JQuery;
                protected __elementBufferOverflowAlert: JQuery;
                protected __elementConfigList: JQuery;
                protected __elementConfigListItem: JQuery;
                protected __lineChart: TcHmi.Controls.Beckhoff.TcHmiLineChart | null | undefined;
                protected __highlightColor: string | null | undefined;
                protected __inputsDS: any | null | undefined;
                protected __updateMicroCluster: boolean | null | undefined;
                protected __numberCluster: number | null | undefined;
                protected __clusterIndex: number | null | undefined;
                protected __numberPotMCs: number | null | undefined;
                protected __numberOutMCs: number | null | undefined;
                protected __bufferOverflow: boolean | null | undefined;
                protected __lastSwitch: any | null | undefined;
                protected __lastEvent: any | null | undefined;
                protected __countValues: number | null | undefined;
                protected __downSizingFactor: number | null | undefined;
                protected __axisRangeScaling: string | null | undefined;
                protected __xAxisRanges: any | null | undefined;
                protected __yAxisRanges: any | null | undefined;
                protected __updateMicroClusterAlias: string | null | undefined;
                protected __numberClusterAlias: string | null | undefined;
                protected __numberPotMCsAlias: string | null | undefined;
                protected __numberOutMCsAlias: string | null | undefined;
                protected __bufferOverflowAlias: string | null | undefined;
                protected __lastSwitchAlias: string | null | undefined;
                protected __lastEventAlias: string | null | undefined;
                protected __monthAlias: string | null | undefined;
                protected __inputAlias: string | null | undefined;
                protected __data: any | null | undefined;
                protected __pointDescs: any | null | undefined;
                protected __inputCollection: any | null | undefined;
                protected __clusterCollection: any | null | undefined;
                protected __yAxisMaxValue: number;
                protected __yAxisMinValue: number;
                protected __xAxisMaxValue: number;
                protected __xAxisMinValue: number;
                protected __buttonIndex1: number;
                protected __buttonIndex2: number;
                protected __isExpanded: boolean;
                protected __expanderMouseClickEvent: DestroyFunction | null;
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
                protected __onResized: () => (evt: EventProvider.Event, ctrl: Controls.Analytics.AnalyticsControl) => void;
                protected __onButtonClicked(index: number): () => void;
                setInputsDS(valueNew: object | null): void;
                protected __onResolverForInputsDSWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<object>) => void;
                getInputsDS(): any;
                protected __processInputsDS(): void;
                setUpdateMicroCluster(valueNew: boolean): void;
                getUpdateMicroCluster(): boolean;
                protected _processUpdateMicroCluster(): void;
                setCountValues(valueNew: object): void;
                getCountValues(): number;
                protected __processCountValues(): void;
                setClusterIndex(valueNew: number): void;
                getClusterIndex(): number;
                protected __processClusterIndex(): void;
                setDownSizingFactor(valueNew: object): void;
                getDownSizingFactor(): number;
                protected __processDownSizingFactor(): void;
                setAxisRangeScaling(valueNew: string): void;
                getAxisRangeScaling(): string;
                protected __processAxisRangeScaling(): void;
                setXAxisRanges(valueNew: object): void;
                getXAxisRanges(): any;
                protected __processXAxisRanges(): void;
                setYAxisRanges(valueNew: object): void;
                getYAxisRanges(): any;
                protected __processYAxisRanges(): void;
                setHighlightColor(valueNew: string): void;
                getHighlightColor(): string;
                protected __processHighlightColor(): void;
                protected __processFontColor(): void;
                protected __processColor(): void;
                protected __processTheme(): void;
                setNumberCluster(valueNew: number): void;
                getNumberCluster(): number;
                protected __processNumberCluster(): void;
                setNumberpotMCs(valueNew: number): void;
                getNumberpotMCs(): number;
                protected __processNumberpotMCs(): void;
                setNumberOutMCs(valueNew: number): void;
                getNumberOutMCs(): number;
                protected __processNumberOutMCs(): void;
                setBufferOverflow(valueNew: boolean): void;
                getBufferOverflow(): boolean;
                protected __processBufferOverflow(): void;
                setLastEvent(valueNew: object): void;
                getLastEvent(): any;
                protected __processLastEvent(): void;
                setLastSwitch(valueNew: object): void;
                getLastSwitch(): any;
                protected __processLastSwitch(): void;
                setUpdateMicroClusterAlias(valueNew: string): void;
                getUpdateMicroClusterAlias(): string;
                protected __processUpdateMicroClusterAlias(): void;
                setNumberClusterAlias(valueNew: string): void;
                getNumberClusterAlias(): string;
                protected __processNumberClusterAlias(): void;
                setNumberPotMCsAlias(valueNew: string): void;
                getNumberPotMCsAlias(): string;
                protected __processNumberPotMCsAlias(): void;
                setNumberOutMCsAlias(valueNew: string): void;
                getNumberOutMCsAlias(): string;
                protected __processNumberOutMCsAlias(): void;
                setBufferOverflowAlias(valueNew: string): void;
                getBufferOverflowAlias(): string;
                protected __processBufferOverflowAlias(): void;
                setLastSwitchAlias(valueNew: string): void;
                getLastSwitchAlias(): string;
                protected __processLastSwitchAlias(): void;
                setLastEventAlias(valueNew: string): void;
                getLastEventAlias(): string;
                protected __processLastEventAlias(): void;
                setMonthAlias(valueNew: string): void;
                getMonthAlias(): string;
                protected __processMonthAlias(): void;
                setInputAlias(valueNew: string): void;
                getInputAlias(): string;
                protected __processInputAlias(): void;
                protected WriteConfig(): void;
                protected DrawCharting(): void;
                protected DrawDenStream(): void;
            }
        }
    }
}
