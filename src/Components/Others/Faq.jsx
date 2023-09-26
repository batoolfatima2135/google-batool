'use client'
import React, {useState} from 'react';

export default function Faq() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div>
      <h1>People also ask</h1>
      <div>
        <ul>
          <li>
            <button
              className="block w-full text-left bg-blue-500 text-white p-2 rounded-md"
              onClick={toggleCollapse}
              type="button"
            >
              Toggle Collapse
            </button>
          </li>
          <div
            className={`${
              isCollapsed ? 'hidden ' : 'block'
            } bg-gray-100 p-4 mt-2 rounded-md `}
          >
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Eveniet distinctio illo, odio deserunt dolores assumenda cupiditate officia 
            sunt est nobis iusto velit. Doloribus eaque rerum vel fugiat numquam, iure ullam.</p>
          </div>
        </ul>
      </div>
    </div>
  );
}
