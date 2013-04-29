/**
 * JSEnum
 *
 * Licensed under the MIT License (MIT)
 *
 * Copyright (c) 2013 Leo Selig
 *
 */
(function () {
	/**
	 * @param {String} argument list of property names to be added to the enum
	 * @constructor
	 */
	window.Enum = function () {
		var properties = {};
		for (var i = 0; i < arguments.length; i++) {
			properties[arguments[i]] =
				new EnumProperty(this, arguments[i]);
			this[arguments[i]] =
				properties[arguments[i]];
		}

		/**
		 * States whether a property name is part of the enum
		 *
		 * @param {String} name
		 * @return {Boolean}
		 */
		this.exists = function(name) {
			return typeof properties[name] !== 'undefined';
		}

		/**
		 * Returns the name of an enum property
		 *
		 * @param {EnumProperty} property
		 * @return {String} Null if property is not in this enum
		 */
		this.name = function(property) {
			return this.exists(property.toString())
				?property.toString()
				: null;
		}
	}

	var EnumProperty = function (enumObj, name) {
		this.toString = function() {
			return name;
		}
	}
})();