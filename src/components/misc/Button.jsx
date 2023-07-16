import React from 'react'
import { Box, Button as MUIButton } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import { tokens } from '../../theme'

const Button = ({
  label = 'Label',
  onClick = () => { },
  topSpace = 'none',
  bottomSpace = 'none',
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
    <MUIButton onClick={onClick}
      disabled={disabled}
      sx={{
        marginTop: topSpace,
        marginBottom: bottomSpace,
        backgroundColor: isSecondary ? colors.white[800] : colors.greenAccent[500],
        borderRadius: '100px',
        color: isSecondary ? colors.solids.black : colors.white[900],
        lineHeight: '30px',
        fontSize: '18px',
        fontWeight: '700',
        width: '100%',
        padding: '12px 24px',
        boxShadow: `0px 0px 8px 0px ${alpha(colors.solids.black, 0.25)}`,
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
          marginRight: '5%',
          ...leftIconSx
        }}>{leftIcon}</Box>
      }
      {label}
      {
        rightIcon && <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: '5%',
          ...rightIconSx
        }}>{rightIcon}</Box>
      }
    </MUIButton>
  )
}

export default Button