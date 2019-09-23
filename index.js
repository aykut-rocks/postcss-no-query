var postcss = require('postcss');

var defaults = {
	fallback: true,
	prefix: ".nobp",
	query: "(min-width: 1024px)"
};

module.exports = postcss.plugin("postcss-no-query", opts => {
	opts = opts || {};
	var options = Object.assign(defaults, opts);

	return function(root) {
		root.walkAtRules("media", atRule => {
			if (options.fallback && atRule.params === defaults.query) {
              	const clonedRules = [];
                
                // Clone the existing rules under the atRule
                atRule.walkRules(rule => {
                  clonedRules.push(rule.clone());
                });
              	
                // Append the prefix to the selector
                clonedRules.forEach(rule => {
                	rule.selector = `${options.prefix} ${rule.selector}`;
                });
              	root.insertAfter(atRule,clonedRules);
			}
		});
	};
});
