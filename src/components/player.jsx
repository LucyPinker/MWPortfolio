import React, { useState, useEffect, createRef } from 'react'
import loadscript from 'load-script'


function Player() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [playlistIndex, setPlaylistIndex] = useState(0)
  const [player, setPlayer] = useState(false)

  const iframeRef = createRef()

  useEffect(() => {

    // use load-script module to load SC Widget API
    loadscript('https://w.soundcloud.com/player/api.js', () => {

      // initialize player and store reference in state

      const player = window.SC.Widget(iframeRef.current)
      setPlayer(player)

      const { PLAY, PLAY_PROGRESS, PAUSE, FINISH, ERROR } = window.SC.Widget.Events

      // NOTE: closures created - cannot access react state or props from within and SC callback functions!!

      player.bind(PLAY, () => {

        // update state to playing
        setIsPlaying(true)

        // check to see if song has changed - if so update state with next index
        player.getCurrentSoundIndex((playerPlaylistIndex) => {
          setPlaylistIndex(playerPlaylistIndex)
        })

      })

      player.bind(PAUSE, () => {
        // update state if player has paused - must double check isPaused since false positives
        player.isPaused((playerIsPaused) => {
          if (playerIsPaused) setIsPlaying(false)
        })
      })

    })

  }, [])


  // integration - update SC player based on new state (e.g. play button in React section was click)

  // adjust playback in SC player to match isPlaying state
  useEffect(() => {

    if (!player) return // player loaded async - make sure available

    player.isPaused((playerIsPaused) => {
      if (isPlaying && playerIsPaused) {
        player.play()
      } else if (!isPlaying && !playerIsPaused) {
        player.pause()
      }
    })

  }, [isPlaying])

  // adjust seleted song in SC player playlist if playlistIndex state has changed
  useEffect(() => {

    if (!player) return // player loaded async - make sure available

    player.getCurrentSoundIndex((playerPlaylistIndex) => {
      if (playerPlaylistIndex !== playlistIndex) player.skip(playlistIndex)
    })

  }, [playlistIndex])


  // React section button click event handlers (play/next/previous)
  //  - adjust React component state based on click events

  const togglePlayback = () => {
    setIsPlaying(!isPlaying)
  }

  const changePlaylistIndex = (skipForward = true) => {

    // get list of songs from SC widget
    player.getSounds((playerSongList) => {

      let nextIndex = (skipForward) ? playlistIndex + 1 : playlistIndex - 1

      // ensure index is not set to less than 0 or greater than playlist
      if (nextIndex < 0) nextIndex = 0
      else if (nextIndex >= playerSongList.length) nextIndex = playerSongList.length - 1

      setPlaylistIndex(nextIndex)

    })
  }

  return (
    <div className='Player'>
      <div className="soundcloud-section">
          <iframe ref={iframeRef} id="sound-cloud-player" style={{border: 'none', height: 314, width: 400}} scrolling="no" allow="autoplay"
          src={ "https://w.soundcloud.com/player/?url=https://soundcloud.com/matthew-pinker/tracks" }>
          </iframe>
        </div>
    </div>
  )
}

export default Player;
