import { defineStore } from "pinia";

export const itensStore = defineStore('fotos', {
    state: () => {
        return {
            rows: [
                {
                    id:1,
                    nome:'Monza',
                    link:'https://http2.mlstatic.com/D_NQ_NP_991408-MLB49013776830_022022-O.jpg',
                    tipo:'jpg',
                    descricao: 'monza turbinado com rodas de super tração'
                },
                
                {
                    id:2,
                    nome:'Moto',
                    link:'https://tamanhos.com.br/img/miniaturas-motos-1-1-kawasaki-ninja-zx-10r-maisto.png',   
                    tipo:'jpg',
                    descricao: 'moto laranja turbo da bmw'
                },
            ],
            columns:[
                {
                    label: "Nome do arquivo",
                    name:"nome",
                    align: "left",
                    field: "nome",
                  },
                  {
                    name: "tipo",
                    label: "Tipo",
                    field: "tipo",
                    align: "left"
                  },
                  
            ]
        }
    }
})
