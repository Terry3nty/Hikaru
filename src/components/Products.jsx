import React from 'react'

const Products = () => {
    //WEB3
    const SIGN = `Sign`
    const VICTUS = `Victus Global`
    const KATSCO = `Katsco Group`
    const _10th = `The Boiz (10th clan)`
    const SUPER =  `Super Champs`
    //TECH
    const MDMT = `Middlemint`
    const PHX = `Phoenix Community`
    const HAMZAT = `Hamzatronics Technologies`
    const PODCAST =`Podcast website`
    //COLLABS AND HOBBIES
    const  AI = `Ai Writer`
    const STACY =`Stacy Ai`
    const BOT =`Whatapp bot`
    const RPG =`Javascript Game`
    const PBOT =`Speech recognition bot`
    const SIGNTEST =`Sign calender`

  return (
    <>
    <section className='flex flex-col text-white mt-16 font-lexendDeca pt-20'>
        <h1 className='text-2xl'><span className='text-purple-700'> # </span> Products</h1> 
        <hr className='border-gray-300' />
        <div className='flex flex-row justify-between m-2'>
            <h2 className='font-inter font-extrabold md:pl-5'><span className='text-purple-700'>{`>`}</span> WEB3</h2>
            <h2 className='font-inter font-extrabold md:pl-5'><span className='text-purple-700'>{`<<`}</span></h2>
        </div>
        <div className='flex flex-col md:flex-row flex-wrap overflow-x-auto justify-center'>
            <div className='card'>
                <img src="/Sign.jpg" alt="Sign" className='img' />
                <p>
                    <strong><a href="https://x.com/sign" target='_blank'>{`${SIGN}`}</a></strong><br />
                    <b>Role</b> : Contributor, Beta tester {`(App)`} <br />
                    <b>Experience</b> : Quality connection with both admins and community members. <br />
                    Got an SBT for being genuine and was selected to test the new and upcoming App
                </p>
                <a href="https://x.com/sign" target='_blank' className='border-2 w-28 mt-8 text-purple-400 hover:text-white text-center transition-all'>VIEW</a>
            </div>
            <div className='card'>
                <img src="/Victus.jpg" alt="Sign" className='img' />
                <p>
                    <strong><a href="https://victusglobalverify.com/ " target='_blank'>{`${VICTUS}`}</a></strong><br />
                    <b>Role</b> : Business developer <br />
                    <b>Experience</b> : I recently became a <i><strong>Business Developer</strong></i> at Victus Global. <br />
                    Excited and elated for this opportunity, Verify me below to authenticate my status with my TG{`(@Hikaru_Sen)`} or X{`(@Hikaru___San)`}
                </p>
                <a href="https://victusglobalverify.com/" target='_blank' className='border-2 w-28 mt-2 text-purple-400 hover:text-white text-center transition-all'>VIEW</a>
            </div>
            <div className='card'>
                <img src="/Katsco.jpg" alt="Sign" className='img' />
                <p>
                    <strong><a href="https://x.com/KatsCoGroup" target='_blank'>{`${KATSCO}`}</a></strong><br />
                    <b>Role</b> : Developer<br />
                    <b>Experience</b> : Quality connection with both admins and community members. <br />
                    Got hands on both new technologies and knowledge to further advance together with fellow developer colleagues to get the job done
                </p>
                <a href="https://x.com/KatsCoGroup" target='_blank' className='border-2 w-28 mt-2 text-purple-400 hover:text-white text-center transition-all'>VIEW</a>
            </div>
            <div className='card'>
                <img src="/boiz.jpg" alt="Sign" className='img' />
                <p>
                    <strong><a href="https://x.com/TheBoizCollect" target='_blank'>{`${_10th}`}</a></strong><br />
                    <b>Role</b> : Clan member <br />
                    <b>Experience</b> : Quality connection with both admins and community members. <br />
                    Ready to Experience the decentralized space anew and with a brand mark {`(The Boiz NFT)`} abreast
                </p>
                <a href="https://x.com/TheBoizCollect" target='_blank' className='border-2 w-28 mt-10 text-purple-400 hover:text-white text-center transition-all'>VIEW</a>
            </div>
            <div className='card'>
                <img src="/super.jpg" alt="Sign" className='img' />
                <p>
                    <strong><a href="https://x.com/SuperChampsHQ" target='_blank'>{`${SUPER}`}</a></strong><br />
                    <b>Role</b> : Clan member, Gamer <br />
                    <b>Experience</b> : Quality connection with both admins,community members & Game itself. <br />
                    Experienced quality & addictive gameplay, got in a creator contest & was among the winners
                </p>
                <a href="https://x.com/SuperChampsHQ" target='_blank' className='border-2 w-28 mt-5 text-purple-400 hover:text-white text-center transition-all'>VIEW</a>
            </div>
        </div>
        <div></div>

        {/* TECH SIDE */}
        <hr className='border-gray-300' />
        <div className='flex flex-row justify-between m-2'>
            <h2 className='font-inter font-extrabold md:pl-5'><span className='text-purple-700'>{`>`}</span> TECH</h2>
            <h2 className='font-inter font-extrabold md:pl-5'><span className='text-purple-700'>{`<<`}</span></h2>
        </div>
        <div className='flex flex-col md:flex-row overflow-x-auto'>
             <div className='card'>
                <img src="/MIDDLEMINT.png" alt="Sign" className='img' />
                <p>
                    <strong><a href="https://middlemint-mdmt.vercel.app/" target='_blank'>{`${MDMT}`}</a></strong><br />
                    <b>Role</b> : BD, Dev & DevRel<br />
                    <b>Experience</b> : Quality connection with both admins and community members. <br />
                </p>
                <a href="https://middlemint-mdmt.vercel.app/" target='_blank' className='border-2 w-28 mt-2 text-purple-400 hover:text-white text-center transition-all'>VIEW</a>
            </div>
            <div className='card hidden'>
                <img src="/PHOENIX.jpg" alt="Sign" className='img' />
                <p>
                    <strong><a href="https://phoenix-delta-two.vercel.app/" target='_blank'>{`${PHX}`}</a></strong><br />
                    <b>Role</b> : Developer, Marketer <br />
                    <b>Experience</b> : Deep connection with both admins,community members & Devs. <br />
                </p>
                <a href="https://phoenix-delta-two.vercel.app/" target='_blank' className='border-2 w-28 mt-2 text-purple-400 hover:text-white text-center transition-all'>VIEW</a>
            </div>
            <div className='card'>
                <img src="/HAMZATRONICS.png" alt="Sign" className='img' />
                <p>
                    <strong><a href="https://hamzatronics-technologies.vercel.app/" target='_blank'>{`${HAMZAT}`}</a></strong><br />
                    <b>Role</b> : Developer<br />
                    <b>Experience</b> : Intriguing Experience & quality knowledge acquired solving the bugs. <br />
                </p>
                <a href='https://hamzatronics-technologies.vercel.app/' target='_blank' className='border-2 w-28 mt-2 text-purple-400 hover:text-white text-center transition-all'>VIEW</a>
            </div>
            <div className='card'>
                <img src="/Katsco.jpg" alt="Sign" className='img' />
                <p>
                    <strong><a href="#" target='_blank'>{`${PODCAST}`}</a></strong><br />
                    <b>Role</b> : Developer<br />
                    <b>Experience</b> : Quality connection with both admins,community members and colleagues.<br />
                </p>
                <a href='#' target='_blank' className='border-2 w-28 mt-2 text-purple-400 hover:text-white text-center transition-all'>Coming soon</a>
            </div>
        </div>

        {/* Hoby */}
        <hr className='border-gray-300' />
        <div className='flex flex-row justify-between m-2'>
            <h2 className='font-inter font-extrabold md:pl-5'><span className='text-purple-700'>{`>`}</span> COLLABS & HOBBIES</h2>
            <h2 className='font-inter font-extrabold md:pl-5'><span className='text-purple-700'>{`<<`}</span></h2>
        </div>
        <div className='flex flex-col md:flex-row flex-nowrap overflow-x-auto'>
           <div className='card'>
                <img src="/kawai.jpg" alt="Sign" className='img' />
                <p>
                    <strong><a href="https://a-test-0pzi.onrender.com" target='_blank'>{`${AI}`}</a></strong><br />
                    <b>Role</b> : Developer <br />
                    <b>Experience</b> : Just Exploring the vast possibilities of what i could create & build, it was great. <br />
                </p>
                <a href="https://a-test-0pzi.onrender.com" target='_blank' className='border-2 w-28 mt-2 text-purple-400 hover:text-white text-center transition-all'>VIEW</a>
            </div>
            <div className='card'>
                <img src="/Katsco.jpg" alt="Sign" className='img' />
                <p>
                    <strong><a href="https://stacy-ai-website.vercel.app/" target='_blank'>{`${STACY}`}</a></strong><br />
                    <b>Role</b> : Developer <br />
                    <b>Experience</b> : Authentic bond with both admins and fellow developers. <br />
                </p>
                <a href='https://stacy-ai-website.vercel.app/' target='_blank' className='border-2 w-28 mt-2 text-purple-400 hover:text-white text-center transition-all'>VIEW</a>
            </div>
            <div className='card'>
                <img src="/kawai.jpg" alt="Sign" className='img' />
                <p>
                    <strong><a href="https://github.com/Terry3nty/bottrial" target='_blank'>{`${BOT}`}</a></strong><br />
                    <b>Role</b> : Developer <br />
                    <b>Experience</b> : Just Exploring the vast possibilities of what i could create & build, it was great. <br />
                </p>
                <a href="https://github.com/Terry3nty/bottrial" target='_blank' className='border-2 w-28 mt-2 text-purple-400 hover:text-white text-center transition-all'>VIEW</a>
            </div>
            <div className='card'>
                <img src="/Sign.jpg" alt="Sign" className='img' />
                <p>
                    <strong><a href="https://t.co/zAZII4okSR" target='_blank'>{`${SIGNTEST}`}</a></strong><br />
                    <b>Role</b> : Contributor, Beta tester {`(App)`} <br />
                    <b>Experience</b> : Great bond with good developer & friend from bangladesh <a href="https://x.com/0xNodachi" className='italic text-red-300'>Israfil</a>. <br />
                </p>
                <a href="https://t.co/zAZII4okSR" target='_blank' className='border-2 w-28 mt-2 text-purple-400 hover:text-white text-center transition-all'>VIEW</a>
            </div>
        </div>
        <div></div>
    </section>
    </>
  )
}

export default Products