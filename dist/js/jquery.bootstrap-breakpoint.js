var BootstrapBreakpoint;
(function($) {
    BootstrapBreakpoint = {
        breakpoints: ['xs','sm','md','lg','xl','xxl'],
        
        /**
         * Adds HTML to body
         * 
         * @returns {undefined}
         */
        init: function() {
            if ($('.bsbp-container').length !== 0) {
                $('.bsbp-container').remove();
            }
            
            if ($('.bsbp-container').length === 0) {
                var template = '<div class="bsbp-container">';
                for (var i = 0; i < BootstrapBreakpoint.breakpoints.length; i++) {
                    if (i === 0) {
                        template += '<div class="d-' + BootstrapBreakpoint.breakpoints[i] + '-block"></div>';
                    } else {
                        template += '<div class="d-none d-' + BootstrapBreakpoint.breakpoints[i] + '-block"></div>';
                    }
                }
                template += '</div>';
                
                $('body').append(template);
            }
        },
    
        /**
         * Returns true if window is wider than breakpoint
         * 
         * @param {string} breakpoint
         * @returns {boolean}
         */
        up: function(breakpoint) {
            if (BootstrapBreakpoint.checkBreakpoint(breakpoint)) {
                return $('.bsbp-container .d-' + breakpoint + '-block').is(':visible');
            }
            return false;
        },
    
        /**
         * Returns true if window is smaller than breakpoint
         * 
         * @param {string} breakpoint
         * @returns {boolean}
         */
        down: function(breakpoint) {
            if (BootstrapBreakpoint.checkBreakpoint(breakpoint)) {
                return !$('.bsbp-container .d-' + breakpoint + '-block').is(':visible');
            }
            return false;
        },
    
        /**
         * Returns true if window width is between two breakpoints
         * 
         * @param {object} breakpoint
         * @returns {boolean}
         */
        between: function(breakpoint) {
            if (typeof breakpoint === 'object' 
                    && BootstrapBreakpoint.checkBreakpoint(breakpoint[0]) 
                    && BootstrapBreakpoint.checkBreakpoint(breakpoint[1])) {
                return BootstrapBreakpoint.up(breakpoint[0]) && BootstrapBreakpoint.down(breakpoint[1]);
            }
            return false;
        },
    
        /**
         * Returns true if window is in range of breakpoint
         * 
         * @param {string} breakpoint
         * @returns {boolean}
         */
        only: function(breakpoint) {
            if (BootstrapBreakpoint.checkBreakpoint(breakpoint)) {
                // if is last breakpoint
                if (BootstrapBreakpoint.up(breakpoint) 
                        && BootstrapBreakpoint.breakpoints.length - 1 === BootstrapBreakpoint.breakpoints.indexOf(breakpoint)) {
                    return true;
                }

                return BootstrapBreakpoint.up(breakpoint) && !BootstrapBreakpoint.up(BootstrapBreakpoint.breakpoints[BootstrapBreakpoint.breakpoints.indexOf(breakpoint) + 1]);
            }
            return false;
        },
    
        /**
         * Returns true if breakpoint exists
         * 
         * @param {string} breakpoint
         * @returns {boolean}
         */
        checkBreakpoint: function(breakpoint) {
        return BootstrapBreakpoint.breakpoints.indexOf(breakpoint) > -1;
        }
    };
    BootstrapBreakpoint.init();

    /**
     * Returns true if arguments fits bootstrap breakpoint
     * 
     * @param {string} mode
     * @param {string|object} breakpoint
     * @returns {boolean}
     */
    $.bootstrapBreakpoint = function(mode, breakpoint) {
        switch(mode) {
            case 'up':
                return BootstrapBreakpoint.up(breakpoint);
            case 'down':
                return BootstrapBreakpoint.down(breakpoint);
            case 'between':
                return BootstrapBreakpoint.between(breakpoint);
            case 'only':
                return BootstrapBreakpoint.only(breakpoint);
            default:
        }

        return false;
    };
})(jQuery);