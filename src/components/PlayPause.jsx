import {FaPauseCircle, FaPlayCircle} from 'react-icons/fa';


const PlayPause = ({isPlaying, activeSong, song, handlePause,
  handlePlay}) => (
  isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle
      onClick={handlePause}
      className='text-4xl text-white cursor-pointer
      transition duration-300 ease-in-out transform hover:scale-125'
    
    />
  ) : (
    <FaPlayCircle
      onClick={handlePlay}
      className='text-4xl text-white cursor-pointer
      transition duration-300 ease-in-out transform hover:scale-125'
    />

  )
);

export default PlayPause;
