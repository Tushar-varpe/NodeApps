const marvle_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

//marvle_heros.push(dc_heros)
// console.log(marvle_heros)
// console.log(marvle_heros[3][1])

//const allHeros = marvle_heros.concat(dc_heros)
//console.log(allHeros)

const all_new_heros = [...marvle_heros,...dc_heros]
console.log(all_new_heros)

const another_array = [1,23,3,4,56,[4,56,],7,89,2,[18,17,31]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("Tushar"))
console.log(Array.from("Tushar"))
console.log(Array.from({name :"Tushar"}))

let score1 = 200
let score2 = 300
let score3 = 400
console.log(Array.of(score1,score2,score3))