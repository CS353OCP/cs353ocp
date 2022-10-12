import Component from "react";
import { Routes, Route, Navigate } from "react-router-dom"

import Main from './Pages/Main';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';

class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={< Main />} />
          <Route path="/page1" element={< Page1 />} />
          <Route path="/page2" element={< Page2 />} />
          <Route path="*" element={< Navigate to="/error" replace />} />
        </Routes>
      </div>
    );
  }
}

export default App;