/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Kraken-Weather\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-SunHalf' : '&#xe000;',
			'icon-Sun' : '&#xe001;',
			'icon-SnowLight' : '&#xe002;',
			'icon-SnowHeavy' : '&#xe003;',
			'icon-Sleet' : '&#xe004;',
			'icon-RainLight' : '&#xe005;',
			'icon-RainHeavy' : '&#xe006;',
			'icon-MoonFull' : '&#xe007;',
			'icon-MoonBehindCLoud' : '&#xe008;',
			'icon-Lightning' : '&#xe009;',
			'icon-HailLight' : '&#xe00a;',
			'icon-HailHeavy' : '&#xe00b;',
			'icon-CloudPrecip' : '&#xe00c;',
			'icon-Cloud' : '&#xe00d;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};