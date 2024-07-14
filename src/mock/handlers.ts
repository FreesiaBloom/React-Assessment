import { http, HttpResponse } from "msw";
 
export const handlers = [
  http.get('https://jsonplaceholder.typicode.com/users', () => {
    return new HttpResponse('Hello', {
      status: 200,
    })
  }),
]