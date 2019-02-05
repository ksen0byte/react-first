import React, {Component} from 'react';

class Button extends Component {
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
            >
                {children}
            </button>
        );
    }
}

export default Button;