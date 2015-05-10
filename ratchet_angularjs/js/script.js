// var text = '{"name":"John Johnson","synopsis": "Pixar returns to their first success with Toy Story 3. The movie begins with Andy leaving for college and donating his beloved toys -- including Woody (Tom Hanks) and Buzz (Tim Allen) -- to a daycare. While the crew meets new friends, including Ken (Michael Keaton), they soon grow to hate their new surroundings and plan an escape. The film was directed by Lee Unkrich from a script co-authored by Little Miss Sunshine scribe Michael Arndt. ~ Perry Seibert, Rovi","thumbnail": "http://content6.flixster.com/movie/11/13/43/11134356_tmb.jpg"}'

// var obj = JSON.parse(text);

// document.getElementById("data").innerHTML =
// obj.name + "<br>" +
// obj.synopsis + "<br>" +
// obj.thumbnail;




 // $(document).ready(function() {
 //            $( window ).load(function(){
 //               $.getJSON('MoviesExample.json', function(jd) {

 //                     $('.content').append('<ul class="table-view data" >');
 //                      for(i = 0; i < jd.movies.length; i++) {
 //                         $('.data').append('<li class="table-view-cell media" Style="clear: both;">');
 //                         $('.data').append('<a class="navigate-right">');
 //                         $('.data').append('<img class="media-object pull-left" Style="width: 80px;margin-top: 16px;" src="' + jd.movies[i].posters.thumbnail + '">');
 //                         $('.data').append('<div class="media-body">');
 //                         $('.data').append('<p Style="padding: 10px 0px 0px 0px;">Title : ' + jd.movies[i].title+ '</p>');
 //                         $('.data').append('<p>Critics score : ' + jd.movies[i].ratings.critics_score+ '</p>');
 //                         $('.data').append('<p>Runtime : ' + jd.movies[i].runtime+ '</p>');
 //                         $('.data').append('<p>Year : ' + jd.movies[i].year+ '</p>');
 //                         $('.data').append('</div>');
 //                         $('.data').append('</a>');
 //                         $('.data').append('</li>');
 //                   }
 //                    $('.content').append('</ul>');
 //               });
 //            });
 //         });


 
 $(document).ready(function() {

   $("#login-form").validate({
      rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 5
            },
            
        },
         messages: {
            
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            email: "Please enter a valid email address",
           
        },
        submitHandler: function(form) {

           window.location = "index.html";
            
        }

     });
 });




 $(document).ready(function() {

   $("#signup-form").validate({
      rules: {

            fullname: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 5
            },
            re_password: {
                equalTo: "#password"
            },
            
        },
         messages: {
            
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            email: "Please enter a valid email address",
            fullname: "Please enter fullname",
            re_password: "password not match",
           
        },
        submitHandler: function(form) {
          
           window.location = "login.html";
            
        }

     });
 });

$(document).on('click', '#main li a', function(){  
    this.id = $(this).attr('data-id');
    $.mobile.changePage( "#movie-template", { transition: "slide", changeHash: false });
});

var movieInfo = {
    id : null,
    result : null
}

var ajax = {  
    parseJSONP:function(result){  
        movieInfo.result = result.results;
        $('#main').empty(); 
        var movieListHandler = Handlebars.compile($("#movies-template").html());
        $('#movie-list').html(movieListHandler(result.results));         
        $('#movie-list').listview('refresh');
    }
}