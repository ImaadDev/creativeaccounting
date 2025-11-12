'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';
import ScrollBasedAnimation from '../ScrollBasedAnimation';

export default function ContactSection() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    budget: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = t('contact.form.fields.name.error');
    if (!formData.email.trim()) newErrors.email = t('contact.form.fields.email.error');
    if (!formData.subject.trim()) newErrors.subject = t('contact.form.fields.subject.error');
    if (!formData.message.trim()) newErrors.message = t('contact.form.fields.message.error');
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = t('contact.form.fields.email.invalidError');
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert(t('contact.form.successMessage'));
      setFormData({ name: '', email: '', company: '', subject: '', budget: '', message: '' });
      setErrors({});
    }
  };

  const contactInfo = t('contact.leftPanel.contactInfo', { returnObjects: true });

  return (
    <section className="w-full relative" dir={isRTL ? "rtl" : "ltr"}>
      {/* Header */}
      <div className="bg-white text-center py-20 px-6 md:px-12 lg:px-24">
        <ScrollBasedAnimation direction="up" offset={50}>
          <span className="text-sm sm:text-base font-bold tracking-[0.2em] uppercase text-[#00B7FF] mb-4 inline-block">
            {t('contact.section.badge')}
          </span>
        </ScrollBasedAnimation>
        <ScrollBasedAnimation direction="up" offset={50} delay={0.1}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-[0.9]">
            {t('contact.section.title')}
            <br />
            <span className="text-[#00B7FF]">{t('contact.section.titleHighlight')}</span>
          </h1>
        </ScrollBasedAnimation>
        <ScrollBasedAnimation direction="up" offset={50} delay={0.2}>
          <p className="text-gray-600 max-w-3xl mx-auto mt-8 text-lg sm:text-xl leading-relaxed">
            {t('contact.section.description')}
          </p>
        </ScrollBasedAnimation>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Panel */}
        <div className="lg:w-2/5 w-full bg-[#00B7FF] text-white flex flex-col justify-center px-8 lg:px-16 py-20">
          <ScrollBasedAnimation direction="right" offset={50}>
            <div className="mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                {t('contact.leftPanel.title')}
                <span className="block text-black">{t('contact.leftPanel.titleHighlight')}</span>
              </h2>
              <div className="w-20 h-1 bg-[#6EFF33] mb-8"></div>
              <p className="text-blue-100 text-lg leading-relaxed">
                {t('contact.leftPanel.description')}
              </p>
            </div>
          </ScrollBasedAnimation>

          <div className="space-y-8">
            {contactInfo.map((item, index) => (
              <ScrollBasedAnimation key={item.label} direction="right" offset={50} delay={index * 0.1}>
                <div className={`group flex items-start gap-6 p-4 border-l-2 border-transparent hover:border-[#6EFF33] transition-all duration-300 ${isRTL ? 'border-l-0 border-r-2 flex-row-reverse' : ''}`}>
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                      {[Mail, Phone, MapPin, Clock][index] && (
                        [Mail, Phone, MapPin, Clock][index].name === 'Mail' ? <Mail className="w-6 h-6 text-black" /> :
                        [Mail, Phone, MapPin, Clock][index].name === 'Phone' ? <Phone className="w-6 h-6 text-[#00B7FF]" /> :
                        [Mail, Phone, MapPin, Clock][index].name === 'MapPin' ? <MapPin className="w-6 h-6 text-[#00B7FF]" /> :
                        <Clock className="w-6 h-6 text-[#00B7FF]" />
                      )}
                    </div>
                  </div>
                  <div className={`flex-grow ${isRTL ? 'text-right' : 'text-left'}`}>
                    <h3 className="font-semibold text-lg mb-1 text-[#6EFF33]">{item.label}</h3>
                    <p className="text-white font-medium mb-1">{item.value}</p>
                    <p className="text-blue-200 text-sm">{item.description}</p>
                  </div>
                </div>
              </ScrollBasedAnimation>
            ))}
          </div>

          <ScrollBasedAnimation direction="right" offset={50} delay={0.5}>
            <div className="mt-12 p-6 bg-white bg-opacity-10 border border-white border-opacity-20">
              <div className={`flex items-center gap-3 mb-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Globe className="w-5 h-5 text-gray-700" />
                <span className="font-semibold">{t('contact.leftPanel.globalReach.title')}</span>
              </div>
              <p className={`text-gray-600 text-sm ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('contact.leftPanel.globalReach.description')}
              </p>
            </div>
          </ScrollBasedAnimation>
        </div>

        {/* Right Panel */}
        <div className="lg:w-3/5 w-full bg-gray-50 flex flex-col justify-center px-8 lg:px-16 py-20">
          <ScrollBasedAnimation direction="left" offset={50}>
            <div className="max-w-2xl mx-auto w-full">
              <div className="mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                  {t('contact.rightPanel.title')}
                </h2>
                <div className="w-20 h-1 bg-[#00B7FF] mb-6"></div>
                <p className="text-gray-600 text-lg">
                  {t('contact.rightPanel.description')}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-semibold text-gray-700 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t('contact.form.fields.name.label')} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder={t('contact.form.fields.name.placeholder')}
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full border-2 px-4 py-4 outline-none focus:border-[#00B7FF] transition-colors bg-white ${
                        errors.name ? 'border-red-500' : 'border-gray-200'
                      } ${isRTL ? 'text-right' : 'text-left'}`}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-semibold text-gray-700 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t('contact.form.fields.email.label')} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder={t('contact.form.fields.email.placeholder')}
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full border-2 px-4 py-4 outline-none focus:border-[#00B7FF] transition-colors bg-white ${
                        errors.email ? 'border-red-500' : 'border-gray-200'
                      } ${isRTL ? 'text-right' : 'text-left'}`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-semibold text-gray-700 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t('contact.form.fields.subject.label')} *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder={t('contact.form.fields.subject.placeholder')}
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full border-2 px-4 py-4 outline-none focus:border-[#00B7FF] transition-colors bg-white ${
                      errors.subject ? 'border-red-500' : 'border-gray-200'
                    } ${isRTL ? 'text-right' : 'text-left'}`}
                  />
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <label className={`block text-sm font-semibold text-gray-700 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t('contact.form.fields.message.label')} *
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    placeholder={t('contact.form.fields.message.placeholder')}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full border-2 px-4 py-4 outline-none focus:border-[#00B7FF] transition-colors resize-none bg-white ${
                      errors.message ? 'border-red-500' : 'border-gray-200'
                    } ${isRTL ? 'text-right' : 'text-left'}`}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="group relative inline-flex items-center justify-center w-full md:w-auto px-12 py-4 font-bold text-[#00B7FF] bg-transparent border-2 border-[#00B7FF] hover:bg-[#00B7FF] hover:text-white transition-all duration-300 tracking-wide"
                  >
                    <span className={`relative z-10 flex items-center justify-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <Send className={`w-5 h-5 transition-transform ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                      {t('contact.form.submitButton')}
                    </span>
                  </button>
                  <p className={`text-gray-500 text-sm mt-3 ${isRTL ? 'text-right' : 'text-center'}`}>
                    {t('contact.form.helperText')}
                  </p>
                </div>
              </form>
            </div>
          </ScrollBasedAnimation>
        </div>
      </div>
    </section>
  );
}
