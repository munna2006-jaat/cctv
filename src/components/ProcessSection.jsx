import React from 'react';
import { implementationPhases } from '../data/process';

export default function ProcessSection() {
  return (
    <section className="process-section" id="process">
      <div className="section-header-block">
        <h2 className="section-main-title">Implementation Plan</h2>
        <p className="section-subtitle-text">
          Our Systematic 5-Phase Deployment Methodology Ensuring Flawless Execution
        </p>
      </div>

      <div className="phases-timeline">
        {implementationPhases.map((phase, idx) => (
          <div key={idx} className="phase-card">
            <div className="phase-tag">{phase.phase}</div>
            <h3 className="phase-header-title">{phase.title}</h3>

            <div className="phase-items-list">
              {phase.items.map((item, itemIdx) => (
                <div key={itemIdx} className="phase-sub-item">
                  <strong>• {item.subtitle}:</strong> {item.text}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
