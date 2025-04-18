import { HTMLAttributes, ReactNode, useRef, useState, useEffect, MouseEvent, TouchEvent } from "react";

type HorizontalScrollProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  showArrows?: boolean;
};

export default function HorizontalScroll({
  children,
  showArrows = true,
  ...props
}: HorizontalScrollProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  
  // Drag state variables
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const scrollAmount = container.clientWidth / 2;
    const targetScroll = direction === "left" 
      ? container.scrollLeft - scrollAmount 
      : container.scrollLeft + scrollAmount;
    
    container.scrollTo({
      left: targetScroll,
      behavior: "smooth"
    });
  };

  const checkScrollButtons = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    // Check if we can scroll left
    setShowLeftArrow(container.scrollLeft > 0);
    
    // Check if we can scroll right
    const canScrollRight = container.scrollLeft < container.scrollWidth - container.clientWidth - 1;
    setShowRightArrow(canScrollRight);
  };

  // Mouse drag handlers
  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    setIsDragging(true);
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeft(container.scrollLeft);
    container.style.cursor = 'grabbing';
    container.style.userSelect = 'none';
  };

  const handleMouseUp = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    setIsDragging(false);
    container.style.cursor = 'grab';
    container.style.userSelect = '';
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const container = scrollContainerRef.current;
    if (!container) return;
    
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    container.scrollLeft = scrollLeft - walk;
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    const container = scrollContainerRef.current;
    if (!container || e.touches.length !== 1) return;
    
    setIsDragging(true);
    setStartX(e.touches[0].pageX - container.offsetLeft);
    setScrollLeft(container.scrollLeft);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const x = e.touches[0].pageX - container.offsetLeft;
    const walk = (x - startX) * 2;
    container.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    // Initial check
    checkScrollButtons();
    
    // Add scroll event listener
    container.addEventListener("scroll", checkScrollButtons);
    
    // Add resize event listener
    window.addEventListener("resize", checkScrollButtons);
    
    // Add mouse leave listener to end drag even if mouse leaves the container
    const handleMouseLeave = () => {
      if (isDragging) {
        setIsDragging(false);
        container.style.cursor = 'grab';
        container.style.userSelect = '';
      }
    };
    
    container.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      container.removeEventListener("scroll", checkScrollButtons);
      window.addEventListener("resize", checkScrollButtons);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isDragging]);

  return (
    <div className="relative group w-full h-full">
      {showArrows && showLeftArrow && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-opacity-70  h-full p-1 shadow-md hover:bg-opacity-90 transition-opacity  bg-gradient-to-l from-transparent to-white"
          aria-label="Scroll left"
        >
          <ion-icon name="chevron-back-outline" className="h-6 w-6" />
        </button>
      )}
      
      <div
        ref={scrollContainerRef}
        className={`flex overflow-x-auto h-full gap-1 w-full scrollbar-hide cursor-grab ${props.className || ""}`}
        onScroll={checkScrollButtons}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        {...props}
      >
        {children}
      </div>
      
      {showArrows && showRightArrow && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gradient-to-r from-transparent to-white bg-opacity-70  p-1 shadow-md hover:bg-opacity-90 transition-opacity h-full"
          aria-label="Scroll right"
        >
          <ion-icon name="chevron-forward-outline" className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}