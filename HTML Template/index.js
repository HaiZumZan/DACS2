
$(document).ready(function(){

    // banner owl carousel
    $("#banner-area .owl-carousel").owlCarousel({
        dots: true,
        items: 1
    });

    // top sale owl carousel
    $("#top-sale .owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        responsive : {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000 : {
                items: 5
            }
        }
    });

    // isotope filter
    var $grid = $(".grid").isotope({
        itemSelector : '.grid-item',
        layoutMode : 'fitRows'
    });

    // filter items on button click
    $(".button-group").on("click", "button", function(){
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue});
    })


    // new phones owl carousel
    $("#new-phones .owl-carousel").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        responsive : {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000 : {
                items: 5
            }
        }
    });

    // blogs owl carousel
    $("#blogs .owl-carousel").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        responsive : {
            0: {
                items: 1
            },
            600: {
                items: 3
            }
        }
    })


    // product qty section
    let $qty_up = $(".qty .qty-up");
    let $qty_down = $(".qty .qty-down");
    // let $input = $(".qty .qty_input");

    // click on qty up button
    $qty_up.click(function(e){
        let $input = $(`.qty_input[data-id='${$(this).data("id")}']`);
        if($input.val() >= 1 && $input.val() <= 9){
            $input.val(function(i, oldval){
                return ++oldval;
            });
        }
    });

       // click on qty down button
       $qty_down.click(function(e){
        let $input = $(`.qty_input[data-id='${$(this).data("id")}']`);
        if($input.val() > 1 && $input.val() <= 10){
            $input.val(function(i, oldval){
                return --oldval;
            });
        }
    });


    // Click to see the product details
    document.querySelectorAll('.product').forEach(product => {
        product.addEventListener('click', function() {
            const productImage = this.getAttribute('data-image');
            const productName = this.getAttribute('data-name');
            window.location.href = `product.php?image=${productImage}&name=${encodeURIComponent(productName)} `;
        });
    });

    // Code for displaying the product image in product.html
if (window.location.pathname.endsWith('product.php')) {
    const urlParams = new URLSearchParams(window.location.search);
    const productImage = urlParams.get('image');
    const productName = urlParams.get('name');
    if (productImage) {
        document.getElementById('product-image').src = productImage;
    }
    if (productName) {
        document.getElementById('product-name').textContent = productName;
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("#banner-area .owl-carousel .item img");
    let maxHeight = 0;

    // Tìm chiều cao lớn nhất
    images.forEach(img => {
        if (img.naturalHeight > maxHeight) {
            maxHeight = img.naturalHeight;
        }
    });

    // Đặt cùng chiều cao cho tất cả ảnh
    images.forEach(img => {
        img.style.height = `${maxHeight}px`;
        img.style.objectFit = "cover";
    });
});

   

});