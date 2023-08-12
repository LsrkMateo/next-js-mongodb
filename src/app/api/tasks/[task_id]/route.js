import { NextResponse } from "next/server";

export function GET(request, { params }) {
  return NextResponse.json({ message: `obteniendo tarea ${params.task_id}` });
}

export function DELETE(request, { params }) {
  return NextResponse.json({ message: `eliminando tarea ${params.task_id}` });
}

export function PUT(request, { params }) {
  return NextResponse.json({ message: `actualizando tarea ${params.task_id}` });
}
