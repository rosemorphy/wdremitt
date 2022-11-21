import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import clockIcon from '../public/clock.svg'
import valueIcon from '../public/value.svg'
import safeIcon from '../public/safe.svg'

const ChooseSection = () => {
  return (
    <section className="chooseSection">
      <div className="container">
        <h1 className="section-title">Why choose WorldRemit?</h1>
        <Row>
          <Col lg="4">
            <div className="cards">
              <Image src={clockIcon} alt="icon" width="70%" />
              <h2>We&lsquo;re Fast</h2>
              <p>95% of our transfers are ready in minutes.</p>
            </div>
          </Col>
          <Col lg="4">
            <div className="cards">
              <Image src={safeIcon} alt="icon" width="70%" />
              <h2>We&lsquo;re Safe</h2>
              <p>We use industry-leading technology to protect your money.</p>
            </div>
          </Col>
          <Col lg="4">
            <div className="cards">
              <Image src={valueIcon} alt="icon" width="70%" />
              <h2>We&lsquo;re Low-Cost</h2>
              <p>We offer better exchange rates and lower fees than most conventional banks and money transfer services.</p>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default ChooseSection