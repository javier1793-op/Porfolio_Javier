import '../Scss/project.scss'
import Cardproject from './Cardproject';

import Anime from '../Img/project/Anime.png'
import Serendipia from '../Img/project/serendipia.png'
import Things from '../Img/project/things.png'
import Weather from '../Img/project/weather.png'
import Bios from '../Img/project/bios.png'
import Fabrica from '../Img/project/fabrica.png'
import Homepage from '../Img/project/homepage.png'
import Summary from '../Img/project/summary.png'

const Project = () => {

    const ListProject = [
        {
            id:100,
            urlImg:`${Anime}`,
            title:'Page Anime',
            description:'Pagina de busqueda de anime para busqueda y seguimiento de los mismo',
        },
        {
            id:101,
            urlImg:`${Serendipia}`,
            title:'Page Diary Personal',
            description:'Pagina de diario personal videojuego para busqueda y seguimiento de los mismo',
        },
        {
            id:102,
            urlImg:`${Things}`,
            title:'Page Things',
            description:'Pagina de Notas Recordatorio para busqueda y seguimiento de los mismo',
        },
        {
            id:103,
            urlImg:`${Weather}`,
            title:'Page Weather',
            description:'Pagina del Clima para busqueda y seguimiento de los mismo',
        },
        {
            id:104,
            urlImg:`${Bios}`,
            title:'Page Bios Informática',
            description:'Pagina del ventas online y servicios tecnicos',
        },
        {
            id:105,
            urlImg:`${Fabrica}`,
            title:'Page Fábrica Cultural',
            description:'Pagina de eventos a nivel local sobre la fundación',
        },
        {
            id:106,
            urlImg:`${Homepage}`,
            title:'Challenger Frontend',
            description:'Pagina de estructura de grillas grid',
        },
        {
            id:107,
            urlImg:`${Summary}`,
            title:'Challenger Frontend',
            description:'Pagina de diseño css con calculo matematicos',
        },
    ]
    return (
        <>
          <div className="titleAbout">
            <h1>My projects</h1>
          </div>
          <div className="contentProject">
            {ListProject.map((item)=>(
                <Cardproject 
                key={item.id} 
                imgUrl={item.urlImg}
                title={item.title}
                description={item.description}
                />
            ))}
          </div>
        </>
      );
    };

export default Project