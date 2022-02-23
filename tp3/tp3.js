



         
 /*
function getRandomNum(lbound, ubound) {
    return (Math.floor(Math.random() * (ubound - lbound)) + lbound);
    }
    function getRandomChar(number, lower, upper, other, extra) {
    var numberChars = "0123456789";
    var lowerChars = "abcdefghijklmnopqrstuvwxyz";
    var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var otherChars = "`~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/? ";
    var charSet = extra;
    if (number == true)
    charSet += numberChars;
    if (lower == true)
    charSet += lowerChars;
    if (upper == true)
    "Réponse à la vie"
    charSet += upperChars;
    if (other == true)
    charSet += otherChars;
    return charSet.charAt(getRandomNum(0, charSet.length));
    }
    function getPassword(length, extraChars, firstNumber, firstLower, firstUpper, firstOther,
    latterNumber, latterLower, latterUpper, latterOther) {
    var rc = "";
    if (length > 0)
    rc = rc + getRandomChar(firstNumber, firstLower, firstUpper, firstOther, extraChars);
    for (var idx = 1; idx < length; ++idx) {
    rc = rc + getRandomChar(latterNumber, latterLower, latterUpper, latterOther, extraChars);
    }
    return rc;
    }


     <div id="password-generator">
        <input value="generateur de mdp" id="password-output"> <br>
        <input type="range"
                min="4"
                max="24"
                step="1"
                value="8"
                id="password-length"
                oninput="document.getElementById('display-password-length').value=this.value"
        >
        <input type="text"
                value="8"
                maxlength="2"
                id="display-password-length"
                oninput="document.getElementById('password-length').value=this.value"
        > 
    </div> 
    <div class="flex">
        <input type="checkbox" id="lowercase">
        <label for="lowercase">minuscle</label>

        <input type="checkbox" id="uppercase">
        <label for="uppercase">majuscle</label>

        <input type="checkbox" id="numbers">
        <label for="numbers">nombre</label>

        <input type="checkbox" id="symbols">
        <label for="symbols">cractere</label>
    </div>
    <div>
        <button id="generateButton" type="button" onclick="generatePassword">generer mot de passe</button>
    </div>
    <script src="./assets/jquery.min.js"></script>
    <script src="./assets/bootstrap.js"></script>
    
    
    const passwordOutput =document.getElementById('password-output')
const copyy =document.getElementById('copy')
const dataUppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
const dataLowercase="abcdefghijklmnopqrstuvwxyz".split('')
const dataNumbers="0123456789".split('')
const dataSymbols="`~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?".split('')
const generateMdp=document.getElementById('generate_mdp')
 
function generatePassword(){
    const data=[].concat( 
    lowercase.checked ? dataLowercase:[],
    uppercase.checked ? dataUppercase:[],
    numbers.checked ? dataNumbers:[],
    symbols.checked ? dataSymbols:[],
    )

    let passwordLength= parseInt(document.getElementById('display-password-length').value)
    let newPassword = ''

    if(data.length===0){
       passwordOutput.innerHTML=`generateur de MDP`
        alert('veuillez selectionner un critere ')
        return
    }

    for (let i = 0; i < passwordLength; i++) {
        newPassword+=data[Math.floor(Math.random()*data.length)]
        
    }
    passwordOutput.value=newPassword
    passwordOutput.select()
    
}

    */
const uppercasee =document.getElementById('uppercase')
const lowercasee =document.getElementById('lowercase')
const numberss =document.getElementById('numbers')
const symbolss =document.getElementById('symbols')

const randomFunction={
    lower: lowerChecked,
    upper: upperChecked,
    number:numberChecked,
    Symbol:symbolsChecked
}
generate.addEventListener('click',() =>{
    const length= +lengthh.value
    const isLower=lowercasee.checked
    const isUpper=uppercasee.checked
    const isNumber=numberss.checked
    const isSymbol=symbolss.checked

    resultt.innerText = generatePassword(
        isLower,
        isUpper,
        isNumber,
        isSymbol,
        length
    )
})

function generatePassword(lower, upper, number,symbol,length){
    let generatePassword=''

    const typesCount = lower + upper + number + symbol
    const typesArr=[{lower},{upper},{number},{symbol}].filter(item=>Object.values(item)[0])

    if(typesCount===0){
        return ''
    }
    for (let i = 0; i < length; i+=typesCount) {
        typesArr.forEach(type=>{
            const funcName=Object.keys(type)[0]
            console.log('funcName: ', funcName)

            generatePassword+=randomFunction[funcName]()
        })
        
    }
}

function lowerChecked(){
    let low = String.fromCharCode(Math.floor(Math.random()*26)+97);
    console.log(low);
    return low;
}
function upperChecked(){
    let upp = String.fromCharCode(Math.floor(Math.random()*26)+65);
    console.log(upp);
    return upp;
}

function numberChecked(){
    let num = String.fromCharCode(Math.floor(Math.random()*10)+48);
    console.log(num);
    return num;
}

function symbolsChecked(){
    let sym = String.fromCharCode(Math.floor(Math.random()*14)+33);
    console.log(sym);
    return 
}
symbolsChecked();  