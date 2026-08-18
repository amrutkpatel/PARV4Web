import React from 'react';
import { AESPositivityChart, RespiratoryChart } from '../components/Charts';
import { NavLink } from 'react-router-dom';
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
          <div style={{ marginTop: '10px' }}>
            <NavLink to="/aes-review" className="nav-link" style={{ display: 'inline-block', background: 'var(--accent-red)', padding: '5px 10px', borderRadius: '4px', textDecoration: 'none', color: 'white' }}>
              Read Full AES Evidence Review
            </NavLink>
          </div>
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

      <div className="section-card mt-4">
        <h3>{t('pathogenesis.tissue_title')}</h3>
        <div style={{ background: '#1e293b', color: 'white', padding: '15px', borderRadius: '8px', textAlign: 'center', fontFamily: 'monospace', margin: '15px 0' }}>
          {t('pathogenesis.tissue_model')}
        </div>
        <p style={{ color: 'var(--accent-red)', fontWeight: 'bold' }}>{t('pathogenesis.tissue_warning')}</p>
      </div>

      <div className="section-card mt-4">
        <h3>{t('pathogenesis.vl_title')}</h3>
        <div style={{ background: '#1e293b', color: 'white', padding: '15px', borderRadius: '8px', textAlign: 'center', fontFamily: 'monospace', margin: '15px 0' }}>
          {t('pathogenesis.vl_timeline')}
        </div>
        <p style={{ fontStyle: 'italic' }}>{t('pathogenesis.vl_warning')}</p>
      </div>

      <div className="section-card mt-4 highlight" style={{ borderLeftColor: 'var(--accent-red)' }}>
        <h3>{t('pathogenesis.evidence_title')}</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--accent-red)', textAlign: 'left' }}>
                <th style={{ padding: '8px' }}>Criterion</th>
                <th style={{ padding: '8px' }}>PARV4-AES Evidence</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #334155' }}><td style={{ padding: '8px' }}>Detection in cases</td><td style={{ padding: '8px' }}>{t('pathogenesis.evidence_detection')}</td></tr>
              <tr style={{ borderBottom: '1px solid #334155' }}><td style={{ padding: '8px' }}>Detection in CSF</td><td style={{ padding: '8px' }}>{t('pathogenesis.evidence_csf')}</td></tr>
              <tr style={{ borderBottom: '1px solid #334155' }}><td style={{ padding: '8px' }}>Complete/near-complete genomes</td><td style={{ padding: '8px' }}>{t('pathogenesis.evidence_genomes')}</td></tr>
              <tr style={{ borderBottom: '1px solid #334155' }}><td style={{ padding: '8px' }}>High viral load</td><td style={{ padding: '8px' }}>{t('pathogenesis.evidence_vl')}</td></tr>
              <tr style={{ borderBottom: '1px solid #334155' }}><td style={{ padding: '8px' }}>Case-control enrichment</td><td style={{ padding: '8px' }}>{t('pathogenesis.evidence_case_control')}</td></tr>
              <tr style={{ borderBottom: '1px solid #334155' }}><td style={{ padding: '8px' }}>Productive CNS replication</td><td style={{ padding: '8px' }}>{t('pathogenesis.evidence_cns_rep')}</td></tr>
              <tr style={{ borderBottom: '1px solid #334155' }}><td style={{ padding: '8px' }}>Animal model</td><td style={{ padding: '8px' }}>{t('pathogenesis.evidence_animal')}</td></tr>
              <tr><td style={{ padding: '8px' }}>Causality</td><td style={{ padding: '8px', fontWeight: 'bold' }}>{t('pathogenesis.evidence_causality')}</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <References citeIds={[5, 6, 7, 8, 9, 16, 17, 18, 19, 20, 21]} />
    </div>
  );
};

export default Pathogenesis;
