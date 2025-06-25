declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            class TimeBasedTeachPath extends TcHmi.Controls.Analytics.AnalyticsControl {
                /**
                 * @description Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elementSvgChart: JQuery;
                protected __elementSvgChartDefs: JQuery;
                protected __elementWrittenValues: JQuery;
                protected __elementValuesFile: JQuery;
                protected __elementInnerText: JQuery;
                protected __elementStrokeCircle: JQuery;
                protected __elementStrokeCircleOuter: JQuery;
                protected __elementCircleOuter: JQuery;
                protected __elementSvgLegend: JQuery;
                protected __elementSvgLegendDefs: JQuery;
                protected __elementSvgLegendRectWrittenValues: JQuery;
                protected __elementSvgLegendTextWrittenValues: JQuery;
                protected __elementSvgLegendRectValuesFile: JQuery;
                protected __elementSvgLegendTextValuesFile: JQuery;
                protected __elementSvgLegendTextCurCycles: JQuery;
                protected __writtenValuesColor: SolidColor | null | undefined;
                protected __valuesInFileColor: SolidColor | null | undefined;
                protected __currentTeachCycles: number | null | undefined;
                protected __currentCyclesAlias: string | null | undefined;
                protected __valuesInFileAlias: string | null | undefined;
                protected __writtenValuesAlias: string | null | undefined;
                protected __valuesInFile: number | null | undefined;
                protected __writtenValues: number | null | undefined;
                protected __displayFormat: string | null | undefined;
                protected __percentage: number | null | undefined;
                protected __showCurrentTeachCycles: boolean | null | undefined;
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
                setCurrentCyclesAlias(valueNew: string): void;
                getCurrentCyclesAlias(): string;
                protected __processCurrentCyclesAlias(): void;
                setValuesInFileAlias(valueNew: string): void;
                getValuesInFileAlias(): string;
                protected __processValuesInFileAlias(): void;
                setWrittenValuesAlias(valueNew: string): void;
                getWrittenValuesAlias(): string;
                protected __processWrittenValuesAlias(): void;
                setWrittenValues(valueNew: number): void;
                getWrittenValues(): number;
                setValuesInFile(valueNew: number): void;
                getValuesInFile(): number;
                setWrittenValuesColor(valueNew: SolidColor): void;
                getWrittenValuesColor(): SolidColor;
                protected __processWrittenValuesColor(): void;
                setValuesInFileColor(valueNew: SolidColor): void;
                getValuesInFileColor(): SolidColor;
                protected __processValuesInFileColor(): void;
                setDisplayFormat(valueNew: string): void;
                getDisplayFormat(): string;
                protected __processDisplayFormat(): void;
                protected __processNameAlias(): void;
                protected __processWrittenValues(): void;
                protected __processValuesInFile(): void;
                protected __processPercentage(): void;
                setShowCurrentTeachCycles(valueNew: boolean): void;
                getShowCurrentTeachCycles(): boolean;
                protected __processShowCurrentTeachCycles(): void;
                setCurrentTeachCycles(valueNew: number): void;
                getCurrentTeachCycles(): number;
                protected __processCurrentTeachCycles(): void;
                protected __processColorGradient(): void;
                protected __processColor(): void;
                private DrawTeachPath;
            }
        }
    }
}
