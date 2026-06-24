import { Head, Link } from '@inertiajs/react';
import { blogPosts } from '@/data/mockData';
import { useState } from 'react';

export default function Blog() {
    const [selectedTag, setSelectedTag] = useState('Semua');

    // Combine duplicate data if you want, or just use blogPosts
    const allPosts = [...blogPosts, ...blogPosts];
    const filteredPosts = selectedTag === 'Semua'
        ? allPosts
        : allPosts.filter(post => post.category === selectedTag);

    return (
        <>
            <Head title="Blog & Artikel K3 │ ProSafe Indonesia">
                <meta name="description" content="Artikel edukasi seputar keselamatan kerja, regulasi K3 terbaru, tips sertifikasi BNSP, dan informasi pelatihan dari ProSafe Indonesia." />
            </Head>
            <section className="bg-deep-navy relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 11px)' }} />
                <div className="max-w-[1280px] mx-auto px-6 py-10 md:py-14 relative z-10 text-center">
                    <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">Blog & Artikel</h1>
                    <p className="text-lg text-primary-fixed-dim">Update regulasi, tips keselamatan, dan insight industri K3.</p>
                </div>
            </section>
            
            <div className="max-w-[1280px] mx-auto px-6 pt-10 pb-16">
                {/* Filter tags */}
                <div className="flex flex-wrap gap-3.5 mb-12 justify-center">
                    {['Semua', 'Regulasi K3', 'Tips & Edukasi', 'Update Regulasi'].map((tag) => (
                        <button
                            key={tag}
                            onClick={() => setSelectedTag(tag)}
                            className={`px-5 py-2.5 rounded-full text-sm font-bold border transition-all duration-200 active:scale-95 cursor-pointer ${
                                selectedTag === tag
                                    ? 'bg-safety-orange text-white border-safety-orange shadow-md shadow-safety-orange/10'
                                    : 'bg-white text-on-surface-variant border-outline-variant hover:border-safety-orange hover:text-safety-orange'
                            }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.slice(0, 6).map((post, idx) => (
                        <article key={idx} className="group bg-white rounded-2xl overflow-hidden border border-outline-variant/70 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                            <div className="h-48 overflow-hidden relative">
                                <div
                                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                    style={{ backgroundImage: `url('${post.image}')` }}
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-deep-navy/85 backdrop-blur-sm px-3.5 py-1.5 rounded-lg text-[10px] font-bold text-white uppercase tracking-wider shadow-sm">
                                        {post.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="font-heading text-lg font-bold text-deep-navy group-hover:text-safety-orange transition-colors duration-200 line-clamp-2 leading-snug">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-on-surface-variant line-clamp-3 my-4 flex-grow">
                                    {post.excerpt}
                                </p>
                                <div className="pt-4 border-t border-outline-variant/60 flex items-center justify-between text-xs text-text-secondary">
                                    <span className="flex items-center gap-1.5 font-medium">
                                        <span className="material-symbols-outlined text-outline text-base select-none">calendar_today</span>
                                        {post.date}
                                    </span>
                                    <span className="flex items-center gap-1.5 font-medium">
                                        <span className="material-symbols-outlined text-outline text-base select-none">schedule</span>
                                        {post.readTime}
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {filteredPosts.length === 0 && (
                    <div className="p-12 text-center text-on-surface-variant">
                        <span className="material-symbols-outlined text-4xl text-outline mb-2 block">article_off</span>
                        Tidak ada artikel yang cocok dengan filter ini.
                    </div>
                )}

                <div className="text-center mt-14">
                    <button className="btn-prosafe-secondary px-8 py-3.5 text-sm active:scale-[0.98]">
                        Muat Lebih Banyak
                    </button>
                </div>
            </div>
        </>
    );
}
