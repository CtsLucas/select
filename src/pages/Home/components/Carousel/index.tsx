import { useEffect, useState } from 'react';
import { CaretLeft, CaretRight } from 'phosphor-react';
import { useKeenSlider } from 'keen-slider/react';
import { KeenSliderHooks, KeenSliderInstance } from 'keen-slider';
import 'keen-slider/keen-slider.min.css';

import { SlideBannerType } from '../SlideBanner';
import { SlideCourseType } from '../SlideCourse';
import { SlideJourneyType } from '../SlideJourney';

import { SlideBanner, SlideCourse, SlideJourney } from '@pages/Home/components';

import { CarouselContainer, CarouselContent } from './styles';

interface CarouselProps {
  slides: SlideBannerType[] | SlideJourneyType[] | SlideCourseType[];
  variant: 'banner' | 'journey' | 'course';
  title?: string;
}

export default function Carousel({ slides, variant, title }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [options, setOptions] = useState({});

  const [sliderRef, instanceRef] = useKeenSlider(options, [
    (slider) => {
      if (variant !== 'banner') {
        return;
      }

      let timeout: ReturnType<typeof setTimeout>;
      let mouseOver = false;
      function clearNextTimeout() {
        clearTimeout(timeout);
      }
      function nextTimeout() {
        clearTimeout(timeout);
        if (mouseOver) return;
        timeout = setTimeout(() => {
          slider.next();
        }, 5000);
      }
      slider.on('created', () => {
        slider.container.addEventListener('mouseover', () => {
          mouseOver = true;
          clearNextTimeout();
        });
        slider.container.addEventListener('mouseout', () => {
          mouseOver = false;
          nextTimeout();
        });
        nextTimeout();
      });
      slider.on('dragStarted', clearNextTimeout);
      slider.on('animationEnded', nextTimeout);
      slider.on('updated', nextTimeout);
    },
  ]);

  function handleLoading() {
    instanceRef.current?.update(instanceRef.current.options);
    setLoaded(true);
  }

  useEffect(() => {
    switch (variant) {
    case 'banner':
      setOptions({
        loop: true,
        // eslint-disable-next-line @typescript-eslint/ban-types
        slideChanged(slider: KeenSliderInstance<{}, {}, KeenSliderHooks>) {
          setCurrentSlide(slider.track.details.rel);
        },
      });
      break;
    case 'journey':
      setOptions({
        loop: true,
        mode: 'snap',
        slides: {
          perView: 'auto',
          spacing: 15,
        },
      });
      break;
    case 'course':
      setOptions({
        loop: true,
        mode: 'snap',
        renderMode: 'performance',
        slides: {
          perView: 'auto',
          spacing: 15,
        },
      });

      break;
    }
  }, [loaded]);

  if (!slides?.length) {
    return null;
  }

  return (
    <CarouselContainer variant={variant}>
      {title && <strong>{title}</strong>}

      <CarouselContent variant={variant}>
        <div className="navigation-wrapper">
          <div ref={sliderRef} className="keen-slider">
            {slides?.map((item) => {
              switch (variant) {
              case 'banner':
                return (
                  <div key={item.id} className="keen-slider__slide">
                    <SlideBanner
                      data={item as SlideBannerType}
                      onLoading={handleLoading}
                    />
                  </div>
                );
              case 'journey':
                return (
                  <div key={item.id} className="keen-slider__slide">
                    <SlideJourney
                      data={item as SlideJourneyType}
                      onLoading={handleLoading}
                    />
                  </div>
                );
              case 'course':
                return (
                  <div key={item.id} className="keen-slider__slide">
                    <SlideCourse
                      data={item as SlideCourseType}
                      onLoading={handleLoading}
                    />
                  </div>
                );
              }
            })}
          </div>
          {variant !== 'banner' && loaded && instanceRef.current && (
            <>
              {/* TO-DO: Create button component */}
              <button
                className="arrow arrow--left"
                onClick={() => instanceRef.current?.prev()}
              >
                <CaretLeft size={32} weight="bold" />
              </button>
              <button
                className="arrow arrow--right"
                onClick={() => instanceRef.current?.next()}
              >
                <CaretRight size={32} weight="bold" />
              </button>
            </>
          )}
        </div>
        <div className={variant === 'banner' ? 'dots' : ''}>
          {variant === 'banner' &&
            loaded &&
            instanceRef.current?.track?.details?.slides?.length &&
            [
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={'dot' + (currentSlide === idx ? ' active' : '')}
                ></button>
              );
            })}
        </div>
      </CarouselContent>
    </CarouselContainer>
  );
}
