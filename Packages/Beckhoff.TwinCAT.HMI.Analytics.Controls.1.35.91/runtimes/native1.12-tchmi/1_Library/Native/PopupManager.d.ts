declare namespace CustomElements {
    class PopupManager extends AnalyticsBaseCustomElement {
        private __initialized;
        constructor();
        protected __init(): void;
        protected __attach(): void;
        protected static __instance: PopupManager;
        static get instance(): PopupManager;
        private __disabled;
        /** If disabled no popups will be created (Default: false) */
        get disabled(): boolean;
        set disabled(value: boolean);
        protected __onDisabledChanged(): void;
        private static __lastMessages;
        static createPopup(message: string, status?: CustomElements.PopupStatus, timeInMs?: number, suppress?: boolean, namespace?: string): void;
        protected __getHtml(): string;
    }
}
