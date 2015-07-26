import Ember from 'ember';

export default Ember.Object.extend({
    name: '',
    points: [],
    _droppedLow: false,
    _droppedHigh: false,

    calculatedTotal: function() {
        var i, total = 0, scoresLength = this.scores.length, droppedHighCount, sortedAscending;

        sortedAscending = this.scores.sort(function(a,b) {
            return parseFloat(a.points) - parseFloat(b.points);
        });

        for(i = 0; i < scoresLength; i++) {
            Ember.set(sortedAscending[i], '_droppedLow', (i < this.numLowToDrop));
        }

        i = scoresLength;
        droppedHighCount = 0;
        while(i--) {
            Ember.set(sortedAscending[i], '_droppedHigh', (droppedHighCount < this.numHighToDrop));
            droppedHighCount++;
        }

        this.scores.forEach(function(score) {
            if( !score._droppedLow && !score._droppedHigh) {
                total += +score.points;
            }
        });

        return  total;
    }.property('scores.@each.points')
});
