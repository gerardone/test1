import React from 'react'

const QuoteButton = ({newQuote, color}) => {
  return (
    <button className='quoteBox_button' onClick={newQuote} style={{backgrpundColor: color}} >
        <i className='' ></i>
    </button>
  )
}

export default QuoteButton