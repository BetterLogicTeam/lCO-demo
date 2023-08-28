import React from 'react'
import "./Timer.css"
import Model_buy from '../Model_buy/Model_buy';

export default function Timer() {
    const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className='main_timer'>
    <div className="container">
        <div className="row">
            <div className="col-3">
            <div className='text-center'>

                <p className='timer_upper'>00</p>
                <span className='lebel_timer'>Days</span>
            </div>
            </div>
            <div className="col-3">
            <div className='text-center'>

                <p className='timer_upper'>00</p>
                <span className='lebel_timer'>Hours</span>
            </div>
            </div>
            <div className="col-3">
            <div className='text-center'>

                <p className='timer_upper'>00</p>
                <span className='lebel_timer'>Minutes</span>
            </div>
            </div>
            <div className="col-3">
            <div className='text-center'>

                <p className='timer_upper'>00</p>
                <span className='lebel_timer'>Seconds</span>
            </div>
            </div>
        </div>

        <div className="row mt-5 justify-content-center">
            <div className="col-md-10">
                <div className="progress_bar">
                <div className="clr">
                </div>
                    <p className='text_progress'>50%</p>

                </div>
            </div>
        </div>

        <div className="d-flex justify-content-center mt-4">
            <button className='buy_now_btn'  onClick={() => setModalShow(true)}>Buy Now</button>
      
      
            <Model_buy
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        </div>
    </div>


    </div>
  )
}
