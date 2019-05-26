import React from 'react';
import { Button, Collapse } from "@blueprintjs/core";

interface TrackerAccordionInterface {
    content: React.ReactNode
}

interface State {
    isOpen?: boolean
}

export default class Accordion extends React.Component<TrackerAccordionInterface, State> {
    constructor(props: TrackerAccordionInterface) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    render() {
        return (
            <div>
                <Button onClick={this._toggleOpen}>
                    {this.state.isOpen ? "Hide" : "Show"} chart
                </Button>
                <Collapse isOpen={this.state.isOpen} transitionDuration={0}>
                    {this.props.content}
                </Collapse>
            </div>
        );
    }

    private _toggleOpen = () => {
        this.setState({isOpen: !this.state.isOpen});
    }
}