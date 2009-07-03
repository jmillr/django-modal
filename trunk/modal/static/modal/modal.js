/**********************************
 *
 * Adds modal behavior to links within a webpage
 * Will act over the following classes
 *  - a.modal: Will launch the destination of the link inside a modal window
 *  - a.inherit: Will make links within a modal, display inside the modal
 *  - form input.inherit: Will avoid form submissions within a modal
 *      window display the information inside the modal window without
 *      breaking it
 * 
 **********************************/
$(function(){

    // Closes the modal window
    $(".close-modal").live('click', function(){
        $("#modal").fadeOut('fast',function() {
        $("#overlay").fadeOut('fast')});
        return false;
    });

    // Displays the modal window after following a link(GET)
    $('a.modal').click(function(){
        var dest = this.href;
        $('#modal').load(dest, 
        function(responseText, textStatus, XMLHttpRequest) {
            // I should be able to set the history:back here as well
            $("#overlay").show();
            $(this).fadeIn();
        });
        return false;
    });

    // Applies to links inside a modal that should continue in modal
    $('#modal a.inherit').live('click', function(){
        $('#modal').load(this.href);
        return false;
    });

    // Tells form submits hot to behave when inside a modal window
    $('#modal form input.inherit').live('click', function(){
        var data = {};
        $('input', this.form).each(function(){
            data[this.name] = $(this).val();
        });
        // Perform the form's submit but via XHR, put keep the response
        // as the modal contents
        $[this.form.method](this.form.action, data, function(resp){ 
            $("#modal").html(resp);
        })
        return false;
    });

    $('body').prepend('<div id="overlay"></div><div id="modal"></div>');
});
