/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl =document.getElementById("input-el")
const btnEl = document.getElementById("btn-el")
let line_1 =document.getElementById("id1")
let line_2 =document.getElementById("id2")
let line_3 =document.getElementById("id3")

btnEl.addEventListener("click",function(){
    let it = parseFloat(inputEl.value)
    line_1.textContent = `${it} meters = ${(3.281*it).toFixed(3)} feet | ${it} feet = ${(it/3.281).toFixed(3)} meters`
    line_2.textContent = `${it} liters = ${(0.264*it).toFixed(3)} gallons | ${it} gallons = ${(it/0.264).toFixed(3)} liters`
    line_3.textContent = `${it} kilos = ${(2.204*it).toFixed(3)} pounds | ${it} pounds = ${(it/2.204).toFixed(3)} kilos
    `
})
