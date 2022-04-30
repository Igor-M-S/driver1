import { defineStore } from "pinia";

export const itensStore = defineStore('Computador', {
    state: () => {
        return {
            itemsComp: [
                {
                    id: 1,
                    nome: 'fotos',
                    link: '/',
                   // itens: [pasta = [fotos]]
                },
                {
                    id: 2,
                    nome: 'arquivos',
                    link: '/arquivos'
                },
                {
                    id: 3,
                    nome: 'videos',
                    link: '/videos'
                },
                /*{
                    id: 4,
                    nome: 'ARQUIVOS'
                },*/

            ]
        }

    }
})