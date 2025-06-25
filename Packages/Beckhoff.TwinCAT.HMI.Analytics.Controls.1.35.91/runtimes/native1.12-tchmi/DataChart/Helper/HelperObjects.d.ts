declare namespace TcHmi.Controls.Analytics {
    export class DataChartEventNames {
        static chartConfigReceived: string;
        static dataSourceConfigStored: string;
        static dataSourcesReceived: string;
        static onChartPropertyChanged: string;
        static onTimerangePropertyChanged: string;
    }
    export class RegexHelper {
        private static DateUnits;
        private static unitsPattern;
        static readonly nowExtendedPattern: RegExp;
        static readonly dateTimePattern: RegExp;
        static readonly nowExactPattern: RegExp;
        static isValidDateFormat(input: string): boolean;
        static isValidInput(input: string): boolean;
    }
    /** Can be used to parse string input to date and way back */
    export namespace TimeParser {
        function parseStringToDate(input: string, isUtc?: boolean): Date | null;
        function parseDateToString(date: Date, inUtc?: boolean): string;
    }
    type TimeUnit = "d" | "h" | "w" | "s" | "m" | "M" | "y";
    export class RelativeTimeSelection {
        number: number;
        unit: TimeUnit;
        unitWithSlash?: TimeUnit;
        constructor(number: number, unit: TimeUnit, unitWithSlash?: TimeUnit);
        toTimeSpan(): I_Timespan;
        static parseNowExtended(input: string): RelativeTimeSelection | null;
        static parseDateTimeString(input: string): Date | null;
    }
    export interface I_Timespan {
        years: number;
        month: number;
        weeks: number;
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
    }
    export interface I_SE_DataSourceEntry {
        sourceID: string;
        layout: string;
        streamSystemID: string;
        topic: string;
        streamTopic: string;
        broker: string;
        brokerPort: number;
        userID: string;
        password: string;
        passwordCrypted: string;
        withCertificates: boolean;
        ca_CertificateName: string;
        ca_Certificate: string;
        cert_CertificateName: string;
        cert_Certificate: string;
        key_CertificateName: string;
        key_Certificate: string;
        key_Pwd: string;
        key_PwdCrypted: string;
        cycletime: number;
        status: string;
    }
    export interface I_SE_DataSourceSymbolEntry {
        sourceID: string;
        broker: string;
        brokerPort: number;
        streamTopic: string;
        channels: List<I_SE_ChannelEntry>;
        records: List<I_SE_RecordEntry>;
    }
    /** Helper interface to configure the different colors and visibilities for a channel */
    export interface I_ChannelConfigEntry {
        sourceID: string;
        name: string;
        datatype: string;
        unit: string;
        customUnit: string;
        userFalseAlias?: string;
        userTrueAlias?: string;
        varColors: string[];
        visibility: boolean[];
        isExpanded?: boolean;
    }
    /**Helper class to parse I_ChannelConfigEntry */
    export namespace ChannelConfigHelper {
        function ExtractFrom_I_SE_ChannelEntry(channels: I_SE_ChannelEntry[]): I_ChannelConfigEntry[];
        function ExtractChannelsFromChannelConfig(channelConfig: I_ChannelConfigEntry[], timeranges: I_SE_TimerangeEntry[]): I_SE_ChannelEntry[];
        function GetUsedSources(channels: I_SE_ChannelEntry[], dataSources: I_SE_DataSourceSymbolEntry[]): I_SE_DataSourceSymbolEntry[];
        function GetChannelUnit(channel: I_SE_ChannelEntry | I_ChannelConfigEntry): string;
    }
    export interface I_SE_ChannelEntry {
        sourceID: string;
        name: string;
        datatype: string;
        varColor: string;
        isFilled: boolean;
        isVisible: boolean;
        unit: string;
        customUnit: string;
        userFalseAlias?: string;
        userTrueAlias?: string;
    }
    export interface I_SE_RecordEntry {
        recordID: number;
        startTimeUTC: number;
        endTimeUTC: number;
    }
    export interface I_SE_InteractiveChartEntry {
        chartID: string;
        refreshInterval: I_SE_DisplayRange;
        refreshIntervalUnit: string;
        data: List<I_SE_ChartDataEntry>;
        chartProperties: I_SE_Base_ChartOptions;
    }
    export interface I_SE_Axis_Properties {
        label: string;
    }
    export interface I_SE_ChartDataEntry extends I_SE_TimerangeEntry {
        sourceID: string;
        channels: List<I_SE_ChannelEntry>;
    }
    export class TimeConverter {
        static getFromTcTime(tr: I_SE_TimerangeEntry, requestTime: Date): number;
        static SubtractSpanFromDate(date: Date, span: I_Timespan): Date;
        static getPreviousMonday(date: Date): Date;
        static getToTcTime(tr: I_SE_TimerangeEntry, requestTime: Date, compareInterval?: I_SE_DisplayRange): number;
        static getNextMonday(date: Date): Date;
        static isRelative(tr: I_SE_TimerangeEntry): boolean;
    }
    export interface I_SE_TimerangeEntry {
        isVisible: boolean;
        from: string;
        to: string;
        isExpanded?: boolean;
    }
    export class TimerangeHelper {
        static IsTimeInRange(tcTimestamp: number, timerangeEntry: I_SE_TimerangeEntry, dataRequestTime: Date): boolean;
    }
    export interface I_SE_DataSymbolValue {
        symbols: Array<I_SE_SymbolEntry>;
        data: Array<I_SE_DataEntry>;
        requestTimestampUTC: number;
    }
    export interface I_SE_SymbolEntry {
        source: string;
        name: string;
    }
    export interface I_SE_DataEntry_Extended extends I_SE_DataEntry {
        hoverChannel: I_SE_SymbolEntry;
    }
    export interface I_SE_DataEntry {
        timestamp: number;
        values: Array<number>;
    }
    export interface OptionData {
        value: string;
        imgSrc: string;
        boldText: string;
        normalText: string;
    }
    export enum ECompareChartCompareTypes {
        NONE = "CompareType_None",
        ABSOLUTE_TIME = "CompareType_Absolute",
        RELATIVE_TIME = "CompareType_Relative",
        MATCHING_START = "CompareType_MatchStart",
        MATCHING_END = "CompareType_MatchEnd"
    }
    export enum EFillMode {
        NONE = "FillMode_None",
        FILL = "FillMode_Fill"
    }
    export interface IChartProperties {
        axisDescription: string;
        compareInterval: number;
        compareType: ECompareChartCompareTypes;
    }
    export enum YAxisPosition {
        Right = 0,
        Left = 1
    }
    export {};
}
