/***
 * Converts a JSON string into an Apex class
 *
 * @param {string} json
 * @returns {string} generated apex class
 */
exports.fromJSON = function (json) {
  var obj = JSON.parse(json);
  var result = 'public class GeneratedApexClass\n{';

  for (var p in obj) {
    if (obj.hasOwnProperty(p)) {
      switch (typeof obj[p]) {
        case "string":
          result += '\n    public String ' + p + ' { get; set; }';
          break;
        case "boolean":
          result += '\n    public Boolean ' + p + ' { get; set; }';
          break;
        case "number":
          result += obj[p].toString().indexOf('.') >= 0
            ? '\n    public Decimal ' + p + ' { get; set; }'
            : '\n    public Integer ' + p + ' { get; set; }';
          break;
        default:
          break;
      }
    }
  }

  return result + '\n}';
};