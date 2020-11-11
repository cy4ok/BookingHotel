import React from 'react'; 
import MenuItem from '../MenuItem';

class Menu extends React.Component {

    render() {
        return(
            <nav class="md:flex space-x-10">
                <MenuItem name="Апарт-отели"/>   
                <MenuItem name="Бронировать апартаменты"/>
                <MenuItem name="Корпоративным клиентам"/>
            </nav>
        );
    }
}

export default Menu;
