describe('Promises', function() {

  it('should execute the callback given to then', function(done) {
    var promise = new Promise(function(resolve,reject) {
      resolve();
    });

    promise.then(function() {
      done();
    });
  });

  it('should receive the resolved data', function(done) {
    var promise = new Promise(function(resolve, reject) {
      resolve(1);
    });

    promise.then(function(data) {
      expect(data).toBe(1);
      done();
    });
  });

  it('should fail when rejected', function(done) {
    var promise = new Promise(function(resolve, reject) {
      reject(Error('no!'));
    });
    promise.then(function() {
      // success
    }, function(error) {
      expect(error.message).toBe('no!');
      done();
    });
  });

  it('should have a catch', function(done) {
    var promise = new Promise(function(resolve, reject) {
      reject(Error('no!'));
    });
    promise.catch(function(error) {
      expect(error.message).toBe('no!');
      done();
    });
  });

 
  it('should have a static resolve', function(done) {
    var previousPromise = Promise.resolve(3);

    var promise = Promise.resolve(previousPromise);
    promise.then(function(data) {
      expect(data).toBe(3);
      done();
    });
  });

  it('should have a static reject', function(done) {
    var promise = Promise.reject(Error('no!'));
    promise.catch(function(error) {
      expect(error.message).toBe('no!');
      done();
    });
  });

  it('should be asynchronous', function(done) {
    var async = false;

    var promise = new Promise(function(resolve, reject) {
      resolve();
    });
    promise.then(function() {
      expect(async).toBe(true);
      done();
    });
    async = true;
  });

 
 
});