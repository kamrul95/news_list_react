import React from 'react';
import ReactDOM from 'react-dom';

//COMPONENTS
import Header from './components/header';
const App = () => {
    return (
        <div className="newElement">
            <h1> Hello world!!! </h1>;
            <Header />
        </div>
    ) 
        
}

ReactDOM.render(<App/>, document.querySelector('#root')); 