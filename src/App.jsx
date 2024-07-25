import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Admin from './components/Admin';
import Editor from './components/Editor';
import Author from './components/Author';
import PrivateRoute from './components/PrivateRoute';
import './App.css'; // Import the CSS file

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<PrivateRoute roles={['admin']} component={Admin} />} />
          <Route path="/editor" element={<PrivateRoute roles={['editor']} component={Editor} />} />
          <Route path="/author" element={<PrivateRoute roles={['author']} component={Author} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
