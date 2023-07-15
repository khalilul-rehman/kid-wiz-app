import React, { useState, useContext } from 'react'
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar'
import { Box, Typography, useTheme, IconButton } from '@mui/material'
import { Link, Outlet } from 'react-router-dom'
import 'react-pro-sidebar/dist/css/styles.css'
import InputBase from '@mui/material/InputBase'

import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import SearchIcon from '@mui/icons-material/Search'

import { ColorModeContext, tokens } from '../../theme'
import { ASSETS } from '../../config/assets'
import { ROUTES } from '../../config/routes'

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[500],
        marginBottom: '5px'
      }}
      onClick={() => setSelected(title)}
      icon={
        <Box
          component='img'
          src={icon}
          alt={title}
          sx={{
            width: '20px',
            height: '20px',
          }} />
      }>
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  )
}

const SideBar = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selected, setSelected] = useState('Dashboard')

  return (
    <Box
      sx={{
        zIndex: '500',
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
                    { title: 'Dashboard', to: ROUTES.PARENT.DASHBOARD, icon: ASSETS.PARENT.ICONS.DASHBOARD },
                    { title: 'Performance', to: ROUTES.PARENT.PERFORMANCE, icon: ASSETS.PARENT.ICONS.PERFORMANCE },
                    { title: 'Learn Subject', to: ROUTES.PARENT.LEARN_SUBJECT, icon: ASSETS.PARENT.ICONS.LEARN_SUBJECT },
                    { title: 'Daily Quiz', to: ROUTES.PARENT.DAILY_QUIZ, icon: ASSETS.PARENT.ICONS.DAILY_QUIZ },
                    { title: 'Improve Parenting', to: ROUTES.PARENT.IMPROVE_PARENTING, icon: ASSETS.PARENT.ICONS.IMPROVE_PARENTING },
                    { title: 'Explore', to: ROUTES.PARENT.EXPLORE, icon: ASSETS.PARENT.ICONS.EXPLORE },
                    { title: 'Journal', to: ROUTES.PARENT.JOURNAL, icon: ASSETS.PARENT.ICONS.JOURNAL },
                    { title: 'Settings', to: ROUTES.PARENT.SETTINGS, icon: ASSETS.PARENT.ICONS.SETTINGS },
                  ].map((item) => {
                    return (
                      <Item
                        title={item.title}
                        to={item.to}
                        icon={item.icon}
                        selected={selected}
                        setSelected={setSelected}
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
                icon={ASSETS.PARENT.ICONS.LOGOUT}
                selected={selected}
                setSelected={setSelected}
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
  const colorMode = useContext(ColorModeContext)

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      height: '60px',
      padding: '2px',
      boxShadow: '7px 1px 5px 0px rgba(0,0,0,0.2)'
    }}>
      <Box
        display='flex'
        backgroundColor={colors.primary[400]}
        borderRadius='3px'>
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder='Search' />
        <IconButton type='button' sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      <Box display='flex'>
        <IconButton onClick={colorMode.toggleColorMode}>
          {
            theme.palette.mode === 'dark'
              ? <DarkModeOutlinedIcon />
              : <LightModeOutlinedIcon />
          }
        </IconButton>
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
    <Box className='app'>
      <SideBar />
      <Box sx={{ width: '100%', height: 'calc(100vh - 60px)' }}>
        <TopBar />
        <Box sx={{ backgroundColor: colors.grey[900], width: '100%', height: '100%', padding: '24px' }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}

export default ParentDashboardLayout