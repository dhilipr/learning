describe("Maps", function() {

	it("should contain zero items when constructed", function () {
		var map = new Map();
		expect(map.size).toBe(0);
	});

	it("should contain 1 item when one item is added", function () {
    var map = new Map();
    map.set("age", 35);
    expect(map.size).toBe(1);
  });

  it("should return the value when get is called with the correct key", function () {
    var map = new Map();
    map.set("age", 35);
    expect(map.get("age")).toBe(35);
  });

  it('should allow an object to be the key', function() {
    var ageMap = new Map();
    var ralph = {'name': 'Ralph'};
    ageMap.set(ralph, 29);

    expect(ageMap.get(ralph)).toBe(29);
  });

  it("should contain items when given an array in the constructor", function () {
    var map = new Map([['name','John'],['age',15],['weight','155']]);
    expect(map.size).toBe(3);
  });

  it("should find the correct item when has is called", function () {
    var map = new Map([['name','John'],['age',15],['weight','155']]);
    expect(map.has('age')).toBe(true);
  });


  it("should have no items after clear is called", function () {
    var map = new Map();
    map.set(1, 'a');
    map.set(2, 'b');
    map.set(3, 'c');
    map.clear();
    expect(map.size).toBe(0);
  });

  it("should remove an item when delete is called", function () {
    var map = new Map();
    var key1 = {};
    var key2 = {};
    map.set(key1, 100);
    map.set(key2, 200);
    map.delete(key2);
    expect(map.has(key2)).toBe(false);
  });


  it("should return an iterator of keys when keys is called", function () {
    var map = new Map();
    map.set(1, 'a');
    var keys = map.keys();
    var firstKey = keys.next().value;
    expect(firstKey).toBe(1);
  });

  it("should be able to be constructed with an iterator", function () {
    var map = new Map();
    map.set('1');
    map.set('2');
    map.set('3');
    var map2 = new Map(map.entries());
    expect(map2.size).toBe(3);
  });

});

describe('Sets', function() {

	
	it('should allow objects as a key', function() {
		var set = new Set();
		var key = {};
		set.add(key);
		expect(set.has(key)).toBe(true);
	});

	it("should contain items when given an array in the constructor", function () {
		var set = new Set([1,2,3]);
		expect(set.has(1)).toBe(true);
	});

	it("should not allow duplicate values", function () {
		var set = new Set();
		var key = {};
		set.add(key);
		set.add(key);
		expect(set.size).toBe(1);
	});

	it("should have no items after clear is called", function () {
		var set = new Set();
		set.add(1);
		set.add(2);
		set.add(3);
		set.clear();
		expect(set.size).toBe(0);
	});

	it("should remove an item when delete is called", function () {
		var set = new Set();
		set.add(1);
		set.add(2);
		set.delete(1);
		expect(set.size).toBe(1);
	});

	it("should call a callback function once for each item when foreach is invoked", function() {
    var set = new Set();
   	set.add('Tom');
   	set.add('Dick');
   	set.add('Harry');

   	var iterationCount = 0;
   	set.forEach(item => iterationCount++);
   	expect(iterationCount).toBe(3);
  });

  it('should support for of iteration', function() {
  	var set = new Set([1,2,3]);

  	var iterationCount = 0;
  	for(var item of set) {
  		iterationCount++;
  	}
  	expect(iterationCount).toBe(3);
  });

  it("should return an iterator of arrays when entries is called", function () {
    var set = new Set();
    set.add("1");

    var entries = set.entries();
    var firstEntry = entries.next().value;
    expect(firstEntry[0]).toBe("1");
    expect(firstEntry[1]).toBe("1");
  });

  it("should return an iterator of values when values is called", function () {
    var set = new Set();
    set.add("1");

    var values = set.values();
    var firstValue = values.next().value;
    expect(firstValue).toBe("1");
  });

  it("should be able to be constructed with an iterator", function () {
  	var set = new Set();
  	set.add("1");
  	set.add("2");
  	set.add("3");

  	var set2 = new Set(set.values());
  	expect(set2.size).toBe(3);
  });

});