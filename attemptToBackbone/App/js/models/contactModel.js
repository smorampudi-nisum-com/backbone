App.models.contactModel = Backbone.Model.extend({
    defaults:{
       name: null,
       contactNo: null,
       email: null,
       myIcon: null
    },
    initialize: function(){
        this.set('myIcon', _.random(1,15) + '.JPG');
    }
});