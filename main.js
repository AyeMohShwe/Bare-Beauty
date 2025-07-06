$(document).ready(function(){
    
    $('.small-image img').click(function(){

        $(this).addClass('image-active').siblings().removeClass('image-active');
        let image = $(this).attr('src');
        $('.big-image img').attr('src', image);

    });

    $('.AllBrands .btn').click(function(){

        let filter = $(this).attr('data-filter');
        if(filter == 'all'){
            $('.AllBrands .box').show(400);
        }else{
            $('.AllBrands .box').not('.'+filter).hide(200);
            $('.AllBrands .box').filter('.'+filter).show(400);
        }

        $(this).addClass('button-active').siblings().removeClass('button-active');

    });

});

