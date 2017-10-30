
QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 <= "3", "1<3 - the first agrument is 'truthy', so we pass!");
});
QUnit.test('Testing the new max function with three sets of inputs', function (assert) {
    assert.equal(dgh(1,2), 2, "works with 2 positive numbers");
    assert.equal(dgh(-2,9),9 , "works with 1 negative number and 1 positive number");
    assert.equal(dgh(-2,-100),-2, "works with 2 negative numbers");
    assert.equal(dgh(0,-4),0, "works with 1 positive number and 1 negative number ");
    
   
});






