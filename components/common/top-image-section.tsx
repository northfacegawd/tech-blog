import Image from 'next/image';
import React, { CSSProperties, useEffect, useMemo, useState } from 'react';
import { Transition, TransitionStatus } from 'react-transition-group';
import manifesto from '@public/images/manifesto.webp';
import resume from '@public/images/resume.webp';

interface TopImageSectionProps {
  category: 'resume' | 'manifesto';
  title: string;
  description: string;
}

const duration = 500;

const defaultStyle: CSSProperties = {
  opacity: 0,
  transition: `all ${duration}ms ease-out`,
};

const transitionStyle: Partial<Record<TransitionStatus, CSSProperties>> = {
  entered: { opacity: 1 },
  entering: { opacity: 1 },
  exited: { opacity: 0 },
  exiting: { opacity: 0 },
};

export default function TopImageSection({
  description,
  category,
  title,
}: TopImageSectionProps) {
  const [render, setRender] = useState<boolean>(false);

  const imageSrc = useMemo(() => {
    const images = {
      resume,
      manifesto,
    };
    return images[category] ?? manifesto;
  }, [category]);

  useEffect(() => {
    setRender(true);
  }, []);

  return (
    <Transition in={render} timeout={duration}>
      {(state) => (
        <div
          className="h-[40vh] md:h-[55vh] overflow-hidden relative"
          style={{ ...defaultStyle, ...transitionStyle[state] }}
        >
          <Image
            src={imageSrc}
            layout="fill"
            objectFit="cover"
            className="absolute -z-10"
            placeholder="blur"
          />
          <p className="w-full max-w-3xl mx-auto z-10 pt-[35vh] md:pt-[40vh] px-4 text-2xl md:text-4xl text-shadow-xl shadow-black text-white">
            {title}
          </p>
          <p className='"w-full max-w-3xl mx-auto mt-4 z-10 px-4 text-base md:text-2xl text-shadow-xl shadow-black text-white'>
            {description}
          </p>
        </div>
      )}
    </Transition>
  );
}
