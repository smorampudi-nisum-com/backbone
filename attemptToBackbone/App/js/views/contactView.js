App.Views.contactView =  Backbone.View.extend({
    tagName:'li',
    className: 'media col-md-6 col-lg-4',
    template: _.template($('#contact').html()),
    
    initialize: function(){
        this.render();
    },
    render: function(){
        // var h1Element = '<h1>' + this.model.get('name')+'</h1>';
        // this.$el.html(h1Element);
        var html = this.template(this.model.toJSON());
        this.$el.append(html);
        return this;
    }
});