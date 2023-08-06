import React from 'react';

const ShapesIcon = ({ color = '#72B316', size = 24 }) => {
  return (
    <svg
      width={size * (26 / 24)}
      height={size * (24 / 24)}
      viewBox='0 0 26 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0_4278_14720)'>
        <path
          d='M17.0183 16.3029H0.90188C0.753806 16.3032 0.608226 16.2645 0.479615 16.1905C0.351004 16.1165 0.243844 16.0098 0.168791 15.8812C0.0937376 15.7525 0.0534063 15.6062 0.0518073 15.4569C0.0502083 15.3076 0.0873974 15.1605 0.159677 15.0302L8.21789 0.491228C8.29148 0.358329 8.39892 0.247641 8.52911 0.170591C8.65931 0.0935396 8.80754 0.0529175 8.9585 0.0529175C9.10947 0.0529175 9.25769 0.0935396 9.38789 0.170591C9.51808 0.247641 9.62552 0.358329 9.69911 0.491228L17.7573 15.0302C17.8295 15.1603 17.8667 15.3071 17.8652 15.4561C17.8637 15.6051 17.8237 15.7512 17.749 15.8798C17.6743 16.0084 17.5676 16.1151 17.4395 16.1893C17.3113 16.2635 17.1661 16.3027 17.0183 16.3029Z'
          fill={color}
        />
        <path
          d='M17.0166 6.89532C16.4365 6.8952 15.858 6.95466 15.2899 7.07279L19.2379 14.1963C19.4543 14.5868 19.5656 15.0275 19.5609 15.4748C19.5562 15.9221 19.4356 16.3603 19.2111 16.7461C18.9866 17.1319 18.666 17.4518 18.2811 17.6741C17.8961 17.8964 17.4602 18.0133 17.0166 18.0134H8.92285C9.39315 19.5211 10.2687 20.868 11.4522 21.9045C12.6358 22.941 14.081 23.6265 15.6276 23.8849C17.1741 24.1433 18.7615 23.9646 20.2134 23.3685C21.6653 22.7724 22.9249 21.7823 23.8525 20.5081C24.7801 19.234 25.3393 17.7255 25.4681 16.1503C25.5969 14.575 25.2902 12.9946 24.5821 11.5844C23.874 10.1743 22.7921 8.9896 21.4566 8.16186C20.1211 7.33412 18.5842 6.89572 17.0166 6.89532Z'
          fill={color}
        />
      </g>
      <defs>
        <clipPath id='clip0_4278_14720'>
          <rect
            width='25.5'
            height='24'
            fill='white'
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ShapesIcon;
