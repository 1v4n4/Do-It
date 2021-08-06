/**
 * @jest-environment jsdom
 */

import { expect } from '@jest/globals';
import { deleteProject, checkProject, Project } from '../src/modules/projects';

describe('Project', () => {
  it('creates a new project', () => {
    const newProject = new Project('My new project', "My new project's decription");
    expect(newProject).toEqual({ description: "My new project's decription", name: 'My new project' });
  });

  it('creates a new project', () => {
    const newProject = new Project('My new project', "My new project's decription");
    expect(newProject.name).toEqual('My new project');
  });

  it('creates a new project', () => {
    const newProject = new Project('My new project', "My new project's decription");
    expect(newProject.description).toEqual("My new project's decription");
  });
});

describe('deleteProject', () => {
  const myProjects = [
    { name: 'My project', description: "My project's description" },
    { name: 'My important project', description: "My important project's description" },
    { name: 'My very important project', description: "My very important project's description" },
  ];

  it('deletes project', () => {
    expect(deleteProject(myProjects, 'My important project')).toHaveLength(1);
  });

  it('deletes project', () => {
    expect(deleteProject(myProjects, 'My very important project')).toEqual([
      { name: 'My very important project', description: "My very important project's description" }]);
  });

  it('deletes project', () => {
    expect(deleteProject(myProjects, 'My important project')).toBeInstanceOf(Array);
  });
});

describe('checkProject', () => {
  const myProjects = [
    { name: 'My project', description: "My project's description" },
    { name: 'My important project', description: "My important project's description" },
    { name: 'My very important project', description: "My very important project's description" },
  ];

  it('checks if the project with same name exists', () => {
    expect(checkProject('My project', myProjects)).toBe(true);
  });

  it('checks if the project with same name exists', () => {
    expect(checkProject("This one doesn't exists", myProjects)).toBe(false);
  });
});