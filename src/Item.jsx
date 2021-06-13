import { ProjectStore } from "./stores";
const Item = () => {
  const { project } = ProjectStore();
  return <>{project}</>;
};

export default Item;
