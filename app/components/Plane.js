import { comforta, lobster } from '../font';

export default function Plane() {
  const data = [
    {
      column1: 'Aéroport Int de Genève',
      column2: '86 km',
    },
    {
      column1: 'Aéroport Int de Lyon Saint-Exupéry',
      column2: '206 km',
    },
    {
      column1: 'Aéroport Chambéry Savoie Mont-Blanc',
      column2: '126 km',
    },
    {
      column1: 'Aéroport Annecy Mont-Blanc',
      column2: '84 km',
    },
  ];

  return (
    <div className="overflow-x-auto">
      <div className="min-w-full bg-white w-full">
        <h4 className="uppercase text-[15px] md:text-[20px] mt-5">en avion</h4>

        <div className="p-2 text-[10px] md:text-[12px]">
          {data.map((row, index) => (
            <div key={index}>
              <div className={`${comforta.className} p-2 flex justify-between`}>
                <span className="font-light tracking-wide text-gray-900">
                  {row.column1}
                </span>
                <span className="text-gray-500">{row.column2}</span>
              </div>

              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
