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

      <div className="section-card mt-4">
        <h3>{t('virology.genome_map_title')}</h3>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '30px 0', fontFamily: 'sans-serif', fontSize: '0.9rem' }}>
          <div style={{ padding: '0 10px', fontWeight: 'bold', color: 'var(--text-secondary)' }}>5'</div>
          <div style={{ height: '4px', width: '30px', background: '#cbd5e1' }}></div>
          <div style={{ background: '#3b82f6', color: 'white', padding: '12px 20px', borderRadius: '6px', flex: '1', maxWidth: '250px', textAlign: 'center', fontWeight: 'bold', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>NS Region</div>
          <div style={{ height: '4px', width: '30px', background: '#cbd5e1' }}></div>
          <div style={{ background: '#ef4444', color: 'white', padding: '12px 20px', borderRadius: '6px', flex: '1', maxWidth: '250px', textAlign: 'center', fontWeight: 'bold', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>VP / Structural</div>
          <div style={{ height: '4px', width: '30px', background: '#cbd5e1' }}></div>
          <div style={{ padding: '0 10px', fontWeight: 'bold', color: 'var(--text-secondary)' }}>3'</div>
        </div>
      </div>

      <div className="section-card mt-4">
        <h3>{t('virology.protein_table_title')}</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--accent-red)', textAlign: 'left' }}>
                <th style={{ padding: '8px' }}>Protein</th>
                <th style={{ padding: '8px' }}>Interpretation</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #334155' }}>
                <td style={{ padding: '8px' }}>NS1</td>
                <td style={{ padding: '8px' }}>{t('virology.protein_ns1_desc')}</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #334155' }}>
                <td style={{ padding: '8px' }}>VP1</td>
                <td style={{ padding: '8px' }}>{t('virology.protein_vp1_desc')}</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #334155' }}>
                <td style={{ padding: '8px' }}>VP2</td>
                <td style={{ padding: '8px' }}>{t('virology.protein_vp2_desc')}</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Other</td>
                <td style={{ padding: '8px' }}>{t('virology.protein_other_desc')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="cards-grid mt-4">
        <div className="section-card">
          <h3>{t('virology.known_unknown_title')} (Known)</h3>
          <ul>
            {t('virology.known_list', { returnObjects: true })?.map?.((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="section-card highlight">
          <h3>{t('virology.known_unknown_title')} (Unknown)</h3>
          <ul>
            {t('virology.unknown_list', { returnObjects: true })?.map?.((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <References citeIds={[10, 11]} />
    </div>
  );
};

export default Virology;
