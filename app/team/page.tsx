'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { 
  Lock, ArrowRight, DollarSign, CheckCircle2, Clock, 
  Megaphone, TrendingUp, Globe, Smartphone, Layout, LogOut,
  AlertCircle, ChevronRight
} from 'lucide-react';

// --- TYPES ---
interface Task {
  id: string;
  title: string;
  description: string;
  amount: number;
  status: string;
  due_date: string;
}

interface Employee {
  name: string;
  role: 'marketing' | 'builder';
}

export default function TeamPortal() {
  const [accessCode, setAccessCode] = useState('');
  const [currentUser, setCurrentUser] = useState<Employee | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // --- LOGIN LOGIC ---
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // 1. Check Code against Database
    const { data, error } = await supabase
      .from('employees')
      .select('*')
      .eq('access_code', accessCode)
      .single();

    if (error || !data) {
      setError('Invalid Access Code');
      setLoading(false);
      return;
    }

    // 2. Set User
    const employee = { name: data.name, role: data.role as 'marketing' | 'builder' };
    setCurrentUser(employee);
    
    // 3. Fetch Their Tasks
    fetchTasks(data.name);
    setLoading(false);
  };

  const fetchTasks = async (employeeName: string) => {
    const { data } = await supabase
      .from('tasks')
      .select('*')
      .eq('assigned_to', employeeName)
      .order('due_date', { ascending: true });
    
    if (data) setTasks(data);
  };

  const markComplete = async (taskId: string) => {
    // Optimistic Update
    setTasks(tasks.map(t => t.id === taskId ? { ...t, status: 'Completed' } : t));
    
    // DB Update
    await supabase.from('tasks').update({ status: 'Completed' }).eq('id', taskId);
  };

  // --- LOGOUT ---
  const handleLogout = () => {
    setCurrentUser(null);
    setAccessCode('');
    setTasks([]);
  };

  // --- RENDER: LOGIN SCREEN ---
  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="bg-white max-w-md w-full rounded-2xl shadow-xl border border-gray-100 p-10">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-200">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Team Portal</h1>
            <p className="text-gray-500 text-sm mt-1">Enter your unique access code to view tasks.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input 
                type="password"
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-center text-lg tracking-widest"
                placeholder="• • • • • •"
              />
            </div>
            {error && <p className="text-red-500 text-sm text-center flex items-center justify-center gap-2"><AlertCircle size={14}/> {error}</p>}
            
            <button 
              disabled={loading}
              className="w-full bg-gray-900 text-white py-3 rounded-xl font-bold hover:bg-black transition-all flex items-center justify-center gap-2"
            >
              {loading ? 'Verifying...' : 'Access Dashboard'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // --- RENDER: DASHBOARD ---
  const totalEarnings = tasks
    .filter(t => t.status === 'Completed')
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const pendingTasks = tasks.filter(t => t.status !== 'Completed');

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${currentUser.role === 'marketing' ? 'bg-green-500' : 'bg-purple-500'}`}></div>
            <span className="font-bold text-gray-900">{currentUser.name}</span>
            <span className="text-xs text-gray-400 border border-gray-200 px-2 py-0.5 rounded-full uppercase">
              {currentUser.role === 'marketing' ? 'Growth Team' : 'Eng Team'}
            </span>
          </div>
          <button onClick={handleLogout} className="text-sm text-gray-500 hover:text-red-500 flex items-center gap-1">
            <LogOut size={14} /> Exit
          </button>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-10">
        
        {/* HERO STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Wallet Balance</p>
                <h2 className="text-3xl font-extrabold text-gray-900 mt-1">${totalEarnings.toLocaleString()}</h2>
              </div>
              <div className="bg-green-50 p-2 rounded-lg text-green-600">
                <DollarSign size={24} />
              </div>
            </div>
            <p className="text-xs text-green-600 font-medium mt-4 flex items-center gap-1">
              <CheckCircle2 size={12} /> Available for withdrawal
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Pending Tasks</p>
                <h2 className="text-3xl font-extrabold text-gray-900 mt-1">{pendingTasks.length}</h2>
              </div>
              <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
                <Clock size={24} />
              </div>
            </div>
            <p className="text-xs text-blue-600 font-medium mt-4">Next due: {pendingTasks[0]?.due_date || 'No deadlines'}</p>
          </div>

          {/* Role Specific Stat Card */}
          <div className={`p-6 rounded-2xl shadow-sm border flex flex-col justify-between text-white ${
            currentUser.role === 'marketing' 
              ? 'bg-gradient-to-br from-green-500 to-emerald-600 border-green-500' 
              : 'bg-gradient-to-br from-purple-500 to-indigo-600 border-purple-500'
          }`}>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs font-bold text-white/80 uppercase tracking-wide">
                  {currentUser.role === 'marketing' ? 'Ad Performance' : 'System Status'}
                </p>
                <h2 className="text-3xl font-extrabold mt-1">98.5%</h2>
              </div>
              <div className="bg-white/20 p-2 rounded-lg text-white">
                {currentUser.role === 'marketing' ? <TrendingUp size={24} /> : <Globe size={24} />}
              </div>
            </div>
            <p className="text-xs text-white/80 font-medium mt-4">
              {currentUser.role === 'marketing' ? 'ROI on recent campaigns' : 'Uptime on all servers'}
            </p>
          </div>
        </div>

        {/* TASK LIST */}
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          Your Assignments
          <span className="text-sm font-normal text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{tasks.length}</span>
        </h3>

        <div className="space-y-4">
          {tasks.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-gray-200">
              <p className="text-gray-400">No tasks assigned yet. Enjoy the break!</p>
            </div>
          ) : (
            tasks.map((task) => (
              <div key={task.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-6 group">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl flex-shrink-0 ${
                    task.status === 'Completed' ? 'bg-gray-100 text-gray-400' : 'bg-blue-50 text-blue-600'
                  }`}>
                    {currentUser.role === 'marketing' ? <Megaphone size={20} /> : <Layout size={20} />}
                  </div>
                  <div>
                    <h4 className={`font-bold text-lg ${task.status === 'Completed' ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
                      {task.title}
                    </h4>
                    <p className="text-gray-500 text-sm mt-1">{task.description}</p>
                    <div className="flex items-center gap-3 mt-3">
                      <span className={`text-xs px-2 py-1 rounded-md font-medium ${
                        task.status === 'Completed' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {task.status}
                      </span>
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Clock size={12} /> Due: {new Date(task.due_date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-6 border-t md:border-t-0 border-gray-100 pt-4 md:pt-0">
                  <div className="text-right">
                    <p className="text-xs text-gray-400 font-bold uppercase">Payout</p>
                    <p className="text-2xl font-extrabold text-gray-900">${task.amount}</p>
                  </div>
                  
                  {task.status !== 'Completed' && (
                    <button 
                      onClick={() => markComplete(task.id)}
                      className="bg-black text-white px-6 py-3 rounded-xl font-bold hover:bg-gray-800 transition-all flex items-center gap-2 group-hover:scale-105"
                    >
                      Complete <ChevronRight size={16} />
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

      </main>
    </div>
  );
}