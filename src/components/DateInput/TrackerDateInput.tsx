import React from 'react';
import { DateInput } from "@blueprintjs/datetime";

interface DateInputInterface {
    date?: Date
}

interface State {
    date: Date
}

export default class TrackerDateInput extends React.Component<DateInputInterface, State> {
    constructor(props: DateInputInterface) {
        super(props);
        this.state = {
            date: this.props.date || new Date()
        }
    }

    render() {
        return (
            <DateInput
                formatDate={date => date.toLocaleDateString("en-US")}
                onChange={this._handleDateChange}
                parseDate={str => new Date(str)}
                placeholder={"M/D/YYYY"}
                value={this.state.date}
            />
        );
    }

    private _handleDateChange(date: Date) {
        this.setState({ date: date});
    }
}