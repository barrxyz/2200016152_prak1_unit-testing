import { expect } from 'chai';
import { tambah, kali } from './math.js';

describe('Pengujian Tambahan untuk Fungsi Matematika', function() {
  it('seharusnya mengembalikan error saat menambahkan string "2" dan 2', function() {
    expect(() => tambah("2", 2)).to.throw('Input harus berupa angka');
  });

  it('seharusnya mengembalikan error saat mengalikan string "2" dan 3', function() {
    expect(() => kali("2", 3)).to.throw('Input harus berupa angka');
  });

  it('seharusnya mengembalikan error saat menambahkan null dan 2', function() {
    expect(() => tambah(null, 2)).to.throw('Input tidak boleh null');
  });

  it('seharusnya mengembalikan error saat mengalikan null dan 3', function() {
    expect(() => kali(null, 3)).to.throw('Input tidak boleh null');
  });
});