describe("arrow functions", function(){

	it("provide a compact syntax to define a function", function(){

		let add = (x,y) => {
			let temp = x + y;
			return temp;
		};
		let square = x => x * x;
		let three = () => 3;

		expect(square(add(2,three()))).toBe(25);

	});

	

	it("lexically binds to 'this'", function(done) {

		this.name = "Scott";
	
		setTimeout(() => {
			expect(this.name).toBe("Scott");
			done();
		},15);
		
	});

});