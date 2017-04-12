/**
 * Wrapper for `navigator.geolocation.getCurrentPosition` to return `Promise`.
 * Also rejects if browser doesn't support geolocation.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
 * @param options {Object} An optional PositionOptions object.
 * @return {Promise}
 */
module.exports = function geolocateme(options) {
  return new Promise(function(resolve, reject) {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    } else {
      reject(new Error('Geolocation not supported'));
    }
  });
};
