describe("generators", function(){

	it("can build an iterable", function(){

		let numbers = function*(start, end) {
			for(let i = start; i <= end; i++) {

				yield i;
			}
		};

		let sum = 0;		
		for(let n of numbers(1,5)){
			sum += n;
		}
		
		expect(sum).toBe(15);
	});
});