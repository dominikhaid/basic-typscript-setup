let sym: Symbol = Symbol('key')
let sym2: Symbol = Symbol('key')
let obj = {
  [sym2]: 'Wert 2'
}
obj[sym]= () => 'Wert'
console.log(sym === sym2)
console.log(obj[sym]())
console.log(obj[sym2])