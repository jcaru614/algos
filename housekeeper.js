
function HouseKeeper (name, age, yearsExperience, languages) {
    this.name = name;
    this.age = age;
    this.yearsExperience = yearsExperience;
    this.languages = languages;
    this.clean = function () {
        alert("I will clean your house.");
    }
}
