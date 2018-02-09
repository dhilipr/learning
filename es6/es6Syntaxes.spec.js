describe("how let works", function(){

	it("will provide block scoping, unlike var", function(){

		var doWork = function(flag){

			if(flag){
				let x = 3;
				return x;
			}

		};

		var result = doWork(true);
		expect(result).toBe(3);
	});


	it("will provide block scoping with for", function(){

		var doWork = function(){

			for(let i = 0; i< 10; i++){
			}
			
			/* return i won't work */
			return 0;		
		};

		var result = doWork();
		expect(result).toBe(0);

	});	
});

describe("default parameters", function(){

	it("provides defaults", function(){

		var doWork = function(name="Scott") {						
			return name;
		};

		var result = doWork();

		expect(result).toBe("Scott");

	});

	it("will provide a value for undefined", function(){

		let doWork = function(a = 1, b = 2, c = 3){
			return [a,b,c];
		};

		let [a,b,c] = doWork(5, undefined);

		expect(a).toBe(5);
		expect(b).toBe(2);
		expect(c).toBe(3);
	});

	
});

describe("destructuring", function() {
	"use strict";
  
	it("can destructure arrays", function() {

		var doWork = function(){
			return [1, 3, 2];
		};

		let [, x, y, z] = doWork();

		expect(x).toBe(3);
		expect(y).toBe(2);
		expect(z).toBeUndefined();

	});

	it("can destructure objects", function() {

	    let doWork = function() {
		     return {
			    firstName: "Scott",
		        lastName: "Allen",
		        handles: {
		        	twitter: "OdeToCode"    
		    	}
		    };		   
		};

		let { 
				firstName, 
			  	handles:{twitter}
			} = doWork();

		expect(firstName).toBe("Scott");
		expect(twitter).toBe("OdeToCode");

	});


});

describe("rest parameters", function(){

	it("is like varargs", function(){

		let doWork = function(name, ...numbers){
			let result = 0;
			numbers.forEach(function(n){
				result += n;
			});
			return result;
		};

		let result = doWork("Scott", 1, 2, 3);
		expect(result).toBe(6);

	});
	
});

describe("the spread", function(){

	it("can spread an array across parameters", function(){

		let doWork = function(x, y, z) {
			return x + y + z;
		}

		var result = doWork(...[1, 2, 3]);
		
		expect(result).toBe(6); 

	});




	it("can build arrays", function(){

		var a = [4, 5, 6];
		var b = [1, 2, 3, ...a, 7, 8, 9];

		expect(b).toEqual([1,2,3,4,5,6,7,8,9]);

	});

});

describe("template literals", function(){

	it("can easily combine literals and data", function(){

		let doWork = function(name){
			return `Hello, ${name}`;
		};

		let result = doWork("Scott");
		expect(result).toBe("Hello, Scott");

	});
	
});
