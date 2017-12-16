import React, { Component } from 'react';

class EntityNode {

	constructor(title, description, data) {
		// this.id = IDFactory.next();
		this.title = title;
		this.description = description;
		this.data = data;
		this.adjacent = {};
		this.tags = {};
	}
}