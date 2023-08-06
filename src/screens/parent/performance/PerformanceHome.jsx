import React from 'react';
import { Box, Grid, useTheme, alpha, Typography, Avatar } from '@mui/material';

import {
  CustomDropDown,
  CustomTabs,
  DashboardContainer,
  QuestionProgressBar,
} from '../../../components';

import { ChestIcon } from '../../../icons';

import { ASSETS } from '../../../config/assets';
import { tokens } from '../../../theme';
import { $ } from '../../../utils';

import OverallScoreTab from './OverallScoreTab';
import SubjectsTab from './SubjectsTab';
import SubjectDetailsTab from './SubjectDetailsTab';
import StrengthsTab from './StrengthsTab';
import AreasForImprovementTab from './AreasForImprovementTab';
import GoalSettingTab from './GoalSettingTab';

import { SubjectData } from './data';

const PerformanceHome = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [renderSubjectDetails, setRenderSubjectDetails] = React.useState({
    render: false,
    details: {},
  });
  const [searchDropDownOpen, setSearchDropDownOpen] = React.useState(false);

  const childData = [
    {
      fullname: 'Liam Johnson',
      email: 'labanovskiy@gmail.com',
      photo: ASSETS.ON_BOARDING.CHILD,
    },
    {
      fullname: 'Alex Johnson',
      email: 'samhar25@gmail.com',
      photo: ASSETS.ON_BOARDING.CHILD,
    },
    {
      fullname: 'Mike Johnson',
      email: 'mikeluther1@gmail.com',
      photo: ASSETS.ON_BOARDING.CHILD,
    },
  ];

  const [childDropDownOpen, setChildDropDownOpen] = React.useState(false);
  const [selectedChild, setSelectedChild] = React.useState(childData[0]);

  const [datesDropDownOpen, setDatesDropDownOpen] = React.useState(false);
  const [selectedDates, setSelectedDates] = React.useState({});

  const [tabsData, setTabsData] = React.useState([
    { label: 'Overall Score', isSelected: true },
    { label: 'Subjects', isSelected: false },
    { label: 'Strengths', isSelected: false },
    { label: 'Areas for Improvement', isSelected: false },
    { label: 'Goal Setting', isSelected: false },
  ]);

  React.useEffect(() => {
    setSelectedDates({
      startDate: 'April 9, 2023',
      endDate: 'May 6, 2023',
    });
  }, []);

  // TO CALCULATE TOP SECTION HEIGHT
  const topSectionRef = React.useRef(null);
  const [topSectionHeight, setTopSectionHeight] = React.useState(0);

  React.useEffect(() => {
    setTopSectionHeight(topSectionRef.current?.offsetHeight || 0);
  }, [topSectionRef.current?.offsetHeight]);

  return (
    <DashboardContainer
      disableContainer
      wrapperStyle={{ position: 'relative' }}>
      <Grid
        container
        sx={{
          height: 'max-content',
          minHeight: '100%',
          position: 'relative',
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
        }}>
        {searchDropDownOpen && (
          <Box
            onClick={() => {
              setSearchDropDownOpen(false);
            }}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              zIndex: 99,
              borderRadius: $({ size: 12 }),
            }}
          />
        )}

        {(childDropDownOpen || datesDropDownOpen) && (
          <Box
            onClick={() => {
              setChildDropDownOpen(false);
              setDatesDropDownOpen(false);
            }}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              zIndex: 99,
              borderRadius: $({ size: 12 }),
            }}
          />
        )}

        <Grid
          item
          xs={12}
          lg={3}
          sx={{
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: $({ size: 24 }),
            backgroundColor: colors.white[800],
            boxShadow: `0 0 ${$({ size: 2 })} 0 ${alpha(
              colors.solids.black,
              0.25
            )}`,
            borderRadius: $({ size: 12 }),
          }}>
          <Grid
            container
            sx={{
              // height: '100%',
              padding: $({ size: 24 }),
              position: 'relative',
            }}>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={12}
              sx={{
                padding: {
                  xs: `0 0 ${$({ size: 24 })} 0`,
                  sm: `0 ${$({ size: 24 })} 0 0`,
                  md: `0 ${$({ size: 24 })} 0 0`,
                  lg: `0 0 ${$({ size: 24 })} 0`,
                },
              }}>
              <CustomDropDown
                label='Child'
                value='Choose a child'
                placeholder='Choose a child'
                dropDownOpen={childDropDownOpen}
                setDropDownOpen={setChildDropDownOpen}
                labelStyle={{
                  fontWeight: '600',
                  fontSize: $({ size: 13.5 }),
                  lineHeight: $({ size: 25 }),
                }}
                placeholderClosedStyle={{
                  fontSize: $({ size: 13.5 }),
                  lineHeight: $({ size: 25 }),
                }}
                placeholderOpenStyle={{
                  fontSize: $({ size: 13.5 }),
                  lineHeight: $({ size: 25 }),
                }}
                data={childData.map((item) => {
                  return {
                    onClick: () => {
                      setSelectedChild(item);
                    },
                    component: (
                      <>
                        <img
                          src={item.photo}
                          alt={item.fullname}
                          style={{
                            width: $({ size: 40 }),
                            height: $({ size: 40 }),
                            borderRadius: $({ size: 40 }),
                            border: `${$({ size: 1 })} solid ${
                              colors.extra.grey4
                            }`,
                            objectFit: 'cover',
                          }}
                        />
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            width: '100%',
                            overflow: 'hidden',
                          }}>
                          <Typography
                            sx={{
                              fontSize: $({ size: 13.5 }),
                              fontWeight: '500',
                              color: colors.extra.grey1,
                              lineHeight: $({ size: 22 }),
                              width: '100%',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                            }}>
                            {item.fullname}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: $({ size: 12 }),
                              fontWeight: '400',
                              color: colors.extra.grey2,
                              lineHeight: $({ size: 22 }),
                              width: '100%',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                            }}>
                            {item.email}
                          </Typography>
                        </Box>
                      </>
                    ),
                  };
                })}
              />

              <Box height={`${$({ size: 24 })}`} />

              <Typography
                sx={{
                  fontSize: $({ size: 13.5 }),
                  fontWeight: '600',
                  lineHeight: $({ size: 25 }),
                  color: colors.extra.grey3,
                  visibility: selectedChild.fullname ? 'visible' : 'hidden',
                }}>
                Currently Selected
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: $({ size: 16 }),
                  marginTop: $({ size: 8 }),
                  visibility: selectedChild.fullname ? 'visible' : 'hidden',
                }}>
                <Avatar
                  src={selectedChild?.photo || ''}
                  sx={{
                    width: $({ size: 40 }),
                    height: $({ size: 40 }),
                    borderRadius: $({ size: 40 }),
                    border: `${$({ size: 2 })} solid ${
                      colors.greenAccent[500]
                    }`,
                  }}
                />

                <Box sx={{ width: '100%', overflow: 'hidden' }}>
                  <Typography
                    sx={{
                      fontSize: $({ size: 13.5 }),
                      fontWeight: '500',
                      lineHeight: $({ size: 25 }),
                      color: colors.extra.grey1,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}>
                    {selectedChild?.fullname || ''}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: $({ size: 12 }),
                      fontWeight: '400',
                      color: colors.extra.grey2,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}>
                    {selectedChild?.email || ''}
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={12}>
              <CustomDropDown
                label='Dates'
                value='Choose dates'
                placeholder='Choose dates'
                dropDownOpen={datesDropDownOpen}
                setDropDownOpen={setDatesDropDownOpen}
                labelStyle={{
                  fontWeight: '600',
                  fontSize: $({ size: 13.5 }),
                  lineHeight: $({ size: 25 }),
                }}
                placeholderClosedStyle={{
                  fontSize: $({ size: 13.5 }),
                  lineHeight: $({ size: 25 }),
                }}
                placeholderOpenStyle={{
                  fontSize: $({ size: 13.5 }),
                  lineHeight: $({ size: 25 }),
                }}
              />

              <Box height={`${$({ size: 24 })}`} />

              <Typography
                sx={{
                  fontSize: $({ size: 13.5 }),
                  fontWeight: '600',
                  color: colors.extra.grey3,
                  visibility: selectedDates?.startDate ? 'visible' : 'hidden',
                }}>
                Currently Selected
              </Typography>
              <Typography
                sx={{
                  fontSize: $({ size: 13.5 }),
                  fontWeight: '500',
                  color: colors.extra.grey1,
                  visibility: selectedDates?.startDate ? 'visible' : 'hidden',
                }}>{`${selectedDates?.startDate} 🡢 ${selectedDates?.endDate}`}</Typography>
            </Grid>
          </Grid>
        </Grid>

        {selectedChild.fullname && (
          <Grid
            item
            xs={12}
            lg={9}
            sx={{
              flex: '1',
              padding: {
                xs: `${$({ size: 20 })} 0 0 0`,
                lg: `0 0 0 ${$({ size: 20 })}`,
              },
              position: 'relative',
            }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: colors.white[800],
                boxShadow: `0 0 ${$({ size: 2 })} 0 ${alpha(
                  colors.solids.black,
                  0.25
                )}`,
                width: '100%',
                borderRadius: $({ size: 12 }),
                height: '100%',
                padding: $({ size: 24 }),
                gap: $({ size: 24 }),
              }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: $({ size: 24 }),
                }}
                ref={topSectionRef}>
                <Box
                  id='child-info-section'
                  sx={{
                    display: 'flex',
                    gap: $({ size: 24 }),
                    alignItems: { xs: 'flex-start', sm: 'center' },
                    flexDirection: { xs: 'column', sm: 'row' },
                  }}>
                  <Avatar
                    src={selectedChild?.photo || ''}
                    sx={{
                      width: $({ size: 112 }),
                      height: $({ size: 112 }),
                      borderRadius: $({ size: 112 }),
                      border: `${$({ size: 3 })} solid ${
                        colors.greenAccent[500]
                      }`,
                      objectFit: 'cover',
                    }}
                  />

                  <Box
                    sx={{
                      width: { xs: '100%', md: '70%', lg: '50%' },
                      maxWidth: $({ size: 800 }),
                    }}>
                    <Typography
                      sx={{
                        fontWeight: '600',
                        fontSize: $({ size: 24 }),
                        color: colors.solids.black,
                        marginBottom: $({ size: 8 }),
                      }}>
                      {selectedChild?.fullname || ''}
                    </Typography>

                    <Box
                      sx={{
                        display: 'flex',
                        gap: $({ size: 24 }),
                        alignItems: 'center',
                      }}>
                      <Box sx={{ width: '100%' }}>
                        <Typography
                          sx={{
                            fontWeight: '600',
                            fontSize: $({ size: 13.5 }),
                            color: colors.extra.grey3,
                            marginBottom: $({ size: 8 }),
                          }}>
                          Time spent learning
                        </Typography>
                        <QuestionProgressBar
                          showQuestionNumber={false}
                          currentQuestion={6}
                        />
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: $({ size: 4 }),
                          }}>
                          <Box>
                            <Typography
                              sx={{
                                fontWeight: '600',
                                fontSize: $({ size: 13.5 }),
                                color: colors.extra.grey1,
                                display: 'inline',
                              }}>
                              {'4 hours 20m'}
                            </Typography>
                            <Typography
                              sx={{
                                fontWeight: '400',
                                fontSize: $({ size: 13.5 }),
                                color: colors.extra.grey1,
                                display: 'inline',
                              }}>
                              {' done!'}
                            </Typography>
                          </Box>

                          <Box>
                            <Typography
                              sx={{
                                fontWeight: '400',
                                fontSize: $({ size: 13.5 }),
                                color: colors.extra.grey1,
                                display: 'inline',
                              }}>
                              {'Goal: '}
                            </Typography>
                            <Typography
                              sx={{
                                fontWeight: '600',
                                fontSize: $({ size: 13.5 }),
                                color: colors.extra.grey1,
                                display: 'inline',
                              }}>
                              {'8 hours'}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>

                      <Box
                        sx={{
                          backgroundColor: colors.parentDashboard[1],
                          borderRadius: $({ size: 20 }),
                          padding: $({ size: 8 }),
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <ChestIcon size={$({ size: 18, numeric: true })} />
                      </Box>
                    </Box>
                  </Box>
                </Box>

                <CustomTabs
                  tabsData={tabsData}
                  setTabsData={(tab) => {
                    const temp = [...tabsData];
                    temp.forEach((item) => {
                      item.isSelected = false;
                    });
                    temp[tab].isSelected = true;
                    setTabsData(temp);
                    setRenderSubjectDetails({ render: false, details: {} });
                  }}
                />
              </Box>

              {tabsData.findIndex((item) => item.isSelected) === 0 && (
                <OverallScoreTab topSectionHeight={topSectionHeight} />
              )}

              {tabsData.findIndex((item) => item.isSelected) === 1 &&
                renderSubjectDetails.render && (
                  <SubjectDetailsTab
                    topSectionHeight={topSectionHeight}
                    subjectDetails={renderSubjectDetails.details}
                    setRenderSubjectDetails={setRenderSubjectDetails}
                    searchDropDownOpen={searchDropDownOpen}
                    setSearchDropDownOpen={setSearchDropDownOpen}
                    subjectsData={SubjectData}
                  />
                )}

              {tabsData.findIndex((item) => item.isSelected) === 1 &&
                !renderSubjectDetails.render && (
                  <SubjectsTab
                    topSectionHeight={topSectionHeight}
                    setRenderSubjectDetails={setRenderSubjectDetails}
                  />
                )}

              {tabsData.findIndex((item) => item.isSelected) === 2 && (
                <StrengthsTab topSectionHeight={topSectionHeight} />
              )}

              {tabsData.findIndex((item) => item.isSelected) === 3 && (
                <AreasForImprovementTab topSectionHeight={topSectionHeight} />
              )}

              {tabsData.findIndex((item) => item.isSelected) === 4 && (
                <GoalSettingTab topSectionHeight={topSectionHeight} />
              )}
            </Box>
          </Grid>
        )}
      </Grid>
    </DashboardContainer>
  );
};

export default PerformanceHome;
