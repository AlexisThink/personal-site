import marketing from '../images/marketing.svg'
import web from '../images/web.svg'
import android from '../images/android.svg'

const services = [
    {
        icon: marketing,
        alt: 'Servicio de Marketing por Alexis Olveres',
        subtitle: 'Marketing',
        description: 'Tanto si tiene una estrategia comercial sólida y requiere una presencia en internet que inspire confianza y liderazgo, como si necesita una asesoría de 360 grados para su marca… Ha llegado al lugar correcto.',
        link:'marketing'
    },
    {
        icon: web,
        alt: 'Servicio de Desarrollo Web por Alexis Olveres',
        subtitle: 'Desarrollo Web Fullstack',
        description: 'Desde una página de inicio que le muestre a sus clientes quién es usted y su empresa, hasta sofisticadas aplicaciones que puedan agilizar sus procesos directo desde su navegador… Este es su punto de inicio.',
        link:'web'
    },
    {
        icon: android,
        alt: 'Servicio de Desarrollo de Aplicaciones Android por Alexis Olveres',
        subtitle: 'Desarrollo de Aplicaciones Android',
        description: 'Muestre a sus usuarios un catálogo completo incorporando bases de datos o reciba pedidos directamente desde su app. Las posibilidades son infinitas y tan accesible como un sitio web… Todas a la medida de su empresa.',
        link:'android'
    }
]

export default services;