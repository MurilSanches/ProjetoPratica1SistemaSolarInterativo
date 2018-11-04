	var ctx;
	
	orbitaPadrao = function() 
    {  
		var c=document.getElementById("orbita");
      	if(c.getContext)
      	{
			ctx=c.getContext("2d");
			ctx.strokeStyle = 'white';
	        ctx.beginPath();
	        ctx.arc(938,403,125,0,2*Math.PI);
			ctx.stroke();
			ctx.closePath();
			
	        ctx.beginPath();
	        ctx.arc(937,403,180,0,2*Math.PI);
			ctx.stroke();
			ctx.closePath();

	        ctx.beginPath();
	        ctx.arc(935,403,245,0,2*Math.PI);
			ctx.stroke();
			ctx.closePath();

	        ctx.beginPath();
	        ctx.arc(930,403,310,0,2*Math.PI);
	        ctx.stroke();
			ctx.closePath();

			ctx.beginPath();
	        ctx.arc(930,403,440,0,2*Math.PI);
			ctx.stroke();
			ctx.closePath();
	    
	        ctx.beginPath();
	        ctx.arc(930,403,570,0,2*Math.PI);
			ctx.stroke();
			ctx.closePath();

	        ctx.beginPath();
	        ctx.arc(930,403,700,0,2*Math.PI);
			ctx.stroke();
			ctx.closePath();

	        ctx.beginPath();
	        ctx.arc(930,403,820,0,2*Math.PI);
			ctx.stroke();
			ctx.closePath();
	    }
	};

	// orbitaSaturno = function()
	// {
	// 	ctx.beginPath();
	// 	ctx.fillStyle =  'rgb(88, 35, 12)';
	// 	ctx.arc(0,403,40,0,2*Math.PI);
	// 	ctx.fill();
	// 	ctx.clearRect(0,0);
	// 	ctx.closePath();
	// }
	
	orbita = function() 
    {  
		ctx.strokeStyle = 'white';
		ctx.beginPath();
		ctx.arc(60,403,180,0,2*Math.PI);
		ctx.stroke();
		ctx.closePath();
		
		ctx.beginPath();
		ctx.arc(58,403,260,0,2*Math.PI);
		ctx.stroke();
		ctx.closePath();

		ctx.beginPath();
		ctx.arc(58,403,360,0,2*Math.PI);
		ctx.stroke();
		ctx.closePath();

		ctx.beginPath();
		ctx.arc(55,403,460,0,2*Math.PI);
		ctx.stroke();
		ctx.closePath();

		ctx.beginPath();
		ctx.arc(55,403,650,0,2*Math.PI);
		ctx.stroke();
		ctx.closePath();
	
		ctx.beginPath();
		ctx.arc(55,403,840,0,2*Math.PI);
		ctx.stroke();
		ctx.closePath();

		ctx.beginPath();
		ctx.arc(55,403,1030,0,2*Math.PI);
		ctx.stroke();
		ctx.closePath();

		ctx.beginPath();
		ctx.arc(55,403,1220,0,2*Math.PI);
		ctx.stroke();
		ctx.closePath();
	    
    };

   	// myMove = function() 
	// {
	//  	var elem = document.getElementById("terra");   
	// 	var coordenadas = elem.getBoundingClientRect();
	// 	var xInicial = coordenadas.left;
	// 	var x = coordenadas.left;
	// 	var xInicial = coordenadas.left;
	// 	var xFinal = 1160;
	// 	var vx = 1;
	// 	var y = coordenadas.top;
	//   	var id = setInterval(frame, 10);
	//   	function frame() 
	//   	{  
	//     	if (x == xFinal) 
	//       		vx = -1;
	// 		if(x == xInicial) 	
	// 			vx = 1;

	// 		x+=vx; 
	// 		elem.style.left = x + 'px'; 
  	// 	}		
	// }

	limparTela = function()
	{
		ctx.clearRect(0, 0, $("#orbita").width(), $("#orbita").height());
	}

	carregar = function(){

		//myMove();
		orbitaPadrao();
		//orbitaSaturno();
		setInterval(testar, 100);
	}

	testar = function()
	{	
		var chk = document.getElementById("switch");
		{
			var planeta = document.getElementById("sol");
			planeta.style.transition = "left 2s";

			if(chk.checked != true)
			{
				limparTela();
				orbita();
			}
			else
			{
				limparTela();
				orbitaPadrao();
			}

			if(chk.checked != true)
			{
				
				planeta.style.left = 0 +'%';
			}
			else
			{
				planeta.style.left = 45.125 + '%';
			}

			planeta = document.getElementById("mercurio");
			planeta.style.transition = "left 2s";

			if(chk.checked != true)
			{
				
				planeta.style.left = 12 +'%';
			}
			else
			{
				planeta.style.left = 42 + '%';
			}

			planeta = document.getElementById("venus");
			planeta.style.transition = "left 2s";

			if(chk.checked != true)
			{
				
				planeta.style.left = 15.625 +'%';
			}
			else
			{
				planeta.style.left = 38.5 + '%';
			}

			planeta = document.getElementById("terra");
			planeta.style.transition = "left 2s";

			if(chk.checked != true)
			{
				
				planeta.style.left = 20.8 +'%';
			}
			else
			{
				planeta.style.left = 35 + '%';
			}

			planeta = document.getElementById("marte");
			planeta.style.transition = "left 2s";

			if(chk.checked != true)
			{
				
				planeta.style.left = 26 +'%';
			}
			else
			{
				planeta.style.left = 31.5 + '%';
			}

			planeta = document.getElementById("jupiter");
			planeta.style.transition = "left 2s";

			if(chk.checked != true)
			{
				
				planeta.style.left = 33.85 +'%';
			}
			else
			{
				planeta.style.left = 23 + '%';
			}

			planeta = document.getElementById("saturno");
			planeta.style.transition = "left 2s";

			if(chk.checked != true)
			{
				
				planeta.style.left = 44.27 +'%';
			}
			else
			{
				planeta.style.left = 16.5 + '%';
			}

			planeta = document.getElementById("urano");
			planeta.style.transition = "left 2s";

			if(chk.checked != true)
			{
				
				planeta.style.left = 54.68 +'%';
			}
			else
			{
				planeta.style.left = 10 + '%';
			}

			planeta = document.getElementById("netuno");
			planeta.style.transition = "left 2s";

			if(chk.checked != true)
			{
				
				planeta.style.left = 65.1 +'%';
			}
			else
			{
				planeta.style.left = 4 + '%';
			}
		}

		var scre = $("body").width(); 
	if(scre > 1600)
	{
		$("ul.itens").addClass("normal");
	    $("ul.itens").removeClass("reduzir09");
	    $("ul.itens").removeClass("reduzir08");
	    $("ul.itens").removeClass("reduzir07");            
	    $("h1.titulo").addClass("normal");
	    $("h1.titulo").removeClass("reduzir09");
	    $("h1.titulo").removeClass("reduzir08");   
	    $("h1.titulo").removeClass("reduzir07");      
	    $("canvas.orbita").addClass("normal");
	    $("canvas.orbita").removeClass("reduzir09");
	    $("canvas.orbita").removeClass("reduzir08");
	    $("canvas.orbita").removeClass("reduzir07");
	}

    if (scre >= 1200 && scre < 1600)
    {
      	$("ul.itens").addClass("reduzir09");
      	$("ul.itens").removeClass("reduzir08");
      	$("ul.itens").removeClass("reduzir07"); 
      	$("ul.itens").removeClass("normal"); 
      	$("h1.titulo").removeClass("normal");   
      	$("canvas.orbita").removeClass("normal");            
      	$("h1.titulo").addClass("reduzir09");
      	$("h1.titulo").removeClass("reduzir08");
        $("h1.titulo").removeClass("reduzir07");        
        $("canvas.orbita").addClass("reduzir09");
        $("canvas.orbita").removeClass("reduzir08");
        $("canvas.orbita").removeClass("reduzir07");      
    } 
    if ( scre > 660 && scre < 992) 
    {
      	$("ul.itens").addClass("reduzir08");
      	$("ul.itens").removeClass("reduzir09");
        $("ul.itens").removeClass("reduzir07");             
      	$("h1.titulo").addClass("reduzir08");
      	$("h1.titulo").removeClass("reduzir09");
        $("h1.titulo").removeClass("reduzir07");        
        $("canvas.orbita").addClass("reduzir08");
        $("canvas.orbita").removeClass("reduzir09");
        $("canvas.orbita").removeClass("reduzir07");
        $("ul.itens").removeClass("normal"); 
      	$("h1.titulo").removeClass("normal");   
      	$("canvas.orbita").removeClass("normal"); 
    } 
    if (scre <= 660 ) 
    {
      	$("ul.itens").addClass("reduzir07");
      	$("ul.itens").removeClass("reduzir09");
        $("ul.itens").removeClass("reduzir08");   
      	$("h1.titulo").addClass("reduzir07");
      	$("h1.titulo").removeClass("reduzir09");
        $("h1.titulo").removeClass("reduzir08");           
        $("canvas.orbita").addClass("reduzir07");
        $("canvas.orbita").removeClass("reduzir09");
        $("canvas.orbita").removeClass("reduzir08");
        $("ul.itens").removeClass("normal"); 
      	$("h1.titulo").removeClass("normal");   
      	$("canvas.orbita").removeClass("normal");      
    }   
	}

