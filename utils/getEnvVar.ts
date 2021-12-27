function getEnvVar(name: string): string | undefined;
function getEnvVar(name: string, fallback: string): string;
function getEnvVar(name: string, fallback?: string): string | undefined {
  return process.env[name] || (typeof window !== 'undefined' && window[name]) || fallback;
}

export default getEnvVar;
