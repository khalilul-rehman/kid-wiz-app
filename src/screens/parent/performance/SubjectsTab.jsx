import React from 'react';
import { Box, Typography, alpha, useTheme } from '@mui/material';

import { CustomSearchInput } from '../../../components';

import { tokens } from '../../../theme';
import { $, DarkenHexColor } from '../../../utils';

import { SubjectData } from './data';

const SubjectsTab = ({
  topSectionHeight = 0,
  setRenderSubjectDetails = () => {},
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

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

  // TO CALCULATE TOP SECTION HEIGHT
  const headerSectionRef = React.useRef(null);
  const [headerSectionHeight, setHeaderSectionHeight] = React.useState(0);

  React.useEffect(() => {
    setHeaderSectionHeight(headerSectionRef.current?.offsetHeight || 0);
  }, [headerSectionRef.current?.offsetHeight]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: $({ size: 24 }),
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: {
            xs: $({ size: 8 }),
            md: 0,
          },
          width: '100%',
        }}
        ref={headerSectionRef}>
        <Box
          sx={{
            display: 'flex',
            cursor: 'pointer',
            flexDirection: 'row',
            alignItems: 'center',
            gap: $({ size: 8 }),
            overflow: 'hidden',
          }}>
          <Typography
            onClick={() => {}}
            sx={{
              fontSize: $({ size: 13.5 }),
              fontWeight: '400',
              lineHeight: $({ size: 25 }),
              color: colors.extra.grey2,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}>
            {'Subjects'}
          </Typography>

          <Typography
            sx={{
              fontSize: $({ size: 15 }),
              fontWeight: '400',
              lineHeight: $({ size: 25 }),
              color: colors.extra.grey2,
            }}>
            {'>'}
          </Typography>
        </Box>
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
          'display': 'grid',
          'gridTemplateColumns': `repeat(auto-fill, minmax(${$({
            size: 160,
          })}, 1fr))`,
          'gridGap': {
            xs: $({ size: 24 }),
            md: $({ size: 24 }),
          },
          'gridAutoRows': '1fr', // to make all the rows the same height
          'maxHeight': {
            xs: 'unset',
            md: `calc(100vh - ${topSectionHeight + headerSectionHeight}px - ${$(
              {
                numeric: true,
                // ADJUSTMENT
                size:
                  60 + // TOP BAR HEIGHT
                  24 + // PARENT CONTAINER TOP PADDING
                  24 + // PARENT  CONTAINER BOTTOM PADDING
                  40 + // WRAPPER CONTAINER TOP PADDING
                  40 + // WRAPPER CONTAINER BOTTOM PADDING
                  24 + // HEADER SECTION GAP
                  -8,
              }
            )}px)`,
          },
          'overflowY': 'scroll',
          'mr': {
            xs: `-${$({ size: 6 })}`,
            md: `-${$({ size: 8 })}`,
          },
          'pr': {
            xs: 0,
            md: $({ size: 16 }),
          },
          '&::-webkit-scrollbar': {
            width: $({ size: 8 }),
            borderRadius: $({ size: 8 }),
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: colors.extra.grey3,
            borderRadius: $({ size: 8 }),
          },
        }}>
        {subjectData.map((subject, index) => {
          return (
            <Box
              key={index}
              onClick={() => {
                setRenderSubjectDetails({
                  render: true,
                  details: subject,
                });
              }}
              sx={{
                padding: $({ size: 16 }),
                borderRadius: $({ size: 16 }),
                boxShadow: `0 0 ${$({ size: 2 })} ${alpha(
                  colors.solids.black,
                  0.25
                )}`,
                backgroundColor: subject.color,
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
                    src={subject.iconPath}
                    alt={subject.title}
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </Box>

                <Typography
                  sx={{
                    fontSize: $({ size: 31.98 }),
                    fontWeight: '700',
                    lineHeight: $({ size: 40 }),
                    color: DarkenHexColor({
                      hex: subject.color,
                      percentage: 30,
                    }),
                  }}>
                  {subject.grade}
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: $({ size: 18 }),
                  fontWeight: '500',
                  lineHeight: $({ size: 30 }),
                  color: colors.solids.black,
                }}>
                {subject.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: $({ size: 13.5 }),
                  fontWeight: '400',
                  lineHeight: $({ size: 16 }),
                  color: colors.extra.grey1,
                }}>
                {subject.description}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default SubjectsTab;
