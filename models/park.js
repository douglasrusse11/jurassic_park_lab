const Park = function (name, ticketPrice, dinosaurs) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = dinosaurs;
};

Park.prototype.addDinosaur = function (dinosaur) {
    this.dinosaurs.push(dinosaur)
}

Park.prototype.removeDinosaur = function (dinosaur){
    index = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(index, 1);
}
Park.prototype.mostVisitors = function () {
    this.dinosaurs.reverse((dinosaur) => {return dinosaur.guestsAttractedPerDay})
    return this.dinosaurs[0]
}

Park.prototype.allOfSpecies = function(species) {
    allOfSpecies = []
    for (let dinosaur of this.dinosaurs) {
        if (dinosaur.species == species)
        {allOfSpecies.push(dinosaur)}
    }

    return allOfSpecies
}

Park.prototype.totalVisitors = function() {
    return this.dinosaurs.reduce((previous, current) => previous.guestsAttractedPerDay + current.guestsAttractedPerDay )
}

Park.prototype.totalYearlyVisitors = function() {
    return this.totalVisitors() * 365
}

Park.prototype.totalRevenue = function() {
    return this.totalYearlyVisitors() * this.ticketPrice
}

Park.prototype.removeDinosaurBySpecies = function (species) {
    this.dinosaurs = this.dinosaurs.filter(dinosaur => dinosaur.species != species)
}

Park.prototype.diets = function () {
    let diet = {'carnivore': 0, 'herbivore': 0, 'omnivore': 0}
    for (dinosaur of this.dinosaurs) {
        diet[dinosaur.diet]++
    }
    return diet
}

module.exports = Park;