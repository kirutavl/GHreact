import React from 'react';

import classes from './Menu.module.css';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';

const Menu = (props) => (
    <header className={classes.Toolbar}>
        <nav className={classes.DesktopOnly}>
            <NavigationItems 
                items={[
                    {linkText: 'Billing Codes', href:'/', active:true},
                    {linkText: 'Checkout', href:'/checkout'}
                ]} />
        </nav>
    </header>
);

export default Menu;