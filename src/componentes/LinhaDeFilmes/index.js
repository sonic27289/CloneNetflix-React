import React, { useState } from "react";
import './LinhaDeFilmes.css';
// Importando os ícones que serão utilizados no site
// É necessária a instalação prévia dos icons e do core para serem utilizados
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default ({titulo, filmes}) => {
    
    const [scrollX, setScrollX] = useState(0);
    const cliqueSetaEsquerda = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
            if(x > 0){
                x = 0;
            }
        setScrollX(x);
    }
    const cliqueSetaDireita = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let tamanhoCompletoLista = filmes.results.length * 150;
            if((window.innerWidth - tamanhoCompletoLista) > x) {
                x = (window.innerWidth - tamanhoCompletoLista) - 60;
            }
        setScrollX(x);
    }

    return (
        <div className="linhaDeFilmes">
            <h2>{titulo}</h2>
                <div className="linhaDeFilmes--esquerda" onClick={cliqueSetaEsquerda}>
                    <NavigateBeforeIcon style={{fontSize: 50}} />
                </div>
                <div className="linhaDeFilmes--direita" onClick={cliqueSetaDireita}> 
                    <NavigateNextIcon style={{fontSize: 50}} />
                </div>
                <div className="linhaDeFilmes--areaDaLista">
                    <div className="linhaDeFilmes--lista" style={{
                        marginLeft: scrollX,
                        width: filmes.results.length * 150
                    }}>
                    {filmes.results.length > 0 && filmes.results.map((filme, key) => (
                        <div key={key} className="linhaDeFilmes--filmes">
                            <img src={`https://image.tmdb.org/t/p/w300${filme.poster_path}`} alt={filme.original_title}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}