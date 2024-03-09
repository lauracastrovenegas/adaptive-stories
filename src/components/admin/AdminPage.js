import React, { useState } from "react";
import styled from "styled-components";
import {
  defaultAnimateLayoutChanges,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {MeasuringStrategy } from '@dnd-kit/core';
import { Sortable } from './Sortable.tsx';

const Wrapper = styled.div`
  padding: 2rem;
  background-color: #111111;
  min-height: 100vh;
  color: white;
`;

const AdminPage = () => {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("");
  const [items, setItems] = useState([]);
  // TODO: SHOW LOADING WHEN WAITING FOR OPENAI RESPONSE
  // const [loading, setLoading] = useState(false);

  const handleChange = e => {
    const uploadedFile = e.target.files[0];
    const fileName = uploadedFile.name;
    console.log('Uploaded file name:', fileName);
    setFilename(fileName);
    const fileReader = new FileReader();
    fileReader.readAsText(uploadedFile, "UTF-8");
    fileReader.onload = e => {
      setFile(e.target.result);
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch('http://127.0.0.1:5000/run-extract-events', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: file, filename: filename })
    })
      .then(response => response.json())
      .then(data => {
          // Handle response from Flask
          console.log(data);
          setItems(data['result']);
      })
      .catch(error => {
          // Handle error
          console.error('Error:', error);
      });
  };

  const animateLayoutChanges = (args) =>
      defaultAnimateLayoutChanges({...args, wasDragging: true});
  return (
    <Wrapper>
      <h1>Admin</h1>
      <input style={{ marginBottom: "1rem" }} type="file" onChange={handleChange} />
      <div>
        <form onSubmit={handleSubmit}>
          <textarea value={file} onChange={(e) => setFile(e.target.value)} style={{ width: "70%", height: "10rem" }} />
          <br/>
          <button type="submit">Send JSON</button>
        </form>
      </div>
      {items.length > 0 && <Sortable
        animateLayoutChanges={animateLayoutChanges}
        measuring={{droppable: {strategy: MeasuringStrategy.Always}}}
        removable
        handle
        strategy={verticalListSortingStrategy}
        items={items?.map(item => JSON.stringify(item))}
      />}
      {/* TODO: IMPLEMENT DOWNLOADING CURRENT ITEMS TO FILE */}
      {items.length > 0 && <button style={{ alignSelf: "center" }}>Download Events JSON</button>}
    </Wrapper>
  );
}

export default AdminPage;