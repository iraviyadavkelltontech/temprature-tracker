import React from 'react';
import { Simplify } from 'type-fest';

export type InputProps = Simplify<
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name'> & {
    name?: string;
    type?: InputType;
    placeholder?: string;
    label?: string;
    help?: string;
    hint?: string;
    leadingAddOn?: JSX.Element | string;
    leadingElement?: JSX.Element | string;
    trailingElement?: string | JSX.Element;
    trailingAddOn?: JSX.Element | string;
    error?: boolean;
    warning?: boolean;
    errorMessage?: string;
    passwordPreview?: boolean;
  }
>;

export type InputType = 'number' | 'text' | 'password';
