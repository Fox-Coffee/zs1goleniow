import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./Header";
import Footer from "./Footer";
import Button from "./Button";

function App(){
    return(<div className="App">
        <Header />
        <Button text="Dziennik" />
        <Button text="Plan Lekcji" />
        <Button text="Zastępstwa" />
        <Footer />
    </div>);
}

ReactDOM.render(<App />, document.querySelector("#root"));