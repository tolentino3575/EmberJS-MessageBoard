import Ember from 'ember';

export function questionPopularity(params/*, hash*/) {
  var question = params[0];

  if(question.get('answers').get('length') > 5) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span> <span class="glyphicon glyphicon-thumbs-up"></span>');
  } else if((question.get('answers').get('length') <= 5) && (question.get('answers').get('length') >= 3)) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-thumbs-up"></span>');
  } else if(question.get('answers').get('length') < 3) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-thumbs-down"></span');
  }

}
export default Ember.Helper.helper(questionPopularity);
