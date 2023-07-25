import React, { useState } from 'react'
import { ProSidebar, Menu, MenuItem, } from 'react-pro-sidebar'
import { Box, Typography, IconButton } from '@mui/material'
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
import 'react-pro-sidebar/dist/css/styles.css'

import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
// import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
// import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
// import SearchIcon from '@mui/icons-material/Search'

import {
  DashboardIcon,
  PerformanceIcon,
  LearnSubjectIcon,
  RibbonIcon,
  NotificationIcon,
  CompassIcon,
  JournalIcon,
  SettingsIcon,
  LogoutIcon,
} from '../../icons'

import {
  // ColorModeContext,
  tokens
} from '../../theme'
import { ASSETS } from '../../config/assets'
import { ROUTES } from '../../config/routes'

const Item = ({
  title, to, icon, selected, setSelected, hovered, setHovered
}) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <MenuItem
      onMouseEnter={() => setHovered(to)}
      onMouseLeave={() => setHovered('')}
      active={selected === to}
      onClick={() => setSelected(to)}
      icon={
        selected === to || hovered === to
          ? icon.active
          : icon.inactive
      }
      style={{
        color: colors.grey[500],
        marginBottom: '5px'
      }}>
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  )
}

const SideBar = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [isCollapsed, setIsCollapsed] = useState(false)

  const [selected, setSelected] = useState('')
  const [hovered, setHovered] = useState('')

  const navigate = useNavigate()
  const { state } = useLocation()

  React.useEffect(() => {
    const path = window.location.pathname
    setSelected(path.split('/').slice(0, 3).join('/'))

    setIsCollapsed(false)
  }, [navigate, state])

  return (
    <Box
      sx={{
        backgroundColor: colors.white[800],
        zIndex: '50',
        border: `1px solid ${colors.white[800]}  !important`,
        boxShadow: `7px 2px 59px -1px ${colors.grey[100]}20`,
        borderRadius: '0px 24px 24px 0px !important',
        '& .pro-sidebar-inner': { background: 'transparent !important' },
        '& .pro-icon-wrapper': { backgroundColor: 'transparent !important' },
        '& .pro-inner-item': { padding: '2px 35px 2px 20px !important' },
        '& .pro-menu-item.active p': { fontWeight: '600 !important' },
        '& .pro-menu': { height: '100%' },
        '& ul': { height: '100%' },
        '& .pro-inner-item:hover': {
          background: `${colors.greenAccent[500]} !important`,
          color: `${colors.white[800]} !important`,
          borderRadius: '8px !important',
        },
        '& .pro-menu-item.active': {
          background: `${colors.greenAccent[500]} !important`,
          color: `${colors.white[800]} !important`,
          borderRadius: '8px !important',
          fontWeight: 'bold !important',
        },
      }}>
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape='square'>
          <Box display='flex' flexDirection='column' justifyContent='space-between' height='100%'>
            <Box>
              {!isCollapsed && (
                <Box mb='20%'>
                  <Box display='flex' justifyContent='center' alignItems='center' mt='40px'>
                    <img
                      alt='profile-user'
                      width='160px'
                      height='45px'
                      src={ASSETS.LOGO}
                      style={{ cursor: 'pointer' }}
                    />
                  </Box>
                </Box>
              )}

              <Box paddingLeft={isCollapsed ? undefined : '5%'} mr='10px'>
                {
                  [
                    {
                      title: 'Dashboard',
                      to: ROUTES.PARENT.DASHBOARD,
                      icon: {
                        active: <DashboardIcon color={colors.white[800]} />,
                        inactive: <DashboardIcon />
                      }
                    },
                    {
                      title: 'Performance',
                      to: ROUTES.PARENT.PERFORMANCE,
                      icon: {
                        active: <PerformanceIcon color={colors.white[800]} />,
                        inactive: <PerformanceIcon />
                      }
                    },
                    {
                      title: 'Learn Subject',
                      to: ROUTES.PARENT.LEARN_SUBJECT.INDEX,
                      icon: {
                        active: <LearnSubjectIcon color={colors.white[800]} />,
                        inactive: <LearnSubjectIcon />
                      }
                    },
                    {
                      title: 'Daily Quiz',
                      to: ROUTES.PARENT.DAILY_QUIZ,
                      icon: {
                        active: <RibbonIcon color={colors.white[800]} size={20} />,
                        inactive: <RibbonIcon color='#A7A7A7' size={20} />
                      }
                    },
                    {
                      title: 'Improve Parenting',
                      to: ROUTES.PARENT.IMPROVE_PARENTING.INDEX,
                      icon: {
                        active: <NotificationIcon color={colors.white[800]} />,
                        inactive: <NotificationIcon />
                      }
                    },
                    {
                      title: 'Explore',
                      to: ROUTES.PARENT.EXPLORE,
                      icon: {
                        active: <CompassIcon color={colors.white[800]} size={20} />,
                        inactive: <CompassIcon color='#A7A7A7' size={20} />
                      }
                    },
                    {
                      title: 'Journal',
                      to: ROUTES.PARENT.JOURNAL,
                      icon: {
                        active: <JournalIcon color={colors.white[800]} />,
                        inactive: <JournalIcon />
                      }
                    },
                    {
                      title: 'Settings',
                      to: ROUTES.PARENT.SETTINGS,
                      icon: {
                        active: <SettingsIcon color={colors.white[800]} />,
                        inactive: <SettingsIcon />
                      }
                    },
                  ].map((item) => {
                    return (
                      <Item
                        key={item.title}
                        title={item.title}
                        to={item.to}
                        icon={item.icon}
                        selected={selected}
                        setSelected={setSelected}
                        hovered={hovered}
                        setHovered={setHovered}
                      />
                    )
                  })
                }
              </Box>
            </Box>

            <Box paddingLeft='5%' mr='10px'>
              <Item
                title='Logout'
                to={ROUTES.PARENT.LOGOUT}
                icon={{
                  active: <LogoutIcon color={colors.white[800]} />,
                  inactive: <LogoutIcon />
                }}
                selected={selected}
                setSelected={setSelected}
                hovered={hovered}
                setHovered={setHovered}
              />
            </Box>
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  )
}

const TopBar = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  // const colorMode = React.useContext(ColorModeContext)

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      height: '60px',
      padding: '2px',
      boxShadow: '7px 1px 5px 0px rgba(0,0,0,0.2)',
      backgroundColor: colors.white[800]
    }}>
      <Box />

      <Box display='flex'>
        {/* <IconButton onClick={colorMode.toggleColorMode}>
          {
            theme.palette.mode === 'dark'
              ? <DarkModeOutlinedIcon />
              : <LightModeOutlinedIcon />
          }
        </IconButton> */}
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  )
}

const ParentDashboardLayout = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box className='app' sx={{ backgroundColor: colors.grey[900] }}>
      <SideBar />
      <Box sx={{ width: '100%', height: 'calc(100vh - 60px)' }}>
        <TopBar />
        <Outlet />
      </Box>
    </Box>
  )
}

export default ParentDashboardLayout