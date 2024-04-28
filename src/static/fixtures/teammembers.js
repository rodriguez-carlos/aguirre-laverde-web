import juanCarlos from '../images/imagenes-17.jpg';
import luisFernando from '../images/imagenes-18.jpg';
import lucia from '../images/imagenes-19.jpg';


const TeammembersFixture = [
    {
        "id": 1,
        "nombre": "Juan Carlos",
        "apellido": "Aguirre Laverde",
        "biografia": ["Cuenta con más de 15 años de experiencia en la asesoría jurídica y representación de personas naturales y sociedades en arbitraje comercial y litigios en procesos de responsabilidad civil y seguros, administrativos y ejecutivos."],
        "educacion": "Abogado de la Universidad Pontificia Bolivariana. Especialista en Responsabilidad Civil y Seguros de la misma Universidad. Especialista en Derecho Comercial de la Universidad del Rosario.",
        "imagen": juanCarlos,
        "subcampos": [{
            "subtitulo": "Arbitraje",
            "subtexto": 'Hace parte de la lista de secretarios de Tribunales de Arbitramento de las siguientes entidades:',
            "vinetas": ['Centro de Conciliación, Arbitraje y Amigable Composición de la Cámara de Comercio de Medellín.', 'Centro de Conciliación, Arbitraje y Amigable Composición de la Cámara de Comercio del Oriente Antioqueño.', 'Centro de Conciliación, Arbitraje y Amigable Composición de la Universidad Pontifica Bolivariana “Darío Velásquez Gaviria".']
        }, {
            "subtitulo": "Conciliador",
            "subtexto": 'Hace parte de la lista de conciliadores de las siguientes entidades:',
            "vinetas": ['Centro de Conciliación, Arbitraje y Amigable Composición de la Cámara de Comercio del Oriente Antioqueño.', 'Centro de Conciliación, Arbitraje y Amigable Composición de la Universidad Pontifica Bolivariana “Darío Velásquez Gaviria".']
        }, {
            "subtitulo": "Estudios",
            "subtexto": "Abogado de la Universidad Pontificia Bolivariana. Especialista en Responsabilidad Civil y Seguros de la misma Universidad. Especialista en Derecho Comercial de la Universidad del Rosario.  Diplomado en arbitraje comercial internacional."
        }]
    },
    {
        "id": 2,
        "nombre": "Luis Fernando",
        "apellido": "Aguirre Henao",
        "biografia": ['Cuenta con más de 40 años de experiencia en la asesoría jurídica y representación de personas naturales en procesos penales. Experto en los recursos de casación y revisión penal.', 'Profesor universitario de pruebas penales, teoría general del proceso, derecho procesal penal.', 'Coordinador de barras académicas defensoría del pueblo.', 'Exconjuez de las Salas Penales de los Tribunales de Medellín y Antioquia.'],
        "educacion": "Abogado de la Universidad Pontificia Bolivariana. Especialista en Derecho Procesal de la Universidad Pontificia Bolivariana. Especialista en Investigación Criminal y Sistema Penal Acusatorio de la Universidad Católica. Aspirante a Maestría teoría del delito y derecho procesal penal.",
        "imagen": luisFernando,
        "subcampos": [{
            "subtitulo": "Estudios",
            "subtexto": "Abogado de la Universidad Pontificia Bolivariana. Especialista en Derecho Procesal de la Universidad Pontificia Bolivariana. Especialista en Investigación Criminal y Sistema Penal Acusatorio de la Universidad Católica. Aspirante a Maestría teoría del delito y derecho procesal penal."
        }]

    },
    {
        "id": 3,
        "nombre": "Lucía",
        "apellido": "Laverde Gallego",
        "biografia": ["Cuenta con más de 40 años de experiencia en la asesoría jurídica y representación de personas naturales en procesos de familia e inmobiliario."],
        "educacion": "Abogada de la Universidad Pontificia Bolivariana. Especialista en Derecho de Familia e inmobilidad de de la Universidad Pontificia Bolivariana.",
        "imagen": lucia,
        "subcampos": [{
            "subtitulo": "Estudios",
            "subtexto": "Abogada de la Universidad Pontificia Bolivariana. Especialista en Derecho de Familia e inmobilidad de de la Universidad Pontificia Bolivariana."
        }]
    },
]

export { TeammembersFixture }