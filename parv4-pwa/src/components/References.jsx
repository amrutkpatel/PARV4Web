import React from 'react';
import { references } from '../data/references';
import { useLanguage } from '../context/LanguageContext';

const References = ({ citeIds }) => {
  const { t } = useLanguage();
  
  if (!citeIds || citeIds.length === 0) return null;

  return (
    <div className="section-card references-section">
      <h3>{t('references.title')}</h3>
      <ol className="references-list">
        {citeIds.map((id) => (
          <li key={id} value={id}>
            <span dangerouslySetInnerHTML={{ __html: references[id] || 'Reference not found' }}></span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default References;
