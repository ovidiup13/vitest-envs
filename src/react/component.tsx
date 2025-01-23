import React, { useEffect, useState } from 'react';

export default function ExampleComponent(): React.ReactElement {
  const [message, setMessage] = useState('Hello, World!');

  useEffect(() => {
    setMessage('Hello, Browser!');
  }, []);

  return <div>{message}</div>;
}
