import { useRouter } from "next/router";

const Workspace = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div className="workspace">{console.log(id)}Workspace here</div>;
};

export default Workspace;
