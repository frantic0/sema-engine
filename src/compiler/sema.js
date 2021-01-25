(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory) /* global define */
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory()
  } else {
    root.sema = factory()
  }
}(this, function() {
  'use strict';


  // create the tree structure for a number
  function num(val) {
    return { "@num": { value: val } };
  }

  // create the tree structure for a string - useful for naming samples
  function str(val) {
    return { "@string": val };
  }

  // create the tree structure for a DSP function
  function synth(functionName, params) {
    let branch = {
      "@sigp": { "@params": params, "@func": { value: functionName } }
    };
    return branch;
  }

  // create the tree structure for setting a variable
  function setvar(name, value) {
    return { "@setvar": { "@varname": name, "@varvalue": value } };
  }

  // create the tree structure for reading a variable
  function getvar(name) {
    return { "@getvar": name };
  }

/*
  var sema = function (states, state) {
			this.startState = state;
			this.states = states;
			this.buffer = "";
			this.stack = [];
			this.reset();
		};

  sema.prototype.num = function num(val) {
		return { "@num": { value: val } };
	};

	// create the tree structure for a string - useful for naming samples
	sema.prototype.str = function str(val) {
		return { "@string": val };
	};

	// create the tree structure for a DSP function
	sema.prototype.synth = function synth(functionName, params) {
		let branch = {
			"@sigp": { "@params": params, "@func": { value: functionName } },
		};
		return branch;
	};

	// create the tree structure for setting a variable
	sema.prototype.setvar = function setvar(name, value) {
		return { "@setvar": { "@varname": name, "@varvalue": value } };
	};

	// create the tree structure for reading a variable
	sema.prototype.getvar = function getvar(name) {
		return { "@getvar": name };
	};
*/
  // return { sema: sema }
  return {
		num: num,
		str: str,
		synth: synth,
		setvar: setvar,
		getvar: getvar
	}
  // module.exports = { num, str, synth, setvar, getvar };
  // export { num, str, synth, setvar, getvar };


}));