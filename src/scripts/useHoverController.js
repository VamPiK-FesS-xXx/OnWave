import React, { useEffect, useRef, useState } from "react";

export const useHoverController = (ref, callback, isActive = false) => {
  const handleHover = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback(true);
    }
  };
  const handleDocumentHover = (e) => {
    if (isActive) {
      if (ref.current && !ref.current.contains(e.target)) {
        callback(true);
      } else if (ref.current && !ref.current.contains(e.target)) {
        callback(false);
      }
    } else {
      if (ref.current && !ref.current.contains(e.target)) {
        callback(false);
      }
    }
  };
  useEffect(() => {
    if (ref.current) {
      document.addEventListener("mouseenter", handleHover);
    }
    document.addEventListener("mousemove", handleDocumentHover);
    return () => {
      if (ref.current) {
        document.removeEventListener("mouseenter", handleHover);
      }
      document.removeEventListener("mousemove", handleDocumentHover);
    };
  }, [isActive]);
};
