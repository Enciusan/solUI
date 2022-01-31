import { Transition } from '@headlessui/react'
import { useState } from 'react'

import "../App.css";

function MyComponent() {
  const [isShowing, setIsShowing] = useState(false)

  return (
    <>
      <button 
        className="flex justify-center" onClick={() => setIsShowing((isShowing) => !isShowing)}>
        Toggle
      </button>
      <Transition
        appear={true}
        show={isShowing}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >I will appear and disappear.</Transition>
    </>
  )
}
export default MyComponent;