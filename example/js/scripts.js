// jQuery.noConflict();
(function($) {
    $(document).ready(function() {
         $(window).resize();
    });
    
    $(window).resize(function() {
        $('.current-up').text('');
        $('.current-down').text('');
        $('.current-only').text('');
        $('.current-between').text('');
        
        if (bootstrapBreakpoint('up', 'xs')) {
            $('.current-up').append('XS');
        }
        
        if (bootstrapBreakpoint('up', 'sm')) {
            $('.current-up').append(', SM');
        }
        
        if (bootstrapBreakpoint('up', 'md')) {
            $('.current-up').append(', MD');
        }
        
        if (bootstrapBreakpoint('up', 'lg')) {
            $('.current-up').append(', LG');
        }
        
        if (bootstrapBreakpoint('up', 'xl')) {
            $('.current-up').append(', XL');
        }
        
        if (bootstrapBreakpoint('down', 'xs')) {
            $('.current-down').append('XS, ');
        }
        
        if (bootstrapBreakpoint('down', 'sm')) {
            $('.current-down').append('SM, ');
        }
        
        if (bootstrapBreakpoint('down', 'md')) {
            $('.current-down').append('MD, ');
        }
        
        if (bootstrapBreakpoint('down', 'lg')) {
            $('.current-down').append('LG, ');
        }
        
        if (bootstrapBreakpoint('down', 'xl')) {
            $('.current-down').append('XL');
        }
        
        if (bootstrapBreakpoint('only', 'xs')) {
            $('.current-only').text('XS');
        }
        
        if (bootstrapBreakpoint('only', 'sm')) {
            $('.current-only').text('SM');
        }
        
        if (bootstrapBreakpoint('only', 'md')) {
            $('.current-only').text('MD');
        }
        
        if (bootstrapBreakpoint('only', 'lg')) {
            $('.current-only').text('LG');
        }
        
        if (bootstrapBreakpoint('only', 'xl')) {
            $('.current-only').text('XL');
        }
        
        if (bootstrapBreakpoint('between', ['xs','sm'])) {
            $('.current-between').append('XS - SM<br/>');
        }
        
        if (bootstrapBreakpoint('between', ['xs','md'])) {
            $('.current-between').append('XS - MD<br/>');
        }
        
        if (bootstrapBreakpoint('between', ['xs','lg'])) {
            $('.current-between').append('XS - LG<br/>');
        }
        
        if (bootstrapBreakpoint('between', ['xs','xl'])) {
            $('.current-between').append('XS - XL<br/>');
        }
        
        if (bootstrapBreakpoint('between', ['sm','md'])) {
            $('.current-between').append('SM - MD<br/>');
        }
        
        if (bootstrapBreakpoint('between', ['sm','lg'])) {
            $('.current-between').append('SM - LG<br/>');
        }
        
        if (bootstrapBreakpoint('between', ['sm','xl'])) {
            $('.current-between').append('SM - XL<br/>');
        }
        
        if (bootstrapBreakpoint('between', ['md','lg'])) {
            $('.current-between').append('MD - LG<br/>');
        }
        
        if (bootstrapBreakpoint('between', ['md','xl'])) {
            $('.current-between').append('MD - XL<br/>');
        }
        
        if (bootstrapBreakpoint('between', ['lg','xl'])) {
            $('.current-between').append('LG - XL<br/>');
        }
    });
})(jQuery);