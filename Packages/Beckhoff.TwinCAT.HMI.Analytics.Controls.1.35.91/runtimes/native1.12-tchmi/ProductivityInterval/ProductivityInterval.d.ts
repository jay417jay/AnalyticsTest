declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            class ProductivityInterval extends TcHmi.Controls.Analytics.AnalyticsControl {
                /**
                 * @description Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elementSvg: JQuery;
                protected __elementCircleLabel: JQuery;
                protected __elementElapsedCircle: JQuery;
                protected __elementRemainingCircle: JQuery;
                protected __elementSvgWholeCircle: JQuery;
                protected __elementNeedle: JQuery;
                protected __elementSvgDefs: JQuery;
                protected __elementRectLabel: JQuery;
                protected __elementElapsedRect: JQuery;
                protected __elementRemainingRect: JQuery;
                protected __elementSvgWholeRect: JQuery;
                protected __elementPiecesText: JQuery;
                protected __elementLegendRectElapsed: JQuery;
                protected __elementLegendRectRemaining: JQuery;
                protected __elementLegendTextElapsed: JQuery;
                protected __elementLegendTextRemaining: JQuery;
                protected __elementLegendText: JQuery;
                protected __elementCurrentProductivityLabel: JQuery;
                protected __elementCurrentProductivity: JQuery;
                protected __elementExpectedProductivityLabel: JQuery;
                protected __elementExpectedProductivity: JQuery;
                protected __remainingColor: string | null | undefined;
                protected __elapsedColor: string | null | undefined;
                protected __elapsedTime: any | null | undefined;
                protected __remainingTime: any | null | undefined;
                protected __elapsedPieces: number | null | undefined;
                protected __remainingPieces: number | null | undefined;
                protected __currentProductivity: number | null | undefined;
                protected __expectedProductivity: number | null | undefined;
                protected __producedAlias: string | null | undefined;
                protected __remainingAlias: string | null | undefined;
                protected __producedPiecesAlias: string | null | undefined;
                protected __intervalTimeAlias: string | null | undefined;
                protected __currentProductivityAlias: string | null | undefined;
                protected __expectedProductivityAlias: string | null | undefined;
                protected __radialGrad: string;
                protected __linearGrad: string;
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
                setElapsedColor(valueNew: string): void;
                getElapsedColor(): string;
                protected __processElapsedColor(): void;
                setRemainingColor(valueNew: string): void;
                getRemainingColor(): string;
                protected __processRemainingColor(): void;
                setElapsedTime(valueNew: object): void;
                getElapsedTime(): any;
                protected __processElapsedTime(): void;
                setRemainingTime(valueNew: object): void;
                getRemainingTime(): any;
                protected __processRemainingTime(): void;
                protected __processTimes(): void;
                private DrawChart;
                setRemainingAlias(valueNew: string): void;
                getRemainingAlias(): string;
                protected __processRemainingAlias(): void;
                setProducedAlias(valueNew: string): void;
                getProducedAlias(): string;
                protected __processProducedAlias(): void;
                setProducedPiecesAlias(valueNew: string): void;
                getProducedPiecesAlias(): string;
                protected __processProducedPiecesAlias(): void;
                setIntervalTimeAlias(valueNew: string): void;
                getIntervalTimeAlias(): string;
                protected __processIntervalTimeAlias(): void;
                setExpectedProductivityAlias(valueNew: string): void;
                getExpectedProductivityAlias(): string;
                protected __processExpectedProductivityAlias(): void;
                setCurrentProductivityAlias(valueNew: string): void;
                getCurrentProductivityAlias(): string;
                protected __processCurrentProductivityAlias(): void;
                setElapsedPieces(valueNew: number): void;
                getElapsedPieces(): number;
                protected __processElapsedPieces(): void;
                setRemainingPieces(valueNew: number): void;
                getRemainingPieces(): number;
                protected __processRemainingPieces(): void;
                protected __processPieces(): void;
                setCurrentProductivity(valueNew: number): void;
                getCurrentProductivity(): number;
                protected __processCurrentProductivity(): void;
                setExpectedProductivity(valueNew: number): void;
                getExpectedProductivity(): number;
                protected __processExpectedProductivity(): void;
                protected __processColorGradient(): void;
                protected __processColor(): void;
            }
        }
    }
}
