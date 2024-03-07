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

const today = new Date().toISOString().split('T')[0];
document.getElementById('date').setAttribute('max', today);

function showCustomAlert() {
    document.getElementById("customAlert").style.display = "block";
  }
  
  function closeCustomAlert() {
    document.getElementById("customAlert").style.display = "none";
  }
  

function submitForm(event){
    event.preventDefault();
    let isDuplicate=false;
    
    console.log(valid);

    date.max = new Date().toLocaleDateString('fr-ca')
    let formatedDate = [date.value.split("-")[2],"-",date.value.split("-")[1],"-",date.value.split("-")[0]].join("")
    
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
                    ${formatedDate}
                </td>

            </tr>
            `

    let data =
        {
            "bookname":bookname.value,
            "author":author.value,
            "date":formatedDate,
            "genre":genre.value,
        }

        obj.table.push(data)

        console.log(JSON.stringify(obj.table));
        valid.push(bookname.value);
    }
    else{
        showCustomAlert()      
    }
}

document.getElementById("dwnimg").onclick = ()=>{
    let blob = new Blob([JSON.stringify(obj.table)], {type: "application/json"});


    let url = URL.createObjectURL(blob);

    let downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = 'data.json';

    document.body.appendChild(downloadLink);

    downloadLink.click();
    document.body.removeChild(downloadLink);
}

form.addEventListener("submit", submitForm);