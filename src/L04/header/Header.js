import React, {Component} from 'react';
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import CenterContent from "./CenterContent";

class Header extends Component {
    render() {
        const {value, onChange, onCategoryChange, onSearchSubmit} = this.props;
        return (
            <div className="header">
                <LeftContent>
                    <img src={"dovahkin.png"} alt="logo"/>
                </LeftContent>
                <CenterContent
                    value={value}
                    onChange={onChange}
                    onSearchSubmit={onSearchSubmit}
                />
                <RightContent
                    onCategoryChange={onCategoryChange}
                />
            </div>
        );
    }
}

export default Header;