$(".phone").mask("+7(999)999-9999");

$("a.gallery").fancybox({
    prevEffect : 'none',
    nextEffect : 'none',
    helpers:  {
        title : {
            type : 'over'
        }
    }
});

$(".sub3").fancybox({
    beforeShow: function () {
        $(".fancybox-overlay").appendTo(".forma")

    }
})

$('.form').on("submit", sendForm)
function sendForm(e){
    console.log("Hello");
    e.preventDefault();
    var data = $('.form').serialize();
    console.dir(data);

    $.ajax({
        url: "form.php",
        type: "POST",
        data: data,
        success: function(data){
            console.dir(data);
            if(data == 'OK')
                alert("Письмо отправлено");
            else alert("Error");
            //$('.form')[0].reset();
        }

    })
}

function validateForm()
{
    var name=document.forms["forma"]["name"].value;
    var phone=document.forms["forma"]["phone"].value;
    var email=document.forms["forma"]["email"].value;

    if (name.length==0)  {
        var r=document.forms["forma"]["name"].style.border = "double  red";
        document.forms["forma"]["name"].placeholder="*Введите имя";
        $('.name').addClass('place');
    }
    if(phone.length==0){
        var t=document.forms["forma"]["phone"].style.border = "double  red";
        document.forms["forma"]["phone"].placeholder="*Введите номер";
        $('.phone').addClass('place');
        return false;
    }
    var r = email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
    if (!r){
        //alert('Уверены что email введен верно?');
        var r=document.forms["forma"]["email"].style.border = "2px inset  red";
        document.forms["forma"]["email"].placeholder="Неккоректый email";
        $('.email').addClass('place');
        return false;
    }

}

$('.slider').slick({
    slidesToScroll: 1,
    prevArrow: "<div class='arrow__right'>",
    nextArrow: "<div class='arrow__left'>"
});
$('.testimonials').slick({
    dots:true

})

