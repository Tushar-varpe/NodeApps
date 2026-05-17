//Array
const myArr = [45,18,17,7,63]
const cricket =["test","ipl","t20","odi"]
console.log(myArr[2])
console.log(cricket[3])

// Array Methods
// myArr.push(6)
// myArr.push(7)
// myArr.pop()
myArr.unshift(31)
myArr.shift()

console.log(myArr.includes(45))
console.log(myArr.indexOf(45))

const newArr = myArr.join()
console.log(myArr)
console.log(newArr)  //typeOf=String

// slice,splice
console.log("A",myArr)
const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log("B",myArr)

const myn2 = myArr.splice(1,3)
console.log("C",myArr)
console.log(myn2)