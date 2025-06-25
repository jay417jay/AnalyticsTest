declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            class XTSVelocity extends TcHmi.Controls.Analytics.AnalyticsControl {
                /**
                 * @description Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elementSvgChart: JQuery;
                protected __elementSvgChartBackgroundCircle: JQuery;
                protected __elementSvgChartInnerCircle: JQuery;
                protected __elementSvgChartProcess: JQuery;
                protected __elementSvgChartDefs: JQuery;
                protected __elementSvgChartPointer: JQuery;
                protected __elementSvgChartScale: JQuery;
                protected __elementSvgChartValue: JQuery;
                protected __elementSvgChartValues: JQuery;
                protected __growOnly: boolean | null | undefined;
                protected __maxVelocity: number | null | undefined;
                protected __minVelocity: number | null | undefined;
                protected __posAndNeg: boolean | null | undefined;
                protected __velocity: number | null | undefined;
                protected __ticks: number | null | undefined;
                protected __showValues: boolean | null | undefined;
                protected __showVelocity: boolean | null | undefined;
                protected __velocityColor: SolidColor | null | undefined;
                protected __velocityUnit: string | null | undefined;
                protected __range: any | null | undefined;
                protected __withRange: boolean;
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
                setVelocity(valueNew: number): void;
                getVelocity(): number;
                setRange(valueNew: any): void;
                getRange(): any;
                protected __processRange(): void;
                setVelocityUnit(valueNew: string): void;
                getVelocityUnit(): string;
                setVelocityColor(valueNew: SolidColor): void;
                getVelocityColor(): SolidColor;
                protected __processVelocityColor(): void;
                setTicks(valueNew: number): void;
                getTicks(): number;
                protected __processTicks(): void;
                setShowValues(valueNew: boolean): void;
                getShowValues(): boolean;
                protected __processShowValues(): void;
                setShowVelocity(valueNew: boolean): void;
                getShowVelocity(): boolean;
                protected __processShowVelocity(): void;
                setGrowOnly(valueNew: boolean): void;
                getGrowOnly(): boolean;
                protected __processColorGradient(): void;
                protected __processColor(): void;
                protected __processVelocity(): void;
                private DrawVelocityChart;
            }
        }
    }
}
