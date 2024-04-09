import './stylesHeader.css'
export const headerTemplate = () => {
  return `
  <button id = "H1">XPRINT</button>
    <input type="text" placeholder="Search" id="searchinput"/>
    <button id="searchbtn">🔍</button>
    <label class="switch">
    <input type="checkbox">
    <span class="slider"></span>
  </label>
  
   
  `
}
const themeSwitch = () => {
  document.body.classList.toggle('dark')
}
const darkmodeon = () => {
  const themitas = document.querySelector('.slider')
  themitas.addEventListener('click', (ev) => {
    themeSwitch()
  })
}
export const printheaderTemplate = () => {
  const header = document.querySelector('header')
  header.innerHTML = headerTemplate()
  darkmodeon()
}
