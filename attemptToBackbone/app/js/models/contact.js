ContactManager.Models.Contact = Backbone.Model.extend({
  defaults: {
    name: null,
    tel: null,
    email: null,
    avatar: null
  },
  initialize: function() {
    var img = this.set('avatar', _.random(1, 15) + '.jpg');
    return img;
  }
});
//return ContactManager.Models.Contact;
