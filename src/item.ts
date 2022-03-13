export const verpackunstypen = ['Packung', 'Dose', 'Glas'] as const

export type verpachungstyp = typeof verpackunstypen[number]

export class Item {
  id: number
  name: string
  verpackung: verpachungstyp
  gewicht: number
  mhd: Date
  anzahl: number

  constructor (id: number, name: string, verpackung: verpachungstyp, gewicht: number, mhd: Date, anzahl: number) {
    this.id = id
    this.name = name
    this.verpackung = verpackung
    this.gewicht = gewicht
    this.mhd = mhd
    this.anzahl = anzahl
  }
}
