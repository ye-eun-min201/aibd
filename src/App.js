import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Introduction from './components/Introduction';
import VideoList from './components/VideoList';
import Chatbot from './components/Chatbot';
import Tips from './components/Tips';
import Analysis from './components/Analysis';
import Success from './components/Success';
import Main from './components/Main';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/success" element={<Success />} />
          <Route path="/videos" element={<VideoList />} />
          <Route path="/Footer" element={<Footer />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
