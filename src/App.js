import React, { useState, useEffect } from 'react';
import './App.css';
import PaginaInicial from './componentes/PaginaInicial';
import PaginaLogin from './componentes/PaginaLogin';

export default function SignIn() {

  const [estaLogado, setEstaLogado] = useState(false);
  const [enderecoDeEmail, setEnderecoDeEmail] = useState('');
  const [senha, setSenha] = useState('');
  const estaInvalido = senha === '' || enderecoDeEmail === '';

  function login(){
    localStorage.setItem("logado", true)
    setEstaLogado(true);
  }
  useEffect(() => {
    const logado = localStorage.getItem("logado");
    setEstaLogado(logado);
  }, []);
  if(estaLogado){
    return <PaginaInicial/>;
  }
  return <PaginaLogin  onLogged={login}/>
};