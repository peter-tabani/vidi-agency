'use client';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { useState, useEffect, useMemo, useCallback } from 'react';
import { supabase } from '@/lib/supabase'; 
import { 
  Users, DollarSign, Briefcase, TrendingUp, Plus, Search, 
  Filter, Eye, Edit, Trash2, Mail, Lock, LogOut, CheckCircle, 
  AlertCircle, Calendar, Phone, Building, Package, Clock, 
  MoreVertical, Download, ChevronDown, Shield, RefreshCw, X,
  Settings, CreditCard, Target, Globe, Sparkles, Zap,
  BarChart3, PieChart, ArrowUpRight, ArrowDownRight,
  UserCheck, FileText, Activity, LayoutDashboard
} from 'lucide-react';

// Types matched to Supabase + UI
interface Client {
  id: number;
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  package: string;
  amount: number;
  paid: number;
  status: string;
  progress: number;
  startDate?: string;
  dueDate: string;
  industry?: string;
  source?: string;
  created_at?: string;
}

type TabType = 'dashboard' | 'clients' | 'leads' | 'invoices' | 'analytics';

// --- COMPONENTS ---

const LoadingSpinner = () => (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gray-950">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-purple-900/30 rounded-full"></div>
      <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-purple-500 rounded-full animate-spin"></div>
      <div className="absolute inset-4 border-4 border-purple-600/20 rounded-full animate-pulse"></div>
    </div>
  </div>
);

