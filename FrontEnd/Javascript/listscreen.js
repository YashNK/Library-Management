// fetch('../jsons/data.json')
//     .then(response => response.json())
//     .then( values => console.log(values[]))
//     .catch(error => console.error('Error:', error));

"use strict";

import value from "../jsons/data.json" assert {type : 'json'};
let tbody = document.querySelector('tbody');
document.addEventListener("DOMContentLoaded",()=>{
    
        
    for(let i in value){
        for(let j=0;j<value[i].length;j++){
            tbody.innerHTML += `
            <tr>
                <td>
                    ${value[i][j].title}
                </td>
                <td>
                    ${value[i][j].author}
                </td>
                <td>
                    ${value[i][j].genre}
                </td>
                <td>
                    ${value[i][j].publishedDate}
                </td>

            </tr>
            `

    

        }
    }
    
    
    // for(let i=0;i<value.length;i++){

    //     // console.log(i);
    //     tbody.innerHTML += `
    //         <tr>
    //             <td>
    //                 ${value[i].bookname}
    //             </td>
    //             <td>
    //                 ${value[i].author}
    //             </td>
    //             <td>
    //                 ${value[i].genre}
    //             </td>
    //             <td>
    //                 ${value[i].date}
    //             </td>

    //         </tr>
    //         `

    // }
    
})