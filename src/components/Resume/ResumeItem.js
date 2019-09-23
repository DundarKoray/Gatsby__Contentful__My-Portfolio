import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import './resumeItem.css'

const ResumeItem = ({ title, companyName, startDate, endDate, jobTitle, description, location, language, role, projectDetails }) => {

    return (
        <div className="container">
            <div className="row-container">
                {title !== null ? <h2 className="experience-title">{title}</h2> : null}


                <div className="job-box">
                    {(companyName !== null && role !== null) ?
                        <div className="company-box">
                            <h3 className="job-title">{jobTitle}</h3>
                            <h3 className="company-name">{companyName ? companyName : role}</h3>
                            <p className="working-date">{startDate && startDate + "-" + (endDate ? endDate : '')}</p>
                        </div> : null}
                    {language ? <ul className="ul">{language.map((lang, index) => <li key={lang + index} className="lang-list">{lang}</li>)}</ul> : null}
                    <p className="job-description">{description ? description : projectDetails}</p>
                    <div className="location-container">
                        <div className="location-icon">
                            {
                                location ? <FaMapMarkerAlt /> : null
                            }
                        </div>
                        {
                            location ? <p className="location">{location}</p> : null
                        }

                    </div>
                </div>

            </div>
        </div>
    )
}

export default ResumeItem

ResumeItem.defaultProps = {
    title: "",
    companyName: "",
    startDate: "",
    jobTitle: "",
    description: "",
}