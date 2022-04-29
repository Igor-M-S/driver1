import { defineStore } from "pinia";

export const itensStore = defineStore('arquivos', {
    state: () => {
        return {
            rows:[
                {
                    id: 1,
                    nome: "lorem",
                    link: "Lorem ipsum dolor sit amet, consectetur adipiscing eli sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamcoaboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt  mollit anim id est laborum"
,                   tipo: "text",
                    descricao: 'lorem isopo'
                },     
                /*  {
                        id: 2,
                        nome: "lorem Português",
                        link: "A dor em si é o amor Mas a dor no filme é irrecusável para condenar, no prazer quer fugir da dor de ser cillum na dor, sem resultado. Aqueles que anseiam por negros são a exceção, eles não veem, são culpados por quem abandona suas responsabilidades, essa é a dificuldade que amolece suas mentes"
    ,                   tipo: "text",
                        descricao: 'lorem isopo'
                    },   */
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
                    align: "center"
                  },
                  
            ]
        }
    }
})
