import { Model, many, fk, oneToOne } from 'redux-orm';

export class User extends Model {

	User.modelName = 'User';
}

export class EntityGroup extends Model {

	EntityTag.modelName = 'EntityTag';
	EntityTag.fields = {
		project: fk('Project', 'groups'),
	}
}

export class Project extends Model {

	Project.modelName = 'Project';
	Project.fields = {
		tags: fk('EntityGroup'),
		users: many('User', 'projects'),
	}
}

export class EntityNode extends Model {

	EntityNode.modelName = 'EntityNode';
	EntityNode.fields = {
		adjacent: many('EntityNode'),
		groups: fk('EntityGroup')
	}
}

export class EntityData extends Model {

	EntityData.modelName = 'EntityData';
	EntityData.fields = {

	}
}





