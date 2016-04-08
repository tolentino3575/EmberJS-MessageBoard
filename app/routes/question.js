import Ember from 'ember';

export default Ember.Route.extend({
  favoritedQuestions: Ember.inject.service(),

  model(params) {
    return this.store.findRecord('question', params.question_id);
  },

  actions: {
    favoriteQuestion(question) {
      if(confirm("Favorited!")){
        this.get('favoritedQuestions').add(question);
        this.transitionTo('index');
      }
    },

    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function(){
        return question.save();
      });
    },
    updateQuestion(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
    },
    deleteQuestion(question) {
      if(confirm("WIPE THIS QUESTION OFF THE FACE OF THE INTERENT")){
        var rental_deletions = question.get('answers').map(function(answer) {
          return answer.destroyRecord();
        });
        Ember.RSVP.all(rental_deletions).then(function(){
          return question.destroyRecord();
        });
        this.transitionTo('index');
      }
    }
  }
});
