import React from 'react'
import { Box, Typography, Slider } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import { tokens } from '../../theme'

const LikertScale = ({
  value,
  onChange,
  max = 4,
  defaultValue = 2,
}) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box sx={{
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '24px'
    }}>
      <Typography sx={{
        fontWeight: '600',
        fontSize: '13.5px',
        lineHeight: '25px',
        color: colors.extra.grey1,
      }}>Diagree</Typography>

      <Slider
        value={value}
        onChange={onChange}
        sx={{
          width: '100%',
          boxShadow: 'none',
          '& .MuiSlider-thumb': {
            width: '16px',
            height: '24px',
            backgroundColor: colors.likertScale.thumb,
            border: 'none',
            borderRadius: '30px',
            boxShadow: 'none',
            '&:hover': {
              boxShadow: 'none',
            }
          },
          '& .MuiSlider-track': {
            height: '16px',
            borderRadius: '66px',
            border: 'none',
            backgroundColor: colors.likertScale.left,
          },
          '& .MuiSlider-rail': {
            height: '16px',
            borderRadius: '66px',
            border: 'none',
            backgroundColor: colors.likertScale.right,
          },
          ...(
            Array(max + 1).fill().map((_, i) => (
              {
                [`& .MuiSlider-mark[data-index="${i}"]`]:
                  (i === 0 || i === max)
                    ? { display: 'none' }
                    : {
                      height: '16px',
                      width: '1px',
                      backgroundColor: colors.likertScale.mark,
                      borderRadius: '0px',
                    },
              }
            )).reduce((acc, curr) => ({ ...acc, ...curr }), {})
          )
        }}
        defaultValue={defaultValue}
        step={1}
        min={0}
        max={max}
        marks
      />

      <Typography sx={{
        fontWeight: '600',
        fontSize: '13.5px',
        lineHeight: '25px',
        color: colors.extra.grey1,
      }}>Agree</Typography>
    </Box>
  )
}

export default LikertScale