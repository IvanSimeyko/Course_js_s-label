

function ParticleModel(config) {
 var $scope = this;
 var MAX_SIZE = 180;
 var MIN_SIZE = 20;
 var MAX_SPEED = 120; // per second
 var MIN_SPEED = 2;
 var MAX_OPACITY = 0.5;
 var MIN_OPACITY = 0.2;
 var MAX_VECTOR = 360;
 var MIN_VECTOR = 0;
 var MAX_LIFE = 20000; // ms
 var MIN_LIFE = 5000;

 var defaults = {
 displayed: false,
 ended: false,
 size: 0,
 x: 0,
 y: 0,
 speed: 0,
 opacity: 1,
 vector: 0,
 domElement: angular.element(document.createElement('div')).addClass('particle'),
 id: undefined, // should be defined in config
 boxSize: {width: 0, height: 0}, // should be defined in config
 header: undefined, // should be defined in config
 controller: undefined // should be defined in config
 };

 $scope.config = angular.extend(defaults, config);

 var rand_range = function(min, max, round) {
 if(round === undefined) {
 return Math.floor(Math.random() * (max - min) + min);
 } else if (round === false) {
 return Math.random() * (max - min) + min;
 }
 };

 $scope.init = function() {
 $scope.config.size = rand_range(MIN_SIZE, MAX_SIZE);
 $scope.config.speed = rand_range(MIN_SPEED, MAX_SPEED);
 $scope.config.x = rand_range(0, $scope.config.boxSize.width);
 $scope.config.y = rand_range(0, $scope.config.boxSize.height);
 $scope.config.opacity = rand_range(MIN_OPACITY, MAX_OPACITY, false);
 if($scope.config.size > 100) {
 $scope.config.opacity = rand_range(0.01, 0.2, false);
 }
 $scope.config.blur = $scope.config.size / 8;
 $scope.config.vector = rand_range(MIN_VECTOR, MAX_VECTOR);
 $scope.config.xspeed = Math.cos($scope.config.vector) * $scope.config.speed;
 $scope.config.yspeed = Math.sin($scope.config.vector) * $scope.config.speed;
 var createTime = new Date().getTime();
 var expires = new Date().getTime() + rand_range(MIN_LIFE, MAX_LIFE);
 $scope.config.life = expires - createTime;

 function particleEnd() {
 if($scope.config.displayed === false) {
 $scope.config.displayed = true;
 return;
 }
 if($scope.config.ended === false) {
 $scope.config.domElement.css({
 transition: 'opacity 1s linear',
 WebkitTransition: 'opacity 1s linear',
 MozTransition: 'opacity 1s linear',
 });
 var style1 = document.querySelector('style#style-' + $scope.config.id);
 style1.innerHTML = '.animated-' + $scope.config.id + ' { opacity: 0 !important; transform: translate3d(' + $scope.config.x + 'px, ' + $scope.config.y + 'px, 0px) !important; -webkit-transform: translate3d(' + $scope.config.x + 'px, ' + $scope.config.y + 'px, 0px) !important; -moz-transform: translate3d(' + $scope.config.x + 'px, ' + $scope.config.y + 'px, 0px) !important; }';
 $scope.config.ended = true;
 return;
 }

 var style = document.querySelector('style#style-' + $scope.config.id);
 document.getElementsByTagName('head')[0].removeChild(style);
 $scope.config.ended = true;

 $scope.config.domElement[0].parentNode.removeChild($scope.config.domElement[0]);

 var p = new ParticleModel({
 id: $scope.config.controller.numParticles,
 boxSize: {
 width: $scope.config.header[0].offsetWidth,
 height: $scope.config.header[0].offsetHeight
 },
 header: $scope.config.header,
 controller: $scope.config.controller
 }).init();

 $scope.config.controller.numParticles++;
 $scope.config.header.append(p.config.domElement);
 }

 $scope.config.domElement[0].addEventListener('webkitTransitionEnd', particleEnd);
 $scope.config.domElement[0].addEventListener('transitionend', particleEnd);

 $scope.updateDOMStyles();

 $scope.config.x += Math.floor($scope.config.xspeed * $scope.config.life / 1000);
 $scope.config.y += Math.floor($scope.config.yspeed * $scope.config.life / 1000);

 $scope.updateXY();

 return $scope;
 };

 $scope.updateDOMStyles = function() {
 $scope.config.domElement.css({
 width: $scope.config.size + 'px',
 height: $scope.config.size + 'px',
 borderRadius: $scope.config.size/2 + 'px',
 webkitFilter: 'blur(' + $scope.config.blur + 'px)',
 filter: 'blur(' + $scope.config.blur + 'px)',
 transition: 'transform ' + $scope.config.life/1000 + 's linear, opacity 1s linear',
 WebkitTransition: '-webkit-transform ' + $scope.config.life/1000 + 's linear, opacity 1s linear',
 MozTransition: '-moz-transform ' + $scope.config.life/1000 + 's linear, opacity 1s linear',
 transform: 'translate3d(' + $scope.config.x + 'px, ' + $scope.config.y + 'px, 0px) scale3d(1,1,1)',
 webkitTransform: 'translate3d(' + $scope.config.x + 'px, ' + $scope.config.y + 'px, 0px) scale3d(1,1,1)',
 MozTransform: 'translate3d(' + $scope.config.x + 'px, ' + $scope.config.y + 'px, 0px) scale3d(1,1,1)'
 });
 };

 $scope.updateXY = function() {
 var className = 'animated-' + $scope.config.id;
 var style = document.createElement('style');
 style.type = 'text/css';
 style.id = 'style-' + $scope.config.id;
 style.innerHTML = '.' + className + ' { opacity: ' + $scope.config.opacity + ' !important; transform: translate3d(' + $scope.config.x + 'px, ' + $scope.config.y + 'px, 0px) scale3d(1,1,1) !important; -webkit-transform: translate3d(' + $scope.config.x + 'px, ' + $scope.config.y + 'px, 0px) scale3d(1,1,1) !important; -moz-transform: translate3d(' + $scope.config.x + 'px, ' + $scope.config.y + 'px, 0px) scale3d(1,1,1) !important; }';
 document.getElementsByTagName('head')[0].appendChild(style);
 setTimeout(function() {
 $scope.config.domElement.addClass(className);
 }, 100);
 };

 return $scope;
 }

 function ParticleController(config) {
 var $scope = this;
 $scope.numParticles = 0;

 var defaults = {
 numberOfParticles: 0, // should be defined in config;
 header: undefined // should be defined in config
 };

 $scope.config = angular.extend(defaults, config);

 $scope.init = function() {
 console.log($scope.config.header);
 for(var i = 0; i < $scope.config.numberOfParticles; i++) {
 var p = new ParticleModel({
 id: i,
 boxSize: {
 width: $scope.config.header[0].offsetWidth,
 height: $scope.config.header[0].offsetHeight
 },
 header: $scope.config.header,
 controller: $scope
 }).init();

 $scope.numParticles++;
 $scope.config.header.append(p.config.domElement);
 }
 };

 return $scope;
 }

