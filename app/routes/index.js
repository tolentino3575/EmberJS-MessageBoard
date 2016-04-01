import Ember from 'ember';

// var questions = [{
//   id: 1,
//   author: "Erik P.",
//   content: "What should I get for lunch?",
//   notes: "Pls respond quick! I'm hungry!"
// }, {
//   id: 2,
//   author: "Erik C.",
//   content: "What's the temperaure of the sun?",
//   notes: "It's really bright today and I'm sweating more than usual..",
// }, {
//   id: 3,
//   author: "Erik B.",
//   content: "Should I be concerned about the mole on my toe?",
//   notes: "It's huge. Like half dollar big."
// }];

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  }
});
