import React from 'react';

const web3Products = [
    // ... same as before
    {
        name: 'Sign',
        img: '/Sign.jpg',
        link: 'https://x.com/sign',
        role: 'Contributor, Beta tester (App)',
        experience: 'Quality connection with both admins and community members. Got an SBT for being genuine and was selected to test the new and upcoming App',
        btn: 'VIEW',
    },
    {
        name: 'Victus Global',
        img: '/Victus.jpg',
        link: 'https://victusglobalverify.com/',
        role: 'Business developer',
        experience: 'I recently became a Business Developer at Victus Global. Excited and elated for this opportunity, Verify me below to authenticate my status with my TG(@Hikaru_Sen) or X(@Hikaru___San)',
        btn: 'VIEW',
    },
    {
        name: 'Katsco Group',
        img: '/Katsco.jpg',
        link: 'https://x.com/KatsCoGroup',
        role: 'Developer',
        experience: 'Quality connection with both admins and community members. Got hands on both new technologies and knowledge to further advance together with fellow developer colleagues to get the job done',
        btn: 'VIEW',
    },
    {
        name: 'The Boiz (10th clan)',
        img: '/boiz.jpg',
        link: 'https://x.com/TheBoizCollect',
        role: 'Clan member',
        experience: 'Quality connection with both admins and community members. Ready to Experience the decentralized space anew and with a brand mark (The Boiz NFT) abreast',
        btn: 'VIEW',
    },
    {
        name: 'Super Champs',
        img: '/super.jpg',
        link: 'https://x.com/SuperChampsHQ',
        role: 'Clan member, Gamer',
        experience: 'Quality connection with both admins,community members & Game itself. Experienced quality & addictive gameplay, got in a creator contest & was among the winners',
        btn: 'VIEW',
    },
];

const techProducts = [
    // ... same as before
    {
        name: 'Middlemint',
        img: '/MIDDLEMINT.png',
        link: 'https://middlemint-mdmt.vercel.app/',
        role: 'BD, Dev & DevRel',
        experience: 'Quality connection with both admins and community members.',
        btn: 'VIEW',
    },
    {
        name: "Phoenix Community",
        img: "/PHOENIX.jpg",
        alt: "Phoenix",
        link: "https://phoenix-delta-two.vercel.app/",
        role: "Developer, Marketer",
        experience: "Deep connection with both admins,community members & Devs.",
        btn: 'VIEW',
    },
    {
        name: 'Hamzatronics Technologies',
        img: '/HAMZATRONICS.png',
        link: 'https://hamzatronics-technologies.vercel.app/',
        role: 'Developer',
        experience: 'Intriguing Experience & quality knowledge acquired solving the bugs.',
        btn: 'VIEW',
    },
    {
        name: 'Podcast website',
        img: '/Katsco.jpg',
        link: '#',
        role: 'Developer',
        experience: 'Quality connection with both admins,community members and colleagues.',
        btn: 'Coming soon',
    },
];

const hobbyProducts = [
    // ... same as before
    {
        name: 'Ai Writer',
        img: '/sigh.jpg',
        link: 'https://a-test-0pzi.onrender.com',
        role: 'Developer',
        experience: 'Just Exploring the vast possibilities of what i could create & build, it was great.',
        btn: 'VIEW',
    },
    {
        name: 'Stacy Ai',
        img: '/Katsco.jpg',
        link: 'https://stacy-ai-website.vercel.app/',
        role: 'Developer',
        experience: 'Authentic bond with both admins and fellow developers.',
        btn: 'VIEW',
    },
    {
        name: 'Whatapp bot',
        img: '/sigh.jpg',
        link: 'https://github.com/Terry3nty/bottrial',
        role: 'Developer',
        experience: 'Just Exploring the vast possibilities of what i could create & build, it was great.',
        btn: 'VIEW',
    },
    {
        name: 'Sign calender',
        img: '/Sign.jpg',
        link: 'https://t.co/zAZII4okSR',
        role: 'Contributor, Beta tester (App)',
        experience: (
            <>
                Great bond with good developer & friend from bangladesh{' '}
                <a href="https://x.com/0xNodachi" className="italic text-red-300"></a>
            </>
        ),
        btn: 'VIEW',
    },
];

const Products = () => (
    <section className="flex flex-col text-white mt-16 font-lexendDeca pt-20">
        <h1 className="text-2xl">
            <span className="text-purple-700"> # </span> Projects
        </h1>
        <hr className="border-gray-300" />

        {/* WEB3 */}
        <div className="flex flex-row justify-between m-2">
            <h2 className="font-inter font-extrabold md:pl-5">
                <span className="text-purple-700">{'>'}</span> WEB3
            </h2>
            <h2 className="font-inter font-extrabold md:pl-5">
                <span className="text-purple-700">{'<<'}</span>
            </h2>
        </div>
        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
            {web3Products.map((p, i) => (
                <div className="card" key={p.name + i}>
                    <img src={p.img} alt={p.name} className="img" />
                    <p>
                        <strong>
                            <a href={p.link} target="_blank" rel="noopener noreferrer">
                                {p.name}
                            </a>
                        </strong>
                        <br />
                        <b>Role</b> : {p.role} <br />
                        <b>Experience</b> : {p.experience}
                    </p>
                    <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-2 w-28 mt-2 text-purple-400 hover:text-white text-center transition-all"
                    >
                        {p.btn}
                    </a>
                </div>
            ))}
        </div>

        {/* TECH */}
        <hr className="border-gray-300" />
        <div className="flex flex-row justify-between m-2">
            <h2 className="font-inter font-extrabold md:pl-5">
                <span className="text-purple-700">{'>'}</span> TECH
            </h2>
            <h2 className="font-inter font-extrabold md:pl-5">
                <span className="text-purple-700">{'<<'}</span>
            </h2>
        </div>
        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
            {techProducts.map((p, i) => (
                <div className="card" key={p.name + i}>
                    <img src={p.img} alt={p.name} className="img" />
                    <p>
                        <strong>
                            <a href={p.link} target="_blank" rel="noopener noreferrer">
                                {p.name}
                            </a>
                        </strong>
                        <br />
                        <b>Role</b> : {p.role}
                        <br />
                        <b>Experience</b> : {p.experience}
                    </p>
                    <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-2 w-28 mt-2 text-purple-400 hover:text-white text-center transition-all"
                    >
                        {p.btn}
                    </a>
                </div>
            ))}
        </div>

        {/* COLLABS & HOBBIES */}
        <hr className="border-gray-300" />
        <div className="flex flex-row justify-between m-2">
            <h2 className="font-inter font-extrabold md:pl-5">
                <span className="text-purple-700">{'>'}</span> COLLABS & HOBBIES
            </h2>
            <h2 className="font-inter font-extrabold md:pl-5">
                <span className="text-purple-700">{'<<'}</span>
            </h2>
        </div>
        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
            {hobbyProducts.map((p, i) => (
                <div className="card" key={p.name + i}>
                    <img src={p.img} alt={p.name} className="img" />
                    <p>
                        <strong>
                            <a href={p.link} target="_blank" rel="noopener noreferrer">
                                {p.name}
                            </a>
                        </strong>
                        <br />
                        <b>Role</b> : {p.role}
                        <br />
                        <b>Experience</b> : {p.experience}
                    </p>
                    <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-2 w-28 mt-2 text-purple-400 hover:text-white text-center transition-all"
                    >
                        {p.btn}
                    </a>
                </div>
            ))}
        </div>
    </section>
);

export default Products;