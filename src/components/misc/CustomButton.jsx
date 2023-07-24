import React from 'react'
import { Box, Button } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'

import { tokens } from '../../theme'
import { $ } from '../../utils'

const CustomButton = ({
  label = 'Label',
  onClick = () => { },
  sx = {},
  leftIcon = null,
  rightIcon = null,
  leftIconSx = {},
  rightIconSx = {},
  disabled = false,
  isSecondary = false,
}) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Button onClick={onClick}
      disabled={disabled}
      sx={{
        backgroundColor: isSecondary ? colors.white[800] : colors.greenAccent[500],
        borderRadius: $({ size: 100 }),
        color: isSecondary ? colors.solids.black : colors.white[900],
        lineHeight: $({ size: 30 }),
        fontSize: $({ size: 18 }),
        fontWeight: '700',
        width: '100%',
        padding: `${$({ size: 12 })} ${$({ size: 32 })}`,
        boxShadow: `0 0 ${$({ size: 8 })} 0 ${alpha(colors.solids.black, 0.25)}`,
        gap: $({ size: 14 }),
        '&:hover': {
          backgroundColor: alpha(isSecondary ? colors.white[800] : colors.greenAccent[500], 0.8),
        },
        ...sx
      }}>
      {
        leftIcon && <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          ...leftIconSx
        }}>{leftIcon}</Box>
      }
      {label}
      {
        rightIcon && <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          ...rightIconSx
        }}>{rightIcon}</Box>
      }
    </Button>
  )
}

export default CustomButton