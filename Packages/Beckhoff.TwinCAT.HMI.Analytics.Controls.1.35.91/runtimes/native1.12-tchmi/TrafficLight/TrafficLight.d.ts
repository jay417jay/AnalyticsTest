declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            class TrafficLight extends TcHmi.Controls.Analytics.AnalyticsControl {
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
                protected __elementSvgOuterRect: JQuery;
                protected __elementSvgLamps: JQuery;
                protected __elementMessage: JQuery;
                protected __elementActualValueAlias: JQuery;
                protected __elementValue: JQuery;
                protected __elementWarning: JQuery;
                protected __elementAlarm: JQuery;
                protected __classification: number | null | undefined;
                protected __trafficLightColors: any | null | undefined;
                protected __messageAlias: string | null | undefined;
                protected __stringClassification: string | null | undefined;
                protected __configLevel1: string | null | undefined;
                protected __configLevel2: string | null | undefined;
                protected __configLevel3: string | null | undefined;
                protected __actualValueAlias: string | null | undefined;
                protected __value: number | null | undefined;
                protected __showValues: boolean | null | undefined;
                protected __showLastAlarm: boolean | null | undefined;
                protected __showLastWarning: boolean | null | undefined;
                protected __lastAlarm: any | null | undefined;
                protected __lastWarning: any | null | undefined;
                protected __lastAlarmAlias: string | null | undefined;
                protected __lastWarningAlias: string | null | undefined;
                protected __monthAlias: string | null | undefined;
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
                setClassification(valueNew: number): void;
                setTrafficLightColors(valueNew: object): void;
                getTrafficLightColors(): any;
                protected __processTrafficLightColors(): void;
                getClassification(): number;
                setMessageAlias(valueNew: string): void;
                getMessageAlias(): string;
                protected __processMessageAlias(): void;
                protected __processClassification(): void;
                setConfigLevel1(valueNew: string): void;
                getConfigLevel1(): string;
                setConfigLevel2(valueNew: string): void;
                getConfigLevel2(): string;
                setConfigLevel3(valueNew: string): void;
                getConfigLevel3(): string;
                setStringClassification(valueNew: string): void;
                getStringClassification(): string;
                protected __processStringClassification(): void;
                setActualValueAlias(valueNew: string): void;
                getActualValueAlias(): string;
                protected __processActualValueAlias(): void;
                setValue(valueNew: number): void;
                getValue(): number;
                protected __processValue(): void;
                setShowValues(valueNew: boolean): void;
                getShowValues(): boolean;
                protected __processShowValues(): void;
                setShowLastAlarm(valueNew: boolean): void;
                getShowLastAlarm(): boolean;
                setShowLastWarning(valueNew: boolean): void;
                getShowLastWarning(): boolean;
                setLastAlarm(valueNew: object): void;
                getLastAlarm(): any;
                setLastWarning(valueNew: object): void;
                getLastWarning(): any;
                setLastWarningAlias(valueNew: string): void;
                getLastWarningAlias(): string;
                protected __processLastWarningAlias(): void;
                setLastAlarmAlias(valueNew: string): void;
                getLastAlarmAlias(): string;
                protected __processLastAlarmAlias(): void;
                setMonthAlias(valueNew: string): void;
                getMonthAlias(): string;
                protected __processMonthAlias(): void;
                protected __processShowLastAlarm(): void;
                protected __processShowLastWarning(): void;
                setShowMilliSeconds(valueNew: boolean): void;
                getShowMilliSeconds(): boolean;
                protected __processShowMilliSeconds(): void;
                protected __processLastAlarm(): void;
                protected __processLastWarning(): void;
                /*** Overrides ***/
                protected __processAmountDecimals(): void;
                protected __processColorGradient(): void;
                protected __processColor(): void;
                private DrawTrafficLight;
            }
        }
    }
}
