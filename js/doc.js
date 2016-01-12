    jQuery(document).ready(function(){
        $('.link_primaria').click(function(){
			 removeallu();
             removeallt();
             removeallo();
             removealls();
             removealld();
			if($('.primaria').hasClass('plegable')){
				$('.primaria').removeClass('plegable');
				$('.primaria').addClass('desplegado');
			}
			else {
				
				$('.primaria').removeClass('desplegado');
				$('.primaria').addClass('plegable');
				
			}
        })
		$('.link_secundaria').click(function(){
			 removeallu();
             removeallt();
             removeallo();
             removeallp();
             removealld();
			if($('.secundaria').hasClass('plegable')){
				$('.secundaria').removeClass('plegable');
				$('.secundaria').addClass('desplegado');
			}
			else {
				
				$('.secundaria').removeClass('desplegado');
				$('.secundaria').addClass('plegable');
				
			}
        })
        $('.link_diversificado').click(function(){
             removeallu();
             removeallt();
             removeallo();
             removeallp();
             removealls();
            if($('.diversificado').hasClass('plegable')){
                $('.diversificado').removeClass('plegable');
                $('.diversificado').addClass('desplegado');
            }
            else {
                
                $('.diversificado').removeClass('desplegado');
                $('.diversificado').addClass('plegable');
                
            }
        })
        $('.link_universitario').click(function(){
             removeallp();
             removealls();
             removealld();
             removeallt();
             removeallo();
            if($('.universitario').hasClass('plegable')){
                $('.universitario').removeClass('plegable');
                $('.universitario').addClass('desplegado');
            }
            else {
                
                $('.universitario').removeClass('desplegado');
                $('.universitario').addClass('plegable');
                
            }
        })

        $('.link_tecnico').click(function(){
            removeallp();
             removealls();
             removealld();
             removeallu();
             removeallo();
            if($('.tecnico').hasClass('plegable')){
                $('.tecnico').removeClass('plegable');
                $('.tecnico').addClass('desplegado');
            }
            else {
                
                $('.tecnico').removeClass('desplegado');
                $('.tecnico').addClass('plegable');
                
            }
        })

        $('.link_otros').click(function(){
            removeallp();
             removealls();
             removealld();
             removeallt();
             removeallu();
            if($('.otros').hasClass('plegable')){
                $('.otros').removeClass('plegable');
                $('.otros').addClass('desplegado');
            }
               else {
                
                $('.otros').removeClass('desplegado');
                $('.otros').addClass('plegable');
                
            }
        })
    })
function removeallp()
{
    $(".desplegado").each(function(){
        $(".primaria").removeClass('desplegado');
                $(".primaria").addClass('plegable');
    });
}
 function removealls()
{
    $(".desplegado").each(function(){
        $(".secundaria").removeClass('desplegado');
                $(".secundaria").addClass('plegable');
    });   	
}
function removealld()
{
    $(".desplegado").each(function(){
        $(".diversificado").removeClass('desplegado');
                $(".diversificado").addClass('plegable');
    });
}
function removeallu()
{
	$(".desplegado").each(function(){
		$(".universitario").removeClass('desplegado');
				$(".universitario").addClass('plegable');
	});
}	

function removeallt()
{
    $(".desplegado").each(function(){
        $(".tecnico").removeClass('desplegado');
                $(".tecnico").addClass('plegable');
    });
}
function removeallo()
{
    $(".desplegado").each(function(){
        $(".otros").removeClass('desplegado');
                $(".otros").addClass('plegable');
    });
 
}

