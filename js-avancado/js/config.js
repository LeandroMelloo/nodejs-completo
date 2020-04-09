function setConfig() {
    const texts = {
        "title": "Shopping Control"
    }
    document.title = texts.title // configuração do titulo da aplicação
    document.getElementById("navTitle").innerHTML = texts.title // configuração do link
}

setConfig()