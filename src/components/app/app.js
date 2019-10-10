import React from 'react';
import './app.css';

import Header from '../header/header';
import ItemDetails from '../item-details/item-details';
import ItemGrid from '../item-grid/item-grid';
import SearchBar from '../search-bar/search-bar';

const App = () => {
    return (
        <div>
            <Header/>
            <SearchBar/>
            <ItemGrid/>
            <ItemDetails/>
        </div>
    )
}

export default App