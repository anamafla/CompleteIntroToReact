import React from "react";
import ReactDOM from "react-dom";
import Results from "./Results";
import { Router } from "@reach/router";
import Details from "./Details";
import NavBar from "./NavBar";
import SearchParams from "./SearchParams";
import { Provider } from "react-redux";
import store from "./store";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Provider store={store}>
          <Router>
            <SearchParams path="/search-params" />
            <Results path="/" />
            <Details path="/details/:id" />
          </Router>
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
