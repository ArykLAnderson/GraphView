import {ORM} from 'redux-orm';
import { User, Project, EntityGroup, GraphNode, EntityData, NodeEdge } from './models'

const orm = new ORM();
orm.register(User, Project, EntityGroup, GraphNode, EntityData, NodeEdge);

export default orm;