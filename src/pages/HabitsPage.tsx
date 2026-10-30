import { Flame, Plus } from 'lucide-react';

export function HabitsPage() {
  return (
    <div className="space-y-6">
      {/* Header with Title and Add Button */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <Flame className="w-6 h-6 text-amber-500" />
            Habit Tracker
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Build repeatable routines and maintain your daily streaks.
          </p>
        </div>
        <div>
          <button
            type="button"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-indigo-600 text-white font-medium text-sm hover:bg-indigo-700 transition shadow-xs cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            Add Habit
          </button>
        </div>
      </div>

      {/* Placeholder content card */}
      <div className="p-8 text-center bg-white rounded-xl border border-dashed border-slate-300">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-50 text-amber-500 mb-3">
          <Flame className="w-6 h-6" />
        </div>
        <h3 className="text-base font-semibold text-slate-900">Habit Tracker is ready to build</h3>
        <p className="mt-1 text-sm text-slate-500 max-w-sm mx-auto">
          In the upcoming step, we will add habit cards with daily check-off circles, frequency selectors, and streak counters.
        </p>
      </div>
    </div>
  );
}
