export function buildDeepLinkFromNotificationData(data: any): string | null {
  const navigationId = data?.navigationId;
  if (!navigationId) return null;

  switch (navigationId) {
    case 'welcome':
      return 'myapp://welcome';
    case 'ready':
      return 'myapp://ready';
    case 'signin':
      return 'myapp://signin';
    case 'register':
      return 'myapp://register';
    case 'home':
      return 'myapp://home';
    default:
      return null;
  }
}
