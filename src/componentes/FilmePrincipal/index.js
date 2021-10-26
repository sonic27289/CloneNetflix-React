import React from "react";
import './FilmePrincipal.css';
// Importando os ícones que serão utilizados no site
// É necessária a instalação prévia dos icons e do core para serem utilizados
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import AddIcon from '@material-ui/icons/Add';

export default function FilmePrincipal({filme}) {
    
    let primeiraData = new Date(filme.first_air_date);
    let generos = [];
    for(let i in filme.genres){
        generos.push( filme.genres[i].name );
    }
    let sinopse = filme.overview;
    if(sinopse.length > 260){
        sinopse = sinopse.substring(0, 260) + "...";
    }
    if(sinopse.length <= 0){
        sinopse = "Série sem Sinopse."
    }
    let relevancia = filme.vote_average;

    return(
        // Edição do Filme Principal que vai aparecer em destaque na página inicial
        <section className="filmePrincipal" style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${filme.backdrop_path})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
            }}>
            <div className="filmePrincipal--transparenciaVertical">
                <div className="filmePrincipal--transparenciaHorizontal">
                    <div className="filmePrincipal--nome">{filme.original_name}</div>
                        <div className="filmePrincipal--informacao">
                            <div className="filmePrincipal--relevancia">{relevancia * 10}% relevante</div>
                            <div className="filmePrincipal--anoDeEstreia">{primeiraData.getFullYear()}</div>
                            <div className="filmePrincipal--temporadas">{filme.number_of_seasons} Temporada{filme.number_of_seasons !== 1 ? 's' : ''}</div>
                        </div>
                        <div className="filmePrincipal--sinopse">{sinopse}</div>
                            <div className="filmePrincipal--botoes">
                                <a href="/" className="filmePrincipal--botaoAssistir"> ▶  Assistir</a>
                                <a href="/" className="filmePrincipal--botaoLista"><AddIcon style={{fontSize: 20}}/></a>
                                <a href="/" className="filmePrincipal--botaoGostei"><ThumbUpIcon style={{fontSize: 20}}/></a>
                                <a href="/" className="filmePrincipal--botaoNaoGostei"><ThumbDownIcon style={{fontSize: 20}}/></a>
                            </div>
                        <div className="filmePrincipal--generos"><strong>Gêneros: </strong>{generos.join(', ')}</div>
                    </div>    
                </div>
        </section>
    )
}