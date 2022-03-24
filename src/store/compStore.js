import { defineStore } from "pinia";

export const itensStore = defineStore('Computador', {
    state: () => {
        return {
            itemsComp: [
                {
                    id: 1,
                    nome: 'GERAL'
                },
                {
                    id: 2,
                    nome: 'FOTOS'
                },
                {
                    id: 3,
                    nome: 'VIDEOS'
                },
                {
                    id: 4,
                    nome: 'ARQUIVOS'
                },

            ]
        }

    }
})