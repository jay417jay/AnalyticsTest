/// <reference path="leaflet.d.ts" />
declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            class MapControl extends TcHmi.Controls.Analytics.AnalyticsControl {
                /**
                 * @description Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elementOuterMap: JQuery;
                protected __elementMainLegend: JQuery;
                protected __elementLegend: JQuery;
                protected __elementListElement: JQuery;
                protected __elementMapContainer: JQuery;
                protected __elementExpander: JQuery;
                protected __elementExpanderImg: JQuery;
                protected __useStructInput: boolean | null | undefined;
                protected __mapInput: any | null | undefined;
                protected __mapInputSymbol: any | null | undefined;
                protected __oldMapInput: any | null | undefined;
                protected __isExpanded: boolean;
                protected __map: L.Map;
                protected __expanderMouseClickEvent: DestroyFunction | null;
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
                setMapInput(valueNew: string): void;
                protected __onResolverForResultsWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<any[]>) => void;
                protected __processColor(): void;
                protected __processMap(): void;
                protected CreateDefaultMap(): void;
                protected __processTheme(): void;
                private stackPos;
                private CreateMap;
            }
        }
    }
}
