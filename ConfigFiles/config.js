var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
	seleniumAddress : 'http://localhost:4444/wd/hub',
	specs : [ '../SpecFiles/AddToCart.js' ],
	capabilities : {
		browserName : 'chrome'
	},
	/*multiCapabilities: [{
	    browserName: 'firefox'
	  }, {
	    browserName: 'chrome'
	  }, {
	    browserName: 'internet explorer'
	  }],*/
	
	//to run only these specs as a regression or sanity
	suites : {
		smoke : ["../SpecFiles/DropDown.js","../SpecFiles/LocatorBasics.js"],
		Regression : ["../SpecFiles/AddToCart.js","../SpecFiles/DataProviderDemo.js"]
	},

	//On prepare : All steps inside this will be treated like a global prestep
	//Jamine is included in on prepare as its applied for all test cases.This is for Jasmine Html reporter . 
	onPrepare : function() {
		jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
			savePath : './ConfigFiles/target/screenshots'
		}));
		browser.manage().window().maximize();

	},

	// Options to be passed to Jasmine-node.
	jasmineNodeOpts : {
		showColors : true, // Use colors in the command line report.
	}

}
