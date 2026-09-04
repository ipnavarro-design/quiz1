import React, { useState } from 'react';
import { Eyebrow } from '../components/Eyebrow';
import { ProgressBar } from '../components/ProgressBar';
import { ScreenHeading } from '../components/ScreenHeading';
import { TextField } from '../components/TextField';
import { PrimaryButton } from '../components/PrimaryButton';

interface ScreenNameProps {
  onContinue: (name: string) => void;
  defaultName?: string;
}

export const ScreenName: React.FC<ScreenNameProps> = ({
  onContinue,
  defaultName = '',
}) => {
  const [nombre, setNombre] = useState(defaultName);
  const [error, setError] = useState<string | undefined>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (isSubmitting) return;

    if (!nombre.trim()) {
      setError('Por favor ingresa tu nombre para personalizar tu plan.');
      return;
    }

    setIsSubmitting(true);
    onContinue(nombre.trim());
  };

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Header section with percentage & progress bar */}
      <div className="w-full">
        <Eyebrow percentage={24} />
        <ProgressBar progress={24} />
      </div>

      {/* Screen Title & Reinforcement */}
      <div className="w-full flex flex-col items-center text-center gap-2">
        <div className="inline-block bg-[#16A34A]/10 text-[#16A34A] border border-[#16A34A]/20 text-[13px] font-bold px-3 py-1 rounded-full">
          Personalización de tu programa
        </div>
        <ScreenHeading as="h2" id="q-name-title">
          Tu plan para aliviar tu dolor de espalda está a punto de comenzar. ¿Cómo te llamás?
        </ScreenHeading>
        <p className="text-[14px] text-neutral-500 max-w-sm mt-1">
          Queremos dirigirnos a vos con nombre propio en cada fase de tu recuperación.
        </p>
      </div>

      {/* Form Field */}
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
        <TextField
          id="input-early-name"
          label="Tu nombre"
          type="text"
          value={nombre}
          onChange={(val) => {
            setNombre(val);
            if (error) setError(undefined);
          }}
          placeholder="Ej. María o Carlos..."
          error={error}
          required
        />

        <div className="w-full pt-2">
          <PrimaryButton
            id="btn-name-continue"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Cargando...' : 'Continuar'}
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
};
