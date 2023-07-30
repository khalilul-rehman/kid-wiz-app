const TWO_SEGMENT_POINTS = []

const THREE_SEGMENT_POINTS = []

const FOUR_SEGMENT_POINTS = []

const FIVE_SEGMENT_POINTS = []

const POINTS = ({ segments = 2 }) => {
  if (segments < 2 || segments > 5) return []
  else if (segments === 2) return TWO_SEGMENT_POINTS
  else if (segments === 3) return THREE_SEGMENT_POINTS
  else if (segments === 4) return FOUR_SEGMENT_POINTS
  else if (segments === 5) return FIVE_SEGMENT_POINTS
}

export default POINTS