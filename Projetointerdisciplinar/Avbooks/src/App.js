import './App.css';
import{BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/Home/Home';
import Cadastro from './pages/Cadastro/Cadastro';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Header from './components/Header';
import { AuthProvider } from './context/AuthContext'
import {useAuthentication} from './hooks/useAuthentication'
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import Perfil from './pages/Perfil/Perfil';
import Body from './components/Body';
import Produtos from './components/Produtos';
function App() {
  const [user, setUser] = useState(undefined)
  const {auth} = useAuthentication()
  const loadingUser = user===undefined

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      setUser(user)
    })
  },[auth])

  if(loadingUser){
    return <p>Carregando...</p>
  }
  return (
    <> 
      <AuthProvider value={{user}}>
      <BrowserRouter>
            <Header/>
              <NavBar/>
                <Body/>
                  <Footer/>
      </BrowserRouter>
      </AuthProvider>
    </> 
  );
}

export default App;
