import React from 'react';

/// <reference types="next" />
/// <reference types="next/types/global" />
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ion-icon': any;
    }
  }
}
