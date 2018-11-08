import config from './config'
import './body.css'
import './index.css'
import logo from './js_logo.jpg'

const env = () => config.env

const title = document.createElement('h1')
title.innerHTML = 'JavaScript new project boilerplate'
title.classList.add('tit')

const image = document.createElement('img')
image.setAttribute('src', logo)
image.setAttribute('alt', 'JavaScript logo')

document.body.appendChild(title)
document.body.appendChild(image)

export default env
