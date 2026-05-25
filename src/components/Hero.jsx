import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="section container" style={{ flexDirection: 'column', justifyContent: 'center', textAlign: 'center', minHeight: '100vh' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 style={{ marginBottom: '2rem' }}>
          BE<span className="accent-text">BOLD</span>.<br />
          BE CLEAR.
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', letterSpacing: '0.05em' }}
        >
          Tworzymy narzędzia cyfrowe dla liderów, którzy cenią bezkompromisową jakość i minimalistyczną formę.
        </motion.p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 2 }}
        style={{ position: 'absolute', bottom: '4rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <span style={{ fontSize: '0.7rem', fontWeight: 'bold', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1rem' }}>Scroll Down</span>
        <div style={{ width: '1px', height: '60px', background: 'var(--accent)' }} />
      </motion.div>
    </section>
  );
};

export default Hero;
