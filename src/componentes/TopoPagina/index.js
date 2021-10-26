import React from "react";
import './TopoPagina.css';

export default ({topoPreto, estaLogado}) => {
    return (
        // Aqui vai ver se o header.topoPreto no CSS vai ser utilizado ou não
        <header className={topoPreto ? 'topoPreto' : ''}>
            
            <div className={`topoPagina--logo ${!estaLogado?'topoPagina--logo--maior' : ''}`}>
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix_Logo" />
                </a>
            </div> 
            {estaLogado && (<div className="topoPagina--usuario">
                <a href="" onClick={() => localStorage.removeItem("logado")}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Usuário"/>
                    <div className="topoPagina--background"></div>
                </a>
            </div>
            )}
        </header>
    );
}