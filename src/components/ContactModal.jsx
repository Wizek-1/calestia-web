import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Button } from "./ui/Button";

const ContactModal = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState('idle'); // idle, sending, success, error
  const [formData, setFormData] = useState({
    user_name: '',
    user_contact: '',
    project_type: '',
    project_description: '',
    project_budget: '',
    user_email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Service ID: service_
      // Template ID: template_
      // Public Key: 

      const result = await emailjs.send(
        'SERVICE ITD',
        'TEMPLATE ID',
        {
          ...formData,
          to_email: 'EMAIL'
        },
        'PUBLIC KEY'
      );

      console.log('Email sent:', result.text);
      setStatus('success');

      // Auto close after success
      setTimeout(() => {
        onClose();
        setStatus('idle');
        setFormData({
          user_name: '',
          user_contact: '',
          project_type: '',
          project_description: '',
          project_budget: '',
          user_email: ''
        });
      }, 3000);

    } catch (error) {
      console.error('Email error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', damping: 25, stiffness: 300 }
    },
    exit: { opacity: 0, scale: 0.95, y: 20 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            className="relative w-full max-w-2xl bg-card border border-border rounded-2xl shadow-2xl overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div className="px-8 py-6 border-b border-border flex items-center justify-between bg-secondary/30">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Stwórz Zlecenie</h2>
                <p className="text-muted-foreground text-sm mt-1">Opisz swoje zlecenie, a my zajmiemy się resztą.</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-secondary rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-muted-foreground" />
              </button>
            </div>

            {/* Content Container */}
            <div className="p-8 overflow-y-auto custom-scrollbar min-h-[400px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-6"
                  >
                    <div className="flex justify-center">
                      <div className="w-20 h-20 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="w-10 h-10 text-green-500" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold tracking-tight">Brief przesłany pomyślnie!</h3>
                      <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                        Dziękujemy za zaufanie. Nasz zespół przeanalizuje Twoje zapytanie i skontaktuje się z Tobą w ciągu najbliższych <span className="text-foreground font-semibold">24 godzin</span>, aby omówić szczegóły współpracy.
                      </p>
                    </div>
                    <button
                      onClick={onClose}
                      className="text-sm font-medium text-accent hover:underline transition-all"
                    >
                      Zamknij to okno
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground ml-1">Imię i nazwisko</label>
                        <input
                          required
                          name="user_name"
                          value={formData.user_name}
                          onChange={handleChange}
                          className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                          placeholder="np. Jan Kowalski"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground ml-1">E-mail</label>
                        <input
                          required
                          type="email"
                          name="user_email"
                          value={formData.user_email}
                          onChange={handleChange}
                          className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                          placeholder="przykład@gmail.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground ml-1">Dane kontaktowe (opcjonalnie)</label>
                        <input
                          name="user_contact"
                          value={formData.user_contact}
                          onChange={handleChange}
                          className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                          placeholder="np. Numer telefonu"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground ml-1">Typ zlecenia</label>
                        <input
                          required
                          name="project_type"
                          value={formData.project_type}
                          onChange={handleChange}
                          className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                          placeholder="np. Sklep internetowy"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground ml-1">Opis projektu</label>
                      <textarea
                        required
                        name="project_description"
                        value={formData.project_description}
                        onChange={handleChange}
                        rows={4}
                        className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                        placeholder="Co dokładnie ma zawierać Twoja strona?"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground ml-1">Zakładany budżet</label>
                      <input
                        required
                        name="project_budget"
                        value={formData.project_budget}
                        onChange={handleChange}
                        className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                        placeholder="np. 5000 PLN"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4 flex justify-center">
                      <Button
                        type="submit"
                        disabled={status === 'sending'}
                        className="w-full h-12 text-base font-bold shadow-lg shadow-accent/5 hover:shadow-accent/10 transition-all duration-300"
                      >
                        {status === 'idle' && (
                          <div className="flex items-center gap-2">
                            Wyślij zlecenie
                            <Send className="w-4 h-4" />
                          </div>
                        )}
                        {status === 'sending' && (
                          <div className="flex items-center gap-2">
                            Wysyłanie...
                            <Loader2 className="w-4 h-4 animate-spin" />
                          </div>
                        )}
                        {status === 'error' && (
                          <span>Błąd wysyłki. Spróbuj ponownie.</span>
                        )}
                      </Button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
