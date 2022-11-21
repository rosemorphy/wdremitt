import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import phoneImage from '../public/phones.png'
import appStore from '../public/app-store.svg'
import playStore from '../public/play-store.svg'

const MobileSection = () => {
  return (
    <div className='mobile-section'>
      <Container>
        <Row>
          <Col lg={6}>
            <div className="imageContainer">
              <Image src={phoneImage} alt="Phone-Image" width="400" />
            </div>
          </Col>
          <Col lg={5}>
            <div className='content'>
              <h3>A fast and secure way to send money on the go in the UK</h3>
              <p>
                Download our app for free to send money online in minutes to
                over 130 other countries. Track your payments and view your
                transfer history from anywhere.
              </p>
              <div className='appButtons'>
                <Image src={appStore} alt='AppStore button' width='200' />
                <Image src={playStore} alt='AppStore button' width='200' />
              </div>
              {/* <div className="mobileInput">
                <input type="text" placeholder="" />
              </div> */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MobileSection
