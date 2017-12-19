import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Model, many, fk, oneToOne, attr, ORM } from 'redux-orm';

export class EntityNode extends Model {}
EntityNode.modelName = 'EntityNode';
EntityNode.fields = {
	oid: attr(),
	name: attr(),
	description: attr(),
	adjacent: many('EntityNode', 'adjacent'),
};

const orm = new ORM();
orm.register(EntityNode);
const emptyDBState = orm.getEmptyState();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();