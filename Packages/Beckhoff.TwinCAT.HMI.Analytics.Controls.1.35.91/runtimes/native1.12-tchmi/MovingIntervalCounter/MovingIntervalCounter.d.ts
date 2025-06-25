declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            class MovingIntervalCounter extends TcHmi.Controls.Analytics.AnalyticsControl {
                /**
                 * @description Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elementSvg: JQuery;
                protected __elementSvgText: JQuery;
                protected __elementSvgArrow: JQuery;
                protected __elementSvgDefs: JQuery;
                protected __elementFirstCount: JQuery;
                protected __elementLastCount: JQuery;
                protected __elementCounts: JQuery;
                protected __showReset: boolean | null | undefined;
                protected __resetSymbol: any | null | undefined;
                protected __monthAlias: string | null | undefined;
                protected __counts: number | null | undefined;
                protected __firstCount: any | null | undefined;
                protected __lastCount: any | null | undefined;
                protected __showMilliSeconds: boolean | null | undefined;
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
                setCounts(valueNew: number): void;
                getCounts(): number;
                protected __processCounts(): void;
                setFirstCount(valueNew: object): void;
                getFirstCount(): any;
                setLastCount(valueNew: object): void;
                getLastCount(): any;
                protected __processLastCount(): void;
                protected __processFirstCount(): void;
                setShowMilliSeconds(valueNew: boolean): void;
                getShowMilliSeconds(): boolean;
                protected __processShowMilliSeconds(): void;
                protected __processColorGradient(): void;
                protected __processColor(): void;
            }
        }
    }
}
