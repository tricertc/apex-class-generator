var eol = require('os').EOL;

/***
 * Converts a JSON string into an Apex class
 *
 * @param {string} json
 * @returns {string} generated apex class
 */
exports.fromJSON = function (json) {
  var obj = JSON.parse(json);
  var result = 'public class GeneratedApexClass' + eol + '{';

  for (var p in obj) {
    if (obj.hasOwnProperty(p)) {
      switch (typeof obj[p]) {
        case "string":
          result += eol + '    public String ' + p + ' { get; set; }';
          break;
        case "boolean":
          result += eol + '    public Boolean ' + p + ' { get; set; }';
          break;
        case "number":
          result += obj[p].toString().indexOf('.') >= 0
            ? eol + '    public Decimal ' + p + ' { get; set; }'
            : eol + '    public Integer ' + p + ' { get; set; }';
          break;
        default:
          break;
      }
    }
  }

  return result + eol + '}';
};