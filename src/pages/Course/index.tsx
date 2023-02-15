import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChartBar, FileArrowDown, Medal, MonitorPlay } from 'phosphor-react';

import { api } from '../../lib/axios';
import { CourseType } from '../../@types/Contents';
import { formatLevel } from '../../utils/formatters';

import { Accordion } from './components/Accordion';

import {
  BannerWrapper,
  CourseContainer,
  CourseContent,
  Details,
  Modules,
} from './styles';

export function Course() {
  const { id } = useParams();

  const [courses, setCourses] = useState<CourseType>();

  const fetchCourses = useCallback(async () => {
    const { data } = await api.get(`/courses/${id}`);

    setCourses(data || []);
  }, []);

  useEffect(() => {
    fetchCourses();
  }, []);

  const modulesMock = [
    {
      id: '1',
      title: 'Introdução',
      duration: 2880795,
      lessons: [
        {
          id: '1',
          title: 'Iniciando a aplicação',
          duration: 2880795,
          description: '',
          status: '',
        },
        {
          id: '2',
          title: 'Implementando o formulário',
          duration: 2880795,
          description: '',
          status: '',
        },
        {
          id: '3',
          title: 'Implementando o feed',
          duration: 2880795,
          description: '',
          status: '',
        },
        {
          id: '4',
          title: 'Feed sem itens',
          duration: 2880795,
          description: '',
          status: '',
        },
      ],
    },
    {
      id: '2',
      title: 'Construção da Interface',
      duration: 2880795,
      lessons: [
        {
          id: '1',
          title: 'Iniciando a aplicação',
          duration: 2880795,
          description: '',
          status: '',
        },
        {
          id: '2',
          title: 'Implementando o formulário',
          duration: 2880795,
          description: '',
          status: '',
        },
        {
          id: '3',
          title: 'Implementando o feed',
          duration: 2880795,
          description: '',
          status: '',
        },
        {
          id: '4',
          title: 'Feed sem itens',
          duration: 2880795,
          description: '',
          status: '',
        },
      ],
    },
  ];

  return (
    <CourseContainer>
      <BannerWrapper>
        <strong>{courses?.title}</strong>

        <p>{courses?.description}</p>
      </BannerWrapper>

      <CourseContent>
        <Details>
          <strong>Detalhes do curso</strong>
          <div className="details-wrapper">
            <div className="details-item">
              <MonitorPlay size={24} />
              <span>{courses?.modules.length} Capítulos</span>
            </div>
            <div className="details-item">
              <FileArrowDown size={24} />
              <span>0 materiais extras</span>
            </div>
            <div className="details-item">
              <ChartBar size={24} />
              <span>{formatLevel(courses?.level || '')}</span>
            </div>
            <div className="details-item">
              <Medal size={24} />
              Certificado ao concluir o curso
            </div>
          </div>
        </Details>

        <Modules>
          <strong>Capítulos do curso</strong>

          <div className="modules-wrapper ">
            <Accordion data={modulesMock} />
          </div>
        </Modules>
      </CourseContent>
    </CourseContainer>
  );
}
