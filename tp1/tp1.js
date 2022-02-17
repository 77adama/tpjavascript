const container=document.getElementById('container');
const article1=document.getElementById('article1');

const ed=document.getElementById('ed');
const de=document.getElementById('de');
const add=document.getElementById('add')
const text=document.getElementById('text')
const button=document.getElementById('button')



//--------funtion
function ajouter() {
    const article1=document.createElement('article')        
    article1.setAttribute('class',"article1")
    article1.innerHTML =`
    <div class="footer">
                <i class="fa fa-edit" id="ed" style="font-size:20px;color:azure"></i>
                  <i class="fa fa-trash-o" id="de" style="font-size:20px;color:azure"></i> 
            </div>
            <textarea name="text" id="text" cols="30" rows="10"></textarea>
    `
    container.appendChild(article1)
    

    /*
    de.addEventListener('click',function () {
        container.removeChild(article1)
    })
    */
    
}
function sup() {
}




//-------Events

add.addEventListener('click',ajouter)



