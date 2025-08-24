import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import desertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {

    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category == 'dessert');
    const soup = menu.filter(item => item.category == 'soup');
    const salad = menu.filter(item => item.category == 'salad');
    const pizza = menu.filter(item => item.category == 'pizza');
    const offered = menu.filter(item => item.category == 'offered');

    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu" ></Cover>
            {/* Offered */}
            <SectionTitle subHeading="our menu" heading="Don't Miss"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            {/* Desert */}
            <MenuCategory 
            items={desserts} title="desert" img = {desertImg}></MenuCategory>
            {/* Pizza */}
            <MenuCategory 
            items={pizza} title="pizza" img = {pizzaImg}></MenuCategory>
            {/* Salad */}
            <MenuCategory 
            items={salad} title="salad" img = {saladImg}></MenuCategory>
            {/* Soup */}
            <MenuCategory 
            items={soup} title="soup" img = {soupImg}></MenuCategory>
            
        </div>
    );
};

export default Menu;