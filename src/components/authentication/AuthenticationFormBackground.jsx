import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import { tokens } from './../../theme'
import { ASSETS } from './../../config/assets'

const AuthenticationFormBackground = ({ children, title, sx = {} }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const baseStyles = {
    height: '100%',
    width: '99%',
    borderRadius: '0px 40px 40px 0px',
  }

  return (
    <Box sx={{ ...baseStyles, backgroundColor: '#F5AEDD', width: '100%' }}>
      <Box sx={{ ...baseStyles, backgroundColor: '#C0ACF4' }}>
        <Box sx={{ ...baseStyles, backgroundColor: '#82D6EC' }}>
          <Box sx={{ ...baseStyles, backgroundColor: '#CFEB87' }}>
            <Box sx={{ ...baseStyles, backgroundColor: '#F1F182' }}>
              <Box sx={{ ...baseStyles, backgroundColor: '#F5BF82' }}>
                <Box sx={{ ...baseStyles, backgroundColor: '#E89791' }}>
                  <Box sx={{ ...baseStyles, backgroundColor: colors.white[800] }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '5% 0' }}>
                      <Box component='img' src={ASSETS.LOGO} alt='logo' sx={{ height: '55px' }} />
                    </Box>
                    <Typography sx={{
                      fontSize: '30px',
                      fontWeight: '600',
                      textAlign: 'center',
                      color: colors.solids.black
                    }}>{title}</Typography>
                    <Box sx={{
                      margin: '0 10%',
                      ...sx
                    }}>
                      {children}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default AuthenticationFormBackground
