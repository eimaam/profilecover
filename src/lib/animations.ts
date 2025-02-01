import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export const useHeaderAnimation = () => {
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(headerRef.current, {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: 'power4.out'
      })
      .from((titleRef.current as any)?.children || [], {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      }, '-=0.5')
      .from(subtitleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.4')
      .from(ctaRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        ease: 'back.out(1.7)'
      }, '-=0.3');
    });

    return () => ctx.revert();
  }, []);

  return { headerRef, titleRef, subtitleRef, ctaRef };
};

export const useFeaturesAnimation = () => {
  const featuresRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from((featuresRef.current as any)?.children || [], {
        scrollTrigger: {
          trigger: featuresRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });
    });

    return () => ctx.revert();
  }, []);

  return { featuresRef };
};

export const useHowItWorksAnimation = () => {
  const sectionRef = useRef(null);
  const stepsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
      });

      gsap.from((stepsRef.current as any)?.children || [], {
        scrollTrigger: {
          trigger: stepsRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        x: -30,
        duration: 0.8,
        stagger: 0.3,
        ease: 'power2.out'
      });
    });

    return () => ctx.revert();
  }, []);

  return { sectionRef, stepsRef };
};

export const useTestimonialsAnimation = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
      });

      gsap.from((cardsRef.current as any)?.children || [], {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.7)'
      });
    });

    return () => ctx.revert();
  }, []);

  return { sectionRef, cardsRef };
};

export const useCtaAnimation = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out'
      });
    });

    return () => ctx.revert();
  }, []);

  return { sectionRef };
};