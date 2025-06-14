import React from 'react';

const FormattedDate = ({ date }) => {
  const formattedDate = new Intl.DateTimeFormat('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));

  return <span>{formattedDate}</span>;
};

export default FormattedDate;