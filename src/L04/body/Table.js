import React, {Component} from 'react';
import Card from "./Card";

class Table extends Component {
    render() {
        const {list, pattern, onDismiss, category, noContentPlaceholder} = this.props;
        if (list == null || list.length === 0) return Table.getNoContentPlaceholder(noContentPlaceholder);

        const matchSearchString = searchString => item => item && item.title && item.title.toLowerCase().includes(searchString.toLowerCase());
        let cards = list.filter(matchSearchString(pattern)).map(item =>
            <Card key={item.objectID} item={item} onDismiss={onDismiss} category={category}/>
        );

        if (cards.length !== 0) {
            return (<div className="appList">{cards}</div>);
        } else {
            return Table.getNoContentPlaceholder(noContentPlaceholder);
        }
    }

    static getNoContentPlaceholder(noContentPlaceholder) {
        return (<div className="noContentPlaceholder">{noContentPlaceholder}</div>);
    }
}

export default Table;