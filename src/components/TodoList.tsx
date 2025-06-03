"use client";

import { useState } from "react";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";
import { initialTodos } from "@/data/todos";



const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h1 className="text-lg font-medium mb-6">Todo List</h1>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full">
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(d) => {
              setDate(d);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>

      <ScrollArea className="h-[400px] mt-4 overflow-y-auto">
  <div className="flex flex-col gap-4">
    {todos.map((todo) => (
      <Card key={todo.id} className="p-4">
        <div className="flex items-center gap-4">
          <Checkbox
            id={todo.id}
            checked={todo.completed}
            onCheckedChange={() => toggleTodo(todo.id)}
          />
          <label htmlFor={todo.id} className="text-sm text-muted-foreground">
            {todo.text}
          </label>
        </div>
      </Card>
    ))}
  </div>
</ScrollArea>
    </div>
  );
};

export default TodoList;
