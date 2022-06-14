export const createLogger = () => {
  let type = '';
  let message = '';
  let arr = [];
  let dateTime = new Date();

  function warn(messageOfWarn) {
    type = 'warn';
    message = messageOfWarn;
    arr.push({ message, type, dateTime });
  }

  function error(messageOfError) {
    type = 'error';
    message = messageOfError;
    arr.push({ message, type, dateTime });
  }

  function log(messageOfLog) {
    type = 'log';
    message = messageOfLog;
    arr.push({ message, type, dateTime });
  }

  function getRecords(type) {
    if (type !== undefined) {
      return arr
        .filter(({ type: elem }) => elem === type)
        .sort((a, b) => b.dateTime - a.dateTime);
    }
    return arr.sort((a, b) => b.dateTime - a.dateTime);
  }
  return {
    warn,
    error,
    log,
    getRecords,
  };
};

// examples
const logger1 = createLogger();
logger1.log('User logged in');
logger1.warn('User is tring to ented restricted page');
logger1.log('User logged out');
logger1.error('Unexpected error on the site');

console.log(logger1.getRecords()); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
logger1.getRecords('log'); // ===> [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
logger1.getRecords('error'); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
logger1.getRecords('warn'); // ===> [{ message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }]
