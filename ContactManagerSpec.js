describe('A page with backbone', function(){
    it('should have access to underscore', function(){
        expect(window._).toBeDefined();
        expect(window._.VERSION).toBeDefined();
    });
    it('should have access to jquery', function(){
        expect(window.jQuery).toBeDefined();
    });
   it('should have access to Backbone', function(){
    expect(window.backbone).toBeDefined();
    expect(window.backbone.Model).toBeDefined();
    expect(window.backbone.Collection).toBeDefined();
    expect(window.backbone.View).toBeDefined();
   });
});