import React from 'react';
import References from '../components/References';
import { AfricaSeroprevalenceChart } from '../components/Charts';
import { useLanguage } from '../context/LanguageContext';

const Epidemiology = () => {
  const { t } = useLanguage();
  
  return (
    <div className="page-content animate-fade-in">
      <h2>{t('epidemiology.title')}</h2>
      
      <div className="section-card">
        <p>{t('epidemiology.p1')}</p>
        <ul>
          <li><span dangerouslySetInnerHTML={{ __html: t('epidemiology.g1') }}></span><sup>[12]</sup>.</li>
          <li><span dangerouslySetInnerHTML={{ __html: t('epidemiology.g2') }}></span><sup>[5-9]</sup>.</li>
          <li><span dangerouslySetInnerHTML={{ __html: t('epidemiology.g3') }}></span><sup>[3, 4]</sup>.</li>
        </ul>
      </div>

      <div className="cards-grid">
        <div className="section-card">
          <h3>{t('epidemiology.western_title')}</h3>
          <p>{t('epidemiology.western_p')}<sup>[10, 13]</sup>.</p>
        </div>
        <div className="section-card highlight">
          <h3>{t('epidemiology.africa_title')}</h3>
          <p>{t('epidemiology.africa_p')}<sup>[3, 4]</sup>.</p>
          <AfricaSeroprevalenceChart />
        </div>
      </div>
      
      <div className="section-card">
        <h3>{t('epidemiology.table_title')}</h3>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>{t('epidemiology.t_route')}</th>
                <th>{t('epidemiology.t_status')}</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>{t('epidemiology.routes.parenteral')}</td><td><span className="badge badge-strong">{t('epidemiology.badges.strong')}</span><sup>[10]</sup></td></tr>
              <tr><td>{t('epidemiology.routes.blood')}</td><td><span className="badge badge-strong">{t('epidemiology.badges.strong')}</span><sup>[13]</sup></td></tr>
              <tr><td>{t('epidemiology.routes.resp')}</td><td><span className="badge badge-suggestive">{t('epidemiology.badges.suggestive')}</span><sup>[8, 9]</sup></td></tr>
              <tr><td>{t('epidemiology.routes.fecal')}</td><td><span className="badge badge-unresolved">{t('epidemiology.badges.unresolved')}</span><sup>[14]</sup></td></tr>
              <tr><td>{t('epidemiology.routes.vertical')}</td><td><span className="badge badge-unresolved">{t('epidemiology.badges.unresolved')}</span><sup>[15]</sup></td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <References citeIds={[3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15]} />
    </div>
  );
};

export default Epidemiology;