var pc = new ParticleController({
 numberOfParticles: 20,
 header: angular.element(document.querySelector('.header'))
 }).init();
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
133
134
135
136
137
138
139
140
141
142
143
144
145
146
147
148
149
150
151
152
153
154
155
156
157
158
159
160
161
162
163
164
165
166
167
168
169
170
171
172
173
function ParticleModel(config) {
 var $scope = this;
 var MAX_SIZE = 180;
 var MIN_SIZE = 20;
 var MAX_SPEED = 120; // per second
 var MIN_SPEED = 2;
 var MAX_OPACITY = 0.5;
 var MIN_OPACITY = 0.2;
 var MAX_VECTOR = 360;
 var MIN_VECTOR = 0;
 var MAX_LIFE = 20000; // ms
 var MIN_LIFE = 5000;

 var defaults = {
 displayed: false,
 ended: false,
 size: 0,
 x: 0,
 y: 0,
 speed: 0,
 opacity: 1,
 vector: 0,
 domElement: angular.element(document.createElement('div')).addClass('particle'),
 id: undefined, // should be defined in config
 boxSize: {width: 0, height: 0}, // should be defined in config
 header: undefined, // should be defined in config
 controller: undefined // should be defined in config
 };

 $scope.config = angular.extend(defaults, config);

 var rand_range = function(min, max, round) {
 if(round === undefined) {
 return Math.floor(Math.random() * (max - min) + min);
 } else if (round === false) {
 return Math.random() * (max - min) + min;
 }
 };

 $scope.init = function() {
 $scope.config.size = rand_range(MIN_SIZE, MAX_SIZE);
 $scope.config.speed = rand_range(MIN_SPEED, MAX_SPEED);
 $scope.config.x = rand_range(0, $scope.config.boxSize.width);
 $scope.config.y = rand_range(0, $scope.config.boxSize.height);
 $scope.config.opacity = rand_range(MIN_OPACITY, MAX_OPACITY, false);
 if($scope.config.size > 100) {
 $scope.config.opacity = rand_range(0.01, 0.2, false);
 }
 $scope.config.blur = $scope.config.size / 8;
 $scope.config.vector = rand_range(MIN_VECTOR, MAX_VECTOR);
 $scope.config.xspeed = Math.cos($scope.config.vector) * $scope.config.speed;
 $scope.config.yspeed = Math.sin($scope.config.vector) * $scope.config.speed;
 var createTime = new Date().getTime();
 var expires = new Date().getTime() + rand_range(MIN_LIFE, MAX_LIFE);
 $scope.config.life = expires - createTime;

 function particleEnd() {
 if($scope.config.displayed === false) {
 $scope.config.displayed = true;
 return;
 }
 if($scope.config.ended === false) {
 $scope.config.domElement.css({
 transition: 'opacity 1s linear',
 WebkitTransition: 'opacity 1s linear',
 MozTransition: 'opacity 1s linear',
 });
 var style1 = document.querySelector('style#style-' + $scope.config.id);
 style1.innerHTML = '.animated-' + $scope.config.id + ' { opacity: 0 !important; transform: translate3d(' + $scope.config.x + 'px, ' + $scope.config.y + 'px, 0px) !important; -webkit-transform: translate3d(' + $scope.config.x + 'px, ' + $scope.config.y + 'px, 0px) !important; -moz-transform: translate3d(' + $scope.config.x + 'px, ' + $scope.config.y + 'px, 0px) !important; }';
 $scope.config.ended = true;
 return;
 }

 var style = document.querySelector('style#style-' + $scope.config.id);
 document.getElementsByTagName('head')[0].removeChild(style);
 $scope.config.ended = true;

 $scope.config.domElement[0].parentNode.removeChild($scope.config.domElement[0]);

 var p = new ParticleModel({
 id: $scope.config.controller.numParticles,
 boxSize: {
 width: $scope.config.header[0].offsetWidth,
 height: $scope.config.header[0].offsetHeight
 },
 header: $scope.config.header,
 controller: $scope.config.controller
 }).init();

 $scope.config.controller.numParticles++;
 $scope.config.header.append(p.config.domElement);
 }

 $scope.config.domElement[0].addEventListener('webkitTransitionEnd', particleEnd);
 $scope.config.domElement[0].addEventListener('transitionend', particleEnd);

 $scope.updateDOMStyles();

 $scope.config.x += Math.floor($scope.config.xspeed * $scope.config.life / 1000);
 $scope.config.y += Math.floor($scope.config.yspeed * $scope.config.life / 1000);

 $scope.updateXY();

 return $scope;
 };

 $scope.updateDOMStyles = function() {
 $scope.config.domElement.css({
 width: $scope.config.size + 'px',
 height: $scope.config.size + 'px',
 borderRadius: $scope.config.size/2 + 'px',
 webkitFilter: 'blur(' + $scope.config.blur + 'px)',
 filter: 'blur(' + $scope.config.blur + 'px)',
 transition: 'transform ' + $scope.config.life/1000 + 's linear, opacity 1s linear',
 WebkitTransition: '-webkit-transform ' + $scope.config.life/1000 + 's linear, opacity 1s linear',
 MozTransition: '-moz-transform ' + $scope.config.life/1000 + 's linear, opacity 1s linear',
 transform: 'translate3d(' + $scope.config.x + 'px, ' + $scope.config.y + 'px, 0px) scale3d(1,1,1)',
 webkitTransform: 'translate3d(' + $scope.config.x + 'px, ' + $scope.config.y + 'px, 0px) scale3d(1,1,1)',
 MozTransform: 'translate3d(' + $scope.config.x + 'px, ' + $scope.config.y + 'px, 0px) scale3d(1,1,1)'
 });
 };

 $scope.updateXY = function() {
 var className = 'animated-' + $scope.config.id;
 var style = document.createElement('style');
 style.type = 'text/css';
 style.id = 'style-' + $scope.config.id;
 style.innerHTML = '.' + className + ' { opacity: ' + $scope.config.opacity + ' !important; transform: translate3d(' + $scope.config.x + 'px, ' + $scope.config.y + 'px, 0px) scale3d(1,1,1) !important; -webkit-transform: translate3d(' + $scope.config.x + 'px, ' + $scope.config.y + 'px, 0px) scale3d(1,1,1) !important; -moz-transform: translate3d(' + $scope.config.x + 'px, ' + $scope.config.y + 'px, 0px) scale3d(1,1,1) !important; }';
 document.getElementsByTagName('head')[0].appendChild(style);
 setTimeout(function() {
 $scope.config.domElement.addClass(className);
 }, 100);
 };

 return $scope;
 }

 function ParticleController(config) {
 var $scope = this;
 $scope.numParticles = 0;

 var defaults = {
 numberOfParticles: 0, // should be defined in config;
 header: undefined // should be defined in config
 };

 $scope.config = angular.extend(defaults, config);

 $scope.init = function() {
 console.log($scope.config.header);
 for(var i = 0; i < $scope.config.numberOfParticles; i++) {
 var p = new ParticleModel({
 id: i,
 boxSize: {
 width: $scope.config.header[0].offsetWidth,
 height: $scope.config.header[0].offsetHeight
 },
 header: $scope.config.header,
 controller: $scope
 }).init();

 $scope.numParticles++;
 $scope.config.header.append(p.config.domElement);
 }
 };

 return $scope;
 }

var pc = new ParticleController({
 numberOfParticles: 20,
 header: angular.element(document.querySelector('.header'))
 }).init();