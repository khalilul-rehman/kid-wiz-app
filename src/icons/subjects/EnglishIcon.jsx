import React from 'react'

const EnglishIcon = ({
  color = '#A7A7A7',
  size = 14,
}) => {
  return (
    <svg
      width={size * (12 / 12)}
      height={size * (12 / 12)}
      viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_4278_8517)">
        <path d="M10.6873 7.7305C10.6605 7.63407 10.7194 7.50014 10.7757 7.40371C10.7929 7.37501 10.8116 7.34729 10.8319 7.32067C11.3131 6.60572 11.5704 5.7637 11.5712 4.90193C11.5792 2.43228 9.49531 0.428711 6.91853 0.428711C4.6712 0.428711 2.79621 1.95817 2.35692 3.98853C2.2912 4.28946 2.25798 4.59658 2.25781 4.9046C2.25781 7.37693 4.26138 9.43407 6.83817 9.43407C7.24799 9.43407 7.79978 9.31085 8.10245 9.22782C8.40513 9.14478 8.70513 9.03496 8.78281 9.0055C8.86244 8.97548 8.94682 8.96005 9.03192 8.95996C9.12477 8.95961 9.21675 8.97782 9.30245 9.01353L10.8212 9.55193C10.8545 9.56602 10.8897 9.57505 10.9257 9.57871C10.9825 9.57871 11.037 9.55613 11.0772 9.51595C11.1174 9.47576 11.14 9.42126 11.14 9.36443C11.1381 9.33991 11.1336 9.31566 11.1266 9.2921L10.6873 7.7305Z" stroke={color} strokeWidth="0.857143" strokeMiterlimit="10" strokeLinecap="round" />
        <path d="M0.923191 5.35718C0.571878 5.98831 0.401932 6.70431 0.432138 7.426C0.462345 8.14769 0.691528 8.84698 1.09435 9.44655C1.15623 9.54004 1.19105 9.61236 1.18033 9.66084C1.16962 9.70932 0.860781 11.3181 0.860781 11.3181C0.853353 11.3557 0.85617 11.3947 0.868939 11.4309C0.881708 11.467 0.90396 11.4991 0.93337 11.5238C0.972613 11.5551 1.02141 11.5719 1.07158 11.5715C1.0984 11.5715 1.12493 11.5661 1.14953 11.5554L2.65516 10.9661C2.75878 10.9253 2.87438 10.9272 2.97658 10.9715C3.48391 11.1691 4.0448 11.2929 4.60596 11.2929C5.35898 11.2937 6.09878 11.0951 6.75016 10.7173" stroke={color} strokeWidth="0.857143" strokeMiterlimit="10" strokeLinecap="round" />
      </g>
      <defs>
        <clipPath id="clip0_4278_8517">
          <rect width="12" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>

  )
}

export default EnglishIcon