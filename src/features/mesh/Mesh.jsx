import faceLandmarksDetection from '@tensorflow-models/face-landmarks-detection'

const Mesh = async (props) => {
    const model = await faceLandmarksDetection.load(faceLandmarksDetection.SupportedPackages.mediapipeFacemesh)
    const predictions = await model.estimateFaces({input: props.stream })

    if (predictions.length > 0) {
        for (let i = 0; i < predictions.length; i++) {
            const keypoints = predictions[i].scaledMesh

            for (let i = 0; i < keypoints.length; i++) {
                const [x, y, z] = keypoints[i];
        
                console.log(`Keypoint ${i}: [${x}, ${y}, ${z}]`);
            }
        }
    }
}

export default Mesh