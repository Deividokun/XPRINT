import { createApi } from 'unsplash-js'
import { printfootertemplate } from './src/components/footer'
import { printheaderTemplate } from './src/components/header/indexHeader'
import { imagesFull } from './src/components/main/indexgalery'
import './style.css'
const api = createApi({
  accessKey: 'hkH1uMfojHYpoOoDYpha0DEGhVx5-L67cifG3qzE880'
})
const searchPhotos = async (keyword) => {
  const images = await api.search.getPhotos({
    query: keyword,
    page: 1,
    perPage: 30
  })
  return images
}
const searchPhotosRandom = async () => {
  const images = await api.photos.getRandom({
    count: 30
    // page: 1,
    // perPage: 30
  })
  return images
}

document.addEventListener('DOMContentLoaded', async () => {
  const imageRandom = await searchPhotosRandom()
  imagesFull(imageRandom.response)
})

printheaderTemplate()
printfootertemplate()

const boton = document.querySelector('#searchbtn')
const input = document.querySelector('#searchinput')
boton.addEventListener('click', async () => {
  document.querySelector('main').innerHTML = ''
  const imagenes = await searchPhotos(input.value)
  imagesFull(imagenes.response.results)
  if (imagenes.response.results.length === 0) {
    document.querySelector('main').innerHTML =
      '<h1>Lo siento, no se encuentran los datos de su busqueda </h1>'
  }
  console.log(searchPhotos(input.value))
})
const imageSelector = document.getElementById('H1')
imageSelector.addEventListener('click', async () => {
  const imageRandom = await searchPhotosRandom()
  imagesFull(imageRandom.response)
})
