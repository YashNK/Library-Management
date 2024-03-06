let form = document.querySelector("form");    
let tbody = document.querySelector('tbody');
let table = document.querySelector('table');
let bookname = document.getElementById("name");
let author = document.getElementById("author");
let date = document.getElementById("date");
let genre = document.getElementById("genre");

let obj={
    table:[]
};

function submitForm(event){
    event.preventDefault();

    tbody.innerHTML += `
            <tr>
                <td>
                    ${bookname.value}
                </td>
                <td>
                    ${author.value}
                </td>
                <td>
                    ${genre.value}
                </td>
                <td>
                    ${date.value}
                </td>

            </tr>
            `

    let data =
        {"bookname":bookname.value,
        "Details":[{
            "author":author.value,
            "date":date.value,
            "genre":genre.value,
            }
            ]
        }

        obj.table.push(data)

        console.log(JSON.stringify(obj.table));


        


       
}

document.getElementById("dwnbtn").onclick = ()=>{
    let blob = new Blob([JSON.stringify(obj.table)], {type: "application/json"});


    let url = URL.createObjectURL(blob);

        // Create a downloadable link
    let downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = 'data.json';

        // Append the link to the body
    document.body.appendChild(downloadLink);

    downloadLink.click();
    document.body.removeChild(downloadLink);
}




form.addEventListener('submit', submitForm);
