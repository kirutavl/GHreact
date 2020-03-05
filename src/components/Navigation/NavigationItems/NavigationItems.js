import React from 'react';
import classes from './NavigationItems.module.css';

const NavigationItems = (props) => {
    const items = props.items.map((el, index) => (
        <li key={index}><a href={el.href} className={el.active ? classes.active : null}>{el.linkText}</a></li>
    ));

    return (
        <ul class="sub-nav" className={classes.NavigationItems}>
            {items}
        </ul>
    );
};

export default NavigationItems;