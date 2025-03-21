import React from 'react';

const data = [
  { name: 'Alice', age: 25, role: 'Engineer' },
  { name: 'Bob', age: 30, role: 'Designer' },
  { name: 'Charlie', age: 22, role: 'Product Manager' },
];

const Table = ({ data }) => {
  const columns = Object.keys(data[0]);

  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full border border-gray-300'>
        <thead>
          <tr className='bg-gray-200'>
            {columns.map((col) => (
              <th key={col} className='px-4 py-2 border border-gray-300'>
                {col.toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className='border border-gray-300'>
              {columns.map((col) => (
                <td key={col} className='px-4 py-2 border border-gray-300'>
                  {row[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Screen = () => {
  return (
    <div className='p-4'>
      <Table data={data} />
    </div>
  );
};

export default Screen;
