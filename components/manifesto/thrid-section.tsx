import { isVisible } from '@lib/utils';
import React, {
  CSSProperties,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Transition, TransitionStatus } from 'react-transition-group';

const duration = 1000;

const defaultStyle: CSSProperties = {
  transition: `${duration}ms ease-out`,
  transitionProperty: 'opacity, transform',
  transform: 'translate3d(0,10%,0)',
  opacity: 0,
};

const transitionStyles: Partial<Record<TransitionStatus, CSSProperties>> = {
  entering: { opacity: 1, transform: 'translate3d(0,0,0)' },
  entered: { opacity: 1, transform: 'translate3d(0,0,0)' },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

export default function ThirdSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean>(false);

  const onChangeVisible = useCallback(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (!isVisible(section.getBoundingClientRect())) return;
    setVisible(true);
  }, [sectionRef.current]);

  useEffect(() => {
    window.addEventListener('scroll', onChangeVisible);
    return () => {
      window.removeEventListener('scroll', onChangeVisible);
    };
  }, [onChangeVisible]);

  return (
    <Transition in={visible} timeout={duration}>
      {(state) => (
        <section className="section active px-4 py-8">
          <div className="max-layout">
            <span className="text-lg text-slate-600 dark:text-zinc-400">
              매니페스토
            </span>
            <h1 className="text-4xl mt-2">나의 기술 글쓰기 4원칙</h1>
            <div className="w-8 mx-auto my-6 h-[2px] bg-slate-400" />
          </div>
          <div
            className="mx-auto flex max-w-4xl flex-wrap"
            ref={sectionRef}
            style={{ ...defaultStyle, ...transitionStyles[state] }}
          >
            <div className="card text-gray-800 font-light w-full mt-4 md:w-[48%] md:m-[1%]">
              <h3 className="text-2xl">
                <span className="text-black font-normal">읽기 쉬운 글</span>을
                씁니다
              </h3>
              <p className="mt-6 indent-4">
                글이 읽기 쉽다는 것은 글의 구조가 명확하게 잡혀 있고, 글의
                흐름이 자연스럽게 이어져 독자가 기승전결을 한 눈에 파악할 수
                있는 상태를 의미합니다.
              </p>
              <p className="mt-6 indent-4">
                따라서 읽기 쉬운 글은 그 자체를 소리 내어 읽는 것만으로도 마치
                하나의 완성된 발표를 듣는 듯한 느낌을 주어야 합니다.
              </p>
            </div>
            <div className="card text-gray-800 font-light w-full mt-4 md:w-[48%] md:m-[1%]">
              <h3 className="text-2xl">
                <span className="text-black font-normal">겸손한 글</span>을
                씁니다
              </h3>
              <p className="mt-6 indent-4">
                누구에게나 주니어인 시절이 있었기에, 항상 초심을 잃지 않고
                겸손함을 추구하여야 합니다.
              </p>
              <p className="mt-6 indent-4">
                글에 대한 피드백은 열린 태도로 수용하고, 독자에게 불쾌감을 줄 수
                있는 표현은 하지 않습니다.
              </p>
            </div>
            <div className="card text-gray-800 font-light w-full mt-4 md:w-[48%] md:m-[1%]">
              <h3 className="text-2xl">
                <span className="text-black font-normal">친절한 글</span>을
                씁니다
              </h3>
              <p className="mt-6 indent-4">
                만약 내가 쓴 글이 하나의 제품이라고 생각한다면, 독자는 제
                고객과도 같습니다.
              </p>
              <p className="mt-6 indent-4">
                만약 내가 쓴 글이 하나의 제품이라고 생각한다면, 독자는 제
                고객과도 같습니다.
              </p>
            </div>
            <div className="card text-gray-800 font-light w-full mt-4 md:w-[48%] md:m-[1%]">
              <h3 className="text-2xl">
                <span className="text-black font-normal">재미있는 글</span>을
                씁니다
              </h3>
              <p className="mt-6 indent-4">
                글은 결국 사람이 읽습니다. 장황하거나 지루한 글은 독자에게 쉽게
                잊혀집니다.
              </p>
              <p className="mt-6 indent-4">
                정보와 재미가 적절하게 균형을 갖춘 글은 독자에게 깊은 인상을 줄
                수 있으므로 오래동안 기억에 남을 수 있습니다.
              </p>
            </div>
          </div>
        </section>
      )}
    </Transition>
  );
}
