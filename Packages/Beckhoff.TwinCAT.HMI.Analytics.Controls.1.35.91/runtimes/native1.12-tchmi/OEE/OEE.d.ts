declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            export class OEE extends TcHmi.Controls.Analytics.AnalyticsControl {
                /** All containers of progress bars */
                protected __elProgressBarContainers: JQuery;
                /** Ring progress bar for OEE Value */
                protected __elOEEProgressBar: CustomElements.MultiRingProgressBar;
                /** Ring progress bar for Availability Value */
                protected __elAvailabilityProgressBar: CustomElements.RingProgressBar;
                /** Ring progress bar for Performance Value */
                protected __elPerformanceProgressBar: CustomElements.RingProgressBar;
                /** Ring progress bar for Quality Value */
                protected __elQualityProgressBar: CustomElements.RingProgressBar;
                /** UL list with all values */
                protected __elMultiValue: CustomElements.MultiValue;
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                __previnit(): void;
                __init(): void;
                __attach(): void;
                __detach(): void;
                destroy(): void;
                protected __oeeDesignInternal: string;
                protected __oeeDesign: OEEDesign;
                setOEEDesign(valueNew: string | null): void;
                getOEEDesign(): string;
                protected __processOEEDesign(): void;
                protected __oee: number;
                setOEE(valueNew: number | null): void;
                getOEE(): number;
                protected __processOEE(): void;
                protected __availability: number;
                setAvailability(valueNew: number | null): void;
                getAvailability(): number;
                protected __processAvailability(): void;
                protected __performance: number;
                setPerformance(valueNew: number | null): void;
                getPerformance(): number;
                protected __processPerformance(): void;
                protected __quality: number;
                setQuality(valueNew: number | null): void;
                getQuality(): number;
                protected __processQuality(): void;
                protected __levelOkWarning: number;
                setLevelOkWarning(valueNew: number | null): void;
                getLevelOkWarning(): number;
                protected __processLevelOkWarning(): void;
                protected __levelWarningAlarm: number;
                setLevelWarningAlarm(valueNew: number | null): void;
                getLevelWarningAlarm(): number;
                protected __processLevelWarningAlarm(): void;
                protected __classification: ClassificationState;
                setClassification(valueNew: number | null): void;
                getClassification(): number;
                protected __processClassification(): void;
                protected __useThresholdColor: boolean;
                setUseThresholdColor(valueNew: boolean | null): void;
                getUseThresholdColor(): boolean;
                protected __processUseThresholdColor(): void;
                protected __showLevels: boolean;
                setShowLevels(valueNew: boolean | null): void;
                getShowLevels(): boolean;
                protected __processShowLevels(): void;
                protected __showClassification: boolean;
                setShowClassification(valueNew: boolean | null): void;
                getShowClassification(): boolean;
                protected __processShowClassification(): void;
                protected __oeeColor: SolidColor;
                setOEEColor(valueNew: SolidColor | null): void;
                getOEEColor(): SolidColor;
                protected __processOEEColor(): void;
                protected __availabilityColor: SolidColor;
                setAvailabilityColor(valueNew: SolidColor | null): void;
                getAvailabilityColor(): SolidColor;
                protected __processAvailabilityColor(): void;
                protected __performanceColor: SolidColor;
                setPerformanceColor(valueNew: SolidColor | null): void;
                getPerformanceColor(): SolidColor;
                protected __processPerformanceColor(): void;
                protected __qualityColor: SolidColor;
                setQualityColor(valueNew: SolidColor | null): void;
                getQualityColor(): SolidColor;
                protected __processQualityColor(): void;
                protected __oeeAlias: string;
                setOEEAlias(valueNew: string | null): void;
                getOEEAlias(): string;
                protected __processOEEAlias(): void;
                protected __oeeShortAlias: string;
                setOEEShortAlias(valueNew: string | null): void;
                getOEEShortAlias(): string;
                protected __processOEEShortAlias(): void;
                protected __availabilityAlias: string;
                setAvailabilityAlias(valueNew: string | null): void;
                getAvailabilityAlias(): string;
                protected __processAvailabilityAlias(): void;
                protected __performanceAlias: string;
                setPerformanceAlias(valueNew: string | null): void;
                getPerformanceAlias(): string;
                protected __processPerformanceAlias(): void;
                protected __qualityAlias: string;
                setQualityAlias(valueNew: string | null): void;
                getQualityAlias(): string;
                protected __processQualityAlias(): void;
                protected __setOEEDesignPersistent(value: string): void;
                protected __processColor(): void;
                protected __addEventListeners(): void;
                protected __addEventListeners_DesignSpecific(): void;
                protected __removeEventListeners_DesignSpecific(): void;
                protected __textValueFontSizeChanged(sender: CustomElements.RingProgressBar, value: number): void;
                protected __textAliasFontSizeChanged(sender: CustomElements.RingProgressBar, value: number): void;
                protected __progressBarSizeChanged(): void;
                protected __calcTextFontSizeDebounced: () => void;
                protected __onResized: () => (evt: EventProvider.Event, ctrl: Controls.Analytics.AnalyticsControl) => void;
            }
            enum OEEDesign {
                DEFAULT = 0,
                MULTI_LAYER_RING = 1,
                FOUR_RINGS = 2
            }
            export {};
        }
    }
}
