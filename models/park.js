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
    let totalVisitors = 0
    for (const dinosaur of this.dinosaurs) {
        totalVisitors += dinosaur.guestsAttractedPerDay
    }
    return totalVisitors
}

Park.prototype.totalYearlyVisitors = function() {
    return this.totalVisitors() * 365
}

Park.prototype.totalRevenue = function() {
    return this.totalYearlyVisitors() * this.ticketPrice
}

Park.prototype.removeDinosaurBySpecies = function (species) {
    for (let i = this.dinosaurs.length - 1; i >= 0; i--) {
        if (this.dinosaurs[i].species == species) {
            this.dinosaurs.splice(i, 1)
        }
    }
}

module.exports = Park;