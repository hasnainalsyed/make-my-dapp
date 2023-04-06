import React from 'react'

const CrossChain = () => {

  const logos = [
    {
      name: 'aptos',
      url: 'aptos.svg'
    },
    {
      name: 'arbitrum',
      url: 'arbitrum.svg'
    },
    {
      name: 'binance',
      url: 'binance.svg'
    },
    {
      name: 'cronos',
      url: 'cronos.svg'
    },
    {
      name: 'ethereum',
      url: 'ethereum.svg'
    },
    {
      name: 'fantom',
      url: 'fantom.svg'
    },
    {
      name: 'palm',
      url: 'palm.svg'
    },
    {
      name: 'polygon',
      url: 'polygon.svg'
    },
    {
      name: 'solana',
      url: 'solana.svg'
    },
    {
      name: 'testnet',
      url: 'testnet.svg'
    }
  ]

  return (
    <>
      <section id='cross-chain'>
        <div className="cross-chain section-padding">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="text-left">
                  <h2 className="heading color-blue">Cross-chain compatible</h2>
                </div>
                <div className="logos">
                  {logos.map(({name, url}) => {
                    return (
                      <div className="logo" key={name}>
                        <div className="img">
                          <div className="inner">
                            <img src={`/images/cross-chain/${url}`} alt={name} className='img-fluid'/>
                          </div>
                        </div>
                        <span>{name}</span>
                      </div>
                    )
                  })}
                </div>
                <div className="text-center mt-60">
                  <a href='/chains' className='btn btn-link'>
                    <i className="fa-solid fa-circle-arrow-right"></i> More about chains</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CrossChain
