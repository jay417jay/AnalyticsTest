declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            export class XYShapeMonitor extends TcHmi.Controls.Analytics.AnalyticsControl {
                /** Main svg element */
                protected __elSvg: JQuery;
                /** XY Point */
                protected __elSvgPoint: JQuery;
                /** XY Point tooltip*/
                protected __elSvgPointTitle: JQuery;
                /** Vertices of triangle / rectangle. Used to show tooltip of point. */
                protected __elSvgVertices: JQuery;
                /** Vertices tooltips of triangle / rectangle. */
                protected __elSvgVerticesTitles: JQuery;
                /** Outer form of all shapes */
                protected __elSvgOuterForm: JQuery;
                /** Outer rectangle form */
                protected __elSvgRectangle: JQuery;
                /** Outer rectangle form tooltip*/
                protected __elSvgRectangleTitle: JQuery;
                /** Outer triangle form */
                protected __elSvgTriangle: JQuery;
                /** Outer triangle form tooltip*/
                protected __elSvgTriangleTitle: JQuery;
                /** Outer circle form */
                protected __elSvgCircle: JQuery;
                /** Outer circle form tooltip*/
                protected __elSvgCircleTitle: JQuery;
                /** Svg defs for control gradient */
                protected __elSvgDefs: JQuery;
                /** Intersection counter text */
                protected __elCountIntersections: JQuery;
                /** Last Event text */
                protected __elLastEvent: JQuery;
                protected readonly SVG_SIZE: ISize;
                /** PADDING in SVG */
                protected readonly PADDING: IXYPoint;
                /** Width of rectangle in SVG */
                protected readonly RECTANGLE_WIDTH: number;
                /** Height of rectangle in SVG */
                protected readonly RECTANGLE_HEIGHT: number;
                /** Offset & scale factor in drawn SVG. Used to draw xy cursor. */
                protected __drawInfo: IDrawInfo;
                /** Last point to calculate cursor direction */
                protected __lastPointPos: IXYPoint;
                /** XY shape gradient name */
                protected readonly __radialGrad: string;
                protected __showCountIntersections: boolean | null | undefined;
                protected __showLastEvent: boolean | null | undefined;
                protected __showMilliSeconds: boolean | null | undefined;
                protected __config1: IXYPoint2 | null | undefined;
                protected __config2: number | null | undefined;
                protected __config3: number | null | undefined;
                protected __config4: IXYPoint2 | null | undefined;
                protected __config5: IXYPoint2 | null | undefined;
                protected __monthAlias: string | null | undefined;
                protected __lastIntersectionAlias: string | null | undefined;
                protected __intersectionsAlias: string | null | undefined;
                protected __intersectionColor: SolidColor | null | undefined;
                protected __noIntersectionColor: SolidColor | null | undefined;
                protected __pointColor: SolidColor | null | undefined;
                protected __shape: string | null | undefined;
                protected __xInputValue: number | null | undefined;
                protected __yInputValue: number | null | undefined;
                protected __lastEvent: any | null | undefined;
                protected __showGateIntersectionPoint: boolean | null | undefined;
                protected __withinShape: boolean;
                protected __intersection: boolean;
                protected __countIntersections: number | null | undefined;
                protected __unit: string;
                /**
                 * @description Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
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
                setLastIntersectionAlias(valueNew: string): void;
                getLastIntersectionAlias(): string;
                protected __processLastIntersectionAlias(): void;
                setIntersectionsAlias(valueNew: string): void;
                getIntersectionsAlias(): string;
                protected __processIntersectionsAlias(): void;
                getFontsizeTitle(): number;
                setIntersectionColor(valueNew: SolidColor): void;
                getIntersectionColor(): SolidColor;
                protected __processIntersectionColor(): void;
                setNoIntersectionColor(valueNew: SolidColor): void;
                getNoIntersectionColor(): SolidColor;
                protected __processNoIntersectionColor(): void;
                setPointColor(valueNew: SolidColor): void;
                getPointColor(): SolidColor;
                protected __processPointColor(): void;
                setShape(valueNew: string): void;
                getShape(): string;
                protected __processShape(): void;
                setYInputValue(valueNew: number): void;
                getYInputValue(): number;
                protected __processYInputValue(): void;
                setXInputValue(valueNew: number): void;
                getXInputValue(): number;
                protected __processXInputValue(): void;
                setConfig1(valueNew: IXYPoint2): void;
                protected __onResolverForConfig1WatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<IXYPoint2>) => void;
                getConfig1(): IXYPoint2;
                protected __processConfig1(): void;
                setConfig2(valueNew: number): void;
                getConfig2(): number;
                protected __processConfig2(): void;
                setConfig3(valueNew: number): void;
                getConfig3(): number;
                protected __processConfig3(): void;
                setConfig4(valueNew: IXYPoint2): void;
                protected __onResolverForConfig4WatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<IXYPoint2>) => void;
                getConfig4(): IXYPoint2;
                protected __processConfig4(): void;
                setConfig5(valueNew: IXYPoint2): void;
                protected __onResolverForConfig5WatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<IXYPoint2>) => void;
                getConfig5(): IXYPoint2;
                protected __processConfig5(): void;
                setIntersection(valueNew: boolean): void;
                getIntersection(): boolean;
                protected __processIntersection(): void;
                setWithinShape(valueNew: boolean): void;
                getWithinShape(): boolean;
                protected __processWithinShape(): void;
                setLastEvent(valueNew: object): void;
                getLastEvent(): any;
                setShowMilliSeconds(valueNew: boolean): void;
                getShowMilliSeconds(): boolean;
                protected __processShowMilliSeconds(): void;
                protected __processLastEvent(): void;
                setShowLastEvent(valueNew: boolean): void;
                getShowLastEvent(): boolean;
                protected __processShowLastEvent(): void;
                setCountIntersections(valueNew: number): void;
                getCountIntersections(): number;
                protected __processCountIntersections(): void;
                setShowCountIntersections(valueNew: boolean): void;
                getShowCountIntersections(): boolean;
                protected __processShowCountIntersections(): void;
                setShowGateIntersectionPoint(valueNew: boolean): void;
                getShowGateIntersectionPoint(): boolean;
                protected __processShowGateIntersectionPoint(): void;
                setUnit(valueNew: string): void;
                getUnit(): string;
                protected __processUnit(): void;
                protected __processColorGradient(): void;
                protected __processColor(): void;
                private __drawShape;
                private __drawRectangle;
                private __drawRectangleShape;
                private __getRectangleShape;
                private __drawCircle;
                private __drawCircleShape;
                private __getCircleShape;
                private __drawTriangle;
                private __drawTriangleShape;
                private __getTriangleShape;
                private __drawPointTooltip;
                private __drawCursor;
            }
            interface IDrawInfo {
                /** X,Y offset (for cursor calculation) */
                offset: IXYPoint;
                /** X,Y scale factor (for cursor calculation) */
                factor: IXYPoint;
            }
            interface IXYPoint2 {
                X: number;
                Y: number;
            }
            export {};
        }
    }
}
