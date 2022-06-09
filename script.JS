$(function(){
    $(".container-products").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow:$('#prevarrow'),
        nextArrow:$('#nextarrow'),
    })
})

$(function(){
    $(".topo").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:$('#prevtopo'),
        nextArrow:$('#nexttopo'),
    })
})