import React, {Component} from 'react';
import Search from "./Search";

class CenterContent extends Component {
    render() {
        const {value, onChange, onSearchSubmit} = this.props;
        return (
            <div className="centerContent">
                <Search
                    value={value}
                    onChange={onChange}
                    onSubmit={onSearchSubmit}
                >
                    Search
                </Search>
            </div>
        );
    }
}

export default CenterContent;