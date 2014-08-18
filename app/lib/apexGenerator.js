var ApexClass = require('./models/ApexClass');
var ApexProperty = require('./models/ApexProperty');

/***
 * Converts a JSON string into an Apex class
 *
 * @param {string} json
 * @returns {ApexClass} generated apex class
 */
exports.fromJSON = function (json) {
  var obj = JSON.parse(json);
  var apex = new ApexClass();

  buildApex(apex, null, obj);

  return apex;
};

function buildApex(parent, child, obj) {
  var updatable = (child || parent);
  for (var p in obj) {
    if (obj.hasOwnProperty(p)) {
      switch (typeof obj[p]) {
        case 'string':
          updatable.addProperty(new ApexProperty(ApexProperty.String, p));
          break;
        case 'number':
          if (obj[p].toString().indexOf('.') >= 0) {
            updatable.addProperty(new ApexProperty(ApexProperty.Decimal, p));
          }
          else {
            updatable.addProperty(new ApexProperty(ApexProperty.Integer, p));
          }
          break;
        case 'boolean':
          updatable.addProperty(new ApexProperty(ApexProperty.Boolean, p));
          break;
        case 'object':
          var className = p + 'Class';
          var subClass = new ApexClass(className, true);
          buildApex(parent, subClass, obj[p]);
          parent.addProperty(new ApexProperty(className, p));
          parent.addClass(subClass);
          break;
        default:
          break;
      }
    }
  }
}