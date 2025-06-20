declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            class BandwidthClassificator extends TcHmi.Controls.Analytics.AnalyticsControl {
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
                protected __elementSvgText: JQuery;
                protected __elementSvgTextRect: JQuery;
                protected __elementSvgTextCurrentValue: JQuery;
                protected __elementSvgTextLower: JQuery;
                protected __elementSvgTextUpper: JQuery;
                protected __elementSvgTextSmaller: JQuery;
                protected __elementSvgTextWithin: JQuery;
                protected __elementSvgTextBigger: JQuery;
                protected __elementSvgRectangle: JQuery;
                protected __elementSvgRectangleSmaller: JQuery;
                protected __elementSvgRectangleWithin: JQuery;
                protected __elementSvgRectangleBigger: JQuery;
                protected __elementLastEvent: JQuery;
                protected __monthAlias: string | null | undefined;
                protected __lastEventAlias: string | null | undefined;
                protected __bandwidthColor: string | null | undefined;
                protected __showMilliSeconds: boolean | null | undefined;
                protected __lastEvent: any | null | undefined;
                protected __showCurrentValue: boolean | null | undefined;
                protected __showLastEvent: boolean | null | undefined;
                protected __lowerBound: number | null | undefined;
                protected __upperBound: number | null | undefined;
                protected __currentValue: number | null | undefined;
                protected __eClass: number | null | undefined;
                protected __withinAlias: string | null | undefined;
                protected __biggerAlias: string | null | undefined;
                protected __smallerAlias: string | null | undefined;
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
                setMonthAlias(valueNew: string): void;
                getMonthAlias(): string;
                protected __processMonthAlias(): void;
                setBandwidthColor(valueNew: string): void;
                getBandwidthColor(): string;
                setShowMilliSeconds(valueNew: boolean): void;
                getShowMilliSeconds(): boolean;
                protected __processShowMilliSeconds(): void;
                setLastEventAlias(valueNew: string): void;
                getLastEventAlias(): string;
                protected __processLastEventAlias(): void;
                setLastEvent(valueNew: object): void;
                getLastEvent(): any;
                protected __processLastEvent(): void;
                setShowLastEvent(valueNew: boolean): void;
                getShowLastEvent(): boolean;
                protected __processShowLastEvent(): void;
                setShowCurrentValue(valueNew: boolean): void;
                getShowCurrentValue(): boolean;
                protected __processShowCurrentValue(): void;
                setLowerBound(valueNew: number): void;
                getLowerBound(): number;
                protected __processLowerBound(): void;
                setUpperBound(valueNew: number): void;
                getUpperBound(): number;
                protected __processUpperBound(): void;
                setCurrentValue(valueNew: number): void;
                getCurrentValue(): number;
                protected __processCurrentValue(): void;
                setClassificationResult(valueNew: number): void;
                getClassificationResult(): number;
                protected __processClassificationResult(): void;
                setWithinAlias(valueNew: string): void;
                getWithinAlias(): string;
                protected __processWithinAlias(): void;
                setBiggerAlias(valueNew: string): void;
                getBiggerAlias(): string;
                protected __processBiggerAlias(): void;
                setSmallerAlias(valueNew: string): void;
                getSmallerAlias(): string;
                protected __processSmallerAlias(): void;
                protected __processAmountDecimals(): void;
                protected __processColorGradient(): void;
                protected __processColor(): void;
                protected __processChart(): void;
                private DrawBandwidthChart;
            }
        }
    }
}
