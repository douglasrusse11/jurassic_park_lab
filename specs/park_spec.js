const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;

  beforeEach(function () {
    park = new Park('Jurassic Park', 30, [])
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 30);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function(){
    dinosaur = new Dinosaur("Triceratops", "herbivore", 90)
    park.addDinosaur(dinosaur)
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur])
  });

  it('should be able to remove a dinosaur from its collection', function(){
    dinosaur1 = new Dinosaur("Triceratops", "herbivore", 90);
    dinosaur2 = new Dinosaur("Velociraptor", "carnivore", 200);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.removeDinosaur(dinosaur1);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur2]);

  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    dinosaur1 = new Dinosaur("Triceratops", "herbivore", 90);
    dinosaur2 = new Dinosaur("Velociraptor", "carnivore", 200);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    const actual = park.mostVisitors();
    assert.strictEqual(actual, dinosaur2);
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    dinosaur1 = new Dinosaur("Triceratops", "herbivore", 90);
    dinosaur2 = new Dinosaur("Velociraptor", "carnivore", 200);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    const actual = park.allOfSpecies("Velociraptor");
    assert.deepStrictEqual(actual, [dinosaur2]);
  });

  it('should be able to calculate the total number of visitors per day', function(){
    dinosaur1 = new Dinosaur("Triceratops", "herbivore", 90);
    dinosaur2 = new Dinosaur("Velociraptor", "carnivore", 200);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    const actual = park.totalVisitors();
    assert.deepStrictEqual(actual, 290);
  });

  it('should be able to calculate the total number of visitors per year', function(){
    dinosaur1 = new Dinosaur("Triceratops", "herbivore", 90);
    dinosaur2 = new Dinosaur("Velociraptor", "carnivore", 200);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    const actual = park.totalYearlyVisitors();
    assert.deepStrictEqual(actual, 105850);
  });

  it('should be able to calculate total revenue for one year', function(){
    dinosaur1 = new Dinosaur("Triceratops", "herbivore", 90);
    dinosaur2 = new Dinosaur("Velociraptor", "carnivore", 200);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    const actual = park.totalRevenue();
    assert.deepStrictEqual(actual, 3175500);
  });

  it('should be able to remove dinosaurs by species', function () {
    dinosaur1 = new Dinosaur("Triceratops", "herbivore", 90);
    dinosaur2 = new Dinosaur("Velociraptor", "carnivore", 200);
    dinosaur3 = new Dinosaur("T Rex", "carnivore", 150);
    dinosaur4 = new Dinosaur("Velociraptor", "carnivore", 200);
    dinosaur5 = new Dinosaur("Triceratops", "carnivore", 200);
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    park.addDinosaur(dinosaur4)
    park.addDinosaur(dinosaur5)
    park.removeDinosaurBySpecies("Velociraptor")
    const actual = park.dinosaurs
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur3, dinosaur5])
  });

});
