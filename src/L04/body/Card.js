import React, {Component} from 'react';
import Category from "../enum/Category";
import ThemedButton from "../component/ThemedButton";

class Card extends Component {
    render() {
        const {item, onDismiss, category} = this.props;
        const isAllowed = category === Category.ALLOWED;
        return (
            <div className="card">
                <div className="cardContent" key={item.objectID}>
                    <article>
                        <p className="title">
                            <a href={item.url}>{item.title}</a>
                        </p>
                        <div className="cardContentBody">
                            <p>Author: <b>{item.author}</b></p>
                            <p>Number of comments: <b>{item.num_comments}</b></p>
                            <p>Rating: <b>{item.points}</b></p>
                        </div>
                    </article>
                    <div className="dismissButtonContainer">
                        <ThemedButton
                            className="dismissButton"
                            onClick={() => onDismiss(item.objectID, isAllowed)}
                            mouseOverPlaceholder={isAllowed ? "meeeh .." : "HYPE IT"}
                            onMouseOverOn={true}
                        >
                            {isAllowed ? "Dismiss" : "Allow"}
                        </ThemedButton>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;