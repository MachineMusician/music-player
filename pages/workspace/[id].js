import { useRouter } from "next/router";
import Head from "next/head";

const Workspace = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Head>
        <title>Go To Play</title>
        <meta name="description" content="playing music" />
      </Head>
      <div className="workspace">
        <form>
          <label htmlFor="upload-image">
            <span>Upload Image!</span>
          </label>

          <input
            id="upload-image"
            className=""
            type="file"
            accept="image/*"
            // onChange={onFileChange}
            style={{ visibility: "hidden" }}
          />
        </form>
      </div>
    </>
  );
};

export default Workspace;
