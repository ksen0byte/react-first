import React, {Component} from 'react';
import Filter from "./Filter";
import Category from "../enum/Category";

class RightContent extends Component {
    options = [
        {value: Category.ALLOWED, label: "Hype"},
        {value: Category.DISMISSED, label: "Outdated"},
    ];

    render() {
        const {
            onCategoryChange
        } = this.props;
        return (
            <div className="rightContent">
                <Filter
                    selectedOption={this.options[0]}
                    options={this.options}
                    onCategoryChange={onCategoryChange}
                />
            </div>
        );
    }
}

export default RightContent;