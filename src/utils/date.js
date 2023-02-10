const moment = require("moment");
/**
 * Parses date in DD-MM-YYYY format and returns it, otherwise null
 * @param  {[string]} dateString string to parse
 * @return {[Date|null]}     parsed string or if invalid null
 */
function parseDate(dateString) {
  if (!dateString) return null;
  let regEx = /^\d{4}-(0[1-9]|1[0-2])-\d{2}$/;
  if (!dateString.match(regEx)) return null; // Invalid format
  let date = moment(dateString, "YYYY-MM-DD");
  return date.toDate();
}
module.exports = parseDate;
