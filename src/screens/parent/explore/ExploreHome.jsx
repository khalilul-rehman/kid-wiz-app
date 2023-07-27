import React from 'react'
import { Box } from '@mui/material'
import { Wheel } from 'react-custom-roulette'

import {
  DashboardContainer,
} from '../../../components'

const ExploreHome = () => {

  const [mustSpin, setMustSpin] = React.useState(false)
  const [prizeNumber, setPrizeNumber] = React.useState(0)

  const data = [
    { option: '0', style: { backgroundColor: 'green', textColor: 'black' } },
    { option: '1', style: { backgroundColor: 'white' } },
    { option: '2' },
  ]

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length)
      setPrizeNumber(newPrizeNumber)
      setMustSpin(true)
    }
  }

  return (
    <DashboardContainer>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Wheel
          backgroundColors={['#3e3e3e', '#df3428']}
          textColors={['#ffffff']}

          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}

          onStopSpinning={() => { setMustSpin(false) }}
        />
      </Box>

      <button onClick={handleSpinClick}>SPIN</button>
    </DashboardContainer>
  )
}

export default ExploreHome
