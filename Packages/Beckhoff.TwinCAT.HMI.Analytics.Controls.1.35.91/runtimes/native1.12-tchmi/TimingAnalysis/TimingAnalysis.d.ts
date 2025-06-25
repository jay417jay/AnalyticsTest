declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            class TimingAnalysis extends TcHmi.Controls.Analytics.AnalyticsControl {
                /**
                 * @description Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elementSvg: JQuery;
                protected __elementSvgOn: JQuery;
                protected __elementSvgOff: JQuery;
                protected __elementSvgWholeCircle: JQuery;
                protected __elementState: JQuery;
                protected __elementStateOn: JQuery;
                protected __elementStateOff: JQuery;
                protected __elementCurrent: JQuery;
                protected __elementStateValues: JQuery;
                protected __elementStateOnValue: JQuery;
                protected __elementStateOffValue: JQuery;
                protected __elementCurrentValue: JQuery;
                protected __elementInnerContainer: JQuery;
                protected __elementSvgDefs: JQuery;
                protected __offColor: SolidColor | null | undefined;
                protected __onColor: SolidColor | null | undefined;
                protected __showMilliSeconds: boolean | null | undefined;
                protected __totalOn: any | null | undefined;
                protected __totalOff: any | null | undefined;
                protected __onAlias: string | null | undefined;
                protected __offAlias: string | null | undefined;
                protected __dayAlias: string | null | undefined;
                protected __currentAlias: string | null | undefined;
                protected __state: boolean | null | undefined;
                protected __current: any | null | undefined;
                protected __radialGrad: string;
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
                setOffColor(valueNew: SolidColor): void;
                getOffColor(): SolidColor;
                protected __processOffColor(): void;
                setOnColor(valueNew: SolidColor): void;
                getOnColor(): SolidColor;
                protected __processOnColor(): void;
                setShowMilliSeconds(valueNew: boolean): void;
                getShowMilliSeconds(): boolean;
                protected __processShowMilliSeconds(): void;
                setTotalOn(valueNew: object): void;
                getTotalOn(): any;
                protected __processTotalsOn(): void;
                setTotalOff(valueNew: object): void;
                getTotalOff(): any;
                protected __processTotalsOff(): void;
                setOnAlias(valueNew: string): void;
                getOnAlias(): string;
                protected __processOnAlias(): void;
                setOffAlias(valueNew: string): void;
                getOffAlias(): string;
                protected __processOffAlias(): void;
                setCurrentAlias(valueNew: string): void;
                getCurrentAlias(): string;
                protected __processCurrentAlias(): void;
                setState(valueNew: boolean): void;
                getState(): boolean;
                protected __processState(): void;
                setDayAlias(valueNew: string): void;
                getDayAlias(): string;
                protected __processDayAlias(): void;
                protected __processColorGradient(): void;
                protected __processColor(): void;
                protected __processTotals(): void;
                setCurrent(valueNew: object): void;
                getCurrent(): any;
                protected __processCurrents(): void;
                private DrawChart;
            }
        }
    }
}
