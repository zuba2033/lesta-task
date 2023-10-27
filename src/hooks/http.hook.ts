import { useState, useCallback } from "react";
  
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type Process = 'waiting' | 'loading' | 'error';

export const useHttp = () => {

  const [process, setProcess] = useState<Process>('waiting');

  const request = async<T> (
    url: string, 
    method: HttpMethod = 'GET', 
    body: BodyInit | null = null, 
    headers: HeadersInit = {'Content-Type': 'application/json'}
      ): Promise<T> => {

    setProcess('loading');
    
    try {
      const response = await fetch(url, {method, body, headers});

      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }
        const data = await response.json() as T;
        return data;
    } catch (error) {
        setProcess('error');
        throw error;
    }

  };

  const clearError = useCallback(() => {
    setProcess('waiting');
}, [])

  return { process, setProcess, request, clearError };
}