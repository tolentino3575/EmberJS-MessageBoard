import Ember from 'ember';

export default Ember.Component.extend({
  fullTitle: Ember.computed('question.title', 'question.author', function(){
    return this.get('question.title') + ' by ' + this.get('question.author');
  })
});
