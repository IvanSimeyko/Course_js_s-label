/**
 * Created with PyCharm.
 * User: ivan
 * Date: 27.09.15
 * Time: 20:25
 * To change this template use File | Settings | File Templates.
 */

console.log('This would be the main JS file.');

$(document).ready(function() {
    $('#s1').cycle({
    fx:      'scrollLeft',
    speed:    1000,
    timeout:  2000
});
});