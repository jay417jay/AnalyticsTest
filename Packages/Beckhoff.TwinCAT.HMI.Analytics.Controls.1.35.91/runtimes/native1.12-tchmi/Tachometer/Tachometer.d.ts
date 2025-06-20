declare namespace TcHmi.Controls.Analytics {
    export class Tachometer extends TcHmi.Controls.Analytics.AnalyticsControl {
        /** Tachometer HMI Control (Design: Tachometer) */
        protected __elTachometerHmi: TcHmi.Controls.Beckhoff.TcHmiTachometer;
        /** Radial gauge (Design: Radial Gauge) */
        protected __elRadialGauge: CustomElements.RadialGauge;
        /** Min value of tachometer */
        protected __minValue: number;
        /** Max value of tachometer */
        protected __maxValue: number;
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        protected __tachometerDesing: TachometerDesign;
        setTachometerDesign(valueNew: TachometerDesign | null): void;
        getTachometerDesign(): TachometerDesign;
        protected __processTachometerDesign(): void;
        protected __value: number;
        setValue(valueNew: number | null): void;
        getValue(): number;
        protected __processValue(): void;
        protected __unit: string;
        setUnit(valueNew: string | null): void;
        getUnit(): string;
        protected __processUnit(): void;
        protected __levelOkWarning: number;
        setLevelOkWarning(valueNew: number | null): void;
        getLevelOkWarning(): number;
        protected __processLevelOkWarning(): void;
        protected __levelWarningAlarm: number;
        setLevelWarningAlarm(valueNew: number | null): void;
        getLevelWarningAlarm(): number;
        protected __processLevelWarningAlarm(): void;
        protected __okColor: SolidColor;
        setOkColor(valueNew: SolidColor | null): void;
        getOkColor(): SolidColor;
        protected __processOkColor(): void;
        protected __warningColor: SolidColor;
        setWarningColor(valueNew: SolidColor | null): void;
        getWarningColor(): SolidColor;
        protected __processWarningColor(): void;
        protected __alarmColor: SolidColor;
        setAlarmColor(valueNew: SolidColor | null): void;
        getAlarmColor(): SolidColor;
        protected __processAlarmColor(): void;
        protected __defaultColor: SolidColor;
        setDefaultColor(valueNew: SolidColor | null): void;
        getDefaultColor(): SolidColor;
        protected __processDefaultColor(): void;
        protected __neddleColor: SolidColor;
        setNeddleColor(valueNew: SolidColor | null): void;
        getNeddleColor(): SolidColor;
        protected __processNeddleColor(): void;
        protected __calculate(): void;
        protected __getRanges(): TcHmi.Controls.Beckhoff.TcHmiTachometer.Range[];
        protected __getTickDefinition(): Beckhoff.TcHmiTachometer.TickDefinition;
        protected __autoRange(): void;
        protected __setTachometerDesignPersistent(value: string): void;
        protected __processColor(): void;
        protected __addEventListeners(): void;
        protected __onResized: () => (evt: EventProvider.Event, ctrl: Controls.Analytics.AnalyticsControl) => void;
    }
    enum TachometerDesign {
        TACHOMETER = "Tachometer",
        RadialGauge = "RadialGauge"
    }
    export {};
}
