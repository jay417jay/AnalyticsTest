declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            class ParetoChartControl extends TcHmi.Controls.Analytics.AnalyticsControl {
                protected __elChartContainer: JQuery;
                protected __elParetoChartCtrl: Charting | undefined;
                protected __scalingEditArea: EditAreaItem | undefined;
                protected readonly CHART_TYPE: E_ChartType;
                /** Keys of not-element-specific localizations */
                protected __localKeys: {
                    Pareto_Line: string;
                    Show_Pareto_Line: string;
                    Pareto_Line_Percentage: string;
                    Pareto_Line_Color: string;
                    Hover: string;
                    Use_Hover_Effect: string;
                    Draw_Pareto_Entry: string;
                    Hoverpoint_Radius: string;
                    Bars: string;
                    Show_Bar_Label: string;
                    Draw_Vital_Few: string;
                    Draw_X_Grid_Lines: string;
                    Draw_Y_Grid_Lines: string;
                    Bar_Gap: string;
                    Base_Bar_Color: string;
                    Vital_Few_Color: string;
                    Relative_Line: string;
                    Relative_Line_Color: string;
                    Bar_Maximization: string;
                    Cumulative_Scaling: string;
                    Axes_And_Grid: string;
                    Y_Axis_Scaling: string;
                };
                /** Values for enums used as properties */
                protected __enumLocalizationValues: {
                    Bar_Maximization: string;
                    Cumulative_Scaling: string;
                };
                protected __options: I_SE_ParetoChart_ChartOptions;
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                __previnit(): void;
                protected __initEditableProperties(): void;
                __init(): void;
                __attach(): void;
                __detach(): void;
                destroy(): void;
                protected __paretoModeInternal: string;
                protected __paretoMode: E_ParetoMode;
                setParetoMode(valueNew: string | null): void;
                getParetoMode(): string;
                protected __processParetoMode(): void;
                protected __drawXGridLines: boolean;
                setDrawXGridLines(valueNew: boolean | null): void;
                getDrawXGridLines(): boolean;
                protected __processDrawXGridLines(): void;
                protected __drawYGridLines: boolean;
                setDrawYGridLines(valueNew: boolean | null): void;
                getDrawYGridLines(): boolean;
                protected __processDrawYGridLines(): void;
                protected __yAxisScalingInternal: string;
                protected __yAxisScaling: E_ParetoYAxisScaling;
                setYAxisScaling(valueNew: string | null): void;
                getYAxisScaling(): string;
                protected __processYAxisScaling(): void;
                protected __setYAxisScalingPersistent(value: string): void;
                protected __channelNames: string[];
                protected __channelNamesResolved: string[];
                setChannelNames(valueNew: string[] | null): void;
                protected __onResolverForChannelNamesWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<any>) => void;
                getChannelNames(): string[];
                protected __processChannelNames(): void;
                protected __relativeValues: number[];
                protected __relativeValuesResolved: number[];
                setRelativeValues(valueNew: number[] | null): void;
                protected __onResolverForRelativeValuesWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<any>) => void;
                getRelativeValues(): number[];
                protected __processRelativeValues(): void;
                protected __absoluteValues: number[];
                protected __absoluteValuesResolved: number[];
                protected __absoluteValuesResolvedInternal: number[];
                setAbsoluteValues(valueNew: number[] | null): void;
                protected __onResolverForAbsoluteValuesWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<any>) => void;
                getAbsoluteValues(): number[];
                protected __processAbsoluteValues(): void;
                protected __showParetoLine: boolean;
                setShowParetoLine(valueNew: boolean | null): void;
                getShowParetoLine(): boolean;
                protected __processShowParetoLine(): void;
                protected __paretoLinePercentage: number;
                setParetoLinePercentage(valueNew: number | null): void;
                getParetoLinePercentage(): number;
                protected __processParetoLinePercentage(): void;
                protected __barGap: number;
                setBarGap(valueNew: number | null): void;
                getBarGap(): number;
                protected __processBarGap(): void;
                protected __showBarLabel: boolean;
                setShowBarLabel(valueNew: boolean | null): void;
                getShowBarLabel(): boolean;
                protected __processShowBarLabel(): void;
                protected __paretoLineColor: SolidColor;
                setParetoLineColor(valueNew: SolidColor | null): void;
                getParetoLineColor(): SolidColor;
                protected __processParetoLineColor(): void;
                protected __baseBarColor: SolidColor;
                setBaseBarColor(valueNew: SolidColor | null): void;
                getBaseBarColor(): SolidColor;
                protected __processBaseBarColor(): void;
                protected __vitalFewColor: SolidColor;
                setVitalFewColor(valueNew: SolidColor | null): void;
                getVitalFewColor(): SolidColor;
                protected __processVitalFewColor(): void;
                protected __drawVitalFew: boolean;
                setDrawVitalFew(valueNew: boolean | null): void;
                getDrawVitalFew(): boolean;
                protected __processDrawVitalFew(): void;
                protected __relativeLineColor: SolidColor;
                setRelativeLineColor(valueNew: SolidColor | null): void;
                getRelativeLineColor(): SolidColor;
                protected __processRelativeLineColor(): void;
                protected __hoverpointRadius: number;
                setHoverpointRadius(valueNew: number | null): void;
                getHoverpointRadius(): number;
                protected __processHoverPointRadius(): void;
                protected __useHoverEffect: boolean;
                setUseHoverEffect(valueNew: boolean | null): void;
                getUseHoverEffect(): boolean;
                protected __processUseHoverEffect(): void;
                protected __drawParetoEntry: boolean;
                setDrawParetoEntry(valueNew: boolean | null): void;
                getDrawParetoEntry(): boolean;
                protected __processDrawParetoEntry(): void;
                protected __setBarColor(): void;
                protected __updateOptions(): void;
                protected __updateOptionsWithoutData(): void;
                protected __initCharting(): void;
                protected __restoreChart(): void;
                protected __dataCharting(): void;
                protected __isReady(): boolean;
                protected __isValid(): boolean;
                protected __processColor(): void;
                /** Dark Mode */
                protected __darkMode: boolean;
                setDarkMode(valueNew: boolean): void;
                getDarkMode(): boolean;
                protected __processLocalizationReader(): void;
                protected __onResized: () => (evt: EventProvider.Event, ctrl: Controls.Analytics.AnalyticsControl) => void;
                protected __setChartSize(): void;
                /**
                 * Add an element to be localized.
                 * @param element The element.
                 * @param key The localization key.
                 * @param parameters Optional parameters to pass to tchmi_format_string.
                 */
                __addLocalizedElement(element: HTMLElement, key: string, ...parameters: any[]): void;
                /**
                 * Remove a localized element.
                 * @param element The element to remove.
                 */
                __removeLocalizedElement(element: HTMLElement): void;
            }
            enum E_ParetoYAxisScaling {
                BAR_MAXIMIZATION = 0,
                CUMULATIVE_SCALING = 1
            }
        }
    }
    enum E_ParetoMode {
        Count = 0,
        Timespan = 1
    }
}
