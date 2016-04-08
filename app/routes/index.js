import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer')
    });
  },

  actions: {
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    }
  },

  popularQuestions: Ember.computed('questions.answers.length', function(){
    var popQuestions = [];
    var questions = this.get('question');
    if(questions.get('answers').get('length') >= 5){
      popQuestions.push(questions);
    }
    return popQuestions;
  })
});
