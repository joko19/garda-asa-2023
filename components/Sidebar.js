import Link from 'next/link'
import { useState } from 'react';


function Sidebar(props) {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  const toLesson = (link) => {
    if (typeof window !== "undefined") {
      // browser code
      window.location.href = link
    }
  }
  console.log(props.post)
  // const data = props.post.slice(0)
  // data.sort(function(a,b){
  //   return a.properties._id.rich_text[0].plain_text - b.properties._id.rich_text[0].plain_text
  // })
  return (
    <>
      <div className='border-b flex-row pt-20 z-10 gap-2 w-screen bg-gray-100 flex self-center md:hidden fixed'>
        <div>
          <button
            className='p-3 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
            onClick={handleClick}
          >
            <svg
              className='w-6 h-6'
              fill='gray'
              stroke='gray'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>
        <div className='self-center text-gray-600 flex-initial'>Lesson</div>
      </div>
      <ul className={`bg-white md:px-4 shadow-lg px-4 block  md:pt-4 md:mt-16 mt-32 overflow-y-auto z-10 md:inline  h-full fixed  ${active ? '' : 'hidden'
        } `}>
        {props.post.map((item) => {
          return (
            <li key={item.id} className={`p-2 border rounded-lg hover:text-white hover:bg-blue-600 cursor-pointer  ${props.slug === item.properties.slug.rich_text[0].plain_text ? 'bg-blue-600 text-white font-bold' : 'bg-white text-gray-700'}`} onClick={() => toLesson(item.properties.slug.rich_text[0].plain_text)}>
              {item.properties.title.rich_text[0].plain_text}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Sidebar