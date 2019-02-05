import React, {Component, Fragment} from 'react';
import {ThemeContext} from "../context/ThemeContext";

class ThemeToggleButton extends Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {({theme, toggleTheme}) => (
                    <Fragment>
                        <label className="switch">
                            <input type="checkbox" onChange={toggleTheme}/>
                            <span className="beforeSlider"
                                  style={{
                                      backgroundColor: 'white'
                                  }}
                            />
                            <span className="slider"
                                style={{
                                    backgroundColor: theme.primary
                                }}
                            />
                        </label>
                    </Fragment>
                )}
            </ThemeContext.Consumer>
        )
    }
}

export default ThemeToggleButton;