var shapePrototype = {
    move: function move (where) {
        if (!this.element) {
            console.error('this.element is empty!');
            return false;
        };
        var style = this.element.style;

        switch(where) {
            case 'up':
                style.top = (parseInt(style.top, 10) - parseInt(style.height, 10)) + 'px';
            break;
            case 'down':
                style.top = (parseInt(style.top, 10) + parseInt(style.height, 10)) + 'px';
            break;
            case 'left':
                style.left = (parseInt(style.left, 10) - parseInt(style.width, 10)) + 'px';
            break;
            default:
                where = 'right';
                style.left = (parseInt(style.left, 10) + parseInt(style.width, 10)) + 'px';
        }
        console.info('Move ' + where);
        return this;
    },
    run: function run (where, times, timeout) {
        times = times || 5;
        timeout = timeout || 1000;
        console.info('Start runing (' + where + '): ' + times + ' times and has timeout - ' + timeout);
        var move = this.move.bind(this),
            runOnce = function runOnce () {
                console.info('runOnce #' + times);
                move(where);
                times = times - 1;
                if (times > 0) {
                    setTimeout(runOnce, timeout);
                };
            };

        runOnce();
    },
    render: function render () {
        if (!this.element) {
            this.init();
        };
        if (r1.element.parentNode !== document.body) {
            document.body.appendChild(this.element);
            console.info('Render div');
        } else {
            console.warn('Div already rendered');
        }
        return this;
    },
    init: function init(options) {
        options = options || {};
        this.element = document.createElement('div');
        var style = this.element.style;
        style.position = 'absolute';
        style.top = options.top || '0px';
        style.left = options.left || '0px';

        style.width = options.width || '50px';
        style.height = options.height || '50px';
        style.background = options.color || 'green';
        console.info('Initialize div');
        return this;
    }
}
function Circle (options) {
    var circle = Object.create(shapePrototype).init(options);
    return circle;
}
var r1 = Circle({
    top: '100px',
    left: '100px'
});

r1.render().run();
r2.render().run('down');

