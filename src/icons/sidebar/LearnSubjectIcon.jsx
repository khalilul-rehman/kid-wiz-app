import React from 'react'

const LearnSubjectIcon = ({
  color = '#A7A7A7',
  size = 20,
}) => {
  return (
    <svg
      width={size * (20 / 20)}
      height={size * (20 / 20)}
      viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M5.34444 0.263672H14.6567C18.0889 0.263672 20 2.01353 20 5.01189V15.167C20 18.2145 18.0889 19.925 14.6567 19.925H5.34444C1.96667 19.925 0 18.2145 0 15.167V5.01189C0 2.01353 1.96667 0.263672 5.34444 0.263672ZM5.64444 4.84477V4.83494H8.96556C9.44444 4.83494 9.83333 5.17902 9.83333 5.60075C9.83333 6.03429 9.44444 6.37836 8.96556 6.37836H5.64444C5.16556 6.37836 4.77778 6.03429 4.77778 5.61157C4.77778 5.18885 5.16556 4.84477 5.64444 4.84477ZM5.64444 10.8218H14.3556C14.8333 10.8218 15.2222 10.4778 15.2222 10.055C15.2222 9.63232 14.8333 9.28726 14.3556 9.28726H5.64444C5.16556 9.28726 4.77778 9.63232 4.77778 10.055C4.77778 10.4778 5.16556 10.8218 5.64444 10.8218ZM5.64444 15.3145H14.3556C14.7989 15.2751 15.1333 14.9399 15.1333 14.5477C15.1333 14.1446 14.7989 13.8104 14.3556 13.771H5.64444C5.31111 13.7415 4.98889 13.8792 4.81111 14.1348C4.63333 14.3805 4.63333 14.705 4.81111 14.9606C4.98889 15.2063 5.31111 15.3538 5.64444 15.3145Z" fill={color} />
    </svg>
  )
}

export default LearnSubjectIcon