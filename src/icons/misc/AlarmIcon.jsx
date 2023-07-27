import React from 'react'

const AddIcon = ({
  color = '#FAFAFA',
  size = 15,
}) => {
  return (
    <svg
      width={size * (16 / 15)}
      height={size * (15 / 15)}
      viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_4278_8130)">
        <path d="M4.06237 1.81011C4.14323 1.72906 4.20663 1.63192 4.24858 1.52481C4.29053 1.4177 4.31012 1.30294 4.3061 1.18778C4.30209 1.07262 4.27457 0.959554 4.22528 0.855705C4.17598 0.751856 4.10598 0.65948 4.01968 0.5844C3.58541 0.208961 3.03368 0.00186092 2.46276 -1.52588e-05L2.33699 0.00349109H2.31853C1.0166 0.0837508 0.00121928 1.22921 0.00391159 2.61037C0.00391159 3.35063 0.311604 3.74258 0.554681 4.05622C0.62289 4.1439 0.708399 4.21622 0.805748 4.26854C0.903098 4.32087 1.01015 4.35206 1.12007 4.36012C1.13007 4.36012 1.14699 4.36206 1.19699 4.36206C1.29586 4.36192 1.39368 4.34151 1.48456 4.30207C1.57545 4.26264 1.65752 4.20498 1.72583 4.13258L4.06237 1.81011ZM13.6854 0.00427048L13.5597 0.000374435H13.5397C12.9682 0.00188161 12.4159 0.209005 11.9812 0.58479C11.895 0.659864 11.8251 0.752196 11.7759 0.855974C11.7267 0.959752 11.6992 1.07273 11.6952 1.18779C11.6912 1.30286 11.7107 1.41751 11.7526 1.52455C11.7945 1.63159 11.8578 1.72868 11.9385 1.80973L14.2758 4.13375C14.3443 4.20641 14.4266 4.26425 14.5178 4.30376C14.6089 4.34327 14.7071 4.36363 14.8062 4.36362C14.8554 4.36362 14.8724 4.36362 14.8831 4.36167C14.993 4.35356 15.1 4.32235 15.1972 4.27002C15.2945 4.2177 15.38 4.14541 15.4481 4.05778C15.6928 3.74414 15.9974 3.35336 15.9989 2.61193C16.0012 1.22921 14.9858 0.083751 13.6854 0.00427048Z" fill={color} />
        <path d="M8.00196 1.24675C4.27119 1.24675 1.23273 4.32272 1.23273 8.10389C1.23141 9.70705 1.78707 11.2596 2.80234 12.4893L1.41311 13.897C1.35461 13.9546 1.30799 14.0234 1.27597 14.0994C1.24394 14.1754 1.22716 14.2571 1.22658 14.3397C1.226 14.4223 1.24164 14.5042 1.2726 14.5807C1.30356 14.6571 1.34921 14.7266 1.4069 14.785C1.46459 14.8434 1.53317 14.8896 1.60865 14.9209C1.68414 14.9523 1.76501 14.9681 1.84658 14.9675C1.92815 14.9668 2.00878 14.9498 2.08379 14.9173C2.15879 14.8849 2.22668 14.8376 2.2835 14.7783L3.67273 13.371C4.88741 14.3983 6.41958 14.9611 8.00196 14.9611C9.58434 14.9611 11.1165 14.3983 12.3312 13.371L13.7208 14.7783C13.7776 14.8376 13.8455 14.8849 13.9205 14.9173C13.9955 14.9498 14.0762 14.9668 14.1577 14.9675C14.2393 14.9681 14.3202 14.9523 14.3956 14.9209C14.4711 14.8896 14.5397 14.8434 14.5974 14.785C14.6551 14.7266 14.7007 14.6571 14.7317 14.5807C14.7627 14.5042 14.7783 14.4223 14.7777 14.3397C14.7771 14.2571 14.7604 14.1754 14.7283 14.0994C14.6963 14.0234 14.6497 13.9546 14.5912 13.897L13.2016 12.4893C14.217 11.2597 14.7727 9.70709 14.7712 8.10389C14.7712 4.32467 11.7347 1.24675 8.00196 1.24675ZM8.61734 8.10389C8.61734 8.26922 8.55251 8.42778 8.4371 8.54469C8.32169 8.66159 8.16517 8.72727 8.00196 8.72727H4.92504C4.76183 8.72727 4.6053 8.66159 4.48989 8.54469C4.37449 8.42778 4.30965 8.26922 4.30965 8.10389C4.30965 7.93856 4.37449 7.78 4.48989 7.6631C4.6053 7.54619 4.76183 7.48052 4.92504 7.48052H7.38657V3.74026C7.38657 3.57493 7.45141 3.41637 7.56682 3.29946C7.68222 3.18256 7.83875 3.11688 8.00196 3.11688C8.16517 3.11688 8.32169 3.18256 8.4371 3.29946C8.55251 3.41637 8.61734 3.57493 8.61734 3.74026V8.10389Z" fill={color} />
      </g>
      <defs>
        <clipPath id="clip0_4278_8130">
          <rect width="16" height="15" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default AddIcon