import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  company: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', company: '' });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('[Whatalarm Form Submission]:', formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (submitted) {
    return (
      <div class="p-8 bg-blue-50 border border-blue-200 rounded-xl text-center">
        <div class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">✓</div>
        <h3 class="text-lg font-bold text-slate-900 mb-2">Solicitud recibida correctamente</h3>
        <p class="text-sm text-slate-600">Nos pondremos en contacto contigo en menos de 24 horas hábiles para coordinar la demo.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} class="space-y-4 max-w-lg mx-auto bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
      <div>
        <label htmlFor="name" class="block text-sm font-medium text-slate-700 mb-1">Nombre completo *</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          class="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none text-slate-900 text-sm transition"
          placeholder="Ej. Martín Gómez"
        />
      </div>
      <div>
        <label htmlFor="email" class="block text-sm font-medium text-slate-700 mb-1">Correo corporativo *</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          class="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none text-slate-900 text-sm transition"
          placeholder="martin@empresa.com"
        />
      </div>
      <div>
        <label htmlFor="company" class="block text-sm font-medium text-slate-700 mb-1">Empresa (opcional)</label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          class="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none text-slate-900 text-sm transition"
          placeholder="Nombre de la empresa"
        />
      </div>
      <button
        type="submit"
        class="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-sm transition-colors shadow-sm"
      >
        Solicitar demo gratis
      </button>
      <p class="text-xs text-slate-500 text-center">Sin tarjeta de crédito. Configuración asistida en 15 minutos.</p>
    </form>
  );
};