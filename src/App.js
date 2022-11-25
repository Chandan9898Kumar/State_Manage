import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import "./App.css";

// import MyReverse from './StateManageComponent/ReSetStateWithKey/MainCompo'
// import MainHeader from './StateManageComponent/PreserveState/MainComponent'
// import Parent from "./StateManageComponent/SharingStateBetweenTwoComponent/ParentCom";
// import HeaderNav from "./StateManageComponent/Header";
// import PracticeOne from "./StateManageComponent/StateManageFirst";

//                 Instead using Lazy

// Here we are using lazy function instead of directly importing component.
const HeaderNav = lazy(() => import("./StateManageComponent/Header"));
const PracticeOne = lazy(() =>
  import("./StateManageComponent/StateManageFirst")
);
const Parent = lazy(() =>
  import("./StateManageComponent/SharingStateBetweenTwoComponent/ParentCom")
);
const MainHeader = lazy(() =>
  import("./StateManageComponent/PreserveState/MainComponent")
);

const ReverseState = lazy(() =>
  import("./StateManageComponent/ReSetStateWithKey/MainCompo")
);
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="loader"></div>}>
        <Routes>
          <Route exact path="/" element={<HeaderNav />} />
          <Route exact path="/StateOne" element={<PracticeOne />} />
          <Route
            exact
            path="/SharingStateBetweentwoComp"
            element={<Parent />}
          />
          <Route exact path="/PreserveState" element={<MainHeader />} />
          <Route exact path="/ReStateState" element={<ReverseState />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
