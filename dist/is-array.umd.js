(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global['is-array'] = factory());
}(this, (function () { 'use strict';

	/**
	 * Returns whether 'value' is an Array.
	 * @method isArray
	 * @param {any} value - The value to evaluate.
	 * @returns {boolean}
	 */
	var isArray = Array.isArray;

	return isArray;

})));
