import { useAuth } from '@shared/hooks/useAuth';
import { PageLayout } from '@shared/ui/layouts';

export default function HomePage() {
  const { session } = useAuth();
  return (
    <PageLayout>
      Home Page
      <div>Session: {JSON.stringify(session)}</div>
      <div>Window Telegram: {JSON.stringify(window.Telegram)}</div>
    </PageLayout>
  );
}
