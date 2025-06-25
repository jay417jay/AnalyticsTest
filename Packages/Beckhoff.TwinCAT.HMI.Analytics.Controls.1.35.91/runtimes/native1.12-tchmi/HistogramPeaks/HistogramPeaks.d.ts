declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            class HistogramPeaks extends TcHmi.Controls.Analytics.AnalyticsControl {
                /**
                 * @description Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elementCanvas: JQuery;
                protected __totalPointsAlias: string | null | undefined;
                protected __peaksAlias: string | null | undefined;
                protected __numPeaks: number | null | undefined;
                protected __totalPoints: number | null | undefined;
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
                setTotalPoints(valueNew: number): void;
                getTotalPoints(): number;
                setNumPeaks(valueNew: number): void;
                getNumPeaks(): number;
                setPeaksAlias(valueNew: string): void;
                getPeaksAlias(): string;
                protected __processPeaksAlias(): void;
                setTotalPointsAlias(valueNew: string): void;
                getTotalPointsAlias(): string;
                protected __processTotalPointsAlias(): void;
                protected __processColor(): void;
                protected __processDrawPeaksCanvas(): void;
                private DrawPeaksCanvas;
            }
        }
    }
}
