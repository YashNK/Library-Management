let form = document.querySelector("form");    
let tbody = document.querySelector('tbody');
let table = document.querySelector('table');
let bookname = document.getElementById("name");
let author = document.getElementById("author");
let date = document.getElementById("date");
let genre = document.getElementById("genre");
let valid=[];


let obj={
    table:[],
    
};

function submitForm(event){
    event.preventDefault();
    let isDuplicate=false;
    
    console.log(valid);
    
    for(var i in valid){
        if(valid[i]==bookname.value){
            isDuplicate=true;
        }
        
    }
        
    
    
    if(isDuplicate==false){

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
        {
            "bookname":bookname.value,
            "author":author.value,
            "date":date.value,
            "genre":genre.value,
        }

        obj.table.push(data)

        console.log(JSON.stringify(obj.table));
        valid.push(bookname.value);
    }
    else{
        alert("duplicates");       
    }


        


       
}

document.getElementById("dwnimg").onclick = ()=>{
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




form.addEventListener("submit", submitForm);
