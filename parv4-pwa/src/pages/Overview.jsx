import React from 'react';
import References from '../components/References';
import Timeline from '../components/Timeline';
import { useLanguage } from '../context/LanguageContext';

const Overview = () => {
  const { t } = useLanguage();
  
  return (
    <div className="page-content animate-fade-in">
      <h2>{t('overview.title')}</h2>
      <div className="section-card">
        <p dangerouslySetInnerHTML={{ __html: t('overview.p1') }}></p>
        <p>{t('overview.p2')}</p>
      </div>
      <Timeline />
      <References citeIds={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />
    </div>
  );
};

export default Overview;
