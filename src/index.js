import React from 'react';
import ReactDOM from 'react-dom/client';
import './static/bulma.css'
import './static/style.css'
import './components/Posts'
import Posts from "./components/Posts";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Posts/>
);
