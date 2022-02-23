const container=document.getElementById('container');
 const ed=document.getElementById('ed');
const de=document.getElementById('de');
const add=document.getElementById('add')
const text=document.getElementById('text')
const button=document.getElementById('button')



//--------funtion 
let i=1
function ajouter() {
    const article1=document.createElement('article')        
    article1.setAttribute('class',"article1")
    article1.setAttribute('id','sec_'+i)
    article1.innerHTML =`
            <div class="header">
                <i class="fa fa-edit ecri" onclick='ecrit(${i})'  style="font-size:20px;color:azure"></i>
                  <i class="fa fa-trash-o delet" onclick='sup(${i})' style="font-size:20px;color:azure"></i> 
            </div>
            <textarea name="text" id="text_${i}" cols="31" rows="13"></textarea>
    `
    container.appendChild(article1)
    const de = document.querySelector('.delet')
   // const ed=document.querySelector('.ecri')
    i++
  
}
function sup(i) {
    let del = document.getElementById('sec_'+i)
    del.remove()
    
    
}
function ecrit(i){
    let text = document.getElementById('text_'+i)
    text.toggleAttribute('disabled')
    text.focus()
    
}

//-------Events
add.addEventListener('click',ajouter)

