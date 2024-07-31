/// <reference path="./js/crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './js/crud';

// Create an object called row with the type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
};

// Create a const variable named newRowID with the type RowID
const newRowID: RowID = CRUD.insertRow(row);

// Create a const variable named updatedRow with the type RowElement and update row with an age field set to 23
const updatedRow: RowElement = { 
  firstName: 'Guillaume',
  lastName: 'Salva',
  age: 23 
};

// Call the updateRow and deleteRow commands
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
