import { MutableRefObject } from 'react';
import {
  useKeenSlider,
  KeenSliderPlugin,
  KeenSliderInstance,
} from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import { CourseType } from '@/types/models';
import { CardCourse } from '@pages/Journey/components';

import { CarouselCourseContainer } from './styles';

interface CarouselCourseProps {
  slides: CourseType[];
}

export default function CarouselCourse({ slides }: CarouselCourseProps) {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    drag: false,
    initial: 0,
    slides: {
      perView: 1,
      origin: 'center',
    },
  });

  const [thumbnailRef, thumbnailInstanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      mode: 'snap',
      slides: {
        perView: 4,
        spacing: 8,
      },
      breakpoints: {
        '(max-width: 1100px)': {
          slides: {
            perView: 3,
            spacing: 8,
          },
        },
        '(max-width: 768px)': {
          slides: {
            perView: 'auto',
            spacing: 8,
          },
        },
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  function ThumbnailPlugin(
    mainRef: MutableRefObject<KeenSliderInstance | null>
  ): KeenSliderPlugin {
    return (slider) => {
      function removeActive() {
        slider.slides.forEach((slide) => {
          slide.classList.remove('active');
        });
      }
      function addActive(idx: number) {
        slider.slides[idx].classList.add('active');
      }

      function addClickEvents() {
        slider.slides.forEach((slide, idx) => {
          slide.addEventListener('click', () => {
            if (mainRef.current) mainRef.current.moveToIdx(idx);
          });
        });
      }

      slider.on('created', () => {
        if (!mainRef.current) return;
        addActive(slider.track.details.rel);
        addClickEvents();
        mainRef.current.on('animationStarted', (main) => {
          removeActive();
          const next = main.animator.targetIdx || 0;
          addActive(main.track.absToRel(next));
          slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
        });
      });
    };
  }

  function handleLoading() {
    instanceRef.current?.update(instanceRef.current.options);
    thumbnailInstanceRef.current?.update(thumbnailInstanceRef.current.options);
  }

  if (!slides?.length) {
    return null;
  }

  return (
    <CarouselCourseContainer>
      <div ref={sliderRef} className="keen-slider slider">
        {slides.map((slide: CourseType) => (
          <div key={slide.id} className="keen-slider__slide">
            <CardCourse data={slide} onLoading={handleLoading} />
          </div>
        ))}
      </div>

      <div ref={thumbnailRef} className="keen-slider thumbnail">
        {slides.map((slide: CourseType, index: number) => (
          <div key={slide.id} className="keen-slider__slide">
            <strong>{slide.title}</strong>
            <span>{index + 1}</span>
          </div>
        ))}
      </div>
    </CarouselCourseContainer>
  );
}
