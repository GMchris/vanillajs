 upgrades JavaScript with reasonable getters, setters and constructors often found in other programming languages.
* Since it alters the prototypes of native classes, it may conflict with other libraries that do the same. Read any relevant
* documentation to find such overlaps or limit yourself to only one library that works with native classes, otherwise you may
* experience unpredictable and hard to debug errors.
* 
* Kristian Ignatov --- https://github.com/GMchris
*/

/** Array **/

Object.defineProperties(Array.prototype, {
	/**
	* A shorthand for the first element in the array.
	*/
	'first': {
		get: function() {
			return this.valueOf()[0];
		},
		set: function(value) {
			return this.valueOf()[0] = value;
		}
	},
	/**
	* A shorthand for the last element in the array.
	*/
	'last': {
		get: function() {
			return this.valueOf()[this.valueOf().length - 1];
		},
		set: function(value) {
			return this.valueOf()[this.valueOf().length - 1] = value;
		},
	},
	/**
	* A shorthand for the last index of the array.
	*/
	'lastIndex': {
		get: function() {
			return this.valueOf().length - 1;
		},
		set: function(value) {
			this.valueOf().length = value + 1;
		}
	},
	/**
	* Remove and return an element from the array at a specified index.
	* @param {number} index - The index of the removed element
	* @return {any} element - The removed element.
	*/
	'removeAt': {
		value: function(index) {
			return this.valueOf().splice(index, 1)[0];
		}
	},
	/**
	* Add an element to the array at a specified index.
	* @param {number} index - The index at which to add an element.
	* @param {any} element - The new element to add.
	*/
	'insertAt': {
		value: function(index, element) {
			this.valueOf().splice(index, 0, element);
		}
	},
	/**
	* A computed property checking if the array is empty
	* @returns {boolean} empty - Is the array empty
	*/
	'empty': {
		get: function() {
			return this.valueOf().length === 0;
		}
	}
});
