import { useAuth } from '@shared/hooks/useAuth';
import { PageLayout } from '@shared/ui/layouts';

export default function HomePage() {
  const { session } = useAuth();
  return (
    <PageLayout>
      Home Page
      <div>Session: {JSON.stringify(session)}</div>
      <div>
        Telegram InitData: {JSON.stringify(window.Telegram?.WebApp?.initData)}
      </div>
    </PageLayout>
  );
}
