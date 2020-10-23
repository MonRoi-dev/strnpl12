$('.product__tabs .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
        $('.product__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.product__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#'+id).addClass('active-tab').fadeIn();
        return false;
    });