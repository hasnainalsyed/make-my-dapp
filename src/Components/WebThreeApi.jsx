import React from 'react';
import logo from './../logo.svg';

const WebThreeApi = () => {
  return (
    <>
      <section id='web-three-api'>
        <div className="web-three-api bg-black">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="web-three-inner">
                  <h2 className="heading text-white">The fastest <br /> Web3 APIs around</h2>
                  <div className="row">
                    <div className="col-md-8">
                      <div className="barChart">
                        
                        <div className="barChartBox" style={{'width': '50%'}}>
                          <div className="logo">
                            <img src={logo} className="img-fluid" alt="logo" />
                          </div>
                          <div className="text">
                            <p>0.5s</p>
                            <span>Response Time</span>
                          </div>
                        </div>
                        <div className="bar moralisBar" style={{'width': '50%'}}></div>

                        <div className="barChartBox" style={{'width': '60%'}}>
                          <div className="logo">
                            <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M21.0007 5.35797L39.2651 36.9929H2.73633L21.0007 5.35797Z" fill="#5B8DB9"></path> <path d="M14.0855 17.3354L25.4347 36.9929H2.73633L14.0855 17.3354Z" fill="#396993"></path> </svg>
                            Competitor A
                          </div>
                          <div className="text">
                            <p>0.87s</p>
                          </div>
                        </div>
                        <div className="bar" style={{'width': '60%'}}></div>

                        <div className="barChartBox" style={{'width': '77%'}}>
                          <div className="logo">
                            <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M21.0007 5.35797L39.2651 36.9929H2.73633L21.0007 5.35797Z" fill="#5B8DB9"></path> <path d="M14.0855 17.3354L25.4347 36.9929H2.73633L14.0855 17.3354Z" fill="#396993"></path> </svg>
                            Competitor B
                          </div>
                          <div className="text">
                            <p>1.1s</p>
                          </div>
                        </div>
                        <div className="bar" style={{'width': '77%'}}></div>

                        <div className="barChartBox" style={{'width': '100%'}}>
                          <div className="logo">
                            <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M21.0007 5.35797L39.2651 36.9929H2.73633L21.0007 5.35797Z" fill="#5B8DB9"></path> <path d="M14.0855 17.3354L25.4347 36.9929H2.73633L14.0855 17.3354Z" fill="#396993"></path> </svg>
                            Competitor C
                          </div>
                          <div className="text">
                            <p>1.65s</p>
                          </div>
                        </div>
                        <div className="bar" style={{'width': '100%'}}></div>

                      </div>
                    </div>
                    <div className="col-md-4">
                      <h4 className="heading text-white">Industry-leading API response times, high reliability, clean, organized data.</h4>
                      <a href="/register" className='btn btn-link'><i className="fa-solid fa-circle-arrow-right"></i> Try it now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="web-hooks bg-black">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <span className="tag">NEW</span>
                <h3 className="heading text-white">Stream real-time data with webhooks</h3>
                <p className="big-text text-white">Enhance your dapp by streaming real-time blockchain data to your backend from Ethereum, Polygon, Avalanche, BNB Chain, Fantom, Cronos and all testnets.</p>
                <a href="/api" className='btn btn-link'><i className="fa-solid fa-book"></i> Read more about Streams</a>
              </div>
              <div className="col-md-6">
                <div className="img-wrap">
                  <img src="/images/moralisStreamsNew.svg" alt="moralisStreamsNew" className='img-fluid' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WebThreeApi
