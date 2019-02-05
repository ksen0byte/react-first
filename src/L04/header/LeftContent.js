import React, {Component} from 'react';

class LeftContent extends Component {
    render() {
        const {children} = this.props;
        return (
            <div className="leftContent noSelect">
                {children}
            </div>
        );
    }
}

export default LeftContent;