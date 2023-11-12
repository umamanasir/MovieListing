// components/AddMovieButton.tsx
import React from 'react';
import Link from 'next/link';
import MovieForm from './MovieForm';
// import styles from '../app/';

const Button: React.FC = () => {
  return (
    <Link href='/MovieForm' className='addButton'>
        <span>Add New Movie</span>
        <span className='plusIcon'>+</span>
    </Link>
  );
};

export default Button;
