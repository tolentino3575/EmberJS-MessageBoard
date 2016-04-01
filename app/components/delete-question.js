import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteQuestion(question) {
      this.sendAction('deleteQuestion', question);
    }
  }
});
