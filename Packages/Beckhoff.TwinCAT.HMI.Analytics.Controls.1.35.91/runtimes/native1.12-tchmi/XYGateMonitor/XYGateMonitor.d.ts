declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            class XYGateMonitor extends TcHmi.Controls.Analytics.AnalyticsControl {
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
                protected __elementSvgLine: JQuery;
                protected __elementSvgCircle1: JQuery;
                protected __elementSvgCircle2: JQuery;
                protected __elementSvgCircleXY: JQuery;
                protected __elementSvgArrow: JQuery;
                protected __elementCountGate: JQuery;
                protected __elementCountOutlier: JQuery;
                protected __elementLastEvent: JQuery;
                protected __outlierIntersectionsAlias: string | null | undefined;
                protected __gateIntersectionsAlias: string | null | undefined;
                protected __monthAlias: string | null | undefined;
                protected __lastIntersectionAlias: string | null | undefined;
                protected __intersectionColor: SolidColor | null | undefined;
                protected __noIntersectionColor: SolidColor | null | undefined;
                protected __pointColor: SolidColor | null | undefined;
                protected __configGate1: any | null | undefined;
                protected __configGate2: any | null | undefined;
                protected __showDirection: boolean | null | undefined;
                protected __intersectionX: number | null | undefined;
                protected __intersectionY: number | null | undefined;
                protected __outlierIntersection: boolean | null | undefined;
                protected __gateIntersection: boolean | null | undefined;
                protected __showGateIntersection: boolean | null | undefined;
                protected __showCounts: boolean | null | undefined;
                protected __countGateIntersection: number | null | undefined;
                protected __countOutlierIntersection: number | null | undefined;
                protected __lastEvent: any | null | undefined;
                protected __showLastEvent: boolean | null | undefined;
                protected __showMilliSeconds: boolean | null | undefined;
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
                setGateIntersectionsAlias(valueNew: string): void;
                getGateIntersectionsAlias(): string;
                protected __processGateIntersectionsAlias(): void;
                setOutlierIntersectionsAlias(valueNew: string): void;
                getOutlierIntersectionsAlias(): string;
                protected __processOutlierIntersectionsAlias(): void;
                setLastIntersectionAlias(valueNew: string): void;
                getLastIntersectionAlias(): string;
                protected __processLastIntersectionAlias(): void;
                setMonthAlias(valueNew: string): void;
                getMonthAlias(): string;
                protected __processMonthAlias(): void;
                setIntersectionColor(valueNew: SolidColor): void;
                getIntersectionColor(): SolidColor;
                protected __processIntersectionColor(): void;
                setNoIntersectionColor(valueNew: SolidColor): void;
                getNoIntersectionColor(): SolidColor;
                protected __processNoIntersectionColor(): void;
                setPointColor(valueNew: SolidColor): void;
                getPointColor(): SolidColor;
                protected __processPointColor(): void;
                setConfigGate1(valueNew: object): void;
                protected __onResolverForConfigGate1WatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<any[]>) => void;
                getConfigGate1(): any;
                protected __processConfigGate1(): void;
                setConfigGate2(valueNew: object): void;
                protected __onResolverForConfigGate2WatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<any[]>) => void;
                getConfigGate2(): any;
                protected __processConfigGate2(): void;
                setGateIntersection(valueNew: boolean): void;
                getGateIntersection(): boolean;
                protected __processGateIntersection(): void;
                setOutlierIntersection(valueNew: boolean): void;
                getOutlierIntersection(): boolean;
                protected __processOutlierIntersection(): void;
                setIntersectionX(valueNew: number): void;
                getIntersectionX(): number;
                protected __processIntersectionX(): void;
                setIntersectionY(valueNew: number): void;
                getIntersectionY(): number;
                protected __processIntersectionY(): void;
                setShowDirection(valueNew: boolean): void;
                getShowDirection(): boolean;
                protected __processShowDirection(): void;
                setShowGateIntersection(valueNew: boolean): void;
                getShowGateIntersection(): boolean;
                protected __processShowGateIntersection(): void;
                protected __processColorGradient(): void;
                protected __processColor(): void;
                protected __processGates(): void;
                setCountGateIntersection(valueNew: number): void;
                getCountGateIntersection(): number;
                protected __processCountGateIntersection(): void;
                setCountOutlierIntersection(valueNew: number): void;
                getCountOutlierIntersection(): number;
                protected __processCountOutlierIntersection(): void;
                setShowCounts(valueNew: boolean): void;
                getShowCounts(): boolean;
                protected __processShowCounts(): void;
                setLastEvent(valueNew: object): void;
                getLastEvent(): any;
                setShowMilliSeconds(valueNew: boolean): void;
                getShowMilliSeconds(): boolean;
                protected __processShowMilliSeconds(): void;
                protected __processLastEvent(): void;
                setShowLastEvent(valueNew: boolean): void;
                getShowLastEvent(): boolean;
                protected __processShowLastEvent(): void;
                private DrawGate;
            }
        }
    }
}
