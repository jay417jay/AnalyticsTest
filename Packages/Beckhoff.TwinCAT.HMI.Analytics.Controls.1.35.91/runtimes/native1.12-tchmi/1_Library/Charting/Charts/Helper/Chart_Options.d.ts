declare namespace TcHmi.Controls.Analytics {
    /**basic chart options every chart needs*/
    interface I_SE_Base_ChartOptions {
        data: I_SE_DataSymbolValue;
        channelConfigurations: I_SE_ChannelEntry[];
        chartType: E_ChartType;
        useHoverEffect: boolean;
        showDifferentials: boolean;
        channelClickedCallback?: (i: number) => void;
    }
    /**options for charts that are time based */
    interface I_SE_TimeBased_ChartOptions {
        timeranges: I_SE_TimerangeEntry[];
    }
    /**options for charts that support displaying a grid */
    interface I_SE_GridVisual_ChartOptions {
        renderDashedLineForXAxisTicks: boolean;
        renderDashedLineForYAxisTicks: boolean;
        axes: I_SE_Axis_Properties[];
    }
    /**options for charts that support fillMode */
    interface I_SE_FillMode_ChartOptions {
        fillMode: EFillMode;
    }
    /**options for charts that support hovering*/
    interface I_SE_Hover_ChartOptions {
        hoverPointRadius: number;
    }
}
