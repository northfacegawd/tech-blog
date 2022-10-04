import React, { CSSProperties, useEffect, useState } from 'react';
import { Transition, TransitionStatus } from 'react-transition-group';

interface TopImageSectionProps {
  imageUrl: string;
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
  imageUrl,
  title,
}: TopImageSectionProps) {
  const [render, setRender] = useState<boolean>(false);

  useEffect(() => {
    setRender(true);
  }, []);

  return (
    <Transition in={render} timeout={duration} mountOnEnter>
      {(state) => (
        <div
          className="h-[50vh] md:h-[70vh] z-0 overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${imageUrl})`,
            ...defaultStyle,
            ...transitionStyle[state],
          }}
        >
          <p className="w-full max-w-3xl mx-auto z-10  pt-[35vh] md:pt-[40vh] px-4 text-2xl md:text-4xl text-shadow-xl shadow-black text-white">
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
