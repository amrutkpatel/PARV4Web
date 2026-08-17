import React from 'react';
import References from '../components/References';
import { useLanguage } from '../context/LanguageContext';

const Virology = () => {
  const { t } = useLanguage();
  
  return (
    <div className="page-content animate-fade-in">
      <h2>{t('virology.title')}</h2>
      <div className="section-card">
        <p>{t('virology.p1')}<sup>[10, 11]</sup>.</p>
        <ul className="mb-4">
          <li><span dangerouslySetInnerHTML={{ __html: t('virology.ns1') }}></span></li>
          <li><span dangerouslySetInnerHTML={{ __html: t('virology.vp') }}></span></li>
        </ul>
        <p>{t('virology.p2')}<sup>[10]</sup>.</p>
      </div>
      <References citeIds={[10, 11]} />
    </div>
  );
};

export default Virology;
