import { comforta, lobster } from '../font';

export default function Plane() {
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
      <div className="min-w-full bg-white  w-full">
        <h4 className="uppercase text-[20px] mt-5">en avion </h4>

        <div className="p-2">
          {data.map((row, index) => (
            <div>
              <div
                key={index}
                className={`${comforta.className} p-2 flex justify-between`}
              >
                <a className=" text-[10px] font-light tracking-wide text-gray-900">
                  {row.column1}
                </a>
                <a className=" text-[10px] text-gray-500">{row.column2}</a>
              </div>

              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
