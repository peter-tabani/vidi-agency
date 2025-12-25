'use client';
import { useState, useEffect } from 'react';
// FIX: Import your specific instance from your lib folder
import { supabase } from '@/lib/supabase'; 
import { 
  Lock, ArrowRight, Wallet, CheckCircle, 
  Clock, AlertCircle, RefreshCw, LogOut 
} from 'lucide-react';

// --- TYPES ---
interface Task {
  id: string;
  title: string;
  description: string;
  amount: number;
  status: 'Pending' | 'Completed' | 'Paid';
  due_date: string;
}

interface Employee {
  id: string;
  name: string;
  role: string;
  earnings: number;
}

export default function TeamPortal() {
  // REMOVED: const supabase = createClient(); <- You don't need this anymore
  
  // State
  const [accessCode, setAccessCode] = useState('');
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // 1. CHECK SESSION (Persist Login)
  useEffect(() => {
    const savedCode = sessionStorage.getItem('vidi_team_code');
    if (savedCode) {
      handleLogin(savedCode);
    }
  }, []);

  // 2. LOGIN LOGIC
  const handleLogin = async (codeInput: string = accessCode) => {
    setLoading(true);
    setError('');

    // Find employee by Access Code
    const { data, error } = await supabase
      .from('employees')
      .select('*')
      .eq('access_code', codeInput)
      .single();

    if (error || !data) {
      setError('Invalid Access Code');
      setLoading(false);
      return;
    }

    // Success: Save user and fetch their tasks
    setEmployee(data);
    sessionStorage.setItem('vidi_team_code', codeInput);
    fetchEmployeeTasks(data.id);
    setLoading(false);
  };

  // 3. FETCH TASKS
  const fetchEmployeeTasks = async (employeeId: string) => {
    const { data } = await supabase
      .from('tasks')
      .select('*')
      .eq('assigned_to', employeeId)
      .order('created_at', { ascending: false });

    if (data) setTasks(data as Task[]);
  };

  // 4. MARK TASK COMPLETE
  const handleCompleteTask = async (taskId: string) => {
    if (!confirm('Are you sure you finished this task?')) return;

    // Update in Supabase
    const { error } = await supabase
      .from('tasks')
      .update({ status: 'Completed' })
      .eq('id', taskId);

    if (!error && employee) {
      // Refresh list
      fetchEmployeeTasks(employee.id);
    }
  };

  // 5. LOGOUT
  const handleLogout = () => {
    sessionStorage.removeItem('vidi_team_code');
    setEmployee(null);
    setAccessCode('');
  };

  // --- VIEW: LOGIN SCREEN ---
  if (!employee) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-blue-500">
              <Lock className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold text-white">Vidi Team Portal</h1>
            <p className="text-gray-400 text-sm mt-2">Enter your unique access code to view tasks.</p>
          </div>

          <div className="space-y-4">
            <input
              type="password"
              placeholder="Access Code (e.g. code123)"
              value={accessCode}
              onChange={(e) => setAccessCode(e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:border-blue-500 outline-none text-center tracking-widest text-lg"
            />
            
            {error && (
              <div className="p-3 bg-red-900/20 border border-red-900/50 rounded-lg flex items-center gap-2 text-red-400 text-sm">
                <AlertCircle className="w-4 h-4" /> {error}
              </div>
            )}

            <button
              onClick={() => handleLogin()}
              disabled={loading}
              className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2"
            >
              {loading ? <RefreshCw className="w-5 h-5 animate-spin" /> : <>Login <ArrowRight className="w-5 h-5" /></>}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- VIEW: DASHBOARD ---
  // Calculate potential earnings from pending tasks vs completed
  const pendingPay = tasks.filter(t => t.status === 'Pending').reduce((sum, t) => sum + t.amount, 0);
  const completedPay = tasks.filter(t => t.status === 'Completed').reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="flex justify-between items-center bg-gray-900/50 p-4 rounded-2xl border border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center font-bold text-white">
              {employee.name.charAt(0)}
            </div>
            <div>
              <h2 className="font-bold text-white">{employee.name}</h2>
              <p className="text-xs text-gray-400 uppercase">{employee.role}</p>
            </div>
          </div>
          <button onClick={handleLogout} className="p-2 hover:bg-gray-800 rounded-lg text-gray-400 hover:text-red-400 transition-colors">
            <LogOut className="w-5 h-5" />
          </button>
        </header>

        {/* Stats / Wallet */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-gray-800">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400"><CheckCircle className="w-5 h-5" /></div>
              <span className="text-gray-400 text-sm">Completed Earnings</span>
            </div>
            <div className="text-3xl font-bold text-white">${completedPay}</div>
            <p className="text-xs text-gray-500 mt-1">Ready for payout</p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-gray-800">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400"><Clock className="w-5 h-5" /></div>
              <span className="text-gray-400 text-sm">Pending Tasks</span>
            </div>
            <div className="text-3xl font-bold text-white">${pendingPay}</div>
            <p className="text-xs text-gray-500 mt-1">{tasks.filter(t => t.status === 'Pending').length} tasks remaining</p>
          </div>
        </div>

        {/* Task List */}
        <div>
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Wallet className="w-5 h-5 text-gray-400" /> Your Assignments
          </h3>
          
          <div className="space-y-4">
            {tasks.map((task) => (
              <div key={task.id} className="bg-gray-900 border border-gray-800 rounded-xl p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-gray-700 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h4 className="font-bold text-lg text-white">{task.title}</h4>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      task.status === 'Completed' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'
                    }`}>
                      {task.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">{task.description}</p>
                  <div className="text-xs text-gray-500 flex items-center gap-2">
                    <Clock className="w-3 h-3" /> Due: {new Date(task.due_date).toLocaleDateString()}
                  </div>
                </div>

                <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                  <span className="font-bold text-xl text-green-400">${task.amount}</span>
                  
                  {task.status === 'Pending' && (
                    <button 
                      onClick={() => handleCompleteTask(task.id)}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors flex items-center gap-2"
                    >
                      <CheckCircle className="w-4 h-4" /> Done
                    </button>
                  )}
                  {task.status === 'Completed' && (
                    <button disabled className="px-4 py-2 bg-gray-800 text-gray-500 text-sm font-medium rounded-lg cursor-not-allowed">
                      In Review
                    </button>
                  )}
                </div>
              </div>
            ))}

            {tasks.length === 0 && (
              <div className="text-center py-12 bg-gray-900/50 rounded-2xl border border-dashed border-gray-800">
                <p className="text-gray-500">No tasks assigned to you yet.</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}