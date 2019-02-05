import React, {Component} from 'react';
import Button from "../component/Button";
import ThemeToggleButton from "../component/ThemeToggleButton";
import './index.css'


class Footer extends Component {
    render() {
        const {
            fetchTopStories,
        } = this.props;
        return (
            <div className="footer">
                <div className="interactionsContainer">
                    <div className="moreButtonContainer">
                        <Button
                            className="moreButton"
                            onClick={fetchTopStories}
                        >
                            More
                        </Button>
                    </div>
                    <div className="themeToggleButtonContainer">
                        <ThemeToggleButton/>
                    </div>

                </div>
            </div>
        );
    }
}

export default Footer;