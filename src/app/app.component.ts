import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';
 

  movies:Movie[]=[
    {title:'ghili',director:'dharani',cast:'vijay',releaseDate:'march 24 2004'},
    {title:'bhil',director:'siva',cast:'vijay',releaseDate:'march 24 2004'},
    {title:'three',director:'karthi',cast:'dhanush',releaseDate:'may 05 2023'},
    {title:'aranmanai',director:'sunder c',cast:'sunder c',releaseDate:'oct 09 2002'},
    {title:'singam',director:'surya',cast:'aniruth',releaseDate:'sep 06 2024'}
  ];


number:string ='';

result!:boolean;
result2!:boolean;

AddStyle()
{
  return {
    'font-size.px':25,
    'font-style':'italic',
    'color':'blue'
  }
}


}



// refreshMovie(index:number,movie:any)
// {
//   return movie.name;
// }
class Movie
{
  title!:string;
  director!:string;
  cast !:string;
  releaseDate!:string;

}
// function refreshMovie(index: any, movie: any, any: any) {
//   throw new Error('Function not implemented.');
// }

