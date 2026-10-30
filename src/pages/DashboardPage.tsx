import { LayoutDashboard, CheckCircle2, Flame, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome Hero Card */}
      <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-700 p-6 sm:p-8 text-white shadow-sm">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-xs mb-3">
            <LayoutDashboard className="w-3.5 h-3.5" /> Overview
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Welcome to your Daily Dashboard
          </h1>
          <p className="mt-2 text-indigo-100 text-sm sm:text-base leading-relaxed">
            Stay focused on today&apos;s priorities, maintain positive streaks, and track your progress over time.
          </p>
        </div>
      </div>

      {/* Quick Action & Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                <CheckCircle2 className="w-5 h-5" />
              </span>
              <span className="text-xs font-medium text-slate-500">Upcoming</span>
            </div>
            <h2 className="text-lg font-semibold text-slate-900">Task Management</h2>
            <p className="mt-1 text-sm text-slate-600">
              Create, organize, and check off your day-to-day to-do items with priority tags and due dates.
            </p>
          </div>
          <div className="mt-5">
            <Link
              to="/tasks"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
            >
              Go to Tasks <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="p-2 rounded-lg bg-amber-50 text-amber-600">
                <Flame className="w-5 h-5" />
              </span>
              <span className="text-xs font-medium text-slate-500">Consistency</span>
            </div>
            <h2 className="text-lg font-semibold text-slate-900">Habit Building</h2>
            <p className="mt-1 text-sm text-slate-600">
              Build lasting daily and weekly habits. Check them off daily to keep your streaks alive.
            </p>
          </div>
          <div className="mt-5">
            <Link
              to="/habits"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
            >
              Go to Habits <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
