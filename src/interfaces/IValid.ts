import React from 'react';

export interface IValid {
  values: Record<string, string>,
  errors: Record<string, string>,
  isValid: boolean,
  handleChange: (data: React.FormEvent) => void,
}
