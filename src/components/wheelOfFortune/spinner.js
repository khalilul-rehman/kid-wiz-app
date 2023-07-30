const GenerateRandomValue = (minium, maximum) => {
  return Math.random() * (maximum - minium) + minium
}

const MakeRotation = ({ ref, radian }) => {
  if (!ref.current.style) return
  ref.current.style.transform = `rotate(${radian}rad)`
}

const Spinner = ({
  targetRef = null,
  actionRef = null,
  isSpinning = false,
  setIsSpinning = () => { },
  isAccelerating = false,
  setIsAccelerating = () => { },
  friciton = 0.99,                           // 0.995=soft, 0.99=mid, 0.98=hard
  angleMinimumVelocity = 0.002,              // Below that number will be treated as a stop
}) => {
  let angle = 0                             // Angle rotation in radians
  let angleVelocity = 0                     // Current angular velocity
  let angleMaximumVelocity = 0              // Random angleMaximumVelocity to accelerate to 

  let _isSpinning = isSpinning              // Is spinning?
  let _isAccelerating = isAccelerating      // Is accelerating?
  let animationFrame = null                 // Engine's requestAnimationFrame

  const RenderFrame = () => {
    if (!_isSpinning) return

    if (angleVelocity >= angleMaximumVelocity) {
      _isAccelerating = false
      setIsAccelerating(_isAccelerating)
    }

    if (_isAccelerating) {
      angleVelocity ||= angleMinimumVelocity  // Initial Velocity Kick
      angleVelocity *= 1.06                   // Accelerate
    } else {
      _isAccelerating = false
      setIsAccelerating(_isAccelerating)

      // Decelerate by friction  
      angleVelocity *= friciton

      // SPIN END:
      if (angleVelocity < angleMinimumVelocity) {
        _isSpinning = false
        setIsSpinning(_isSpinning)

        angleVelocity = 0
        cancelAnimationFrame(animationFrame)
      }
    }

    angle += angleVelocity      // Update Angle
    angle %= (2 * Math.PI)      // Normalize Angle

    MakeRotation({ ref: targetRef, radian: angle })
  }

  const engine = () => {
    RenderFrame()
    animationFrame = requestAnimationFrame(engine)
  }

  actionRef?.current?.addEventListener('click', () => {
    if (_isSpinning) return

    _isSpinning = true
    setIsSpinning(_isSpinning)

    _isAccelerating = true
    setIsAccelerating(_isAccelerating)

    angleMaximumVelocity = GenerateRandomValue(0.25, 0.40)
    engine() // Start engine!
  })
}

export default Spinner