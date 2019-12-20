import React, { Component } from "react";
import JsxChecking from "./components/JsxChecking.jsx";
import './styles/App.css';
import './styles/global.scss';
class App extends Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h1>My React App - Trevor!</h1>
                <JsxChecking></JsxChecking>
                <img src="https://shoplineimg.com/5b5fdeb88d1db997ee00e395/5dc4dd36860a8c002144727c/400x.webp?source_format=png" />
            </div>
        );
    }
}

export default App;