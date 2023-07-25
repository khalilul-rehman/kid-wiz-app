import React from 'react'
import { Box, Slider, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import { tokens } from '../../theme'

const VerticalFillerItem = ({
  label = '',
  value = 0,
  color = '',
}) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
      <Box sx={{
        width: '70px',
        height: '200px',
        borderRadius: '100px',
        backgroundColor: colors.extra.grey4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
        marging: '0px 10%',
      }}>
        <Slider
          disabled
          orientation='vertical'
          sx={{
            overflow: 'hidden',
            width: '70px',
            height: '200px',
            borderRadius: '100px',
            backgroundColor: colors.extra.grey4,
            '& .MuiSlider-track': { backgroundColor: color, border: 'none' },
            '& .MuiSlider-rail': { backgroundColor: colors.extra.grey4, border: 'none' },
            '& .MuiSlider-thumb': { display: 'none' },
            '& .MuiSlider-valueLabel': { display: 'none' },
            '& .MuiSlider-mark': { display: 'none' },
            '& .MuiSlider-markLabel': { display: 'none' },
            '& .MuiSlider-markLabelActive': { display: 'none' },
          }}
          max={1}
          min={0}
          value={value}
        />

        <Typography sx={{
          fontWeight: '700',
          fontSize: '18px',
          lineHeight: '30px',
          color: colors.extra.grey1,
          position: 'absolute',
          bottom: '0px',
          paddingBottom: `${value * 100}%`,
        }}>{(value * 100).toFixed(0)}%</Typography>
      </Box>

      <Typography sx={{
        fontWeight: '600',
        fontSize: '13.5px',
        lineHeight: '16px',
        color: colors.extra.grey1,
      }}>{label}</Typography>
    </Box>
  )
}

const VerticalFiller = ({
  data = [],
}) => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      gap: '48px',
    }}>
      {
        data.map((item, index) => {
          return (
            <VerticalFillerItem
              key={index}
              label={item.label}
              value={item.value}
              color={item.color}
            />
          )
        })
      }
    </Box>
  )
}

export default VerticalFiller