declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            class HistogramMulti extends TcHmi.Controls.Analytics.AnalyticsControl {
                /**
                 * @description Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elementSvg: JQuery;
                protected __elementSvgDefs: JQuery;
                protected __elementSvgCoordinateSystem: JQuery;
                protected __elementSvgYAxisLabel: JQuery;
                protected __elementSvgBin: JQuery;
                protected __elementSvgBinStroke: JQuery;
                protected __elementSvgBinValue: JQuery;
                protected __elementSvgBinLabel: JQuery;
                protected __elementSvgLegendRect: JQuery;
                protected __elementSvgLegendText: JQuery;
                protected __elementSvgUnitButton: JQuery;
                protected __inputData: any | null | undefined;
                protected __sectionsLowerBorder: any | null | undefined;
                protected __sectionsUpperBorders: any | null | undefined;
                protected __showValues: boolean | null | undefined;
                protected __showOuterBins: boolean | null | undefined;
                protected __writeLabelsVertical: boolean | null | undefined;
                protected __histogramUnit: string | null | undefined;
                protected __linearGrad: string;
                private __sectionsBorders;
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
                setInputData(valueNew: string): void;
                protected __onResolverForInputDataWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<any[]>) => void;
                getInputData(): any;
                protected __processInputData(): void;
                getSectionsUpperBorders(): any;
                setSectionsUpperBorders(valueNew: object): void;
                getSectionsLowerBorder(): any;
                setSectionsLowerBorder(valueNew: object): void;
                protected __processBorders(): void;
                setHistogramUnit(valueNew: string): void;
                getHistogramUnit(): string;
                setShowOuterBins(valueNew: boolean): void;
                getShowOuterBins(): boolean;
                protected __processShowOuterBins(): void;
                protected __processBinsH(): void;
                setShowValues(valueNew: boolean): void;
                getShowValues(): boolean;
                protected __processShowValues(): void;
                setWriteLabelsVertical(valueNew: boolean): void;
                getWriteLabelsVertical(): boolean;
                protected __processWriteLabelsVertical(): void;
                protected __processColorGradient(): void;
                protected __processColor(): void;
                private DrawHistogramMulti;
            }
        }
    }
}
