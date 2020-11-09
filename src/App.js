import React, { Suspense } from "react";
import "./App.css";
import SearchResults from "./pages/SearchResults";
import Detail from "./pages/Detail";
import Pepito from "./context/StaticContext";

import { Link, Route } from "wouter";
import { GifsContextProvider } from "./context/GifsContext";

const HomePage = React.lazy(() => import("./pages/Home"));

function App() {
  return (
    <Pepito.Provider value={{ name: "midudev", suscribeteAlCanal: true }}>
      <div className="App">
        <Suspense fallback={null}>
        <section className="App-content">
          <Link to="/">
            <figure className="App-logo">
              <img alt="Giffy logo" src="/logo.png" />
            </figure>
          </Link>
          <GifsContextProvider>
            <Route component={HomePage} path="/" />
            <Route component={SearchResults} path="/search/:keyword" />
            <Route component={Detail} path="/gif/:id" />
            <Route component={() => <h1>404 ERROR :(</h1>} path="/404" />
          </GifsContextProvider>
        </section>
        </Suspense>
      </div>
    </Pepito.Provider>
  );
}

export default App;
