import { useRouter } from "next/router";
import Head from "next/head";
import { GoPlus } from "react-icons/go";

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
            // onChange={onFileChange}
            style={{ visibility: "hidden" }}
          />
        </form>
      </div>
    </>
  );
};

export default Workspace;
