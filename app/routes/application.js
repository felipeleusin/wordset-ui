import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
import ENV from '../config/environment';
/* global ga */
/* global mixpanel */

export default Ember.Route.extend(ApplicationRouteMixin).extend({
  activate: function() {
    return this.store.find('word_list');
  },
  notifyGoogleAnalytics: function() {

  }.on('didTransition'),
  notifyMixpanel: function(){

    console.log(this.get("url"))
  }.on('didTransition'),
  actions: {
    willTransition: function() {
      this.controller.set("showMenu", false);
      Ember.$(document).attr('title', 'Wordset – the Collaborative Dictionary');
    },
    didTransition: function(paths) {
      if (ENV.environment === 'production') {
        mixpanel.track("pageview", {"url": window.location.pathname });
        ga('send', 'pageview', {
          'page': window.location.href,
          'title': document.title,
        });
      }
    }
  }
});
