import React from 'react'

const CheckBoxCheckedIcon = ({
  color = '#72B316',
  size = 21,
}) => {
  return (
    <svg
      width={size * (21 / 21)}
      height={size * (21 / 21)}
      viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27.0769 0H4.92308C3.61783 0.00142527 2.36646 0.520563 1.44351 1.44351C0.520563 2.36646 0.00142527 3.61783 0 4.92308V27.0769C0.00142527 28.3822 0.520563 29.6335 1.44351 30.5565C2.36646 31.4794 3.61783 31.9986 4.92308 32H27.0769C28.3822 31.9986 29.6335 31.4794 30.5565 30.5565C31.4794 29.6335 31.9986 28.3822 32 27.0769V4.92308C31.9986 3.61783 31.4794 2.36646 30.5565 1.44351C29.6335 0.520563 28.3822 0.00142527 27.0769 0ZM24.3269 10.6377L13.9885 22.9454C13.8751 23.0805 13.7339 23.1896 13.5747 23.2654C13.4154 23.3412 13.2417 23.3818 13.0654 23.3846H13.0446C12.8721 23.3846 12.7015 23.3482 12.544 23.278C12.3864 23.2078 12.2454 23.1052 12.13 22.9769L7.69923 18.0538C7.58671 17.9345 7.49917 17.7939 7.44178 17.6402C7.38438 17.4865 7.35828 17.323 7.365 17.1591C7.37173 16.9952 7.41115 16.8343 7.48095 16.6858C7.55075 16.5374 7.64951 16.4044 7.77144 16.2947C7.89337 16.1849 8.036 16.1007 8.19095 16.0469C8.3459 15.9931 8.51005 15.9708 8.67374 15.9813C8.83744 15.9918 8.99737 16.035 9.14415 16.1082C9.29093 16.1814 9.4216 16.2832 9.52846 16.4077L13.0123 20.2785L22.4423 9.05462C22.6538 8.81006 22.9531 8.65857 23.2754 8.63288C23.5977 8.6072 23.9172 8.70939 24.1648 8.91736C24.4124 9.12533 24.5682 9.42238 24.5985 9.74429C24.6289 10.0662 24.5313 10.3871 24.3269 10.6377Z" fill={color} />
    </svg>
  )
}

export default CheckBoxCheckedIcon