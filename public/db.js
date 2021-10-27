let db;
let budgetVersion;

// Create a new db request for a "budget" database.
const request = indexedDB.open('BudgetDB', budgetVersion || 21);

request.onupgradeneeded = function (e) {
  console.log('Upgrade needed in IndexDB✨');

  const { oldVersion } = e;
  db = e.target.result;
  const newVersion = e.newVersion || db.version;

  console.log(`DB Updated from version ${oldVersion}👴 to ${newVersion}👶`);


  if (db.objectStoreNames.length === 0) {
    db.createObjectStore('BudgetStore', { autoIncrement: true });
  }
};

request.onerror = function (e) {
  console.log(`Woops!🙊 ${e.target.errorCode}`);
};
