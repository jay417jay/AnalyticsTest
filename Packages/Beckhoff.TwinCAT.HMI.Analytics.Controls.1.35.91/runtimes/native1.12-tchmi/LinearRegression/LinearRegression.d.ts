declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            class LinearRegression extends TcHmi.Controls.Analytics.AnalyticsControl {
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
                protected __elStartTime: JQuery;
                protected __elAvgTime: JQuery;
                protected __elEndTime: JQuery;
                protected __elTimeBox: JQuery;
                protected __elCheckboxLabels: JQuery;
                protected __lineChart: TcHmi.Controls.Beckhoff.TcHmiLineChart | null | undefined;
                protected __lineColor: string | null | undefined;
                protected __highlightColor: string | null | undefined;
                protected __pointColor: string | null | undefined;
                protected __inputItemLR: any | null | undefined;
                protected __input_x_CollectionLR: any | null | undefined;
                protected __dependent_y_CollectionLR: any | null | undefined;
                protected __controlType: string | null | undefined;
                protected __countValues: number | null | undefined;
                protected __downSizingFactor: number | null | undefined;
                protected __axisRangeScaling: string | null | undefined;
                protected __xAxisRanges: any | null | undefined;
                protected __yAxisRanges: any | null | undefined;
                protected __inputAlias: string | null | undefined;
                protected __data: any | null | undefined;
                protected __lineDescs: any | null | undefined;
                protected __yAxisMaxValue: number;
                protected __yAxisMinValue: number;
                protected __xAxisMaxValue: number;
                protected __xAxisMinValue: number;
                protected __buttonIndex: number;
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
                setInputItemLR(valueNew: object | null): void;
                protected __onResolverForInputItemLRWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<object>) => void;
                getInputItemLR(): any;
                protected __processInputItemLR(): void;
                setControlType(valueNew: string): void;
                getControlType(): string;
                protected _processControlType(): void;
                setCountValues(valueNew: object): void;
                getCountValues(): number;
                protected __processCountValues(): void;
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
                setInputAlias(valueNew: string): void;
                getInputAlias(): string;
                protected __processInputAlias(): void;
                setLineColor(valueNew: string): void;
                getLineColor(): string;
                protected __processLineColor(): void;
                setHighlightColor(valueNew: string): void;
                getHighlightColor(): string;
                protected __processHighlightColor(): void;
                setPointColor(valueNew: string): void;
                getPointColor(): string;
                protected __processPointColor(): void;
                protected __processFontColor(): void;
                protected __processColor(): void;
                protected __drawCharting(): void;
                protected __drawLinearRegression(): void;
            }
        }
    }
}
