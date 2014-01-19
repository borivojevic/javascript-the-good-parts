document.writeln("Hello, world!");

Function.prototype.method = function (name, func) {
	if (!this.prototype[name]) {
		this.prototype[name] = func;
		return this;
	}
};

Number.method("integer", function() {
	return Math[this < 0 ? "ceil" : "floor"](this);
});

String.method("trim", function() {
	return this.replace(/^\s+|\s+$/g, "");
});

