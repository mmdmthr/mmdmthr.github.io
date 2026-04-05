import React from 'react';

const FormattedDate = ({ date }) => {
  const d = new Date(date);
  if (Number.isNaN(d.valueOf())) {
    return null;
  }

  const formattedDate = new Intl.DateTimeFormat('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(d);

  return <span>{formattedDate}</span>;
};

export default FormattedDate;