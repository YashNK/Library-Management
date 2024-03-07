let lendname = document.getElementById('lendname');
let returnname = document.getElementById('returnname');
let tbody = document.querySelector('tbody');
let data = [];
let ldata={};


function showInput(option) {
    var inputs = document.querySelectorAll('.input-group');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].style.display = 'none';
    }
    document.getElementById(option + 'Inputs').style.display = 'block';   
}

function addInput(option){
    
    
        if(option+'Inputs'=="option1Inputs"){
            let bookname = lendname.value;
            let lend=bookname;
            data.push(ldata);
            tbody.innerHTML += `
            <tr>
                <td>
                    ${"Lend"}
                </td>
                <td>
                    ${bookname}
                </td>
                

            </tr>
            ` 
            
            
        }
        else{
            let bookname = returnname.value;
            ldata={
                return:bookname
            }
            
            data.push(ldata);
            tbody.innerHTML += `
            <tr>
                <td>
                    ${"Return"}
                </td>
                <td>
                    ${bookname}
                </td>
                

            </tr>
            `    
            
        }
        
        console.log(data)
   
        
}

function getjson(){
    let blob = new Blob([JSON.stringify(data)], {type: "application/json"});


    let url = URL.createObjectURL(blob);

    let downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = 'data.json';

    document.body.appendChild(downloadLink);

    downloadLink.click();
    document.body.removeChild(downloadLink);
}