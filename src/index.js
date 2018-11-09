import config from './config'
import './body.css'
import './index.css'
import logo from './js_logo.jpg'

const env = () => config.env
// eslint-disable-next-line
const ce = () => import('./createElement')

/**
 * CODE SPLITTING EXAMPLE 
 * 
 * Import 'dinamically' createElement module
 * when event scroll changes. 
 * Webpack is gonna create a bundle
 * for this code and is not gonna be included
 * in the main bundle.
 */
window.addEventListener('scroll', () => {
  ce().then(module => {
    const img = module.default('img', null, null, [
      { 'key': 'src', 'value': logo},
      { 'key': 'alt', 'value': 'Javascript logo' }
    ])

    document.body.appendChild(img)
  })
})

const title = document.createElement('h1')
title.innerHTML = 'JavaScript new project boilerplate'
title.classList.add('tit')

document.body.appendChild(title)

export default env
