export type Priority = 'low' | 'medium' | 'high';

export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: Priority;
  dueDate?: string; // Stored as 'YYYY-MM-DD'
  category: string;
  createdAt: string;
}

export type HabitFrequency = 'daily' | 'weekly';

export interface Habit {
  id: string;
  title: string;
  description?: string;
  frequency: HabitFrequency;
  category: string;
  color?: string; // Badge color class or hex code
  completedDates: string[]; // List of 'YYYY-MM-DD' strings when checked off
  createdAt: string;
}

export type TaskFilter = 'all' | 'pending' | 'completed';

export const DEFAULT_CATEGORIES = [
  'Work',
  'Health',
  'Learning',
  'Personal',
  'Fitness',
] as const;

export type Category = (typeof DEFAULT_CATEGORIES)[number] | string;
