// function shuffle(array: any[]) {
//   for (let i = array.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1))
//     ;[array[i], array[j]] = [[array[j], array[i]]
//   }
// }

// export default shuffle

// export default function shuffle<T>(array: T[]): T[] {
//   if (!Array.isArray(array)) {
//     throw new TypeError(`Expected an Array, got ${typeof array} instead.`)
//   }

//   const oldArray = [...array]
//   let newArray = new Array<T>()

//   while (oldArray.length) {
//     const i = Math.floor(Math.random() * oldArray.length)
//     newArray = newArray.concat(oldArray.splice(i, 1))
//   }

//   return newArray
// }

export default function shuffle<T>(arr: T[]): T[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  return arr
}
