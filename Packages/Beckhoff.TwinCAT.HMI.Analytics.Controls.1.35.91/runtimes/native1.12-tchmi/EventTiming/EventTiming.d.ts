declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            class EventTiming extends TcHmi.Controls.Analytics.AnalyticsControl {
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
                protected __elementTotalOn: JQuery;
                protected __elementTotalOff: JQuery;
                protected __elementSvgCirclePart: JQuery;
                protected __elementSvgCircleLine: JQuery;
                protected __elementSvgCircleInner: JQuery;
                protected __elementSvgCircleOuter: JQuery;
                protected __elementSvgCircleOff: JQuery;
                protected __elementSvgCircleOn: JQuery;
                protected __elementSvgWholeCircle: JQuery;
                protected __onColor: SolidColor | null | undefined;
                protected __offColor: SolidColor | null | undefined;
                protected __minColor: SolidColor | null | undefined;
                protected __minColorHex: string | null | undefined;
                protected __maxColor: SolidColor | null | undefined;
                protected __maxColorHex: string | null | undefined;
                protected __avgColor: SolidColor | null | undefined;
                protected __avgColorHex: string | null | undefined;
                protected __isOn: boolean | null | undefined;
                protected __onMin: any | null | undefined;
                protected __onMax: any | null | undefined;
                protected __onAvg: any | null | undefined;
                protected __current: any | null | undefined;
                protected __offMin: any | null | undefined;
                protected __offMax: any | null | undefined;
                protected __offAvg: any | null | undefined;
                protected __minAlias: string | null | undefined;
                protected __maxAlias: string | null | undefined;
                protected __avgAlias: string | null | undefined;
                protected __onAlias: string | null | undefined;
                protected __offAlias: string | null | undefined;
                protected __dayAlias: string | null | undefined;
                protected __showTotal: boolean | null | undefined;
                protected __showMilliSeconds: boolean | null | undefined;
                protected __onTotal: any | null | undefined;
                protected __offTotal: any | null | undefined;
                protected __percentagePositions: any | null | undefined;
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
                setOnColor(valueNew: SolidColor): void;
                getOnColor(): SolidColor;
                setMinColor(valueNew: string): void;
                getMinColor(): SolidColor;
                protected __processMinColor(): void;
                setMaxColor(valueNew: string): void;
                getMaxColor(): SolidColor;
                protected __processMaxColor(): void;
                setAvgColor(valueNew: string): void;
                getAvgColor(): SolidColor;
                protected __processAvgColor(): void;
                setIsOn(valueNew: boolean): void;
                getIsOn(): boolean;
                setOnMin(valueNew: object): void;
                getOnMin(): any;
                setOnMax(valueNew: object): void;
                getOnMax(): any;
                setOnAvg(valueNew: object): void;
                getOnAvg(): any;
                setCurrent(valueNew: object): void;
                protected __processOnMin(): void;
                protected __processOnMax(): void;
                protected __processOnAvg(): void;
                setOffMin(valueNew: object): void;
                getOffMin(): any;
                setOffMax(valueNew: object): void;
                getOffMax(): any;
                setOffAvg(valueNew: object): void;
                getOffAvg(): any;
                protected __processOffMin(): void;
                protected __processOffMax(): void;
                protected __processOffAvg(): void;
                setMinAlias(valueNew: string): void;
                getMinAlias(): string;
                protected __processMinAlias(): void;
                setMaxAlias(valueNew: string): void;
                getMaxAlias(): string;
                protected __processMaxAlias(): void;
                setAvgAlias(valueNew: string): void;
                getAvgAlias(): string;
                protected __processAvgAlias(): void;
                setOnAlias(valueNew: string): void;
                getOnAlias(): string;
                protected __processOnAlias(): void;
                setOffAlias(valueNew: string): void;
                getOffAlias(): string;
                protected __processOffAlias(): void;
                setDayAlias(valueNew: string): void;
                getDayAlias(): string;
                protected __processDayAlias(): void;
                protected __processIsOn(): void;
                protected __processCurrent(): void;
                setShowTotal(valueNew: boolean): void;
                getShowTotal(): boolean;
                setShowMilliSeconds(valueNew: boolean): void;
                getShowMilliSeconds(): boolean;
                protected __processShowMilliSeconds(): void;
                setOnTotal(valueNew: object): void;
                getOnTotal(): any;
                setOffTotal(valueNew: object): void;
                getOffTotal(): any;
                protected __processOnTotal(): void;
                protected __processOffTotal(): void;
                protected __processShowTotal(): void;
                protected __processColorGradient(): void;
                protected __processColor(): void;
                private DrawLabel;
                private DrawCurrentInterval;
            }
        }
    }
}
