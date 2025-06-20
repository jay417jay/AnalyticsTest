declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            class CurveSketcher extends TcHmi.Controls.Analytics.AnalyticsControl {
                /**
                 * @description Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elementSvg: JQuery;
                protected __elementSvgCoordinateSystem: JQuery;
                protected __elementSvgCoordinateSystemGraph: JQuery;
                protected __elementSvgTextCount: JQuery;
                protected __elementSvgTextCountValley: JQuery;
                protected __elementSvgTextCountRate: JQuery;
                protected __elementSvgTextCountPeak: JQuery;
                protected __elementSvgTextCountAlias: JQuery;
                protected __elementSvgTextValue: JQuery;
                protected __elementSvgTextValueValley: JQuery;
                protected __elementSvgTextValueRate: JQuery;
                protected __elementSvgTextValuePeak: JQuery;
                protected __elementSvgTextDate: JQuery;
                protected __elementSvgTextDateValley: JQuery;
                protected __elementSvgTextDateRate: JQuery;
                protected __elementSvgTextDatePeak: JQuery;
                protected __maxRateOfChange: number | null | undefined;
                protected __lastPeak: number | null | undefined;
                protected __lastValley: number | null | undefined;
                protected __timeMaxRateOfChange: any | null | undefined;
                protected __lastTimeValley: any | null | undefined;
                protected __lastTimePeak: any | null | undefined;
                protected __countValley: number | null | undefined;
                protected __countPeak: number | null | undefined;
                protected __countMaxRateOfChange: number | null | undefined;
                protected __showMaxRateOfChange: boolean | null | undefined;
                protected __counterAlias: string | null | undefined;
                protected __monthAlias: string | null | undefined;
                protected __showMilliSeconds: boolean | null | undefined;
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
                setLastPeak(valueNew: number): void;
                getLastPeak(): number;
                protected __processLastPeak(): void;
                setLastValley(valueNew: number): void;
                getLastValley(): number;
                protected __processLastValley(): void;
                setMaxRateOfChange(valueNew: number): void;
                getMaxRateOfChange(): number;
                protected __processMaxRateOfChange(): void;
                setLastTimePeak(valueNew: object): void;
                getLastTimePeak(): any;
                protected __processLastTimePeak(): void;
                setLastTimeValley(valueNew: object): void;
                getLastTimeValley(): any;
                protected __processLastTimeValley(): void;
                setTimeMaxRateOfChange(valueNew: object): void;
                getTimeMaxRateOfChange(): any;
                protected __processLastTimeMaxRateOfChange(): void;
                setCountValley(valueNew: number): void;
                getCountValley(): number;
                protected __processCountValley(): void;
                setCountPeak(valueNew: number): void;
                getCountPeak(): number;
                protected __processCountPeak(): void;
                setShowMaxRateOfChange(valueNew: boolean): void;
                getShowMaxRateOfChange(): boolean;
                protected __processShowMaxRateOfChange(): void;
                setCountMaxRateOfChange(valueNew: number): void;
                getCountMaxRateOfChange(): number;
                protected __processCountMaxRateOfChange(): void;
                setShowMilliSeconds(valueNew: boolean): void;
                getShowMilliSeconds(): boolean;
                protected __processShowMilliSeconds(): void;
                setCounterAlias(valueNew: string): void;
                getCounterAlias(): string;
                protected __processCounterAlias(): void;
                setMonthAlias(valueNew: string): void;
                getMonthAlias(): string;
                protected __processMonthAlias(): void;
                protected __processColor(): void;
            }
        }
    }
}
