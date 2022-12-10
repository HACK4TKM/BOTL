import ReactSlider from "react-slider";

const Slider = () => {
  return (
    <ReactSlider
      className="horizontal-slider"
      thumbClassName="example-thumb"
      trackClassName="example-track"
      renderTrack={(props, state) => <div {...props} />} //custom track
    />
  );
};

export default Slider;
