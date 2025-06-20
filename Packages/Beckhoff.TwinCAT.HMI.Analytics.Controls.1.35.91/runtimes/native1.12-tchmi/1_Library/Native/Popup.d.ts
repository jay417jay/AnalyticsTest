declare namespace CustomElements {
    /** Popup. Use PopupManager to create one or multiple Popups at the same time. */
    class Popup extends AnalyticsBaseCustomElement {
        /** Message text element */
        protected __elMessage: HTMLElement;
        /** Progress bar with elapsing time */
        protected __elProgress: HTMLElement;
        /** Close svg icon */
        protected __elClose: HTMLElement;
        constructor();
        protected __init(): void;
        protected __attach(): void;
        private __show;
        /** Set show to display or hide the popup. Value will be set to false after duration elapsed. (Default: false) */
        get show(): boolean;
        set show(value: boolean);
        protected __onShowChanged(): void;
        private __message;
        /** Message of popup (Default: "") */
        get message(): string;
        set message(value: string);
        protected __onMessageChanged(): void;
        private __status;
        /** Status of Popup. The status will do the colors: INFO-Blue, OK-Green, WARNING-Yellow, ALARM-Red (Default: IPopupStatus.Info) */
        get status(): PopupStatus;
        set status(value: PopupStatus);
        protected __onStatusChanged(): void;
        private __duration;
        /** Duration in milliseconds until popup will close (Default: 10000) */
        get duration(): number;
        set duration(value: number);
        protected __onDurationChanged(): void;
        private __infoColor;
        /** Color for info popup (Default: "#3498db") */
        get infoColor(): string;
        set infoColor(value: string);
        protected __onInfoColorChanged(): void;
        private __okColor;
        /** Color for ok popup (Default: "#339900") */
        get okColor(): string;
        set okColor(value: string);
        protected __onOkColorChanged(): void;
        private __warningColor;
        /** Color for warning popup (Default: "#ff9900") */
        get warningColor(): string;
        set warningColor(value: string);
        protected __onWarningColorChanged(): void;
        private __alarmColor;
        /** Color for alarm popup (Default: "#cc33000") */
        get alarmColor(): string;
        set alarmColor(value: string);
        protected __onAlarmColorChanged(): void;
        protected __removePopup(): void;
        protected __addEventListeners(): void;
        protected __pauseAnimation(): void;
        protected __runAnimation(): void;
        protected __getHtml(): string;
    }
    enum PopupStatus {
        INFO = 0,
        OK = 1,
        WARNING = 2,
        ALARM = 3
    }
}
