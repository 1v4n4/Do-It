/**
 * @jest-environment jsdom
 */

import { expect } from '@jest/globals';

import {
  makesToday, makesEditForm, reasignsTasks, deletesAllTasks, changesStatus,
} from '../src/modules/helpers';

const tasks = [
  {
    title: "My important project's very important task",
    projectsN: 'My important project',
    comment: 'No comment',
    priority: '1',
    deadline: '2021-07-15',
    finished: false,
  },
  {
    title: "My important project's important task",
    projectsN: 'My important project',
    comment: '',
    priority: '2',
    deadline: '2021-07-14',
    finished: true,
  },
];

describe('changesStatus', () => {
  it('changes pending task\'s status to finished(true)', () => {
    changesStatus(0, tasks);
    expect(tasks[0].finished).toBe(true);
  });
  it('changes finished task\'s status to pending(false)', () => {
    changesStatus(1, tasks);
    expect(tasks[1].finished).toBe(false);
  });
});

describe('makesToday', () => {
  it('makes section for today\'s tasks', () => {
    expect(makesToday(tasks).innerHTML).toBeDefined();
  });

  it('makes section for today\'s tasks', () => {
    expect(makesToday(tasks).innerHTML).not.toBe(null);
  });
});

describe('makesEditForm', () => {
  it('makes form for editing tasks', () => {
    const edit = makesEditForm(tasks);
    expect(edit.innerHTML).toBeDefined();
  });

  it('makes form for editing tasks', () => {
    const edit = makesEditForm(tasks);
    expect(edit.innerHTML).not.toBe(null);
  });
});

describe('reasignsTasks', () => {
  it('reasignes tasks if project\'s name is changed', () => {
    const newName = reasignsTasks('My important project', 'My very important project', tasks);
    expect(newName[0].projectsN).toBe('My very important project');
  });

  it('reasignes tasks if project\'s name is changed', () => {
    const newName = reasignsTasks('My important project', 'My very important project', tasks);
    expect(newName[1].projectsN).toBe('My very important project');
  });

  it('reasignes tasks if project\'s name is changed', () => {
    const newName = reasignsTasks('My important project', 'My very important project', tasks);
    expect(newName).not.toContain('My important project');
  });
});

describe('deletesAllTasks', () => {
  it('deletes all tasks with the given project\'s name', () => {
    const deletedTasks = deletesAllTasks('My very important project', tasks);
    expect(deletedTasks).not.toBe(null);
  });

  const tasksResurrection = [
    {
      title: "My important project's very important task",
      projectsN: 'My important project',
      comment: 'No comment',
      priority: '1',
      deadline: '2021-07-15',
      finished: false,
    },
    {
      title: "My important project's important task",
      projectsN: 'My important project',
      comment: '',
      priority: '2',
      deadline: '2021-07-14',
      finished: true,
    },
    {
      title: "My very important project's important task",
      projectsN: 'My very important project',
      comment: '',
      priority: '2',
      deadline: '2021-07-14',
      finished: true,
    },
  ];

  it('deletes all tasks with the given project\'s name', () => {
    const deletedTaskss = deletesAllTasks('My very important project', tasksResurrection);
    expect(deletedTaskss).not.toContain('My very important project');
  });

  it('deletes all tasks with the given project\'s name', () => {
    const deletedTaskss = deletesAllTasks('My very important project', tasksResurrection);
    expect(deletedTaskss).toHaveLength(2);
  });
});