import { comforta, lobster } from '../font';

export default function Table() {
  const data = [
    {
      column1: 'Aéroport international de Genève',
      column2: '86 km',
    },
    {
      column1: 'Aéroport international de Lyon Saint-Exupéry',
      column2: '206 km',
    },
    {
      column1: 'Aéroport Chambéry Savoie Mont-Blanc,',
      column2: '126 km',
    },
    {
      column1: 'Aéroport Annecy Mont-Blanc',
      column2: '84 km',
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white  w-full">
        {/* <thead>
          <tr>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Column 1
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Column 2
            </th>
          </tr>
        </thead> */}
        {/* <tbody className="bg-white divide-y divide-gray-1000">
          {data.map((row, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {row.column1}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {row.column2}
              </td>
            </tr>
          ))}
        </tbody> */}

        <div className="p-2">
          {data.map((row, index) => (
            <div>
              <div
                key={index}
                className={`${comforta.className} p-2 flex justify-between`}
              >
                <a className=" text-sm font-medium text-gray-900">
                  {row.column1}
                </a>
                <a className=" text-sm text-gray-500">{row.column2}</a>
              </div>

              <hr />
            </div>
          ))}
        </div>
      </table>
    </div>
  );
}
