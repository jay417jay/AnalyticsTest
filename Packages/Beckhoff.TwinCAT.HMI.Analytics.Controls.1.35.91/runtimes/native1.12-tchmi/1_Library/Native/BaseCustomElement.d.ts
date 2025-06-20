declare namespace CustomElements {
    abstract class BaseCustomElement extends HTMLElement {
        /** Root element of shadow */
        protected __elTemplateRoot: HTMLElement;
        /** Used to register and automatically deregister events in detache method */
        protected __eventListenerManager: TcHmi.Controls.Analytics.EventListenerManager;
        /** Used to check if elements and child elements are enabled. E.g. disable inputs. */
        protected __isEnabled: boolean;
        /** Used to check if element is attached to DOM */
        protected __isAttached: boolean;
        /** Used to check if element was attached to DOM */
        protected __wasAttached: boolean;
        /** Observer for html element size */
        protected __observer: ResizeObserver;
        /** Debounced resize function*/
        protected __debouncedResize: (size: ISize) => void;
        /** Use of shadow-root in DOM or not (default true). Can be set from derived elements. */
        protected __useShadowDOM: boolean;
        protected __i: number;
        /** Create the Custom Element and attach the shadow. */
        constructor();
        /** Attach element (can only be done once). Will be called on attached to DOM or can be called manually before. */
        attach(shadowDOM?: boolean): void;
        /** Called on attached to DOM */
        protected connectedCallback(): void;
        /** Called on removed from DOM */
        protected disconnectedCallback(): void;
        /** Will be called from base Class from constructor. Used to e.g. initialize variables. Not allowed to be called in inherited Class. */
        protected abstract __init(): void;
        /** Will be called from base Class when element is attached to DOM or attach is called. Used to e.g. find JQuery elements. Not allowed to be called in inherited Class. */
        protected abstract __attach(): void;
        /** Will be called from base Class after __atach method. Used to e.g. register events. Not allowed to be called in inherited Class. */
        protected __attached(): void;
        protected __size: ISize;
        /** Size of Control. Will be set automatically from actual size (Default: {width: 50, height: 50}) */
        get size(): ISize;
        private __setSize;
        protected __onSizeChanged(): void;
        setCSS(classNames: string[], color: string, styles?: string[]): void;
        /** Used to fire property changed event. */
        protected __onPropertyChanged(name: string, value: unknown): void;
        /** Add event listener which will be removed on disconnectedCallback */
        protected __addEventListener(element: HTMLElement | Document, type: string, listener: EventListenerOrEventListenerObject, options?: boolean, ...namespaces: string[]): void;
        /**
         * Remove the Event Listeners with the specified namespace. If namespace is null or undefined, all Event Listeners will be removed.
         * @param namespace
         */
        protected __removeEventListeners(namespace?: string): void;
        /** Execute all __onXYZChanged methods. May be used in __atach method. */
        protected __executeAllOnChangedMethods(): void;
        /** Get all method names of this class */
        private __getAllMethodNames;
        /**
         * Resized callback method from ResizeObserver
         * @param entries
         */
        protected __resize(entries: ResizeObserverEntry[]): void;
        /**
         * Resized callback method. It will be called with a 10ms delay to reduce calls/repaintings.
         * @param size
         */
        protected __resizeDebounced(size: ISize): void;
        /** HTML & CSS Code for Control shadow */
        protected abstract __getHtml(): string;
    }
    interface IAnalyticsBaseCustomElement {
        /** Text color */
        fontColor: string;
        /** Background color of elements. All elements which contains class "background" or "tchmi-analytics-background" will get the background-color. */
        backgroundColor: string;
        /** Background color of elements. All elements which contains class "component-1" or "tchmi-analytics-component-1" will get the background-color. */
        component1Color: string;
        /** Background color of elements. All elements which contains class "component-2" or "tchmi-analytics-component-2" will get the background-color. */
        component2Color: string;
    }
    abstract class AnalyticsBaseCustomElement extends BaseCustomElement implements IAnalyticsBaseCustomElement {
        /** Custom analytics child elements */
        protected __elCustomElements: IAnalyticsBaseCustomElement[];
        /** Unique GUID of Control (not the ID) */
        protected __guid: string;
        constructor();
        private __amountDecimals;
        /** Amount of decimals (Default: 2) */
        get amountDecimals(): number;
        set amountDecimals(value: number);
        protected __onAmountDecimalsChanged(): void;
        private __fontColor;
        /** Color of most text/icon elements (Default: "rgba(0, 0, 0, 1)"). All elements which contains class "text" or "tchmi-analytics-text" / "svg-mask" or "tchmi-analytics-svg-mask" / "control-design" or "tchmi-analytics-control-design" will get the color/background-color/border-color. */
        get fontColor(): string;
        set fontColor(value: string);
        protected __onFontColorChanged(): void;
        private __backgroundColor;
        /** Background color of elements (Default: "rgba(204, 204, 204, 1)"). All elements which contains class "background" or "tchmi-analytics-background" will get the background. */
        get backgroundColor(): string;
        set backgroundColor(value: string);
        protected __onBackgroundColorChanged(): void;
        private __component1Color;
        /** Background color of elements (Default: "rgba(204, 204, 204, 1)"). All elements which contains class "component-1" or "tchmi-analytics-component-1" will get the background-color. */
        get component1Color(): string;
        set component1Color(value: string);
        protected __onComponent1ColorChanged(): void;
        private __component2Color;
        /** Background color of elements (Default: "rgba(255, 255, 255, 1)"). All elements which contains class "component-2" or "tchmi-analytics-component-2" will get the background-color. */
        get component2Color(): string;
        set component2Color(value: string);
        protected __onComponent2ColorChanged(): void;
        protected __logIfError(result: TcHmi.IResultObject): void;
        /**
         * Trim numeric value
         * @param value - The value to parse
         * @param namespace - Identification of trimmed value in Control. Used to check if decimal value already had decimal numbers to always show (prevent decimal flashing).
         */
        protected __getTrimmedNumber(value: string | number, namespace?: string): string;
        /**
         * Trim numeric value and get it with (if exists) unit back
         * @param value - The value to parse
         * @param value - The unit to extend
         * @param namespace - Identification of trimmed value in Control. Used to check if decimal value already had decimal numbers to always show (prevent decimal flashing).
         * @param nonbrSpace - Using non-breaking space for value and unit or not.
         */
        protected __getTrimmedNumberWithUnit(value: string | number, unit: string, namespace?: string, nonbrSpace?: boolean): string;
        /**
         * Auto size of elements until container would overflow. If autoGrow the size is increased after the timeout (prevent flashing).
         * @param container to check overflow
         * @param elementsToChange elements where the style will be modified (can also be the container if the childs derive the styles from it)
         * @param styleTags css style tag (e.g. fontSize)
         * @param options
                    namespace - Identification of auto sized value in Control. Used to autosize different elements in a different way.
                    min - pixel value
                    max - pixel value
                    autoGrowDelay - delay of autoGrow in milliseconds (if enabled)
         */
        protected __autoSize(container: HTMLElement, elementsToChange: HTMLElement[] | HTMLElement, styleTags: string | string[], options?: TcHmi.Controls.Analytics.IAutoSizeOptions): number;
        /**
         * Reset of autosize. Should be used after e.g. resize of Control.
         * @param namespace Identification of auto sized value in Control. Used to autosize different elements in a different way
         */
        protected __resetAutoSize(namespace?: string): void;
    }
    interface IPropertyChangedParams {
        propertyName: string;
        newValue: unknown;
    }
    interface ISize {
        width: number;
        height: number;
    }
}
