import React from 'react'

const NotificationIcon = ({
  color = '#A7A7A7',
  size = 20,
}) => {
  return (
    <svg
      width={size * (17 / 20)}
      height={size * (20 / 20)}
      viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M14.8344 6.94273C14.8344 8.1774 15.1479 8.90513 15.8378 9.74375C16.3606 10.3616 16.5277 11.1547 16.5277 12.0151C16.5277 12.8745 16.2565 13.6903 15.713 14.3527C15.0015 15.1468 13.9981 15.6537 12.974 15.7418C11.49 15.8735 10.0051 15.9844 8.50041 15.9844C6.99483 15.9844 5.51082 15.9181 4.02682 15.7418C3.00182 15.6537 1.99841 15.1468 1.28785 14.3527C0.744376 13.6903 0.472168 12.8745 0.472168 12.0151C0.472168 11.1547 0.640186 10.3616 1.16207 9.74375C1.87357 8.90513 2.16643 8.1774 2.16643 6.94273V6.52392C2.16643 4.87043 2.56253 3.78923 3.37822 2.73081C4.59095 1.18723 6.53489 0.261475 8.45818 0.261475H8.54265C10.5072 0.261475 12.5141 1.23178 13.7062 2.8417C14.4796 3.87835 14.8344 4.914 14.8344 6.52392V6.94273ZM5.73619 18.0165C5.73619 17.5215 6.17266 17.2947 6.57628 17.1977C7.04842 17.0937 9.92537 17.0937 10.3975 17.1977C10.8011 17.2947 11.2376 17.5215 11.2376 18.0165C11.2141 18.4878 10.9485 18.9056 10.5815 19.171C10.1056 19.5571 9.5471 19.8017 8.96326 19.8898C8.64037 19.9334 8.3231 19.9344 8.01147 19.8898C7.4267 19.8017 6.8682 19.5571 6.39325 19.17C6.0253 18.9056 5.75966 18.4878 5.73619 18.0165Z" fill={color} />
    </svg>
  )
}

export default NotificationIcon