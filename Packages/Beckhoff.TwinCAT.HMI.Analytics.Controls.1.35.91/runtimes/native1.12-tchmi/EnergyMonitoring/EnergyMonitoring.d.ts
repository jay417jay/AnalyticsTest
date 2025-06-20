declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            class EnergyMonitoring extends TcHmi.Controls.Analytics.AnalyticsControl {
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
                protected __elementSvgError: JQuery;
                protected __elementSvgWarning: JQuery;
                protected __elementSvgMinMax: JQuery;
                protected __elementSvgCurrentValue: JQuery;
                protected __elementSvgMean: JQuery;
                protected __elementSvgLines: JQuery;
                protected __elementSvgFillRect: JQuery;
                protected __elementSvgText: JQuery;
                protected __elementSvgMinMaxMarker: JQuery;
                protected __elementSvgMinMaxButton: JQuery;
                protected __elementSvgMinMaxTimes: JQuery;
                protected __elementSvgMinMaxMarkerText: JQuery;
                protected __elementSvgTextCurrentValue: JQuery;
                protected __currentValue: number | null | undefined;
                protected __mean: number | null | undefined;
                protected __min: number | null | undefined;
                protected __max: number | null | undefined;
                protected __ranges: any | null | undefined;
                protected __unit: string | null | undefined;
                protected __maxTimestamp: object | null | undefined;
                protected __minTimestamp: object | null | undefined;
                protected __monthAlias: string | null | undefined;
                protected __targetAlias: string | null | undefined;
                protected __messageAlias: string | null | undefined;
                protected __minAlias: string | null | undefined;
                protected __maxAlias: string | null | undefined;
                protected __errorColor: SolidColor | null | undefined;
                protected __errorColorHex: string | null | undefined;
                protected __warningColor: SolidColor | null | undefined;
                protected __warningColorHex: string | null | undefined;
                protected __minMaxColor: SolidColor | null | undefined;
                protected __minMaxColorHex: string | null | undefined;
                protected __minmaxMarkerColor: SolidColor | null | undefined;
                protected __minmaxMarkerColorHex: string | null | undefined;
                protected __meanColor: SolidColor | null | undefined;
                protected __meanColorHex: string | null | undefined;
                protected __linearGrad: string;
                protected __defaultControl: boolean;
                protected __firstRun: boolean;
                protected __defaultRange: string;
                protected __minmaxButtonClicked: boolean;
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
                setCurrentValue(valueNew: number): void;
                getCurrentValue(): number;
                protected __processCurrentValue(): void;
                setMean(valueNew: number): void;
                getMean(): number;
                protected __processMean(): void;
                setMin(valueNew: number): void;
                getMin(): number;
                protected __processMin(): void;
                setMax(valueNew: number): void;
                getMax(): number;
                protected __processMax(): void;
                setRanges(valueNew: object): void;
                getRanges(): any;
                protected __processRanges(): void;
                setErrorColor(valueNew: string): void;
                getErrorColor(): SolidColor;
                protected __processErrorColor(): void;
                setWarningColor(valueNew: string): void;
                getWarningColor(): SolidColor;
                protected __processWarningColor(): void;
                setMinMaxColor(valueNew: string): void;
                getMinMaxColor(): SolidColor;
                protected __processMinMaxColor(): void;
                setMinMaxMarkerColor(valueNew: string): void;
                getMinMaxMarkerColor(): SolidColor;
                protected __processMinMaxMarkerColor(): void;
                setMeanColor(valueNew: string): void;
                getMeanColor(): SolidColor;
                protected __processMeanColor(): void;
                setUnit(valueNew: string): void;
                getUnit(): string;
                protected __processUnit(): void;
                setMessageAlias(valueNew: string): void;
                getMessageAlias(): string;
                protected __processMessageAlias(): void;
                setMinAlias(valueNew: string): void;
                getMinAlias(): string;
                protected __processMinAlias(): void;
                setTargetAlias(valueNew: string): void;
                getTargetAlias(): string;
                protected __processTargetAlias(): void;
                setMaxAlias(valueNew: string): void;
                getMaxAlias(): string;
                protected __processMaxAlias(): void;
                setMinTimestamp(valueNew: object): void;
                getMinTimestamp(): object;
                setMaxTimestamp(valueNew: object): void;
                getMaxTimestamp(): object;
                setMonthAlias(valueNew: string): void;
                getMonthAlias(): string;
                protected __processMonthAlias(): void;
                protected __processAmountDecimals(): void;
                protected __processColor(): void;
                protected __processShowTitle(): void;
                protected __processEnergyControl(): void;
                private DrawEnergyControl;
            }
        }
    }
}
