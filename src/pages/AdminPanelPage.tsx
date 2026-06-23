import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  IconLogo, IconImage, IconStar, IconChart, IconInbox, IconLogout, IconEye,
  IconEdit, IconTrash, IconPlus, IconDashboard, IconClose, IconMenu,
  STORAGE_KEYS, loadData, saveData,
  Project, Testimonial, StatItem, ContactMessage, defaultGradients, defaultProjects, defaultTestimonials, defaultStats
} from '../components/Shared';

export default function AdminPanelPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'dashboard' | 'projects' | 'testimonials' | 'stats' | 'messages'>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [projects, setProjects] = useState<Project[]>(() => loadData(STORAGE_KEYS.projects, defaultProjects));
  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => loadData(STORAGE_KEYS.testimonials, defaultTestimonials));
  const [stats, setStats] = useState<StatItem[]>(() => loadData(STORAGE_KEYS.stats, defaultStats));
  const [messages, setMessages] = useState<ContactMessage[]>(() => loadData(STORAGE_KEYS.messages, []));

  const [showProjectForm, setShowProjectForm] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [pTitle, setPTitle] = useState('');
  const [pCategory, setPCategory] = useState('Residential');
  const [pDesc, setPDesc] = useState('');
  const [pImg, setPImg] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [showTestimonialForm, setShowTestimonialForm] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const [tName, setTName] = useState('');
  const [tLocation, setTLocation] = useState('');
  const [tText, setTText] = useState('');

  useEffect(() => { saveData(STORAGE_KEYS.projects, projects); }, [projects]);
  useEffect(() => { saveData(STORAGE_KEYS.testimonials, testimonials); }, [testimonials]);
  useEffect(() => { saveData(STORAGE_KEYS.stats, stats); }, [stats]);
  useEffect(() => { saveData(STORAGE_KEYS.messages, messages); }, [messages]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setPImg(reader.result as string);
    reader.readAsDataURL(file);
  };

  const resetProjectForm = () => { setPTitle(''); setPCategory('Residential'); setPDesc(''); setPImg(''); setEditingProject(null); setShowProjectForm(false); };
  const saveProject = () => {
    if (!pTitle.trim()) return alert('Please enter a project title');
    const img = pImg || defaultGradients[Math.floor(Math.random() * defaultGradients.length)];
    if (editingProject) { setProjects(prev => prev.map(p => p.id === editingProject.id ? { ...p, title: pTitle, category: pCategory, description: pDesc, img } : p)); }
    else { setProjects(prev => [...prev, { id: Date.now().toString(), title: pTitle, category: pCategory, description: pDesc, img }]); }
    resetProjectForm();
  };
  const editProject = (p: Project) => { setPTitle(p.title); setPCategory(p.category); setPDesc(p.description); setPImg(p.img); setEditingProject(p); setShowProjectForm(true); };
  const deleteProject = (id: string) => { if (confirm('Delete this project?')) setProjects(prev => prev.filter(p => p.id !== id)); };

  const resetTestimonialForm = () => { setTName(''); setTLocation(''); setTText(''); setEditingTestimonial(null); setShowTestimonialForm(false); };
  const saveTestimonial = () => {
    if (!tName.trim() || !tText.trim()) return alert('Please fill name and text');
    if (editingTestimonial) { setTestimonials(prev => prev.map(t => t.id === editingTestimonial.id ? { ...t, name: tName, location: tLocation, text: tText, initial: tName[0] } : t)); }
    else { setTestimonials(prev => [...prev, { id: Date.now().toString(), name: tName, location: tLocation, text: tText, initial: tName[0] }]); }
    resetTestimonialForm();
  };
  const editTestimonialItem = (t: Testimonial) => { setTName(t.name); setTLocation(t.location); setTText(t.text); setEditingTestimonial(t); setShowTestimonialForm(true); };
  const deleteTestimonial = (id: string) => { if (confirm('Delete this testimonial?')) setTestimonials(prev => prev.filter(t => t.id !== id)); };

  const updateStat = (index: number, field: 'num' | 'label', value: string) => { setStats(prev => prev.map((s, i) => i === index ? { ...s, [field]: value } : s)); };
  const deleteMessage = (id: string) => { if (confirm('Delete this message?')) setMessages(prev => prev.filter(m => m.id !== id)); };
  const markRead = (id: string) => { setMessages(prev => prev.map(m => m.id === id ? { ...m, read: true } : m)); };
  const unreadCount = messages.filter(m => !m.read).length;

  const tabs = [
    { key: 'dashboard' as const, label: 'Dashboard', icon: <IconDashboard /> },
    { key: 'projects' as const, label: 'Projects', icon: <IconImage /> },
    { key: 'testimonials' as const, label: 'Reviews', icon: <IconStar /> },
    { key: 'stats' as const, label: 'Stats', icon: <IconChart /> },
    { key: 'messages' as const, label: 'Messages', icon: <IconInbox />, badge: unreadCount },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <button onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden fixed top-4 left-4 z-50 w-10 h-10 bg-stone-900 text-white rounded-lg flex items-center justify-center">
        {sidebarOpen ? <IconClose className="w-5 h-5" /> : <IconMenu className="w-5 h-5" />}
      </button>

      <aside className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:static inset-y-0 left-0 z-40 w-64 bg-stone-900 text-white flex-shrink-0 flex flex-col min-h-screen transition-transform`}>
        <div className="p-6 border-b border-stone-700">
          <div className="flex items-center gap-3">
            <IconLogo className="w-12 h-12" />
            <div>
              <div className="font-serif-display text-lg font-bold text-[#3BB3C2]">PRATYAKSH</div>
              <div className="text-xs text-teal-400 tracking-widest">ADMIN PANEL</div>
            </div>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {tabs.map(tab => (
            <button key={tab.key} onClick={() => { setActiveTab(tab.key); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${activeTab === tab.key ? 'bg-teal-600 text-white' : 'text-stone-300 hover:bg-stone-800 hover:text-white'}`}>
              {tab.icon} {tab.label}
              {tab.badge ? <span className="ml-auto bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">{tab.badge}</span> : null}
            </button>
          ))}
        </nav>
        <div className="p-4 space-y-2 border-t border-stone-700">
          <button onClick={() => navigate('/')} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-stone-300 hover:bg-stone-800 hover:text-white transition-all"><IconEye /> View Website</button>
          <button onClick={() => navigate('/admin-login')} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-400 hover:bg-red-600/20 hover:text-red-300 transition-all"><IconLogout /> Logout</button>
        </div>
      </aside>

      <main className="flex-1 p-4 md:p-8 overflow-y-auto pt-16 md:pt-8">
        {activeTab === 'dashboard' && (
          <div>
            <h1 className="text-3xl font-bold text-stone-900 mb-2">Welcome, Jigar! 👋</h1>
            <p className="text-stone-500 mb-8">Here's an overview of your website.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                { icon: <IconImage />, label: 'Projects', count: projects.length, color: 'bg-teal-100 text-teal-700' },
                { icon: <IconStar />, label: 'Reviews', count: testimonials.length, color: 'bg-yellow-100 text-yellow-700' },
                { icon: <IconInbox />, label: 'Messages', count: messages.length, color: 'bg-blue-100 text-blue-700' },
                { icon: <IconStar />, label: 'Unread', count: unreadCount, color: 'bg-red-100 text-red-700' },
              ].map(c => (
                <div key={c.label} className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
                  <div className="flex items-center gap-3 mb-3"><div className={`w-10 h-10 rounded-lg flex items-center justify-center ${c.color}`}>{c.icon}</div><span className="text-sm text-stone-500">{c.label}</span></div>
                  <div className="text-3xl font-bold text-stone-900">{c.count}</div>
                </div>
              ))}
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-4">Recent Projects</h3>
                {projects.slice(-3).reverse().map(p => (
                  <div key={p.id} className="flex items-center gap-3 py-3 border-b border-stone-100 last:border-0">
                    <div className="w-10 h-10 rounded-lg flex-shrink-0" style={{ background: p.img.startsWith('data:') ? `url(${p.img}) center/cover` : p.img }} />
                    <div className="flex-1 min-w-0"><div className="font-medium text-stone-900 truncate">{p.title}</div><div className="text-xs text-stone-500">{p.category}</div></div>
                  </div>
                ))}
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-4">Recent Messages</h3>
                {messages.length === 0 ? <p className="text-stone-400 text-sm py-4">No messages yet.</p> : messages.slice(-3).reverse().map(m => (
                  <div key={m.id} className="flex items-center gap-3 py-3 border-b border-stone-100 last:border-0">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${m.read ? 'bg-stone-400' : 'bg-teal-600'}`}>{m.firstName[0]}</div>
                    <div className="flex-1 min-w-0"><div className="font-medium text-stone-900 truncate">{m.firstName} {m.lastName}</div><div className="text-xs text-stone-500 truncate">{m.message}</div></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <div><h1 className="text-3xl font-bold text-stone-900">Projects</h1><p className="text-stone-500">Manage your portfolio</p></div>
              <button onClick={() => { resetProjectForm(); setShowProjectForm(true); }} className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-lg font-medium flex items-center gap-2 transition-colors"><IconPlus /> Add Project</button>
            </div>
            {showProjectForm && (
              <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 mb-8">
                <h3 className="text-lg font-bold text-stone-900 mb-4">{editingProject ? 'Edit Project' : 'Add New Project'}</h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div><label className="block text-sm font-medium text-stone-700 mb-1">Project Title *</label><input value={pTitle} onChange={e => setPTitle(e.target.value)} className="w-full px-4 py-2.5 border border-stone-300 rounded-lg focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none" placeholder="e.g. Shree Residency" /></div>
                  <div><label className="block text-sm font-medium text-stone-700 mb-1">Category</label>
                    <select value={pCategory} onChange={e => setPCategory(e.target.value)} className="w-full px-4 py-2.5 border border-stone-300 rounded-lg focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none bg-white">
                      <option>Residential</option><option>Commercial</option><option>Interior Design</option><option>Visualization</option><option>Turnkey</option><option>Industrial</option>
                    </select>
                  </div>
                </div>
                <div className="mb-4"><label className="block text-sm font-medium text-stone-700 mb-1">Description</label><textarea value={pDesc} onChange={e => setPDesc(e.target.value)} rows={2} className="w-full px-4 py-2.5 border border-stone-300 rounded-lg focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none resize-none" placeholder="Brief description..." /></div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-stone-700 mb-1">Project Image</label>
                  <div className="flex items-center gap-4">
                    <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                    <button onClick={() => fileInputRef.current?.click()} className="px-4 py-2.5 border-2 border-dashed border-stone-300 rounded-lg text-stone-600 hover:border-teal-600 hover:text-teal-700 transition-colors flex items-center gap-2"><IconImage /> Upload Image</button>
                    {pImg && pImg.startsWith('data:') && <div className="w-16 h-12 rounded-lg overflow-hidden"><img src={pImg} alt="preview" className="w-full h-full object-cover" /></div>}
                    {(!pImg || !pImg.startsWith('data:')) && <span className="text-sm text-stone-400">No image? A gradient will be used</span>}
                  </div>
                </div>
                <div className="flex gap-3">
                  <button onClick={saveProject} className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors">{editingProject ? 'Update' : 'Add Project'}</button>
                  <button onClick={resetProjectForm} className="px-6 py-2.5 border border-stone-300 rounded-lg text-stone-600 hover:bg-stone-50 transition-colors">Cancel</button>
                </div>
              </div>
            )}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map(p => (
                <div key={p.id} className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden group">
                  <div className="aspect-video relative" style={{ background: p.img.startsWith('data:') ? `url(${p.img}) center/cover` : p.img }}>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
                      <button onClick={() => editProject(p)} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-stone-700 hover:text-teal-700 shadow-lg"><IconEdit /></button>
                      <button onClick={() => deleteProject(p.id)} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-stone-700 hover:text-red-600 shadow-lg"><IconTrash /></button>
                    </div>
                  </div>
                  <div className="p-4"><div className="text-xs text-teal-600 font-medium uppercase tracking-wider mb-1">{p.category}</div><div className="font-bold text-stone-900">{p.title}</div>{p.description && <div className="text-sm text-stone-500 mt-1 truncate">{p.description}</div>}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'testimonials' && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <div><h1 className="text-3xl font-bold text-stone-900">Client Reviews</h1><p className="text-stone-500">Manage testimonials</p></div>
              <button onClick={() => { resetTestimonialForm(); setShowTestimonialForm(true); }} className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-lg font-medium flex items-center gap-2 transition-colors"><IconPlus /> Add Review</button>
            </div>
            {showTestimonialForm && (
              <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 mb-8">
                <h3 className="text-lg font-bold text-stone-900 mb-4">{editingTestimonial ? 'Edit Review' : 'Add New Review'}</h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div><label className="block text-sm font-medium text-stone-700 mb-1">Client Name *</label><input value={tName} onChange={e => setTName(e.target.value)} className="w-full px-4 py-2.5 border border-stone-300 rounded-lg focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none" placeholder="e.g. Rahul Mehta" /></div>
                  <div><label className="block text-sm font-medium text-stone-700 mb-1">Location</label><input value={tLocation} onChange={e => setTLocation(e.target.value)} className="w-full px-4 py-2.5 border border-stone-300 rounded-lg focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none" placeholder="e.g. Homeowner, Ahmedabad" /></div>
                </div>
                <div className="mb-4"><label className="block text-sm font-medium text-stone-700 mb-1">Review Text *</label><textarea value={tText} onChange={e => setTText(e.target.value)} rows={3} className="w-full px-4 py-2.5 border border-stone-300 rounded-lg focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none resize-none" placeholder="What did the client say..." /></div>
                <div className="flex gap-3">
                  <button onClick={saveTestimonial} className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors">{editingTestimonial ? 'Update' : 'Add Review'}</button>
                  <button onClick={resetTestimonialForm} className="px-6 py-2.5 border border-stone-300 rounded-lg text-stone-600 hover:bg-stone-50 transition-colors">Cancel</button>
                </div>
              </div>
            )}
            <div className="space-y-4">
              {testimonials.map(t => (
                <div key={t.id} className="bg-white p-6 rounded-xl shadow-sm border border-stone-200 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-teal-700 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">{t.initial}</div>
                  <div className="flex-1"><div className="font-bold text-stone-900">{t.name}</div><div className="text-sm text-stone-500 mb-2">{t.location}</div><p className="text-stone-600 italic">"{t.text}"</p></div>
                  <div className="flex gap-2 flex-shrink-0">
                    <button onClick={() => editTestimonialItem(t)} className="w-9 h-9 border border-stone-200 rounded-lg flex items-center justify-center text-stone-500 hover:text-teal-700 hover:border-teal-600"><IconEdit className="w-4 h-4" /></button>
                    <button onClick={() => deleteTestimonial(t.id)} className="w-9 h-9 border border-stone-200 rounded-lg flex items-center justify-center text-stone-500 hover:text-red-600 hover:border-red-400"><IconTrash className="w-4 h-4" /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'stats' && (
          <div>
            <h1 className="text-3xl font-bold text-stone-900 mb-2">Website Stats</h1>
            <p className="text-stone-500 mb-8">Edit the numbers on your homepage</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
                  <label className="block text-sm font-medium text-stone-700 mb-1">Number</label>
                  <input value={s.num} onChange={e => updateStat(i, 'num', e.target.value)} className="w-full px-4 py-2.5 border border-stone-300 rounded-lg focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none mb-3 text-2xl font-bold text-teal-700" />
                  <label className="block text-sm font-medium text-stone-700 mb-1">Label</label>
                  <input value={s.label} onChange={e => updateStat(i, 'label', e.target.value)} className="w-full px-4 py-2.5 border border-stone-300 rounded-lg focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none" />
                </div>
              ))}
            </div>
            <p className="text-sm text-stone-400 mt-4">✅ Changes saved automatically</p>
          </div>
        )}

        {activeTab === 'messages' && (
          <div>
            <h1 className="text-3xl font-bold text-stone-900 mb-2">Contact Messages</h1>
            <p className="text-stone-500 mb-8">Messages from your contact form</p>
            {messages.length === 0 ? (
              <div className="bg-white p-12 rounded-xl shadow-sm border border-stone-200 text-center">
                <IconInbox className="w-16 h-16 text-stone-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-stone-700 mb-2">No Messages Yet</h3>
                <p className="text-stone-500">Contact form submissions will appear here.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map(m => (
                  <div key={m.id} className={`bg-white p-6 rounded-xl shadow-sm border ${m.read ? 'border-stone-200' : 'border-teal-300 bg-teal-50/30'}`}>
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-3 gap-2">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${m.read ? 'bg-stone-400' : 'bg-teal-600'}`}>{m.firstName[0]}</div>
                        <div><div className="font-bold text-stone-900">{m.firstName} {m.lastName}</div><div className="text-sm text-stone-500">{m.email} • {m.phone}</div></div>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs text-stone-400">{m.date}</span>
                        <span className="text-xs px-2 py-1 bg-stone-100 rounded-full text-stone-600">{m.projectType}</span>
                        {!m.read && <button onClick={() => markRead(m.id)} className="text-xs px-2 py-1 bg-teal-100 text-teal-700 rounded-full hover:bg-teal-200">Mark Read</button>}
                        <button onClick={() => deleteMessage(m.id)} className="w-8 h-8 flex items-center justify-center text-stone-400 hover:text-red-600"><IconTrash className="w-4 h-4" /></button>
                      </div>
                    </div>
                    <p className="text-stone-700">{m.message}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
