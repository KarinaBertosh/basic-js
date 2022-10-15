const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {

  let teamName = [];

  if (members && Array.isArray(members) && members.length) {
    for (i = 0; i < members.length; i++) {
      if ((typeof members[i] === 'string' && members[i].length)) {
        // return false;
        teamName.push(members[i].trim()[0]);
      }
    }
    return teamName
      .sort((a, b) => {
        if (a.toUpperCase() < b.toUpperCase()) { return -1; }
        if (a.toUpperCase() > b.toUpperCase()) { return 1; }
        return 0;
      })
      .join('')
      .toUpperCase();
  }
  else {
    return false;
  }
}

module.exports = {
  createDreamTeam
};
