"use client";
// https://github.com/streamich/react-use/blob/HEAD/docs/useVideo.md
import { useVideo } from "react-use";

export const UseVideoTest = () => {
  const [video, state, controls, ref] = useVideo(
    <video src="/assets/video.mp4" autoPlay />
  );

  return (
    <div>
      {video}
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button onClick={controls.pause}>Pause</button>
      <button onClick={controls.play}>Play</button>
      <br />
      <button onClick={controls.mute}>Mute</button>
      <button onClick={controls.unmute}>Un-mute</button>
      <br />
      <button onClick={() => controls.volume(0.1)}>Volume: 10%</button>
      <button onClick={() => controls.volume(0.5)}>Volume: 50%</button>
      <button onClick={() => controls.volume(1)}>Volume: 100%</button>
      <br />
      <button onClick={() => controls.seek(state.time - 5)}>-5 sec</button>
      <button onClick={() => controls.seek(state.time + 5)}>+5 sec</button>
      <button onClick={() => console.log(ref.current)}>Ref Current</button>
    </div>
  );
};
