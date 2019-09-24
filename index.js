var postcss = require('postcss');

var defaults = {
	fallback: true,
	prefix: ".no-query",
	query: []
};

module.exports = postcss.plugin("postcss-no-query", opts => {
	opts = opts || {};
	const options = Object.assign(defaults, opts);

	return function(root) {
		root.walkAtRules("media", atRule => {
            const queries = options.query ? options.query.indexOf(atRule.params) > -1 : true;
          
			if (options.fallback && queries) {
			const clonedRules = [];

			// Clone the existing rules under the atRule
			atRule.walkRules(rule => {
				clonedRules.push(rule.clone());
			});

			// Append the prefix to the selector
			clonedRules.forEach(rule => {
				rule.selector = `${options.prefix} ${rule.selector}`;
			});
			root.insertAfter(atRule, clonedRules);
			}
		});
	};
});
