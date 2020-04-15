const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
    return this.journeys.map(journey => journey.startLocation)
};

Traveller.prototype.getJourneyEndLocations = function () {
    return this.journeys.map(journey => journey.endLocation)
};

Traveller.prototype.getJourneysByTransport = function (transport) {
    return this.journeys.filter(journey => journey.transport == transport)
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
    return this.journeys.filter(journey => journey.distance >minDistance)
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
    return this.journeys.reduce((journeyTotal,journey)=>journeyTotal + journey.distance,0)
};

Traveller.prototype.getUniqueModesOfTransport = function () {
    result =[]
    setKeys =  new Set(this.journeys.map(journey => journey.transport))
    setKeys.forEach(value => result.push(value))
    return result
    // return Object.keys(setKeys).map((key,value) => value)
};


module.exports = Traveller;
