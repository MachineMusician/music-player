import { useRouter } from "next/router";
import Head from "next/head";
import { GoPlus } from "react-icons/go";
import { useState } from "react";

const Workspace = () => {
  const router = useRouter();
  const { id } = router.query; // info of random user
  const [fileString, setFileString] = useState("");

  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    const targetFile = files[0];

    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setFileString(result);
    };
    reader.readAsDataURL(targetFile);
  };
  return (
    <>
      <Head>
        <title>Go To Play</title>
        <meta name="description" content="playing music" />
      </Head>
      <div className="workspace">
        <form>
          <label htmlFor="upload-image">
            <div className="workspace__uploadImg">
              <GoPlus className="workspace__uploadImg__icon" />
              <span>Upload images!!</span>
              <span>.jpg/.jpeg/.png</span>
            </div>
          </label>
          <input
            id="upload-image"
            className=""
            type="file"
            accept="image/*"
            onChange={onFileChange}
            style={{ visibility: "hidden" }}
          />

          {fileString && <img src={fileString} width="100px" height="100px" />}
        </form>
      </div>
    </>
  );
};

export default Workspace;
