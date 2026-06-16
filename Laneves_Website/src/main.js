import './style.css'
import { renderHeader, initHeader } from './components/header.js'
import { renderFooter } from './components/footer.js'
import { initRouter } from './router.js'

function renderShell() {
  const app = document.querySelector('#app')
  app.innerHTML = `
    <div id="site-header"></div>
    <main id="main-content" tabindex="-1"></main>
    <div id="site-footer"></div>
  `
}

function updateHeader(path) {
  const headerEl = document.getElementById('site-header')
  headerEl.innerHTML = renderHeader(path)
  initHeader()
}

function initApp() {
  renderShell()
  document.getElementById('site-footer').innerHTML = renderFooter()

  window.addEventListener('routechange', (e) => {
    updateHeader(e.detail.path)
  })

  updateHeader(window.location.pathname)
  initRouter()

  document.addEventListener('submit', (e) => {
    if (!e.target.matches('.contact-form')) return
    e.preventDefault()
    alert('Thank you for your message! Connect this form to your email service to receive submissions.')
  })
}

initApp()
