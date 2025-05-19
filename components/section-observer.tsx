"use client";
import React, { useEffect } from 'react';

const SectionObserver = () => {
  useEffect(() => {
    // Observer logic for sections
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return null; // This component doesn't render anything
};

export default SectionObserver;