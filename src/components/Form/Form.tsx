import React from 'react';
import Input from "../Input/Input";
import TrackerChart from "../Chart/TrackerChart";

export default class Form extends React.PureComponent {
    render() {
        return (
            <div>
                <div>
                    Hours of Sleep: <Input/>
                </div>
                <div>
                    Waist Size (Inches): <Input/>
                </div>
                <div>
                    How You Feel: <Input/>
                </div>
                <div>
                    <TrackerChart
                        chartType={"ScatterChart"}
                        habitName={"Feeling"}
                    />
                </div>
            </div>
        );
    }
}