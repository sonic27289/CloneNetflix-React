const API_key = '1d4c408ab749f118b1c66f9f49807552';
const API_base = 'https://api.themoviedb.org/3';

/*
    Filmes que irão ser colocados no clone da Netflix
    - Originais da Netflix
    - Trending
    - Top Rated
    - Anime
    - Comédia
    - Terror
    - Romance
    - Documentários
*/
// Função auxiliar para pegar e retornar o Json com o resultado da URL

    const basicFetch = async (endurl) => {
    const requisita = await fetch(`${API_base}${endurl}`);
    const json = await requisita.json();
    return json;
}

const Tmdb = {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                titulo: 'Originais Netflix',
                filmes: await basicFetch(`/discover/tv?with_network=213-netflix&language=pt-BR&api_key=${API_key}`)
            },
            {
                slug: 'trending',
                titulo: 'Continuar assistindo como SuperSim',
                filmes: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_key}`)
            },
            {
                slug: 'toprated',
                titulo: 'Em Alta',
                filmes: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_key}`)
            },
            {
                slug: 'animation',
                titulo: 'Animações',
                filmes: await basicFetch(`/discover/tv?with_genres=16&language=pt-BR&api_key=${API_key}`)
            },
            {
                slug: 'comedy',
                titulo: 'Comédia',
                filmes: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_key}`)
            },
            {
                slug: 'horror',
                titulo: 'Terror',
                filmes: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_key}`)
            },
            {
                slug: 'romance',
                titulo: 'Romance',
                filmes: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_key}`)
            },
            {
                slug: 'documentary',
                titulo: 'Documentários',
                filmes: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_key}`)
            }

        ]
    },

    getInformacaoDoFilme: async (idDoFilme, tipo) => {
        let informacao = {};

        if(idDoFilme){
            switch(tipo){
                case 'filme':
                    informacao = await basicFetch(`/movie/${idDoFilme}?language=pt-BR&api_key=${API_key}`);
                break;
                case 'serie':
                    informacao = await basicFetch(`/tv/${idDoFilme}?language=pt-BR&api_key=${API_key}`);
                break;
                default:
                    informacao = null;
                break;
            }
        }
        return informacao;
    }
}

export default Tmdb;