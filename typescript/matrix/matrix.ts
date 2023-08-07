export class Matrix {
  private _rows: number[][] = [];
  private _columns: number[][] = []

  constructor(matrix: string) {
    this.createRows(matrix);
    this.createColumns();
  }

  get rows(): number[][] {
    return this._rows;
  }

  get columns(): number[][] {
    return this._columns;
  }

  private createRows(matrix: string) {
    matrix.split('\n').forEach(row => {
      let columns = row.trim().split(' ').map(column => {
        return parseInt(column)
      });
      this._rows.push(columns);
    });
  }

  private createColumns() {
    for (let i = 0; i < this._rows[0].length; i++) {
      this._columns[i] = this._rows.map(row => { return row[i] });
    }
  }
}
