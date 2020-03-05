import React from 'react';

import classes from './Menu.module.css';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';

const Menu = (props) => (
	<div class="sub-nav-wrap text-center text-md-left" className={classes.Toolbar}>
    <h1 class="h3 mb-md-32 py-16 px-8 p-md-0 _subnavToggle">
        Settings
        <span class="d-inline-flex align-items-center d-md-none">&nbsp;<span class="i-arrow-vert ml-12"></span></span>
    </h1>
    <div class="relative">
<div class="sub-nav-scrollable no-scroll" className={classes.SubNavScroll}>

    <NavigationItems 
                items={[
                    {linkText: 'Billing Codes', href:'/', active:true},
                    {linkText: 'Payment', href:'/payment'}
                ]} />
</div>
</div>
</div>
);

export default Menu;