import React, { useState } from "react";
import styled from "styled-components";
import {
  defaultAnimateLayoutChanges,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {MeasuringStrategy } from '@dnd-kit/core';
import { Sortable } from './Sortable.tsx';
import CircularProgress from '@mui/material/CircularProgress';
import Button from "../Button.js";

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
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    const uploadedFile = e.target.files[0];
    const fileName = uploadedFile.name;
    setFilename(fileName);
    const fileReader = new FileReader();
    fileReader.readAsText(uploadedFile, "UTF-8");
    fileReader.onload = e => {
      setFile(e.target.result);
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
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
          setLoading(false);
          console.log(data);
          setItems(data['result']);
      })
      .catch(error => {
          // Handle error
          setLoading(false);
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
        <textarea value={file} onChange={(e) => setFile(e.target.value)} style={{ width: "70%", height: "10rem" }} />
        <br/>
        <Button onClick={handleSubmit} style={{ marginTop: '0.5rem' }}>Send JSON</Button>
      </div>
      {loading && <CircularProgress style={{ marginTop: '1rem' }}/>}
      {items.length > 0 && <Sortable
        animateLayoutChanges={animateLayoutChanges}
        measuring={{droppable: {strategy: MeasuringStrategy.Always}}}
        removable
        handle
        strategy={verticalListSortingStrategy}
        items={items?.map(item => JSON.stringify(item))}
      />}
      {/* TODO: IMPLEMENT DOWNLOADING CURRENT ITEMS TO FILE */}
      {items.length > 0 && <Button>Download Events JSON</Button>}
    </Wrapper>
  );
}

export default AdminPage;