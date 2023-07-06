import React from 'react';

export const CardComponent = () => {

    const prideCards = [
        {
            title: 'La Televisión.',
            url: 'https://estaticos-cdn.prensaiberica.es/clip/92ae8cb0-513f-43e4-99b0-4c40773480aa_source-aspect-ratio_default_0.jpg',
            description: 'Cada vez que la gente se comporte como si las imágenes de los gais en los medios de comunicación pudieran influir a sus hijos para ser gais, les recordaré que los niños gais crecimos viendo solo a gente heterosexual en televisión.',
            id: 74368271,
            author: 'Ellen DeGeneres.'
        },
        {
            title: 'Deshumanizar.',
            url: 'https://fotografias.larazon.es/clipping/cmsimages02/2023/06/29/640A03E3-78EB-404E-86E8-C7246886D0B3/manifestacion-orgullo-madrid_default.jpg',
            description: 'La homofobia es como el racismo y el antisemitismo y otras formas de intolerancia, ya que busca deshumanizar a un gran grupo de personas, de negar su humanidad, su dignidad y personalidad.',
            id: 74368272,
            author: 'Coretta Scott King.'
        },
        {
            title: 'La típica pregunta.',
            url: 'https://d33hncv3fqajvb.cloudfront.net/QSUyXcnODm_LnwTBkTwo4qa_KUc=/filters:quality(70)/prides/pictures/16/original/madrid-gay-pride-2018-1519047592.jpg',
            description: "Preguntar quien el 'hombre' o la 'mujer' en una relacion del mismo sexo es como preguntar quien es el tenedor en unos palillos chinos.",
            id: 74368273,
            author: 'Ellen Degeneres.'
        },
        {
            title: 'El amor siempre gana.',
            url: 'https://imagenes.20minutos.es/files/article_default_content/uploads/imagenes/2023/07/01/desde-atocha.jpeg',
            description: 'Las únicas personas extrañas son aquellas que no aman a nadie.',
            id: 74368274,
            author: 'Rita Mae Brown.'
        },
    ];


    return (
        <>
            <div className="container-fluid d-flex flex-wrap justify-content-evenly pt-2">

                { prideCards.map(card => (
                    <div className="card mb-3" style={ { width: "20rem" } } key={ card.id }>
                        <label className="bg-warning">
                            <h5 className="p-2 pt-3">GAY PRIDE 2023</h5>
                        </label>
                        <img src={ card.url } alt="Gay pride Spain pictures" />

                        <div className="card-body">
                            <h5 className="card-title p-2 rounded">{ card.title }</h5>
                            <h6 className="card-title p-2 rounded fst-italic">{ card.author }</h6>
                            <p className="card-text">{ card.description }</p>
                        </div>
                    </div>
                )) }


            </div>

        </>
    );

};