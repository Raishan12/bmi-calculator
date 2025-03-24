let height = document.getElementById("height")
let weight = document.getElementById("weight")
let button = document.getElementById("button")
let display = document.getElementById("result")



button.addEventListener("click",()=>{
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