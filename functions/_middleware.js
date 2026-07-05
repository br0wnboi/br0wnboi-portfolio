export async function onRequest(context) {
  const request = context.request;
  const url = new URL(request.url);
  const userAgent = request.headers.get("User-Agent") || "";

  // Check if the request is from a terminal client (curl, wget, httpie)
  const isTerminal = /curl|wget|httpie/i.test(userAgent);

  if (isTerminal) {
    // Only redirect if they are asking for a page (no extension) or the root
    if (!url.pathname.includes('.') || url.pathname.endsWith('.html')) {
      let newPath = url.pathname;
      
      // Map paths to their corresponding index.txt file
      if (newPath.endsWith('/')) {
        newPath += 'index.txt';
      } else if (newPath.endsWith('.html')) {
        newPath = newPath.replace('.html', '/index.txt');
      } else {
        newPath += '/index.txt';
      }
      
      // Serve the static text file instead of the HTML page
      return context.env.ASSETS.fetch(new URL(newPath, request.url));
    }
  }

  // Otherwise, proceed normally (serve HTML to browsers)
  return context.next();
}
