import React from 'react'
import './styles.css'

const ServiceCard = ({ title, text }) => (
  <div className="service-card">
    <h2 className="service-card-title">{title}</h2>
    <p className="service-card-text">{text}</p>
  </div>
)

export default ServiceCard
