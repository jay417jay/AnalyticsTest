declare namespace TcHmi {
    namespace Controls {
        namespace Analytics {
            export class Property {
                /**
                * Constructor for the Property class.
                * @param control - The AnalyticsControl instance.
                * @param name - The name of the property.
                * @param displayName - The display name of the property.
                * @param type - The data type of the property.
                * @param options - Additional options for the property.
                * @param options.comboBoxOptions - Default: []
                * @param options.subName - Default: null
                * @param options.subDisplayName - Default: ''
                * @param options.subMembers - Default: []
                * @param options.shifted - Default: false
                * @param options.allowPersist - Default: true
                * @param options.canBeSet - Default: true
                * @param options.allowReset - Default: true
                */
                constructor(control: AnalyticsControl, name: string, displayName: string, type: E_DataType, options?: IPropertyOptions);
                private _control;
                private _getter;
                private _getterResolved;
                private _setter;
                private _name;
                get name(): string;
                private _displayName;
                get displayName(): string;
                private _type;
                get type(): E_DataType;
                private _comboBoxOptions;
                get options(): IComboBoxEntry[];
                private _subName;
                get subName(): string | null;
                private _subDisplayName;
                get subDisplayName(): string;
                get value(): any;
                set value(valueNew: any);
                get valueResolved(): any;
                getSubValue(index: number): any;
                setSubValue(index: number, value: any): void;
                setOriginalValue(valueNew: any): void;
                private _shifted;
                get shifted(): boolean;
                private _allowPersist;
                get allowPersist(): boolean;
                private _allowReset;
                get allowReset(): boolean;
                private _canBeSet;
                get canBeSet(): boolean;
                private _tooltip;
                get tooltip(): string;
                private _disabledTooltip;
                get disabledTooltip(): string;
                private _subMembers;
                get subMembers(): Property[];
                private _contentSeparatorAddCallback;
                get contentSeparatorAddCallback(): () => void;
            }
            export interface IPropertyOptions {
                comboBoxOptions?: IComboBoxEntry[];
                subName?: string;
                subDisplayName?: string;
                subMembers?: Property[];
                shifted?: boolean;
                allowPersist?: boolean;
                canBeSet?: boolean;
                allowReset?: boolean;
                tooltip?: string;
                disabledTooltip?: string;
                contentSeparatorAddCallback?: () => void;
            }
            export interface OriginalValue {
                originalValue: string;
                modifiedValue: any;
            }
            export interface IXYPoint {
                x: number;
                y: number;
            }
            export interface ISize {
                width: number;
                height: number;
            }
            export interface IRectangle extends IXYPoint, ISize {
            }
            export interface ITriangle {
                p1: IXYPoint;
                p2: IXYPoint;
                p3: IXYPoint;
            }
            export interface ICircle {
                center: IXYPoint;
                radius: number;
            }
            export class Point implements IXYPoint {
                constructor(x: number, y: number);
                private _x;
                get x(): number;
                private _y;
                get y(): number;
                distanceTo(point: Point): Point;
            }
            export interface IScaleFactor {
                /** Default scale factor <=> min(width, height)  */
                default: number;
                /** Width scale factor */
                width: number;
                /** Height scale factor */
                height: number;
                /** Viewport default <=> min(vpWidth, vpHeight) */
                vpDefault: number;
                /** Viewport width */
                vpWidth: number;
                /** Viewport height */
                vpHeight: number;
                /** Valid size */
                valid: boolean;
            }
            export class EditAreaItem {
                constructor(className: string, displayName: string, icon: string, iconClass?: string, callback?: () => void, subMembers?: EditAreaItem[]);
                private _className;
                get className(): string;
                private _displayName;
                get displayName(): string;
                private _icon;
                get icon(): string;
                private _subMembers;
                get subMembers(): EditAreaItem[];
                private _callback;
                get callback(): () => void;
                private _iconClass;
                get iconClass(): string;
            }
            export class RootEditAreaItem extends EditAreaItem {
                constructor(subMembers: EditAreaItem[]);
            }
            export class Popup {
                static createPopup(message: string, status?: CustomElements.PopupStatus, timeInMs?: number, suppress?: boolean, namespace?: string): void;
            }
            /** String modification helper. Methods which will return a modified string */
            export namespace Str {
                const GET: string;
                const ON_FRC: string;
                /**
                 * Add 'px' to a value
                 * @param value
                 */
                function px(value: string | number): string;
                /**
                * Add 'em' to a value
                * @param value
                */
                function em(value: string | number): string;
                /**
                * Add '%' to a value
                * @param value
                */
                function pct(value: string | number): string;
                /**
                 * Add 'px' and font-family to a value. Can be used for css font.
                 * @param value
                 * @param fontFamily
                 */
                function pxFont(value: string | number, fontFamily?: string): string;
                /**
                 * Trim numeric value.
                 * @param value - The value to parse.
                 * @param amountDecimals - maximum amount of decimals. Will also be used for Scientific notation where the minimum are two digits
                 * @param controlID - Identification of Control (controlID + namespace => Identification).
                 * @param namespace - Identification of trimmed value in Control. Used to check if decimal value already had decimal numbers to always show (prevent decimal flashing).
                 */
                function getTrimmedNumber(value: string | number, amountDecimals: number, controlID: string, namespace?: string): string;
                /**
                 * Trim numeric value.
                 * @param value - The value to parse.
                 * @param unit - The unit to extend the trimmed value.
                 * @param amountDecimals - maximum amount of decimals.
                 * @param controlID - Identification of Control (controlID + namespace => Identification).
                 * @param namespace - Identification of trimmed value in Control. Used to check if decimal value already had decimal numbers to always show (prevent decimal flashing).
                 * @param nonbrSpace - Using non-breaking space for value and unit or not.
                 */
                function getTrimmedNumberWithUnit(value: string | number, unit: string, amountDecimals: number, controlID: string, namespace?: string, nonbrSpace?: boolean): string;
                function hexToRgbA(color: string): string;
                function rgbaToHex(color: string, alpha?: boolean): string;
                function colorToString(color: Color): string;
                /**
                 * Returns true if string is null, undefined or empty ('')
                 * @param value - The value to check
                 */
                function isNullOrUndefinedOrEmpty(value: string | null | undefined): boolean;
            }
            export namespace Utilities {
                function toBoolean(value: string | null | undefined): boolean;
                function nextStep(value: number, forward: boolean, stepSize?: number): number;
                function format(format: string, args: string[]): string;
                function splitLocals(value: string): string[];
                function isEqual(a: any, b: any): boolean;
                function isSymbol(symbol: string): boolean;
                /**
                 * Check if value is number or a numeric string
                 * @param value to check
                 */
                function isNumeric(value: any): boolean;
                /**
                 * Check if value is of type number and not NaN
                 * @param value to check
                 */
                function isNumber(value: any): boolean;
                function isNumberArray(value: any): value is number[];
                function getTrimmedValueString(value: any, precision?: number): string;
                /**
                 * Check if value is a string
                 * @param value
                 */
                function isString(value: unknown): boolean;
                /**
                 * Check if value is from interface IDCTimestruct
                 * @param value
                 */
                function isIDCTimestruct(value: any): boolean;
                /**
                 * Check if value is from interface IDCTimestruct
                 * @param value
                 */
                function isIAlyTimeSpan(value: any): boolean;
                function tryParseJson(value: any): boolean | object;
                /**
                 * Check if HTMLElement has an overflow
                 * @param element
                 */
                function hasOverflow(element: HTMLElement, threshold?: number): boolean;
                /**
                 * Auto size of elements until container would overflow. AutoGrowDelay will prevent size-flashing.
                 * @param container to check overflow
                 * @param elementsToChange elements where the style will be modified (can also be the container if the childs derive the styles from it)
                 * @param styleTags css style tag(s) (e.g. fontSize)
                 * @param controlID Identification of Control (controlID + namespace => Identification).
                 * @param options Optional parameters
                 */
                function autoSize(container: HTMLElement, elementsToChange: HTMLElement[] | HTMLElement, styleTags: string | string[], controlID: string, options?: IAutoSizeOptions): number;
                /**
                 * Reset of autosize. Should be used after e.g. resize of Control.
                 * @param controlID Identification of Control (controlID + namespace => Identification).
                 * @param namespace Identification of auto sized value. Used to autosize different elements in a different way
                 */
                function resetAutoSize(controlID: string, namespace?: string): void;
                /**
                 * Get auto grown value
                 * @param value to auto grow
                 * @param controlID Identification of Control (controlID + namespace => Identification)
                 * @param namespace Identification of auto grow value
                 * @param windowTime time window of auto grow. Older values will be ignored
                 */
                function getAutoGrowValue(value: number, controlID: string, namespace: string, windowTime?: number): number;
                /**
                 * Reset of autosize. Should be used after e.g. resize of Control.
                 * @param controlID Identification of Control (controlID + namespace => Identification).
                 * @param namespace Identification of auto sized value. Used to autosize different elements in a different way
                 */
                function resetGetAutoGrowValue(controlID: string, namespace?: string): void;
                function getSize(element: HTMLElement): ISize;
                /**
                 * Check if an array is null or empty.
                 * @param array to check.
                 * @param checkInner will also check inner values. If all inner values are empty, the method will return true as well.
                 */
                function arrayIsEmpty(array: any[], checkInner?: boolean): boolean;
                /**
                 * Set the style of a HTMLElement
                 * @param element HTMLElement
                 * @param name of style
                 * @param value to set
                 * @param cssStyle whether css formatted e.g font-size (true) or fontSize (false)
                 */
                function setStyle(element: HTMLElement, name: string, value: string, cssStyle: boolean): void;
                /**
                 * Like setInterval with a stop time
                 * @param handler function handler
                 * @param time time of interval
                 * @param stopTime time after interval will stop
                 */
                function setInterval(handler: TimerHandler, time: number, stopTime: number): void;
                function getPosition(elmt: HTMLElement, evt: MouseEvent | TouchEvent, xOffset?: number, yOffset?: number): Point;
                function getFilledArray(length: number, value: any): any[];
                function isEqualOrParent(element: Node, potentialParent: Node): boolean;
                function hexToSolidColor(color: string | any): SolidColor;
                function RGBAToArray(color: string): number[];
                /*** Storage ***/
                function setCookie(cname: string, cvalue: string, exdays?: number): void;
                function getCookie(cname: string): string | null;
                function deleteCookie(cnmae: string): void;
                function setPersistentData(key: string, value: string, layoutID?: string | null, type?: StorageType): void;
                function getPersistentData(key: string, type?: StorageType): string | undefined;
                function deletePersistentData(key: string, type?: StorageType, layoutID?: string): void;
                function clearPersistentData(): void;
                function __setPersistentDataInSerExt(key: string, value: string, layoutID?: string | null): void;
                let persistentDataRequested: boolean;
                let persistentDataLoaded: boolean;
                function __getPersistentDataFromSerExt(layoutID?: string): void;
                function __dropPersistentDataInSerExt(key: string, layoutID?: string): void;
                function __requestExSymbol(request: TcHmi.Server.IMessage, timeout?: number): void;
                function __checkPersistentDataLoaded(): void;
                function __handReceivedKeyValueData(entry: KeyValueEntry): void;
                /*** Element design ***/
                function CreateTooltip(element: HTMLElement, text: string): void;
                function __getTimeString(d: Date): string;
            }
            export class StringExt {
                static isEmpty(value: string): boolean;
            }
            export namespace Guid {
                function newGuid(emptyGuid?: boolean): string;
                function isGuid(value: string): boolean;
                function isGuidEmpty(value: string): boolean;
                const EMPTY_GUID = "00000000-0000-0000-0000-000000000000";
            }
            export class SizeManager {
                /** Track size history for each namespace */
                private __sizeHistory;
                /**
                 * Stabilizes the size for a given namespace by tracking its recent history
                 * and returning the smallest or largest size recorded within the specified delay period.
                 *
                 * @param size - The current size to be added to the history.
                 * @param useMax - If true, returns the maximum size in the time window; otherwise, returns the minimum (default: false).
                 * @param namespace - A key to uniquely identify the group of sizes being managed.
                 * @param minBound - The minimum size that the stabilized value can be (default: undefined).
                 * @param maxBound - The maximum size that the stabilized value can be (default: undefined).
                 * @param delay - The time window (in milliseconds) to consider for size stabilization (default: 15000ms).
                 * @returns The minimum or maximum size recorded in the last `delay` milliseconds, or the current size if no valid history exists.
                 */
                stabilizeSize(size: number, useMax?: boolean, namespace?: string, minBound?: number, maxBound?: number, delay?: number): number;
            }
            /*** Time handling ***/
            export interface IDCTimestruct {
                wYear: number;
                wMonth: number;
                wDayOfWeek: number;
                wDay: number;
                wHour: number;
                wMinute: number;
                wSecond: number;
                wMilliseconds: number;
                wMicroseconds: number;
                wNanoseconds: number;
            }
            export class DCTimestruct implements IDCTimestruct {
                wYear: number;
                wMonth: number;
                wDayOfWeek: number;
                wDay: number;
                wHour: number;
                wMinute: number;
                wSecond: number;
                wMilliseconds: number;
                wMicroseconds: number;
                wNanoseconds: number;
                constructor();
                constructor(year: number, month: number, day: number);
                constructor(year: number, month: number, day: number, hour: number, minute: number, second: number, milliseconds: number);
                static isValid(value: IDCTimestruct): boolean;
                isValid(): boolean;
                isInBetween(start: DCTimestruct, end: DCTimestruct): boolean;
                static now(): DCTimestruct;
                static fromTime(timeInMs: number): DCTimestruct;
                static fromDate(date: Date): DCTimestruct;
                static fromObject(time: IDCTimestruct): DCTimestruct;
                getTime(): number;
                getCalendarDate(): DCTimestruct;
                getClone(offsetInMS?: number): DCTimestruct;
                protected static __monthAlias: string;
                static get monthAlias(): string;
                static set monthAlias(value: string);
                protected static __fullMonthAlias: string[];
                static get fullMonthAlias(): string[];
                static set fullMonthAlias(value: string[]);
                protected __showMilliseconds: boolean;
                get showMilliseconds(): boolean;
                set showMilliseconds(value: boolean);
                protected __showAMPM: boolean;
                get showAMPM(): boolean;
                set showAMPM(value: boolean);
                protected __showOnly24Hours: boolean;
                get showOnly24Hours(): boolean;
                set showOnly24Hours(value: boolean);
                toString: (fullMonth?: boolean, monthAsSpan?: boolean) => string;
                toDate(): DateExt;
                equalCalendarDate(toCompare: DCTimestruct): boolean;
                /** Will be used from JSON.stringify to create the object without protected & private variables */
                toJSON(): IDCTimestruct;
            }
            export class DateExt extends Date {
                getTotalDays(): number;
                static getTotalDays(ticksInMs: number): number;
            }
            export class TimeRange {
                constructor(startTime: DCTimestruct, endTime: DCTimestruct);
                private _startTime;
                get startTime(): DCTimestruct;
                private _endTime;
                get endTime(): DCTimestruct;
                isInBetween(time: DCTimestruct): boolean;
                isRangeInBetween(time: TimeRange): boolean;
            }
            export interface IAlyTimeSpan {
                bIsNegative: boolean;
                wDays: number;
                wHours: number;
                wMinutes: number;
                wSeconds: number;
                wMilliseconds: number;
                wMicroseconds: number;
                wNanoseconds: number;
            }
            export class TimeSpan {
                constructor(ticksInMs: number);
                static fromDCTimestructs(minuend: DCTimestruct, subtrahend: DCTimestruct): TimeSpan;
                static fromObject(alyTime: IAlyTimeSpan): TimeSpan;
                private _milliseconds;
                get milliseconds(): number;
                set milliseconds(value: number);
                private _seconds;
                get seconds(): number;
                set seconds(value: number);
                private _minutes;
                get minutes(): number;
                set minutes(value: number);
                private _hours;
                get hours(): number;
                set hours(value: number);
                private _days;
                get days(): number;
                set days(value: number);
                toString(showMilliSeconds: boolean, dayAlias: string, label?: boolean): string;
            }
            export class EventListenerManager {
                protected __eventListeners: EventListenerInfo[];
                constructor();
                addEventListener(element: HTMLElement | Document | Window | EventTarget, type: string, listener: (this: HTMLElement, ev: Event) => unknown, options?: boolean | AddEventListenerOptions, ...namespaces: string[]): void;
                /**
                 * Remove the Event Listeners with the specified namespace. If namespace is null or undefined, all Event Listeners will be removed.
                 * @param namespace
                 */
                removeEventListeners(namespace?: string): void;
            }
            export class BrowserData {
                private static __isInitialized;
                private static __versionSearchString;
                private static __browser;
                static get browser(): string;
                private static __version;
                static get version(): number;
                private static __os;
                static get os(): string;
                private static __init;
                private static __searchString;
                private static __searchVersion;
                private static __dataBrowser;
                private static __dataOS;
            }
            export interface EventListenerInfo {
                element: HTMLElement | Document | Window | EventTarget;
                type: string;
                listener: (this: HTMLElement, ev: Event) => any;
                options: boolean | AddEventListenerOptions;
                namespaces: string[];
            }
            export interface IRecordData {
                dtRecordStart: DCTimestruct;
                dtRecordEnd: DCTimestruct;
                dtSelectedRangeStart: DCTimestruct;
                dtSelectedRangeEnd: DCTimestruct;
            }
            export interface IRecord extends IRecordData {
                nID: number;
                sName: string;
                sDisplayName: string;
            }
            export interface IAutoSizeOptions {
                /** Identification of auto sized value in Control. Used to autosize different elements in a different way. */
                namespace?: string;
                /** Min pixel value */
                min?: number;
                /** Max pixel value */
                max?: number;
                /** Delay of autoGrow in milliseconds */
                autoGrowDelay?: number;
            }
            /*** Enums ***/
            export enum E_DataType {
                STRING = 0,
                UINTEGER = 1,
                INTEGER = 2,
                NUMBER = 3,
                BOOLEAN = 4,
                COMBOBOX = 5,
                MAX_COMBOBOX = 6,
                SOLIDCOLOR = 7,
                CHART_CHANNEL_CONFIG = 8,
                CHART_TIMERANGE_CONFIG = 9,
                DATETIME = 10,
                CONTENTSEPARATOR = 11,
                TIME = 12,
                TIME_INTERVAL = 13,
                CUSTOM = 14
            }
            export enum StorageType {
                LocalStorage = 0,
                Cookie = 1,
                ServerExtension = 2
            }
            export enum SortingType {
                NONE = 0,
                ASC = 1,// Arrow down
                DESC = 2
            }
            export class UserDataStoreCmd {
                /** Name of the table the command refers to */
                tableName: string;
                /** Type of command */
                cmdType: I_SE_TableCmdType;
                /** Data for the command */
                cmdData: string;
            }
            export enum I_SE_TableCmdType {
                SET = 0,
                GET = 1,
                DROP = 2,
                EXTEND = 3
            }
            class KeyValueEntry {
                userID: string;
                layoutID: string;
                keyValueEntries: KeyValueItem[];
            }
            export interface KeyValueItem {
                key: string;
                value: string;
            }
            export enum ClassificationState {
                NOT_INITIALIZED = 0,
                OK = 1,
                WARNING = 2,
                ALARM = 3
            }
            /**Interval units in seconds */
            export enum E_IntervalUnitMs {
                MilliSeconds = 1,
                Seconds = 1000,
                Minutes = 60000,
                Hours = 3600000,
                Days = 86400000,
                Weeks = 604800000,
                Months = 2678400000,
                Years = 31536000000
            }
            /**Class to convert interval units*/
            export namespace TimeInterval {
                function ConvertToInterval(intervalMs: number): I_SE_DisplayRange;
                function ConvertToMs(value: number, unit: string): number;
            }
            export interface I_SE_DisplayRange {
                rangeValue: number;
                rangeUnit: string;
            }
            export class TimeIntervalStrings {
                static MilliSecond_s: string;
                static Second_s: string;
                static Minute_s: string;
                static Hour_s: string;
                static Day_s: string;
                static Week_s: string;
                static Month_s: string;
                static Year_s: string;
            }
            export {};
        }
    }
    class AnalyticsControlEventNames {
        static KeyValuePairsReceived: string;
    }
    interface IComboBoxEntry {
        value: string;
        displayName: string;
    }
    interface IPropertyWindowOptions {
        heading?: string;
        fontSize?: string;
        backgroundColor?: string;
        foregroundColor?: string;
    }
}
