import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BsQuestionCircle } from 'react-icons/bs'
import Image from 'next/image'
import mastercard from '../public/mastercard.svg'
import visacard from '../public/visa.svg'
import maestrocard from '../public/maestro.svg'
import paycard from '../public/pay.svg'

const CardSection = () => {
  return (
    <section className="card-section">
      <Container>
        <div className="titleContainer">
          <h1 className="title">A wide choice of ways to send money online from the UK</h1>
          <p>WorldRemit is a fast and secure service that lets you transfer money online using a computer, smartphone, or our app.</p>
        </div>
        <Row>
          <Col lg={3}>
            <div className="card">
              <h5 className="card-title">Bank transfer</h5>
              <p>Send a secure bank transfer directly to hundreds of major banks worldwide.</p>
              <small><BsQuestionCircle className="icon" /> <a href="#"> learn more</a></small>
            </div>
          </Col>
          <Col lg={3}>
            <div className="card">
              <h5 className="card-title">Cash pickup</h5>
              <p>Cash is available to collect within minutes from many locations across the country.</p>
              <small><BsQuestionCircle className="icon" /> <a href="#"> learn more</a></small>
            </div>
          </Col>
          <Col lg={3}>
            <div className="card">
              <h5 className="card-title">Mobile Money</h5>
              <p>Send directly to mobile money accounts across the globe, within minutes.</p>
              <small><BsQuestionCircle className="icon" /> <a href="#"> learn more</a></small>
            </div>
          </Col>
          <Col lg={3}>
            <div className="card">
              <h5 className="card-title">Artime top up</h5>
              <p>Mobile artime added instantly.</p>
              <small><BsQuestionCircle className="icon" /> <a href="#"> learn more</a></small>
            </div>
          </Col>
        </Row>
        <div className="paymentContainer">
          <p>Pay by:</p>
          <div className="paymentList">
            <Image src={visacard} alt="visacard" width="100" />
            <Image src={maestrocard} alt="maestrocard" width="100" />
            <Image src={mastercard} alt="mastercard" width="100" />
            <Image src={paycard} alt="paycard" width="100" />
          </div>
        </div>
      </Container>      
    </section>
  )
}

export default CardSection
