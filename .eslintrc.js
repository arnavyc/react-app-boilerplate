module.exports = {
    "env": {
        "browser": true,
	"es6": true,
    },
    "extends": ["airbnb", "plugin:prettier/recommended"],
    "rules": {
        "import/no-extraneous-dependencies": [
            "error", {
                "devDependencies": [
   	            "**/*.test.js",
                    "**/*.spec.js",
	            "config/**",
                    "./webpack.config.js",
		]
	    }
	]
    }
};
