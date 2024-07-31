import { RowID, RowElement } from '../interface';

// Type declarations for the crud.js functions
export function insertRow(row: RowElement): RowID;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): RowID;
