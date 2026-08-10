'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Search, ShoppingBag, Truck, RotateCcw, 
  ShieldCheck, Headphones, Menu, X, ChevronRight, Star, 
  Home as HomeIcon, Grid2X2, Heart, User, Award, CreditCard,
  CheckCircle2, PackageCheck
} from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // CATEGORIES
  const CATEGORIES = [
    { id: 'men', name: 'MEN', img: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=200' },
    { id: 'women', name: 'WOMEN', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=200' },
    { id: 'kids', name: 'KIDS', img: 'https://images.unsplash.com/photo-1519241047957-be31d7379a5d?auto=format&fit=crop&q=80&w=200' },
    { id: 'footwear', name: 'FOOTWEAR', img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=200' },
    { id: 'bags', name: 'BAGS', img: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=200' },
    { id: 'accessories', name: 'ACCESSORIES', img: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=200' },
  ];

  // TRENDING PRODUCTS
  const TRENDING_PRODUCTS = [
    { id: '1', name: 'Men Casual Shirt', price: '₹1,299', oldPrice: '₹1,699', rating: '4.8', tag: '-20%', tagColor: 'bg-red-600', img: 'https://images.unsplash.com/photo-1596755094514-f87e32f85e23?auto=format&fit=crop&q=80&w=400' },
    { id: '2', name: 'Women Party Dress', price: '₹1,799', oldPrice: '₹2,399', rating: '4.9', tag: '', tagColor: '', img: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=400' },
    { id: '3', name: 'Denim Jacket', price: '₹2,499', oldPrice: '₹3,099', rating: '4.7', tag: 'NEW', tagColor: 'bg-[#D4AF37] text-black', img: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&q=80&w=400' },
    { id: '4', name: 'Kids T-Shirt', price: '₹499', oldPrice: '₹799', rating: '4.5', tag: '', tagColor: '', img: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&q=80&w=400' },
  ];

  // PRODUCTS BELOW BRANDS (JUST DROPPED)
  const NEW_ARRIVALS = [
    { id: '5', name: 'Luxury Handbag', price: '₹3,499', oldPrice: '₹4,999', rating: '4.9', tag: 'HOT', tagColor: 'bg-orange-500', img: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=400' },
    { id: '6', name: 'Classic Sneakers', price: '₹1,999', oldPrice: '₹2,499', rating: '4.6', tag: '', tagColor: '', img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=400' },
    { id: '7', name: 'Premium Aviators', price: '₹899', oldPrice: '₹1,299', rating: '4.8', tag: '-30%', tagColor: 'bg-red-600', img: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=400' },
    { id: '8', name: 'Gold Dial Watch', price: '₹4,299', oldPrice: '₹5,999', rating: '4.9', tag: 'VIP', tagColor: 'bg-[#D4AF37] text-black', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400' },
  ];

  return (
    <main className="min-h-screen bg-[#08090C] text-white font-sans selection:bg-[#D4AF37] selection:text-black pb-[70px]">
      
      {/* 1. NAVBAR (WITH BRAND LOGO ADDED) */}
      <header className="sticky top-0 z-50 bg-[#08090C]/95 backdrop-blur-md border-b border-[#222]">
        <div className="flex items-center justify-between h-[60px] px-4 max-w-7xl mx-auto">
          
          <div className="flex items-center gap-3 sm:gap-4">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white focus:outline-none lg:hidden hover:text-[#D4AF37] transition">
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
            
            {/* BRAND LOGO & NAME */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center overflow-hidden">
                 {/* Make sure you save the AB VIP Crown logo as logo.png in public folder */}
                 <img src="/logo.png" alt="AB Logo" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" onError={(e) => {e.currentTarget.style.display='none'}} />
                 <ShoppingBag size={24} className="text-[#D4AF37] absolute -z-10" /> 
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-[20px] md:text-2xl font-serif text-[#D4AF37] tracking-wide leading-none group-hover:scale-105 transition-transform origin-left">Apna Bazar</span>
                <span className="text-[5px] md:text-[7px] tracking-[0.3em] text-gray-400 mt-1 uppercase leading-none">Fashion For Every You</span>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-4 sm:gap-5">
            <Search size={22} className="text-gray-200 hover:text-[#D4AF37] hover:scale-110 transition cursor-pointer" />
            <User size={22} className="text-gray-200 hidden sm:block hover:text-[#D4AF37] hover:scale-110 transition cursor-pointer" />
            <div className="relative cursor-pointer group">
              <ShoppingBag size={22} className="text-gray-200 group-hover:text-[#D4AF37] group-hover:scale-110 transition" />
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#D4AF37] text-black text-[9px] flex items-center justify-center font-bold">2</span>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="absolute top-[60px] left-0 w-full bg-[#08090C] border-b border-[#222] p-5 shadow-2xl z-40 lg:hidden">
          <div className="grid gap-4 text-xs uppercase tracking-widest font-semibold text-gray-300">
            <Link href="/men" className="hover:text-[#D4AF37] transition">Men</Link>
            <Link href="/women" className="hover:text-[#D4AF37] transition">Women</Link>
            <Link href="/kids" className="hover:text-[#D4AF37] transition">Kids</Link>
            <Link href="/sale" className="text-[#D4AF37] hover:scale-105 origin-left transition">Sale</Link>
          </div>
        </div>
      )}

      {/* 2. HERO SECTION (Reduced Height for Better Mobile Visibility) */}
      <section className="relative w-full h-[280px] sm:h-[350px] md:h-[450px] overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090C] via-[#08090C]/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511280204269-80c5a9ebb546?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat opacity-60 group-hover:scale-105 transition-transform duration-1000" />
        
        <div className="relative z-20 h-full flex flex-col justify-center px-5 max-w-7xl mx-auto">
          <p className="text-[#D4AF37] text-[8px] md:text-[11px] uppercase tracking-[3px] font-bold mb-2">
            NEW SEASON • NEW STYLE
          </p>
          <h1 className="font-serif text-[32px] sm:text-5xl leading-[1.05] text-white font-medium">
            FASHION <br /> THAT <br /> DEFINES <br />
            <span className="text-[#D4AF37] italic">YOU</span>
          </h1>
          <p className="text-gray-300 text-[9px] md:text-xs max-w-[220px] mt-2 leading-relaxed">
            Discover premium collections that elevate your style.
          </p>
          <div className="flex gap-3 mt-5">
            <button className="bg-[#D4AF37] text-black px-5 py-2 text-[8px] md:text-[10px] uppercase tracking-widest font-bold rounded-sm hover:bg-white hover:scale-105 transition-all shadow-[0_0_10px_rgba(212,175,55,0.3)]">
              SHOP NOW
            </button>
            <button className="border border-[#D4AF37] text-[#D4AF37] px-5 py-2 text-[8px] md:text-[10px] uppercase tracking-widest font-bold rounded-sm bg-black/20 backdrop-blur-sm hover:bg-[#D4AF37] hover:text-black hover:scale-105 transition-all">
              EXPLORE
            </button>
          </div>
        </div>
      </section>

      {/* 3. HIGHLIGHT FEATURES BAR (Changed to 5 DAYS RETURN) */}
      <section className="px-4 max-w-7xl mx-auto -mt-5 relative z-30">
        <div className="bg-[#11131A] border border-[#222] rounded-xl flex items-center justify-between p-3 sm:p-5 shadow-2xl">
          <div className="flex items-center gap-2 group">
            <Truck size={16} className="text-[#D4AF37] group-hover:scale-110 transition-transform" />
            <div>
              <p className="text-[7px] sm:text-[10px] font-bold text-white uppercase tracking-wide leading-tight">FREE SHIPPING</p>
              <p className="text-[5px] sm:text-[8px] text-gray-500 mt-0.5">On orders above ₹999</p>
            </div>
          </div>
          <div className="w-[1px] h-6 bg-[#333]"></div>
          <div className="flex items-center gap-2 group">
            <RotateCcw size={16} className="text-[#D4AF37] group-hover:-rotate-180 transition-transform duration-500" />
            <div>
              <p className="text-[7px] sm:text-[10px] font-bold text-white uppercase tracking-wide leading-tight">EASY RETURNS</p>
              <p className="text-[5px] sm:text-[8px] text-[#D4AF37] mt-0.5 font-bold">Within 5 Days</p>
            </div>
          </div>
          <div className="w-[1px] h-6 bg-[#333]"></div>
          <div className="flex items-center gap-2 group">
            <ShieldCheck size={16} className="text-[#D4AF37] group-hover:scale-110 transition-transform" />
            <div>
              <p className="text-[7px] sm:text-[10px] font-bold text-white uppercase tracking-wide leading-tight">100% SECURE</p>
              <p className="text-[5px] sm:text-[8px] text-gray-500 mt-0.5">Secure Payments</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SHOP BY CATEGORY (Compact sizes) */}
      <section className="px-4 py-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[11px] font-bold uppercase tracking-widest text-white">SHOP BY CATEGORY</h2>
          <Link href="/categories" className="text-[#D4AF37] text-[8px] font-bold flex items-center gap-1 uppercase tracking-widest hover:translate-x-1 transition-transform">
            VIEW ALL <ChevronRight size={10} />
          </Link>
        </div>
        <div className="flex overflow-x-auto gap-3.5 pb-2 scrollbar-hide">
          {CATEGORIES.map((cat) => (
            <Link href={`/category/${cat.id}`} key={cat.id} className="flex flex-col items-center flex-shrink-0 group">
              <div className="w-[60px] h-[60px] sm:w-[72px] sm:h-[72px] rounded-full bg-[#1A1A1A] overflow-hidden border border-[#333] group-hover:border-[#D4AF37] group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
              </div>
              <span className="text-[8px] mt-2 font-bold tracking-widest text-gray-300 uppercase group-hover:text-[#D4AF37] transition-colors">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. 3 DUMMY PROMO BANNERS (Horizontal Scroll on Mobile, Grid on Desktop) */}
      <section className="px-4 pb-8 max-w-7xl mx-auto">
        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-3.5 pb-2 scrollbar-hide">
          
          {/* Banner 1: Summer */}
          <div className="relative rounded-lg overflow-hidden border border-[#333] bg-[#111] min-w-[260px] md:min-w-0 h-[140px] md:h-[160px] p-4 flex flex-col justify-center group cursor-pointer flex-shrink-0">
            <div className="relative z-10">
              <h3 className="font-serif text-[18px] text-[#D4AF37] leading-[1.1] group-hover:scale-105 origin-left transition-transform">SUMMER <br /> COLLECTION</h3>
              <p className="text-[8px] text-gray-300 mt-1.5 mb-2">Light. Stylish. Yours.</p>
              <button className="bg-[#D4AF37] text-black text-[7px] font-bold px-3 py-1.5 uppercase tracking-widest rounded-sm hover:bg-white transition-colors">SHOP NOW</button>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-[55%] bg-[url('https://images.unsplash.com/photo-1523359346063-d879354c0ea5?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-left opacity-50 group-hover:scale-105 transition-transform duration-700"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#111] via-[#111]/80 to-transparent"></div>
          </div>

          {/* Banner 2: Limited Time */}
          <div className="relative rounded-lg overflow-hidden border border-[#333] bg-[#11131A] min-w-[260px] md:min-w-0 h-[140px] md:h-[160px] p-4 flex flex-col justify-center group cursor-pointer flex-shrink-0">
            <p className="text-[#D4AF37] text-[7px] uppercase tracking-widest font-bold mb-1">LIMITED TIME OFFER</p>
            <h3 className="text-lg font-serif text-white mb-1 tracking-wide group-hover:scale-105 origin-left transition-transform">EXTRA 20% OFF</h3>
            <p className="text-[7px] text-gray-400 mb-2 uppercase">ON PREPAID ORDERS</p>
            <div className="flex gap-1.5 mb-2">
              <div className="bg-[#08090C] border border-[#222] px-1.5 py-1 rounded flex flex-col items-center min-w-[28px] group-hover:border-[#D4AF37]/50 transition-colors">
                <span className="text-[10px] font-bold text-white leading-none">02</span><span className="text-[5px] text-gray-500 uppercase mt-0.5">Days</span>
              </div>
              <div className="bg-[#08090C] border border-[#222] px-1.5 py-1 rounded flex flex-col items-center min-w-[28px] group-hover:border-[#D4AF37]/50 transition-colors">
                <span className="text-[10px] font-bold text-white leading-none">14</span><span className="text-[5px] text-gray-500 uppercase mt-0.5">Hrs</span>
              </div>
              <div className="bg-[#08090C] border border-[#222] px-1.5 py-1 rounded flex flex-col items-center min-w-[28px] group-hover:border-[#D4AF37]/50 transition-colors">
                <span className="text-[10px] font-bold text-[#D4AF37] leading-none">45</span><span className="text-[5px] text-gray-500 uppercase mt-0.5">Mins</span>
              </div>
            </div>
          </div>

          {/* Banner 3: VIP Exclusive (New Dummy Banner) */}
          <div className="relative rounded-lg overflow-hidden border border-[#D4AF37]/30 bg-gradient-to-br from-[#1A160C] to-[#0A0805] min-w-[260px] md:min-w-0 h-[140px] md:h-[160px] p-4 flex flex-col justify-center group cursor-pointer flex-shrink-0">
            <div className="relative z-10 flex flex-col items-center text-center">
              <Award size={24} className="text-[#D4AF37] mb-2 group-hover:scale-125 transition-transform duration-500" />
              <h3 className="font-serif text-[16px] text-white tracking-widest uppercase">VIP EXCLUSIVE</h3>
              <p className="text-[8px] text-[#D4AF37] mt-1 mb-3">Premium Member Benefits</p>
              <button className="border border-[#D4AF37] text-[#D4AF37] text-[7px] font-bold px-4 py-1.5 uppercase tracking-widest rounded-sm hover:bg-[#D4AF37] hover:text-black transition-colors">EXPLORE</button>
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1)_0%,transparent_70%)] opacity-50 group-hover:opacity-100 transition-opacity"></div>
          </div>

        </div>
      </section>

      {/* 6. TRENDING NOW */}
      <section className="px-4 pb-10 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[11px] font-bold uppercase tracking-widest text-white">TRENDING NOW</h2>
          <Link href="/trending" className="text-[#D4AF37] text-[8px] font-bold flex items-center gap-1 uppercase tracking-widest hover:translate-x-1 transition-transform">
            VIEW ALL <ChevronRight size={10} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {TRENDING_PRODUCTS.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id} className="bg-[#11131A] rounded-xl overflow-hidden border border-[#222] hover:border-[#D4AF37]/50 transition-colors group relative shadow-lg">
              {product.tag && (
                <span className={`absolute top-2 left-2 z-10 text-[6px] font-bold px-1.5 py-0.5 rounded-sm ${product.tagColor}`}>
                  {product.tag}
                </span>
              )}
              <div className="aspect-[4/4.5] bg-[#1A1C23] relative overflow-hidden">
                <img src={product.img} alt={product.name} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-2.5">
                <h3 className="text-[10px] font-semibold text-white truncate group-hover:text-[#D4AF37] transition-colors">{product.name}</h3>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="text-[11px] font-bold text-white">{product.price}</span>
                  <span className="text-[8px] text-gray-500 line-through">{product.oldPrice}</span>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <Star size={9} fill="#D4AF37" className="text-[#D4AF37]" />
                  <span className="text-[8px] text-gray-400">{product.rating}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. BRANDS SECTION */}
      <section className="bg-[#050608] border-y border-[#222] py-4 mb-8 shadow-inner">
        <div className="px-4 max-w-7xl mx-auto flex justify-between items-center text-gray-500">
          <span className="italic text-xs font-black hover:text-white hover:scale-110 transition-all cursor-pointer">NIKE</span>
          <span className="text-xs lowercase tracking-tighter font-bold hover:text-white hover:scale-110 transition-all cursor-pointer">adidas</span>
          <span className="font-serif text-xs tracking-widest uppercase hover:text-white hover:scale-110 transition-all cursor-pointer">ZARA</span>
          <span className="text-xs italic font-bold hover:text-white hover:scale-110 transition-all cursor-pointer">H&M</span>
          <span className="font-black text-xs tracking-tighter hover:text-white hover:scale-110 transition-all cursor-pointer">PUMA</span>
          <span className="text-[9px] font-bold bg-gray-500 text-black px-1 hover:bg-white hover:scale-110 transition-all cursor-pointer rounded-sm">Levi's</span>
        </div>
      </section>

      {/* 8. PRODUCTS BELOW BRANDS (JUST DROPPED) */}
      <section className="px-4 pb-12 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[11px] font-bold uppercase tracking-widest text-white">JUST DROPPED</h2>
          <Link href="/new-arrivals" className="text-[#D4AF37] text-[8px] font-bold flex items-center gap-1 uppercase tracking-widest hover:translate-x-1 transition-transform">
            VIEW ALL <ChevronRight size={10} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {NEW_ARRIVALS.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id} className="bg-[#11131A] rounded-xl overflow-hidden border border-[#222] hover:border-[#D4AF37]/50 transition-colors group relative shadow-lg">
              {product.tag && (
                <span className={`absolute top-2 left-2 z-10 text-[6px] font-bold px-1.5 py-0.5 rounded-sm ${product.tagColor}`}>
                  {product.tag}
                </span>
              )}
              <div className="aspect-[4/4.5] bg-[#1A1C23] relative overflow-hidden">
                <img src={product.img} alt={product.name} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-2.5">
                <h3 className="text-[10px] font-semibold text-white truncate group-hover:text-[#D4AF37] transition-colors">{product.name}</h3>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="text-[11px] font-bold text-white">{product.price}</span>
                  <span className="text-[8px] text-gray-500 line-through">{product.oldPrice}</span>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <Star size={9} fill="#D4AF37" className="text-[#D4AF37]" />
                  <span className="text-[8px] text-gray-400">{product.rating}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 9. MYNTRA / FLIPKART STYLE FOOTER ("Why Shop With Apna Bazar") */}
      <footer className="bg-[#050608] border-t border-[#222] pt-10 pb-20 px-5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Section 1: Why Shop With Us */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 flex items-center justify-center">
                 <img src="/logo.png" alt="AB Logo" className="w-full h-full object-contain" onError={(e) => {e.currentTarget.style.display='none'}} />
                 <ShoppingBag size={18} className="text-[#D4AF37] absolute -z-10" /> 
              </div>
              <h3 className="font-serif text-[18px] text-[#D4AF37] tracking-wide">Apna Bazar</h3>
            </div>
            <h4 className="text-[10px] font-bold text-white uppercase tracking-widest mb-3">Why Shop With Apna Bazar?</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-green-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] font-bold text-gray-200">100% ORIGINAL guarantee</p>
                  <p className="text-[8px] text-gray-500">for all products at apna bazar</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <RotateCcw size={14} className="text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] font-bold text-gray-200">Return within 5 Days</p>
                  <p className="text-[8px] text-gray-500">of receiving your order</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <PackageCheck size={14} className="text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] font-bold text-gray-200">Free Delivery</p>
                  <p className="text-[8px] text-gray-500">on orders above ₹999</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h4 className="text-[10px] font-bold text-white uppercase tracking-widest mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2 text-[9px] text-gray-400">
              <li><Link href="/about" className="hover:text-[#D4AF37] transition">About Us</Link></li>
              <li><Link href="/faq" className="hover:text-[#D4AF37] transition">FAQ</Link></li>
              <li><Link href="/terms" className="hover:text-[#D4AF37] transition">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-[#D4AF37] transition">Privacy Policy</Link></li>
              <li><Link href="/shipping" className="hover:text-[#D4AF37] transition">Shipping Policy</Link></li>
            </ul>
          </div>

          {/* Section 3: Contact */}
          <div>
            <h4 className="text-[10px] font-bold text-white uppercase tracking-widest mb-4">Customer Support</h4>
            <ul className="flex flex-col gap-2 text-[9px] text-gray-400">
              <li>Call us: +91 98765 43210</li>
              <li>Email: support@apnabazar.com</li>
              <li className="mt-2 text-white font-bold">100% Secure Payments</li>
              <li className="flex gap-2 mt-1 opacity-70">
                <CreditCard size={20} />
                <span className="border border-gray-600 px-1 rounded flex items-center justify-center">UPI</span>
                <span className="border border-gray-600 px-1 rounded flex items-center justify-center">COD</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-[#222] mt-8 pt-4 flex items-center justify-center">
          <p className="text-[8px] text-gray-600 tracking-wider">© 2026 APNA BAZAR. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>

      {/* 10. MOBILE BOTTOM NAVIGATION BAR */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#08090C] border-t border-[#222] md:hidden shadow-[0_-5px_15px_rgba(0,0,0,0.5)]">
        <div className="flex justify-around items-center h-[56px] pb-1">
          <Link href="/" className="flex flex-col items-center gap-1 text-[#D4AF37] hover:scale-105 transition-transform">
            <HomeIcon size={20} />
            <span className="text-[7px] uppercase tracking-widest font-bold">HOME</span>
          </Link>
          <Link href="/categories" className="flex flex-col items-center gap-1 text-gray-500 hover:text-[#D4AF37] hover:scale-105 transition-all">
            <Grid2X2 size={20} />
            <span className="text-[7px] uppercase tracking-widest font-medium">CATEGORIES</span>
          </Link>
          <Link href="/wishlist" className="flex flex-col items-center gap-1 text-gray-500 relative hover:text-[#D4AF37] hover:scale-105 transition-all">
            <div className="relative">
              <Heart size={20} />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#D4AF37] text-black text-[8px] flex items-center justify-center font-bold">2</span>
            </div>
            <span className="text-[7px] uppercase tracking-widest font-medium">WISHLIST</span>
          </Link>
          <Link href="/account" className="flex flex-col items-center gap-1 text-gray-500 hover:text-[#D4AF37] hover:scale-105 transition-all">
            <User size={20} />
            <span className="text-[7px] uppercase tracking-widest font-medium">ACCOUNT</span>
          </Link>
          <Link href="/cart" className="flex flex-col items-center gap-1 text-gray-500 relative hover:text-[#D4AF37] hover:scale-105 transition-all">
            <div className="relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#D4AF37] text-black text-[8px] flex items-center justify-center font-bold">2</span>
            </div>
            <span className="text-[7px] uppercase tracking-widest font-medium">CART</span>
          </Link>
        </div>
      </nav>

    </main>
  );
}
