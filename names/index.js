const peopleNames = require("../country/state/city/index");
const getFirstNames = require("../utilities/utils/index");

const getPeopleInCity = (peopleNames) => {
  console.log(getFirstNames(peopleNames));
};

getPeopleInCity(peopleNames);

module.exports = getPeopleInCity;
