import { NextResponse } from "next/server";
import { conectDB } from "../../../../utils/mongoose";
import Task from "../../../../models/Task"

export async function GET(request, { params }) {
  try {
    conectDB();
    const taskFound = await Task.findById(params.task_id);
    if (!taskFound)
      return NextResponse.json({ message: "Task not found" }, { status: 404 });

    return NextResponse.json(taskFound);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const taskDeleted = await Task.findByIdAndDelete(params.task_id);
    if (!taskDeleted)
      return NextResponse.json(
        {
          message: "Tarea no encontrada",
        },
        {
          status: 404,
        }
      );
    return NextResponse.json(taskDeleted);
  } catch (error) {
    return NextResponse.json(error.message, { status: 404 });
  }
}

export async function PUT(request, { params }) {
  try {
    const data = await request.json();
    const updatedTask = await Task.findByIdAndUpdate(params.task_id, data, {
      new: true, // return updated task
    });
    return NextResponse.json(updatedTask);
  } catch (error) {
    return NextResponse.json(error.message, { status: 400 });
  }
}
