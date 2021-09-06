import { useState } from "react";
import Cropper from "react-cropper";

const Workspace_Cropper = (props) => {
  const [cropper, setCropper] = useState(null);

  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      setCropData(cropper.getCroppedCanvas().toDataURL());
    }
  };
  return (
    <div className="myCropper">
      <Cropper
        className="cropper"
        src={props.fileString}
        guides={true}
        zoomTo={0.1}
        initialAspectRatio={1}
        viewMode={4}
        minCropBoxHeight={10}
        minCropBoxWidth={10}
        background={false}
        responsive={true}
        autoCropArea={2}
        checkOrientation={false}
        style={
          {
            // width: "600px",
            // height: "1000px",
            // width: "100%",
            // height: "100%",
            // position: "absolute",
            // top: "0",
            // left: "0",
          }
        }
        onInitialized={(instance) => {
          setCropper(instance);
        }}
      />
      <button onClick={getCropData}>Crop Image</button>
    </div>
  );
};

export default Workspace_Cropper;
