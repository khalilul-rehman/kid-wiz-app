export const ROUTES = {
  AUTHENTICATION: {
    LOGIN: '/login',
    SIGN_UP: '/sign-up',
    RESET_PASSWORD: '/reset-password',
    CONFIRMATION: '/confirmation',
  },
  ON_BOARDING: {
    ADD_CHILDREN: '/add-children',
    PERSONALITY_TESTS: '/personality-tests',
    BIG_FIVE_PERSONALITY: {
      INTRO: '/personality-tests/big-five-personality/',
      QUESTIONS: '/personality-tests/big-five-personality/questions',
      RESULT: '/personality-tests/big-five-personality/result',
    },
    EMOTIONAL_INTELLIGENCE: {
      INTRO: '/personality-tests/emotional-intelligence/',
      QUESTIONS: '/personality-tests/emotional-intelligence/questions',
      RESULT: '/personality-tests/emotional-intelligence/result',
    },
    CONFLICT_RESOLUTION_STYLE: {
      INTRO: '/personality-tests/conflict-resolution-style/',
      QUESTIONS: '/personality-tests/conflict-resolution-style/questions',
      RESULT: '/personality-tests/conflict-resolution-style/result',
    },
    VALUES_ASSESSMENT: {
      INTRO: '/personality-tests/values-assessment/',
      QUESTIONS: '/personality-tests/values-assessment/questions',
      RESULT: '/personality-tests/values-assessment/result',
    }
  },
  PARENT: {
    DASHBOARD: '/parent-dashboard',
    PERFORMANCE: '/parent-dashboard/performance',
    LEARN_SUBJECT: '/parent-dashboard/learn-subject',
    DAILY_QUIZ: '/parent-dashboard/daily-quiz',
    IMPROVE_PARENTING: '/parent-dashboard/improve-parenting',
    EXPLORE: '/parent-dashboard/explore',
    JOURNAL: '/parent-dashboard/journal',
    SETTINGS: '/parent-dashboard/settings',
    LOGOUT: '/parent-dashboard/logout',
  },
  CHILD: {
    DASHBOARD: '/child-dashboard',
  },
  ADMIN: {
    DASHBOARD: '/admin-dashboard',
  },
}