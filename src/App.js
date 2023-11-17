import { useEffect } from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Header from './components/Header';
import { Fragment } from 'react';
import Home from './components/Home';
import { getUserAuth } from "./actions";
import { connect } from "react-redux";

function App(props) {

  useEffect(() => {
    props.getUserAuth();
  }, []) 

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={
            <Fragment>
              <Header />
              <Home />
            </Fragment>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App)