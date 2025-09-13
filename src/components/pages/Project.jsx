import React from 'react';
import robopoto from "../../assets/2024Robot.png";
import tensorfoto from "../../assets/aiNeuron.png";
import ttrobopoto from "../../assets/2023myrobot.jpg";

const Project = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <div className="grid grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                    <img src={robopoto} alt="Project 1" className="rounded-lg mb-4" />
                    <p className="text-center">2024 yılında Los Angeles AeroSpace Valley Regional için ekibimle beraber yapmış olduğum FRC robotu</p>
                </div>

                <div className="flex flex-col items-center">
                    <img src={tensorfoto} alt="Project 2" className="rounded-lg mb-4" />
                    <p className="text-center">Aktif olarak ilgilendiğim yapay zeka projelerinde en çok bahsedilen neuronların basit bir fotosu</p>
                </div>

                <div className="flex flex-col items-center">
                    <img style={{inlineSize:250}} src={ttrobopoto} alt="Project 3" className="rounded-lg mb-4" />
                    <p className="text-center">2023 yılında Esenler Robot yarışması için ekibimle beraber yapmış olduğum FRC robotu</p>
                </div>
            </div>

            <div className="mt-8 text-center">
                <p>Bu projeler şunları içeriyor...</p>
                <p>Detaylı açıklama metni buraya gelecek.</p>
            </div>
        </div>
    );
};

export default Project;
