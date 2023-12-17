// src/components/AnimatedTimeline.jsx

import React, { useState, useEffect } from 'react';
import ReactFlow, { addEdge, MiniMap, Controls, Background } from 'react-flow-renderer';

const nodeStyles = {
  border: '1px solid #777',
  padding: '10px',
  borderRadius: '3px',
  background: '#9CA8B3',
  color: '#FFF',
};

const data = [
  { title: "Solar Plant" },
  { title: "Water Plant" },
  { title: "Water Plant" },
  { title: "Water Plant" },
  { title: "Water Plant" },
  { title: "Water Plant" },
  { title: "Water Plant" },
  { title: "Water Plant" },
];

const value = 0;
const value1 = 10;

function Timeline() {
  return (
    <div className="vert">
      <div
        className="containers2 on"
        style={{
          textAlign: "center",
          display: "flex",
          gap: "1em",
          justifyContent: "space-evenly",
        }}
      >
        <img src={svg} alt="image1" />
        <Info title="Utility Grid" main="15kWh" />
      </div>
      <div style={{ width: "40rem", height: "70vh" }}>
        <Chrono mode="VERTICAL_ALTERNATING" items={data}>
          <div>
            <div className="left-panel">
              <div className={`containers2 ${value > 0 ? "on" : ""}`}>
                <Info title="Utility Grid" main={`${value} kWh`} />
              </div>
              <div className={`containers2 ${value1 > 0 ? "on" : ""}`}>
                <Info title="Utility Grid" main={`${value1} kWh`} />
              </div>
              <div className={`containers2 ${value > 0 ? "on" : ""}`}>
                <Info title="Utility Grid" main={`${value} kWh`} />
              </div>
              <div className={`containers2 ${value > 0 ? "on" : ""}`}>
                <Info title="Utility Grid" main={`${value} kWh`} />
              </div>
              <div className={`containers2 ${value > 0 ? "on" : ""}`}>
                <Info title="Utility Grid" main={`${value} kWh`} />
              </div>
              <div className={`containers2 ${value > 0 ? "on" : ""}`}>
                <Info title="Utility Grid" main={`${value} kWh`} />
              </div>
              <div className={`containers2 ${value > 0 ? "on" : ""}`}>
                <Info title="Utility Grid" main={`${value} kWh`} />
              </div>
            </div>
          </div>
          <div>helo</div>
          <div>helo</div>
          <div>helo</div>
          <div>helo</div>
          <div>helo</div>
        </Chrono>
      </div>
    </div>
  );
};

export default Timeline;
