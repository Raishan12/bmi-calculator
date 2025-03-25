let height = document.getElementById("height")
let weight = document.getElementById("weight")
let button = document.getElementById("button")
let display = document.getElementById("result")

let hpattern = /^[1-9][0-9]{0,2}$/
let wpattern = /^[1-9][0-9]{0,2}$/

button.addEventListener("click",()=>{
    
    if(!hpattern.test(height.value)){
        alert("Enter the Correct value")
        height.value = ""
        weight.value = ""
        return
    }

    if(!wpattern.test(weight.value)){
        alert("Enter the Correct value")
        height.value = ""
        weight.value = ""
        return
    }


    let hm = (height.value/100)**2
    let wkg = weight.value
    let result = wkg/hm
    result = result.toFixed(1)
    let type = ""
    if(result<18.5){
        type = "UNDERWEIGHT"
        classname = "btypeu"
    }else if(result<25){
        type = "NORMAL"
        classname = "btypen"
    }else{
        type = "OBESITY"
        classname = "btypeo"
    }
    let str = `
    <p id="res">${result}</p>
    <p id="btype" class='${classname}'>${type}</p>
    `
    display.innerHTML = str

})