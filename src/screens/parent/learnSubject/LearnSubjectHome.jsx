import React from 'react';
import { Box, Typography, alpha, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import {
  CustomSearchInput,
  DashboardContainer,
  CustomBreadcrumbs,
} from '../../../components';

import { LockIcon } from '../../../icons';

import { ASSETS } from '../../../config/assets';
import { ROUTES } from '../../../config/routes';
import { tokens } from '../../../theme';
import { $ } from '../../../utils';

import { SubjectData } from './data';

const LearnSubjectHome = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const navigate = useNavigate();

  const [search, setSearch] = React.useState('');
  const [subjectData, setSubjectData] = React.useState([]);

  React.useEffect(() => {
    setSubjectData(SubjectData);
  }, []);

  const handleSearch = () => {
    const filteredData = SubjectData.filter((subject) => {
      return subject.title.toLowerCase().includes(search.toLowerCase());
    });
    setSubjectData(filteredData);
  };

  return (
    <DashboardContainer>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: $({ size: 8 }),
          width: '100%',
        }}>
        <CustomBreadcrumbs
          data={[{ path: ROUTES.PARENT.LEARN_SUBJECT.INDEX, title: 'Home' }]}
        />

        <Box
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            alignItems: {
              xs: 'flex-start',
              sm: 'center',
            },
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: {
              xs: $({ size: 24 }),
              sm: $({ size: 16 }),
            },
          }}>
          <Typography
            sx={{
              fontSize: $({ size: 31.98 }),
              fontWeight: '600',
              lineHeight: $({ size: 40 }),
              color: colors.extra.grey1,
            }}>
            Choose a Subject
          </Typography>

          <CustomSearchInput
            placeholder='Search for your subject'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            containerStyle={{
              maxWidth: {
                xs: '100%',
                sm: $({ size: 352 }),
              },
              minWidth: {
                xs: '100%',
                sm: $({ size: 300 }),
              },
            }}
            handleSearch={handleSearch}
            handleSearchOnEveryKeyStroke={handleSearch}
          />
        </Box>
      </Box>

      {subjectData.length === 0 && (
        <Typography
          sx={{
            fontSize: $({ size: 24 }),
            fontWeight: '400',
            lineHeight: $({ size: 30 }),
            color: colors.extra.grey3,
            mt: `-${$({ size: 8 })}`,
          }}>
          No Subject Found...
        </Typography>
      )}

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: `repeat(auto-fill, minmax(${$({
            size: 160,
          })}, 1fr))`,
          gridGap: {
            xs: $({ size: 24 }),
            md: $({ size: 40 }),
          },
          gridAutoRows: '1fr', // to make all the rows the same height
        }}>
        {subjectData.map((subject, index) => {
          return (
            <Box
              key={index}
              onClick={() => {
                if (subject.isUnlocked) {
                  navigate(
                    ROUTES.PARENT.LEARN_SUBJECT.DETAIL.replace(
                      ':subjectId',
                      subject.id
                    ),
                    {
                      state: { ...subject },
                    }
                  );
                }
              }}
              sx={{
                padding: $({ size: 16 }),
                borderRadius: $({ size: 16 }),
                boxShadow: `0 0 ${$({ size: 2 })} ${alpha(
                  colors.solids.black,
                  0.25
                )}`,
                backgroundColor: subject.isUnlocked
                  ? subject.color
                  : colors.extra.grey4,
                gap: $({ size: 8 }),
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
              }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Box
                  sx={{
                    backgroundColor: colors.white[800],
                    width: $({ size: 40 }),
                    height: $({ size: 40 }),
                    borderRadius: $({ size: 40 }),
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: $({ size: 8 }),
                  }}>
                  <img
                    src={ASSETS.PARENT.ICONS.DAILY_QUIZ}
                    alt={subject.title}
                    style={{
                      filter: `invert(${subject.isUnlocked ? 0 : 1})`,
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </Box>
                {!subject.isUnlocked && (
                  <LockIcon size={$({ size: 24, numeric: true })} />
                )}
              </Box>
              <Typography
                sx={{
                  fontSize: $({ size: 18 }),
                  fontWeight: '500',
                  lineHeight: $({ size: 30 }),
                  color: subject.isUnlocked
                    ? colors.solids.black
                    : colors.extra.grey2,
                }}>
                {subject.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: $({ size: 13.5 }),
                  fontWeight: '400',
                  lineHeight: $({ size: 16 }),
                  color: subject.isUnlocked
                    ? colors.extra.grey1
                    : colors.extra.grey2,
                }}>
                {subject.description}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </DashboardContainer>
  );
};

export default LearnSubjectHome;
