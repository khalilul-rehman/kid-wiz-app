/* eslint-disable import/first */
/*** MISC COMPONENTS *************************************************************************************/
import CustomTextInput, { CustomLabel } from './misc/CustomTextInput'
import CustomSearchInput from './misc/CustomSearchInput'
import CustomButton from './misc/CustomButton'
import CustomDropDown from './misc/CustomDropDown'
import CustomBreadcrumbs from './misc/CustomBreadcrumbs'

export {
  CustomTextInput, CustomLabel,
  CustomSearchInput,
  CustomButton,
  CustomDropDown,
  CustomBreadcrumbs,
}

/*** AUTHENTICATION COMPONENTS ***************************************************************************/
import AuthenticationFormBackground from './authentication/AuthenticationFormBackground'

export {
  AuthenticationFormBackground,
}

/*** LAYOUT COMPONENTS ***********************************************************************************/
import ParentDashboardLayout from './layout/ParentDashboardLayout'
import MainContainer from './layout/MainContainer'
import DashboardContainer from './layout/DashboardContainer'

export {
  ParentDashboardLayout,
  MainContainer,
  DashboardContainer,
}

/*** QUIZ COMPONENTS *************************************************************************************/
import QuestionProgressBar from './quiz/QuestionProgressBar'
import LikertScale from './quiz/LikertScale'
import VerticalFiller from './quiz/VerticalFiller'

export {
  QuestionProgressBar,
  LikertScale,
  VerticalFiller,
}