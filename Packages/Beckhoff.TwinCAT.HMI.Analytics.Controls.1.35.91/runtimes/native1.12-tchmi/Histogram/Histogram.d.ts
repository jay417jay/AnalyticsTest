declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            export class Histogram extends TcHmi.Controls.Analytics.AnalyticsControl {
                protected __elSvg: JQuery;
                protected __elSvgDefs: JQuery;
                protected __elSvgCoordinateSystem: JQuery;
                protected __elSvgYAxisLabel: JQuery;
                protected __elSvgBin: JQuery;
                protected __elSvgBinTooltip: JQuery;
                protected __elSvgBinValue: JQuery;
                protected __elSvgBinLabel: JQuery;
                protected __elSvgUnitButton: JQuery;
                /** Button for Section Timer y-axis unit */
                protected __elUnitButton: JQuery;
                /** SVG Size, calculated from Control Size */
                protected __svgSize: ISize;
                /** Histogram chart html elements */
                protected __elements: IHTMLElements;
                protected __linearGrad: string;
                /** Offset for y axis name */
                private readonly YNAME_OFFSET;
                private __sectionsBorders;
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                __previnit(): void;
                __init(): void;
                __attach(): void;
                __detach(): void;
                destroy(): void;
                protected __onResized: () => (evt: EventProvider.Event, ctrl: Controls.Analytics.AnalyticsControl) => void;
                protected __colorsHist: IColorHist[];
                setColorsHist(valueNew: IColorHist[] | null): void;
                getColorsHist(): IColorHist[];
                protected __processColorsHist(): void;
                protected __controlType: ControlType | null | undefined;
                setControlType(valueNew: string): void;
                getControlType(): string;
                protected __processControlType(): void;
                protected __histogramUnit: YUnit;
                setHistogramUnit(valueNew: YUnit): void;
                getHistogramUnit(): string;
                protected __unit: string;
                setUnit(valueNew: string | null): void;
                getUnit(): string;
                protected __processUnit(): void;
                protected __yAxisName: string;
                setYAxisName(valueNew: string | null): void;
                getYAxisName(): string;
                protected __processYAxisName(): void;
                protected __labels: Labels | null | undefined;
                setLabels(valueNew: Labels): void;
                getLabels(): string;
                protected __processLabels(): void;
                protected __bins: any | null | undefined;
                /**
                 * @deprecated Property Bins is deprecated and Bins2 should be used.
                 */
                setBins(valueNew: object): void;
                /**
               * @deprecated Property Bins is deprecated and Bins2 should be used.
               */
                getBins(): any;
                protected __binsLabel: string | null | undefined;
                /**
                * @deprecated Property BinsLabel is deprecated and Bins2 should be used.
                */
                getBinsLabel(): string;
                /**
                * @deprecated Property BinsLabel is deprecated and Bins2 should be used.
                */
                setBinsLabel(valueNew: string): void;
                /**
                * @deprecated Property BinsLabel is deprecated and Bins2 should be used.
                */
                protected __processBinsLabel(): void;
                protected __bins2: IBin[] | null | undefined;
                protected __bins2Resolved: IBin[];
                protected __bins2ResolvedOld: IBin[] | null;
                setBins2(valueNew: string): void;
                protected __onResolverForBins2WatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<any>) => void;
                protected getBins2Resolved(): IBin[];
                getBins2(): IBin[];
                protected __processBins2(): void;
                protected __sectionsUpperBorders: number[] | null | undefined;
                getSectionsUpperBorders(): number[];
                setSectionsUpperBorders(valueNew: number[]): void;
                protected __relative: boolean;
                setRelative(valueNew: boolean | null): void;
                getRelative(): boolean;
                protected __processRelative(): void;
                protected __sectionsLowerBorder: number | null | undefined;
                setSectionsLowerBorder(valueNew: object): void;
                getSectionsLowerBorder(): number;
                protected __processBorders(): void;
                protected __showOuterBins: boolean | null | undefined;
                setShowOuterBins(valueNew: boolean): void;
                getShowOuterBins(): boolean;
                protected __processShowOuterBins(): void;
                protected __processBins(forceRedraw?: boolean): void;
                protected __showColors: boolean;
                setShowColors(valueNew: boolean): void;
                getShowColors(): boolean;
                protected __processShowColors(): void;
                protected __showValues: boolean;
                setShowValues(valueNew: boolean): void;
                getShowValues(): boolean;
                protected __processShowValues(): void;
                protected __writeLabelsVertical: boolean;
                setWriteLabelsVertical(valueNew: boolean): void;
                getWriteLabelsVertical(): boolean;
                protected __processWriteLabelsVertical(): void;
                protected __showAxis: boolean;
                setShowAxis(valueNew: boolean): void;
                getShowAxis(): boolean;
                protected __processShowAxis(): void;
                private __processHistogram;
                private __drawHistogram;
                protected __clearHistogramElements(): void;
                protected __getHistogramParams(showAxis: boolean): {
                    drawWidth: number;
                    drawHeight: number;
                    xStart: number;
                    yStart: number;
                    yEnd: number;
                };
                protected __getCalculatedBinsAndLabels(bins: number[], histogramUnit: YUnit, controlType: ControlType): {
                    newHistBins: number[];
                    binsDisplayValue: string[];
                    binsTooltip: string[];
                };
                protected __getBinData(): IBinData;
                protected __histogramShapeChanged(): boolean;
                protected __processColorGradient(): void;
                protected __processColor(): void;
                protected __addEventListeners(): void;
                protected __unitButtonClicked(): void;
            }
            export interface IBin {
                name: string;
                value: number;
            }
            interface IBinData {
                bins: number[];
                binLabels: string[];
                binDisplayValues: string[];
                binTooltips: string[];
                unit: string;
                negativeValue: boolean;
            }
            interface IColorHist {
                binColor: SolidColor;
            }
            interface IHTMLElements {
                binElements: IBinElements[];
            }
            interface IBinElements {
                bin: SVGRectElement;
                binTooltip: SVGTitleElement;
                xValue: SVGTextElement;
                xLabel: SVGTextElement;
            }
            enum YUnit {
                SECOND = "s",
                MINUTE = "m",
                HOUR = "h",
                DAY = "d"
            }
            enum ControlType {
                DEFAULT = "Default",
                SECTION_TIMER = "SectionTimer"
            }
            enum Labels {
                MANUAL = "Manual",
                VALUE = "Value",
                SECTION = "Section"
            }
            export {};
        }
    }
}
