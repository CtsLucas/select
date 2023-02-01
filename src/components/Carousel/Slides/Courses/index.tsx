import { ChartBar, Clock } from 'phosphor-react';
import { CoursesContainer } from './styles';

export function Courses() {
  return (
    <CoursesContainer>
      <img
        src="https://content.staart.com/app/_c/19a31b7a-1286-4927-830e-564cbcd54a23/thumb/144c3db7-ff9d-45a6-8c9e-f48d28792837.png"
        alt=""
      />
      <div className="info">
        <strong>Programação Front-end do Zero</strong>
        <span>Leonardo Scorza</span>
        <div className="details">
          <span>
            <ChartBar />
            Iniciante
          </span>
          <span>
            <Clock />
            54min 34s
          </span>
        </div>
      </div>
    </CoursesContainer>
  );
}
