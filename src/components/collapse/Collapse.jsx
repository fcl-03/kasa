import { useRef, useState, useLayoutEffect } from "react";
import "./Collapse.scss";

function Collapse({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef(null);
  const wrapperRef = useRef(null);

  // useLayoutEffect pour éviter le flash visuel
  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;
    if (!wrapper || !content) return;

    if (isOpen) {
      wrapper.style.maxHeight = `${content.scrollHeight}px`;
    } else {
      wrapper.style.maxHeight = "0px";
    }
  }, [isOpen]);

  return (
    <div className={`collapse ${isOpen ? "collapse--open" : "collapse--closed"}`}>
      <button
        type="button"
        className="collapse__header"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
      >
        <span className="collapse__title">{title}</span>

        {/* Chevron SVG : position fixe, rotation sur place */}
        <span className="collapse__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" focusable="false">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>

      <div
        ref={wrapperRef}
        className="collapse__content"
        data-open={isOpen ? "true" : "false"}
      >
        <div ref={contentRef} className="collapse__contentInner">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Collapse;
