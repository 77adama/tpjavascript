

const input=document.getElementById('input')
var tab = ["Mon Premier","Mon Deuxieme","Mon Troisieme","Mon Quatrieme"]
//function afficheElement(){ 
tab.forEach(element => {
    var p=document.createElement('p')

    p.innerHTML=`
        <p><br>${element}<br></p> 
    `
    gauche.appendChild(p)
});
//}
const pall=document.querySelectorAll('p');
const btngauche=document.getElementById('btngauche')
const btndroite=document.getElementById('btndroite')
for (let i = 0; i < pall.length; i++) {
    pall[i].addEventListener('click',function(){
    pall[i].classList.toggle('active')

    })    
}
btngauche.addEventListener('click',function(){
    var pgauche=gauche.querySelectorAll('p')
    pgauche.forEach(element => {
        if (element.className=='active') {
            droite.appendChild(element)
        }
    });
})
btndroite.addEventListener('click',function(){
    var pdroite=droite.querySelectorAll('p')
    pdroite.forEach(element => {
        if (element.className=='active') {
            gauche.appendChild(element)
        }
    });
})
// function afficheElement(){ 
//     for (var i = 0; i < 4; i++) {
//         const p=document.createElement('p')
//         p.setAttribute('class',"p")
//         p.innerHTML=`
//        <br> <strong><strong><FONT size="10pt"><p>${tab[i]}</p><FONT size="10pt"> <strong><strong> <br> 
//         `
//         div.appendChild(p)
//     }
// }


input.addEventListener('click',afficheElement)


