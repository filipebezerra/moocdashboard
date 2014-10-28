$(window).resize(function() {
    var path = $(this);
    var contW = path.width();
    if(contW >= 751){
        document.getElementsByClassName("sidebar-toggle")[0].style.left="200px";
    }else{
        document.getElementsByClassName("sidebar-toggle")[0].style.left="-200px";
    }
});
$(document).ready(function() {
    $('.dropdown').on('show.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
    });
    $('.dropdown').on('hide.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(300);
    });
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        var elem = document.getElementById("sidebar-wrapper");
        var formSearch = document.getElementById("form-search");
        left = window.getComputedStyle(elem,null).getPropertyValue("left");
        if(left == "200px"){
            document.getElementsByClassName("sidebar-toggle")[0].style.left="-200px";
            // TODO include effect to wait the sidebar close
            formSearch.hidden = false;
        }
        else if(left == "-200px"){
            formSearch.hidden = true;
            document.getElementsByClassName("sidebar-toggle")[0].style.left="200px";
        }
    });
});