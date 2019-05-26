import React from 'react';
import Section from "../Section/Section";
import styled from "styled-components";

const FormContainer = styled.div`
  margin-top: 25%;
  margin-left: 10%;
`;

export default class Form extends React.PureComponent {
    render() {
        return (
            <FormContainer>
                <Section name={"Sleep"} />
            </FormContainer>
        );
    }
}