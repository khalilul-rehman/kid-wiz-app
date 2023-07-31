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
import MenuIcon from '@mui/icons-material/Menu'

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
  CloseIcon,
} from '../../icons'

import {
  // ColorModeContext,
  tokens
} from '../../theme'
import { ASSETS } from '../../config/assets'
import { ROUTES } from '../../config/routes'
import { $ } from '../../utils'

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

const SideBar = ({
  isToggled = false,
  setIsToggled = () => { }
}) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [selected, setSelected] = useState('')
  const [hovered, setHovered] = useState('')

  const navigate = useNavigate()
  const { state } = useLocation()

  React.useEffect(() => {
    const path = window.location.pathname
    setSelected(path.split('/').slice(0, 3).join('/'))

    setIsToggled(false)
  }, [navigate, setIsToggled, state])

  return (
    <Box
      sx={{
        backgroundColor: colors.white[800],
        zIndex: '50',
        border: `1px solid ${colors.white[800]}  !important`,
        boxShadow: `7px 2px 59px -1px ${colors.grey[100]}20`,
        borderRadius: '0px 24px 24px 0px !important',
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
        '& .pro-sidebar-inner': {
          xs: { backgroundColor: colors.white[800], },
          lg: { background: 'transparent !important' }
        },
        position: 'relative',
        '& .pro-sidebar.xl': {
          lg: {
            position: 'relative',
            left: '0px !important',
          }
        }
      }}>
      <ProSidebar
        breakPoint='xl'
        toggled={isToggled}
        onToggle={() => setIsToggled(!isToggled)}>
        <Box
          onClick={() => setIsToggled(!isToggled)}
          sx={{
            position: 'absolute',
            top: $({ size: 12 }),
            right: $({ size: 12 }),
            display: {
              xs: 'block',
              lg: 'none'
            },
          }}>
          <CloseIcon size={$({ size: 32, numeric: true })} />
        </Box>

        <Menu iconShape='square'>
          <Box display='flex' flexDirection='column' justifyContent='space-between' height='100%'>
            <Box sx={{
              mt: {
                xs: $({ size: 22 }),
                md: 0
              }
            }}>
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

              <Box paddingLeft={'5%'} mr='10px'>
                {
                  [
                    {
                      title: 'Dashboard',
                      to: ROUTES.PARENT.DASHBOARD.INDEX,
                      icon: {
                        active: <DashboardIcon color={colors.white[800]} />,
                        inactive: <DashboardIcon />
                      }
                    },
                    {
                      title: 'Performance',
                      to: ROUTES.PARENT.PERFORMANCE.INDEX,
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
                      to: ROUTES.PARENT.DAILY_QUIZ.INDEX,
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
                      to: ROUTES.PARENT.EXPLORE.INDEX,
                      icon: {
                        active: <CompassIcon color={colors.white[800]} size={20} />,
                        inactive: <CompassIcon color='#A7A7A7' size={20} />
                      }
                    },
                    {
                      title: 'Journal',
                      to: ROUTES.PARENT.JOURNAL.INDEX,
                      icon: {
                        active: <JournalIcon color={colors.white[800]} />,
                        inactive: <JournalIcon />
                      }
                    },
                    {
                      title: 'Settings',
                      to: ROUTES.PARENT.SETTINGS.INDEX,
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
                to={ROUTES.PARENT.LOGOUT.INDEX}
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

const TopBar = ({
  isToggled = false,
  setIsToggled = () => { }
}) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  // const colorMode = React.useContext(ColorModeContext)

  const navigate = useNavigate()

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      height: $({ size: 60 }),
      padding: {
        xs: `${$({ size: 8 })} ${$({ size: 16 })}`,
        lg: $({ size: 4 }),
      },
      boxShadow: '7px 1px 5px 0px rgba(0,0,0,0.2)',
      backgroundColor: colors.white[800]
    }}>
      <Box
        sx={{
          display: {
            xs: 'flex',
            lg: 'none'
          },
          cursor: 'pointer',
          alignItems: 'center',
          gap: $({ size: 16 }),
        }}>
        <IconButton onClick={() => { setIsToggled(!isToggled) }}>
          <MenuIcon sx={{ fontSize: $({ size: 32 }), color: colors.extra.grey1 }} />
        </IconButton>
        <Box
          onClick={() => { navigate(ROUTES.PARENT.DASHBOARD.INDEX) }}
          component='img'
          alt='logo'
          src={ASSETS.LOGO}
          sx={{
            cursor: 'pointer',
            height: $({ size: 30 }),
          }}
        />
      </Box>

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

  const [isToggled, setIsToggled] = useState(false)

  return (
    <Box className='app' sx={{ backgroundColor: colors.grey[900] }}>
      <SideBar
        isToggled={isToggled}
        setIsToggled={setIsToggled}
      />
      <Box sx={{
        width: '100%',
        height: `calc(100vh - ${$({ size: 60 })})`,
      }}>
        <TopBar
          isToggled={isToggled}
          setIsToggled={setIsToggled}
        />
        <Outlet />
      </Box>
    </Box>
  )
}

export default ParentDashboardLayout