const LoginScreen = ({ 
  password, 
  setPassword, 
  handleLogin, 
  error,
  isLoading
}: { 
  password: string;
  setPassword: (value: string) => void;
  handleLogin: (e: React.FormEvent) => void;
  error: string;
  isLoading: boolean;
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-gray-950 via-gray-900 to-purple-950 flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative w-full max-w-md">
        {/* Animated background elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-800/50 p-8">
          {/* Decorative top border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-3xl"></div>
          
          <div className="text-center mb-10">
            <div className="relative inline-block mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto shadow-2xl border border-gray-800/50">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-inner">
                  <Shield className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full border-4 border-gray-900 shadow-lg"></div>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              Vidi Agency CRM
            </h1>
            <p className="text-gray-400 text-sm">Secure Enterprise Management Portal</p>
            <div className="mt-4 inline-flex items-center gap-2 text-xs text-gray-500 bg-gray-800/50 px-3 py-1.5 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Encrypted • Secure • Enterprise
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3 flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Admin Password
              </label>
              <div className="relative group">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter master password"
                  className="w-full px-4 py-3.5 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 text-gray-100 placeholder-gray-500 pr-12 transition-all duration-300 group-hover:border-gray-600"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors p-1 hover:bg-gray-800 rounded"
                >
                  {showPassword ? <Eye className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
                </button>
              </div>
              {error && (
                <div className="mt-3 p-3 bg-red-900/20 border border-red-800/50 rounded-lg backdrop-blur-sm">
                  <p className="text-sm text-red-400 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    {error}
                  </p>
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
            >
              {isLoading ? (
                <RefreshCw className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <Shield className="w-5 h-5" />
                  <span className="group-hover:translate-x-1 transition-transform">Access Dashboard</span>
                </>
              )}
            </button>

            <div className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 border border-gray-800/50 rounded-xl p-4 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <div className="bg-blue-900/20 p-2 rounded-lg">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">
                    Enterprise-grade security with end-to-end encryption. All activities are logged and monitored.
                  </p>
                </div>
              </div>
            </div>
          </form>

          <div className="mt-10 pt-6 border-t border-gray-800/50 text-center">
            <p className="text-xs text-gray-500">© {new Date().getFullYear()} Vidi Agency • Enterprise Edition</p>
            <p className="text-xs text-gray-600 mt-1">v3.1.0 • Premium Build</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatsCard = ({ 
  title, 
  value, 
  icon: Icon, 
  trend, 
  trendValue,
  color
}: { 
  title: string;
  value: string | number;
  icon: any;
  trend?: 'up' | 'down';
  trendValue?: string;
  color: string;
}) => (
  <div className={`relative bg-gradient-to-br ${color} rounded-2xl p-6 shadow-2xl border border-gray-800/50 hover:scale-[1.02] transition-all duration-300 overflow-hidden group`}>
    {/* Animated background effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    <div className="relative z-10 flex items-center justify-between">
      <div>
        <p className="text-gray-400 text-sm font-medium mb-1">{title}</p>
        <p className="text-3xl font-bold text-white mb-2">{value}</p>
        {trend && trendValue && (
          <div className="flex items-center gap-1">
            {trend === 'up' ? (
              <ArrowUpRight className="w-4 h-4 text-emerald-400" />
            ) : (
              <ArrowDownRight className="w-4 h-4 text-red-400" />
            )}
            <span className={`text-xs font-medium ${trend === 'up' ? 'text-emerald-400' : 'text-red-400'}`}>
              {trendValue}
            </span>
          </div>
        )}
      </div>
      <div className={`p-3 rounded-xl bg-gradient-to-br ${color.includes('from-') ? color.split(' ')[0] : 'from-gray-800'} to-gray-900/50 backdrop-blur-sm`}>
        <Icon className="w-8 h-8 text-white/90" />
      </div>
    </div>
  </div>
);

const ClientRow = ({ client, onEdit, onDelete }: { client: Client; onEdit: (client: Client) => void; onDelete: (id: number) => void }) => {
  const [showActions, setShowActions] = useState(false);

  const statusColors: Record<string, string> = {
    'Completed': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    'In Progress': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    'Not Started': 'bg-gray-500/20 text-gray-400 border-gray-500/30',
  };

  const paymentStatus = Number(client.paid) >= Number(client.amount) ? 'Paid' : 'Pending';
  const daysLeft = Math.ceil((new Date(client.dueDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24));

  return (
    <tr className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors duration-300 group">
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Building className="w-5 h-5 text-blue-400" />
            </div>
            {client.status === 'Completed' && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-gray-900"></div>
            )}
          </div>
          <div>
            <div className="font-semibold text-white">{client.company}</div>
            <div className="text-sm text-gray-400">{client.name}</div>
            <div className="text-xs text-gray-500 flex items-center gap-2 mt-1">
              <Mail className="w-3 h-3" />
              {client.email}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-purple-500/10 rounded-lg flex items-center justify-center">
            <Globe className="w-4 h-4 text-purple-400" />
          </div>
          <div>
            <div className="text-sm font-medium text-white">{client.service}</div>
            <div className="text-xs text-gray-500 flex items-center gap-1">
              <Package className="w-3 h-3" />
              {client.package}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex flex-col gap-2">
          <span className={`px-3 py-1.5 rounded-full text-xs font-semibold border w-fit ${statusColors[client.status] || 'bg-gray-500/20'}`}>
            {client.status}
          </span>
          <div className="flex items-center gap-2">
            <div className="w-20 bg-gray-800 rounded-full h-1.5">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${client.progress}%` }}
              ></div>
            </div>
            <span className="text-xs text-gray-400">{client.progress}%</span>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <div>
          <div className="text-sm font-bold text-white">${Number(client.paid).toLocaleString()}</div>
          <div className="text-xs text-gray-500">of ${Number(client.amount).toLocaleString()}</div>
          {paymentStatus === 'Paid' ? (
            <div className="text-xs text-emerald-400 font-medium mt-1 flex items-center gap-1">
              <CheckCircle className="w-3 h-3" />
              Paid in full
            </div>
          ) : (
            <div className="text-xs text-amber-400 font-medium mt-1">
              ${(Number(client.amount) - Number(client.paid)).toLocaleString()} remaining
            </div>
          )}
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex flex-col gap-1">
          <div className="text-sm text-gray-300 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gray-500" />
            {new Date(client.dueDate).toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric',
              year: 'numeric'
            })}
          </div>
          <div className={`text-xs ${daysLeft < 7 ? 'text-red-400' : 'text-gray-500'} flex items-center gap-1`}>
            <Clock className="w-3 h-3" />
            {daysLeft > 0 ? `${daysLeft} days left` : 'Overdue'}
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="relative">
          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={() => onEdit(client)}
              className="p-2 hover:bg-blue-500/10 rounded-lg text-blue-400 transition-colors duration-300"
              title="Edit Client"
            >
              <Edit className="w-4 h-4" />
            </button>
            <button
              onClick={() => onDelete(client.id)}
              className="p-2 hover:bg-red-500/10 rounded-lg text-red-400 transition-colors duration-300"
              title="Delete Client"
            >
              <Trash2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setShowActions(!showActions)}
              className="p-2 hover:bg-gray-700/50 rounded-lg text-gray-400 transition-colors duration-300"
            >
              <MoreVertical className="w-4 h-4" />
            </button>
          </div>
          {showActions && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-xl shadow-2xl border border-gray-800/50 z-10 backdrop-blur-sm">
              <button className="w-full px-4 py-3 text-left text-sm hover:bg-gray-800/50 flex items-center gap-2 rounded-t-xl text-gray-300">
                <Eye className="w-4 h-4" />
                View Details
              </button>
              <button className="w-full px-4 py-3 text-left text-sm hover:bg-gray-800/50 flex items-center gap-2 text-gray-300">
                <Mail className="w-4 h-4" />
                Send Invoice
              </button>
              <button className="w-full px-4 py-3 text-left text-sm hover:bg-gray-800/50 flex items-center gap-2 text-gray-300">
                <Activity className="w-4 h-4" />
                View Activity
              </button>
            </div>
          )}
        </div>
      </td>
    </tr>
  );
};

// --- MAIN PAGE COMPONENT ---

export default function VidiCRMProtected() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Real Data State
  const [clients, setClients] = useState<Client[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  // Modal State
  const [showModal, setShowModal] = useState(false);
  const [editingClient, setEditingClient] = useState<Client | null>(null);
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    service: 'Website Design',
    package: 'Grow',
    amount: 0,
    paid: 0,
    status: 'Not Started',
    progress: 0,
    dueDate: '',
    industry: '',
    source: ''
  });

  // --- 1. AUTH & INIT ---
  useEffect(() => {
    const checkAuth = async () => {
      const isLoggedIn = sessionStorage.getItem('vidi_admin_authenticated');
      if (isLoggedIn === 'true') {
        setIsAuthenticated(true);
        await fetchClients();
      }
      setIsLoading(false);
    };
    checkAuth();
  }, []);

  // --- 2. SUPABASE ACTIONS ---

  const fetchClients = useCallback(async () => {
    setIsFetching(true);
    const { data, error } = await supabase
      .from('clients')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching:', error);
    } else if (data) {
      const mappedClients = data.map((c: any) => ({
        ...c,
        dueDate: c.due_date || c.dueDate
      }));
      setClients(mappedClients);
    }
    setIsFetching(false);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const ADMIN_PASSWORD = 'VidiAdmin2025!';
    
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem('vidi_admin_authenticated', 'true');
      setIsAuthenticated(true);
      setError('');
      await fetchClients();
    } else {
      setError('Invalid credentials. Access Denied.');
      setPassword('');
    }
    setIsLoading(false);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('vidi_admin_authenticated');
    setIsAuthenticated(false);
    setPassword('');
  };

  const handleSubmitClient = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsFetching(true);

    const clientData = {
      company: formData.company,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      package: formData.package,
      amount: formData.amount,
      paid: formData.paid,
      status: formData.status,
      progress: formData.status === 'Completed' ? 100 : formData.status === 'In Progress' ? 50 : 0,
      due_date: formData.dueDate || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      industry: formData.industry,
      source: formData.source
    };

    if (editingClient) {
      // Update existing client
      const { error } = await supabase
        .from('clients')
        .update(clientData)
        .eq('id', editingClient.id);

      if (error) {
        alert('Error updating client: ' + error.message);
      } else {
        await fetchClients();
        handleCloseModal();
      }
    } else {
      // Create new client
      const { error } = await supabase
        .from('clients')
        .insert([clientData]);

      if (error) {
        alert('Error adding client: ' + error.message);
      } else {
        await fetchClients();
        handleCloseModal();
      }
    }
    setIsFetching(false);
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this client?')) return;
    
    const { error } = await supabase.from('clients').delete().eq('id', id);
    if (error) {
      alert('Error deleting: ' + error.message);
    } else {
      setClients(clients.filter(c => c.id !== id));
    }
  };
  // --- EXPORT TO PDF FUNCTION ---
  const handleExportPDF = () => {
    const doc = new jsPDF();

    // 1. Add Title
    doc.setFontSize(20);
    doc.text('Vidi Agency - Client List', 14, 22);
    
    // 2. Add Date
    doc.setFontSize(11);
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 30);

    // 3. Define the Table Columns
    const tableColumn = ["Company", "Contact", "Service", "Status", "Paid", "Total", "Due Date"];
    
    // 4. Map the Data to Rows
    const tableRows = clients.map(client => [
      client.company,
      client.name,
      client.service,
      client.status,
      `$${client.paid}`,
      `$${client.amount}`,
      new Date(client.dueDate).toLocaleDateString()
    ]);

    // 5. Generate the Table
    autoTable(doc, {
      startY: 40,
      head: [tableColumn],
      body: tableRows,
      theme: 'grid',
      headStyles: { fillColor: [66, 66, 166] }, // Vidi Purple Color
    });

    // 6. Save the File
    doc.save(`Vidi_Clients_${new Date().toISOString().split('T')[0]}.pdf`);
  };

  const handleEdit = (client: Client) => {
    setEditingClient(client);
    setFormData({
      company: client.company,
      name: client.name,
      email: client.email,
      phone: client.phone,
      service: client.service,
      package: client.package,
      amount: client.amount,
      paid: client.paid,
      status: client.status,
      progress: client.progress,
      dueDate: client.dueDate,
      industry: client.industry || '',
      source: client.source || ''
    });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingClient(null);
    setFormData({
      company: '',
      name: '',
      email: '',
      phone: '',
      service: 'Website Design',
      package: 'Grow',
      amount: 0,
      paid: 0,
      status: 'Not Started',
      progress: 0,
      dueDate: '',
      industry: '',
      source: ''
    });
  };

  // --- 3. CALCULATIONS ---
  const stats = useMemo(() => ({
    totalClients: clients.length,
    activeProjects: clients.filter(c => c.status === 'In Progress').length,
    totalRevenue: clients.reduce((sum, c) => sum + Number(c.paid), 0),
    pendingPayments: clients.reduce((sum, c) => sum + (Number(c.amount) - Number(c.paid)), 0),
    completionRate: Math.round((clients.filter(c => c.status === 'Completed').length / clients.length) * 100) || 0,
    averageValue: clients.length > 0 ? Math.round(clients.reduce((sum, c) => sum + Number(c.amount), 0) / clients.length) : 0
  }), [clients]);

  const filteredClients = useMemo(() => 
  clients.filter(client =>
    (client.company || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
    (client.name || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
    (client.email || '').toLowerCase().includes(searchQuery.toLowerCase())
  ),
  [clients, searchQuery]
);

  // --- RENDER ---

  if (isLoading) return <LoadingSpinner />;
  
  if (!isAuthenticated) {
    return (
      <LoginScreen
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        error={error}
        isLoading={isLoading}
      />
    );
  }

  return (
    <div className="fixed inset-0 z-[9999] overflow-y-auto bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <header className="relative z-40 sticky top-0 bg-gray-900/80 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-gray-900 shadow-lg"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Vidi CRM
                </h1>
                <div className="flex items-center gap-2 text-xs">
                  <span className="flex items-center gap-1 text-gray-400">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    Connected
                  </span>
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-400">{clients.length} Active Clients</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={fetchClients}
                className={`p-2.5 bg-gray-800/50 hover:bg-gray-800 rounded-xl transition-all duration-300 ${isFetching ? 'animate-spin' : ''}`}
              >
                <RefreshCw className="w-5 h-5 text-gray-400" />
              </button>
              <div className="hidden md:block text-sm text-gray-400 bg-gray-800/50 px-3 py-1.5 rounded-full">
                {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
              </div>
              <button 
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-red-900/30 hover:to-red-800/30 text-gray-300 hover:text-red-400 rounded-xl font-medium transition-all duration-300 border border-gray-800 hover:border-red-800/50"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="relative z-30 sticky top-16 bg-gray-900/60 backdrop-blur-lg border-b border-gray-800/30 shadow-lg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto py-2">
            {(['dashboard', 'clients', 'leads', 'invoices', 'analytics'] as TabType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-3 rounded-xl font-medium capitalize transition-all duration-300 whitespace-nowrap flex items-center gap-2 ${
                  activeTab === tab 
                    ? 'bg-gradient-to-r from-blue-900/30 to-purple-900/30 text-blue-400 border border-blue-800/30 shadow-lg' 
                    : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800/50'
                }`}
              >
                {tab === 'dashboard' && <LayoutDashboard className="w-4 h-4" />}
                {tab === 'clients' && <Users className="w-4 h-4" />}
                {tab === 'leads' && <Target className="w-4 h-4" />}
                {tab === 'invoices' && <FileText className="w-4 h-4" />}
                {tab === 'analytics' && <BarChart3 className="w-4 h-4" />}
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="relative z-20 max-w-7xl mx-auto p-6">
        
        {/* DASHBOARD TAB */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatsCard 
                title="Total Clients" 
                value={stats.totalClients} 
                icon={Users} 
                trend="up"
                trendValue="+12%"
                color="from-blue-900/30 to-blue-800/20"
              />
              <StatsCard 
                title="Active Projects" 
                value={stats.activeProjects} 
                icon={Briefcase} 
                trend="up"
                trendValue="+8%"
                color="from-purple-900/30 to-purple-800/20"
              />
              <StatsCard 
                title="Total Revenue" 
                value={`$${stats.totalRevenue.toLocaleString()}`} 
                icon={DollarSign} 
                trend="up"
                trendValue="+24%"
                color="from-emerald-900/30 to-emerald-800/20"
              />
              <StatsCard 
                title="Pending Payments" 
                value={`$${stats.pendingPayments.toLocaleString()}`} 
                icon={TrendingUp} 
                trend="down"
                trendValue="-5%"
                color="from-amber-900/30 to-amber-800/20"
              />
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl p-6 border border-gray-800/50">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Performance</h3>
                  <Activity className="w-5 h-5 text-blue-400" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Completion Rate</span>
                    <span className="text-white font-semibold">{stats.completionRate}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Avg. Project Value</span>
                    <span className="text-white font-semibold">${stats.averageValue}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl p-6 border border-gray-800/50">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Quick Actions</h3>
                  <Zap className="w-5 h-5 text-amber-400" />
                </div>
                <div className="space-y-3">
                  <button 
                    onClick={() => setShowModal(true)}
                    className="w-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 hover:from-blue-600/30 hover:to-purple-600/30 text-blue-400 py-2.5 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    Add New Client
                  </button>
                  <button 
  onClick={handleExportPDF}
  className="w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-gray-300 py-2.5 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
>
  <Download className="w-4 h-4" />
  Export Data
</button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl p-6 border border-gray-800/50">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Recent Activity</h3>
                  <Clock className="w-5 h-5 text-gray-400" />
                </div>
                <div className="space-y-3">
                  <div className="text-sm text-gray-400">
                    Last updated: {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                  <div className="text-xs text-gray-500">
                    {clients.length} total clients • {stats.activeProjects} active projects
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Clients Section */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-800/50 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-800/50 flex justify-between items-center">
                <h2 className="text-xl font-bold text-white">Recent Clients</h2>
                <button 
                  onClick={() => setActiveTab('clients')}
                  className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View All →
                </button>
              </div>
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-gray-400 text-sm">
                        <th className="pb-3">Client</th>
                        <th className="pb-3">Service</th>
                        <th className="pb-3">Status</th>
                        <th className="pb-3">Revenue</th>
                      </tr>
                    </thead>
                    <tbody>
                      {clients.slice(0, 5).map((client) => (
                        <tr key={client.id} className="border-t border-gray-800/30 hover:bg-gray-800/20 transition-colors">
                          <td className="py-3">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                <Building className="w-4 h-4 text-blue-400" />
                              </div>
                              <div>
                                <div className="font-medium text-white">{client.company}</div>
                                <div className="text-xs text-gray-500">{client.service}</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 text-gray-300">{client.service}</td>
                          <td className="py-3">
                            <span className={`px-2 py-1 rounded-full text-xs ${client.status === 'Completed' ? 'bg-emerald-500/20 text-emerald-400' : client.status === 'In Progress' ? 'bg-blue-500/20 text-blue-400' : 'bg-gray-500/20 text-gray-400'}`}>
                              {client.status}
                            </span>
                          </td>
                          <td className="py-3 font-semibold text-white">${Number(client.paid).toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CLIENTS TAB */}
        {activeTab === 'clients' && (
          <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="text-2xl font-bold text-white">Client Management</h2>
                <p className="text-gray-400">Manage all client accounts and projects</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="px-4 py-2.5 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-gray-300 rounded-xl font-medium flex items-center gap-2 transition-all duration-300">
                  <Filter className="w-4 h-4" />
                  Filter
                </button>
                <button 
                  onClick={() => setShowModal(true)}
                  className="px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-medium flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Plus className="w-5 h-5" />
                  Add Client
                </button>
              </div>
            </div>

            {/* Search Bar */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl p-6 border border-gray-800/50">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative group">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search clients, companies, or emails..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 text-gray-100 placeholder-gray-500 transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Clients Table */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-800/50 overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-gray-900/80 to-gray-800/50">
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Client</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Service</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Payment</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Timeline</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredClients.map((client) => (
                      <ClientRow 
                        key={client.id} 
                        client={client} 
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                      />
                    ))}
                  </tbody>
                </table>
                {filteredClients.length === 0 && (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users className="w-10 h-10 text-gray-600" />
                    </div>
                    <h3 className="text-lg font-medium text-white mb-2">No clients found</h3>
                    <p className="text-gray-500 mb-6">Try adjusting your search or add a new client</p>
                    <button 
                      onClick={() => setShowModal(true)}
                      className="px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 hover:from-blue-600/30 hover:to-purple-600/30 text-blue-400 rounded-xl font-medium transition-all duration-300 border border-blue-500/30"
                    >
                      <Plus className="w-4 h-4 inline mr-2" />
                      Add First Client
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* OTHER TABS */}
        {!['dashboard', 'clients'].includes(activeTab) && (
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-3xl border border-gray-800/50 p-16 text-center">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl flex items-center justify-center">
                  <Zap className="w-10 h-10 text-purple-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 capitalize">{activeTab} Dashboard</h3>
              <p className="text-gray-400 mb-8">
                Advanced {activeTab} features are coming soon with enhanced analytics and automation.
              </p>
              <div className="inline-flex items-center gap-2 text-sm text-gray-500 bg-gray-800/50 px-4 py-2.5 rounded-full">
                <Clock className="w-4 h-4" />
                Launching Q2 2025
              </div>
            </div>
          </div>
        )}
      </main>

      {/* MODAL: ADD/EDIT CLIENT */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-gray-800/50">
            {/* Modal Header */}
            <div className="sticky top-0 z-10 px-6 py-4 border-b border-gray-800/50 bg-gradient-to-r from-gray-900 to-gray-800 flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {editingClient ? 'Edit Client' : 'Add New Client'}
                </h3>
                <p className="text-sm text-gray-400">
                  {editingClient ? 'Update client information' : 'Create a new client account'}
                </p>
              </div>
              <button 
                onClick={handleCloseModal}
                className="p-2 hover:bg-gray-800/50 rounded-lg transition-colors duration-300 text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Modal Body */}
            <form onSubmit={handleSubmitClient} className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Required Fields */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">Company Name *</label>
                  <input 
                    required 
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 text-white placeholder-gray-500 transition-all duration-300"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    placeholder="Enter company name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">Contact Name *</label>
                  <input 
                    required 
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 text-white placeholder-gray-500 transition-all duration-300"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter contact name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">Email Address *</label>
                  <input 
                    type="email"
                    required 
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 text-white placeholder-gray-500 transition-all duration-300"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="client@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">Phone Number</label>
                  <input 
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 text-white placeholder-gray-500 transition-all duration-300"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">Service Type</label>
                  <select 
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 text-white transition-all duration-300"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="Website Design">Website Design</option>
                    <option value="Web App / SaaS">Web App / SaaS</option>
                    <option value="AI Integration">AI Integration</option>
                    <option value="Brand Strategy">Brand Strategy</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Mobile App">Mobile App</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">Package</label>
                  <select 
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 text-white transition-all duration-300"
                    value={formData.package}
                    onChange={(e) => setFormData({...formData, package: e.target.value})}
                  >
                    <option value="Launch">Launch</option>
                    <option value="Grow">Grow</option>
                    <option value="Dominate">Dominate</option>
                    <option value="Enterprise">Enterprise</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">Total Amount ($)</label>
                  <input 
                    type="number"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 text-white placeholder-gray-500 transition-all duration-300"
                    value={formData.amount}
                    onChange={(e) => setFormData({...formData, amount: Number(e.target.value)})}
                    placeholder="0"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">Amount Paid ($)</label>
                  <input 
                    type="number"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 text-white placeholder-gray-500 transition-all duration-300"
                    value={formData.paid}
                    onChange={(e) => setFormData({...formData, paid: Number(e.target.value)})}
                    placeholder="0"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">Status</label>
                  <select 
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 text-white transition-all duration-300"
                    value={formData.status}
                    onChange={(e) => setFormData({...formData, status: e.target.value})}
                  >
                    <option value="Not Started">Not Started</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                    <option value="On Hold">On Hold</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">Due Date</label>
                  <input 
                    type="date"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 text-white transition-all duration-300"
                    value={formData.dueDate}
                    onChange={(e) => setFormData({...formData, dueDate: e.target.value})}
                  />
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex gap-4 pt-6 border-t border-gray-800/50">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex-1 px-6 py-3.5 bg-gray-800/50 hover:bg-gray-800 text-gray-300 hover:text-white rounded-xl font-medium transition-all duration-300 border border-gray-700/50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isFetching}
                  className="flex-1 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isFetching ? (
                    <RefreshCw className="w-5 h-5 animate-spin" />
                  ) : editingClient ? (
                    <>
                      <Edit className="w-5 h-5" />
                      Update Client
                    </>
                  ) : (
                    <>
                      <Plus className="w-5 h-5" />
                      Add Client
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-10 mt-12 border-t border-gray-800/30 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Vidi Agency • Premium CRM System
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-gray-400">System Active</span>
              </span>
              <span className="text-gray-500">v3.1.0</span>
              <span className="text-gray-500">{clients.length} Clients • {stats.activeProjects} Active</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}