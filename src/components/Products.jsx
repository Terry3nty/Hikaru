import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiArrowLeft, HiExternalLink } from 'react-icons/hi';

const web3Products = [
    {
    name: 'Fostrum',
    img: '/fostrum.png',
    link: 'https://fostrum.xyz',
    role: 'Frontend Developer',
    experience: 'Great joy and enthusiasm as we brought "that idea" to life',
     category: 'web3',
    },
    {
        name: 'Sign',
        img: '/Sign.jpg',
        link: 'https://x.com/sign',
        role: 'Contributor, Beta Tester',
        experience: 'Quality connection with both admins and community members. Got an SBT for being genuine and was selected to test the new and upcoming App',
        category: 'web3',
    },
    {
        name: 'The Boiz (10th Clan)',
        img: '/boiz.jpg',
        link: 'https://x.com/TheBoizCollect',
        role: 'Clan Member',
        experience: 'Quality connection with both admins and community members. Ready to Experience the decentralized space anew and with a brand mark (The Boiz NFT) abreast',
        category: 'web3',
    },
    {
        name: 'Victus Global',
        img: '/Victus.jpg',
        link: 'https://victusglobalverify.com/',
        role: 'Business Developer',
        experience: 'I recently became a Business Developer at Victus Global. Excited and elated for this opportunity',
        category: 'web3',
    },
    {
        name: 'Super Champs',
        img: '/super.jpg',
        link: 'https://x.com/SuperChampsHQ',
        role: 'Clan Member, Gamer',
        experience: 'Quality connection with both admins, community members & Game itself. Experienced quality & addictive gameplay, got in a creator contest & was among the winners',
        category: 'web3',
    },
];

const techProducts = [
    {
        name: 'Middlemint',
        img: '/MIDDLEMINT.png',
        link: 'https://middlemint-mdmt.vercel.app/',
        role: 'Fullstack Developer',
        experience: 'Quality connection with both admins and community members.',
        category: 'tech',
    },
    {
        name: 'Phoenix Community',
        img: '/PHOENIX.jpg',
        link: 'https://phoenix-delta-two.vercel.app/',
        role: 'FullstackDeveloper, Marketer',
        experience: 'Deep connection with both admins, community members & Devs.',
        category: 'tech',
    },
    {
        name: 'Hamzatronics Technologies',
        img: '/HAMZATRONICS.png',
        link: 'https://hamzatronics-technologies.vercel.app/',
        role: 'Fullstack Developer',
        experience: 'Intriguing Experience & quality knowledge acquired solving the bugs.',
        category: 'tech',
    },
    {
        name: 'Podcast Website',
        img: '/Katsco.jpg',
        link: '#',
        role: 'Frontend Developer',
        experience: 'Quality connection with both admins, community members and colleagues.',
        comingSoon: true,
        category: 'tech',
    },
    {
        name: 'Katsco Group',
        img: '/Katsco.jpg',
        link: 'https://x.com/KatsCoGroup',
        role: 'Frontend Developer',
        experience: 'Quality connection with both admins and community members.',
        category: 'tech',
    },
    {
        name: 'Gossiper AI',
        img: '/gossiper-logo-white.png',
        link: 'https://gossiper-ai.vercel.app',
        role: 'Frontend Developer',
        experience: 'Authentic bond with team members and developers, got to use new technology too',
        category: 'tech',
    },
];

const hobbyProducts = [
    {
        name: 'AI Writer',
        img: '/sigh.jpg',
        link: 'https://a-test-0pzi.onrender.com',
        role: 'Fullstack Developer',
        experience: 'Just Exploring the vast possibilities of what I could create & build, it was great.',
        category: 'hobby',
    },
    {
        name: 'Stacy AI',
        img: '/Katsco.jpg',
        link: 'https://stacy-ai-website.vercel.app/',
        role: 'Frontend Developer',
        experience: 'Authentic bond with both admins and fellow developers.',
        category: 'hobby',
    },
    {
        name: 'WhatsApp Bot',
        img: '/sigh.jpg',
        link: 'https://github.com/Terry3nty/bottrial',
        role: 'Fullstack Developer',
        experience: 'Just Exploring the vast possibilities of what I could create & build, it was great.',
        category: 'hobby',
    },
    {
        name: 'Sign Calendar',
        img: '/Sign.jpg',
        link: 'https://t.co/zAZII4okSR',
        role: 'Contributor',
        experience: 'Great bond with good developer & friend from Bangladesh',
        category: 'hobby',
    },
];

const categories = [
    { id: 'all', label: 'All Projects', icon: '◈' },
    { id: 'web3', label: 'Web3', icon: '⬡' },
    { id: 'tech', label: 'Tech', icon: '⚡' },
    { id: 'hobby', label: 'Collabs & Hobbies', icon: '✦' },
];

const allProducts = [...web3Products, ...techProducts, ...hobbyProducts];

