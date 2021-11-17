import { AppState } from './../redux/store';
import { ErrorMessage, HttpMethod } from './../types';

export async function loginRequest(email: string, password: string): Promise<AppState | void> {
  const result = await fetchHelper('/login', 'POST', { email, password });

  const body: AppState | ErrorMessage = await result.json();

  if (result.status !== 200) {
    const errorMessage: ErrorMessage = body as ErrorMessage;
    return console.error(errorMessage.error);
    // TODO set an error message to display back to the user
  }

  return body as AppState;
}

async function fetchHelper<T>(url: string, method: HttpMethod, bodyObject: T): Promise<Response> {
  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
  };

  if (bodyObject !== undefined) options.body = JSON.stringify(bodyObject);

  return fetch(url, options);
}
