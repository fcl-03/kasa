import { useId, useRef, useState } from "react";
import "./Collapse.scss";

function Collapse({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentId = useId();
  const contentRef = useRef(null);

  // Sert à animer max-height proprement
  const maxHeight = isOpen ? `${contentRef.current?.scrollHeight || 0}px` : "0px";

  return (
    <div className={`collapse ${isOpen ? "collapse--open" : "collapse--closed"}`}>
      <button
        type="button"
        className="collapse__header"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-controls={contentId}
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
        id={contentId}
        className="collapse__content"
        style={{ maxHeight }}
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
