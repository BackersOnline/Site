import React, { Component } from 'react'

class Bitcoin extends Component {
  render() {
    return (
        <div className="row" id="bitcoin">
            <div className="col-sm-4 text-center">
            <div>
                <h1>The Dollar</h1>
            </div>
            <div>
                <div className="bitcoin-icon-border inline-div">
                    <span className="glyphicon glyphicon-usd"></span>
                </div>
                <div className="inline-div number-buffer">
                    <h1 className="inline-div">-98%</h1>
                </div>
            </div>
            <div>
                <p>The dollar has lost 98% of its buying power since the creation of the federal reserve, with much more on the way as we print money and devalue the currency. 
                The dollar is falling.</p>
            </div> 
            </div>
            <div className="col-sm-4 text-center">
            <div>
                <h1>Gold</h1>
            </div>
            <div>
                <div className="bitcoin-icon-border inline-div">
                    <span className="glyphicon glyphicon-certificate"></span>
                </div>
                <div className="inline-div number-buffer">
                    <h1 className="inline-div">100%</h1>
                </div>
            </div>
            <div>
                <p>Gold has retained 100% of its value over the last 1,500 years and has been unaffected by Government’s manipulation of Fiat Currencies. 
                Gold is Holding.</p>
            </div> 
            </div>
            <div className="col-sm-4 text-center">
                <div>
                    <h1>Bitcoin</h1>
                </div>
                <div>
                    <div className="bitcoin-icon-border inline-div">
                        <span className="glyphicon glyphicon-bitcoin"></span>
                    </div>
                <div className="inline-div number-buffer">
                    <h1 className="inline-div">34,465%</h1>
                </div>
            </div>
            <div>
                <p>The value of Bitcoin continues to rise as its supply cannot be manipulated by Governments.  It has emerged as the only safe store of value as Global Currency Manipulation has become the norm. 
                Bitcoin is Rising.</p>
            </div> 
            </div>
            <div className="col-sm-12">
              <hr/>
            </div>
            <div className="col-sm-12">
               <p>The buying power of the U.S. Dollar has fallen to just two percent of its original worth since the creation of the federal reserve in 1913, making every dollar saved 98% worth-less. People explain this as inflation, but inflation only occurs when you devalue a currency or asset.  As the U.S. prints money it devalues each of our savings and salaries, putting pressure on our family budgets and our future financial stability.   The buying power of gold over the last 1500 years has remained relatively constant. The gold supply can not be manipulated.  Its buying power has not changed and inflation has not affected it.  Bitcoin is the new gold standard; it can not be manipulated or devalued by any government or group.  The buying power of Bitcoin is up over 750% from December of 2016.  Inspired by the rarity of gold, Bitcoin was designed to have a fixed supply of 21 million coins, over half of which have already been produced.  Bitcoin is the new global choice for long term asset retention and store of value.</p>
            </div>
        </div>
    )
  }
}

export default Bitcoin