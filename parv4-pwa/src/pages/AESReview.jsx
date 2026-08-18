import React from 'react';
import References from '../components/References';
import { useLanguage } from '../context/LanguageContext';

const AESReview = () => {
  const { t } = useLanguage();
  
  return (
    <div className="page-content animate-fade-in">
      <h2>{t('aesReview.title')}</h2>
      
      <div className="cards-grid">
        <div className="section-card highlight">
          <p><strong>{t('aesReview.discovery')}</strong></p>
        </div>

        <div className="section-card">
          <h3>Key Evidence</h3>
          <ul className="mb-4">
            <li>{t('aesReview.bullet_1')}</li>
            <li>{t('aesReview.bullet_2')}</li>
            <li>{t('aesReview.bullet_3')}</li>
            <li>{t('aesReview.bullet_4')}</li>
            <li>{t('aesReview.bullet_5')}</li>
          </ul>
        </div>
      </div>

      <div className="section-card highlight mt-4" style={{borderLeftColor: 'var(--accent-red)'}}>
        <h3>Critical Conclusion</h3>
        <p><strong>{t('aesReview.conclusion')}</strong></p>
      </div>

      <References citeIds={[5, 6, 7]} />
    </div>
  );
};

export default AESReview;
