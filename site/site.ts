// lib/site.ts
export const SITE_URL = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export const SITE_NAME = 'Christian Dennis Valdez Dulay - Portfolio Website';
export const AUTHOR = 'Christian Dennis Valdez Dulay';
