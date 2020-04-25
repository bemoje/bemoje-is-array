import isArray from '../src/is-array'

describe('isArray', () => {
	test('works', () => {
		expect(isArray([])).toBe(true)
		expect(isArray(new Array())).toBe(true)
		expect(isArray(new Uint16Array(2))).toBe(false)
		expect(isArray()).toBe(false)
	})
})
