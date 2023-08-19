"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

function formPage() {
  const [newTask, setNewTask] = useState({ title: "", description: "" });
  const router = useRouter();

  const createTask = async () => {
    try {
      const res = await fetch("/api/tasks", {
        method: "POST",
        body: JSON.stringify(newTask),
        headers: {
          "content-type": "application/json",
        },
      });
      const data = await res.json();

      if (res.status === 200) {
        router.push("/");
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handlechange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(newTask);
    await createTask();
  };
  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <form action="" onSubmit={handleSubmit}>
        <h1 className="font-bold text-xl">Create Task</h1>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="bg-grey-800 border-2 w-full p-4 rounded-lg my-4"
          onChange={handlechange}
        />
        <textarea
          name="description"
          placeholder="Description"
          rows={3}
          className="bg-grey-800 border-2 w-full p-4 rounded-lg my-4"
          onChange={handlechange}
        ></textarea>
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 rounded-lg">
          save
        </button>
      </form>
    </div>
  );
}

export default formPage;
