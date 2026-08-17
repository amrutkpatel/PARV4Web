import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Timeline = () => {
  const { t } = useLanguage();
  
  const events = [
    {
      year: '2005',
      title: t('overview.t2005_title'),
      description: t('overview.t2005_desc'),
      citations: [1]
    },
    {
      year: '2006',
      title: t('overview.t2006_title'),
      description: t('overview.t2006_desc'),
      citations: [2, 3]
    },
    {
      year: '2010',
      title: t('overview.t2010_title'),
      description: t('overview.t2010_desc'),
      citations: [3, 4]
    },
    {
      year: '2011',
      title: t('overview.t2011_title'),
      description: t('overview.t2011_desc'),
      citations: [5]
    },
    {
      year: '2015',
      title: t('overview.t2015_title'),
      description: t('overview.t2015_desc'),
      citations: [6]
    },
    {
      year: '2019',
      title: t('overview.t2019_title'),
      description: t('overview.t2019_desc'),
      citations: [7]
    },
    {
      year: '2020 - 2021',
      title: t('overview.t2020_title'),
      description: t('overview.t2020_desc'),
      citations: [8, 9]
    }
  ];

  return (
    <div className="section-card timeline-section">
      <h3>{t('overview.timeline_title')}</h3>
      <div className="timeline">
        {events.map((event, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <span className="timeline-year">{event.year}</span>
              <h4>{event.title}</h4>
              <p>
                {event.description} 
                <sup>[{event.citations.join(', ')}]</sup>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
