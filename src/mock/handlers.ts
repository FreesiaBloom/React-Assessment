import { http, HttpResponse } from "msw";
import { userPostsData } from "./userPostsListData";
export const handlers = [

  // https://jsonplaceholder.typicode.com/posts?userId=1
  http.get(' https://jsonplaceholder.typicode.com/posts', ({ request }) => {
    // const url = new URL(request.url)
    // const userId = url.searchParams.get('userId')
    // if (!userId) {
    //   return new HttpResponse(null, { status: 404 })
    // }
    // console.log('userId: ', userId);
 
    // return HttpResponse.json({ userId })
  
    const url = new URL(request.url).searchParams
  const q = url.get('q')
  console.log('q: ', q);

  // Return a mocked JSON response if the "q"
  // search parameter equals to a specific value.
  if (!q) {
      return new HttpResponse(null, { status: 404 })
    }
  // if (q === 'userId=1') {
  //   return HttpResponse.json({ userPostsData })
  // }
  return HttpResponse.json({ userPostsData })
  })
];
