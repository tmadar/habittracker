import moment from "moment";
import React from 'react';
import { DateInput } from "@blueprintjs/datetime";

interface DateWidgetProps {}

interface State {
    date: Date,
    value: string;
}

export default class DateWidget extends React.Component<DateWidgetProps, State> {
    constructor(props: DateWidgetProps) {
        super(props);
        this.state = {
            date: new Date(),
            value: new Date().toString()
        }
    }

    render() {
        return (
            <DateInput
                formatDate={DateWidget._formatDate}
                parseDate={DateWidget._parseDate}
                onChange={this._handleDateChange}
                placeholder={"M/D/YYYY"}
                value={this.state.date}
                minDate={DateWidget.minimumDate}
            />
        );
    }

    private static _formatDate(date: Date){
        return date === null ? "" : moment(date).format("MM/DD/YYYY");
    }

    private static _parseDate(date: string){
        return moment(date, "MM/DD/YYYY").toDate();
    }

    private _handleDateChange = (date: Date) => {
        if(!date) {
            return;
        }
        this.setState({ date: new Date(date)});
    };

    private static minimumDate = new Date("01/01/1950");
}