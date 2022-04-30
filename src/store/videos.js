import { defineStore } from "pinia";

export const itensStore = defineStore('videos', {
    state: () => {
        return {
            rows: [
                {
                    id:1,
                    nome:'jogadorSoul',
                    link:'https://www.youtube.com/watch?v=_2c8YZwzaMk',
                    tipo:'mp4',
                    descricao: 'jogadorSoul'
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
