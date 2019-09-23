import React from 'react'
import ResumeItem from './ResumeItem'
import { useStaticQuery, graphql } from 'gatsby'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import Img from 'gatsby-image'
import './styles.css'

const Resume = () => {

  const getExperience = useStaticQuery(graphql`{
        experience:allContentfulResumeExperience(sort:{fields: endDate, order:DESC}) {
     edges {
       node {
         id
         title
        companyName
        jobTitle
        startDate(formatString: "MMM YYYY")
        endDate(formatString: "MMM YYYY")
        location
        jobDescription {
          id
          jobDescription
        }
        
       }
     }
   }
   education:allContentfulResumeEducation(sort:{fields: endDate, order:DESC}) {
  edges {
    node {
      id
      title
      startDate(formatString: "MMM YYYY")
      endDate(formatString: "MMM YYYY")
      degreeName
      schoolName
      location
      description{
        id
        description
      }
    }
  }
}
    introduction: contentfulResumeIntroduction {
      id
      intro
      introImage {
        fixed(width:150) {
          base64
          aspectRatio
          width
          height
          src
          srcSet
          srcWebp
          srcSetWebp
        }
      }
    }
    languages: allContentfulResumeLanguage {
  edges {
    node {
      id
      title
      languageList
      projectDetails
      role
    }
  }
}

    }`)

  const { experience, education, introduction, languages } = getExperience
  return (
    <section className="resume-section">
      <div className="container">
        <div className="resume-introduction">
          <h2 className="resume-profile-title">Profile</h2>
          <p className="resume-intro-text">
            <FaQuoteLeft className="quote-left" />{introduction.intro}<FaQuoteRight className="quote-right" />
          </p>
          <div className="resume-image-wrapper">
            <hr className="resume-hr" />
            <Img className="resume-picture" fixed={introduction.introImage.fixed} />

          </div>
        </div>
      </div>
      <div className="resume-field">
        {
          experience.edges.map(({ node: item }) => {
            return (
              <ResumeItem
                key={item.id}
                title={item.title}
                companyName={item.companyName}
                startDate={item.startDate}
                endDate={item.endDate}
                jobTitle={item.jobTitle}
                description={item.jobDescription.jobDescription}
                location={item.location}
              />
            )
          })

        }
      </div>

      <div className="resume-field">
        {
          education.edges.map(({ node: item }) => {
            return (
              <ResumeItem
                key={item.id}
                title={item.title}
                companyName={item.schoolName}
                startDate={item.startDate}
                endDate={item.endDate}
                jobTitle={item.degreeName}
                description={item.description.description}
                location={item.location}
              />
            )

          })
        }

      </div>
      <div className="resume-field">
        {
          languages.edges.map(({ node: item }) => {
            return (
              <ResumeItem
                key={item.id}
                title={item.title}
                language={item.languageList}
                projectDetails={item.projectDetails}
                role={item.role}
              />

            )
          })


        }
      </div>
    </section>
  )
}

export default Resume
