import Ember from 'ember';
import ManeuverObject from '../../../objects/maneuver-object';

export default Ember.Route.extend({
    numLowToDrop: 0, // extract these two into a Round object
    numHighToDrop: 0,

    model: function() {
        return {
            maneuvers: [
                ManeuverObject.create({
                    name: 'Maneuver 1',
                    numLowToDrop: 1,
                    numHighToDrop: 1,
                    scores: [
                        { points: +2, _tabIndex: 1 },
                        { points: +5, _tabIndex: 4 },
                        { points: +3, _tabIndex: 7 },
                        { points: +4, _tabIndex: 10 },
                        { points: +1, _tabIndex: 13 }
                    ]
                }),
                ManeuverObject.create({
                    name: 'Maneuver 2',
                    numLowToDrop: 1,
                    numHighToDrop: 1,
                    scores: [
                        { points: +7, _tabIndex: 2 },
                        { points: +6, _tabIndex: 5 },
                        { points: +8, _tabIndex: 8 },
                        { points: +10, _tabIndex: 11 },
                        { points: +9, _tabIndex: 14 }
                    ]
                }),
                ManeuverObject.create({
                    name: 'Maneuver 3',
                    numLowToDrop: 1,
                    numHighToDrop: 1,
                    scores: [
                        { points: +17, _tabIndex: 3 },
                        { points: +16, _tabIndex: 6 },
                        { points: +18, _tabIndex: 9 },
                        { points: +10, _tabIndex: 12 },
                        { points: +19, _tabIndex: 15 }
                    ]
                })

            ]
        };
    }
});
