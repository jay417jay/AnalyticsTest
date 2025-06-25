declare namespace CustomElements {
    class RingProgressBar extends CustomElements.AnalyticsBaseCustomElement {
        /** SVG element */
        protected __elSVG: SVGElement;
        /** SVG circle for ring progress */
        protected __elSVGCircleProgress: SVGElement;
        /** SVG circle for background */
        protected __elSVGCircleBackground: SVGElement;
        /** SVG circle for first state */
        protected __elSVGCircleFirst: SVGElement;
        /** SVG circle for second state */
        protected __elSVGCircleSecond: SVGElement;
        /** SVG circle for last state */
        protected __elSVGCircleLast: SVGElement;
        /** Container of value, alias text */
        protected __elTextContainer: HTMLElement;
        /** Text of progress value */
        protected __elTextValue: HTMLElement;
        /** Text of progress value */
        protected __elTextAlias: HTMLElement;
        /** Last info of drawn ring */
        protected __lastRingInfo: ISVGCircleProgress;
        /** Last info of drawn OEE ring */
        protected __lastOEERingInfo: ISVGCircleProgress;
        /** SVG size */
        protected __svgSize: number;
        /** Default Margin */
        protected __margin: number;
        private readonly DEFAULT_MAX_TEXT_VALUE_FONT_SIZE;
        private readonly DEFAULT_MAX_TEXT_ALIAS_FONT_SIZE;
        constructor();
        protected __init(): void;
        protected __attach(): void;
        protected __onSizeChanged(): void;
        private __progress;
        /** Progress from 0 to 100 of the ring progress bar (Default: 10) */
        get progress(): number;
        set progress(value: number);
        protected __onProgressChanged(): void;
        private __showText;
        /** Show of progress value with alias (Default: true) */
        get showText(): boolean;
        set showText(value: boolean);
        protected __onShowTextChanged(): void;
        private __showThresholds;
        /** Show of thresholds (Default: false) */
        get showThresholds(): boolean;
        set showThresholds(value: boolean);
        protected __onShowThresholdsChanged(): void;
        private __showClassification;
        /** Show of classification. The value will drawn in the classification color. (Default: true) */
        get showClassification(): boolean;
        set showClassification(value: boolean);
        protected __onShowClassificationChanged(): void;
        private __thresholdOkWarning;
        /** Threshold for Ok to Warning (Default: 90) */
        get thresholdOkWarning(): number;
        set thresholdOkWarning(value: number);
        protected __onThresholdOkWarningChanged(): void;
        private __thresholdWarningAlarm;
        /** Threshold for Warning to Alarm (Default: 75) */
        get thresholdWarningAlarm(): number;
        set thresholdWarningAlarm(value: number);
        protected __onThresholdWarningAlarmChanged(): void;
        private __classification;
        /** Classification (Default: TcHmi.Controls.Analytics.State.NOT_INITIALIZED) */
        get classification(): TcHmi.Controls.Analytics.ClassificationState;
        set classification(value: TcHmi.Controls.Analytics.ClassificationState);
        protected __onClassificationChanged(): void;
        private __maxTextValueFontSize;
        /** Maximumum font size of text value. Property will be resetted on size changed. (Default: 100) */
        get maxTextValueFontSize(): number;
        set maxTextValueFontSize(value: number);
        protected __onMaxTextValueFontSizeChanged(): void;
        private __maxTextAliasFontSize;
        /** Maximumum font size of text alias. Property will be resetted on size changed. (Default: 50) */
        get maxTextAliasFontSize(): number;
        set maxTextAliasFontSize(value: number);
        protected __onMaxTextAliasFontSizeChanged(): void;
        private __textValueFontSize;
        /** Current text value font size. Property will be updated from this Control (Default: 100) */
        get textValueFontSize(): number;
        set textValueFontSize(value: number);
        protected __onTextValueFontSizeChanged(): void;
        private __textAliasFontSize;
        /** Current text alias font size. Property will be updated from this Control (Default: 50) */
        get textAliasFontSize(): number;
        set textAliasFontSize(value: number);
        protected __onTextAliasFontSizeChanged(): void;
        private __ringColor;
        /** Color of progress in ring (Default: "rgb(0, 200, 200)") */
        get ringColor(): string;
        set ringColor(value: string);
        protected __onRingColorChanged(): void;
        private __ringBackgroundColor;
        /** Color of ring background. If null, the ring color with lower opacity will be used. (Default: null) */
        get ringBackgroundColor(): string;
        set ringBackgroundColor(value: string);
        protected __onRingBackgroundColorChanged(): void;
        private __colorOk;
        /** Color for OK (Default: "#339900" */
        get colorOk(): string;
        set colorOk(value: string);
        protected __onColorOkChanged(): void;
        private __colorWarning;
        /** Color for Warning (Default: "#ff9900") */
        get colorWarning(): string;
        set colorWarning(value: string);
        protected __onColorWarningChanged(): void;
        private __colorAlarm;
        /** Color for Alarm (Default: "#cc3300") */
        get colorAlarm(): string;
        set colorAlarm(value: string);
        protected __onColorAlarmChanged(): void;
        private __ringAlias;
        /** Text in ring (Default: "Value") */
        get ringAlias(): string;
        set ringAlias(value: string);
        protected __onRingAliasChanged(): void;
        resetAutoSize(): void;
        protected __drawAll(): void;
        protected __draw(): void;
        protected __drawRings(): void;
        protected __drawRing(svgCircle: SVGElement, progress: number, color?: string, offset?: number, size?: number, stroke?: number): ISVGCircleProgress;
        protected __drawText(): void;
        protected __getSVGCircleAttributes(width: number, position: number, end?: number, offset?: number, stroke?: number, svgWidth?: number): ISVGCircleProgress;
        protected __drawThresholds(): void;
        protected __processClassification(): void;
        protected __addEventListeners(): void;
        protected __getHtml(): string;
    }
}
