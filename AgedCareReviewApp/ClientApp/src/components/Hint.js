import React, { useEffect, useRef } from 'react';
import { Popover } from 'bootstrap';
import "../styles/components/Hint.css";

export function Hint({ title, content, placement, trigger }) {
  const hintRef = useRef();

  useEffect(() => {
    var popover = new Popover(hintRef.current, {
        content: content,
        title: title,
        placement: placement,
        trigger: trigger,
        html: true
    })
  })

  return (
    <div>
        <img className="hint" id='test2' src="/images/LightBulb.png" alt="light bulb" ref={hintRef} />
    </div>
  )
}