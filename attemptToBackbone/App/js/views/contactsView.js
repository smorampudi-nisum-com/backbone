App.Views.Contacts = Backbone.View.extend({
    template: _.template($('#contacts').html()),
    renderOne: function(contact){
        // var html = this.template();
        // this.$el.html(html);
        var itemView =  new App.Views.contactView({model:contact});
        this.$('.contacts-container').append(itemView.render().$el);
    },
    render: function(){
        var html = this.template();
        this.$el.html(html);
       this.collection.each(this.renderOne ,this);

       return this;
    }
});