import React, { Component } from 'react'

class Description extends Component {
  render() {
    return (
      <div className="row" id="description">
        <div className="col-sm-12">
          <div>
            <header className="text-center" id="description-header">
              <h2>Discover the power of investing in each other for long term success.</h2>
            </header>
          </div>
        </div>
        <div className="col-sm-4 text-center">
          <div className="product-headers">
            <h2>Individual</h2>
          </div>
          <div className="icon-border">
            <span className="glyphicon glyphicon-user product-icon"></span>
          </div>
          <div className="product-headers">
            <h4>Personal Funding</h4>
          </div>
          <div className="products-description">
            <p>Family and friends can directly invest in the future of those they love, while determining how and when funds are released. Whether upon graduation,  their 16th birthday, or next week, you decide when and why.</p>
          </div>
        </div>
        <div className="col-sm-4 text-center">
          <div className="product-headers">
            <h2>Community</h2>
          </div>
          <div className="icon-border">
            <span className="glyphicon glyphicon-resize-horizontal product-icon"></span>
          </div>
          <div className="product-headers">
            <h4>Charity Fundraiser</h4>
          </div>
          <div className="products-description">
            <p>Community groups, charities and churches can give bitcoin as long term rewards to those who volunteer and serve them. Create charity fundraisers and competitions, with payouts direct to the charity of your choice. </p>
          </div>
        </div>
        <div className="col-sm-4 text-center">
          <div className="product-headers">
            <h2>Sports</h2>
          </div>
          <div className="icon-border">
            <span className="glyphicon glyphicon-object-align-vertical product-icon"></span>
          </div>
          <div className="product-headers">
            <h4>Local Sports</h4>
          </div>
          <div className="products-description">
            <p>Create tournaments and prize pools for local sporting events, leagues and games of skill while rewarding the players and increasing interest and attendance. Create Fantasy Sports leagues and competitions.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Description