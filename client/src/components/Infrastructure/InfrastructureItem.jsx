import React from "react";
import "./style/style.css";
import { Link } from "react-router-dom";

function InfrastructureItem() {
    return (
        <div className="flex flex-row ">

            <div className="w-1/2 p-2  h-auto">
                <div className="bistro mb-4"></div>
                <div className="text-2xl py-4 text-brown">
                <Link to="/restaurant">ATLAS Bistro</Link>
                    </div>
                <div className="text-lg textGray">Ресторан неофранцузской кухни</div>
            </div>
            <div className="w-1/2 p-2  h-auto">
                <div className="parking mb-4"></div>
                <div className="text-2xl py-4">Подземный паркинг</div>
                <div className="text-lg textGray">Просторный отапливаемый паркинг на 67 машиномест с доступом на этажи</div>
            </div>
        </div>
    );
};

export default InfrastructureItem;