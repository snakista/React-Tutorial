import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

//using arrays

// setup vars
import {books} from './books'; // see no extension needed in js
import Book from './book'; // here name can differ since default export

function BookList(){
    return (
        <section className='booklist'>
            {books.map((book)=>{
                const {img,title,author}=book;
                return (
                     <Book key={book.id} book={book}></Book>
                );
            })}
        </section>
    );
}


ReactDom.render(<BookList/>,document.getElementById('root'));