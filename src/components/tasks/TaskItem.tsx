import { Check, Calendar, Trash2 } from 'lucide-react';
import type { Task, Priority } from '../../types';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const priorityStyles: Record<Priority, { badge: string; label: string }> = {
  high: {
    badge: 'bg-rose-50 text-rose-700 border-rose-200',
    label: 'High',
  },
  medium: {
    badge: 'bg-amber-50 text-amber-700 border-amber-200',
    label: 'Medium',
  },
  low: {
    badge: 'bg-slate-100 text-slate-600 border-slate-200',
    label: 'Low',
  },
};

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  const priorityInfo = priorityStyles[task.priority] || priorityStyles.low;

  return (
    <div
      className={`group flex items-start gap-3.5 p-4 rounded-xl border transition-all ${
        task.completed
          ? 'bg-slate-50/70 border-slate-200 opacity-75'
          : 'bg-white border-slate-200 shadow-xs hover:border-slate-300'
      }`}
    >
      {/* Custom Checkbox */}
      <button
        type="button"
        onClick={() => onToggle(task.id)}
        aria-label={task.completed ? 'Mark task as incomplete' : 'Mark task as complete'}
        className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-md border flex items-center justify-center transition-colors cursor-pointer ${
          task.completed
            ? 'bg-indigo-600 border-indigo-600 text-white'
            : 'border-slate-300 hover:border-indigo-500 bg-white'
        }`}
      >
        {task.completed && <Check className="w-3.5 h-3.5 stroke-[3]" />}
      </button>

      {/* Task Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className={`text-sm font-medium ${
              task.completed ? 'line-through text-slate-400' : 'text-slate-900'
            }`}
          >
            {task.title}
          </span>

          {/* Priority Badge */}
          <span
            className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${priorityInfo.badge}`}
          >
            {priorityInfo.label}
          </span>

          {/* Category Tag */}
          {task.category && (
            <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
              {task.category}
            </span>
          )}
        </div>

        {/* Optional Description */}
        {task.description && (
          <p
            className={`mt-1 text-xs leading-relaxed ${
              task.completed ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            {task.description}
          </p>
        )}

        {/* Optional Due Date */}
        {task.dueDate && (
          <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-400">
            <Calendar className="w-3.5 h-3.5" />
            <span>Due {task.dueDate}</span>
          </div>
        )}
      </div>

      {/* Delete Action Button */}
      <button
        type="button"
        onClick={() => onDelete(task.id)}
        aria-label={`Delete task: ${task.title}`}
        className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg cursor-pointer"
        title="Delete task"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
}
