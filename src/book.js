import React from 'react'

const Book=(props)=>{
    console.log(props);
    const {img,title,author}=props.book; //destructuring.. now props. dot not needed
    const clickHandler=()=>{
         alert('Hello world!');
    }
    const complexExample=(author)=>{
         console.log(author);
    }

    return <article className='book' onMouseOver={()=>{
        console.log(title);
    }}>
        <img src={img}></img>
        <h1>{title}</h1>
        <h4 style={{color:'#617d98',fontSize: '0.75rem',marginTop: '0.25rem'}}>{author}</h4>
        {/*<p>{let x=6}</p> give error! */}
        {props.children}
        <button type="button" onClick={clickHandler}>Click Me</button>
        <button type="button" onClick={()=>complexExample(author)}>More complex example</button>
    </article>
};

export default Book
