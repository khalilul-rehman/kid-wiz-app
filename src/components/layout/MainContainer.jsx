import { Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import { tokens } from '../../theme'

const MainContainer = ({ children }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box sx={{
      width: '100%',
      height: '100%',
      padding: '24px',
      backgroundColor: colors.white[900],
      borderRadius: '12px',
      boxShadow: "2px 3px 12px -1px rgba(0,0,0,0.20)",
    }}>
      {children}
    </Box>
  )
}

export default MainContainer
