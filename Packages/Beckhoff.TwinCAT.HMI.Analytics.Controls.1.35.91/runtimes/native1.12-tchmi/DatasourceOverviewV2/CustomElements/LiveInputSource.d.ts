declare namespace CustomElements {
    interface IInputSource extends Node, IAnalyticsBaseCustomElement {
        displayName: string;
        inputSource: TcHmi.Controls.Analytics.IInputSource;
        minimize: boolean;
        monthAlias: string[];
        currentTimeAlias: string;
    }
    class LiveInputSource extends AnalyticsBaseCustomElement implements IInputSource {
        /** Display name of input source */
        protected __elTitle: HTMLElement;
        /** End of header container */
        protected __elHeaderEnd: HTMLElement;
        /** Status LED of stream */
        protected __elStatus: HTMLElement;
        /** Icon animation of status to show if it is running or paused */
        protected __elStatusRunningIcon: LoaderIcon;
        /** Current time of executing record */
        protected __elCurrentTime: HTMLElement;
        /** Current time text (localization) */
        protected __elCurrentTimeAlias: HTMLElement;
        constructor();
        protected __init(): void;
        protected __attach(): void;
        private __displayName;
        /** Display name (Default: "-") */
        get displayName(): string;
        set displayName(value: string);
        protected __onDisplayNameChanged(): void;
        private __inputSource;
        /** InputSource to show in tree view (Default: null) */
        get inputSource(): TcHmi.Controls.Analytics.IInputSource;
        set inputSource(value: TcHmi.Controls.Analytics.IInputSource);
        protected __onInputSourceChanged(): void;
        private __minimize;
        /** Whether Control is minimized to hide or shrink elements (Default: false) */
        get minimize(): boolean;
        set minimize(value: boolean);
        protected __onMinimizeChanged(): void;
        private __onlineStatus;
        /** Internal setter! Live source is offline, online or waitForData (Default: E_OnlineStatus.OFFLINE) */
        protected set onlineStatus(value: E_OnlineStatus);
        getOnlineStatus(): E_OnlineStatus;
        protected __onOnlineStatusChanged(): void;
        private __monthAlias;
        /** Alias name of all months (Default: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]) */
        get monthAlias(): string[];
        set monthAlias(value: string[]);
        protected __onMonthAliasChanged(): void;
        private __currentTimeAlias;
        /** Text alias name, used for translations. (Default: "Current Time"). */
        get currentTimeAlias(): string;
        set currentTimeAlias(value: string);
        protected __onCurrentTimeAliasChanged(): void;
        protected __getHtml(): string;
    }
    enum E_OnlineStatus {
        OFFLINE = 0,
        ONLINE = 1,
        WAIT_FOR_DATA = 2
    }
}
