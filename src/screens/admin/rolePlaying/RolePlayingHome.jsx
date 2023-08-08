import React from 'react';
import {
  Box,
  useTheme,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  alpha,
} from '@mui/material';

import {
  DashboardContainer,
  CustomSearchInput,
  CustomModal,
  CustomButton,
  CustomTextInput,
  CustomLabel,
} from '../../../components';

import {
  AddIcon,
  ChevronDownIcon,
  ChevronSlimDownIcon,
  EditIcon,
  SaveIcon,
  TrashIcon,
} from '../../../icons';

import { tokens } from '../../../theme';
import { $ } from '../../../utils';

import RolePlayingTopicManagementModal from './RolePlayingTopicManagementModal';
import RolePlayingSubTopicManagementModal from './RolePlayingSubTopicManagementModal';
import { RolePlayingTopicsData } from './data';

const RolePlayingHome = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [isRolePlayingTopicModalOpen, setIsRolePlayingTopicModalOpen] =
    React.useState({
      isOpen: false,
      index: -1,
    });

  const [isRolePlayingSubTopicModalOpen, setIsSubRolePlayingSubTopicModalOpen] =
    React.useState({
      isOpen: false,
      index: -1,
    });

  const [isDeleteConfirmationModalOpen, setIsDeleteConfirmationModalOpen] =
    React.useState(false);

  const [search, setSearch] = React.useState('');
  const handleSearch = () => {};

  const [defaultPrompt, setDefaultPrompt] = React.useState('');

  const [rolePlayingTopicsData, setRolePlayingTopicsData] = React.useState(
    RolePlayingTopicsData
  );

  const [currentSelectedRolePlayingTopic, setCurrentSelectedRolePlayingTopic] =
    React.useState(null);

  const [rolePlayingSubTopics, setRolePlayingSubTopics] = React.useState([]);

  const [
    currentSelectedRolePlayingSubTopic,
    setCurrentSelectedRolePlayingSubTopic,
  ] = React.useState(null);

  const [expandedRolePlayingTopic, setExpandedRolePlayingTopic] =
    React.useState('');
  const [expandedRolePlayingSubTopic, setExpandedRolePlayingSubTopic] =
    React.useState('');

  const handleRolePlayingTopicChange = (panel) => (event, newExpanded) => {
    setExpandedRolePlayingTopic(newExpanded ? panel : false);
    setExpandedRolePlayingSubTopic(false);
  };

  const handleRolePlayingSubTopicChange = (panel) => (event, newExpanded) => {
    setExpandedRolePlayingSubTopic(newExpanded ? panel : false);
  };

  // TO CALCULATE TOP SECTION HEIGHT
  const topSectionRef = React.useRef(null);
  const [topSectionHeight, setTopSectionHeight] = React.useState(0);

  React.useEffect(() => {
    setTopSectionHeight(topSectionRef.current?.offsetHeight || 0);
  }, [topSectionRef.current?.offsetHeight]);

  return (
    <DashboardContainer
      wrapperStyle={{ position: 'relative' }}
      containerStyle={{
        pb: $({ size: 20 }),
      }}>
      <Box
        ref={topSectionRef}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: $({ size: 24 }),
        }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: $({ size: 8 }),
            width: '100%',
          }}>
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
                color: colors.extra.grey1,
              }}>
              Roleplaying Topics
            </Typography>

            <CustomSearchInput
              placeholder='Search for topic'
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

          <Box
            onClick={() => {
              setIsRolePlayingTopicModalOpen({ isOpen: true, index: -1 });
            }}
            sx={{
              display: 'flex',
              gap: $({ size: 16 }),
              alignItems: 'center',
              cursor: 'pointer',
            }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <AddIcon
                color={colors.solids.mainButton}
                size={$({ size: 32, numeric: true })}
              />
            </Box>

            <Typography
              sx={{
                fontSize: $({ size: 18 }),
                fontWeight: '700',
                color: colors.extra.grey2,
                textTransform: 'uppercase',
              }}>
              New Roleplaying Topic
            </Typography>
          </Box>

          <Box sx={{ mb: $({ size: 16 }) }}>
            <Box
              sx={{
                mt: $({ size: 8 }),
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: $({ size: 16 }),
              }}>
              <CustomLabel label='Defualt Prompt' />
              <Box
                onClick={() => {}}
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: $({ size: 8 }),
                  cursor: 'pointer',
                }}>
                <SaveIcon
                  color={colors.solids.mainButton}
                  size={$({ size: 16, numeric: true })}
                />
                <Typography
                  sx={{
                    fontSize: $({ size: 18 }),
                    color: colors.solids.mainButton,
                    fontWeight: '500',
                  }}>
                  Save
                </Typography>
              </Box>
            </Box>

            <CustomTextInput
              label={null}
              multiline={true}
              value={defaultPrompt}
              onChange={(e) => setDefaultPrompt(e.target.value)}
              placeholder='Write the default prompt for all roleplaying topics unless overwritten'
              containerStyle={{
                width: '100%',
                height: '100%',
              }}
              inputContainerStyle={{
                height: $({ size: 120 }),
              }}
              inputStyle={{
                height: $({ size: 100 }),
                overflowY: 'scroll',
              }}
            />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          'marginTop': `-${$({ size: 32 })}`,
          'height': '100%',
          'overflowY': 'scroll',
          'maxHeight': `calc(100vh - ${topSectionHeight}px - ${$({
            numeric: true,
            // ADJUSTMENT
            size:
              60 + // TOP BAR HEIGHT
              24 + // PARENT CONTAINER TOP PADDING
              24 + // PARENT  CONTAINER BOTTOM PADDING
              40 + // WRAPPER CONTAINER TOP PADDING
              20 + // WRAPPER CONTAINER BOTTOM PADDING
              24 + // HEADER SECTION GAP
              4,
          })}px)`,
          'pr': $({ size: 16 }),
          '&::-webkit-scrollbar': {
            width: $({ size: 8 }),
            borderRadius: $({ size: 8 }),
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: colors.extra.grey3,
            borderRadius: $({ size: 8 }),
          },
        }}>
        {rolePlayingTopicsData.map((rolePlayingTopic, index) => {
          return (
            <Accordion
              disableGutters
              key={`accordion-${index}-${rolePlayingTopic.id}`}
              expanded={expandedRolePlayingTopic === `${rolePlayingTopic.id}`}
              onChange={handleRolePlayingTopicChange(`${rolePlayingTopic.id}`)}
              sx={{
                'border': 'none',
                'borderBottom': `${$({ size: 1 })} solid ${colors.extra.grey4}`,
                '&:before': {
                  display: 'none',
                },
                'backgroundColor': 'transparent',
                'boxShadow': 'none',
                'width': '100%',
                'cursor': 'default',
                'margin': 0,
                'padding': `${$({ size: 24 })} 0`,
                '& .MuiButtonBase-root.MuiAccordionSummary-root.Mui-expanded': {
                  minHeight: 'fit-content',
                  height: 'fit-content',
                },
                '& .MuiAccordionSummary-root': {
                  minHeight: 'fit-content',
                  height: 'fit-content',
                },
              }}>
              <AccordionSummary
                aria-controls={`${rolePlayingTopic.id}-content`}
                id={`${rolePlayingTopic.id}-content`}
                // disableGutters
                elevation={0}
                expandIcon={
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <ChevronDownIcon
                      size={$({ size: 30, numeric: true })}
                      color={colors.extra.grey3}
                    />
                  </Box>
                }
                sx={{
                  'backgroundColor': 'transparent',
                  'flexDirection': 'row-reverse',
                  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                    transform: 'rotate(180deg)',
                  },
                  '& .MuiAccordionSummary-content': {
                    margin: 0,
                    padding: 0,
                  },
                  'width': '100%',
                  'cursor': 'default',
                  'margin': 0,
                  'padding': 0,
                  ':focus': {
                    outline: 'none',
                    backgroundColor: 'transparent',
                  },
                  '& .MuiAccordionSummary-content.Mui-expanded>div>div>p': {
                    fontWeight: '700',
                    color: colors.solids.black,
                  },
                }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    marginLeft: $({ size: 16 }),
                  }}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      gap: $({ size: 16 }),
                      alignItems: 'center',
                    }}>
                    <Typography
                      sx={{
                        color: colors.extra.grey1,
                        fontSize: $({ size: 18 }),
                        fontWeight: '600',
                      }}>
                      {rolePlayingTopic.title}
                    </Typography>

                    <Box
                      sx={{
                        padding: `${$({ size: 4 })} ${$({ size: 12 })}`,
                        borderRadius: $({ size: 100 }),
                        backgroundColor:
                          rolePlayingTopic.tier.toLowerCase() === 'basic'
                            ? colors.solids.orange
                            : rolePlayingTopic.tier.toLowerCase() === 'pro'
                            ? colors.solids.green
                            : rolePlayingTopic.tier.toLowerCase() === 'premium'
                            ? colors.solids.purple
                            : colors.extra.grey3,
                      }}>
                      <Typography
                        sx={{
                          color: colors.solids.black,
                          fontSize: $({ size: 13.5 }),
                          fontWeight: '500',
                          textTransform: 'capitalize',
                        }}>
                        {rolePlayingTopic.tier}
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: $({ size: 24 }),
                    }}>
                    <Box
                      onClick={() => {
                        setCurrentSelectedRolePlayingTopic(rolePlayingTopic);
                        setIsRolePlayingTopicModalOpen({
                          isOpen: true,
                          index: index,
                        });
                      }}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <EditIcon
                        size={$({ size: 24, numeric: true })}
                        color={colors.extra.grey3}
                      />
                    </Box>

                    <Box
                      onClick={() => {
                        setCurrentSelectedRolePlayingTopic(rolePlayingTopic);
                        setIsDeleteConfirmationModalOpen(true);
                      }}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <TrashIcon
                        size={$({ size: 24, numeric: true })}
                        color={colors.extra.grey3}
                      />
                    </Box>
                  </Box>
                </Box>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  border: 'none',
                  margin: 0,
                  marginLeft: $({ size: 48 }),
                  marginTop: $({ size: 16 }),
                  padding: 0,
                  gap: $({ size: 16 }),
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                <Typography
                  sx={{
                    fontSize: $({ size: 14 }),
                    fontWeight: '400',
                    color: colors.solids.black,
                  }}>
                  {rolePlayingTopic.description}
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: $({ size: 16 }),
                  }}>
                  <Typography
                    sx={{
                      fontSize: $({ size: 13.5 }),
                      fontWeight: '500',
                      color: colors.extra.grey3,
                    }}>
                    Prompt
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: $({ size: 13.5 }),
                      fontWeight: '500',
                      color: colors.extra.grey1,
                      // textTransform: 'uppercase',
                    }}>
                    {`${rolePlayingTopic.prompt}`}
                  </Typography>
                </Box>

                {rolePlayingTopic.subRolePlayingTopics.map(
                  (subRolePlayingTopic, index) => {
                    return (
                      <Accordion
                        disableGutters
                        key={`accordion-${index}-${subRolePlayingTopic.id}`}
                        expanded={
                          expandedRolePlayingSubTopic ===
                          `${subRolePlayingTopic.id}`
                        }
                        onChange={handleRolePlayingSubTopicChange(
                          `${subRolePlayingTopic.id}`
                        )}
                        sx={{
                          'border': 'none',
                          '&:before': {
                            display: 'none',
                          },
                          'backgroundColor': 'transparent',
                          'boxShadow': 'none',
                          'width': '100%',
                          'cursor': 'default',
                          'margin': 0,
                          'padding': 0,
                          '& .MuiButtonBase-root.MuiAccordionSummary-root.Mui-expanded':
                            {
                              minHeight: 'fit-content',
                              height: 'fit-content',
                            },
                          '& .MuiAccordionSummary-root': {
                            minHeight: 'fit-content',
                            height: 'fit-content',
                          },
                        }}>
                        <AccordionSummary
                          aria-controls={`${subRolePlayingTopic.id}-content`}
                          id={`${subRolePlayingTopic.id}-content`}
                          // disableGutters
                          elevation={0}
                          expandIcon={
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}>
                              <ChevronSlimDownIcon
                                size={$({ size: 10, numeric: true })}
                                color={colors.extra.grey3}
                              />
                            </Box>
                          }
                          sx={{
                            'backgroundColor': 'transparent',
                            'flexDirection': 'row-reverse',
                            '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded':
                              {
                                transform: 'rotate(180deg)',
                              },
                            '& .MuiAccordionSummary-content': {
                              margin: 0,
                              padding: 0,
                            },
                            'width': '100%',
                            'cursor': 'default',
                            'margin': 0,
                            'padding': 0,
                            ':focus': {
                              outline: 'none',
                              backgroundColor: 'transparent',
                            },
                            '& .MuiAccordionSummary-content.Mui-expanded>div>div>p':
                              {
                                fontWeight: '700',
                                color: colors.solids.black,
                              },
                          }}>
                          <Typography
                            sx={{
                              color: colors.extra.grey1,
                              fontSize: $({ size: 13.5 }),
                              fontWeight: '600',
                              marginLeft: $({ size: 16 }),
                            }}>
                            {subRolePlayingTopic.title}
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails
                          sx={{
                            border: 'none',
                            margin: 0,
                            padding: 0,
                            ml: $({ size: 7 }),
                            pl: $({ size: 25 }),
                            mt: $({ size: 4 }),
                            pt: $({ size: 4 }),
                            gap: $({ size: 8 }),
                            display: 'flex',
                            flexDirection: 'column',
                            borderLeft: `${$({ size: 2 })} solid ${
                              colors.extra.grey4
                            }`,
                          }}>
                          <Typography
                            sx={{
                              fontSize: $({ size: 14 }),
                              fontWeight: '400',
                              color: colors.solids.black,
                            }}>
                            {subRolePlayingTopic.description}
                          </Typography>
                          <Box
                            sx={{
                              display: 'flex',
                              flexDirection: 'row',
                              alignItems: 'center',
                              gap: $({ size: 16 }),
                            }}>
                            <Typography
                              sx={{
                                fontSize: $({ size: 13.5 }),
                                fontWeight: '500',
                                color: colors.extra.grey3,
                              }}>
                              Prompt
                            </Typography>

                            <Typography
                              sx={{
                                fontSize: $({ size: 13.5 }),
                                fontWeight: '500',
                                color: colors.extra.grey1,
                                // textTransform: 'uppercase',
                              }}>
                              {`${subRolePlayingTopic.prompt}`}
                            </Typography>
                          </Box>
                        </AccordionDetails>
                      </Accordion>
                    );
                  }
                )}
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>

      {isRolePlayingTopicModalOpen.isOpen && (
        <RolePlayingTopicManagementModal
          isModalOpen={isRolePlayingTopicModalOpen}
          setIsModalOpen={setIsRolePlayingTopicModalOpen}
          currentSelectedRolePlayingTopic={currentSelectedRolePlayingTopic}
          setCurrentSelectedRolePlayingTopic={
            setCurrentSelectedRolePlayingTopic
          }
          setIsSubRolePlayingSubTopicModalOpen={
            setIsSubRolePlayingSubTopicModalOpen
          }
          setCurrentSelectedRolePlayingSubTopic={
            setCurrentSelectedRolePlayingSubTopic
          }
          setRolePlayingTopicsData={setRolePlayingTopicsData}
          rolePlayingSubTopics={
            rolePlayingSubTopics.length > 0
              ? rolePlayingSubTopics
              : currentSelectedRolePlayingTopic?.subRolePlayingTopics || []
          }
          setRolePlayingSubTopics={setRolePlayingSubTopics}
        />
      )}

      {isRolePlayingSubTopicModalOpen.isOpen && (
        <RolePlayingSubTopicManagementModal
          isModalOpen={isRolePlayingSubTopicModalOpen}
          setIsModalOpen={setIsSubRolePlayingSubTopicModalOpen}
          currentSelectedRolePlayingSubTopic={
            currentSelectedRolePlayingSubTopic
          }
          setCurrentSelectedRolePlayingSubTopic={
            setCurrentSelectedRolePlayingSubTopic
          }
          setIsRolePlayingTopicModalOpen={setIsRolePlayingTopicModalOpen}
          rolePlayingSubTopics={
            currentSelectedRolePlayingTopic?.subRolePlayingTopics || []
          }
          setRolePlayingSubTopics={setRolePlayingSubTopics}
        />
      )}

      {isDeleteConfirmationModalOpen && (
        <CustomModal
          showBackdrop
          title={null}
          wrapperStyle={{
            maxWidth: $({ size: 540 }),
            width: '100%',
            top: $({ size: 64 }),
            left: '50%',
            transform: 'translate(-50%)',
          }}
          containerStyle={{
            padding: $({ size: 40 }),
            minHeight: $({ size: 280 }),
            display: 'flex',
            flexDirection: 'column',
          }}
          headerContainerStyle={{
            mr: `-${$({ size: 20 })}`,
            mt: `-${$({ size: 20 })}`,
          }}
          onClose={() => {
            setIsDeleteConfirmationModalOpen(false);
          }}>
          <Box sx={{ mt: $({ size: 16 }) }}>
            <Typography
              sx={{
                color: colors.solids.black,
                fontSize: $({ size: 18 }),
                fontWeight: '400',
                display: 'inline',
              }}>
              Are you sure you want to delete the roleplaying topic
            </Typography>
            <Typography
              sx={{
                color: colors.solids.black,
                fontSize: $({ size: 18 }),
                fontWeight: '600',
                display: 'inline',
              }}>
              {` ${currentSelectedRolePlayingTopic?.title}`}
            </Typography>
            <Typography
              sx={{
                color: colors.solids.black,
                fontSize: $({ size: 18 }),
                fontWeight: '400',
                display: 'inline',
              }}>
              ?
            </Typography>
          </Box>
          <Box sx={{ flex: 1 }} />
          <Box
            sx={{
              mt: $({ size: 16 }),
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <CustomButton
              label='No'
              isSecondary
              sx={{ maxWidth: 'fit-content', textTransform: 'capitalize' }}
              onClick={() => {
                setIsDeleteConfirmationModalOpen(false);
                setCurrentSelectedRolePlayingTopic(null);
              }}
            />
            <CustomButton
              label='Yes'
              sx={{
                'maxWidth': 'fit-content',
                'textTransform': 'capitalize',
                'backgroundColor': colors.redAccent[400],
                '&:hover': {
                  backgroundColor: alpha(colors.redAccent[400], 0.8),
                },
              }}
              onClick={() => {
                setIsDeleteConfirmationModalOpen(false);

                const temp = [...rolePlayingTopicsData];
                temp.splice(
                  rolePlayingTopicsData.findIndex(
                    (item) => item.id === currentSelectedRolePlayingTopic.id
                  ),
                  1
                );
                setRolePlayingTopicsData(temp);

                setCurrentSelectedRolePlayingTopic(null);
              }}
            />
          </Box>
        </CustomModal>
      )}
    </DashboardContainer>
  );
};

export default RolePlayingHome;
