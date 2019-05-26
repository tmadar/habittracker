import React from 'react';
import Input from "../Input/Input";
import TrackerChart from "../Chart/TrackerChart";
import TrackerDateInput from "../DateInput/TrackerDateInput";
import {AddButton} from "../styled-components/Add/Add";

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
                    How You Feel: <Input/> <TrackerDateInput /> <AddButton text={"Add"} />
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