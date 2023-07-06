import React from "react";
//Componente de React
export const Jumbotron = () => {
    const jumboInfo = {
        titulo: "Gay Pride",
        description: "Del viernes 23 de junio al domingo 2 de julio de 2023. MADO es la gran fiesta del Orgullo LGBTIQ+ un gran festival para celebrar, debatir y mostrar la diversidad, cuyo acto central será la Manifestación Estatal del Orgullo LGBTIQ+.",
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
    };
    //Llamada final del componente

    return (
        <div className="container mt-4 mb-4">
            <div className="card" style={jumbotronStyle}>
                <div className="card-body">
                    <h1 className="card-title">{renderColorfulTitle()}</h1>
                    <p className="card-text text-white">{jumboInfo.description}</p>
                    <a href={jumboInfo.url} className="btn btn-primary">Call to Action!</a>
                </div>
            </div>
        </div>
    )
}
