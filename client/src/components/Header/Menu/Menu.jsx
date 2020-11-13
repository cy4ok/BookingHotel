import React from 'react'; 
import MenuItem from '../MenuItem';

class Menu extends React.Component {

    render() {
        return(
            <nav class="md:flex space-x-10">
                <MenuItem name="Апарт-отели" url="/apartments"/>   
                <MenuItem name="Бронировать апартаменты" url="/booking"/>
                <MenuItem name="Корпоративным клиентам" url="/to-clients"/>
            </nav>
        );
    }
}

export default Menu;
