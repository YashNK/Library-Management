"use strict";

import value from "../jsons/genre.json" assert {type : 'json'};
let tbody = document.querySelector('tbody');
document.addEventListener("DOMContentLoaded",()=>{
    console.log(value);

    for(let i=0;i<value.length;i++){
        tbody.innerHTML += `
            <tr>
                <td>
                    ${value[i].genre}
                </td>
                <td>
                    ${value[i].count}
                </td>
                

            </tr>
            `

    }
    
  
    
})