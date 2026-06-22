import { Head, Link } from '@inertiajs/react';
import { blogPosts } from '@/data/mockData';

export default function Blog() {
    return (
        <>
            <Head title="Blog & Artikel K3 - ProSafe Indonesia" />
            <section className="bg-deep-navy relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 11px)' }} />
                <div className="max-w-[1280px] mx-auto px-6 py-16 relative z-10 text-center">
                    <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">Blog & Artikel</h1>
                    <p className="text-lg text-primary-fixed-dim">Update regulasi, tips keselamatan, dan insight industri K3.</p>
                </div>
            </section>
            <div className="max-w-[1280px] mx-auto px-6 py-16">
                {/* Filter tags */}
                <div className="flex flex-wrap gap-2 mb-10">
                    {['Semua', 'Regulasi K3', 'Tips & Edukasi', 'Update Regulasi', 'Berita Perusahaan'].map((tag, i) => (
                        <button key={tag} className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${i === 0 ? 'bg-deep-navy text-white border-deep-navy' : 'bg-white text-on-surface-variant border-outline-variant hover:border-deep-navy'}`}>
                            {tag}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[...blogPosts, ...blogPosts].slice(0, 6).map((post, idx) => (
                        <article key={idx} className="group bg-white rounded-xl overflow-hidden border border-outline-variant hover:shadow-lg transition-all">
                            <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${post.image}')` }} />
                            <div className="p-6">
                                <span className="text-xs font-bold text-safety-orange uppercase tracking-wider">{post.category}</span>
                                <h3 className="font-heading text-lg font-semibold text-deep-navy mt-2 mb-3 group-hover:text-safety-orange transition-colors line-clamp-2">{post.title}</h3>
                                <p className="text-sm text-on-surface-variant line-clamp-3 mb-4">{post.excerpt}</p>
                                <div className="flex items-center justify-between text-xs text-text-secondary">
                                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">calendar_today</span> {post.date}</span>
                                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> {post.readTime}</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <button className="px-8 py-3 border-2 border-deep-navy text-deep-navy font-heading font-semibold rounded-lg hover:bg-deep-navy hover:text-white transition-all">
                        Muat Lebih Banyak
                    </button>
                </div>
            </div>
        </>
    );
}
