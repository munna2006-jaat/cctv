import React from 'react';
import { ShieldCheck, Video, Cpu, Check } from 'lucide-react';
import { cameraSolutions } from '../data/services';

export default function CameraSolutions() {
  const icons = [
    <Video size={22} color="#d99726" />,
    <ShieldCheck size={22} color="#d99726" />,
    <Cpu size={22} color="#d99726" />
  ];

  return (
    <section className="content-section section-white" id="solutions">
      <div className="section-header-block">
        <h2 className="section-main-title">Proposal Solutions</h2>
        <p className="section-subtitle-text">
          Comprehensive Surveillance Infrastructure Designed for Long-Term Reliability &amp; Scalability
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {cameraSolutions.map((sol, idx) => (
          <div 
            key={idx} 
            style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '20px 18px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
              <div style={{
                background: 'rgba(217, 151, 38, 0.15)',
                padding: '10px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {icons[idx]}
              </div>
              <div>
                <h3 style={{ fontSize: '17px', fontWeight: '800', color: '#0f172a', lineHeight: 1.2 }}>
                  {sol.title}
                </h3>
                <span style={{ fontSize: '11px', color: '#64748b', fontWeight: '600', textTransform: 'uppercase' }}>
                  {sol.subtitle}
                </span>
              </div>
            </div>

            <p style={{ fontSize: '13.5px', color: '#334155', fontWeight: '500', marginBottom: '12px' }}>
              <strong style={{ color: '#0f172a' }}>Key Advantage:</strong> {sol.benefits}
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {sol.features.map((item, fIdx) => (
                <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#475569' }}>
                  <span style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: '#22c55e',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Check size={10} strokeWidth={3.5} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
