$(document).ready(function () {
    // show dropdown
    $('.list-link').not('.search .list-link').on('click', function (e){
        e.preventDefault();
        if ($('.sideMenu').hasClass('open')){
            $('.sideMenu').removeClass('open');
            $('.navButton').removeClass('active');
            $(this).siblings('.dropDown').toggleClass('active');
            $(this).parent().siblings().children('.dropDown').removeClass('active');
        } else {
        $(this).siblings('.dropDown').toggleClass('active');
        $(this).parent().siblings().children('.dropDown').removeClass('active');
        }
    });
    // show search box
    $('.search .list-link').on('click', function (x) {
        x.preventDefault();
        $(this).siblings('.dropDown').fadeIn().addClass('visible');
        $(this).parent().siblings().children('.dropDown').removeClass('active');
    });
    //close search box
    $('.search-close').on('click', function (){
        $('.search .dropDown').fadeOut().removeClass('active');
    });
    // close Drop down when click
	$(document).on('click', function (e) {
        var clickOver = $(e.target);
        var dropDown = $('.dropDown');
		if (!clickOver.closest('header').length && dropDown.hasClass('active')) {
			dropDown.removeClass('active');
		}
    });
    //for search box
    $(document).on('click', function (e) {
        var clickOver = $(e.target);
        var dropDown = $('.search-control');
		if (!clickOver.closest('header').length && dropDown.hasClass('visible')) {
			dropDown.removeClass('visible').fadeOut();
		}
    });
    //sidebar script
    //sidebar show

    $('.navButton').on('click' , function (){
        $(this).toggleClass('active');
        if ($('.dropDown').hasClass('active')){

            $('.dropDown').removeClass('active');
            $('.sideMenu').toggleClass('open');

        } else {
            $('.sideMenu').toggleClass('open');
        }
    });
    //close side bar when click some where else
    $('.mainContent').on('click', function (m) {
        var clickOver = $(m.target);
        var sideBar = $('.sideMenu');
        if (!clickOver.closest('aside').length && sideBar.hasClass('open')) {
            sideBar.removeClass('open');
            $('.navButton').removeClass('active');
        }
    });
    //close side bar when scroll
    $(window).scroll(function (){
        if ($(this).scrollTop() > 20 && $('.sideMenu').hasClass('open')){
            $('.sideMenu').removeClass('open');
            $('.navButton').removeClass('active');
        }
    });




    //datepicker

    $('.datepicker').datepicker({
        autoclose:true,
        orientation: "bottom left"
    });

    $('.datepicker1').datepicker({
        autoclose:true,
        orientation: "bottom left"
    });


    //select box
    $('.selectpicker1').selectpicker();
    $('.selectpicker2').selectpicker();





    //first page tables
     //database tables
     $('.demo-foo-filtering').DataTable({
        "pageLength": 5,
        'language': {
            paginate: {
              next: '<span class="fas fa-angle-right"></span>',
              previous: '<span class="fas fa-angle-left"></span>'  
            }
          }
      });

    //show modal when clicked 

    $('.add-appoint').on('click', function () {
        $('#addModal').modal({
            show:true
        });
    });


    $('.edit').on('click', function () {
        $child = $(this).parents('.table__body--row').children('td');

        $('#editModal input').addClass('active');

        $('#editName').val($child.eq(1).text());
        $('#editage').val($child.eq(2).text());

        $('#editModal').modal({
            show:true
        });
    });

    $('.delete').on('click', function () {
    
        $('#deleteModal').modal({
            show:true
        });
    });


    //patient profile script here after this
    $('.add-Diagnosis').on('click', function () {
        $('#DiagnosisModal').modal({
            show:true
        });
    });

    // view diagnosis

    $('.viewDiagnosis').on('click', function () {
        $('#viewDiagnosisModal').modal({
            show:true
        });
    });


    //attatchment modal 

    $('.diagAttatchment img').on('click', function (){

        $('#viewattatchModal').modal({
            show:true
        });

        $('#viewattatchModal .view-img img').attr('src', $(this).attr('src'));


    });



    // filter date picker

    $('.datepicker2').datepicker({
        autoclose:true,
        orientation: "bottom left"
    });

    //upload custom button

    $('#DiagnosisModal .choose-button').on('click', function (){
        $('#img-upload').click();
    });

     // profile page img edit model
     $('.profile-operation , .profile-operation span').on('click', function () {
    
        $('#imgEditModal').modal({
            show:true
        });
    });

    $('.profile-edit').on('click', function () {
        $('#infoEditModal').modal({
            show:true
        });
    });

    //upload custom button
    $('#imgEditModal .choose-button').on('click', function (){
        $('#img-upload').click();
    });





    //move label when focus;

   $('input').on('focus', function (){
        $(this).addClass('active');
   }).on('blur',function (){
        if($(this).val() == ""){
            $(this).removeClass('active');
        }
   });

   
   

   

    

});



