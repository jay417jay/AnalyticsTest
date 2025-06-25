declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            class TrendLineChart extends TcHmi.Controls.Analytics.AnalyticsControl {
                /**
                 * @description Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elButtons: JQuery;
                protected __elCheckboxContainer: JQuery;
                protected __elStartTime: JQuery;
                protected __elAvgTime: JQuery;
                protected __elEndTime: JQuery;
                protected __elCheckboxLabels: JQuery;
                protected __lineChart: TcHmi.Controls.Beckhoff.TcHmiLineChart | undefined;
                protected __rawData: any | null | undefined;
                protected __lastValueTimestamp: DCTimestruct | null | undefined;
                protected __countValues: number;
                protected __monthAlias: string | null | undefined;
                protected __timeRangeInMin: number;
                protected __lineColors: string[] | null | undefined;
                protected __displayNames: string[] | null | undefined;
                protected __drawVariables: boolean[] | null | undefined;
                protected __hourAlias: string;
                protected __hoursAlias: string;
                protected __dayAlias: string;
                protected __daysAlias: string;
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
                setRawData(valueNew: object): void;
                getRawData(): any;
                protected __processRawData(): void;
                setLastValueTimestamp(valueNew: object): void;
                getLastValueTimestamp(): DCTimestruct;
                protected __processLastValueTimestamp(): void;
                protected __processTimestamps(): void;
                setCountValues(valueNew: object): void;
                getCountValues(): number;
                protected __processCountValues(): void;
                protected __yAxis: TcHmi.Controls.Beckhoff.TcHmiLineChart.YAxis;
                setYAxis(valueNew: TcHmi.Controls.Beckhoff.TcHmiLineChart.YAxis | null): void;
                getYAxis(): TcHmi.Controls.Beckhoff.TcHmiLineChart.YAxis;
                protected __processYAxis(): void;
                protected __yMainTickSteps: number;
                setYMainTickSteps(valueNew: number | null): void;
                getYMainTickSteps(): number;
                protected __processYMainTickSteps(): void;
                protected __showYSubTicks: boolean;
                setShowYSubTicks(valueNew: boolean | null): void;
                getShowYSubTicks(): boolean;
                protected __processShowYSubTicks(): void;
                protected __ySubTickSteps: number;
                setYSubTickSteps(valueNew: number | null): void;
                getYSubTickSteps(): number;
                protected __processYSubTickSteps(): void;
                setLineColors(valueNew: object): void;
                getLineColors(): string[];
                protected __processLineColors(): void;
                setDisplayNames(valueNew: object): void;
                getDisplayNames(): string[];
                protected __processDisplayNames(): void;
                protected __processFontColor(): void;
                protected __processColor(): void;
                protected __processLocal(): void;
                setHourAlias(valueNew: string): void;
                getHourAlias(): string;
                protected __processHourAlias(): void;
                setHoursAlias(valueNew: string): void;
                getHoursAlias(): string;
                protected __processHoursAlias(): void;
                setDayAlias(valueNew: string): void;
                getDayAlias(): string;
                protected __processDayAlias(): void;
                setDaysAlias(valueNew: string): void;
                getDaysAlias(): string;
                protected __processDaysAlias(): void;
                setMonthAlias(valueNew: string): void;
                getMonthAlias(): string;
                protected __processMonthAlias(): void;
                protected __drawCharting(): void;
                protected __processSizes(): void;
                __processHeight(): void;
                protected __processDefaultMinHeight(): void;
                protected __onButtonClicked(index: number): () => void;
            }
        }
    }
}
