const VITE_API_URL = import.meta.env.VITE_API_URL;

export async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> {
  const response = await fetch(`${VITE_API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(
      `API error: ${response.status} ${response.statusText}`,
    );
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return response.json();
}

export function apiPost<TResponse, TBody>(
  endpoint: string,
  body: TBody,
): Promise<TResponse> {
  return apiFetch<TResponse>(endpoint, {
    method: "POST",
    body: JSON.stringify(body),
  });
}
