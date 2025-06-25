declare namespace TcHmi.Controls.Analytics {
    /**
 * The DataSourceHandler implements the Connection to the Databases in the Server Extension
 */
    class DataSourceHandler extends EventTarget {
        /**
         * Constructor of the DataSourceHandler
         * @returns {void}
         */
        constructor();
        requestDataSources(): void;
        setDataChartConfig(chartEntry: I_SE_InteractiveChartEntry): void;
        refreshChart(chartID: string): void;
        dropDataChartConfig(chartEntry: I_SE_InteractiveChartEntry): void;
        getDataChartConfig(chartID: string): void;
        protected __requestExtSymbol(request: TcHmi.Server.IMessage, timeout: number): void;
    }
}
