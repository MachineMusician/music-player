import { useState } from "react";
import Cropper from "react-cropper";

const Workspace_Cropper = (props) => {
  const [cropper, setCropper] = useState(null);

  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      props.setCropData(cropper.getCroppedCanvas().toDataURL());
      props.setOpenCropperModal(false);
    }
  };

  const handleGoBackBtn = () => {
    props.setOpenCropperModal(false);
    // props.setFileString("");
  };

  return (
    <div className="myCropper">
      <div className="myCropper-container">
        <Cropper
          className="myCropper__realCropper"
          src={props.fileString}
          zoomTo={0.5}
          initialAspectRatio={1}
          viewMode={1}
          minCropBoxHeight={10}
          minCropBoxWidth={10}
          background={false}
          responsive={true}
          autoCropArea={1}
          checkOrientation={false}
          onInitialized={(instance) => {
            setCropper(instance);
          }}
          guides={true}
        />
        <div className="myCropper__btns">
          <button className="myCropper__btns__btn" onClick={getCropData}>
            Crop Image
          </button>
          <button className="myCropper__btns__btn" onClick={handleGoBackBtn}>
            Go Back
          </button>
          <button className="myCropper__btns__btn">Open Another</button>
        </div>
      </div>
    </div>
  );
};

export default Workspace_Cropper;
