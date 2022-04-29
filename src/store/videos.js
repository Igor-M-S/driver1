import { defineStore } from "pinia";

export const itensStore = defineStore('videos', {
    state: () => {
        return {
            rows: [
                {
                    id:1,
                    nome:'jogadorSoul',
                    link:'@/assets/soul.mp4',
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
