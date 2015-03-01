import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("index", {path: "/"});
  this.resource("word", {path: "/word/:word_id"}, function() {
    this.route("proposals");
    this.route("new-meaning");
  });
  this.route("login");
  this.route("user", {}, function() {
    this.route("index", {path: "/:user_id"}, function() {
      this.route("proposals");
      this.route("activity");
    });
  });
  this.route("users", {}, function() {
    this.route("index");
    this.route("forgot-password");
    this.route("reset-password");
    this.route("new");
    this.route("login");
  })
  this.resource("words", function() {
    this.route("new");
    this.route("random");
  });
  this.resource("proposals", function() {
    this.route("random");
  });
  this.resource("proposal", {path: "/proposal/:proposal_id"}, function() {
    this.route("new-word");
    this.route("new-meaning");
    this.route("meaning-change");
  });

  this.route("info", function() {
    this.route("faqs");
    this.route("guidelines");
    this.route("get-started");
    this.route("legal");
  });

  //this.resource("submit-proposal");

});

export default Router;
