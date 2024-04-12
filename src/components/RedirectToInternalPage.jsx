import { useRouter } from 'next/router';
import { useEffect } from 'react';

function RedirectToInternalPage() {
  const router = useRouter();

  // Редірект на внутрішню сторінку /internal-page
  const redirectToInternalPage = () => {
    router.push('/internal-page');
  };

  return (
    <div>
      <h1>Редірект на внутрішню сторінку</h1>
      <button className='btn btn-large' onClick={redirectToInternalPage}>Перейти на внутрішню сторінку</button>
    </div>
  );
}

function InternalPage() {
  useEffect(() => {
    window.location.href = 'https://www.simicart.com/manifest-generator.html/';
  }, []);

  return (
    <div>
      <h1>Перенаправлення на зовнішнє посилання</h1>
      <p>Ви будете перенаправлені через декілька секунд.</p>
    </div>
  );
}
