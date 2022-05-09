import carouselOne from './imagenes-06.png';
import carouselTwo from './imagenes-07.png';
import carouselThree from './imagenes-08.png';
import carouselTextOne from './LETREROS-21.png';
import carouselTextTwo from './LETREROS-22.png';
import carouselTextThree from './LETREROS-23.png';


const carouselSlideData = [
    {
        id: '1',
        carouselSlideText: "¡Más de 40 años de experiencia y conocimiento especializado!",
        carouselSlideImg: carouselOne,
        carouselSlideButton: "Conócenos",
        carouselSlideButtonRoute: "/conocenos",
        carouselSlideTextImage: carouselTextOne
    },
    {
        id: '2',
        carouselSlideText: "¡Asesoría jurídica integral, oportuna y confiable!",
        carouselSlideImg: carouselTwo,
        carouselSlideButton: "¿Qué hacemos?",
        carouselSlideButtonRoute: "/que-hacemos",
        carouselSlideTextImage: carouselTextTwo
    },
    {
        id: '3',
        carouselSlideText: "¡Te escuchamos y te acompañamos en cada proceso!",
        carouselSlideImg: carouselThree,
        carouselSlideButton: "Contáctanos",
        carouselSlideButtonRoute: "/contacto",
        carouselSlideTextImage: carouselTextThree
    }
]

export default carouselSlideData;