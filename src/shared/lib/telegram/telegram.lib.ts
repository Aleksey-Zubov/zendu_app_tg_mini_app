export function getTelegramInitData(): string {
  const tg = window.Telegram?.WebApp;

  if (!tg?.initData) {
    throw new Error(JSON.stringify(window.Telegram));
  }

  return tg.initData;
}
