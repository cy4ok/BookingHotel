import React from 'react';
import ApartmentItem from './ApartmentItem';
import { apartmentItems } from './ApartmentItems';

const Apartments = () => {
    return (
        <div className="w-full mb-16 mt-12">
            <div className="container">
                <h4 className="uppercase text-xs font-bold">апартаменты и планировки</h4>
                <div className="flex">
                    {apartmentItems.map(({ img, title, text }, idx) => {
                        return (
                            <ApartmentItem img={img} title={title} text={text} key={idx} />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Apartments;