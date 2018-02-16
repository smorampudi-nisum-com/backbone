describe('A page with backbone', function(){
    it('should have access to underscore', function(){
        expect(window._).toBeDefined();
        expect(window._.VERSION).toBeDefined();
    });
    it('should have access to jquery', function(){
        expect(window.jQuery).toBeDefined();
    });
   it('should have access to Backbone', function(){
       var Backbone = window.Backbone;
       expect(Backbone).toBeDefined();
    //expect(window.backbone.Model).toBeDefined();
    //expect(window.backbone.Collection).toBeDefined();
    //expect(window.backbone.View).toBeDefined();
   });
});

describe('A contact Manager', function(){
    it('A namespace should exist', function(){
        expect(window.ContactManager).toBeDefined();
    });
    it('A model namespace should be defined', function(){
        expect(window.ContactManager.Models).toBeDefined();
    });
    it('A collection namespace should be defined', function(){
        expect(window.ContactManager.Collections).toBeDefined();
    });
    it('A Views namespace should be defined', function(){
        expect(window.ContactManager.Views).toBeDefined();
    });
});




