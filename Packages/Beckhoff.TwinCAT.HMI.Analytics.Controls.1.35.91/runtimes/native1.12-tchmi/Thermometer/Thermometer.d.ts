declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            class Thermometer extends TcHmi.Controls.Analytics.AnalyticsControl {
                /**
                 * @description Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elementThermometerSvg: JQuery;
                protected __elementThermometerSvgOuterRect: JQuery;
                protected __elementThermometerSvgOuterCircle: JQuery;
                protected __elementThermometerSvgWhiteRect: JQuery;
                protected __elementThermometerSvgWhiteCircle: JQuery;
                protected __elementThermometerSvgInnerRect: JQuery;
                protected __elementThermometerSvgInnerCircle: JQuery;
                protected __elementThermometerTemperature: JQuery;
                protected __elementThermometerUnit: JQuery;
                protected __elementThermometerScala: JQuery;
                protected __elementThermometerText: JQuery;
                protected __elementThermometerSvgDefs: JQuery;
                /** Value alias text */
                protected __elValueAlias: JQuery;
                /** Text of value with unit */
                protected __elValue: JQuery;
                protected __value: number | null | undefined;
                protected __minValue: number | null | undefined;
                protected __maxValue: number | null | undefined;
                protected __unit: string | null | undefined;
                protected __resetSymbol: any | null | undefined;
                protected __thermometerColor: SolidColor | null | undefined;
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
                setValue(valueNew: number): void;
                getValue(): number;
                setMinValue(valueNew: number): void;
                getMinValue(): number;
                setMaxValue(valueNew: number): void;
                getMaxValue(): number;
                protected __showValue: boolean;
                setShowValue(valueNew: boolean | null): void;
                getShowValue(): boolean;
                protected __processShowValue(): void;
                setUnit(valueNew: number): void;
                getUnit(): string;
                protected __valueAlias: string;
                setValueAlias(valueNew: string | null): void;
                getValueAlias(): string;
                protected __processValueAlias(): void;
                setThermometerColor(valueNew: SolidColor): void;
                getThermometerColor(): SolidColor;
                protected __processThermometerColor(): void;
                protected __processValue(): void;
                protected __drawThermometer(): void;
                /*** Overrides ***/
                protected __processAmountDecimals(): void;
                protected __processColorGradient(): void;
                protected __processColor(): void;
            }
        }
    }
}
