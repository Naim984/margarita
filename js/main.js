$(document).ready(function(){
    $('.galeria').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        responsive:true
      });

//Post 
var posts = [
  {
    title:'La perla del Caribe',
    date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMM") + moment().format("YYYY"),
    content: 'Margarita es una isla de Venezuela situada en el mar Caribe al Noreste de Caracas, la capital del país, a sólo 35 minutos en vuelo, o a un par de horas en ferry desde Puerto La Cruz o Cumaná. Es uno de los destinos turísticos preferidos de Venezuela.Su clima es tropical y esto, junto a sus exóticas playas y montañas, ha hecho que se le conozca como La Perla del Caribe, como la apodan muchos turistas venezolanos y extranjeros.>'
                },
  { 
    title:'En la isla de Margarita se pueden hacer muchas cosas',
    date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMM") + moment().format("YYYY"),
  content: 'En la isla de Margarita se pueden hacer muchas cosas. Hay para todos los gustos y edades. Empecemos con las playas. Las hay para todos los gustos. Luego tenemos los paseos que puedes hacer: castillos, iglesias, atractivos naturales... En Margarita se pueden practicar un sinfín de deportes acuáticos. Es uno de los mejores lugares del mundo para la práctica del windsurf y kitesurf. También hay una cancha de golf de 18 hoyos. En Macanao, se puede montar a Caballo en un interesantísimo recorrido'},
  { title:'Y lo mejor: todo está cerca',
  date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMM") + moment().format("YYYY"),
  content: 'Asi como lo escuchas todo está cerca,ya que se puede llegar a todos los destinos transitando algunas autopistas y caminos muy bonitos, o atravesando algún túnel de árboles. Pero como si fuera poco, todavía puede hacer más, como tomar una excursión a las islas cercanas: Coche, que es como una extensión de la isla, con una de las mejores playas del estado; Cubagua es fascinante también; y para los amantes del buceo y del snorkeling, una excursión a Los Frailes es la mejor opción.'},
  { title:'Puerto libre, Ofertas!!',
  date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMM") + moment().format("YYYY"),
  content: 'Margarita es puerto libre, por lo tanto hay excelentes ofertas y oportunidades de hacer compras exentas del Impuesto al Valor Agregado (IVA). Hay vendedores informales en toda la isla, mercados como el de Conejeros, comerciantes itinerantes que ofrecen joyas artesanales en las playas principales, perlas en La Restinga y todo tipo de artículos en las tiendas del Boulevard Guevara, la Av. 4 de Mayo o la Av. Santiago Mariño. También hay algunos hipermercados como Sigo o Makro y elegantes centros comerciales como Rattan Plaza y el Sambil.'},
  ];
  posts.forEach((item, index) => {
   var post = `
  <article class="post">
     <h2>${item.title}</h2>
     <span class="date">${item.date}</span>
     <p>${item.content}</p>
    <a href="#" class="button-more"></a>
  </article>

   `;
  
   $("#posts").append(post);
  });  

  //Scroll arriba de la web
  $('.subir').click(function(e){
    e.prevenDefault();
    $('html, body').animate({ 
      scrollTop:0
  }, 500);
  return false;  
});
   //Login falso

   $("#login form").submit(function(){ //Captura el evento
     var form_name = $("#form_name").val();//Recoge los datos de formulario

     localStorage.setItem("form_name", form_name);//La guardamos dentro de localStorage
   });
   var form_name = localStorage.getItem("form_name");  //Recoge el valor de localStorage
   
   if(form_name != null && form_name !="undefined"){//Comprobacion si forn_name es diferente a null
     var about_parrafo = $("#about p");  //Indicamos la zona donde incluiremos el Bienvenidos usuario
    about_parrafo.html("<br><strong> Bienvenido, " + form_name+"</strong>");
    about_parrafo.append("<strong><a href='#' id='logout'><br>Cerrar sesión</a><strong>");

    $("#login").hide();
    $("#logout").click(function(){
        localStorage.clear();//Para limpiar el localStorage
        location.reload();//Para recargar la pagina
    });
    
   }
   $("body").css("display", "none");
   $("body").fadeIn(1500);
   
 $("a.transicion").click(function(event){
   event.preventDefault();
   linkDestino = this.href;
   $("body").fadeOut(1000, redireccionarPag);    
 });
   
 function redireccionarPag() {
   window.location = linkDestino;
 }


   
});