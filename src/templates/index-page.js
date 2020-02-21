import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import '../assets/scss/app.scss'
import CaseStudyList from '../components/organisms/CaseStudyList'
import ContactForm from '../components/organisms/ContactForm'
import HomePageAnimation from '../components/organisms/HomeAnimation'

import jigglyDoo from './../../static/img/jigglydoo.png';
import greenBlob from './../../static/img/greenblob.png';
import dots from './../../static/img/center_lane_dots.png';

export const IndexPageTemplate = ({
  title,
  secondaryTitle,
  subTitle,
}) => (
    <div>
      <HomePageAnimation />
      <div className = "o-hero">
        <img className = "o-hero__background -jigglydoo" src = { jigglyDoo } />
        <img className = "o-hero__background -dots" src = { dots } />
        <img className = "o-hero__background -greenblob" src = { greenBlob } />
        <div className = "o-rhythm__container">
          <div className = "o-hero__top">
            <div className = "o-hero__titles">
                <h1 className = "-after">{ title }</h1>
                <p className = "-before">{ secondaryTitle }</p>
            </div>
          </div>
          <div className = "o-hero__subtitles">
            <h3>{ subTitle }</h3>
          </div>
          <h6>A Design Company</h6>
        </div>
      </div>
    </div>
)

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <IndexPageTemplate
        title          = { frontmatter.title }
        secondaryTitle = { frontmatter.secondaryTitle }
        subTitle       = { frontmatter.subTitle }
      />
      <CaseStudyList/>
      <ContactForm/>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        secondaryTitle
        subTitle
      }
    }
  }
`
