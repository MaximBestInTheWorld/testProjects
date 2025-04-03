import React from 'react';
import ParamEditor from './components/ParamEditor.jsx';

const exampleParams = [
  { id: 1, name: "Назначение", type: "string" },
  { id: 2, name: "Длина", type: "string" }
];

const exampleModel = {
  paramValues: [
    { paramId: 1, value: "повседневное" },
    { paramId: 2, value: "макси" }
  ],
  colors: []
};

function App() {
  return (
    <div className="app" style={{ padding: '20px' }}>
      <h1>Редактор параметров</h1>
      <ParamEditor 
        params={exampleParams} 
        model={exampleModel} 
      />
    </div>
  );
}

export default App;