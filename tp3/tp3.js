const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

// le tableaux des objets
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboard.addEventListener('click', ()=>{
    const textarea = document.createElement('textarea')
    const password = resultEl.innerText
        if(!password){
            return
        }
        textarea.value = password
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand('copy')
        textarea.remove()
        alert('password copied to clipboard')
        
})

generateEl.addEventListener('click', ()=>{
   // gere la longuer en premier
    const length = +lengthEl.value
   // si on selectinne les minuscles
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked
// le result appelle le generate pour afficher
    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
})

function generatePassword(lower, upper, number, symbol, length){
    //password vide
    let generatePassword = ""
    //prendre les cases cochés
    const typesCount = lower + upper + number + symbol
//le filtre est utilisé pour filtrer un tableau, puis renvoyer cette valeur pour ne pas renvoyer une valeur spécifique.
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item=>Object.values(item)[0])
    if (length<5 | length>20) {
        return 'taille du mot de passe est min:5 et max: 20'
    }
// N'a pas de type sélectionné
    if(typesCount===0) {
        return ''
    }
    // crée une boucle
        for (let i = 5; i < 20; i+=typesCount) {
            typesArr.forEach(type =>{
                const funcName = Object.keys(type)[0]
                generatePassword+= randomFunc[funcName]()
            })
            
        }
        //La méthode slice() renvoie un objet tableau, contenant une copie superficielle (shallow copy) d'une portion du tableau d'origine, la portion est définie par un indice de début et un indice de fin (exclus). Le tableau original ne sera pas modifié.
const finalPassword = generatePassword.slice(0, length)
        return finalPassword
}


// fonction qui genere les lettres minuscles
function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
// fonction qui genere les lettres majuscules
function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
    // fonction qui genere les nombres de 0 à 9
function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
// fonction qui genere les caractères speciaux
function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]+<>/;.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}
