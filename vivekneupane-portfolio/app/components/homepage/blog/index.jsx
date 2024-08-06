// @flow strict
"use client"
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import YouTube from 'react-youtube';

function Blog() {
  const hasWindow = typeof window !== 'undefined';
  const width = hasWindow ? window.innerWidth : null;
  const opts = {
    height: width >700?'380' : '330',
    width: width>700?'500':'300',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      mute:1
    },
    mute:1
  };
  const opts1 = {
    height: width >700?'380' : '330',
    width: width>700?'500':'300',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      mute:1
    },
    mute:1
  };
  const onReady = (event) =>{
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }

  return (
    <div id='blogs' className=" relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-10 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            I HAVE A YOUTUBE CHANNEL
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

    <section className='flex gap-5 flex-col lg:flex-row flex-wrap items-center justify-evenly  mt-10'>
    <YouTube videoId="kZVt_OmD-tI" opts={opts1} onReady={onReady} />
    <YouTube videoId="T2ebn7TN9mw" opts={opts} onReady={onReady} />
    </section>


      <div className="flex justify-center  mt-5 lg:mt-12">
        <Link
          className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-green-900 to-green-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
          role="button"
          target='_blank'
          href="https://www.youtube.com/@codewithvivek1"
        >

          <span>View More</span>
          <FaArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default Blog;