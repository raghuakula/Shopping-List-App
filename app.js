/*global $ */
/*eslint no-console: ["log", { allow: ["log"] }] */


$(function() {

    $('#js-shopping-list-form').submit ( function (event) {
      event.preventDefault();
      console.log("adding food");
      var foodToAdd ="";

      foodToAdd = $(event.currentTarget).find('#shopping-list-entry');

      console.log("Adding food: " + foodToAdd.val());
    });


console.log("ready!");

});