import { headerTemplate } from '../header/indexHeader'
import './stylesFooter.css'
headerTemplate()
const footter = () => {
  return `<div class="footer">
            <p>&copy; 2024 Nombre de la Empresa</p>
            <p>Dirección de la Empresa | Teléfono: 123-456-7890 | Email: info@empresa.com</p>
        </div`
}
export const printfootertemplate = () => {
  const footer = document.querySelector('footer')
  footer.innerHTML = footter()
}
