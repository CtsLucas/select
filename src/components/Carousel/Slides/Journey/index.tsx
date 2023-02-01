import { ClockAfternoon } from 'phosphor-react';
import { JourneyContainer } from './styles';

export function Journey() {
  return (
    <JourneyContainer>
      <div className="header">
        <img
          src="https://content.staart.com/app/_p/e774057d-f0e8-4d5f-8076-33522fffb96d/thumb/Front-End.png"
          alt=""
        />
        <strong>Desenvolvimento Front End</strong>
      </div>
      <div className="content">
        <p>
          Que tal aprender a programar e desenvolver sites e aplicações Web
          completas? Essa jornada te guiará no caminho para praticar e obter os
          conhecimentos necessários e fundamentos sólidos para conseguir o seu
          primeiro emprego na área de desenvolvimento Front End.
        </p>
      </div>
      <div className="footer">
        <span>6 Cursos</span>
        <span>
          <ClockAfternoon />
          15h 51min
        </span>
      </div>
    </JourneyContainer>
  );
}
