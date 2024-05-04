import imagen1 from '../images/imagenes-16_LE_auto_x2-transformed.jpeg'
import imagen2 from '../images/imagenes-07.jpg'
//import imagen3 from '../images/imagenes-08.jpg'
import imagen4 from '../images/iStock-1023022966 (1)_LE_auto_x1.jpg'
import imagenDeTexto1 from '../images/LETRETROS-21.png'
//import imagenDeTexto2 from '../images/asesoria-22.png'
import imagenDeTexto3 from '../images/LETRETROS-23.png'


const CarouselFixture = [
    {
        "imagen": imagen1,
    },
    {
        "imagen": imagen2,
        "imagenDeTexto": imagenDeTexto1,
        "rutaDelBoton": "conocenos",
        "textoDelBoton": "Conócenos"
    },
    {
        "imagen": imagen4,
        "imagenDeTexto": imagenDeTexto3,
        "rutaDelBoton": "contacto",
        "textoDelBoton": "Contáctanos"
    },

]

export { CarouselFixture }