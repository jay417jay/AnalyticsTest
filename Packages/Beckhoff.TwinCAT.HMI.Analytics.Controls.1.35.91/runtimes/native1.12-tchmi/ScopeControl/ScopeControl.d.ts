declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            class ScopeControl extends TcHmi.Controls.Analytics.AnalyticsControl {
                /** Container of Scope Control(s) */
                protected __elChartingBox: JQuery;
                /** Wrapped Scope Control. Configuration will be changed based on the selected index */
                protected __scopeControl: Beckhoff.TcHmiScopeControl.TcHmiScopeControl;
                /** Helper varibale. Used for recreate ScopeControl */
                protected __idCount: number;
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                /**
                  * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                  * Call attribute processor functions here to initialize default values!
                  */
                __previnit(): void;
                /**
                 * Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values.
                 * @returns {void}
                 */
                __init(): void;
                /**
                * Is called by tachcontrol() after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __attach(): void;
                /**
                * Is called by tachcontrol() after the control instance is no longer part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __detach(): void;
                /**
                * Destroy the current control instance.
                * Will be called automatically if system destroys control!
                */
                destroy(): void;
                /**
                 * @deprecated This property is deprecated. Use ScopeConfigs instead.
                 */
                setScopeConfig(valueNew: TcHmi.Controls.Beckhoff.TcHmiScopeControl.ScopeConfig | null): void;
                /**
                 * @deprecated This property is deprecated. Use ScopeConfigs instead.
                 */
                getScopeConfig(): TcHmi.Controls.Beckhoff.TcHmiScopeControl.ScopeConfig | null;
                protected __scopeConfigs: TcHmi.Controls.Beckhoff.TcHmiScopeControl.ScopeConfig[];
                setScopeConfigs(valueNew: TcHmi.Controls.Beckhoff.TcHmiScopeControl.ScopeConfig[] | null): void;
                getScopeConfigs(): TcHmi.Controls.Beckhoff.TcHmiScopeControl.ScopeConfig[];
                protected __processScopeConfigs(): void;
                protected __configIndex: number;
                setConfigIndex(valueNew: number | null): void;
                getConfigIndex(): number;
                protected __processConfigIndex(): void;
                setServerInterval(valueNew: number | null): void;
                getServerInterval(): number;
                setEnableRecordControls(valueNew: boolean | null): void;
                getEnableRecordControls(): boolean;
                setShowReset(valueNew: boolean | null): void;
                __processAccessConfig(): void;
                protected __selectScopeControl(index: number): void;
                protected __recreateHmiScopeControl(): void;
                protected __onResized: () => (evt: EventProvider.Event, ctrl: Controls.Analytics.AnalyticsControl) => void;
            }
        }
    }
}
