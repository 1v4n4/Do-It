import {
  setDate, Flag, Status, modalStatus,
} from '../src/modules/helpers';

describe('Flag', () => {
  const redFlag = '1';
  const yellowFlag = '2';
  const blueFlag = '3';
  const greenFlag = '4';
  it('returns a red flag for priority 1', () => {
    expect(Flag(redFlag)).toBe('<i class="fa fa-flag text-danger"></i>');
  });
  it('returns a yellow flag for priority 2', () => {
    expect(Flag(yellowFlag)).toBe('<i class="fa fa-flag text-warning"></i>');
  });
  it('returns a blue flag for priority 3', () => {
    expect(Flag(blueFlag)).toBe('<i class="fa fa-flag text-info"></i>');
  });
  it('returns a green flag for priority 2', () => {
    expect(Flag(greenFlag)).toBe('<i class="fa fa-flag text-success"></i>');
  });
});

describe('setDate', () => {
  it('sets today\'s date', () => {
    expect(setDate()).not.toBe(null);
  });
});

describe('Status', () => {
  it('returns check icon if task is finished', () => {
    expect(Status(true)).toBe('<i class="fa fa-check  text-dark statusBTN"></i>');
  });

  it('returns spinner icon if task is not finished', () => {
    expect(Status(false)).toBe('<i class="fa fa-spinner text-dark statusBTN"></i>');
  });
});

describe('Status', () => {
  it('returns check icon if task is finished', () => {
    expect(Status(true)).toBe('<i class="fa fa-check  text-dark statusBTN"></i>');
  });

  it('returns spinner icon if task is not finished', () => {
    expect(Status(false)).toBe('<i class="fa fa-spinner text-dark statusBTN"></i>');
  });
});

describe('modalStatus', () => {
  it('returns \'Finished\' if task is done', () => {
    expect(modalStatus(true)).toBe('Finished');
  });

  it('returns \'Pending\' if task is not done', () => {
    expect(modalStatus(false)).toBe('Pending');
  });
});