import React from "react";
import "./style/style.css";
import { Link } from "react-router-dom";

function InfrastructureItem() {
    return (
        <div className="flex flex-row justify-between">

            <div className="w-1/2 h-auto">
                <div className="bistro bg-no-repeat bg-cover mb-8"></div>
                <div className="text-2xl text-brown">
                <Link to="/restaurant">ATLAS Bistro</Link>
                    </div>
                <div className="text-lg text-grey textOpacity py-2">Ресторан неофранцузской кухни</div>
            </div>
            <div className="w-1/2 h-auto">
                <div className="parking bg-no-repeat bg-cover mb-8"></div>
                <div className="text-2xl ">Подземный паркинг</div>
                <div className="text-lg text-grey textOpacity py-2">Просторный отапливаемый паркинг на 67 машиномест с доступом на этажи</div>
            </div>
        </div>
    );
};

export default InfrastructureItem;