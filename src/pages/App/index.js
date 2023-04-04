import { Icon } from "../../assets";
import { Layout, FloatingButtons } from "../../components";
import Chat from "./Chat";
import Task from "./Task";

function App() {
  const feature = [
    {
      key: 1,
      icon: <Icon.QuestionIcon width="30px" height="30px" />,
      baseColor: "indicator.200",
      box: <Chat />,
    },
    {
      key: 2,
      icon: <Icon.TaskIcon width="26px" height="26px" />,
      baseColor: "indicator.100",
      box: <Task />,
    },
  ];

  return (
    <Layout>
      <FloatingButtons feature={feature} />
    </Layout>
  );
}

export default App;
