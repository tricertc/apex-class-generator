var ApexClass = require('./models/ApexClass');
var ApexProperty = require('./models/ApexProperty');

/***
 * Converts a JSON string into an Apex class
 *
 * @param {string} json
 * @returns {string} generated apex class
 */
exports.fromJSON = function (json) {
  var obj = JSON.parse(json);
  var apex = new ApexClass();

  for (var p in obj) {
    if (obj.hasOwnProperty(p)) {
      switch (typeof obj[p]) {
        case "string":
          apex.addProperty(new ApexProperty(ApexProperty.String, p));
          break;
        case "boolean":
          apex.addProperty(new ApexProperty(ApexProperty.Boolean, p));
          break;
        case "number":
          var type = obj[p].toString().indexOf('.') >= 0
            ? ApexProperty.Decimal
            : ApexProperty.Integer;
          apex.addProperty(new ApexProperty(type, p));
          break;
        default:
          break;
      }
    }
  }

  return apex.toString();
};