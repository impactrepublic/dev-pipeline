module.exports = {
  reverseWords: function(str) {
    var arr = str.split (' ')
    var results = []
    arr.forEach(function(element) {
      var rw = element.split('').reverse().join('')
      results.push(rw)
    });
    return results.join(' ')
  }
}