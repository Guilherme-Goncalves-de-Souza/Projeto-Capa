import { STATUS_ARTICLES } from "./parsers"

export const booleanOptions = [
    { title:'Sim', id:1 },
    { title:'Não', id:2 }
]

export const monthOptions = [
    { title:'Janeiro', id:1 },
    { title:'Fevereiro', id:2 },
    { title:'Março', id:3 },
    { title:'Abril', id:4 },
    { title:'Maio', id:5 },
    { title:'Junho', id:6 },
    { title:'Julho', id:7 },
    { title:'Agosto', id:8 },
    { title:'Setembro', id:9 },
    { title:'Outubro', id:10 },
    { title:'Novembro', id:11 },
    { title:'Dezembro', id:12 },
]

export const articleStatusOptions = [
    { title: STATUS_ARTICLES["accepted"], id:"accepted" },
    { title: STATUS_ARTICLES["not_contemplated"], id:"not_contemplated" },
    { title: STATUS_ARTICLES["in_screening"], id:"in_screening" }
]


export const adviceOptions = [
    { title: "Aguardando", id:"customer" },
    { title: "Ausente", id:"absent" },
    { title: "Cancelado", id:"cancelled" },
    { title: "Realizada", id:"performed" },
    { title: "Agendado", id:"scheduled" },
]

export const weekOptions = [
    // { title:'Domingo', id:1 },
    { title:'Segunda-feira', id:2 },
    { title:'Terça-feira', id:3 },
    { title:'Quarta-feira', id:4 },
    { title:'Quinta-feira', id:5 },
    { title:'Sexta-feira', id:6 },
    // { title:'Sábado', id:7 }
]

export const turnOptions = [
    { title:'08:00', id:1 },
    { title:'09:00', id:2 },
    { title:'10:00', id:3 },
    { title:'11:00', id:4 },
    
    { title:'14:00', id:5 },
    { title:'15:00', id:6 },
    { title:'16:00', id:7 },
    { title:'17:00', id:8 },
    
    { title:'19:00', id:9 },
    { title:'20:00', id:10 },
    { title:'21:00', id:11 },
    { title:'22:00', id:12 },
]