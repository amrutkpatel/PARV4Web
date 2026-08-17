import React from 'react';
import References from '../components/References';
import { useLanguage } from '../context/LanguageContext';

const Summary = () => {
  const { t } = useLanguage();
  
  return (
    <div className="page-content animate-fade-in">
      <h2>{t('summary.title')}</h2>
      <div className="section-card">
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>{t('summary.t_q')}</th>
                <th>{t('summary.t_a')}</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>{t('summary.q1')}</td><td><span dangerouslySetInnerHTML={{ __html: t('summary.a1') }}></span><sup>[1, 10]</sup></td></tr>
              <tr><td>{t('summary.q2')}</td><td><span dangerouslySetInnerHTML={{ __html: t('summary.a2') }}></span><sup>[10, 11]</sup></td></tr>
              <tr><td>{t('summary.q3')}</td><td><span dangerouslySetInnerHTML={{ __html: t('summary.a3') }}></span><sup>[3, 4]</sup></td></tr>
              <tr><td>{t('summary.q4')}</td><td><span dangerouslySetInnerHTML={{ __html: t('summary.a4') }}></span><sup>[6-9]</sup></td></tr>
              <tr><td>{t('summary.q5')}</td><td><span dangerouslySetInnerHTML={{ __html: t('summary.a5') }}></span><sup>[5-7]</sup></td></tr>
              <tr><td>{t('summary.q6')}</td><td><span dangerouslySetInnerHTML={{ __html: t('summary.a6') }}></span></td></tr>
              <tr><td>{t('summary.q7')}</td><td><span dangerouslySetInnerHTML={{ __html: t('summary.a7') }}></span><sup>[10]</sup></td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <References citeIds={[1, 3, 4, 5, 6, 7, 8, 9, 10, 11]} />
    </div>
  );
};

export default Summary;
