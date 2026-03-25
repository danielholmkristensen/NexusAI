export const config = {
  matcher: ['/STARK-procurement', '/STARK-procurement/:path*'],
};

export default function middleware(request) {
  const url = new URL(request.url);

  // Check for auth cookie
  const cookies = request.headers.get('cookie') || '';
  const hasAuth = cookies.includes('stark_auth=verified');

  if (hasAuth) {
    return; // Allow through
  }

  // Redirect to login page
  return Response.redirect(new URL('/STARK-procurement-auth/', request.url), 302);
}
