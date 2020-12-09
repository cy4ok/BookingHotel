import React from "react";
import OurAdvantagesItem from "./OurAdvantagesItem";
import { OurAdvantagesItems } from "./OurAdvantagesItems";
import "./style/style.css";


function OurAdvantages() {
    return (
        <div className="advantages bg-primary text-white mt-20">
            <div className="container px-12">
                <div className="advantages-inner flex flex-wrap justify-between pt-10 pb-20 ">
                    <div className="advantages-img  lg:w-3/5 sm:w-full md:full  bg-cover bg-center bg-no-repeat lg:-ml-16 lg:-mt-20 sm:ml-0  sm:mt-0 "></div>
                    <div className="advantages-text md:w-full md:full lg:w-2/5 pt-5">
                        <div className="  pl-16 text-left uppercase text-xs font-bold mb-10"> наши преимущества </div>
                        {OurAdvantagesItems.map((d, i) => (
                            <OurAdvantagesItem
                                key={i}
                                icon={d.icon}
                                title={d.title}
                                text={d.text}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurAdvantages;