import React from 'react';
import { AESPositivityChart, RespiratoryChart } from '../components/Charts';
import References from '../components/References';
import { useLanguage } from '../context/LanguageContext';

const Pathogenesis = () => {
  const { t } = useLanguage();
  
  return (
    <div className="page-content animate-fade-in">
      <h2>{t('pathogenesis.title')}</h2>
      
      <div className="cards-grid">
        <div className="section-card">
          <h3>{t('pathogenesis.primary_title')}</h3>
          <p>{t('pathogenesis.primary_p')}<sup>[16-18]</sup>.</p>
        </div>
        
        <div className="section-card highlight">
          <h3>{t('pathogenesis.cns_title')}</h3>
          <p>{t('pathogenesis.cns_p')}<sup>[5-7]</sup>.</p>
          <AESPositivityChart />
        </div>

        <div className="section-card">
          <h3>{t('pathogenesis.resp_title')}</h3>
          <p>{t('pathogenesis.resp_p')}<sup>[8, 9, 19]</sup>.</p>
        </div>

        <div className="section-card">
          <h3>{t('pathogenesis.immune_title')}</h3>
          <p>{t('pathogenesis.immune_p')}<sup>[20, 21]</sup>.</p>
        </div>
      </div>
      <RespiratoryChart />
      <References citeIds={[5, 6, 7, 8, 9, 16, 17, 18, 19, 20, 21]} />
    </div>
  );
};

export default Pathogenesis;
