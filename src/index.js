import config from './config'
import './body.css'
import './index.css'

const env = () => config.env

const title = document.createElement('h1')
title.innerHTML = 'JavaScript new project boilerplate'
title.classList.add('tit')

document.body.appendChild(title)

export default env
