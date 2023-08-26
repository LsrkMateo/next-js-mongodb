"use client";

import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

function formPage() {
  const [newTask, setNewTask] = useState({ title: "", description: "" });
  const router = useRouter();
  const params = useParams();

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
  const getTask = async () => {
    const res = await fetch(`/api/tasks/${params.id}`);
    const data = await res.json();
    console.log(data);
    setNewTask({
      title: data.title,
      description: data.description,
    });
  };

  const updateTask = async () => {
    try {
      const res = await fetch(`/api/tasks/${params.id} `, {
        method: "PUT",
        body: JSON.stringify(newTask),
        headers: { "Content-Type": "application/json" },
      });
      const data = res.json();
      router.push("/");
      router.refresh();
    } catch (error) {
      console.log(error)
    }
  };
  const handlechange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!params.id) {
      await createTask();
    } else {
      updateTask();
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      try {
        const res = await fetch(`/api/tasks/${params.id}`, {
          method: "DELETE",
        });
        router.push(`/`);
        router.refresh();
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (params.id) {
      getTask();
    }
  }, []);
  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <form action="" onSubmit={handleSubmit}>
        <header className="flex justify-between">
          <h1 className="font-bold text-3xl">
            {!params.id ? "Create task" : "Update task"}
          </h1>

          <button
            type="button"
            className="bg-red-500 px-3 py-1 rounded-md"
            onClick={handleDelete}
          >
            Delete
          </button>
        </header>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="bg-grey-800 border-2 w-full p-4 rounded-lg my-4"
          onChange={handlechange}
          value={newTask.title}
        />
        <textarea
          name="description"
          placeholder="Description"
          rows={3}
          className="bg-grey-800 border-2 w-full p-4 rounded-lg my-4"
          onChange={handlechange}
          value={newTask.description}
        ></textarea>
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 rounded-lg"
        >
          {!params.id ? "create" : "update"}
        </button>
      </form>
    </div>
  );
}

export default formPage;
