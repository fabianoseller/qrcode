const formulario = document.getElementById('formulario')
const inputText = document.getElementById('inputText')
const img = document.getElementById('imageQrcode')

formulario.addEventListener("submit", function(event){
event.preventDefault()
img.src = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + inputText.value
})
