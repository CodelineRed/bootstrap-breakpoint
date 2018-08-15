(function($) {
    var BootstrapBreakpoint = {
        up: function(breakpoint) {
            if (BootstrapBreakpoint.checkBreakpoint(breakpoint)) {
                return document.querySelector('.bmb-container .d-' + breakpoint + '-block').offsetWidth > 0;
            }
            
            return false;
        },
        down: function(breakpoint) {
            if (BootstrapBreakpoint.checkBreakpoint(breakpoint)) {
                return document.querySelector('.bmb-container .d-' + breakpoint + '-block').offsetWidth === 0;
            }
            
            return false;
        },
        between: function(breakpoint) {
            if (typeof breakpoint === 'object' 
                    && BootstrapBreakpoint.checkBreakpoint(breakpoint[0]) 
                    && BootstrapBreakpoint.checkBreakpoint(breakpoint[1])) {
                return BootstrapBreakpoint.up(breakpoint[0]) && BootstrapBreakpoint.down(breakpoint[1]);
            }
            
            return false;
        },
        checkBreakpoint: function(breakpoint) {
            var breakpoints = ['xs','sm','md','lg','xl'];
            return breakpoints.indexOf(breakpoint) > -1;
        }
    };
    
    $.bootstrapBreakpoint = function(mode, breakpoint) {
        var result = false;
        if ($('.bmb-container').length === 0) {
            var template = '<div class="bmb-container">' +
                '<div class="d-xs-block"></div>' +
                '<div class="d-none d-sm-block"></div>' +
                '<div class="d-none d-md-block"></div>' +
                '<div class="d-none d-lg-block"></div>' +
                '<div class="d-none d-xl-block"></div>' +
            '</div>';
            $('body').append(template);
        }
        
        switch(mode) {
            case 'up':
                result = BootstrapBreakpoint.up(breakpoint);
                break;
            case 'down':
                result = BootstrapBreakpoint.down(breakpoint);
                break;
            case 'between':
                result = BootstrapBreakpoint.between(breakpoint);
                break;
            default:
        }
        
        return result;
    };
    
    $.bootstrapBreakpoint.defaults = {
        version: 4
    };
})(jQuery);