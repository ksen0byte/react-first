import React, {Component} from 'react';
import './App.css';
import Header from "./L04/header/Header";
import Table from "./L04/body/Table";
import Category from "./L04/enum/Category";
import Footer from "./L04/footer/Footer";
import {ThemeContext, themes} from "./L04/context/ThemeContext";
import {
    DEFAULT_QUERY,
    DEFAULT_HPP,
    PATH_BASE,
    PATH_SEARCH,
    PARAM_SEARCH,
    PARAM_PAGE,
    PARAM_HPP,
} from './L04/constants/constants';
import AndrewTimer from "./L04/oops/who/did/that/AndrewTimer";


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cache: {},
            result: null,
            list: this.props.list,
            dismissedList: [],
            searchString: DEFAULT_QUERY,
            category: Category.ALLOWED,
            theme: themes.light,
            toggleTheme: this.toggleTheme,
        };
    }

    setSearchTopStories = (stories) => {
        this.setState({
            list: stories,
        });
    };

    fetchTopStories = (searchString, isNextPage) => {
        const cachedResult = this.getStoriesFromCache(searchString);
        let shouldTakeStoriesFromCache = cachedResult != null && !isNextPage;
        if (shouldTakeStoriesFromCache) {
            this.setSearchTopStories(cachedResult.stories);
            return;
        }

        const page = cachedResult != null ? cachedResult.pages + 1 : 0;
        const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchString}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`;

        fetch(url)
            .then(response => response.json())
            .then(result => this.updateStoriesCache(searchString, result.hits))
            .then(stories => this.setSearchTopStories(stories))
            .catch(error => console.log(error));

    };

    getStoriesFromCache = (key) => {
        return this.state.cache[key];
    };

    updateStoriesCache = (key, stories) => {
        let cache = {...this.state.cache};
        let cacheElement = cache[key];

        if (cacheElement == null) {
            cacheElement = {pages: 0, stories: stories};
            cache[key] = cacheElement;
        } else {
            const newStories = [...cacheElement.stories, ...stories];
            cacheElement.pages = cacheElement.pages + 1;
            cacheElement.stories = newStories;
        }
        this.setState({cache});

        return cacheElement.stories;
    };

    onSearchSubmit = () => {
        const {searchString} = this.state;
        this.fetchTopStories(searchString);
    };

    onDismiss = (id, dismiss) => {
        const {list, dismissedList} = this.state;
        if (dismiss) {
            const {fromList, toList} = swapElemInLists(id, list, dismissedList);
            this.setState({
                list: fromList,
                dismissedList: toList
            });
        } else {
            const {fromList, toList} = swapElemInLists(id, dismissedList, list);
            this.setState({
                list: toList,
                dismissedList: fromList
            });
        }

        function swapElemInLists(id, fromList, toList) {
            const updatedToList = [...toList];
            const updatedFromList = fromList.filter(item => {
                const allowed = item.objectID !== id;
                if (!allowed) {
                    updatedToList.push(item);
                }
                return allowed;
            });
            return {fromList: updatedFromList, toList: updatedToList};
        }
    };

    onSearchChange = (e) => {
        let searchString = e.target.value;
        this.setState({
            searchString
        });
    };

    onCategoryChange = (option) => {
        this.setState({category: option.value});
    };

    toggleTheme = () => {
        this.setState(state => ({
            theme: state.theme === themes.light ? themes.dark : themes.light,
        }))
    };

    componentDidMount() {
        const {searchString} = this.state;
        this.fetchTopStories(searchString);
    }

    render() {
        const {
            list,
            dismissedList,
            searchString,
            category,
        } = this.state;

        const activeList = category === Category.ALLOWED ? list : dismissedList;

        return (
            <ThemeContext.Provider value={this.state}>
                <div className="App">
                    <div className="content">
                        <Header
                            value={searchString}
                            onChange={this.onSearchChange}
                            onCategoryChange={this.onCategoryChange}
                            onSearchSubmit={this.onSearchSubmit}
                        />
                        <Table
                            list={activeList}
                            pattern={searchString}
                            onDismiss={this.onDismiss}
                            category={category}
                            noContentPlaceholder="Sorry, it seems to be empty here..."
                        />
                    </div>
                    <Footer
                        fetchTopStories={() => this.fetchTopStories(searchString, true)}
                    />
                    <AndrewTimer/>
                </div>
            </ThemeContext.Provider>
        );
    }
}

export default App;
