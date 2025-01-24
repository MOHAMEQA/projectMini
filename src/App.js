import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import Layout from "./components/Layout";
import ModifierCouleur from "./components/ModifierCouleur";
import VoirMonProfile from "./components/VoirMonProfile";
import ListeUtilisateurs from "./components/ListeUtilisateurs";
import Demandes from "./components/Demandes";
import AjouterUtilisateur from "./components/AjouterUtilisateur";
// import Header from "./components/Header";

const App = () => {
  // const shouldShowHeader = window.location.pathname !== "/login" && window.location.pathname !== "/create-account";

  return (
    <Router>
      <>
        {/* {shouldShowHeader && <Header />} */}
        <Routes>
          <Route path="/projectMini/create-account" element={<CreateAccount />} />
          <Route path="/projectMini/login" element={<Login />} />
          <Route path="/projectMini/" element={<Layout />} >
            <Route path="/projectMini/color" element={<ModifierCouleur />} />
            <Route path="/projectMini/profile" element={<VoirMonProfile />} />
            <Route path="/projectMini/users" element={<ListeUtilisateurs />} />
            <Route path="/projectMini/requests" element={<Demandes />} />
            <Route path="/projectMini/add-user" element={<AjouterUtilisateur />} /> 
          </Route>
        </Routes>
      </>
    </Router>
  );
};


export default App;
