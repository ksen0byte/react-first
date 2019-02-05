import React, {Component} from 'react';
import {ThemeContext} from "../context/ThemeContext";

class ThemedButton extends Component {
    constructor(props) {
        super(props);
        const {
            onClick,
            className = "",
            children,
            mouseOverPlaceholder,
            onMouseOverOn = false,
        } = this.props;

        this.state = {
            onClick, className, children, mouseOverPlaceholder, onMouseOverOn
        }
    }

    onMouseOver = () => {
        this.setState({
            oldChildren: this.state.children,
            children: this.state.mouseOverPlaceholder
        });
    };

    onMouseLeave = () => {
        this.setState({
            children: this.state.oldChildren,
        });
    };

    render() {
        let theme = this.context.theme;
        const {
            onClick,
            className = "",
            children,
            onMouseOverOn,
        } = this.state;
        return (
            <button
                onClick={onClick}
                className={className}
                type="button"
                onMouseOver={onMouseOverOn ? this.onMouseOver : null}
                onMouseLeave={onMouseOverOn ? this.onMouseLeave : null}
                style={{backgroundColor: theme.primary}}
            >
                {children}
            </button>
        );
    }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;