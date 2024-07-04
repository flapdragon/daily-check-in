import { womenInCS } from '../data/women-in-cs'

// Get women in CS placeholder person
const date = new Date()
const day = date.toLocaleDateString("en-US", { day: "numeric" }) - 1 // getDate returns the actual day, 1 based, but we need to convert it to an index, 0 based, so - 1
const index = day < 17 ? day : day - 17
export const womanInCS = womenInCS[index]
