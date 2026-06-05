import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function GoToTop() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Show button after scrolling
  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 bg-orange-500 p-2 text-white rounded-md right-6 z-[9999]"
      >
        ↑
      </button>
    )
  );
}