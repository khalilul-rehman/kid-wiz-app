import React, { useState } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Box, Typography, IconButton, alpha, Avatar } from '@mui/material';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import 'react-pro-sidebar/dist/css/styles.css';

import MenuIcon from '@mui/icons-material/Menu';

import {
  LearnSubjectIcon,
  RibbonIcon,
  NotificationIcon,
  LogoutIcon,
  CloseIcon,
  PromptsIcon,
  AITrainingIcon,
  KeywordsAlertIcon,
  HelpIcon,
  NotificationsIcon,
  ChevronSlimDownIcon,
  DashboardIcon,
} from '../../icons';

import {
  // ColorModeContext,
  tokens,
} from '../../theme';
import { ASSETS } from '../../config/assets';
import { ROUTES } from '../../config/routes';
import { $ } from '../../utils';

const Item = ({
  title,
  to,
  icon,
  selected,
  setSelected,
  hovered,
  setHovered,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      onMouseEnter={() => setHovered(to)}
      onMouseLeave={() => setHovered('')}
      active={selected === to}
      onClick={() => setSelected(to)}
      icon={selected === to || hovered === to ? icon.active : icon.inactive}
      style={{
        color: colors.grey[500],
        marginBottom: '5px',
      }}>
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const SideBar = ({ isToggled = false, setIsToggled = () => {} }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [selected, setSelected] = useState('');
  const [hovered, setHovered] = useState('');

  const navigate = useNavigate();
  const { state } = useLocation();

  React.useEffect(() => {
    const path = window.location.pathname;
    setSelected(path.split('/').slice(0, 3).join('/'));

    setIsToggled(false);
  }, [navigate, setIsToggled, state]);

  return (
    <Box
      sx={{
        'backgroundColor': colors.white[800],
        'zIndex': '50',
        'border': `1px solid ${colors.white[800]}  !important`,
        'boxShadow': `7px 2px 59px -1px ${colors.grey[100]}20`,
        'borderRadius': '0px 24px 24px 0px !important',
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
          xs: { backgroundColor: colors.white[800] },
          lg: { background: 'transparent !important' },
        },
        'position': 'relative',
        '& .pro-sidebar.xl': {
          lg: {
            position: 'relative',
            left: '0px !important',
          },
        },
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
              lg: 'none',
            },
          }}>
          <CloseIcon size={$({ size: 32, numeric: true })} />
        </Box>

        <Menu iconShape='square'>
          <Box
            display='flex'
            flexDirection='column'
            justifyContent='space-between'
            height='100%'>
            <Box
              sx={{
                mt: {
                  xs: $({ size: 22 }),
                  md: 0,
                },
              }}>
              <Box mb='20%'>
                <Box
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  mt='40px'>
                  <img
                    alt='profile-user'
                    width='160px'
                    height='45px'
                    src={ASSETS.LOGO}
                    style={{ cursor: 'pointer' }}
                  />
                </Box>
              </Box>

              <Box
                paddingLeft={'5%'}
                mr='10px'>
                {[
                  {
                    title: 'Prompts',
                    to: ROUTES.ADMIN.PROMPTS.INDEX,
                    icon: {
                      active: <PromptsIcon color={colors.white[800]} />,
                      inactive: <PromptsIcon color={colors.extra.grey3} />,
                    },
                  },
                  {
                    title: 'Quizzes',
                    to: ROUTES.ADMIN.QUIZZES.INDEX,
                    icon: {
                      active: (
                        <RibbonIcon
                          color={colors.white[800]}
                          size={20}
                        />
                      ),
                      inactive: (
                        <RibbonIcon
                          color={colors.extra.grey3}
                          size={20}
                        />
                      ),
                    },
                  },
                  {
                    title: 'Subjects',
                    to: ROUTES.ADMIN.SUBJECTS.INDEX,
                    icon: {
                      active: <LearnSubjectIcon color={colors.white[800]} />,
                      inactive: <LearnSubjectIcon color={colors.extra.grey3} />,
                    },
                  },
                  {
                    title: 'Roleplaying',
                    to: ROUTES.ADMIN.ROLE_PLAYING.INDEX,
                    icon: {
                      active: <NotificationIcon color={colors.white[800]} />,
                      inactive: <NotificationIcon color={colors.extra.grey3} />,
                    },
                  },
                  {
                    title: 'AI Training',
                    to: ROUTES.ADMIN.AI_TRAINING.INDEX,
                    icon: {
                      active: <AITrainingIcon color={colors.white[800]} />,
                      inactive: <AITrainingIcon color={colors.extra.grey3} />,
                    },
                  },
                  {
                    title: 'Keywords Alert',
                    to: ROUTES.ADMIN.KEYWORDS_ALERT.INDEX,
                    icon: {
                      active: <KeywordsAlertIcon color={colors.white[800]} />,
                      inactive: (
                        <KeywordsAlertIcon color={colors.extra.grey3} />
                      ),
                    },
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
                  );
                })}
              </Box>
            </Box>

            <Box
              paddingLeft='5%'
              mr='10px'>
              <Item
                title='Logout'
                to={ROUTES.ADMIN.LOGOUT.INDEX}
                icon={{
                  active: <LogoutIcon color={colors.white[800]} />,
                  inactive: <LogoutIcon />,
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
  );
};

const TopBar = ({ isToggled = false, setIsToggled = () => {} }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // const colorMode = React.useContext(ColorModeContext)

  const navigate = useNavigate();
  const [isOptionMenuOpen, setIsOptionMenuOpen] = useState(false);

  return (
    <Box
      sx={{
        ml: {
          xs: 0,
          lg: `-${$({ size: 50 })}`,
        },
        width: {
          xs: '100%',
          lg: `calc(100% + ${$({ size: 50 })})`,
        },
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: $({ size: 60 }),
        padding: {
          xs: `${$({ size: 8 })} ${$({ size: 16 })}`,
          lg: $({ size: 4 }),
        },
        boxShadow: '7px 1px 5px 0px rgba(0,0,0,0.2)',
        backgroundColor: colors.white[800],
      }}>
      <Box
        sx={{
          display: {
            xs: 'flex',
            lg: 'none',
          },
          cursor: 'pointer',
          alignItems: 'center',
          gap: $({ size: 16 }),
        }}>
        <IconButton
          onClick={() => {
            setIsToggled(!isToggled);
          }}>
          <MenuIcon
            sx={{ fontSize: $({ size: 32 }), color: colors.extra.grey1 }}
          />
        </IconButton>
        <Box
          onClick={() => {
            navigate(ROUTES.ADMIN.DASHBOARD.INDEX);
          }}
          component='img'
          alt='logo'
          src={ASSETS.LOGO}
          sx={{
            cursor: 'pointer',
            height: $({ size: 30 }),
          }}
        />
      </Box>

      <Box
        sx={{
          display: {
            xs: 'none',
            lg: 'flex',
          },
        }}
      />

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: $({ size: 32 }),
          mr: $({ size: 24 }),
        }}>
        {/* <IconButton onClick={colorMode.toggleColorMode}>
          {
            theme.palette.mode === 'dark'
              ? <DarkModeOutlinedIcon />
              : <LightModeOutlinedIcon />
          }
        </IconButton> */}

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: $({ size: 16 }),
          }}>
          <Box
            onClick={() => {}}
            sx={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <HelpIcon
              size={$({ size: 24, numeric: true })}
              color={colors.extra.grey3}
            />
          </Box>

          <Box
            onClick={() => {}}
            sx={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <NotificationsIcon
              size={$({ size: 24, numeric: true })}
              color={colors.extra.grey3}
            />
          </Box>
        </Box>

        <Box
          onClick={() => {
            setIsOptionMenuOpen(!isOptionMenuOpen);
            setTimeout(() => {
              setIsOptionMenuOpen(false);
            }, 5000);
          }}
          sx={{
            display: 'flex',
            gap: $({ size: 12 }),
            alignItems: 'center',
            boxShadow: `0 0 ${$({ size: 2 })} 0 ${alpha(
              colors.solids.black,
              0.25
            )}`,
            padding: `${$({ size: 8 })} ${$({ size: 18 })}`,
            borderRadius: $({ size: 16 }),
            cursor: 'pointer',
            userSelect: 'none',
          }}>
          <Avatar
            src={
              'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg'
            }
            alt='profile'
            sx={{
              width: $({ size: 32 }),
              height: $({ size: 32 }),
              borderRadius: $({ size: 8 }),
              objectFit: 'cover',
            }}
          />

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: $({ size: 2 }),
            }}>
            <Typography
              sx={{
                color: colors.extra.grey1,
                fontSize: $({ size: 11 }),
                fontWeight: '500',
                lineHeight: $({ size: 11 }),
              }}>
              Welcome back,
            </Typography>
            <Typography
              sx={{
                color: colors.extra.grey1,
                fontSize: $({ size: 17 }),
                fontWeight: '500',
                lineHeight: $({ size: 17 }),
              }}>
              Michael
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ChevronSlimDownIcon
              size={$({ size: 9, numeric: true })}
              color={colors.extra.grey1}
            />
          </Box>
        </Box>

        {isOptionMenuOpen && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: $({ size: 12 }),
              boxShadow: `0 0 ${$({ size: 2 })} 0 ${alpha(
                colors.solids.black,
                0.25
              )}`,
              padding: $({ size: 16 }),
              borderRadius: $({ size: 8 }),
              position: 'absolute',
              right: $({ size: 28 }),
              top: $({ size: 64 }),
              zIndex: 10000000,
              backgroundColor: colors.white[800],
              width: $({ size: 240 }),
            }}>
            <Box
              sx={{
                display: 'flex',
                gap: $({ size: 8 }),
                mb: $({ size: 12 }),
              }}>
              <Avatar
                src={
                  'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg'
                }
                alt='profile'
                sx={{
                  width: $({ size: 36 }),
                  height: $({ size: 36 }),
                  borderRadius: $({ size: 8 }),
                  objectFit: 'cover',
                }}
              />

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: $({ size: 6 }),
                }}>
                <Typography
                  sx={{
                    color: colors.extra.grey1,
                    fontSize: $({ size: 18 }),
                    fontWeight: '500',
                    lineHeight: $({ size: 18 }),
                  }}>
                  Michael Johnson
                </Typography>
                <Typography
                  sx={{
                    color: colors.extra.grey2,
                    fontSize: $({ size: 11 }),
                    fontWeight: '400',
                    lineHeight: $({ size: 11 }),
                  }}>
                  liamjohnson@gmail.com
                </Typography>
              </Box>
            </Box>

            {[
              {
                icon: (
                  <DashboardIcon
                    size={$({ size: 20, numeric: true })}
                    color={colors.extra.grey2}
                  />
                ),
                title: 'Dashboard',
                to: ROUTES.ADMIN.DASHBOARD.INDEX,
              },
              {
                icon: (
                  <AITrainingIcon
                    size={$({ size: 20, numeric: true })}
                    color={colors.extra.grey2}
                  />
                ),
                title: 'AI Training',
                to: ROUTES.ADMIN.AI_TRAINING.INDEX,
              },
              {
                icon: (
                  <LogoutIcon
                    size={$({ size: 20, numeric: true })}
                    color={colors.extra.grey2}
                  />
                ),
                title: 'Logout',
                to: ROUTES.ADMIN.LOGOUT.INDEX,
              },
            ].map((item, index, _) => {
              return (
                <Box
                  onClick={() => {
                    if (item.to) {
                      navigate(item.to);
                      setIsOptionMenuOpen(false);
                    }
                  }}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: $({ size: 12 }),
                    cursor: 'pointer',
                    ...(index === _.length - 1 && {
                      pt: $({ size: 12 }),
                      ml: `-${$({ size: 16 })}`,
                      mr: `-${$({ size: 16 })}`,
                      pr: $({ size: 16 }),
                      pl: $({ size: 16 }),
                      borderTop: `${$({ size: 1.5 })} solid ${
                        colors.extra.grey4
                      }`,
                    }),
                  }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    {item.icon}
                  </Box>

                  <Typography
                    sx={{
                      color: colors.solids.black,
                      fontSize: $({ size: 18 }),
                      fontWeight: '400',
                    }}>
                    {item.title}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        )}
      </Box>
    </Box>
  );
};

const AdminDashboardLayout = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [isToggled, setIsToggled] = useState(false);

  return (
    <Box
      className='app'
      sx={{ backgroundColor: colors.grey[900] }}>
      <SideBar
        isToggled={isToggled}
        setIsToggled={setIsToggled}
      />
      <Box
        sx={{
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
  );
};

export default AdminDashboardLayout;
