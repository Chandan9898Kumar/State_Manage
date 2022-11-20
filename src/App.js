import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import "./App.css";

// import HeaderNav from "./StateManageComponent/Header";
// import PracticeOne from "./StateManageComponent/StateManageFirst";

//                 Instead using Lazy

// Here we are using lazy function instead of directly importing component.
const HeaderNav = lazy(() => import("./StateManageComponent/Header"));
const PracticeOne = lazy(() =>
  import("./StateManageComponent/StateManageFirst")
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="loader"></div>}>
        <Routes>
          <Route exact path="/" element={<HeaderNav />} />
          <Route exact path="/StateOne" element={<PracticeOne />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
