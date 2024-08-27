const output = document.querySelector("#output")
const copy = document.querySelector("#copy")
const chars = document.querySelector("#chars")
const numbers = document.querySelector("#numbers")
const capital = document.querySelector("#capital")
const small = document.querySelector("#small")
const symbol = document.querySelector("#symbol")
const btn = document.querySelector("#btn")
const form = document.querySelector("#frm")


copy.addEventListener("click",async()=>{
    const pass = output.value
    if(pass){
        await navigator.clipboard.writeText(pass)
        alert("password copied")
    }
    else{
        alert("there is no password")
    }
    
})

function allvalue(min,max){
   const maxval = (max-min)+1
   const valelement = Math.floor(Math.random()*maxval)+min
   return valelement
}

function numbered(){
   const num = allvalue(48,57)
   const stringnum = String.fromCharCode(num)
   return stringnum
}

function capitals(){
    const cap = allvalue(65,90)
    const stringcap = String.fromCharCode(cap)
    return stringcap
}

function smalls(){
    const small = allvalue(97,122)
    const stringsmall = String.fromCharCode(small)
    return stringsmall
}

function symbolss(){
    const symbol_store = "~!@#$%^&*()_+></.,\|"
    const randsymbol =Math.floor(Math.random()*symbol_store.length)
    return symbol_store[randsymbol]
}

const functionarray = [
    {element:numbers,
     fun:numbered
    },
    {element:capital,
    fun:capitals
    },
    {element:small,
    fun:smalls
    },
    {element:symbol,
    fun:symbolss
    }
]

form.addEventListener("submit",(e)=>{
  e.preventDefault() 
  const passlength = chars.value 
  let generatepass = " "
  let funarray = functionarray.filter(({element})=>element.checked)
  for(i=0;i<passlength;i++){
    const index = Math.floor(Math.random()*funarray.length)
    const letter = funarray[index].fun()
    generatepass = generatepass + letter
    output.value = generatepass
  }
})