const ProductCard = ({ product, index }) => (
    <div
        className="group relative bg-gradient-to-br from-purple-900/20 via-black/40 to-purple-900/10 rounded-2xl overflow-hidden border border-purple-500/10 hover:border-purple-500/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] hover:-translate-y-2"
        style={{ animationDelay: `${index * 50}ms` }}
    >
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden">
            <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />

            {/* Category Badge */}
            <div className="absolute top-3 right-3">
                <span className="px-3 py-1 text-xs font-medium uppercase tracking-wider bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-purple-300">
                    {product.category}
                </span>
            </div>

            {/* Coming Soon Badge */}
            {product.comingSoon && (
                <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 text-xs font-medium uppercase tracking-wider bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 rounded-full text-amber-300">
                        Coming Soon
                    </span>
                </div>
            )}

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/10 transition-all duration-500" />
        </div>

        {/* Content */}
        <div className="p-5 space-y-3">
            {/* Title */}
            <h3 className="font-lexendDeca font-bold text-lg text-white group-hover:text-purple-300 transition-colors duration-300 line-clamp-1">
                {product.name}
            </h3>

            {/* Role Badge */}
            <div className="flex items-center gap-2">
                <span className="text-xs text-purple-400 font-medium">{product.role}</span>
            </div>

            {/* Experience */}
            <p className="text-sm text-white/50 leading-relaxed line-clamp-2">
                {product.experience}
            </p>

            {/* Action Button */}
            <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${product.comingSoon
                        ? 'bg-white/5 text-white/40 cursor-not-allowed'
                        : 'bg-purple-500/10 text-purple-400 border border-purple-500/30 hover:bg-purple-500/20 hover:border-purple-400 hover:text-white group/btn'
                    }`}
                onClick={product.comingSoon ? (e) => e.preventDefault() : undefined}
            >
                {product.comingSoon ? 'Coming Soon' : 'View Project'}
                {!product.comingSoon && (
                    <HiExternalLink className="text-base group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                )}
            </a>
        </div>

        {/* Decorative corner glow */}
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
);

const Products = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredProducts =
        activeCategory === 'all'
            ? allProducts
            : allProducts.filter((p) => p.category === activeCategory);

    return (
        <section className="min-h-screen text-white pt-24 pb-16 font-lexendDeca">
            {/* Back Navigation */}
            <Link
                to="/"
                className="inline-flex items-center gap-2 text-white/60 hover:text-purple-400 transition-colors duration-300 mb-8 group"
            >
                <HiArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
                Back to Home
            </Link>

            {/* Page Header */}
            <div className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                    <h1 className="text-3xl md:text-4xl font-bold">
                        <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent">
                            All Projects
                        </span>
                    </h1>
                    <div className="flex-1 h-[1px] max-w-[200px] bg-gradient-to-r from-purple-500/50 to-transparent" />
                </div>
                <p className="text-white/50 max-w-2xl">
                    A collection of projects, collaborations, and experiments I've been part of across Web3, Tech, and personal ventures.
                </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 mb-10">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeCategory === cat.id
                                ? 'bg-purple-500/20 border border-purple-500/50 text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.2)]'
                                : 'bg-white/5 border border-white/10 text-white/60 hover:border-purple-500/30 hover:text-purple-400'
                            }`}
                    >
                        <span className="text-xs">{cat.icon}</span>
                        {cat.label}
                        {activeCategory === cat.id && (
                            <span className="ml-1 px-1.5 py-0.5 bg-purple-500/30 rounded text-xs">
                                {cat.id === 'all' ? allProducts.length : filteredProducts.length}
                            </span>
                        )}
                    </button>
                ))}
            </div>

            {/* Stats Bar */}
            <div className="flex flex-wrap gap-6 mb-10 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-400" />
                    <span className="text-white/50 text-sm">
                        <span className="text-white font-medium">{web3Products.length}</span> Web3 Projects
                    </span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                    <span className="text-white/50 text-sm">
                        <span className="text-white font-medium">{techProducts.length}</span> Tech Projects
                    </span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                    <span className="text-white/50 text-sm">
                        <span className="text-white font-medium">{hobbyProducts.length}</span> Collabs & Hobbies
                    </span>
                </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product, index) => (
                    <ProductCard key={product.name + index} product={product} index={index} />
                ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
                <div className="text-center py-16">
                    <p className="text-white/40 text-lg">No projects found in this category.</p>
                </div>
            )}

            {/* Footer CTA */}
            <div className="mt-16 text-center py-12 bg-gradient-to-r from-purple-900/20 via-purple-800/10 to-purple-900/20 rounded-2xl border border-purple-500/10">
                <h3 className="text-xl font-bold text-white mb-3">Interested in working together?</h3>
                <p className="text-white/50 mb-6 max-w-md mx-auto">
                    I'm always open to discussing new projects and opportunities.
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500/20 border border-purple-500/40 rounded-xl text-purple-300 hover:bg-purple-500/30 hover:border-purple-400 hover:text-white transition-all duration-300"
                >
                    Get in Touch
                    <span>→</span>
                </Link>
            </div>
        </section>
    );
};

export default Products;