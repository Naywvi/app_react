import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import './assets/css/formulaire_page.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VerifySession from './formulaires/VerifySession'; // Importez le composant VerifySession
import VerifyAdmin from './formulaires/verifyadmin'; // Importez le composant VerifyAdmin
const formulaire_page = require('./formulaires/formulaire_page/index.jsx');
const login = require('./formulaires/login_page/index.jsx');
const admin_page = require('./formulaires/admin_page/index.jsx');
const logout_page = require('./formulaires/logout_page/index.jsx');

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/vt" element={<VerifySession><formulaire_page.default /></VerifySession>} />
        <Route path="/" element={<login.default />} />
        <Route path="/moderation" element={<VerifyAdmin><admin_page.default /></VerifyAdmin>} />
        <Route path="/logout" element={<logout_page.default />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
