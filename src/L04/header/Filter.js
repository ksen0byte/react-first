import React, {Component} from 'react';
import Select from 'react-select';
import chroma from 'chroma-js';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: props.selectedOption,
            options: props.options,
            onCategoryChange: props.onCategoryChange,
        }
    }

    customStyles = {
        valueContainer: styles => ({
            ...styles,
            padding: 0,
        }),
        singleValue: styles => ({
            ...styles,
            color: 'gray',
            opacity: 0.5,
            width: '100%',
            top:'58%'
        }),
        control: styles => ({
            ...styles,
            backgroundColor: 'white',
            border: 'none',
            outline: 'none',
            borderBottom: '1px solid chocolate',
            boxShadow: 'none',
            fontSize: 'larger',
            borderRadius: 0,

            ':hover, :focus': {
                boxShadow: 'none',
                borderColor: 'chocolate'
            },
        }),
    };

    handleChange = (onCategoryChange) => (selectedOption) => {
        onCategoryChange(selectedOption);
        this.setState({selectedOption});
    };

    render() {
        const {
            selectedOption = "",
            options,
            onCategoryChange,
        } = this.state;

        const primary = chroma('chocolate').brighten(0.75);
        const primary25 = primary.alpha(0.25);
        const primary50 = primary.brighten(0.5);
        const primary75 = primary.brighten(0.75);
        return (
            <div className="categoryFilter">
                <Select
                    value={selectedOption}
                    onChange={this.handleChange(onCategoryChange)}
                    options={options}
                    styles={this.customStyles}
                    theme={(theme) => ({
                        ...theme,
                        borderRadius: 0,
                        colors: {
                            ...theme.colors,
                            primary: primary.css(),
                            primary25: primary25.css(),
                            primary50: primary50.css(),
                            primary75: primary75.css(),
                        },
                    })}
                />
            </div>
        );
    }
}

export default Filter;