
"use strict";

import author from "../jsons/Authorfiltering.json" assert {type : 'json'};
import genres from "../jsons/Genrefiltering.json" assert {type : 'json'};
import year from "../jsons/Yearfiltering.json" assert {type : 'json'};
let trow = document.querySelector('tr');
let tbody = document.querySelector('tbody');
let tables = document.querySelector('table');

document.getElementById("year").onclick=()=>{
    
    
    tbody.innerHTML='';
    
        
    for(let i in year){
        for(let j=0;j<year[i].length;j++){
            tbody.innerHTML += `
            <tr>
                <td>
                    ${year[i][j].title}
                </td>
                <td>
                    ${year[i][j].author}
                </td>
                <td>
                    ${year[i][j].genre}
                </td>
                <td>
                    ${year[i][j].publishedDate}
                </td>

            </tr>
            
            `

        }
    }
    
}



document.getElementById("genre").onclick=()=>{

    tbody.innerHTML='';     
    
    
        
    for(let i in genres){
        for(let j=0;j<genres[i].length;j++){
            tbody.innerHTML += `
            <tr>
                <td>
                    ${genres[i][j].title}
                </td>
                <td>
                    ${genres[i][j].author}
                </td>
                <td>
                    ${genres[i][j].genre}
                </td>
                <td>
                    ${genres[i][j].publishedDate}
                </td>

            </tr>
            `
            

    

        }
    }
    
}

document.getElementById("author").onclick=()=>{

    tbody.innerHTML='';     
    
    
        
    for(let i in author){
        for(let j=0;j<author[i].length;j++){
            tbody.innerHTML += `
            <tr>
                <td>
                    ${author[i][j].title}
                </td>
                <td>
                    ${author[i][j].author}
                </td>
                <td>
                    ${author[i][j].genre}
                </td>
                <td>
                    ${author[i][j].publishedDate}
                </td>

            </tr>
            `
            

    

        }
    }
    
}
