declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            class DataTable extends TcHmi.Controls.Analytics.AnalyticsControl {
                /**
                 * @description Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elContainer: JQuery;
                protected __elSection: JQuery;
                protected __elTable: JQuery;
                protected __elColumnSeparator: JQuery;
                protected __elTableRow: JQuery;
                protected __elTableCell: JQuery;
                protected __elTableCellText: JQuery;
                protected __elTableCellHeader: JQuery;
                protected __elTableCellHeaderText: JQuery;
                protected __elTableCellValue: JQuery;
                protected __elTableCellValueText: JQuery;
                protected __elSaveButton: JQuery;
                protected __tableType: string | null | undefined;
                protected __fontsizeHeader: number | null | undefined;
                protected __fontsizeItem: number | null | undefined;
                protected __resultsSymbols: any | null | undefined;
                protected __results: IResults | null | undefined;
                protected __monthAlias: string | null | undefined;
                protected __dynamicFontSizeItem: boolean | null | undefined;
                protected __itemColor: any | null | undefined;
                protected __controlColorMiddleTable: string;
                protected __controlColorDarkTable: string;
                protected __showMilliseconds: boolean;
                protected __dayAlias: string;
                protected __notAllMappedAlias: string;
                protected __errorParametersAlias: string;
                protected __successParametersAlias: string;
                protected __changeParametersAlias: string;
                protected __resetColumnSizeAlias: string;
                protected __tableWidth: number;
                protected __tableHeight: number;
                /*** Helpers ***/
                protected __processTableExecuting: number;
                protected __columnSortings: IColumnSorting[];
                protected __columnSortingKey: string;
                protected __columnWidth: number[];
                protected __columnWidthkey: string;
                protected __parametersChanging: boolean;
                protected __rawResults: IResults | null;
                protected __oldResults: IResults | null;
                protected __oldDataMatrix: TableCell[][];
                protected __columnDragging: boolean;
                protected __dragStartPos: Point;
                protected __dragColumnIdx: number;
                protected __paramReconfigureList: {
                    moduleItem: TableItem;
                    symbols: {
                        paramSymbol: string;
                        value: string;
                    }[];
                }[];
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
                protected __processFontColor(): void;
                protected __processColorGradient(): void;
                protected __processColor(): void;
                /***** HMI Properties *****/
                setTableType(valueNew: string): void;
                getTableType(): string;
                protected __processTableType(): void;
                setItemColor(valueNew: string): void;
                getItemColor(): string;
                protected __processItemColor(): void;
                setControlColorMiddleTable(valueNew: string): void;
                getControlColorMiddleTable(): string;
                setControlColorDarkTable(valueNew: string): void;
                getControlColorDarkTable(): string;
                getFontsizeHeader(): number;
                setFontsizeHeader(valueNew: number): void;
                /**
                 * @deprecated Use FontSizeHeader2 with FontSizeHeaderUnit instead
                 */
                protected __processFontsizeHeader(): void;
                getFontsizeItem(): number;
                setFontsizeItem(valueNew: number): void;
                protected __processFontsizeItem(): void;
                setMonthAlias(valueNew: string): void;
                getMonthAlias(): string;
                protected __processMonthAlias(): void;
                setResults(valueNew: string): void;
                protected __onResolverForResultsWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<any[]>) => void;
                getResults(): IResults;
                protected __processResults(): void;
                setDynamicFontSizeItem(valueNew: boolean): void;
                getDynamicFontSizeItem(): boolean;
                protected __processDynamicFontSizeItem(): void;
                protected __processAmountDecimals(): void;
                setNotAllMappedAlias(valueNew: string): void;
                getNotAllMappedAlias(): string;
                protected __processNotAllMappedAlias(): void;
                setErrorParametersAlias(valueNew: string): void;
                getErrorParametersAlias(): string;
                protected __processErrorParametersAlias(): void;
                setSuccessParametersAlias(valueNew: string): void;
                getSuccessParametersAlias(): string;
                protected __processSuccessParametersAlias(): void;
                setChangeParametersAlias(valueNew: string): void;
                getChangeParametersAlias(): string;
                protected __processChangeParametersAlias(): void;
                setResetColumnSizeAlias(valueNew: string): void;
                getResetColumnSizeAlias(): string;
                protected __processResetColumnSizeAlias(): void;
                setShowMilliseconds(valueNew: boolean): void;
                getShowMilliseconds(): boolean;
                protected __processShowMilliseconds(): void;
                setDayAlias(valueNew: string): void;
                getDayAlias(): string;
                protected __processDayAlias(): void;
                /***** Internal Properties *****/
                private __hasEditable;
                protected __setHasEditable(value: boolean): void;
                protected __processHasEditable(): void;
                /***** Methods *****/
                protected __processTable(forceRedraw?: boolean): void;
                protected __processTableDirectly(forceRedraw?: boolean): void;
                protected __redrawTable(dataMatrix: TableCell[][], rawDataMatrix: TableItem[]): void;
                protected __updateTable(dataMatrix: TableCell[][], override: boolean): void;
                protected __getResultMatrix(): TableItem[];
                protected __getMaxColumns(): number;
                protected __resultsShapeChanged(): boolean;
                protected __writeCellData(cell: HTMLElement, cellItem: TableCell, override: boolean): void;
                protected __saveSortingInfo(): void;
                protected __loadSortingInfo(): void;
                /***** Event Handler *****/
                private __rowMouseEnter;
                private __rowMouseLeave;
                private __cellClicked;
                private __cellKeyPressed;
                private __cellMouseEnter;
                private __cellMouseLeave;
                private __changeParametersClicked;
                private __toggleChangeParameters;
                private __closeChangeParameters;
                private __saveButtonClicked;
                private __resetColumnSizeClicked;
                private __onSubheaderCellClicked;
                private __clmSepMouseOrTouchDown;
                private __mouseTouchMove;
                private __move;
                private __mouseOrTouchUp;
            }
            /*** Internal used classes (similar to IResults) ****/
            class TableItem extends Array<TableCell> {
                constructor(name: string, reconfigureSymbol: string);
                private _name;
                get name(): string;
                private _reconfigureSymbol;
                get reconfigureSymbol(): string;
            }
            class TableCell {
                constructor(value: string | number | any);
                private _value;
                get value(): string | number | any;
            }
            class TableCellValue extends TableCell {
                constructor(dataTableItemIdx: number, name: string, value: string | number | any, editable: boolean, symbol: string);
                private _dataTableItemIdx;
                get dataTableItemIdx(): number;
                private _name;
                get name(): string;
                private _editable;
                get editable(): boolean;
                private _symbol;
                get symbol(): string;
            }
            interface IColumnSorting {
                clmIdx: number;
                rowIdx: number;
                type: SortingType;
            }
            /*** Interface for results data ***/
            interface IResults extends Array<IDataTableItem> {
            }
            interface IDataTableItem {
                name: string;
                reconfigure: string;
                datavalues: ICellData[];
            }
            interface ICellData {
                sKey: string;
                displayName: string;
                sValue: number | string | any;
                editable: boolean;
            }
        }
    }
}
