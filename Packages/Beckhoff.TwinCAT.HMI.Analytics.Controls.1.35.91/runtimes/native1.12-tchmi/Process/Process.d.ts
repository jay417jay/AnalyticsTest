declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            class Process extends TcHmi.Controls.Analytics.AnalyticsControl {
                /**
                 * @description Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elementActualValueAlias: JQuery;
                protected __elementSetValueAlias: JQuery;
                protected __elementActualValue: JQuery;
                protected __elementSetValue: JQuery;
                protected __elementTextValues: JQuery;
                protected __elementLine: JQuery;
                protected __elementSvg: JQuery;
                protected __elementSvgDefs: JQuery;
                protected __elementSvgElapsed: JQuery;
                protected __elementSvgRemaining: JQuery;
                protected __elementPercentage: JQuery;
                protected __elementPercentageCon: JQuery;
                protected __elementGroupProperties: JQuery;
                protected __elementGroupBlock: JQuery;
                protected __showText: boolean | null | undefined;
                protected __valueAlias: string | null | undefined;
                protected __value: number | null | undefined;
                protected __actualValueAlias: string | null | undefined;
                protected __actualValue: number | null | undefined;
                protected __graphColor: SolidColor | null | undefined;
                protected __elapsedTime: object | null | undefined;
                protected __remainingTime: object | null | undefined;
                protected __valueType: string | null | undefined;
                protected __showMilliSeconds: boolean | null | undefined;
                protected __dayAlias: string | null | undefined;
                protected __percentage: number | null | undefined;
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
                setActualValueAlias(valueNew: string): void;
                getActualValueAlias(): string;
                setValueAlias(valueNew: string): void;
                getSetValueAlias(): string;
                setActualValue(valueNew: number): void;
                getActualValue(): number;
                setValue(valueNew: number): void;
                getSetValue(): number;
                setGraphColor(valueNew: SolidColor): void;
                getGraphColor(): SolidColor;
                protected __processGraphColor(): void;
                setElapsedTime(valueNew: object): void;
                getElapsedTime(): object;
                setRemainingtime(valueNew: object): void;
                getRemainingTime(): object;
                setValueType(valueNew: string): void;
                getValueType(): string;
                protected __processActualValueAlias(): void;
                protected __processSetValueAlias(): void;
                protected __processValueType(): void;
                protected __processActualValue(): void;
                protected __processSetValue(): void;
                setShowMilliSeconds(valueNew: boolean): void;
                getShowMilliSeconds(): boolean;
                protected __processShowMilliSeconds(): void;
                setDayAlias(valueNew: string): void;
                getDayAlias(): string;
                protected __processDayAlias(): void;
                protected __processDisplayValues(): void;
                protected __processPercentage(): void;
                protected __processColorGradient(): void;
                protected __processColor(): void;
                setShowText(valueNew: boolean): void;
                getShowText(): boolean;
                protected __processShowText(): void;
                private draw;
            }
        }
    }
}
