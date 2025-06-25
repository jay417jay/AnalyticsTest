declare namespace TcHmi.Controls.Analytics {
    class Image extends TcHmi.Controls.Analytics.AnalyticsControl {
        protected __hmiImage: TcHmi.Controls.Beckhoff.TcHmiImage;
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        setSrc(valueNew: string | null): void;
        getSrc(): string;
        protected __processSrc(): void;
        setAlt(valueNew: string | null): void;
        getAlt(): string;
        protected __processAlt(): void;
        getOriginalWidth(): number;
        getOriginalHeight(): number;
        protected __processColor(): void;
        protected __addEventListeners(): void;
        protected __onResized: () => (evt: EventProvider.Event, ctrl: Controls.Analytics.AnalyticsControl) => void;
    }
}
