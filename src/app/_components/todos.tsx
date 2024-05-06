"use client";

import { api } from "~/trpc/react";
import { Todo } from "./todo";

export function Todos() {
  const { data: todos, isLoading, isError } = api.todo.all.useQuery();

  if (isLoading)
    return (
      <div className="flex items-center justify-center">
        <div
          style={{ borderTopColor: "transparent" }}
          className="border-blue-200 mt-32 h-10 w-10 animate-spin rounded-full border-4"
        />
        <p className="ml-4 mt-32 text-xl">loading...</p>
      </div>
    );

  if (isError || !todos)
    return (
      <div className="flex items-center justify-center">
        <p className="ml-4 mt-10 text-xl">Error fetching todos</p>
      </div>
    );

  return (
    <>
      {todos.map((todo) => {
        return (
          <section key={todo.id} className="mt-8 space-y-4">
            <Todo todo={todo} />
          </section>
        );
      })}
    </>
  );
}
