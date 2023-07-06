import React from "react";
//Componente de React
export const Jumbotron = () => {
    const jumboInfo = {
        titulo: "Gay Pride",
        description:"Del viernes 23 de junio al domingo 2 de julio de 2023. MADO es la gran fiesta del Orgullo LGBTIQ+ un gran festival para celebrar, debatir y mostrar la diversidad, cuyo acto central será la Manifestación Estatal del Orgullo LGBTIQ+.",
        url: "https://www.madridorgullo.com/",
    }
    //Funcion para seleccionar letra
    const renderColorfulTitle = () => {
        
        return jumboInfo.titulo.split("").map((letter, index) => (
        <span key={index} style={{ color: getRandomColor() }}>
            {letter}
        </span>
        ));
    };
    //Funcion para seleccionar color
    const getRandomColor = () => {
        
        const colors = ["red", "blue", "green", "yellow", "orange", "purple"];
                
        const randomIndex = Math.floor(Math.random() * colors.length);
                
        return colors[randomIndex];
    };
    //Imagen de fondo
    const jumbotronStyle = {
        backgroundImage: "url('https://cdn.pixabay.com/photo/2022/06/12/19/53/gay-7258750_1280.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.9,
    };
    //texto <h1>
    const titleStyle = {
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    fontWeight: "bold",
    };
    //Llamada final del componente
        
        return( 
        <div className="card" style={jumbotronStyle}>
            <div className="card-body">
                <h1 className="card-title" style={titleStyle}>{renderColorfulTitle()}</h1>
                <p className="card-text text-primary" style={titleStyle}>{jumboInfo.description}</p>
                <a href={jumboInfo.url} className="btn btn-primary">Call to Action!</a>
            </div>
        </div>
        )
}
