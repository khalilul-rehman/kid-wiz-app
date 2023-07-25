import React from 'react'

const RibbonIcon = ({
  color = '#363636',
  size = 32,
}) => {
  return (
    <svg
      width={size * (32 / 32)}
      height={size * (32 / 32)}
      viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_4278_8592)">
        <path d="M16.9288 21.3075C16.6274 21.3284 16.3231 21.3388 16.0159 21.3388C15.6424 21.3388 15.2731 21.3228 14.9081 21.2928C13.1024 21.1434 11.3527 20.6316 9.7787 19.7923C8.20472 18.953 6.84368 17.8061 5.78881 16.4302C5.76102 16.3932 5.72362 16.3634 5.68012 16.3436C5.63662 16.3238 5.58844 16.3146 5.5401 16.3169C5.49176 16.3192 5.44485 16.333 5.40377 16.3569C5.36269 16.3808 5.32878 16.414 5.30523 16.4535L0.162377 25.0802C-0.0333369 25.4135 -0.0640511 25.8135 0.142378 26.1388C0.249836 26.3001 0.399533 26.4332 0.577361 26.5256C0.755189 26.618 0.955291 26.6666 1.15881 26.6668H6.73023C6.92431 26.6601 7.11679 26.7019 7.2878 26.7878C7.45882 26.8737 7.60218 27.0006 7.70309 27.1555L10.4645 31.4668C10.5656 31.6268 10.709 31.7598 10.8809 31.8532C11.0529 31.9466 11.2477 31.9972 11.4467 32.0002C11.8709 31.9782 12.3102 31.7208 12.4867 31.3602L17.2088 21.6835C17.2292 21.6414 17.2375 21.5952 17.233 21.5492C17.2285 21.5033 17.2113 21.4592 17.1831 21.4213C17.1549 21.3834 17.1166 21.353 17.0721 21.3331C17.0275 21.3131 16.9781 21.3043 16.9288 21.3075ZM31.8317 25.0588L26.7224 16.4475C26.6988 16.4084 26.665 16.3755 26.6241 16.3519C26.5833 16.3282 26.5367 16.3145 26.4887 16.3121C26.4407 16.3098 26.3929 16.3187 26.3495 16.3382C26.3062 16.3576 26.2689 16.387 26.2409 16.4235C24.8359 18.2609 22.8941 19.6823 20.6474 20.5182C20.3715 20.6196 20.1483 20.8167 20.0245 21.0682L17.3917 26.4748C17.3578 26.5438 17.3402 26.6189 17.3402 26.6948C17.3402 26.7708 17.3578 26.8458 17.3917 26.9148L19.5538 31.3542C19.7288 31.7148 20.1674 31.9782 20.591 32.0002C20.7901 31.9956 20.9846 31.9434 21.1559 31.8486C21.3272 31.7538 21.4696 31.6196 21.5695 31.4588L24.3217 27.1535C24.5281 26.8302 24.9024 26.6648 25.306 26.6668H30.9324C31.4088 26.6668 31.7695 26.4348 31.9324 26.0002C31.9896 25.8458 32.0103 25.6817 31.9929 25.5192C31.9755 25.3566 31.9205 25.1996 31.8317 25.0588Z" fill={color} />
        <path d="M16.0186 12.7999C17.9126 12.7999 19.4479 11.3672 19.4479 9.5999C19.4479 7.83259 17.9126 6.3999 16.0186 6.3999C14.1247 6.3999 12.5894 7.83259 12.5894 9.5999C12.5894 11.3672 14.1247 12.7999 16.0186 12.7999Z" fill={color} />
        <path d="M16.0191 0C10.3463 0 5.7334 4.306 5.7334 9.6C5.7334 14.894 10.3484 19.2 16.0191 19.2C21.6898 19.2 26.3048 14.8933 26.3048 9.6C26.3048 4.30667 21.6913 0 16.0191 0ZM16.0191 14.9333C14.8889 14.9333 13.7841 14.6205 12.8444 14.0345C11.9047 13.4485 11.1723 12.6155 10.7398 11.641C10.3073 10.6664 10.1941 9.59408 10.4146 8.55952C10.6351 7.52495 11.1793 6.57464 11.9785 5.82876C12.7777 5.08288 13.7958 4.57493 14.9043 4.36914C16.0128 4.16336 17.1617 4.26897 18.2059 4.67264C19.25 5.07631 20.1425 5.7599 20.7704 6.63696C21.3983 7.51402 21.7334 8.54517 21.7334 9.6C21.7315 11.0139 21.1289 12.3695 20.0576 13.3693C18.9864 14.3691 17.5341 14.9316 16.0191 14.9333Z" fill={color} />
      </g>
      <defs>
        <clipPath id="clip0_4278_8592">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default RibbonIcon