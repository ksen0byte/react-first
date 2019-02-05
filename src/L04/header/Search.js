import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from '@fortawesome/free-solid-svg-icons'


class Search extends Component {

    handleKeyPress = (onSubmit) => e => {
        if (e.charCode === 13) {
            e.preventDefault();
            onSubmit();
        }
    };

    handleSearchIconClick = (onSubmit) => () => {
        onSubmit();
    };

    render() {
        const {value, onChange, children, onSubmit} = this.props;
        return (
            <div className="searchContainer">
                <form>
                    <div className="searchFilterContainer">
                        <input className="searchFilter"
                               type="text"
                               value={value}
                               onChange={onChange}
                               placeholder={children}
                               onKeyPress={this.handleKeyPress(onSubmit)}
                               spellCheck={false}
                        />
                        <FontAwesomeIcon
                            icon={faSearch}
                            size="sm"
                            flip="horizontal"
                            className="searchIcon"
                            onClick={this.handleSearchIconClick(onSubmit)}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default Search;