/************************ BANNER-MAIN ************************/
let time = 3800
let currentImageIndex = 0
let imagens = document.querySelectorAll(".banner-main img")
let max = imagens.length;
    function nextImage(){
        imagens[currentImageIndex].classList.remove("selected")
        currentImageIndex++
        if(currentImageIndex >= max)
            currentImageIndex = 0
        imagens[currentImageIndex].classList.add("selected")
    }
    function start(){
        setInterval(() => {
            // troca de imagem
            nextImage()
        }, time)
    }
    window.addEventListener("load", start)

/************************ BANNER-MAIN ************************/

/**************** Lista de modalidades - MENU ****************/

    let show = true;

    const menuGamesResp = document.querySelector(".menu-games-respansive")
    const menuToggleResp = menuGamesResp.querySelector(".menu-games-toggle")

    menuToggleResp.addEventListener("click", () =>{
        document.body.style.overflow = show ? "hidden" : "initial"
        menuGamesResp.classList.toggle("on", show)
        show = !show
    })
/**************** Lista de modalidades - MENU ****************/

/************************* ALL MODAL *************************/
const ModalCheck = {
    open(){
        document.querySelector('.modal-overlay-check')
        .classList.add('active-modal')
    },
    close(){
        document.querySelector('.modal-overlay-check')
        .classList.remove('active-modal')
    },
}

const ModalTicket = {
    open(){
        document.querySelector('.modal-overlay-ticket')
        .classList.add('active-modal')
    },
    close(){
        document.querySelector('.modal-overlay-ticket')
        .classList.remove('active-modal')
    },
}

const ModalPin = {
    open(){
        document.querySelector('.modal-overlay-pin')
        .classList.add('active-modal')
    },
    close(){
        document.querySelector('.modal-overlay-pin')
        .classList.remove('active-modal')
    },
}

const ModalLogin = {
    open(){
        document.querySelector('.modal-overlay-login')
        .classList.add('active-modal')
    },
    close(){
        document.querySelector('.modal-overlay-login')
        .classList.remove('active-modal')
    },
}
/************************* ALL MODAL *************************/

/******************** PAGINAÇÃO DOS JOGOS ********************/
function gameNavigation(){
    const htmlGames = {
        menuGames: [... document.querySelector('.menu-games').children],
        contentsGame: [... document.querySelector('.select-numbers').children],
        openContentGame: document.querySelector('[date-open]')
    }
    
    function hideAllContent(){
        htmlGames.contentsGame.forEach(section => {
            section.style.display = "none"
        })
    }
    function removeAllActiveClass(){
        htmlGames.menuGames.forEach(tab => {
            tab.className = tab.className.replace(" activeMenuGame", "")
        })
    }
    function showCurrentTab(id){
        const tabcontent = document.querySelector('#' + id)
        tabcontent.style.display = "block"
    }
    function selectContent(event){
        hideAllContent()
        removeAllActiveClass()
        const target = event.currentTarget
        showCurrentTab(target.dataset.id) 
        target.className += " activeMenuGame"
    }
    function listarForChange(){
        htmlGames.menuGames.forEach(tab => {
            tab.addEventListener('click', selectContent)
        })
    }
    function init(){
        hideAllContent()
        listarForChange()

        htmlGames.openContentGame.click()
    }
    return {
        init
    }
    
}
window.addEventListener('load', () => {
    const GameNavigation = gameNavigation()
    GameNavigation.init()
})

/******************** PAGINAÇÃO DOS JOGOS ********************/