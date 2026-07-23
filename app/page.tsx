"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Sparkles, 
  ChevronRight, 
  CheckCircle2, 
  ShieldCheck, 
  Feather, 
  Clock
} from "lucide-react";

// Mock Preview Collection Data
const COLLECTION_PREVIEW = [
  {
    id: 1,
    name: "The Sovereign Double-Breasted Suit",
    category: "Classic Tailoring",
    fabric: "100% Super 150s Italian Wool",
    color: "Deep Navy",
    tagline: "Tailored to command authority without raising a voice.",
    price: "PKR 34,999",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "The Grand Estate Dinner Jacket",
    category: "Evening Formal",
    fabric: "Midnight Velvet & Silk Lapels",
    color: "Charcoal & Gold Detail",
    tagline: "Designed for moments that require quiet magnificence.",
    price: "PKR 29,999",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "The Heritage Tweed Ensemble",
    category: "Bespoke Outerwear",
    fabric: "Handwoven Houndstooth Wool",
    color: "Rich Brown & Gold Accent",
    tagline: "An inheritance of class passed down through generations.",
    price: "PKR 24,999",
    image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "The Ivory Heirloom Blazer",
    category: "Summer Tailoring",
    fabric: "Breathable Irish Linen & Silk Blend",
    color: "Ivory White",
    tagline: "Subtle elegance for warm afternoons and garden soirees.",
    price: "PKR 31,999",
    image: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "The Gurkha Polo Edit",
    category: "Smart Casual Tailoring",
    fabric: "Tailored Cotton Polo & Gurkha Trousers",
    color: "Stone Beige & Deep Navy",
    tagline: "Relaxed refinement for warm-weather dressing with a sharper silhouette.",
    price: "PKR 15,999",
    image: "/more-products/product4.png",
  },
];

const MORE_PRODUCTS = [
  {
    id: 1,
    title: "The Executive Close-Up",
    description: "A front-facing tailoring shot that highlights the lapel, tie, and silhouette.",
    image: "/more-products/product1.jpeg",
  },
  {
    id: 2,
    title: "The Atelier Label",
    description: "A premium lining detail image that reinforces the handcrafted identity of the brand.",
    image: "/more-products/product2.jpeg",
  },
  {
    id: 3,
    title: "The Signature Finish",
    description: "A darker label detail suitable for a moodier, luxury editorial presentation.",
    image: "/more-products/product3.jpeg",
  },
];

