import { defineStore } from 'pinia'
import { ref } from 'vue' // ← IMPORTAR ref é necessário!

interface headerItems {
  cirurgia: string
  cirurgia_chefe: string
  interno: string
  anestesista: string
  paciente: string
  horario: string
  sala: number
}

interface Header {
  title: string
  key: keyof headerItems
}

export const useDessertStore = defineStore('dessert', () => {
  const boardItems = ref<headerItems[]>([
    {
      cirurgia: 'Apendicectomia',
      cirurgia_chefe: 'Miranda Bailey',
      interno: 'George OMalley',
      anestesista: 'Kendrick Lenon',
      paciente: 'Cleiton Lock Junes',
      horario: '12:45',
      sala: 24,
    },
    {
      cirurgia: 'Reconstrução da Aorta',
      cirurgia_chefe: 'Preston Burke',
      interno: 'Cristina Yang',
      anestesista: 'Shane Burton',
      paciente: 'Venice Bryan',
      horario: '11:20',
      sala: 11,
    },
    {
      cirurgia: 'Cesárea',
      cirurgia_chefe: 'Addison Sheperd',
      interno: 'Izzie Stevens',
      anestesista: 'Ottis Vancler',
      paciente: 'Joyce Mouse',
      horario: '14:20',
      sala: 9,
    },
    {
      cirurgia: 'Rinoplastia',
      cirurgia_chefe: 'Mark Sloan',
      interno: 'Alex Karev',
      anestesista: 'Kendrick Lenon',
      paciente: 'Mia Thompson',
      horario: '01:30',
      sala: 17,
    },
    {
      cirurgia: 'Craniotomia',
      cirurgia_chefe: 'Derek Sheperd',
      interno: 'Meredith Grey',
      anestesista: 'Chris Meyer',
      paciente: 'Rick Poller',
      horario: '06:12',
      sala: 10,
    },
  ])

  const headers = ref<Header[]>([
    { title: 'Cirurgia', key: 'cirurgia' },
    { title: 'Cirurgião Chefe', key: 'cirurgia_chefe' },
    { title: 'Interno', key: 'interno' },
    { title: 'Anestesista', key: 'anestesista' },
    { title: 'Paciente', key: 'paciente' },
    { title: 'Horário', key: 'horario' },
    { title: 'Sala', key: 'sala' },
  ])

  return { headers, boardItems }
})
