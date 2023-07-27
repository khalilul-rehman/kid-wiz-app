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
} from './screens/authentication'

import {
  UnderDevelopmentScreen,
} from './screens/common'

import {
  AddChildrenScreen,
  PersonalityTestsScreen,
  BigFivePersonalityTestIntroScreen,
  BigFivePersonalityTestQuestionsScreen,
  BigFivePersonalityTestResultScreen,
  EmotionalIntelligenceTestIntroScreen,
  EmotionalIntelligenceTestQuestionsScreen,
  EmotionalIntelligenceTestResultScreen,
  ConflictResolutionStyleTestIntroScreen,
  ConflictResolutionStyleTestQuestionsScreen,
  ConflictResolutionStyleTestResultScreen,
  ValuesAssessmentTestIntroScreen,
  ValuesAssessmentTestQuestionsScreen,
  ValuesAssessmentTestResultScreen,
} from './screens/onBoarding'

import {
  DashboardHome,
  PerformanceHome,
  LearnSubjectHome,
  LearnSubjectDetail,
  DailyQuizHome,
  ImproveParentingHome,
  ExploreHome,
  JournalHome,
  SettingsHome,
} from './screens/parent/index.js'

import {
  ParentDashboardLayout,
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

  /* PATCH: ADDED THIS TO DISABLE ALL VIEWS EXCEPT DESKTOP */
  const [isTablet, setIsTablet] = React.useState(false)
  const [isMobile, setIsMobile] = React.useState(false)

  /* PATCH: ADDED THIS TO DISABLE ALL VIEWS EXCEPT DESKTOP */
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600)
      setIsTablet(window.innerWidth < 900)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  /* PATCH: ADDED THIS TO DISABLE ALL VIEWS EXCEPT DESKTOP */
  if ((isMobile || isTablet) && !process.env.REACT_APP_DEV_MODE) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}>
        {
          isMobile
            ? <h3>Mobile Version Not Available!</h3>
            : <h3>Tablet Version Not Available!</h3>
        }
      </div>
    )
  }

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path='/' element={<Redirect to={ROUTES.AUTHENTICATION.LOGIN} />} />

          <Route path={ROUTES.AUTHENTICATION.LOGIN} element={<LoginScreen />} />
          <Route path={ROUTES.AUTHENTICATION.SIGN_UP} element={<SignUpScreen />} />
          <Route path={ROUTES.AUTHENTICATION.RESET_PASSWORD} element={<ResetPasswordScreen />} />
          <Route path={ROUTES.AUTHENTICATION.CONFIRMATION} element={<ConfirmationScreen />} />

          <Route path={ROUTES.ON_BOARDING.ADD_CHILDREN} element={<AddChildrenScreen />} />
          <Route path={ROUTES.ON_BOARDING.PERSONALITY_TESTS} element={<PersonalityTestsScreen />} />
          <Route path={ROUTES.ON_BOARDING.BIG_FIVE_PERSONALITY.INTRO} element={<BigFivePersonalityTestIntroScreen />} />
          <Route path={ROUTES.ON_BOARDING.BIG_FIVE_PERSONALITY.QUESTIONS} element={<BigFivePersonalityTestQuestionsScreen />} />
          <Route path={ROUTES.ON_BOARDING.BIG_FIVE_PERSONALITY.RESULT} element={<BigFivePersonalityTestResultScreen />} />
          <Route path={ROUTES.ON_BOARDING.EMOTIONAL_INTELLIGENCE.INTRO} element={<EmotionalIntelligenceTestIntroScreen />} />
          <Route path={ROUTES.ON_BOARDING.EMOTIONAL_INTELLIGENCE.QUESTIONS} element={<EmotionalIntelligenceTestQuestionsScreen />} />
          <Route path={ROUTES.ON_BOARDING.EMOTIONAL_INTELLIGENCE.RESULT} element={<EmotionalIntelligenceTestResultScreen />} />
          <Route path={ROUTES.ON_BOARDING.CONFLICT_RESOLUTION_STYLE.INTRO} element={<ConflictResolutionStyleTestIntroScreen />} />
          <Route path={ROUTES.ON_BOARDING.CONFLICT_RESOLUTION_STYLE.QUESTIONS} element={<ConflictResolutionStyleTestQuestionsScreen />} />
          <Route path={ROUTES.ON_BOARDING.CONFLICT_RESOLUTION_STYLE.RESULT} element={<ConflictResolutionStyleTestResultScreen />} />
          <Route path={ROUTES.ON_BOARDING.VALUES_ASSESSMENT.INTRO} element={<ValuesAssessmentTestIntroScreen />} />
          <Route path={ROUTES.ON_BOARDING.VALUES_ASSESSMENT.QUESTIONS} element={<ValuesAssessmentTestQuestionsScreen />} />
          <Route path={ROUTES.ON_BOARDING.VALUES_ASSESSMENT.RESULT} element={<ValuesAssessmentTestResultScreen />} />

          <Route path={ROUTES.PARENT.DASHBOARD} element={<ParentDashboardLayout />}>
            <Route index element={<DashboardHome />} />
            <Route index path={ROUTES.PARENT.PERFORMANCE} element={<PerformanceHome />} />
            <Route index path={ROUTES.PARENT.LEARN_SUBJECT.INDEX} element={<LearnSubjectHome />} />
            <Route index path={ROUTES.PARENT.LEARN_SUBJECT.DETAIL} element={<LearnSubjectDetail />} />
            <Route index path={ROUTES.PARENT.DAILY_QUIZ} element={<DailyQuizHome />} />
            <Route index path={ROUTES.PARENT.IMPROVE_PARENTING.INDEX} element={<ImproveParentingHome />} />
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