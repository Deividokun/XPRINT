import './stylesMain.css'
export const imagesFull = (imagenes) => {
  const main = document.querySelector('main')
  imagenes.forEach((imatges) => {
    const divs = document.createElement('div')
    divs.classList.add('Card')
    const image = document.createElement('img')
    image.src = imatges.urls.regular
    divs.appendChild(image)
    main.appendChild(divs)
  })
}
