import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const Progress = ({percentage,trailColor,pathColor}) => {
  return (
    <>

<CircularProgressbar className='circle'
  value={`${percentage}`}
  text={`${percentage}%`}
  styles={buildStyles({
    // Rotation of path and trail, in number of turns (0-1)
    rotation: 1,

    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'round',

    // Text size
    textSize: '1.5rem',

    // How long animation takes to go from one percentage to another, in seconds
    pathTransitionDuration: 0.5,

    // Can specify path transition in more detail, or remove it entirely
    // pathTransition: 'none',

    // Colors
    pathColor: `${pathColor}`,
    textColor: 'black',
    trailColor: `${trailColor}`,
    backgroundColor: '#3e98c7',
  })}
/>
    </>
  )
}

export default Progress