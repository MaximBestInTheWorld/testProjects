import React from 'react';
import './ParamEditor.css';

class ParamEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paramValues: [...props.model.paramValues]
    };
  }

  handleParamChange = (paramId, value) => {
    this.setState(prevState => {
      const existingParam = prevState.paramValues.find(p => p.paramId === paramId);
      
      if (existingParam) {
        return {
          paramValues: prevState.paramValues.map(p => 
            p.paramId === paramId ? { ...p, value } : p
          )
        };
      } else {
        return {
          paramValues: [...prevState.paramValues, { paramId, value }]
        };
      }
    });
  };

  getModel() {
    return {
      ...this.props.model,
      paramValues: this.state.paramValues
    };
  }

  render() {
    const { params } = this.props;
    const { paramValues } = this.state;

    return (
      <div className="param-editor">
        {params.map(param => {
          const paramValue = paramValues.find(p => p.paramId === param.id);
          const value = paramValue ? paramValue.value : '';

          return (
            <div key={param.id} className="param-row">
              <label className="param-label">{param.name}</label>
              <input
                type="text"
                className="param-input"
                value={value}
                onChange={(e) => this.handleParamChange(param.id, e.target.value)}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default ParamEditor;