import {
  CheckCircle2,
  Flame,
  ArrowRight,
  Target,
  Clock,
  TrendingUp,
  BarChart3,
  Calendar,
  Layers,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { Task, Habit } from '../types';

export function DashboardPage() {
  const [tasks] = useLocalStorage<Task[]>('taskhabit_tasks', []);
  const [habits] = useLocalStorage<Habit[]>('taskhabit_habits', []);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div className="space-y-8">
      {/* Hero Welcome Card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 p-6 sm:p-8 text-white shadow-sm">
        <div className="max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/15 backdrop-blur-xs mb-3 text-indigo-100">
            <Sparkles className="w-3.5 h-3.5" />
            Task & Habit Tracker
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Plan with Clarity. Build with Consistency.
          </h1>
          <p className="mt-2 text-indigo-100 text-sm sm:text-base leading-relaxed">
            A modern, responsive tracker designed to help you organize daily tasks, manage deadlines, build positive habits, and monitor your weekly performance.
          </p>
        </div>

        {/* Decorative background glow */}
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Live Overview Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between text-slate-500 mb-1">
            <span className="text-xs font-medium">Pending Tasks</span>
            <Clock className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-2xl font-bold text-slate-900">{pendingTasks}</div>
        </div>

        <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between text-slate-500 mb-1">
            <span className="text-xs font-medium">Completed Tasks</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="text-2xl font-bold text-slate-900">{completedTasks}</div>
        </div>

        <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between text-slate-500 mb-1">
            <span className="text-xs font-medium">Active Habits</span>
            <Flame className="w-4 h-4 text-orange-500" />
          </div>
          <div className="text-2xl font-bold text-slate-900">{habits.length}</div>
        </div>

        <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between text-slate-500 mb-1">
            <span className="text-xs font-medium">Weekly Rate</span>
            <TrendingUp className="w-4 h-4 text-indigo-500" />
          </div>
          <div className="text-2xl font-bold text-slate-900">
            {totalTasks > 0 ? `${Math.round((completedTasks / totalTasks) * 100)}%` : '0%'}
          </div>
        </div>
      </div>

      {/* Core Design Philosophy: Two Distinct Concepts */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-indigo-600" />
          <h2 className="text-lg font-bold text-slate-900">Core Concepts: Tasks vs. Habits</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Tasks Card */}
          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between hover:border-indigo-200 transition">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600">
                  <CheckCircle2 className="w-5 h-5" />
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                  Finite Activities
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900">Task Management</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Tasks have a distinct completion status. Once finished, they are checked off.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  Organize daily to-dos and priorities (Low, Medium, High).
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  Manage deadlines and target completion dates.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  Filter by category, search text, or status.
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <Link
                to="/tasks"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
              >
                Open Tasks Manager <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Habits Card */}
          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between hover:border-amber-200 transition">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-xl bg-amber-50 text-amber-600">
                  <Flame className="w-5 h-5" />
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700">
                  Recurring Routines
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900">Habit Building</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Habits repeat continuously over time. They store individual completion records for specific dates.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  Build daily and weekly routines that stay consistent.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  Track streaks and date-specific completion logs.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  Evaluate 7-day rolling performance.
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <Link
                to="/habits"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-600 hover:text-amber-700"
              >
                Open Habits Tracker <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Product Capabilities Grid */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900">Product Capabilities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
            <span className="p-2 rounded-lg bg-indigo-50 text-indigo-600 flex-shrink-0">
              <Target className="w-4 h-4" />
            </span>
            <div>
              <h4 className="text-sm font-semibold text-slate-900">Organize Daily Tasks</h4>
              <p className="mt-0.5 text-xs text-slate-500">Capture, filter, and complete day-to-day responsibilities.</p>
            </div>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
            <span className="p-2 rounded-lg bg-indigo-50 text-indigo-600 flex-shrink-0">
              <Clock className="w-4 h-4" />
            </span>
            <div>
              <h4 className="text-sm font-semibold text-slate-900">Priorities & Deadlines</h4>
              <p className="mt-0.5 text-xs text-slate-500">Tag tasks with priority levels and target dates to stay focused.</p>
            </div>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
            <span className="p-2 rounded-lg bg-amber-50 text-amber-600 flex-shrink-0">
              <Calendar className="w-4 h-4" />
            </span>
            <div>
              <h4 className="text-sm font-semibold text-slate-900">Consistent Daily Habits</h4>
              <p className="mt-0.5 text-xs text-slate-500">Reinforce productive routines with structured frequencies.</p>
            </div>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
            <span className="p-2 rounded-lg bg-amber-50 text-amber-600 flex-shrink-0">
              <Flame className="w-4 h-4" />
            </span>
            <div>
              <h4 className="text-sm font-semibold text-slate-900">Completion & Streaks</h4>
              <p className="mt-0.5 text-xs text-slate-500">Log completions by date and keep momentum alive.</p>
            </div>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
            <span className="p-2 rounded-lg bg-emerald-50 text-emerald-600 flex-shrink-0">
              <TrendingUp className="w-4 h-4" />
            </span>
            <div>
              <h4 className="text-sm font-semibold text-slate-900">Monitor Progress</h4>
              <p className="mt-0.5 text-xs text-slate-500">Track real-time progress ratios across all activities.</p>
            </div>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
            <span className="p-2 rounded-lg bg-emerald-50 text-emerald-600 flex-shrink-0">
              <BarChart3 className="w-4 h-4" />
            </span>
            <div>
              <h4 className="text-sm font-semibold text-slate-900">Weekly Performance</h4>
              <p className="mt-0.5 text-xs text-slate-500">Review historical consistency and visual trend metrics.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
