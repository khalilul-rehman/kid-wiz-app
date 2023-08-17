import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import {
  CustomButton,
  DashboardContainer,
  QuestionProgressBar,
} from '../../../components';

import { RightArrowIcon } from '../../../icons';

import { tokens } from '../../../theme';
import { $ } from '../../../utils';

const DailyQuizHome = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  React.useEffect(() => {
    const _ = Array(10)
      .fill({
        question: 'This is a question ',
        options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      })
      .map((question, i) => {
        return { ...question, question: `${question.question} ${i + 1}.` };
      });
    setQuestions(_);
  }, []);

  const [questions, setQuestions] = React.useState([]);
  const [currentQuestion, setCurrentQuestion] = React.useState(1);

  const [answers, setAnswers] = React.useState([]);
  const [currentAnswer, setCurrentAnswer] = React.useState(0);

  const [isChecked, setIsChecked] = React.useState(false);
  const [isCorrect, setIsCorrect] = React.useState(false);

  const CorrectOptionStyles = React.useMemo(() => {
    return {
      'border': `${$({ size: 3 })} solid ${colors.greenAccent[500]}`,
      'backgroundColor': colors.greenAccent[400],
      '&:hover': {
        backgroundColor: colors.greenAccent[400],
      },
    };
  }, [colors.greenAccent]);

  const IncorrectOptionStyles = React.useMemo(() => {
    return {
      'border': `${$({ size: 3 })} solid ${colors.redAccent[300]}`,
      'backgroundColor': colors.redAccent[800],
      '&:hover': {
        backgroundColor: colors.redAccent[800],
      },
    };
  }, [colors.redAccent]);

  const HandleOptionSelection = (option) => {
    if (isChecked) return;
    setCurrentAnswer(option);
    setIsCorrect(Math.random() > 0.5);
    setIsChecked(true);
  };

  const HandleNext = () => {
    if (currentQuestion === -1) return;
    if (currentAnswer === 0) return;

    setCurrentAnswer(0);
    setAnswers([...answers, currentAnswer]);
    setIsChecked(false);
    setCurrentQuestion(currentQuestion + 1);
  };

  const HandleSubmit = () => {
    if (currentQuestion === -1) return;

    setCurrentAnswer(0);
    setAnswers([...answers, currentAnswer]);
    setIsChecked(false);
    setCurrentQuestion(-1);
  };

  return (
    <DashboardContainer
      wrapperStyle={{
        padding: {
          xs: $({ size: 20 }),
          md: $({ size: 48 }),
        },
        pr: {
          xs: $({ size: 20 }),
          md: $({ size: 48 }),
        },
        overflow: 'hidden',
      }}
      containerStyle={{
        gap: {
          xs: $({ size: 20 }),
          md: $({ size: 16 }),
        },
      }}>
      <Box
        sx={{
          mt: `-${$({ size: 8 })}`,
        }}>
        <Typography
          sx={{
            fontSize: $({ size: 31.98 }),
            fontWeight: '600',
            color: colors.extra.grey1,
            display: 'inline',
          }}>
          {`Daily Quiz: `}
        </Typography>
        <Typography
          sx={{
            fontSize: $({ size: 31.98 }),
            fontWeight: '600',
            color: colors.greenAccent[600],
            display: 'inline',
          }}>
          {`Animals and Their Habitats`}
        </Typography>
      </Box>

      <QuestionProgressBar
        totalQuestions={questions.length}
        currentQuestion={
          currentQuestion === -1 ? questions.length : currentQuestion
        }
      />
      <Typography
        sx={{
          fontSize: $({ size: 18 }),
          fontWeight: '400',
          color: colors.extra.grey1,
        }}>
        {questions?.[currentQuestion - 1]?.question}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: {
            xs: $({ size: 20 }),
            sm: $({ size: 24 }),
            md: $({ size: 32 }),
          },
          mt: $({ size: 20 }),
        }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              md: 'row',
            },
            gap: {
              xs: $({ size: 20 }),
              sm: $({ size: 30 }),
              md: $({ size: 40 }),
            },
          }}>
          <CustomButton
            onClick={() => HandleOptionSelection(1)}
            label={questions?.[currentQuestion - 1]?.options?.[0]}
            isSecondary={true}
            sx={{
              ...(isChecked &&
                currentAnswer === 1 &&
                (isCorrect ? CorrectOptionStyles : IncorrectOptionStyles)),
            }}
          />
          <CustomButton
            onClick={() => HandleOptionSelection(2)}
            label={questions?.[currentQuestion - 1]?.options?.[1]}
            isSecondary={true}
            sx={{
              ...(isChecked &&
                currentAnswer === 2 &&
                (isCorrect ? CorrectOptionStyles : IncorrectOptionStyles)),
            }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              md: 'row',
            },
            gap: {
              xs: $({ size: 20 }),
              sm: $({ size: 30 }),
              md: $({ size: 40 }),
            },
          }}>
          <CustomButton
            onClick={() => HandleOptionSelection(3)}
            label={questions?.[currentQuestion - 1]?.options?.[2]}
            isSecondary={true}
            sx={{
              ...(isChecked &&
                currentAnswer === 3 &&
                (isCorrect ? CorrectOptionStyles : IncorrectOptionStyles)),
            }}
          />
          <CustomButton
            onClick={() => HandleOptionSelection(4)}
            label={questions?.[currentQuestion - 1]?.options?.[3]}
            isSecondary={true}
            sx={{
              ...(isChecked &&
                currentAnswer === 4 &&
                (isCorrect ? CorrectOptionStyles : IncorrectOptionStyles)),
            }}
          />
        </Box>
      </Box>

      {isChecked && (
        <Box>
          {isCorrect ? (
            <Typography
              sx={{
                fontSize: $({ size: 18 }),
                fontWeight: '700',
                color: colors.greenAccent[500],
              }}>
              Correct!
            </Typography>
          ) : (
            <Typography
              sx={{
                fontSize: $({ size: 18 }),
                fontWeight: '700',
                color: colors.redAccent[500],
              }}>
              False!
            </Typography>
          )}

          <Typography
            sx={{
              fontSize: $({ size: 18 }),
              fontWeight: '400',
              color: colors.extra.grey1,
            }}>
            {isCorrect ? (
              <>Yes, Your Answer Is Correct!</>
            ) : (
              <>No, Your Answer Is Incorrect!</>
            )}
          </Typography>
        </Box>
      )}

      <Box sx={{ flex: 1 }} />

      <CustomButton
        onClick={
          questions.length === currentQuestion ? HandleSubmit : HandleNext
        }
        label={questions.length === currentQuestion ? 'Submit' : 'Next'}
        sx={{
          maxWidth: $({ size: 175 }),
          alignSelf: 'flex-end',
        }}
        rightIcon={<RightArrowIcon size={$({ size: 24, numeric: true })} />}
      />
    </DashboardContainer>
  );
};

export default DailyQuizHome;
