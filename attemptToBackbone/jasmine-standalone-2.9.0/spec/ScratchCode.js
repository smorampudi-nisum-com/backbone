// describe a test suite
// describe('An add function', function(){
//     it('should add properly', function(){
//         //setup code
//         var res = add(2,3);
//         //verify the outcome it is what expected
//         expect(res).toEqual(5);
//         expect(res).toBedefined();
//         expect(res).toBeTruthy();
//         expect(res).not.toEqual(8);
//     });
// });
describe('getNthElement', function(){
    it('should be defined', function(){
        expect(window.getNthElement).toBeDefined();
    });
    it('should return the nth element', function(){
        var result= getNthElement([1, 2, 3], 0);
        expect(result).toEqual(1);
        //expect(result).not.toEqual(3);
        //expect(result).toBeTruthy();
        //expect(result).toBeTruthy();
    });
    it('should return respective element', function(){
        var res = getElement([1,2,3], -1);
        expect(res).toEqual(3);
    });
    });