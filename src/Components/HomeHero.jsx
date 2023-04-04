import React from 'react'
import EmailForm from './EmailForm'
import { TypeAnimation } from 'react-type-animation'

const HomeHero = () => {

  const words = [ 'NFT marketplaces', 'NFT authentication', 'NFT auction sites', 'portfolio apps', 'live price feeds', 'block explorers', 'in-game events'];

  return (
    <>
      <section className='homepage-hero h-100vh'>
        <div className="homepage-hero">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="main-heading d-flex flex-column">
                  <span>Build</span>
                  <TypeAnimation 
                    sequence={words}
                    speed={1}
                    repeat={Infinity}
                    deletionSpeed={1}
                    cursor={true}
                    wrapper="span"></TypeAnimation>
                  <span>faster than ever</span>
                </h1>
                <p className="main-desc">Enterprise-grade APIs and real-time blockchain data that make Web3 development as easy as Web2.</p>
                <EmailForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeHero
