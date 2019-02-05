import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// const list = [
//     {
//         title: 'React',
//         url: 'https://reactjs.org/',
//         author: 'Jordan Walker',
//         num_comments: 3,
//         points: 4,
//         objectID: 0,
//     },
//     {
//         title: 'Vue',
//         url: 'https://vuejs.org/',
//         author: 'Evan You',
//         num_comments: 7,
//         points: 2,
//         objectID: 1,
//     },
//     {
//         title: 'Ember',
//         url: 'https://emberjs.org/',
//         author: 'Tom Dale',
//         num_comments: 5,
//         points: 1,
//         objectID: 2,
//     },
//     {
//         title: 'Meteor',
//         url: 'https://meteorjs.org/',
//         author: 'David Turnbull',
//         num_comments: 7,
//         points: 2,
//         objectID: 3,
//     }
// ];


ReactDOM.render(<App list={[]}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
