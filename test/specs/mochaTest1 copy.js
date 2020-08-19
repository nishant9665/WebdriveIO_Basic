var assert = require('chai').assert;
   
    beforeEach('some description for testcases Run2', function () {
        // beforeEach:some description
        console.log('before each work')
      });
  
    describe('#find()2', function () {
        it('my test2', () => {
            // should set the timeout of this test to 1000 ms; instead will fail
            this.timeout(1000);
            assert.equal(2, 2);
            console.log("test1")

            
          })

          it('my test22', () => {
            // should set the timeout of this test to 1000 ms; instead will fail
            this.timeout(1000);
            console.log("test2")
            assert.equal(2, 4);
          })
        });
    