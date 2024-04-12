import React, { useState, useEffect } from 'react';

const DataAndExtractLink = ({ render }) => {
  const [data, setData] = useState({ link: null, loading: true, error: null });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.adkey-seo.com/api/website/get-website/295');
        const responseData = await response.json();

        if (responseData.offers && responseData.offers.length > 0) {
          const link = responseData.offers[0].link;
          setData({ link, loading: false, error: null });
        } else {
          setData({ link: null, loading: false, error: "Поле 'offers' порожнє або відсутнє в отриманих даних." });
        }
      } catch (error) {
        setData({ link: null, loading: false, error: `Помилка при виконанні запиту: ${error.message}` });
      }
    };

    if (data.loading) {
      fetchData();
    }
  }, [data.loading]);

  return render(data);
};

export default DataAndExtractLink;
