import React, { useState } from 'react';

function Home() {
  const [formBgColor, setFormBgColor] = useState('#ffffff');
  const [selectedColor, setSelectedColor] = useState('#000000'); 
  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleChangeColor = () => {
    setFormBgColor(selectedColor);
  };

  return (
    <div style={{ backgroundColor: '#f5f5f5', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div
        style={{
          backgroundColor: formBgColor,
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h2 style={{ textAlign: 'center' }}>Color Picker</h2>
        <form>
          <div style={{ marginBottom: '10px' }}>
            <label>First name : </label>
            <input type="text" className="form-control" />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Last name : </label>
            <input type="text" className="form-control" />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Address : </label>
            <input type="text" className="form-control" />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Email : </label>
            <input type="email" className="form-control" />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Phone :</label>
            <input type="tel" className="form-control" />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Color Picker</label>
            <input
              type="color"
              value={selectedColor}
              onChange={handleColorChange}
              className="form-control"
              style={{ width: '100%' }}
            />
          </div>
          <button
            type="button"
            onClick={handleChangeColor}
            style={{
              backgroundColor: '#007bff',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              width: '100%',
            }}
          >
            CHANGE COLOR
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
