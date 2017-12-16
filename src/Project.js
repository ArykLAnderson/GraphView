import React, { Component } from 'react';

class Project {

	constructor(title, description, data) {
		this.title = title;
		this.description = description;
		this.tags = {};
		this.nodeRegistry = {};
		this.descView = new ProjectDescriptionView(this);
		this.fullView = new ProjectFullView(this);
	}
}