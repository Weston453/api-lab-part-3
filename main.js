const { default: axios } = require("axios")

const btn = document.querySelector('#btn')

const baseURL = 'https://swapi.dev/api/'

function btnClick (event) {
    event.preventDefault()
    axios.get(baseURL)
    console.log("btn clicked")
}

document.addEventListener("click", btnClick)