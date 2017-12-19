import { Model, many, fk, oneToOne, attr } from 'redux-orm';
import React from 'react';

export class User extends Model {}
User.modelName = 'User';
User.fields = {
	uid: attr(),
	displayName: attr(),
	signature: attr(),
};


export class Project extends Model {
	// static reducer(state, action, Project, session) {
	// 	const { payload, type } = action;
	// 	switch (type) {
	// 		case 
	// 	}
	// }
}
Project.modelName = 'Project';
Project.fields = {
	oid: attr(),
	name: attr(),
	description: attr(),
	tags: fk('EntityGroup'),
	users: many('User', 'projects'),
};


export class EntityGroup extends Model {}
EntityGroup.modelName = 'EntityGroup';
EntityGroup.fields = {
	oid: attr(),
	name: attr(),
	description: attr(),
	project: fk('Project', 'groups'),
};

export class NodeEdge extends Model {}
NodeEdge.modelName = 'NodeEdge';
NodeEdge.fields = {

	id: attr(),
	from: fk('GraphNode', 'to'),
	to: fk('GraphNode', 'from'),
}


export class GraphNode extends Model {}
GraphNode.modelName = 'GraphNode';
GraphNode.fields = {
	oid: attr(),
	name: attr(),
	type: attr(),
	description: attr(),
	adjacent: many({
		to: 'GraphNode',
		through: 'NodeEdge',
	}),
	groups: many('EntityGroup', 'nodes'),
};

export class EntityData extends Model {}
EntityData.modelName = 'EntityData';
EntityData.fields = {
	parent: oneToOne('GraphNode'),
	data: attr(),
};

