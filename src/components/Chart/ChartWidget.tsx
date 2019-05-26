import React from 'react';
import Chart from "react-google-charts";
import {GoogleChartWrapperChartType} from "react-google-charts/dist/types";

interface ChartWidgetProps {
    chartType: GoogleChartWrapperChartType,
    habitName: string
}

export default class ChartWidget extends React.PureComponent<ChartWidgetProps> {
    render() {
        return (
            <Chart
                chartType={this.props.chartType}
                data={
                    [
                        ["Date", this.props.habitName],
                        [8, 12],
                        [4, 5.5],
                        [11, 14],
                        [4, 5],
                        [3, 3.5],
                        [6.5, 7]
                    ]
                }
                options={
                    {
                        title: this.props.habitName,
                        hAxis: {title: "Date", viewWindow: {min: 0, max: 15}},
                        vAxis: {title: this.props.habitName, viewWindow: {min: 0, max: 15}},
                        legend: "none"
                    }
                }
                width="80%"
                height="400px"
                legendToggle
            />
        );
    }
}