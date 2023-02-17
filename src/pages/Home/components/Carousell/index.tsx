import { useEffect, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import { KeenSliderHooks, KeenSliderInstance } from 'keen-slider';
import 'keen-slider/keen-slider.min.css';

import { SlideBanner, SlideBannerType } from '../SlideBanner';
import { SlideCourse, SlideCourseType } from '../SlideCourse';
import { SlideJourney, SlideJourneyType } from '../SlideJourney';

import { CarousellContainer, CarousellContent } from './styles';

interface CarousellProps {
  slides: SlideBannerType[] | SlideJourneyType[] | SlideCourseType[];
  variant: 'banner' | 'journey' | 'course';
  title?: string;
}

export function Carousell({ slides, variant, title }: CarousellProps) {
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
    instanceRef.current?.update();
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
        created() {
          handleLoading();
        },
      });
      break;
    case 'journey':
      setOptions({
        loop: true,
        slides: {
          perView: 1.25,
          spacing: 15,
        },
      });
      break;
    case 'course':
      setOptions({
        loop: true,
        slides: {
          perView: 1.5,
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
    <CarousellContainer variant={variant}>
      {title && <strong>{title}</strong>}

      <CarousellContent>
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
      </CarousellContent>
    </CarousellContainer>
  );
}
