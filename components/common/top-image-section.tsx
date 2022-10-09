import Image from 'next/image';
import React, { CSSProperties, useEffect, useMemo, useState } from 'react';
import { Transition, TransitionStatus } from 'react-transition-group';
import manifesto from '@public/images/manifesto.webp';
import resume from '@public/images/resume.webp';
import home from '@public/images/home.jpeg';
import posts from '@public/images/posts.webp';

interface TopImageSectionProps {
  category: 'resume' | 'manifesto' | 'home' | 'posts';
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
      home,
      posts,
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
          className="h-[50vh] md:h-[60vh] overflow-hidden relative flex flex-col justify-end pb-8"
          style={{ ...defaultStyle, ...transitionStyle[state] }}
        >
          <Image
            src={imageSrc}
            layout="fill"
            objectFit="cover"
            className="absolute -z-10 position"
            placeholder="blur"
            alt={category}
          />
          <p className="w-full max-w-3xl mx-auto z-10 px-4 text-2xl md:text-4xl text-shadow-xl shadow-black text-white">
            {title}
            <br />
            <span className="text-lg md:text-2xl">{description}</span>
          </p>
        </div>
      )}
    </Transition>
  );
}
