import React from 'react';
import { Button, Collapse } from "@blueprintjs/core";
import styled from "styled-components";

interface AccordionProps {
    content: React.ReactNode
}

interface State {
    isOpen?: boolean
}

const AccordionWrapper = styled.div`
  display: inline;
`;

export default class Accordion extends React.Component<AccordionProps, State> {
    constructor(props: AccordionProps) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    render() {
        return (
            <AccordionWrapper>
                <Button onClick={this._toggleOpen}>
                    {this.state.isOpen ? "Hide" : "Show"} chart
                </Button>
                <Collapse isOpen={this.state.isOpen} transitionDuration={0}>
                    {this.props.content}
                </Collapse>
            </AccordionWrapper>
        );
    }

    private _toggleOpen = () => {
        this.setState({isOpen: !this.state.isOpen});
    }
}