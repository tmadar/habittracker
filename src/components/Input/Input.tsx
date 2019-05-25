import React from 'react';

export default class Input extends React.PureComponent {
    render() {
        return (
            <input
                className={"bp3-input .modifier"}
                type={"text"}
                dir="auto"
            />
    );
    }
}