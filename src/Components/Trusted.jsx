import React from 'react'

const Trusted = () => {

  const logos = [
    {
      name: 'metamask',
      url: 'metamask.svg'
    },
    {
      name: 'delta',
      url: 'delta.svg'
    },
    {
      name: 'nfttrade',
      url: 'nfttrade.svg'
    },
    {
      name: 'polygon',
      url: 'polygon.svg'
    }
  ]

  return (
    <>
      <section id='trusted'>
        <div className="trusted">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="text-center">
                  <h4 className="h4">TRUSTED BY INDUSTRY LEADERS</h4>
                </div>
                <div className="d-flex align-items-stretch justify-content-center gap-5">
                  {logos.map(({name, url}) => {
                    return (
                      <div className="logo d-flex align-items-center justify-content-center" key={name}>
                        <img src={`/images/trusted/${url}`} alt={name}/>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Trusted
