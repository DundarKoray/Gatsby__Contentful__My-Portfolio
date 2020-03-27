import React from 'react';
import defaultImg from '../../assets/images/hero.jpg'
import './styles.css'

const SubPageHeader = ({ img, children, height }) => {
    const backgroundStyle1 = {
        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${img}) center/cover fixed no-repeat`,
        minHeight: `${height}vh`


    }
    return (
        <header className="sub-page-header" style={backgroundStyle1}>
            {children}
        </header>
    );
};

SubPageHeader.defaultProps = {
    img: defaultImg,
    height: 60
}

export default SubPageHeader