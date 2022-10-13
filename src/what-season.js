const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

function getSeason(date) {
  const spring = 'spring';
  const summer = 'summer';
  const autumn  = 'autumn';
  const winter = 'winter';
  
  
  for(i=0; i<date.length; i++) {
    if(typeof date === 'object') {
     console.log (spring)
   }
  }

  if(date === null) {
    alert('Unable to determine the time of year!');
  }

  else {
    alert('Invalid date!');
    
  }

}

module.exports = {
  getSeason
};
