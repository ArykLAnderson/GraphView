import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import orm from './registerORM';

// eslint-disable-next-line
const emptyDBState = orm.getEmptyState();
const session = orm.session(emptyDBState);
const User = session.User;


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
// User.withId();

// import { Model, many, attr, ORM } from 'redux-orm';

// export class GraphNode extends Model {}
// GraphNode.modelName = 'GraphNode';
// GraphNode.fields = {
// 	oid: attr(),
// 	name: attr(),
// 	description: attr(),
// 	data: attr(),
// 	adjacent: many('GraphNode'),
// };

// const orm = new ORM();
// orm.register(GraphNode);
// const emptyDBState = orm.getEmptyState();