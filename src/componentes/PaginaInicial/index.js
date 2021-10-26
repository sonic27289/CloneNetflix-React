import React, { useEffect, useState } from 'react';
import Tmdb from '../../Tmdb';
import LinhaDeFilmes from '../LinhaDeFilmes';
import './PaginaInicial.css';
import FilmePrincipal from '../FilmePrincipal';
import TopoPagina from '../TopoPagina';

export default function PaginaInicial () {

    const [listaFilmes, setListaFilmes] = useState([]);
    const [dadosFilmePrincipal, setDadosFilmePrincipal] = useState(null);
    // Definir quando o Topo da Página vai ficar transparente ou escuro enquanto você se movimenta pela Página
    const [topoEscuro, setTopoEscuro] = useState(false);

    useEffect(() => {
    const carregarTudo = async () => {
        // Pegando a lista de filmes que foram colocados no arquivo Tmdb.js
        let lista = await Tmdb.getHomeList();
        setListaFilmes(lista);

        // Selecionando randomicamente o Filme Principal que vai aparecer em destaque na página inicial
        let originaisNetflix = lista.filter(i=>i.slug === 'originals');
        let filmesOriginaisNetflix = originaisNetflix[0].filmes.results.filter(i=>i.vote_average > 7);
        let filmeAleatorio = Math.floor(Math.random() * (filmesOriginaisNetflix.length - 1));
        let filmeEscolhido = filmesOriginaisNetflix[filmeAleatorio];
        let informacaoFilmeEscolhido = await Tmdb.getInformacaoDoFilme(filmeEscolhido.id, 'serie');
        setDadosFilmePrincipal(informacaoFilmeEscolhido);
        }
        carregarTudo();
    }, []);

    // Usando o scrollListener para setar o Topo Escuro true ou false
    useEffect(()=>{
    const scrollListener = () => {
        if(window.scrollY > 10){
        setTopoEscuro(true);
        }
        else{
        setTopoEscuro(false);
        }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
    }, []);

    return(
    // Edição da página inicial - Lista de Filmes, Destaque da Semana, Topo da Página, etc.
    <div className="pagina">

        <TopoPagina estaLogado topoPreto = {topoEscuro} />

        { dadosFilmePrincipal &&
            <FilmePrincipal filme={dadosFilmePrincipal} />
        }

        <section className="listas">
            {listaFilmes.map((filme, key) => (
                <LinhaDeFilmes key={key} titulo={filme.titulo} filmes={filme.filmes} />
            ))}
        </section>
      
        <footer>
            Feito por Gustavo Barbosa <br/>
            Direitos Autorais para Netflix <br/>
            Dados pela API pública do site Themoviedb.org
        </footer>
      
        {listaFilmes.length <= 0 &&  
            <div className="carregamento">
                <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Carregando"/>
            </div>
        }
    </div>
  );
};