declare namespace TcHmi.Controls.Analytics {
    /** StorageProviderTime */
    class SPTime {
        constructor(tctime: number);
        private __padNumber;
        private _time;
        get time(): string;
        protected __date: Date;
        get date(): Date;
        get year(): number;
        get month(): number;
        get monthInText(): string;
        get day(): number;
        get dayInText(): string;
        get hours(): number;
        get minutes(): number;
        get seconds(): number;
        get milliseconds(): number;
        toString(format: E_TimeFormat): string;
        static convertTimeMsToTcTime(timeMs: number, requestTime: Date): number;
        static TIME_IN_SEC_TO_TC_FACTOR: number;
        static TIME_IN_MS_TO_TC_FACTOR: number;
    }
    enum E_TimeFormat {
        yyyy_mm_dd_hh_mm_ss_mmm = "yyyy_mm_dd_hh_mm_ss_mmm",
        hh_mm_ss_mmm = "hh_mm_ss_mmm",
        hh_mm_ss_mm = "hh_mm_ss_mm",
        hh_mm_ss_m = "hh_mm_ss_m",
        hh_mm_ss = "hh_mm_ss",
        hh_mm = "hh_mm",
        dd_MM = "dd_MM",
        dd = "dd",
        MM = "MM",
        yy_mm = "yy_mm",
        mmm = "mmm",
        sec_s = "sec_s",
        ss_mmm = "ss_mmm",
        mm_ss = "mm_ss",
        mm = "mm",
        hh = "hh",
        yyyy_mm_dd_hh_mm_ss = "yyyy_mm_dd_hh_mm_ss",
        yyyy_mm_dd_hh_mm = "yyyy_mm_dd_hh_mm",
        yyyy_mm_dd = "yyyy_mm_dd",
        day = "day",
        day_date = "day_day",
        day_month_date_year_full = "day_month_date_year_full"
    }
    enum E_ChartType {
        YTCHART = 0,
        BARCHART = 1,
        COMPAREYTCHART = 2,
        TIMESERIESBARCHART = 3,
        PIECHART = 4,
        RINGCHART = 5,
        SINGLEVALUECHART = 6,
        PARETOCHART = 7
    }
    namespace E_ChartTypeHelper {
        function IsTimeCompareChart(chartType: E_ChartType): boolean;
    }
    namespace AlyMath {
        function min(dataValues: number[]): number;
        function max(dataValues: number[]): number;
    }
    namespace ColorHandler {
        function makeColorDarker(rgba: string, percent: number): string;
        function setColorOpacity(rgba: string, opacity: number): string;
    }
    interface IChannelValue {
        offsetLeft: number;
        offsetTop: number;
        data: I_SE_DataEntry[];
        channels: Base_Channel[];
    }
    namespace TimeDiffHelper {
        function calculateTimeDiffMs(timerange: I_SE_TimerangeEntry, rangeUnit: TimeIntervalStrings, refTimerange: I_SE_TimerangeEntry, compareType: ECompareChartCompareTypes, compareInterval: I_SE_DisplayRange, requestTime?: Date): number;
        function getIntervalInRange(refTimeRangeFrom: number, timerangefrom: I_SE_TimerangeEntry, matchStart: boolean, isFollowing: boolean, setOnYear: boolean, requestTime?: Date): number;
    }
    namespace GridCreator {
        function calculateGrid(pieAmount: number, canvasWidth: number, canvasHeight: number): IGridSize;
        function calcRowAndColumn(circleIndex: number, columnAmount: number): IGridSize;
    }
    interface IGridSize {
        columns: number;
        rows: number;
    }
    class MonthMerger {
        static addOffsetForMonthBreak(axisData: Array<I_SE_DataEntry>, i: number): number;
        static addOffsetForMonthBreakInterval(start: SPTime, end: SPTime): number;
        static isPreviousLastDayButNot31(timestamp: SPTime): boolean;
    }
}
