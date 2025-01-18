import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
// import { CursorContextProvider } from "./components/CursorContext.jsx"
// import Cursor from "./components/CustomCursor.jsx"

const App = () => {
  return (
    <div className="max-h-screen max-w-screen overflow-hidden">
      {/* <CursorContextProvider> */}
      {/* <Cursor/> */}
      <Router>
        <Home />
      </Router>
      {/* </CursorContextProvider> */}
    </div>
  )
}

export default App