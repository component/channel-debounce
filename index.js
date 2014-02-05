module.exports = function(time) {
  var datesFromA = {};
  var datesFromB = {};
  return function (evt, next) {
    var now = new Date();
    var dates = (evt.source == this.a) ? datesFromA : datesFromB;
    if ((typeof dates[evt.name]) != 'undefined' && ((now - dates[evt.name]) < time)) {
      return;
    } else {
      dates[evt.name] = now;
      next();
    }
  }
}