export default function AlvisLandingPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<typeof COLLECTION_PREVIEW[0] | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-alvi-navy text-alvi-ivory font-sans antialiased selection:bg-alvi-gold selection:text-alvi-navy">
      
      {/* --- TOP BRAND BAR --- */}
      <div className="bg-alvi-navy/90 border-b border-white/20 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-serif text-2xl tracking-[0.25em] font-bold text-alvi-ivory">
              ALVI’S
            </span>
            <span className="text-[9px] uppercase tracking-[0.35em] text-white/80 font-medium">
              Wear the Legacy
            </span>
          </div>

          <nav className="hidden md:flex space-x-8 text-xs tracking-[0.2em] uppercase text-gray-300">
            <a href="#aesthetic" className="hover:text-white transition">The Aesthetic</a>
            <a href="#collection" className="hover:text-white transition">Collection Preview</a>
            <a href="#pillars" className="hover:text-white transition">Philosophy</a>
          </nav>

          <a 
            href="#vip-access"
            className="px-5 py-2 text-xs uppercase tracking-[0.2em] border border-white/60 text-white hover:bg-white/10 hover:text-white transition font-medium"
          >
            VIP Waitlist
          </a>
        </div>
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-center px-6 overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto z-10 space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 border border-white/30 bg-alvi-navy/60 backdrop-blur-sm text-white text-xs tracking-[0.25em] uppercase rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Debut Collection • Launching Soon</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-wider leading-tight text-alvi-ivory">
            Old Money Elegance <br />
            <span className="italic font-normal text-white">For The Modern Era</span>
          </h1>

          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
            Reinventing tailored menswear for those who appreciate restraint, heritage, and timeless perfection. Dressed not to impress—dressed simply to be.
          </p>

          {/* Email Waitlist Form */}
          <div id="vip-access" className="pt-6 max-w-md mx-auto">
            {!submitted ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email for private access"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-alvi-navy/80 border border-white/30 text-alvi-ivory px-4 py-3 text-sm focus:outline-none focus:border-white flex-1 placeholder:text-gray-500 placeholder:text-xs tracking-wider"
                />
                <button
                  type="submit"
                  className="bg-white text-alvi-navy font-semibold px-6 py-3 text-xs uppercase tracking-[0.2em] transition flex items-center justify-center gap-2 hover:bg-white/90"
                >
                  <span>Join List</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="p-4 border border-white/40 bg-white/10 text-white flex items-center justify-center gap-3">
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-xs uppercase tracking-widest font-medium">
                  You are registered for private launch invitations.
                </span>
              </div>
            )}
            <p className="text-[10px] text-gray-400 mt-2 tracking-widest uppercase">
              Limited Tailored Bespoke Batches Upon Launch
            </p>
          </div>
        </div>
      </section>

      {/* --- BRAND MANIFESTO / BANNER --- */}
      <section id="aesthetic" className="py-20 bg-alvi-charcoal/50 border-y border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <blockquote className="font-serif text-2xl md:text-3xl italic text-alvi-ivory leading-relaxed">
            &ldquo;Old money never announces itself. The suit does not make the man; the man finds himself in the suit.&rdquo;
          </blockquote>
          <p className="text-xs uppercase tracking-[0.3em] text-white/80 pt-2">
            — The Alvi’s Manifesto
          </p>
        </div>
      </section>

      {/* --- COLLECTION PREVIEW --- */}
      <section id="collection" className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-white/80 block mb-2">
              Curated Masterpieces
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white">
              Collection Preview
            </h2>
          </div>
          <p className="text-xs text-gray-400 max-w-md tracking-wider leading-relaxed">
            Explore a sneak peek into our debut line of bespoke suits and blazers. Tailored using premium natural textiles with exquisite craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {COLLECTION_PREVIEW.map((item) => (
            <div 
              key={item.id}
              className={`group border border-white/20 bg-alvi-navy/40 overflow-hidden hover:border-white/60 transition duration-300 flex flex-col justify-between ${
                item.id === 5 ? "lg:col-span-2 lg:max-w-xl lg:mx-auto" : ""
              }`}
            >
              <div className="relative aspect-3/4 overflow-hidden bg-alvi-charcoal">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-center group-hover:scale-105 transition duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute top-3 right-3 bg-alvi-navy/90 border border-white/30 px-2.5 py-1 text-[10px] uppercase tracking-widest text-white">
                  {item.category}
                </div>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/80 block">
                    {item.fabric}
                  </span>
                  <h3 className="font-serif text-lg text-alvi-ivory group-hover:text-white transition mt-1">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-400 line-clamp-2 mt-2 leading-relaxed">
                    {item.tagline}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs tracking-widest text-alvi-ivory font-serif">{item.price}</span>
                  <button 
                    type="button"
                    onClick={() => setSelectedProduct(item)}
                    className="text-[10px] uppercase tracking-widest text-white hover:underline"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- MORE PRODUCTS / CRAFT DETAILS --- */}
      <section className="py-24 bg-alvi-charcoal/20 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-white/80 block mb-2">
                More Product Imagery
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-alvi-ivory">
                Atelier Details
              </h2>
            </div>
            <p className="text-xs text-gray-400 max-w-md tracking-wider leading-relaxed">
              Additional visuals from the public more-products folder, placed here as supporting brand shots and close-up craftsmanship details.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MORE_PRODUCTS.map((item) => (
              <div key={item.id} className="group border border-white/20 bg-alvi-navy/40 overflow-hidden hover:border-white/60 transition duration-300">
                <div className="relative aspect-4/5 overflow-hidden bg-alvi-charcoal">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover group-hover:scale-105 transition duration-700 opacity-90 group-hover:opacity-100"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-serif text-lg text-alvi-ivory group-hover:text-white transition">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- THREE PILLARS OF ALVI'S --- */}
      <section id="pillars" className="py-20 bg-alvi-charcoal/30 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="text-center space-y-3 p-6 border border-white/10 bg-alvi-navy/30">
            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center mx-auto text-white">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg text-alvi-ivory">Timelessness Over Trends</h3>
            <p className="text-xs text-gray-400 leading-relaxed tracking-wide">
              Designs crafted to look just as authoritative and stylish in twenty years as they do today.
            </p>
          </div>

          <div className="text-center space-y-3 p-6 border border-white/10 bg-alvi-navy/30">
            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center mx-auto text-white">
              <Feather className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg text-alvi-ivory">Craftsmanship Over Volume</h3>
            <p className="text-xs text-gray-400 leading-relaxed tracking-wide">
              Every garment is individually cut and stitched in limited small batches.
            </p>
          </div>

          <div className="text-center space-y-3 p-6 border border-white/10 bg-alvi-navy/30">
            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center mx-auto text-white">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg text-alvi-ivory">Identity Over Impulse</h3>
            <p className="text-xs text-gray-400 leading-relaxed tracking-wide">
              Dressing to reflect quiet character and self-discipline, not seasonal hype.
            </p>
          </div>

        </div>
      </section>

      {/* --- PRODUCT QUICK VIEW MODAL --- */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          role="presentation"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-alvi-navy border border-white/40 max-w-lg w-full p-6 relative space-y-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button 
              type="button"
              onClick={() => setSelectedProduct(null)}
              aria-label="Close product details"
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-sm"
            >
              ✕
            </button>
            <div className="relative aspect-video overflow-hidden bg-alvi-charcoal">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.name}
                fill
                sizes="(min-width: 1024px) 42rem, 100vw"
                className="object-cover"
              />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-white">{selectedProduct.category}</span>
            <h3 id="product-modal-title" className="font-serif text-xl text-alvi-ivory">{selectedProduct.name}</h3>
            <p className="text-xs text-gray-300 leading-relaxed">{selectedProduct.tagline}</p>
            <div className="p-3 border border-white/20 bg-white/5 text-xs text-white tracking-wider uppercase text-center">
              Available Upon Launch • {selectedProduct.price}
            </div>
          </div>
        </div>
      )}

      {/* --- FOOTER --- */}
      <footer className="border-t border-white/20 py-12 bg-alvi-navy">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="font-serif text-xl tracking-[0.2em] text-alvi-ivory">ALVI’S</h2>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/80">Wear the Legacy</p>
          </div>

          <div className="flex space-x-4 text-gray-400">
            <a href="#" className="px-3 py-1 border border-white/20 text-[10px] uppercase tracking-[0.25em] hover:text-white hover:border-white/50 transition">Instagram</a>
            <a href="#" className="px-3 py-1 border border-white/20 text-[10px] uppercase tracking-[0.25em] hover:text-white hover:border-white/50 transition">Facebook</a>
            <a href="#" className="px-3 py-1 border border-white/20 text-[10px] uppercase tracking-[0.25em] hover:text-white hover:border-white/50 transition">YouTube</a>
          </div>

          <div className="text-center md:text-right text-[11px] text-gray-500 tracking-wider space-y-1">
            <p>© {new Date().getFullYear()} ALVI’S Aesthetic. All Rights Reserved.</p>
            <p className="text-[10px] text-gray-600">Muhammad Umar Alavi | Capstone Digital Marketing</p>
          </div>
        </div>
      </footer>

    </div>
  );
}