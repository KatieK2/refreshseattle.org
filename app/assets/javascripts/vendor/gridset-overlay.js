// Gridset Overlay JS

gs = {

	init: function () {
		
		if (window.location.href.match('gridset=show')) gs.show();
	
		gs.bind(document, 'keydown', function (e) { 
		
			if (!e) var e = window.event;
		
			if(e.metaKey || e.ctrlKey) {
				
				switch (e.which || e.keyCode) {
					case 71:
					
						var gw = document.querySelectorAll('.gridsetoverlaywrap, #gridsetoverlaystyles, #gridscreenwidthwrap');
					
						if (gw.length == 0) gs.show();
						else { window.location.href = window.location.href.replace('?gridset=show', '') }
						
						gs.prevent(e);
						break;
						
				}
				
			}
		
		
		});
	
	},
	
	width: function () {
		
		var swv = document.getElementById('gridscreenwidthval');
		if (swv) swv.innerHTML = window.innerWidth + 'px';
		
	},

	show: function () {
	
		var b = document.getElementsByTagName('body')[0],
				gridareas = document.querySelectorAll('[class*=-showgrid]'),
				areacount = gridareas.length,
				wrapper = document.querySelectorAll('.wrapper'),
			
				styles = '.gridsetoverlaywrap{padding:0 !important;display:block;position:absolute;top:0;left:0;width:100%;height:100%;z-index:10000;pointer-events:none;}.gridsetnoareas .gridsetoverlaywrap{position:fixed;}.gridwrap{padding:0 !important;display:block;position:absolute;top:0;left:0;width:100%;height:100%;font-family:Helvetica, Arial, sans-serif !important;}.gridoverlay{padding:0 !important;position:relative;height:100%;overflow:hidden !important;background:none !important;}.gridoverlay .gridset{padding:0 !important;position:absolute;width:100%;height:100%;top:0;left:0;opacity:0.8; display:block;}.gridoverlay .gridset div{padding:0;text-align:left;font-size:10px !important;border:1px solid #FFD800 !important;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;height:100%;}.gridoverlay .gridset > div{border:none !important;height:100%;position:absolute;top:0;left:0;width:100%;}.gridoverlay div small{width:100%;display:block;text-align:center;font-weight:400 !important;letter-spacing: 1px !important;padding-top:0 !important;text-transform:none !important;height:22px !important;line-height:22px !important;text-style:normal !important;border-bottom:1px solid #FFD800 !important;color:#333 !important;background-color:#FFF79F !important;}.gridsetnoareas .gridoverlay .gridset > div:nth-child(2){padding-top:23px !important;}.gridsetnoareas .gridoverlay .gridset > div:nth-child(2) small{border-bottom:1px dashed #FFD800 !important;}.gridsetnoareas .gridoverlay .gridset > div:nth-child(2) > div{border:1px dashed #FFD800 !important;}.gridsetnoareas .gridoverlay .gridset > div:nth-child(3){padding-top:45px !important;}.gridsetnoareas .gridoverlay .gridset > div:nth-child(3) small{border-bottom:1px dotted #FFD800 !important;}.gridsetnoareas .gridoverlay .gridset > div:nth-child(3) > div{border:1px dotted #FFD800 !important;}.gridsetnoareas .gridoverlay .gridset > div:nth-child(4){padding-top:67px !important;}.gridsetnoareas .gridoverlay .gridset > div:nth-child(4) small{border-bottom:1px double #FFD800 !important;}.gridsetnoareas .gridoverlay .gridset > div:nth-child(4) > div{border:1px double #FFD800 !important;}.gridsetoverlaywrap .noshow{display:none;}#gridscreenwidthwrap{margin:0 !important;padding:0 !important;display:none;width:100%;position:fixed !important;z-index:10000 !important;bottom:0 !important;left:0 !important;height:30px !important;opacity:0.95;border-top:1px solid #FFD800 !important;color:#333;background-color:#FFF79F !important;font-family:Helvetica, Arial, sans-serif !important;}#gridscreenwidth{margin:0 !important;display:block;width:100% !important;max-width:none !important;text-align:center !important;font-size:12px;line-height:1;padding-top:8px !important;}#gridscreenwidth strong{text-transform:none;}',
				
				newstyles = document.createElement('style'),
				newwidth = document.createElement('div'),
				head = document.getElementsByTagName('head'),
				newfavicon = document.createElement('link'),
				newgsstyles = document.createElement('link');
		
		newstyles.id = 'gridsetoverlaystyles';
		newstyles.innerHTML = styles;
		newstyles.type = 'text/css';
		
		newwidth.id = 'gridscreenwidthwrap';
		newwidth.innerHTML = '<p id="gridscreenwidth">Screen width: <strong id="gridscreenwidthval"></strong></p>';
		
		b.appendChild(newstyles);
		b.appendChild(newwidth);
		
		var newwidthdisplay = (newwidth.currentStyle) ? newwidth.currentStyle.display : getComputedStyle(newwidth, null).display;
		
		newfavicon.rel = "shortcut icon";
		newfavicon.id = "gridsetfavicon";
		newfavicon.href = "http://dev.gridsetapp.com/app/img/favicon.ico";
		
		head[0].appendChild(newfavicon);
		
		if (newwidthdisplay != 'block') {
		
			newgsstyles.rel = "stylesheet";
			newgsstyles.id = "gridsetstyles";
			newgsstyles.href = "https://get.gridsetapp.com/21907/";
			head[0].appendChild(newgsstyles);
		
		}
		
		if (areacount) {
			
			var j = areacount;
			
			while (j-- > 0) {
			
				var area = gridareas[j];
			
				gs.buildgrid(area, j, areacount);
				
				if (window.getComputedStyle(area,null).getPropertyValue("position") == 'static') area.style.position = 'relative';
				
			}
			
		}
		else {
			
			if (!b.className.match('gridsetnoareas')) b.className += ' gridsetnoareas';
			
			gs.buildgrid(b, j, areacount);
		
		}
		
		gs.width();
		gs.bind(window, 'resize', gs.width);
	
	},
	
	buildgrid: function (area, j, showgrid) {
		
		var set = JSON.parse('{"id":"21907","name":"Refresh Seattle (Static)","widths":{"990":{"width":990,"grids":{"sv":{"name":"Seven","prefix":"sv","width":990,"columns":{"sv1":{"name":"sv1","unit":"%","percent":7.18533613,"px":71.13},"sv2":{"name":"sv2","unit":"%","percent":14.6969697,"px":145.5},"sv3":{"name":"sv3","unit":"%","percent":14.6969697,"px":145.5},"sv4":{"name":"sv4","unit":"%","percent":14.6969697,"px":145.5},"sv5":{"name":"sv5","unit":"%","percent":14.6969697,"px":145.5},"sv6":{"name":"sv6","unit":"%","percent":14.6969697,"px":145.5},"sv7":{"name":"sv7","unit":"%","percent":7.18533613,"px":71.13}},"gutter":{"unit":"px","px":20,"percent":2.02020202},"ratio":{"name":"even","value":1}},"e":{"name":"Eight","prefix":"e","width":990,"columns":{"e1":{"name":"e1","unit":"%","percent":10.73232323,"px":106.25},"e2":{"name":"e2","unit":"%","percent":10.73232323,"px":106.25},"e3":{"name":"e3","unit":"%","percent":10.73232323,"px":106.25},"e4":{"name":"e4","unit":"%","percent":10.73232323,"px":106.25},"e5":{"name":"e5","unit":"%","percent":10.73232323,"px":106.25},"e6":{"name":"e6","unit":"%","percent":10.73232323,"px":106.25},"e7":{"name":"e7","unit":"%","percent":10.73232323,"px":106.25},"e8":{"name":"e8","unit":"%","percent":10.73232323,"px":106.25}},"gutter":{"unit":"px","px":20,"percent":2.02020202},"ratio":{"name":"even","value":1}},"sx":{"name":"Six","prefix":"sx","width":990,"columns":{"sx1":{"name":"sx1","unit":"%","percent":14.98316498,"px":148.33},"sx2":{"name":"sx2","unit":"%","percent":14.98316498,"px":148.33},"sx3":{"name":"sx3","unit":"%","percent":14.98316498,"px":148.33},"sx4":{"name":"sx4","unit":"%","percent":14.98316498,"px":148.33},"sx5":{"name":"sx5","unit":"%","percent":14.98316498,"px":148.33},"sx6":{"name":"sx6","unit":"%","percent":14.98316498,"px":148.33}},"gutter":{"unit":"px","px":20,"percent":2.02020202},"ratio":{"name":"even","value":1}}}}},"prefixes":{"index":["sv","e","sx"],"990":["sv","e","sx"]}}'),
		
				gridwrap = document.createElement('div'),
				gridinner = (showgrid) ? '<div class="gridwrap"><div class="gridoverlay">' : '<div class="gridwrap"><div class="gridoverlay wrapper">';
		
		if (showgrid) gridwrap.className = 'gridsetoverlaywrap';
		else gridwrap.className = 'gridsetoverlaywrap';	
		
		for (w in set.widths) {
			
			var width = set.widths[w],
					hides = '';
			
			for (p in set.prefixes) {
				
				if (p != w && p != 'index') hides += set.prefixes[p][0] + "-hide ";
				
			}
			
			gridinner += '<div class="gridset ' + hides + '">';
			
			for (j in width.grids) {
			
				var grid = width.grids[j];
				
				if (!showgrid || area.className.match(grid.prefix + '-showgrid')) {
				
					gridinner += '<div>';
					
					for (k in grid.columns) {
						
						var col = grid.columns[k];
						
						gridinner += '<div class="' + col.name + '"><small>' + col.name + '</small></div>';
					
					}
					
					gridinner += '</div>';
				
				}
			}
			
			gridinner += '</div>';
		
		}
		
		gridinner += '</div></div>';
		
		gridwrap.innerHTML = gridinner;
		
		area.appendChild(gridwrap);
		
	},
	
	bind : function (t, e, f) {
		
		if (t.attachEvent) t.attachEvent('on' + e, f);
		else t.addEventListener(e, f, false);
	
	},
	
	prevent : function (e) {
	
		if (e.preventDefault) e.preventDefault();
		else event.returnValue = false;
	
	}


};

gs.init();