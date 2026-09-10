'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  LayoutDashboard, ShoppingBag, ShoppingCart, Image as ImageIcon, 
  Film, Users, Settings, Plus, UploadCloud, Link2, 
  MoreVertical, Edit, Trash2, ArrowLeft, AlertCircle, Menu, X
} from 'lucide-react';

// --- TYPESCRIPT INTERFACES (This fixes the build error) ---
interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  trend: 'up' | 'down' | 'neutral';
  isAlert?: boolean;
}

interface TransactionItemProps {
  order: string;
  amount: string;
  status: string;
  time: string;
}

interface TopProductItemProps {
  name: string;
  sales: string;
  stock: string;
  isOut?: boolean;
}

interface OrderTableRowProps {
  id: string;
  name: string;
  amount: string;
  date: string;
  status: string;
  isAlert?: boolean;
}

export default function MasterAdminPanel() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [uploadMode, setUploadMode] = useState<'gallery' | 'url'>('gallery');

  // --- LUXURY THEME COLORS ---
  const bgMain = 'bg-[#08090C]';
  const bgCard = 'bg-[#11131A]';
  const borderCol = 'border-[#222]';
  const textMain = 'text-white';
  const gold = 'text-[#D4AF37]';
  const bgGold = 'bg-gradient-to-r from-yellow-500 to-[#D4AF37]';

  return (
    <div className={`min-h-screen ${bgMain} ${textMain} font-sans flex selection:bg-[#D4AF37] selection:text-black`}>
      
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
        .font-editorial { font-family: 'Playfair Display', serif; }
      `}} />

      {/* --- SIDEBAR (DESKTOP) --- */}
      <aside className={`w-[260px] hidden md:flex flex-col border-r ${borderCol} ${bgCard} h-screen sticky top-0`}>
        <div className={`h-[70px] flex items-center px-6 border-b ${borderCol}`}>
          <div className="flex flex-col">
            <span className={`font-editorial font-black text-xl tracking-widest ${gold}`}>AB ADMIN</span>
            <span className="text-[8px] tracking-[0.3em] text-gray-500 uppercase font-bold">God Mode</span>
          </div>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-6 px-3 flex flex-col gap-2 scrollbar-hide">
          <SidebarItem icon={<LayoutDashboard size={18}/>} label="Dashboard" isActive={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} />
          <SidebarItem icon={<ShoppingBag size={18}/>} label="Products & Catalog" isActive={activeTab === 'products'} onClick={() => setActiveTab('products')} />
          <SidebarItem icon={<ShoppingCart size={18}/>} label="Orders & Returns" isActive={activeTab === 'orders'} onClick={() => setActiveTab('orders')} />
          <SidebarItem icon={<ImageIcon size={18}/>} label="Banners & Carousels" isActive={activeTab === 'banners'} onClick={() => setActiveTab('banners')} />
          <SidebarItem icon={<Film size={18}/>} label="Editorial Reels" isActive={activeTab === 'reels'} onClick={() => setActiveTab('reels')} />
          <SidebarItem icon={<Users size={18}/>} label="Customers" isActive={activeTab === 'customers'} onClick={() => setActiveTab('customers')} />
          
          <hr className={`my-4 ${borderCol}`} />
          <SidebarItem icon={<Settings size={18}/>} label="Store Settings" isActive={activeTab === 'settings'} onClick={() => setActiveTab('settings')} />
          <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-gray-500 hover:text-white hover:bg-white/5 transition mt-auto">
            <ArrowLeft size={18} /> Exit to Store
          </Link>
        </nav>
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto scrollbar-hide relative">
        
        {/* MOBILE HEADER */}
        <header className={`md:hidden h-[60px] flex items-center justify-between px-4 border-b ${borderCol} ${bgCard} sticky top-0 z-50`}>
          <span className={`font-editorial font-black text-lg tracking-widest ${gold}`}>AB ADMIN</span>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 bg-white/5 rounded-md">
             {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </header>

        {/* MOBILE DROPDOWN MENU */}
        {isMobileMenuOpen && (
          <div className={`md:hidden absolute top-[60px] left-0 w-full ${bgCard} border-b ${borderCol} z-40 p-4 flex flex-col gap-2 shadow-2xl`}>
             <SidebarItem icon={<LayoutDashboard size={18}/>} label="Dashboard" isActive={activeTab === 'dashboard'} onClick={() => {setActiveTab('dashboard'); setIsMobileMenuOpen(false);}} />
             <SidebarItem icon={<ShoppingBag size={18}/>} label="Products" isActive={activeTab === 'products'} onClick={() => {setActiveTab('products'); setIsMobileMenuOpen(false);}} />
             <SidebarItem icon={<ShoppingCart size={18}/>} label="Orders" isActive={activeTab === 'orders'} onClick={() => {setActiveTab('orders'); setIsMobileMenuOpen(false);}} />
             <SidebarItem icon={<ImageIcon size={18}/>} label="Banners" isActive={activeTab === 'banners'} onClick={() => {setActiveTab('banners'); setIsMobileMenuOpen(false);}} />
             <SidebarItem icon={<Film size={18}/>} label="Reels" isActive={activeTab === 'reels'} onClick={() => {setActiveTab('reels'); setIsMobileMenuOpen(false);}} />
          </div>
        )}

        {/* --- DYNAMIC TAB CONTENT --- */}
        <div className="p-4 sm:p-8 max-w-6xl mx-auto w-full">
          
          {/* 1. DASHBOARD OVERVIEW */}
          {activeTab === 'dashboard' && (
            <div className="animate-fadeIn">
              <h1 className="font-editorial text-3xl mb-6 tracking-wide">Overview</h1>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <StatCard title="Total Revenue" value="₹4.2L" subtitle="+12% this week" trend="up" />
                <StatCard title="Active Orders" value="156" subtitle="12 pending shipment" trend="neutral" />
                <StatCard title="Return Requests" value="3" subtitle="Requires action" trend="down" isAlert />
                <StatCard title="Total Customers" value="2,845" subtitle="+45 new today" trend="up" />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                 <div className={`p-6 rounded-2xl border ${borderCol} ${bgCard}`}>
                    <h3 className="font-bold text-sm tracking-widest uppercase mb-4 text-gray-400">Recent Transactions</h3>
                    <div className="flex flex-col gap-4">
                      <TransactionItem order="#AB-1029" amount="₹4,999" status="Paid" time="2 mins ago" />
                      <TransactionItem order="#AB-1028" amount="₹1,299" status="Pending" time="15 mins ago" />
                      <TransactionItem order="#AB-1027" amount="₹8,999" status="Paid" time="1 hour ago" />
                    </div>
                 </div>
                 <div className={`p-6 rounded-2xl border ${borderCol} ${bgCard}`}>
                    <h3 className="font-bold text-sm tracking-widest uppercase mb-4 text-gray-400">Top Performing Products</h3>
                    <div className="flex flex-col gap-4">
                      <TopProductItem name="Satin Maxi Dress" sales="124 sold" stock="12 left" />
                      <TopProductItem name="Linen Blend Suit" sales="89 sold" stock="Out of Stock" isOut />
                      <TopProductItem name="Casual Sneakers" sales="65 sold" stock="45 left" />
                    </div>
                 </div>
              </div>
            </div>
          )}

          {/* 2. ADD PRODUCT & CATALOG MANAGER */}
          {activeTab === 'products' && (
            <div className="animate-fadeIn">
              <div className="flex justify-between items-center mb-6">
                <h1 className="font-editorial text-3xl tracking-wide">Product Catalog</h1>
                <button className={`px-4 py-2 ${bgGold} text-black text-xs font-black uppercase tracking-widest rounded-xl shadow-lg hover:scale-105 transition flex items-center gap-2`}>
                  <Plus size={16} /> Add Product
                </button>
              </div>

              {/* ADD NEW PRODUCT FORM */}
              <div className={`p-6 rounded-2xl border ${borderCol} ${bgCard} mb-8 shadow-xl`}>
                <h3 className="font-bold text-sm tracking-widest uppercase mb-6 text-[#D4AF37]">Create New Product</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left: Image Upload Zone */}
                  <div>
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-3">Product Image / Video</label>
                    
                    <div className="flex bg-[#08090C] p-1 rounded-xl mb-4 border border-[#222]">
                      <button onClick={() => setUploadMode('gallery')} className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${uploadMode === 'gallery' ? 'bg-[#D4AF37] text-black' : 'text-gray-500 hover:text-white'}`}>Gallery</button>
                      <button onClick={() => setUploadMode('url')} className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${uploadMode === 'url' ? 'bg-[#D4AF37] text-black' : 'text-gray-500 hover:text-white'}`}>Paste URL</button>
                    </div>

                    {uploadMode === 'gallery' ? (
                      <label className={`w-full aspect-[4/5] border-2 border-dashed ${borderCol} rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-[#D4AF37] transition bg-[#08090C] group`}>
                        <UploadCloud size={40} className="text-gray-600 group-hover:text-[#D4AF37] mb-4 transition-colors" />
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Tap to Upload</span>
                        <input type="file" className="hidden" accept="image/*,video/*" />
                      </label>
                    ) : (
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center bg-[#08090C] border border-[#333] rounded-xl px-3 py-3 focus-within:border-[#D4AF37] transition">
                          <Link2 size={18} className="text-gray-500 mr-2" />
                          <input type="url" placeholder="https://..." className="bg-transparent border-none outline-none text-sm w-full text-white placeholder-gray-600" />
                        </div>
                        <div className={`w-full aspect-[4/5] border ${borderCol} rounded-xl flex items-center justify-center bg-[#08090C]`}>
                          <ImageIcon size={40} className="text-gray-700" />
                          <span className="absolute text-[10px] text-gray-500 uppercase tracking-widest mt-16">Preview Area</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right: Details Form */}
                  <div className="flex flex-col gap-5">
                    <div>
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Product Title</label>
                      <input type="text" placeholder="e.g. Pleated Satin Maxi Dress" className={`w-full bg-[#08090C] border ${borderCol} rounded-xl px-4 py-3 text-sm text-white focus:border-[#D4AF37] outline-none`} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Brand</label>
                        <input type="text" placeholder="ZARA" className={`w-full bg-[#08090C] border ${borderCol} rounded-xl px-4 py-3 text-sm text-white focus:border-[#D4AF37] outline-none`} />
                      </div>
                      <div>
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Category</label>
                        <select className={`w-full bg-[#08090C] border ${borderCol} rounded-xl px-4 py-3 text-sm text-white focus:border-[#D4AF37] outline-none appearance-none`}>
                          <option>Womenswear</option>
                          <option>Menswear</option>
                          <option>Footwear</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Selling Price</label>
                        <input type="number" placeholder="₹4,999" className={`w-full bg-[#08090C] border ${borderCol} rounded-xl px-4 py-3 text-sm text-white focus:border-[#D4AF37] outline-none`} />
                      </div>
                      <div>
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">MRP (Old Price)</label>
                        <input type="number" placeholder="₹7,999" className={`w-full bg-[#08090C] border ${borderCol} rounded-xl px-4 py-3 text-sm text-white focus:border-[#D4AF37] outline-none`} />
                      </div>
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Stock & Tags</label>
                      <div className="flex gap-4">
                        <input type="number" placeholder="Qty: 50" className={`w-1/3 bg-[#08090C] border ${borderCol} rounded-xl px-4 py-3 text-sm text-white focus:border-[#D4AF37] outline-none`} />
                        <input type="text" placeholder="Tags: HOT, NEW, 50% OFF" className={`w-2/3 bg-[#08090C] border ${borderCol} rounded-xl px-4 py-3 text-sm text-white focus:border-[#D4AF37] outline-none`} />
                      </div>
                    </div>
                    <button className={`w-full py-4 mt-auto ${bgGold} text-black text-xs font-black uppercase tracking-widest rounded-xl shadow-lg`}>
                      Publish Product
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 3. ORDERS & RETURNS */}
          {activeTab === 'orders' && (
            <div className="animate-fadeIn">
              <h1 className="font-editorial text-3xl mb-6 tracking-wide">Orders & Returns</h1>
              
              <div className={`border ${borderCol} rounded-2xl overflow-hidden ${bgCard}`}>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead className={`bg-[#08090C] border-b ${borderCol} text-[10px] uppercase tracking-widest text-gray-400`}>
                      <tr>
                        <th className="p-4 font-bold">Order ID</th>
                        <th className="p-4 font-bold">Customer</th>
                        <th className="p-4 font-bold">Amount</th>
                        <th className="p-4 font-bold">Date</th>
                        <th className="p-4 font-bold">Status</th>
                        <th className="p-4 font-bold">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#222]">
                      <OrderTableRow id="#AB-9021" name="Rahul Sharma" amount="₹4,999" date="Today, 10:30 AM" status="Pending" />
                      <OrderTableRow id="#AB-9020" name="Priya Singh" amount="₹1,299" date="Today, 09:15 AM" status="Shipped" />
                      <OrderTableRow id="#AB-9019" name="Amit Kumar" amount="₹8,499" date="Yesterday" status="Returned" isAlert />
                      <OrderTableRow id="#AB-9018" name="Sneha Reddy" amount="₹3,450" date="Yesterday" status="Delivered" />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* 4. BANNERS & CAROUSELS */}
          {activeTab === 'banners' && (
            <div className="animate-fadeIn">
              <h1 className="font-editorial text-3xl mb-6 tracking-wide">Banners & Layout</h1>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Hero Banner Upload */}
                <div className={`p-6 rounded-2xl border ${borderCol} ${bgCard}`}>
                  <h3 className="font-bold text-sm tracking-widest uppercase mb-4 text-[#D4AF37]">Add Hero Banner</h3>
                  <div className="flex flex-col gap-4">
                    <input type="text" placeholder="Banner Heading (e.g. FESTIVE EDIT)" className={`w-full bg-[#08090C] border ${borderCol} rounded-xl px-4 py-3 text-sm text-white outline-none`} />
                    <input type="text" placeholder="Image URL (Unsplash/Cloudflare)" className={`w-full bg-[#08090C] border ${borderCol} rounded-xl px-4 py-3 text-sm text-white outline-none`} />
                    <button className={`w-full py-3 border border-[#D4AF37] text-[#D4AF37] text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-[#D4AF37] hover:text-black transition`}>Add to Slider</button>
                  </div>
                </div>

                {/* Add Category / Carousel Block */}
                <div className={`p-6 rounded-2xl border ${borderCol} ${bgCard}`}>
                  <h3 className="font-bold text-sm tracking-widest uppercase mb-4 text-[#D4AF37]">Create New Category List</h3>
                  <div className="flex flex-col gap-4">
                    <input type="text" placeholder="Category/Carousel Title (e.g. Trending Now)" className={`w-full bg-[#08090C] border ${borderCol} rounded-xl px-4 py-3 text-sm text-white outline-none`} />
                    <select className={`w-full bg-[#08090C] border ${borderCol} rounded-xl px-4 py-3 text-sm text-white outline-none appearance-none`}>
                      <option>Display as: Tall Fashion Cards</option>
                      <option>Display as: Circle Icons</option>
                      <option>Display as: Flipkart Square Brands</option>
                    </select>
                    <button className={`w-full py-3 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-gray-200 transition`}>Create Section</button>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}

// --- SUB-COMPONENTS WITH PROPER TYPES (Fixes the Build Error) ---

function SidebarItem({ icon, label, isActive, onClick }: SidebarItemProps) {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold tracking-wide transition-all ${isActive ? 'bg-[#D4AF37] text-black shadow-[0_0_15px_rgba(212,175,55,0.3)]' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
    >
      {icon} {label}
    </button>
  );
}

function StatCard({ title, value, subtitle, trend, isAlert }: StatCardProps) {
  return (
    <div className={`p-5 rounded-2xl border ${isAlert ? 'border-red-500/30 bg-red-950/10' : 'border-[#222] bg-[#11131A]'} flex flex-col`}>
      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-2">{title}</span>
      <span className="text-2xl font-editorial tracking-wider text-white mb-2">{value}</span>
      <div className="flex items-center gap-1.5 mt-auto">
        <span className={`text-[9px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-sm ${trend === 'up' ? 'bg-green-500/20 text-green-400' : trend === 'down' ? 'bg-red-500/20 text-red-400' : 'bg-gray-700/50 text-gray-300'}`}>
          {trend === 'up' ? '↗' : trend === 'down' ? '↘' : '→'}
        </span>
        <span className="text-[9px] text-gray-500 font-bold">{subtitle}</span>
      </div>
    </div>
  );
}

function TransactionItem({ order, amount, status, time }: TransactionItemProps) {
  return (
    <div className="flex items-center justify-between p-3 bg-[#08090C] rounded-xl border border-[#222]">
      <div>
        <p className="text-xs font-bold text-white mb-0.5">{order}</p>
        <p className="text-[9px] text-gray-500 uppercase tracking-widest">{time}</p>
      </div>
      <div className="text-right flex flex-col items-end">
        <p className="text-sm font-editorial text-[#D4AF37]">{amount}</p>
        <span className={`text-[8px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-sm mt-1 ${status === 'Paid' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>{status}</span>
      </div>
    </div>
  );
}

function TopProductItem({ name, sales, stock, isOut }: TopProductItemProps) {
  return (
    <div className="flex items-center justify-between p-3 bg-[#08090C] rounded-xl border border-[#222]">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gray-800 rounded-md border border-[#333]"></div>
        <div>
          <p className="text-xs font-bold text-white mb-0.5 truncate max-w-[120px] sm:max-w-[150px]">{name}</p>
          <p className="text-[9px] text-gray-500 uppercase tracking-widest">{sales}</p>
        </div>
      </div>
      <span className={`text-[9px] font-black uppercase tracking-widest ${isOut ? 'text-red-500' : 'text-gray-400'}`}>{stock}</span>
    </div>
  );
}

function OrderTableRow({ id, name, amount, date, status, isAlert }: OrderTableRowProps) {
  const statusColor = 
    status === 'Pending' ? 'text-yellow-400 bg-yellow-400/10' : 
    status === 'Shipped' ? 'text-blue-400 bg-blue-400/10' : 
    status === 'Delivered' ? 'text-green-400 bg-green-400/10' : 
    'text-red-400 bg-red-400/10';

  return (
    <tr className="hover:bg-white/5 transition-colors group">
      <td className="p-4">
        <span className="text-xs font-bold text-white cursor-pointer hover:text-[#D4AF37]">{id}</span>
      </td>
      <td className="p-4 text-xs text-gray-300">{name}</td>
      <td className="p-4 text-sm font-editorial text-[#D4AF37]">{amount}</td>
      <td className="p-4 text-[10px] text-gray-500 uppercase tracking-wider">{date}</td>
      <td className="p-4">
        <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-sm flex items-center gap-1 w-max ${statusColor}`}>
          {isAlert && <AlertCircle size={10} />} {status}
        </span>
      </td>
      <td className="p-4 text-right">
        <div className="flex items-center gap-3 text-gray-500">
          <button className="hover:text-white transition" title="Edit Order"><Edit size={16} /></button>
          <button className="hover:text-red-500 transition" title="Delete"><Trash2 size={16} /></button>
          <button className="hover:text-white transition"><MoreVertical size={16} /></button>
        </div>
      </td>
    </tr>
  );
}
