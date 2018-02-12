//main namespace

window.App = {
    Models: {},
    Collections: {},
    Views: {},
    start: function() {
        alert('Contact Manager Started');
        var contactsView = new ApplicationCache.Viewsc.ontactsView({
            collection: contacts
        });
        $('.main-container').html(contactsView.render().$el);
    }
    
};


  