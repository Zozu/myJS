;(function ($, window, document, undefined) {
    
    var pluginName = 'draggable',
        defaults = {
            enabled: false
        };

    function Plugin(element, options) {
        this.element = element;
        this.options = $.extend( {}, defaults, options) ;
        
        this._defaults = defaults;
        this._name = pluginName;
        
        this.init();
    }

    Plugin.prototype.init = function () {
    	var box = document.createElement('div');
    	box.className = 'box';
    	this.element.appendChild(box);
    	this.enable();
    };

    Plugin.prototype.enable = function () {
    	if(this.options.enabled) {
    		return;
    	}
    	var self = this;
    	this.options.enabled = true;
    	$(this.element).children('.box').on('mousedown', function() {
    		$(self.element).on('mousemove', drag);
    	});
    	$(this.element).children('.box').on('mouseup', function() {
    		$(self.element).off('mousemove');
    	});

    	function drag(e) {
    		var offset = {
    			top: e.pageY - 25, 
    			left: e.pageX - 25 
    		};
    		$(self.element).children('.box').offset(offset);
    	}
    };

    Plugin.prototype.disable = function () {
    	this.options.enabled = false;
    	$(this.element).find('.box').off();
    	$(this.element).off();
    };

    Plugin.prototype.destroy = function() {
    	this.disable();
    	$(this.element).find('.box').remove();
    	$.removeData(this.element, 'plugin_' + pluginName);
    }

    $.fn[pluginName] = function (param) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
            	if(typeof option === 'object' || !param) {
	                $.data(this, 'plugin_' + pluginName, 
	                new Plugin(this, param));
	            }
	            else {
	            	$.error('wrong options');
	            }
            }
            else if(typeof param === 'string'){
            	var plugin = $.data(this, 'plugin_' + pluginName);
            	if(typeof plugin[param] !== 'function'){
	            	$.error('wrong method');
            	}
            	else {
            		plugin[param].call(plugin, Array.prototype.slice.call(param, 1));
            	}
            } 
        });
    }

})(jQuery, window, document);