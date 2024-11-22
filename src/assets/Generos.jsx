import React from 'react'
import "./Generos.css"

export default function Generos() {
    return (
        <>
            <div className="Generos">
                {/*Gênero 1*/}
                <div className="Genero Narrativo">
                    <span>NARRA<br /> TIVO</span>
                </div>

                <div className="SubGenero sub1">
                    <span>EPOPEIA</span>
                    <span className="Icone">→</span>
                </div>

                <div className="SubGenero sub2">
                    <span>ROMANCE</span>
                    <span className="Icone">→</span>
                </div>

                <div className="SubGenero sub3">
                    <span>CONTO</span>
                    <span className="Icone">→</span>
                </div>

                <div className="SubGenero sub4">
                    <span>NOVELA</span>
                    <span className="Icone">→</span>
                </div>

                <div className="SubGenero sub5">
                    <span>FÁBULA</span>
                    <span className="Icone">→</span>
                </div>

                <div className="Espaco"></div>
                <div className="Espaco"></div>
                <div className="Espaco"></div>

                {/*Gênero 2*/}
                <div className="Genero Lírico">
                    <span>LÍRICO</span>
                </div>

                <div className="SubGenero sub1">
                    <span>ODE</span>
                    <span className="Icone">→</span>
                </div>

                <div className="SubGenero sub2">
                    <span>ELEGIA</span>
                    <span className="Icone">→</span>
                </div>

                <div className="SubGenero sub3">
                    <span>MADRIGAL</span>
                    <span className="Icone">→</span>
                </div>

                <div className="SubGenero sub4">
                    <span>EPITALÂMIO</span>
                    <span className="Icone">→</span>
                </div>

                <div className="SubGenero sub5">
                    <span>ÉCLOGA</span>
                    <span className="Icone">→</span>
                </div>

                <div className="Espaco"></div>
                <div className="Espaco"></div>
                <div className="Espaco"></div>

                {/*Gênero 3*/}
                <div className="Genero Dramático">
                    <span>DRAMÁ<br /> TICO</span>
                </div>

                <div className="SubGenero sub1">
                    <span>TRAGÉDIA</span>
                    <span className="Icone">→</span>
                </div>

                <div className="SubGenero sub2">
                    <span>COMÉDIA</span>
                    <span className="Icone">→</span>
                </div>

                <div className="SubGenero sub3">
                    <span>FARSA</span>
                    <span className="Icone">→</span>
                </div>

                <div className="SubGenero sub4">
                    <span>AUTO</span>
                    <span className="Icone">→</span>
                </div>
            </div>
        </>
    );
};