import React from 'react';
import Img from 'gatsby-image'
import './styles.css'



const Project = ({ image, title }) => {
    return (
        <figure className="portfolio__photos">
            <div className="inside">
                <a className="inside__link" href="#">
                    <Img
                        className="inside__pic"
                        fixed={image}
                        alt={title}
                    />
                    <span className="portfolio__hidden-title">
                        <span>{title}</span>
                    </span>
                </a>
            </div>
        </figure>
    );
};

export default Project;