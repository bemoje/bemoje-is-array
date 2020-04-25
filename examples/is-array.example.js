import isArray from '../src/is-array'

isArray([])
//=> true

isArray(new Array())
//=> true

isArray(new Uint16Array(2))
//=> false

isArray()
//=> false
