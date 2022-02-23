var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct=0;
var quetion = [
    ["qui est  le scientifique qui a introduit plusieurs idée sur la selection naturelle ?"] , "Richard", "Darwin", "Da vinci", "B",
    ["qui est le president des Etats Unis ?"], "Oboma", "Sadam", "Trump", "C" ,
    ["qui est le roi du Maroc ?"], "Mouhamed 6", "Hassan2", "Hassan3", "A",
    ["Marakech est une ville ?"], "marocaine", "francaise", "tunisienne", "A"
    ["L'homme est un animal:"], "hebivor", "omnivore", "carnivore", "B",
    
]
function _(x){
    return document.getElementById(x)
   
}
function renderQuestion(){
    test = _("test");
    if(pos >= question){

        test.innerHTML = "<h2>Tu as"+correct+"question correct par"+question.length+"quetions </h2>";
        _("test_status").innerHTML="Fin de Quizz";
        pos = 0
        correct = 0
        return false
        
       
    }
    _("test_status").innerHTML= "question"+(pos+1) +question;
    
    chA = quetion[pos][1]
    chB = quetion[pos][2]
    chC = quetion[pos][3]
    test.innerHTML =  "<h3>"+quetion+"</h3>"
    test.innerHTML += "<input type:'radio' name:'choice' value='A'>"+chA+"<br>";
    test.innerHTML += "<input type:'radio' name:'choice' value='B'>"+chB+"<br>";
    test.innerHTML += "<input type:'radio' name:'choice' value='C'>"+chC+"<br>";
    test.innerHTML += "<button onclick='checkAnswer()'> Suivant !</button>";
}
function checkAnswer(){
    choices = document.getElementsByName("choices")
    

    for (let i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            choice = choices[i].value;
        }   
    }
    if (choice==question[pos][4]) {
        correct++
        

    }
    pos++
    renderQuestion()
}
window.addEventListener("load", renderQuestion, false)
