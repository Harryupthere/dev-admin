import React, { useState } from 'react'
import { Editor } from 'primereact/editor';

const ProductDescriptions = () => {
  const [text, setText] = useState('');
  const [specification, setSpecification] = useState('');

  const descreptionHeader = () => {
    return (
      <span className="ql-formats">
        <select className="ql-size"></select>
        <button className="ql-bold"></button>
        <button className="ql-list" value="bullet"></button>
        <button className="ql-list" value="ordered"></button>
        <select className="ql-align"></select>
        <button className="ql-image"></button>
      </span>
    );
  }
  const specificationHeader = () => {
    return (
      <span className="ql-formats">
        <button className="ql-list" value="bullet"></button>
      </span>
    );
  };

  const specificationHead = specificationHeader();
  const description = descreptionHeader();


  return (
    <div className='product-descriptions theme-card'>
      <div className='main_heading'>
        <h2>Product Description</h2>
      </div>
      <div className="editor-card specification-editor">
        <div className='input-main-data'><label>Product Specification<span className='asterisk'> *</span></label></div>
        <Editor value={specification} onTextChange={(e) => setSpecification(e.htmlValue)} style={{ height: '240px' }} headerTemplate={specificationHead}
          placeholder='Type the product specification' />
      </div>
      <div className="editor-card">
        <div className='input-main-data'><label>Product Description<span className='asterisk'> *</span></label></div>
        <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '240px' }} headerTemplate={description}
          placeholder='Type the product description' />
      </div>
    </div>
  )
}

export default ProductDescriptions 
