declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            export class SankeyChart extends TcHmi.Controls.Analytics.AnalyticsControl {
                /** Main SVG element */
                protected __elementSvg: JQuery;
                /** SVG gradient definitions */
                protected __elementSvgDefs: JQuery;
                /** SVG output arrows */
                protected __elementSvgArrow: JQuery;
                /** SVG text elements */
                protected __elementSvgText: JQuery;
                /** SVG viewbox width */
                protected __vbWidth: number;
                /** SVG viewbox height */
                protected __vbHeight: number;
                /** SVG Size, calculated from Control Size */
                protected __svgSize: ISize;
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                __previnit(): void;
                __init(): void;
                __attach(): void;
                __detach(): void;
                destroy(): void;
                protected __sankeyInputs: ISankeyInOut;
                setSankeyInputs(valueNew: ISankeyIn): void;
                protected __onResolverForInputsWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<ISankeyIn>) => void;
                getSankeyInputs(): ISankeyInOut;
                protected __processSankeyInputs(): void;
                protected __sankeyInputsV2: ISankeyInOut[];
                protected __sankeyInputsResolvedV2: ISankeyInOut[];
                setSankeyInputsV2(valueNew: ISankeyInOut[] | null): void;
                protected __onResolverForSankeyInputsV2WatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<ISankeyInOut[]>) => void;
                getSankeyInputsV2(): ISankeyInOut[];
                protected __processSankeyInputsV2(): void;
                protected __sankeyOutputs: ISankeyInOut[];
                protected __sankeyOutputsResolved: ISankeyInOut[];
                setSankeyOutputs(valueNew: object): void;
                protected __onResolverForOutputsWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<ISankeyInOut[] | ISankeyOutObsolete[]>) => void;
                __migrateSankeyOutputs(outData: ISankeyInOut[] | ISankeyOutObsolete[]): ISankeyInOut[];
                getSankeyOutputsResolved(): ISankeyInOut[];
                getSankeyOutputs(): ISankeyInOut[];
                protected __processSankeyOutputs(): void;
                protected __rest: number;
                setRest(valueNew: number | null): void;
                getRest(): number;
                protected __processRest(): void;
                protected __restName: string;
                setRestName(valueNew: string | null): void;
                getRestName(): string;
                protected __processRestName(): void;
                protected __startColor: SolidColor;
                setStartColor(valueNew: SolidColor): void;
                getStartColor(): SolidColor;
                protected __processStartColor(): void;
                protected __endColor: SolidColor;
                setEndColor(valueNew: object): void;
                getEndColor(): SolidColor;
                protected __processEndColor(): void;
                protected __unit: string;
                setUnit(valueNew: string): void;
                getUnit(): string;
                protected __processUnit(): void;
                protected __processAmountDecimals(): void;
                protected __processColor(): void;
                protected __drawSankeyChart(): void;
                /**
                 * Shorten text of big values
                 */
                protected __getUnitAndFactor(sumInputs: number): {
                    unit: string;
                    factor: number;
                };
                protected __onResized: () => (evt: EventProvider.Event, ctrl: Controls.Analytics.AnalyticsControl) => void;
            }
            interface ISankeyIn {
                name: string;
                percentage: number;
            }
            interface ISankeyInOut {
                name: string;
                value: number;
                percentage: number;
            }
            interface ISankeyOutObsolete {
                name: string;
                percentage: number;
            }
            export {};
        }
    }
}
