declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            class XTSDistance extends TcHmi.Controls.Analytics.AnalyticsControl {
                /**
                 * @description Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elementSvg: JQuery;
                protected __elementSvgTicks: JQuery;
                protected __elementSvgTicks2: JQuery;
                protected __elementSvgDefsGradients: JQuery;
                protected __elementSvgDefsPattern: JQuery;
                protected __elementSvgNegRect: JQuery;
                protected __elementSvgNegRectFill: JQuery;
                protected __elementSvgNegRectText: JQuery;
                protected __elementSvgRect: JQuery;
                protected __elementSvgRectFill: JQuery;
                protected __elementSvgRectText: JQuery;
                protected __elementSvgPosRect: JQuery;
                protected __elementSvgPosRectFill: JQuery;
                protected __elementSvgPosRectText: JQuery;
                protected __elementSvgLabel: JQuery;
                protected __elementSvgLabel2: JQuery;
                protected __growOnly: boolean | null | undefined;
                protected __maxDist: number | null | undefined;
                protected __distance: number | null | undefined;
                protected __distanceNeg: number | null | undefined;
                protected __distancePos: number | null | undefined;
                protected __ticks: number | null | undefined;
                protected __subTicks: number | null | undefined;
                protected __showTicks: boolean | null | undefined;
                protected __showOnlyDistance: boolean | null | undefined;
                protected __showNegativeDistance: boolean | null | undefined;
                protected __showValues: boolean | null | undefined;
                protected __distanceNegColor: SolidColor | null | undefined;
                protected __distancePosColor: SolidColor | null | undefined;
                protected __distanceColor: SolidColor | null | undefined;
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
                setDistance(valueNew: number): void;
                getDistance(): number;
                protected __processDistance(): void;
                setDistancePos(valueNew: number): void;
                getDistancePos(): number;
                protected __processDistancePos(): void;
                setDistanceNeg(valueNew: number): void;
                getDistanceNeg(): number;
                protected __processDistanceNeg(): void;
                setShowNegativeDistance(valueNew: boolean): void;
                getShowNegativeDistance(): boolean;
                protected __processShowNegativeDistance(): void;
                setShowOnlyDistance(valueNew: boolean): void;
                getShowOnlyDistance(): boolean;
                protected __processShowOnlyDistance(): void;
                setShowValues(valueNew: boolean): void;
                getShowValues(): boolean;
                protected __processShowValues(): void;
                setTicks(valueNew: number): void;
                getTicks(): number;
                protected __processTicks(): void;
                setSubTicks(valueNew: number): void;
                getSubTicks(): number;
                protected __processSubTicks(): void;
                setDistanceNegColor(valueNew: SolidColor): void;
                getDistanceNegColor(): SolidColor;
                protected __processDistanceNegColor(): void;
                setDistancePosColor(valueNew: SolidColor): void;
                getDistancePosColor(): SolidColor;
                protected __processDistancePosColor(): void;
                setDistanceColor(valueNew: SolidColor): void;
                getDistanceColor(): SolidColor;
                protected __processDistanceColor(): void;
                setGrowOnly(valueNew: boolean): void;
                getGrowOnly(): boolean;
                protected __processColorGradient(): void;
                protected __processColor(): void;
                protected __processXTSDistanceCanvas(): void;
                private DrawXTSDistance;
                private roundTick;
            }
        }
    }
}
