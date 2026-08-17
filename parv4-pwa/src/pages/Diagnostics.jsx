import React from 'react';
import References from '../components/References';
import { useLanguage } from '../context/LanguageContext';

const Diagnostics = () => {
  const { t } = useLanguage();
  
  return (
    <div className="page-content animate-fade-in">
      <h2>{t('diagnostics.title')}</h2>
      
      <div className="cards-grid">
        <div className="section-card">
          <h3>{t('diagnostics.diag_title')}</h3>
          <ul>
            <li><span dangerouslySetInnerHTML={{ __html: t('diagnostics.pcr') }}></span><sup>[5, 7, 8, 9, 13, 14]</sup>.</li>
            <li><span dangerouslySetInnerHTML={{ __html: t('diagnostics.sero') }}></span><sup>[13, 22, 23]</sup>.</li>
            <li><span dangerouslySetInnerHTML={{ __html: t('diagnostics.meta') }}></span><sup>[1, 5, 7]</sup>.</li>
          </ul>
        </div>

        <div className="section-card">
          <h3>{t('diagnostics.vax_title')}</h3>
          <p>
            <span dangerouslySetInnerHTML={{ __html: t('diagnostics.vax_p') }}></span><sup>[22, 23]</sup><span dangerouslySetInnerHTML={{ __html: t('diagnostics.vax_p2') }}></span><sup>[10, 12]</sup>.
          </p>
        </div>
      </div>
      <References citeIds={[1, 5, 7, 8, 9, 10, 12, 13, 14, 22, 23]} />
    </div>
  );
};

export default Diagnostics;
