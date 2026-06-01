'use strict'

import { criarPreview } from "./pages/preview.js"
import { criarLogin } from "./pages/login.js"

const paginas ={
    preview:{
        titulo: 'preview imagens',
        renderizar: 'criarPreview'
    },
    login:{
        titulo: 'login',
        renderizar: 'criarLogin'
    }
}

export function renderizarPagina(nomePagina){
    const main = document.getElementById(main-content)
    const pagina = paginas[nomePagina].renderizar()
    main.replaceChildren(pagina)
}

renderizarpagina('login')