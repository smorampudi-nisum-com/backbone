

// describe('contact model', function(){
//     describe('when instantiated', function(){
//         it('should exhibit attributes', function(){
//             var contact = new ContactManager.Models.Contact({
//                 name: 'santhu'
//             });
//             expect(contact.get('name')).toEqual('santhu');
//         });
//     });
// });
// describe('', function(){
//  var MockData = {
//      name: 'santhu',
//      tel: 1234566,
//      email: 's@me.com'
//  };
//  var mockPostData = {
//     success: true
//  };
// it('',function(){
// var coffee =  new ContactManager.Models.Contact();
// expect(coffee).toBeDefined();
// expect(MockData).toBeDefined();
// expect(mockPostData).toBeDefined();
// });
// });

describe('A contact', function(){
    let contact;
        contact =  new ContactManager.Models.Contact();
    it('should exist', function(){
        expect(ContactManager.Models.Contact).toBeDefined();
    });
    it('should contain some default values', function(){
        // let contact;
        // contact =  new ContactManager.Models.Contact();
        expect(contact.get('name')).toEqual(null);
        expect(contact.get('tel')).toEqual(null);
        expect(contact.get('email')).toEqual(null);
        //expect(contact.get('avatar')).toEqual(random+ '.jpg');
        // expect(contact).toBeDefined();
        
        // var mockdata = {
        //     name: 'santhu',
        //     tel:'',
        //     email:''
        // };
        // expect(mockdata).toBeDefined();
    });
    it('should check whether avatar is a random image', function(){
        var img =  _.random(1, 15) + '.jpg';
        //spyOn(Math, 'random').and.returnValue(1);
        //expect(contact.get('avatar')).not.toEqual(null);
        console.log(img);
        expect(contact.get('avatar')).toEqual(img);
    });
    it('should check whether avatar is a not null generates an image or not', function(){
        expect(contact.get('avatar')).not.toEqual(null);
    });
});

