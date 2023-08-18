function TaskCard({ task }) {
  return (
    <div className="bg-gray-800 p-10 text-white rounded-md hover:cursor-pointer hover:bg-gray-600">
      <h2>{task.title}</h2>
      <p>{task.description}</p>
    </div>
  );
}

export default TaskCard;
