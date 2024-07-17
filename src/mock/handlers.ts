import { http, HttpResponse } from "msw";
import { userData } from "./userListData";
import { userPostsData } from "./userPostsListData";

export const handlers = [
  http.get('https://jsonplaceholder.typicode.com/posts?userId=userId', ({ request }) => {
    const url = new URL(request.url)
    url.searchParams.set('userId', '1')
    console.log('q: ',url);
  
    // Return a mocked JSON response if the "q"
    // search parameter equals to a specific value.
    return HttpResponse.json(
      {
        userPostsData,
      },
      { status: 200 }
    );
  })
];
