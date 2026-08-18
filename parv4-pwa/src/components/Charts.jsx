import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';

// Data for African Seroprevalence
const africaData = [
  { country: 'Burkina Faso', prevalence: 37 },
  { country: 'DR Congo', prevalence: 35 },
  { country: 'Cameroon', prevalence: 25 },
  { country: 'South Africa', prevalence: 20 },
];

// Data for AES study (Gorakhpur)
const aesData = [
  { sample: 'CSF', positive: 25.6, negative: 74.4 },
  { sample: 'Plasma', positive: 19.3, negative: 80.7 },
];
import { useLanguage } from '../context/LanguageContext';

export const AfricaSeroprevalenceChart = () => {
  const { t } = useLanguage();
  const data = [
    { country: 'Burkina Faso', infants: 37, adults: 0, cohort: 'General' },
    { country: 'DRC', infants: 25, adults: 25, cohort: 'General' },
    { country: 'Cameroon', infants: 0, adults: 30, cohort: 'General' },
    { country: 'South Africa', adults: 37, cohort: 'General' }
  ];

  return (
    <div className="chart-container">
      <h3>{t('charts.africa_title')}</h3>
      <div style={{ width: '100%', height: '300px' }}>
        <ResponsiveContainer>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
            <XAxis dataKey="country" stroke="var(--text-secondary)" interval={0} angle={-45} textAnchor="end" />
            <YAxis label={{ value: '% IgG Positive', angle: -90, position: 'insideLeft', fill: 'var(--text-secondary)' }} stroke="var(--text-secondary)" />
            <Tooltip contentStyle={{ backgroundColor: 'var(--bg-card)', border: 'none', borderRadius: '8px', color: 'var(--text-primary)' }} />
            <Legend wrapperStyle={{ color: 'var(--text-primary)' }} />
            <Bar dataKey="infants" name="Infants/Children (%)" fill="var(--accent-red)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="adults" name="Adults (%)" fill="var(--accent-dark-red)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export const AESPositivityChart = () => {
  const { t } = useLanguage();
  const data = [
    { sample: 'CSF', positive: 25.6 },
    { sample: 'Plasma', positive: 19.3 }
  ];

  return (
    <div className="chart-container">
      <h3>{t('charts.aes_title')}</h3>
      <div style={{ width: '100%', height: '300px' }}>
        <ResponsiveContainer>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
            <XAxis dataKey="sample" stroke="var(--text-secondary)" />
            <YAxis label={{ value: '% Positive', angle: -90, position: 'insideLeft', fill: 'var(--text-secondary)' }} stroke="var(--text-secondary)" />
            <Tooltip contentStyle={{ backgroundColor: 'var(--bg-card)', border: 'none', borderRadius: '8px', color: 'var(--text-primary)' }} />
            <Bar dataKey="positive" name="PCR Positive (%)" fill="var(--accent-red)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export const RespiratoryChart = () => {
  const { t } = useLanguage();
  const data = [
    { group: 'SARI Cases (India)', positive: 26.55 },
    { group: 'SARI Controls', positive: 0.68 },
    { group: 'ILI Cases (India)', positive: 12.15 },
    { group: 'ILI Controls', positive: 0.45 }
  ];

  return (
    <div className="chart-container">
      <h3>{t('charts.resp_title')}</h3>
      <div style={{ width: '100%', height: '300px' }}>
        <ResponsiveContainer>
          <BarChart data={data} layout="vertical" margin={{ top: 20, right: 30, left: 60, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
            <XAxis type="number" stroke="var(--text-secondary)" />
            <YAxis type="category" dataKey="group" width={120} stroke="var(--text-secondary)" />
            <Tooltip contentStyle={{ backgroundColor: 'var(--bg-card)', border: 'none', borderRadius: '8px', color: 'var(--text-primary)' }} />
            <Bar dataKey="positive" name="% PCR Positive" fill="var(--accent-red)" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
