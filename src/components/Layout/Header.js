import { Fragment } from "react";

import image from '../../assets/scoobert.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
const Header = props => {
    return (
    <Fragment>
        <header className={classes.header}>
            <h1>Opium Meals</h1>
            <HeaderCartButton/>
        </header>
        <div className={classes['main-image']}>
            <img src={image} alt="Scoobert"/>
        </div>
    </Fragment>
    );
};

export default Header;