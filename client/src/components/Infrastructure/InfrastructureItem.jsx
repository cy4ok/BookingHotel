import React from "react";
import "./style/style.css";

function InfrastructureItem() {
    return (
        <div className="flex flex-row ">

            <div className="w-1/2 p-2 h-auto">
                <div className="bistro img"></div>
                <div className="text-2xl p-4">ATLAS Bistro</div>
                <div className="text-lg p-2">Ресторан неофранцузской кухни</div>
            </div>
            <div className="w-1/2 p-2 h-auto">
                <div className="parking"></div>
                <div className="text-2xl p-4">Подземный паркинг</div>
                <div className="text-lg p-2">Просторный отапливаемый паркинг на 67 машиномест с доступом на этажи</div>
            </div>
        </div>
    );
};

export default InfrastructureItem;