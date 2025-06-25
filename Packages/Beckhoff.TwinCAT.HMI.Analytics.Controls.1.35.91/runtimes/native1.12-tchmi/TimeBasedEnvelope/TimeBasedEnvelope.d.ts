declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            class TimeBasedEnvelope extends TcHmi.Controls.Analytics.AnalyticsControl {
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
                protected __elementSvgRectBusy: JQuery;
                protected __elementSvgTextBusy: JQuery;
                protected __elementSvgTextRect: JQuery;
                protected __elementSvgTextSmaller: JQuery;
                protected __elementSvgTextWithin: JQuery;
                protected __elementSvgTextBigger: JQuery;
                protected __elementSvgRectangle: JQuery;
                protected __elementSvgRectangleBounds: JQuery;
                protected __elementSvgRectangleBoundsInner: JQuery;
                protected __elementSvgRectangleSmaller: JQuery;
                protected __elementSvgRectangleWithin: JQuery;
                protected __elementSvgRectangleBigger: JQuery;
                protected __elementSvgLineLower: JQuery;
                protected __elementSvgLineUpper: JQuery;
                protected __elementSvgTextBounds: JQuery;
                protected __elementSvgTextBoundsLower: JQuery;
                protected __elementSvgTextBoundsUpper: JQuery;
                protected __elementSvgTextBoundsSmaller: JQuery;
                protected __elementSvgTextBoundsWithin: JQuery;
                protected __elementSvgTextBoundsBigger: JQuery;
                protected __elementReadState: JQuery;
                protected __elementCurrentCycles: JQuery;
                protected __biggerAlias: string | null | undefined;
                protected __withinAlias: string | null | undefined;
                protected __smallerAlias: string | null | undefined;
                protected __readMessageAlias: string | null | undefined;
                protected __currentCyclesAlias: string | null | undefined;
                protected __readStateAlias: string | null | undefined;
                protected __busyAlias: string | null | undefined;
                protected __upperBound: number | null | undefined;
                protected __lowerBound: number | null | undefined;
                protected __value: number | null | undefined;
                protected __eClass: number | null | undefined;
                protected __busy: boolean | null | undefined;
                protected __executingCompare: boolean | null | undefined;
                protected __withinBand: boolean | null | undefined;
                protected __countSmaller: number | null | undefined;
                protected __countBigger: number | null | undefined;
                protected __countWithinBand: number | null | undefined;
                protected __readState: number | null | undefined;
                protected __currentCycles: number | null | undefined;
                protected __showReadState: boolean | null | undefined;
                protected __showCurrentCycles: boolean | null | undefined;
                protected __envelopeColor: SolidColor | null | undefined;
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
                setWithinAlias(valueNew: string): void;
                getWithinAlias(): string;
                protected __processWithinAlias(): void;
                setBiggerAlias(valueNew: string): void;
                getBiggerAlias(): string;
                protected __processBiggerAlias(): void;
                setSmallerAlias(valueNew: string): void;
                getSmallerAlias(): string;
                protected __processSmallerAlias(): void;
                setBusyAlias(valueNew: string): void;
                getBusyAlias(): string;
                protected __processBusyAlias(): void;
                setReadStateAlias(valueNew: string): void;
                getReadStateAlias(): string;
                protected __processReadStateAlias(): void;
                setReadMessageAlias(valueNew: string): void;
                getReadMessageAlias(): string;
                protected __processReadMessageAlias(): void;
                setCurrentCyclesAlias(valueNew: string): void;
                getCurrentCyclesAlias(): string;
                protected __processCurrentCyclesAlias(): void;
                setLowerBound(valueNew: number): void;
                getLowerBound(): number;
                protected __processLowerBound(): void;
                setUpperBound(valueNew: number): void;
                getUpperBound(): number;
                protected __processUpperBound(): void;
                setValue(valueNew: number): void;
                getValue(): number;
                protected __processValue(): void;
                setClassificationResult(valueNew: number): void;
                getClassificationResult(): number;
                protected __processClassificationResult(): void;
                setExecutingCompare(valueNew: boolean): void;
                getExecutingCompare(): boolean;
                protected __processExecutingCompare(): void;
                setWithinBand(valueNew: boolean): void;
                getWithinBand(): boolean;
                protected __processWithinBand(): void;
                setCountSmaller(valueNew: number): void;
                getCountSmaller(): number;
                protected __processCountSmaller(): void;
                setCountBigger(valueNew: number): void;
                getCountBigger(): number;
                protected __processCountBigger(): void;
                setCountWithinBand(valueNew: number): void;
                getCountWithinBand(): number;
                protected __processCountWithinBand(): void;
                setCurrentCycles(valueNew: string): void;
                getCurrentCycles(): number;
                protected __processCurrentCycles(): void;
                setEnvelopeColor(valueNew: SolidColor): void;
                getEnvelopeColor(): SolidColor;
                protected __processEnvelopeColor(): void;
                setReadState(valueNew: number): void;
                getReadState(): number;
                protected __processReadState(): void;
                setShowReadState(valueNew: boolean): void;
                getShowReadState(): boolean;
                protected __processShowReadState(): void;
                setShowCurrentCycles(valueNew: boolean): void;
                getShowCurrentCycles(): boolean;
                protected __processShowCurrentCycles(): void;
                protected __processColorGradient(): void;
                protected __processColor(): void;
                protected __processSvg(): void;
                private DrawSvg;
            }
        }
    }
}
