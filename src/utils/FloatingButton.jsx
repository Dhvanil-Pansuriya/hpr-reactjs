import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export default function FloatingButton({
  text = "CONTACT US",
  threshold = 100
}) {
  const navigate = useNavigate();
  const isVisible = useScrollPosition(threshold);

  const handleClick = () => {
    navigate('/contact');
  };

  return (
    <button
      onClick={handleClick}
      className={`
        fixed -rotate-90 right-[-50px] top-2/3 -translate-y-1/2 z-50
        px-6 py-3
        bg-primary text-secondary font-medium
        shadow-lg hover:bg-background rounded-t-lg 
        transform transition-all duration-300 ease-in-out
        ${isVisible
          ? 'translate-x-0 opacity-100'
          : 'translate-x-[100%] opacity-0'
        }
      `}
    >
      {text}
    </button>
  );
}

function useScrollPosition(threshold = 100) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > threshold) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [threshold])

  return isVisible
}

