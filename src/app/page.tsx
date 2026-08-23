'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Search, ShoppingBag, Truck, RotateCcw, 
  ShieldCheck, Headphones, Menu, X, ChevronRight, Star, 
  Home as HomeIcon, Grid2X2, Heart, User, CreditCard,
  PackageCheck, Film, ShoppingCart, Zap, 
  Sun, Moon, Bell, Settings, LogOut, SlidersHorizontal,
  Crown, MapPin, ArrowRight, CheckCircle2, Package
} from 'lucide-react';

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // CATEGORIES
  const CATEGORIES = [
    { id: 'men', name: 'MEN', link: '/categories/men', img: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=400' },
    { id: 'women', name: 'WOMEN', link: '/categories/women', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=400' },
    { id: 'kids', name: 'KIDS', link: '/categories/kids', img: 'https://images.unsplash.com/photo-1519241047957-be31d7379a5d?auto=format&fit=crop&q=80&w=400' },
    { id: 'footwear', name: 'FOOTWEAR', link: '/categories/footwear', img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=400' },
    { id: 'bags', name: 'BAGS', link: '/categories/bags', img: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=400' },
    { id: 'accessories', name: 'ACCESSORIES', link: '/categories/accessories', img: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=400' },
  ];

  // OUR TOP BRANDS
  const OUR_BRANDS = [
    { id: 'nike', name: 'NIKE', style: 'font-black italic text-[16px]', link: '/brand/nike' },
    { id: 'adidas', name: 'adidas', style: 'font-bold lowercase text-[16px] tracking-tighter text-blue-600', link: '/brand/adidas' },
    { id: 'zara', name: 'ZARA', style: 'font-serif uppercase text-[16px] tracking-widest', link: '/brand/zara' },
    { id: 'hm', name: 'H&M', style: 'font-bold italic text-[16px] text-red-600', link: '/brand/hm' },
    { id: 'puma', name: 'PUMA', style: 'font-black uppercase text-[16px]', link: '/brand/puma' },
    { id: 'levis', name: "Levi's", style: 'font-bold text-[11px] bg-red-600 text-white px-2 py-0.5 rounded-sm', link: '/brand/levis' },
  ];

  // HERO BANNERS (Auto-Scrolling)
  const HERO_BANNERS = [
    { id: 'b1', title: 'FASHION THAT DEFINES YOU', sub: 'NEW SEASON', img: 'https://images.unsplash.com/photo-1511280204269-80c5a9ebb546?auto=format&fit=crop&q=80&w=1200', link: '/collections/new' },
    { id: 'b2', title: 'SUMMER ESSENTIALS', sub: 'MIN 50% OFF', img: 'https://images.unsplash.com/photo-1523359346063-d879354c0ea5?auto=format&fit=crop&q=80&w=1200', link: '/collections/summer' },
    { id: 'b3', title: 'FESTIVE COLLECTION', sub: 'SPECIAL LOOKS', img: 'https://images.unsplash.com/photo-1583391733958-d25e07fac044?auto=format&fit=crop&q=80&w=1200', link: '/collections/ethnic' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_BANNERS.length);
    }, 3500); 
    return () => clearInterval(timer);
  }, [HERO_BANNERS.length]);

  // PRODUCT CAROUSELS DATA WITH WHITE BADGE LOGOS (Flipkart Style)
  const TRENDING_PRODUCTS = [
    { id: '1', name: 'Men Casual Shirt', brand: 'Roadster', price: '₹1,299', oldPrice: '₹1,699', rating: '4.8', tag: 'BEST CHOICE', inStock: true, img: 'https://images.unsplash.com/photo-1596755094514-f87e32f85e23?auto=format&fit=crop&q=80&w=400' },
    { id: '2', name: 'Women Party Dress', brand: 'ZARA', price: '₹1,799', oldPrice: '₹2,399', rating: '4.9', tag: 'HOT', inStock: true, img: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=400' },
    { id: '3', name: 'Denim Jacket', brand: 'Levi\'s', price: '₹2,499', oldPrice: '₹3,099', rating: '4.7', tag: 'NEW', inStock: false, img: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&q=80&w=400' },
    { id: '4', name: 'Kids T-Shirt', brand: 'H&M', price: '₹499', oldPrice: '₹799', rating: '4.5', tag: '30% OFF', inStock: true, img: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&q=80&w=400' },
  ];

  const FESTIVAL_OFFERS = [
    { id: 'fe1', name: 'Premium Kurta Set', brand: 'Manyavar', price: '₹2,499', oldPrice: '₹4,999', rating: '4.9', tag: 'MIN 50% OFF', inStock: true, logoText: 'MANYAVAR', img: 'https://images.unsplash.com/photo-1617391761899-73752e519283?auto=format&fit=crop&q=80&w=400' },
    { id: 'fe2', name: 'Designer Saree', brand: 'Biba', price: '₹1,899', oldPrice: '₹3,599', rating: '4.8', tag: 'FESTIVE', inStock: true, logoText: 'BIBA', img: 'https://images.unsplash.com/photo-1610189013098-b8ce77728ce7?auto=format&fit=crop&q=80&w=400' },
    { id: 'fe3', name: 'Sherwani Collection', brand: 'Raymond', price: '₹4,999', oldPrice: '₹8,999', rating: '4.7', tag: 'LUXURY', inStock: true, logoText: 'RAYMOND', img: 'https://images.unsplash.com/photo-1597983073493-88ce35813657?auto=format&fit=crop&q=80&w=400' },
  ];

  const FREEDOM_50 = [
    { id: 'f1', name: 'Men Relaxed Jeans', brand: 'Spykar', price: '₹999', oldPrice: '₹2,999', rating: '4.6', tag: 'MIN 70% OFF', inStock: true, logoText: 'SPYKAR', img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=400' },
    { id: 'f2', name: 'Casual Sneakers', brand: 'Puma', price: '₹1,499', oldPrice: '₹3,499', rating: '4.7', tag: 'TOP 50', inStock: true, logoText: 'PUMA', img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=400' },
    { id: 'f3', name: 'Trolley Bag Set', brand: 'Safari', price: '₹2,999', oldPrice: '₹8,999', rating: '4.8', tag: 'MIN 85% OFF', inStock: true, logoText: 'SAFARI', img: 'https://images.unsplash.com/photo-1551524164-687a5acf3bfa?auto=format&fit=crop&q=80&w=400' },
  ];

  const UNDER_599 = [
    { id: 'u1', name: 'Kids Cotton T-shirt', brand: 'Pantaloons', price: '₹299', oldPrice: '₹599', rating: '4.4', tag: 'UNDER ₹299', inStock: true, logoText: 'PANTALOONS', img: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&q=80&w=400' },
    { id: 'u2', name: 'Super Baggy Jeans', brand: 'Highlander', price: '₹599', oldPrice: '₹1,499', rating: '4.3', tag: 'UNDER ₹599', inStock: false, logoText: 'HIGHLANDER', img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=400' },
    { id: 'u3', name: 'Printed Rayon Shirt', brand: 'Dennis Lingo', price: '₹499', oldPrice: '₹1,299', rating: '4.5', tag: 'UNDER ₹499', inStock: true, logoText: 'DENNIS LINGO', img: 'https://images.unsplash.com/photo-1596755094514-f87e32f85e23?auto=format&fit=crop&q=80&w=400' },
  ];

  const themeBg = isDarkMode ? 'bg-[#08090C]' : 'bg-[#f1f3f6]';
  const headerBg = isDarkMode ? 'bg-[#11131A] border-[#222]' : 'bg-white border-gray-200';
  const cardBg = isDarkMode ? 'bg-[#11131A] border-[#222]' : 'bg-white border-gray-200';
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const textMuted = isDarkMode ? 'text-gray-400' : 'text-gray-500';

  return (
    <div className={`min-h-screen ${themeBg} ${textColor} font-sans selection:bg-[#D4AF37] selection:text-black pb-[70px] transition-colors duration-300 overflow-x-hidden`}>
      
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      {/* --- FILTER DRAWER --- */}
      {isFilterOpen && (
        <div className="fixed inset-0 bg-black/60 z-[80] transition-opacity" onClick={() => setIsFilterOpen(false)} />
      )}
      <div className={`fixed bottom-0 left-0 w-full h-[75vh] ${isDarkMode ? 'bg-[#1A1C23]' : 'bg-white'} rounded-t-2xl shadow-2xl z-[90] transform transition-transform duration-300 ease-in-out ${isFilterOpen ? 'translate-y-0' : 'translate-y-full'} flex flex-col`}>
        <div className={`p-4 flex items-center justify-between border-b ${isDarkMode ? 'border-[#333]' : 'border-gray-200'}`}>
          <h3 className="font-bold text-lg">Filters & Sort</h3>
          <button onClick={() => setIsFilterOpen(false)}><X size={24} className={textMuted} /></button>
        </div>
        <div className="flex-1 flex overflow-hidden">
          <div className={`w-1/3 border-r overflow-y-auto ${isDarkMode ? 'border-[#333] bg-[#11131A]' : 'border-gray-200 bg-gray-50'}`}>
            <div className={`p-4 text-sm font-bold border-l-4 border-blue-600 ${isDarkMode ? 'bg-[#1A1C23]' : 'bg-white'} text-blue-600`}>Sort By</div>
            <div className="p-4 text-sm font-medium text-gray-500">Gender</div>
            <div className="p-4 text-sm font-medium text-gray-500">Price</div>
            <div className="p-4 text-sm font-medium text-gray-500">Brand</div>
          </div>
          <div className="w-2/3 p-4 overflow-y-auto">
            <h4 className={`text-xs uppercase tracking-widest font-bold mb-4 ${textMuted}`}>Sort Products By</h4>
            <label className="flex items-center gap-3 mb-4 cursor-pointer"><input type="radio" name="sort" className="w-4 h-4" defaultChecked /><span className="text-sm font-bold">Popularity</span></label>
            <label className="flex items-center gap-3 mb-4 cursor-pointer"><input type="radio" name="sort" className="w-4 h-4" /><span className="text-sm font-bold">Price: Low to High</span></label>
            <label className="flex items-center gap-3 mb-4 cursor-pointer"><input type="radio" name="sort" className="w-4 h-4" /><span className="text-sm font-bold">Price: High to Low</span></label>
            <label className="flex items-center gap-3 mb-4 cursor-pointer"><input type="radio" name="sort" className="w-4 h-4" /><span className="text-sm font-bold">Newest Arrivals</span></label>
            <hr className={`my-4 ${isDarkMode ? 'border-[#333]' : 'border-gray-200'}`} />
            <label className="flex items-center gap-3 cursor-pointer"><input type="checkbox" className="w-4 h-4 rounded text-blue-600" /><span className="text-sm font-bold">Exclude Out of Stock</span></label>
          </div>
        </div>
        <div className={`p-4 border-t flex gap-3 ${isDarkMode ? 'border-[#333]' : 'border-gray-200'}`}>
          <button className={`flex-1 py-3 rounded-lg font-bold text-sm border ${isDarkMode ? 'border-gray-600 text-gray-300' : 'border-gray-300'} hover:bg-gray-100 dark:hover:bg-gray-800 transition`} onClick={() => setIsFilterOpen(false)}>CLEAR</button>
          <button className="flex-1 py-3 rounded-lg font-bold text-sm bg-gradient-to-r from-yellow-500 to-[#D4AF37] text-black shadow-lg hover:scale-[1.02] transition" onClick={() => setIsFilterOpen(false)}>APPLY</button>
        </div>
      </div>

      {/* --- SIDEBAR DRAWER --- */}
      {isDrawerOpen && (
        <div className="fixed inset-0 bg-black/60 z-[60] transition-opacity" onClick={() => setIsDrawerOpen(false)} />
      )}
      <div className={`fixed top-0 left-0 h-full w-[80%] max-w-[300px] ${isDarkMode ? 'bg-[#11131A]' : 'bg-white'} shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'} overflow-y-auto`}>
        <div className={`p-5 flex items-center justify-between border-b ${isDarkMode ? 'border-[#222]' : 'border-gray-200'}`}>
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 flex items-center justify-center">
              <img src="/logo.png" alt="AB Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif font-black text-xl ${isDarkMode ? 'text-[#D4AF37]' : 'text-yellow-600'}`}>APNA BAZAR</span>
            </div>
          </div>
          <button onClick={() => setIsDrawerOpen(false)} className={`p-1 rounded-md ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}><X size={20} /></button>
        </div>
        <div className="p-4 flex flex-col gap-2">
          <DrawerLink icon={<HomeIcon size={18} />} label="Home" href="/" isDark={isDarkMode} />
          <DrawerLink icon={<Grid2X2 size={18} />} label="Categories" href="/categories" isDark={isDarkMode} />
          <DrawerLink icon={<PackageCheck size={18} />} label="My Orders" href="/orders" isDark={isDarkMode} />
          <DrawerLink icon={<Heart size={18} />} label="Wishlist" href="/wishlist" isDark={isDarkMode} />
          <DrawerLink icon={<ShoppingCart size={18} />} label="My Cart" href="/cart" isDark={isDarkMode} />
          <hr className={`my-2 ${isDarkMode ? 'border-[#333]' : 'border-gray-200'}`} />
          <DrawerLink icon={<Bell size={18} />} label="Notifications" href="/notifications" badge="New" isDark={isDarkMode} />
          <DrawerLink icon={<Settings size={18} />} label="Settings" href="/settings" isDark={isDarkMode} />
          <DrawerLink icon={<User size={18} />} label="Profile" href="/account" isDark={isDarkMode} />
          <DrawerLink icon={<Headphones size={18} />} label="Customer Care" href="/support" isDark={isDarkMode} />
          <hr className={`my-2 ${isDarkMode ? 'border-[#333]' : 'border-gray-200'}`} />
          <button className="flex items-center gap-3 w-full p-3 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition text-sm font-black tracking-wide">
            <LogOut size={18} /> Logout
          </button>
        </div>
      </div>

      {/* --- HEADER (Clean Left Alignment & 5px height reduction) --- */}
      <header className={`sticky top-0 z-50 border-b transition-colors duration-300 ${headerBg}`}>
        <div className="flex items-center justify-between h-[60px] px-2 sm:px-3 max-w-7xl mx-auto">
          
          <div className="flex items-center gap-2">
            <button onClick={() => setIsDrawerOpen(true)} className={`p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition ${textColor}`}>
              <Menu size={20} />
            </button>

            <Link href="/" className="flex items-center gap-1.5 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center flex-shrink-0 bg-white/80 dark:bg-black/20 rounded-xl p-1 shadow-sm border border-gray-100 dark:border-white/10">
                 <img src="/logo.png" alt="AB Logo" className="w-full h-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
              </div>
              <div className="flex flex-col justify-center">
                <span className={`text-[22px] sm:text-[28px] font-black tracking-tighter leading-none ${isDarkMode ? 'text-[#D4AF37] drop-shadow-[0_0_5px_rgba(212,175,55,0.4)]' : 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-700 to-yellow-500 drop-shadow-sm'}`}>
                  Apna Bazar
                </span>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 pr-1">
            <button onClick={() => setIsDarkMode(!isDarkMode)} className={`p-1.5 rounded-full ${isDarkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-800'} hover:scale-110 transition`}>
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link href="/support" className={`hover:text-[#D4AF37] transition hidden sm:block ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              <Headphones size={20} />
            </Link>
            <Link href="/cart" className={`relative hover:text-[#D4AF37] transition group ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              <ShoppingBag size={20} />
              <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-[#FF3F6C] text-white text-[8px] flex items-center justify-center font-bold shadow-md">2</span>
            </Link>
          </div>
        </div>

        {/* SEARCH BAR + FILTER ICON */}
        <div className={`px-3 py-2 border-t ${isDarkMode ? 'border-[#222] bg-[#08090C]' : 'border-gray-100 bg-white'}`}>
          <div className="flex items-center gap-2 max-w-7xl mx-auto">
            <div className={`flex-1 flex items-center rounded-md px-3 py-2 border shadow-inner ${isDarkMode ? 'bg-[#1A1C23] border-[#333]' : 'bg-gray-100 border-gray-200'}`}>
              <Search size={16} className={textMuted} />
              <input type="text" placeholder="Search for Brands, Products..." className={`w-full ml-3 bg-transparent outline-none text-sm font-medium ${textColor} placeholder-${isDarkMode ? 'gray-500' : 'gray-400'}`} />
            </div>
            <button onClick={() => setIsFilterOpen(true)} className={`p-2 rounded-md border ${isDarkMode ? 'bg-[#1A1C23] border-[#333] text-gray-300' : 'bg-gray-100 border-gray-200 text-gray-600'} hover:text-[#D4AF37] transition shadow-sm`}>
              <SlidersHorizontal size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* --- STATIC VIP FEATURES --- */}
      <div className={`py-2 px-2 border-b flex justify-between items-center ${isDarkMode ? 'bg-[#11131A] border-[#222] text-gray-300' : 'bg-white border-gray-200 text-gray-600'} overflow-x-auto scrollbar-hide text-[8px] sm:text-[10px] font-bold uppercase tracking-wider`}>
         <span className="flex items-center gap-1 shrink-0 px-2"><Truck size={12} className="text-green-500"/> Free Shipping</span>
         <span className="text-gray-300 dark:text-gray-700">|</span>
         <span className="flex items-center gap-1 shrink-0 px-2"><RotateCcw size={12} className="text-blue-500"/> Easy Returns</span>
         <span className="text-gray-300 dark:text-gray-700">|</span>
         <span className="flex items-center gap-1 shrink-0 px-2"><ShieldCheck size={12} className="text-yellow-500"/> 100% Secure</span>
         <span className="text-gray-300 dark:text-gray-700">|</span>
         <span className="flex items-center gap-1 shrink-0 px-2"><Crown size={12} className="text-[#D4AF37]"/> VIP Support</span>
      </div>

      {/* --- AUTO-SCROLLING HERO BANNERS --- */}
      <div className="p-3 max-w-7xl mx-auto">
        <Link href={HERO_BANNERS[currentSlide].link} className="block relative w-full h-[180px] sm:h-[350px] md:h-[450px] rounded-xl overflow-hidden shadow-md group">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10" />
          {HERO_BANNERS.map((banner, index) => (
            <img key={banner.id} src={banner.img} loading="lazy" decoding="async" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`} alt={banner.title} />
          ))}
          <div className="relative z-20 h-full flex flex-col justify-center px-6 w-3/4">
            <p className="text-[#D4AF37] text-[9px] sm:text-xs uppercase tracking-widest font-bold mb-1 shadow-black drop-shadow-md transition-all">{HERO_BANNERS[currentSlide].sub}</p>
            <h1 className="font-black text-2xl sm:text-5xl text-white leading-tight drop-shadow-lg transition-all">{HERO_BANNERS[currentSlide].title}</h1>
            <div className="mt-4">
              <button className="bg-white text-black px-5 py-2 text-[10px] sm:text-xs uppercase font-bold rounded shadow-lg hover:bg-gray-100 transition">Shop Now</button>
            </div>
          </div>
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
            {HERO_BANNERS.map((_, idx) => (
              <div key={idx} className={`h-1.5 rounded-full transition-all ${idx === currentSlide ? 'w-6 bg-[#D4AF37]' : 'w-1.5 bg-white/50'}`} />
            ))}
          </div>
        </Link>
      </div>

      {/* --- OUR TOP BRANDS --- */}
      <section className={`px-4 py-5 mb-3 ${isDarkMode ? 'bg-[#11131A]' : 'bg-white'} shadow-sm`}>
        <div className="flex items-center justify-between mb-4 max-w-7xl mx-auto">
          <h2 className={`text-sm font-black uppercase tracking-wide ${textColor}`}>Our Top Brands</h2>
        </div>
        <div className="flex overflow-x-auto gap-4 pb-2 scrollbar-hide max-w-7xl mx-auto">
          {OUR_BRANDS.map((brand) => (
            <Link href={brand.link} key={brand.id} className="flex flex-col items-center flex-shrink-0 group">
              <div className={`w-[70px] h-[70px] rounded-2xl p-[1px] bg-gradient-to-tr from-gray-300 to-gray-100 dark:from-gray-700 dark:to-gray-500 shadow-md`}>
                <div className={`w-full h-full rounded-2xl flex items-center justify-center bg-white dark:bg-[#1A1C23] group-hover:scale-105 transition-transform duration-300`}>
                  <span className={`${brand.style} ${isDarkMode && !brand.style.includes('text-') ? 'text-white' : isDarkMode ? '' : !brand.style.includes('text-') ? 'text-black' : ''}`}>{brand.name}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* --- SHOP BY CATEGORY --- */}
      <section className={`px-4 py-5 mb-3 ${isDarkMode ? 'bg-[#11131A]' : 'bg-white'} shadow-sm mt-3`}>
        <div className="flex items-center justify-between mb-4 max-w-7xl mx-auto">
          <h2 className={`text-sm font-black uppercase tracking-wide ${textColor}`}>Shop By Category</h2>
        </div>
        <div className="flex overflow-x-auto gap-4 pb-2 scrollbar-hide max-w-7xl mx-auto">
          {CATEGORIES.map((cat) => (
            <Link href={cat.link} key={cat.id} className="flex flex-col items-center flex-shrink-0 group">
              <div className={`w-[65px] h-[65px] rounded-full p-0.5 ${isDarkMode ? 'bg-gradient-to-tr from-[#D4AF37] to-yellow-200' : 'bg-gradient-to-tr from-yellow-500 to-yellow-200'} shadow-md`}>
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-white dark:border-[#11131A]">
                  <img src={cat.img} alt={cat.name} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <span className={`text-[9px] mt-2 font-bold tracking-wide ${textColor}`}>{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* --- FLIPKART STYLE PRODUCT CAROUSELS (With White Card Badge Frame) --- */}
      <ProductCarousel title="Special Offer For Festival" subtitle="Premium Festive Wear" products={FESTIVAL_OFFERS} isDarkMode={isDarkMode} cardBg={cardBg} textColor={textColor} textMuted={textMuted} bgClass="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-[#2A2010] dark:to-[#1A120A]" />

      <ProductCarousel title="Freedom Fifty" subtitle="Top 50 Deals & Steals" products={FREEDOM_50} isDarkMode={isDarkMode} cardBg={cardBg} textColor={textColor} textMuted={textMuted} highlightBorder="border-orange-500 border-2" />

      <ProductCarousel title="Brands Under ₹599" subtitle="Pocket friendly fashion" products={UNDER_599} isDarkMode={isDarkMode} cardBg={cardBg} textColor={textColor} textMuted={textMuted} />

      {/* --- TRENDING PRODUCTS (With Add to Cart/Buy Now) --- */}
      <section className={`px-4 py-6 mb-3 ${isDarkMode ? 'bg-[#11131A]' : 'bg-white'} shadow-sm`}>
        <div className="flex items-center justify-between mb-4 max-w-7xl mx-auto">
          <h2 className={`text-lg font-black tracking-tight ${textColor}`}>Trending Products</h2>
          <Link href="/trending" className="text-blue-600 dark:text-[#D4AF37] text-[10px] font-bold uppercase">VIEW ALL</Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-7xl mx-auto">
          {TRENDING_PRODUCTS.map((product) => (
            <div key={product.id} className={`rounded-lg overflow-hidden border ${cardBg} flex flex-col shadow-sm`}>
              <Link href={`/product/${product.id}`} className="block relative flex-1">
                {product.tag && <span className="absolute top-0 left-0 z-10 text-[7px] font-bold px-2 py-1 text-white bg-gradient-to-r from-red-600 to-pink-500 rounded-br-lg shadow-sm">{product.tag}</span>}
                <div className={`aspect-[3/4] relative overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <img src={product.img} alt={product.name} loading="lazy" decoding="async" className={`w-full h-full object-cover transition-transform duration-500 ${product.inStock ? 'hover:scale-110' : 'grayscale opacity-70'}`} />
                  <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur text-black text-[8px] px-1.5 py-0.5 rounded-sm font-bold flex items-center gap-0.5 shadow-sm">
                    {product.rating} <Star size={8} className="fill-green-600 text-green-600" />
                  </div>
                </div>
                <div className="p-2">
                  <h3 className={`text-[10px] font-bold ${textMuted} uppercase tracking-wider`}>{product.brand}</h3>
                  <h4 className={`text-[11px] font-medium ${textColor} truncate mt-0.5`}>{product.name}</h4>
                  
                  {product.inStock ? (
                    <div className="flex items-center gap-1.5 mt-1.5">
                      <span className={`text-[13px] font-black ${textColor}`}>{product.price}</span>
                      <span className="text-[9px] text-gray-500 line-through">{product.oldPrice}</span>
                    </div>
                  ) : (
                    <p className="text-red-500 text-[10px] font-black mt-1.5 uppercase tracking-widest">Out of Stock</p>
                  )}
                </div>
              </Link>

              <div className={`p-2 pt-0 grid grid-cols-2 gap-1.5 ${isDarkMode ? 'bg-[#11131A]' : 'bg-white'}`}>
                <button disabled={!product.inStock} onClick={() => window.location.href='/cart'} className={`border text-[9px] py-2 rounded font-bold uppercase transition flex items-center justify-center gap-1 ${!product.inStock ? 'border-gray-300 text-gray-400 opacity-50 cursor-not-allowed' : isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}>
                  <ShoppingCart size={12} /> Cart
                </button>
                <button disabled={!product.inStock} onClick={() => window.location.href='/checkout'} className={`text-[9px] py-2 rounded font-bold uppercase transition flex items-center justify-center gap-1 shadow-sm ${!product.inStock ? 'bg-gray-300 text-gray-500 opacity-50 cursor-not-allowed dark:bg-gray-800' : 'bg-[#D4AF37] hover:bg-[#B38F2B] text-black'}`}>
                  <Zap size={12} /> Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- PROFESSIONAL FOOTER (With Baharagora Address) --- */}
      <footer className={`${isDarkMode ? 'bg-[#0B0C10] border-[#222]' : 'bg-gray-900 border-gray-900'} border-t pt-10 pb-20 px-5 text-gray-300 mt-6`}>
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="w-16 h-16 mb-3 flex items-center justify-center">
             <img src="/logo.png" alt="AB Logo" loading="lazy" decoding="async" className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]" />
          </div>
          <h3 className="font-serif text-[20px] font-black text-[#D4AF37] tracking-widest mb-6 uppercase">Why Shop With Apna Bazar?</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-3xl mb-8">
            <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10"><CheckCircle2 size={24} className="text-green-500" /><span className="text-[10px] uppercase font-bold text-white">100% Original</span><span className="text-[8px] text-gray-400">Guaranteed</span></div>
            <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10"><RotateCcw size={24} className="text-blue-400" /><span className="text-[10px] uppercase font-bold text-white">Easy Returns</span><span className="text-[8px] text-gray-400">Within 7 Days</span></div>
            <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10"><ShieldCheck size={24} className="text-yellow-500" /><span className="text-[10px] uppercase font-bold text-white">Secure Pay</span><span className="text-[8px] text-gray-400">Multiple Options</span></div>
            <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10"><Headphones size={24} className="text-[#D4AF37]" /><span className="text-[10px] uppercase font-bold text-white">24/7 Support</span><span className="text-[8px] text-gray-400">Always Here</span></div>
          </div>
          
          <div className="flex gap-4 text-[10px] font-bold uppercase tracking-wider mb-6">
            <Link href="/about" className="hover:text-[#D4AF37]">About Us</Link>
            <Link href="/contact" className="hover:text-[#D4AF37]">Contact</Link>
            <Link href="/terms" className="hover:text-[#D4AF37]">Terms</Link>
          </div>

          <div className="flex items-center gap-2 text-gray-400 mb-6 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <MapPin size={16} className="text-[#D4AF37]" />
            <span className="text-[10px] uppercase tracking-wider font-bold">Our Shop at Baharagora, Jharkhand 832191</span>
          </div>

          <p className="text-[9px] text-gray-600 tracking-widest uppercase">© 2026 APNA BAZAR. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>

      {/* --- BOTTOM NAVIGATION --- */}
      <nav className={`fixed bottom-0 left-0 right-0 z-50 ${isDarkMode ? 'bg-[#11131A] border-[#222]' : 'bg-white border-gray-200'} border-t shadow-[0_-5px_15px_rgba(0,0,0,0.05)] md:hidden pb-safe`}>
        <div className="flex justify-between items-center h-[60px] px-2 sm:px-4">
          
          <Link href="/" className="flex flex-col items-center gap-1 text-[#D4AF37] w-1/5">
            <HomeIcon size={20} />
            <span className="text-[8px] font-bold uppercase tracking-wider">Home</span>
          </Link>
          
          <Link href="/categories" className={`flex flex-col items-center gap-1 ${textMuted} hover:text-[#D4AF37] w-1/5`}>
            <Grid2X2 size={20} />
            <span className="text-[8px] font-bold uppercase tracking-wider">Category</span>
          </Link>
          
          <Link href="/reels" className="flex flex-col items-center w-1/5 group">
            <div className="bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 p-1.5 rounded-lg shadow-md group-hover:scale-110 transition-transform mb-0.5">
               <Film size={18} className="text-white fill-white" />
            </div>
            <span className={`text-[8px] font-bold uppercase tracking-wider ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Reels</span>
          </Link>

          <Link href="/wishlist" className={`flex flex-col items-center gap-1 ${textMuted} hover:text-[#D4AF37] w-1/5 relative`}>
            <div className="relative">
              <Heart size={20} />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#FF3F6C] text-white text-[8px] flex items-center justify-center font-bold">1</span>
            </div>
            <span className="text-[8px] font-bold uppercase tracking-wider">Wishlist</span>
          </Link>
          
          <Link href="/orders" className={`flex flex-col items-center gap-1 ${textMuted} hover:text-[#D4AF37] w-1/5`}>
            <Package size={20} />
            <span className="text-[8px] font-bold uppercase tracking-wider">Orders</span>
          </Link>

        </div>
      </nav>

    </div>
  );
}

// Drawer Link Component
function DrawerLink({ icon, label, href, badge, isDark }: { icon: React.ReactNode, label: string, href: string, badge?: string, isDark: boolean }) {
  return (
    <Link href={href} className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-[#1A1C23] transition group">
      <div className={`flex items-center gap-3 text-sm font-black tracking-wide ${isDark ? 'text-gray-100' : 'text-gray-900'} group-hover:text-[#D4AF37]`}>
        {icon} {label}
      </div>
      <div className="flex items-center gap-2">
        {badge && <span className="bg-[#FF3F6C] text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold">{badge}</span>}
        <ChevronRight size={14} className="text-gray-400" />
      </div>
    </Link>
  );
}

// Flipkart Style Product Carousel with White Brand Pill Frame at Bottom
function ProductCarousel({ title, subtitle, products, isDarkMode, cardBg, textColor, textMuted, bgClass = '', highlightBorder = '' }: any) {
  const sectionBg = bgClass ? bgClass : (isDarkMode ? 'bg-[#11131A]' : 'bg-white');
  
  return (
    <section className={`py-5 mb-3 ${sectionBg} shadow-sm border-y ${isDarkMode ? 'border-[#222]' : 'border-gray-100'}`}>
      <div className="flex items-center justify-between mb-2 px-4 max-w-7xl mx-auto">
        <div>
          <h2 className={`text-lg font-black tracking-tight ${textColor}`}>{title}</h2>
          {subtitle && <p className={`text-[10px] uppercase font-bold tracking-widest ${isDarkMode ? 'text-[#D4AF37]' : 'text-orange-600'}`}>{subtitle}</p>}
        </div>
        <Link href={`/collections/${title.toLowerCase().replace(/ /g, '-')}`} className={`bg-black dark:bg-white text-white dark:text-black text-[9px] font-bold px-3 py-1.5 rounded-full shadow-md transition`}>VIEW ALL</Link>
      </div>
      
      <div className="flex overflow-x-auto gap-3 px-4 pt-3 pb-4 scrollbar-hide max-w-7xl mx-auto snap-x snap-mandatory">
        {products.map((product: any) => (
          <div key={product.id} className={`w-[140px] flex-shrink-0 snap-start rounded-xl overflow-hidden shadow-sm flex flex-col relative border ${cardBg} ${highlightBorder}`}>
            
            <Link href={`/product/${product.id}`} className={`block relative flex-1`}>
              
              {!product.inStock && (
                <div className="absolute inset-0 bg-white/60 dark:bg-black/60 z-20 flex items-center justify-center backdrop-blur-[1px]">
                  <span className="bg-black text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest rounded-sm rotate-[-15deg] shadow-lg border border-white">Sold Out</span>
                </div>
              )}
              {product.tag && <span className={`absolute top-0 left-0 z-10 text-[7px] font-bold px-2 py-0.5 text-white bg-gradient-to-r from-red-600 to-orange-500 rounded-br-lg shadow-sm`}>{product.tag}</span>}
              
              <div className={`aspect-[4/5] relative overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <img src={product.img} alt={product.name} loading="lazy" decoding="async" className={`w-full h-full object-cover transition-transform duration-500 ${product.inStock ? 'hover:scale-110' : 'grayscale'}`} />
              </div>

              {/* Flipkart Style White Pill Card Frame for Brand/Logo */}
              <div className="p-2 text-center bg-white dark:bg-[#1A1C23] border-t border-gray-100 dark:border-[#333]">
                {product.logoText && (
                  <div className="inline-block bg-white dark:bg-black px-2 py-0.5 rounded shadow-sm border border-gray-200 dark:border-gray-700 mb-1">
                    <span className="text-[9px] font-black tracking-widest text-black dark:text-white uppercase">{product.logoText}</span>
                  </div>
                )}
                <h4 className={`text-[10px] font-bold text-gray-800 dark:text-gray-200 truncate`}>{product.name}</h4>
                <p className={`text-[10px] font-black text-orange-600 dark:text-[#D4AF37] mt-0.5`}>{product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

