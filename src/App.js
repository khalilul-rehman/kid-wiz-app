import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'

import { ColorModeContext, useMode } from './theme'
import { ROUTES } from './config/routes'

import {
  LoginScreen,
  SignUpScreen,
  ResetPasswordScreen,
  ConfirmationScreen,
  UnderDevelopmentScreen
} from './screens'

import {
  DashboardHome,
  PerformanceHome,
  LearnSubjectHome,
  DailyQuizHome,
  ImproveParentingHome,
  ExploreHome,
  JournalHome,
  SettingsHome
} from './screens/parent/index.js'

import {
  ParentDashboardLayout
} from './components'

const Redirect = ({ to }) => {
  const navigate = useNavigate()

  React.useEffect(() => {
    navigate(to)
  }, [navigate, to])

  return <></>
}

const App = () => {
  const [theme, colorMode] = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path='/' element={<Redirect to={ROUTES.AUTHENTICATION.RESET_PASSWORD} />} />
          <Route path={ROUTES.AUTHENTICATION.LOGIN} element={<LoginScreen />} />
          <Route path={ROUTES.AUTHENTICATION.SIGN_UP} element={<SignUpScreen />} />
          <Route path={ROUTES.AUTHENTICATION.RESET_PASSWORD} element={<ResetPasswordScreen />} />
          <Route path={ROUTES.AUTHENTICATION.CONFIRMATION} element={<ConfirmationScreen />} />

          <Route path={ROUTES.PARENT.DASHBOARD} element={<ParentDashboardLayout />}>
            <Route index element={<DashboardHome />} />
            <Route index path={ROUTES.PARENT.PERFORMANCE} element={<PerformanceHome />} />
            <Route index path={ROUTES.PARENT.LEARN_SUBJECT} element={<LearnSubjectHome />} />
            <Route index path={ROUTES.PARENT.DAILY_QUIZ} element={<DailyQuizHome />} />
            <Route index path={ROUTES.PARENT.IMPROVE_PARENTING} element={<ImproveParentingHome />} />
            <Route index path={ROUTES.PARENT.EXPLORE} element={<ExploreHome />} />
            <Route index path={ROUTES.PARENT.JOURNAL} element={<JournalHome />} />
            <Route index path={ROUTES.PARENT.SETTINGS} element={<SettingsHome />} />
            
            <Route path='*' element={<UnderDevelopmentScreen />} />
          </Route>
          <Route path='*' element={<UnderDevelopmentScreen />} />
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App