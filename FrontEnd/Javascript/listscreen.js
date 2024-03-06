"use strict";

import value from "./data.json" assert {type : 'json'};
let tbody = document.querySelector('tbody');
document.addEventListener("DOMContentLoaded",()=>{
    console.log(value);
    for(let i=0;i<value.length;i++){

        // console.log(i);
        tbody.innerHTML += `
            <tr>
                <td>
                    ${value[i].bookname}
                </td>
                <td>
                    ${value[i].author}
                </td>
                <td>
                    ${value[i].genre}
                </td>
                <td>
                    ${value[i].date}
                </td>

            </tr>
            `

    }
    
})