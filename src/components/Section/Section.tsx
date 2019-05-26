import React from 'react';
import {SectionLabel} from "../styled-components/Label/Label";
import {AddButton} from "../styled-components/Add/Add";
import ChartWidget from "../Chart/ChartWidget";
import Accordion from "../Accordion/Accordion";
import {DateWidgetWrapper} from "../styled-components/DateInput/DateWidgetWrapper";
import {InputWrapper} from "../styled-components/Input/InputWrapper";

interface SectionProps {
    name: string;
}

export default class Section extends React.PureComponent<SectionProps> {
    render() {
        return (
            <div>
                <SectionLabel>
                    {this.props.name}
                </SectionLabel>
                <InputWrapper/>
                <DateWidgetWrapper />
                <AddButton text={"Add"} />
                <Accordion
                    content={
                        <ChartWidget
                            chartType={"ScatterChart"}
                            habitName={this.props.name}
                        />
                    }
                />
            </div>
        );
    }
}