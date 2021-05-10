import React, { useState, useRef, useEffect } from 'react'
// import Mesh from '../mesh/Mesh'

const Camera = () => {
    const videoRef = useRef(null);
    useEffect(() => {
        getVideo()
        // Mesh(videoRef)
    }, [videoRef])


    const getVideo = () => {
        navigator.mediaDevices.getUserMedia({ video: { width: 300 } })
            .then(stream => {
                let video = videoRef.current
                video.srcObject = stream
                video.play()
            })
            .catch(err => {
                console.error("error:", err)
            })
    }

    return (
        <div>
            <video ref={videoRef}/>
            {/* <Mesh stream={videoRef} /> */}
        </div>
    )
}

export default Camera