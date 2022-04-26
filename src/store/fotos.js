import { defineStore } from "pinia";

export const itensStore = defineStore('fotos', {
    state: () => {
        return {
            fotosCarro: [
                {
                    id: "1",
                    link:'https://http2.mlstatic.com/D_NQ_NP_991408-MLB49013776830_022022-O.jpg',
                    nome:'Monza',
                    tipo:'jpg',
                    descricao: 'monza turbinado com rodas de super tração'
                },
                {
                    id: "2",
                    link:'https://tamanhos.com.br/img/miniaturas-motos-1-1-kawasaki-ninja-zx-10r-maisto.png',
                    nome:'Moto',
                    tipo:'jpg',
                    descricao: 'moto laranja turbo da bmw'
                },
               /* {
                    id: 2,
                    link:'https://www.pareautopecas.com.br/image/cache/data/montadoras/Fiat/fiat%20uno%20mille/4pmmV_13595897_509334632595418_2101831969_n-500x500.jpg',
                    nome:'Uno-2008',
                    tipo:'jpg',
                    descricao: 'uno 2008 bem usado com cambio e pnel novo'
                },
                {
                    id: 3,
                    link:'https://i1.sndcdn.com/artworks-000130286236-oosgy6-t500x500.jpg',
                    nome:'Marea',
                    tipo:'jpg',
                    descricao: 'Fiat marea turbo, carro perfeito para trabalhos de agiotagem e racha'
                },*/

            ],
            fotosMoto:[
                
                /*{
                    id: 2,
                    link:'https://tamanhos.com.br/img/miniaturas-motos-1-1-kawasaki-ninja-zx-10r-maisto.png'
                },
                {
                    id: 3,
                    link:'https://tamanhos.com.br/img/miniaturas-motos-1-1-kawasaki-ninja-zx-10r-maisto.png'
                },
                {
                    id: 4,
                    link:'https://tamanhos.com.br/img/miniaturas-motos-1-1-kawasaki-ninja-zx-10r-maisto.png'
                },*/
            ],

        }
    }
})
