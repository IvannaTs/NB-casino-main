import { useEffect } from 'react';

function InternalPage() {
  useEffect(() => {
    // Перенаправлення на зовнішнє посилання при завантаженні сторінки
    window.location.href = 'https://www.simicart.com/manifest-generator.html/';
  }, []);

  return null; // Під час перенаправлення нічого не рендеримо
}

export default InternalPage;
