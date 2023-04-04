import { useEffect, useState } from "react";
import { listTask } from "./dataSource";

const useTask = () => {
  const [task, setTask] = useState({ loading: false, data: null });

  const getList = () => {
    setTask({ ...task, loading: true });

    setTimeout(() => {
      setTask({ loading: false, data: listTask });
    }, 1000);
  };

  const checked = (id) => {
    const find = task.data.find((elem) => elem.id === id);
    const checkedFind = { ...find, checked: !find.checked };
    const newTaskData = [...task.data, { ...checkedFind }];

    setTask({ ...task, data: newTaskData });
  };

  useEffect(() => {
    getList();
  }, []);

  return { task, checked };
};

export { useTask };
